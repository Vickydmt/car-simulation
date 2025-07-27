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

    // Detect browser for specific handling
    const isChrome = navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('Edge');
    const isFirefox = navigator.userAgent.includes('Firefox');
    const isSafari = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
    const isEdge = navigator.userAgent.includes('Edge');
    
    console.log("Browser detected:", { isChrome, isFirefox, isSafari, isEdge });

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    try {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = "en-US";
      
      // Add additional settings for better laptop compatibility
      recognitionRef.current.maxAlternatives = 1;
      
      // Browser-specific settings
      if (isChrome) {
        // Chrome works well with default settings
        console.log("Using Chrome-optimized settings");
      } else if (isFirefox) {
        // Firefox might need different handling
        console.log("Using Firefox-optimized settings");
        recognitionRef.current.continuous = false; // Firefox sometimes has issues with continuous
      } else if (isSafari) {
        // Safari might need different handling
        console.log("Using Safari-optimized settings");
      } else if (isEdge) {
        // Edge works well with default settings
        console.log("Using Edge-optimized settings");
      }
    } catch (error) {
      console.error("Error initializing speech recognition:", error);
      setIsSupported(false);
      return;
    }

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
      
      // Handle different error types
      switch (event.error) {
        case "not-allowed":
          setTranscript("❌ Microphone access denied. Please allow microphone access in your browser settings.");
          setIsListening(false);
          shouldBeListening.current = false;
          break;
        case "no-speech":
          // This is normal - just restart listening
          console.log("No speech detected, restarting...");
          setTranscript("🎧 Listening for car commands...");
          // Restart after a short delay
          setTimeout(() => {
            if (shouldBeListening.current && recognitionRef.current) {
              try {
                recognitionRef.current.start();
              } catch (e) {
                console.error("Failed to restart after no-speech:", e);
              }
            }
          }, 100);
          break;
        case "audio-capture":
          setTranscript("❌ No microphone found. Please connect a microphone and try again.");
          setIsListening(false);
          shouldBeListening.current = false;
          break;
        case "network":
          setTranscript("❌ Network error. Please check your internet connection.");
          setIsListening(false);
          shouldBeListening.current = false;
          break;
        case "aborted":
          // This is normal when stopping
          console.log("Speech recognition aborted");
          break;
        default:
          setTranscript(`❌ Speech recognition error: ${event.error}. Please try again.`);
          // Try to restart for other errors
          setTimeout(() => {
            if (shouldBeListening.current && recognitionRef.current) {
              try {
                recognitionRef.current.start();
              } catch (e) {
                console.error("Failed to restart after error:", e);
                setIsListening(false);
                shouldBeListening.current = false;
              }
            }
          }, 2000);
          break;
      }
    };

    recognitionRef.current.onend = () => {
      console.log("Voice recognition ended");
      setIsListening(false);
      
      // Only restart if we should still be listening
      if (shouldBeListening.current) {
        console.log("Restarting speech recognition...");
        // Add longer delay for laptops that might need more time
        setTimeout(() => {
          try {
            if (recognitionRef.current && shouldBeListening.current) {
              recognitionRef.current.start();
            }
          } catch (e) {
            console.error("Failed to restart speech recognition:", e);
            // If restart fails, try one more time after a longer delay
            setTimeout(() => {
              try {
                if (recognitionRef.current && shouldBeListening.current) {
                  recognitionRef.current.start();
                }
              } catch (retryError) {
                console.error("Failed to restart speech recognition on retry:", retryError);
                setTranscript("❌ Voice recognition stopped. Click the button to restart.");
                setIsListening(false);
                shouldBeListening.current = false;
              }
            }, 3000);
          }
        }, 1500); // Increased delay for laptop compatibility
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
        // Reset state
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
        
        // Add a small delay to ensure browser is ready
        setTimeout(() => {
          try {
            if (recognitionRef.current && shouldBeListening.current) {
              recognitionRef.current.start();
              setIsListening(true);
              setTranscript("🎧 Starting voice recognition...");
            }
          } catch (startError) {
            console.error("Error starting speech recognition:", startError);
            setTranscript("❌ Failed to start voice recognition. Please try again.");
            setIsListening(false);
            shouldBeListening.current = false;
          }
        }, 100);
      }
    } catch (error) {
      console.error("Error in startListening:", error);
      setTranscript("❌ Error starting voice recognition. Please refresh the page and try again.");
      setIsListening(false);
      shouldBeListening.current = false;
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
