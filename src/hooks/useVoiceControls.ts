import { useEffect, useState, useCallback, useRef } from "react";
import { VoiceCommands } from "../types/voice";

export function useVoiceControls() {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [confidence, setConfidence] = useState(0);
  const [voiceCommands, setVoiceCommands] = useState<VoiceCommands>({
    forward: false,
    backward: false,
    left: false,
    right: false,
    faster: false,
    slower: false,
    stop: false,
  });

  const recognitionRef = useRef<any>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastCommandTime = useRef<number>(0);
  const shouldBeListening = useRef<boolean>(false);

  // Regex patterns for robust command matching
  const commandPatterns = {
    forward: [/\b(forward|go|move|start|ahead|drive)\b/i],
    backward: [/\b(backward|back|reverse|go back|move back|go backward)\b/i],
    left: [/\b(left|turn left|go left|steer left|lift)\b/i],
    right: [/\b(right|turn right|go right|steer right)\b/i],
    faster: [/\b(faster|speed up|accelerate|increase speed|go faster)\b/i],
    slower: [/\b(slower|slow down|decelerate|reduce speed|go slower)\b/i],
    stop: [/\b(stop|brake|halt|stop car|emergency stop|pause)\b/i],
  };

  // Check if speech recognition is supported
  useEffect(() => {
    const isSpeechRecognitionSupported = "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
    setIsSupported(isSpeechRecognitionSupported);

    if (!isSpeechRecognitionSupported) {
      console.warn("Speech recognition not supported in this browser");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onstart = () => {
      setIsListening(true);
      shouldBeListening.current = true;
      setTranscript("🎧 Listening for car commands...");
      console.log("Voice recognition started");
    };

    recognitionRef.current.onresult = (event: any) => {
      let finalTranscript = "";
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        const conf = event.results[i][0].confidence;

        if (event.results[i].isFinal) {
          finalTranscript += transcript;
          setConfidence(conf);
          processVoiceCommand(transcript, conf);
        } else {
          interimTranscript += transcript;
        }
      }

      const currentTranscript = finalTranscript || interimTranscript;
      if (currentTranscript.trim()) {
        setTranscript(currentTranscript);
      }
    };

    recognitionRef.current.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      if (event.error === "not-allowed") {
        setTranscript("❌ Microphone access denied. Please allow microphone access.");
        setIsListening(false);
        shouldBeListening.current = false;
      } else {
        setTranscript(`Error: ${event.error}`);
      }
    };

    recognitionRef.current.onend = () => {
      console.log("Voice recognition ended");
      setIsListening(false);
      
      // Only restart if we should still be listening
      if (shouldBeListening.current) {
        console.log("Restarting speech recognition...");
        setTimeout(() => {
          try {
            if (recognitionRef.current && shouldBeListening.current) {
              recognitionRef.current.start();
            }
          } catch (e) {
            console.error("Failed to restart speech recognition:", e);
          }
        }, 1000);
      }
    };

    return () => {
      shouldBeListening.current = false;
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (error) {
          console.error("Error aborting speech recognition:", error);
        }
      }
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const processVoiceCommand = useCallback((command: string, confidence: number = 0) => {
    const lowerCommand = command.toLowerCase().trim();
    const now = Date.now();
    
    console.log("Processing command:", lowerCommand, "Confidence:", confidence);

    // Prevent rapid-fire commands (minimum 500ms between commands)
    if (now - lastCommandTime.current < 500) {
      console.log("Command too soon, ignoring");
      return;
    }

    if (confidence < 0.3 && !lowerCommand.includes('stop')) {
      console.log("Command confidence too low, ignoring");
      return;
    }

    let matched: Partial<VoiceCommands> = {};
    let matchedKey: keyof VoiceCommands | null = null;

    (Object.keys(commandPatterns) as (keyof VoiceCommands)[]).forEach((key) => {
      const patterns = commandPatterns[key];
      for (const pattern of patterns) {
        if (pattern.test(lowerCommand)) {
          matched[key] = true;
          if (!matchedKey) matchedKey = key;
          break;
        }
      }
    });

    if (!matchedKey) {
      console.log("No command matched");
      return;
    }

    lastCommandTime.current = now;

    let newCommands: VoiceCommands = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      faster: false,
      slower: false,
      stop: false,
    };

    if (matchedKey && Object.prototype.hasOwnProperty.call(newCommands, matchedKey)) {
      newCommands[matchedKey as keyof VoiceCommands] = true;
    }

    setVoiceCommands(newCommands);
    setTranscript(`✅ Command: ${matchedKey}`);

    // Clear commands after 1 second but keep listening
    setTimeout(() => {
      setVoiceCommands({
        forward: false,
        backward: false,
        left: false,
        right: false,
        faster: false,
        slower: false,
        stop: false,
      });
      setTranscript("🎧 Listening for car commands...");
    }, 1000);
  }, [commandPatterns]);

  const startListening = useCallback(() => {
    if (!isSupported) {
      setTranscript("Speech recognition not supported");
      return;
    }

    try {
      if (recognitionRef.current && !isListening) {
        setVoiceCommands({
          forward: false,
          backward: false,
          left: false,
          right: false,
          faster: false,
          slower: false,
          stop: false,
        });
        lastCommandTime.current = 0;
        shouldBeListening.current = true;
        recognitionRef.current.start();
        setIsListening(true);
      }
    } catch (error) {
      console.error("Error starting speech recognition:", error);
      setTranscript("Error starting voice recognition");
    }
  }, [isListening, isSupported]);

  const stopListening = useCallback(() => {
    shouldBeListening.current = false;
    if (recognitionRef.current && isListening) {
      try {
        recognitionRef.current.abort();
      } catch (error) {
        console.error("Error stopping speech recognition:", error);
      }
    }
    
    setIsListening(false);
    setVoiceCommands({
      forward: false,
      backward: false,
      left: false,
      right: false,
      faster: false,
      slower: false,
      stop: false,
    });
    setTranscript("");
    setConfidence(0);
    lastCommandTime.current = 0;
  }, [isListening]);

  return {
    isListening,
    isSupported,
    voiceCommands,
    transcript,
    confidence,
    startListening,
    stopListening,
  };
}