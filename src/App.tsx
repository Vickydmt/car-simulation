import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import * as dat from "dat.gui";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls as VanillaOrbitControls } from "three-stdlib";
import { LandmarkChart, LandmarkName } from "./LandmarkChart.tsx";
import MainScene from "./MainScene.tsx";
import { useProgress } from "@react-three/drei";
import { useMessages } from "./hooks/useMessages.ts";
import { useVoiceControls } from "./hooks/useVoiceControls.ts";

export function App() {
  const setCarPosition = useState(
    new THREE.Vector3(NaN, NaN, NaN)
  )[1];
  const [landmark, setLandmark] = useState<LandmarkName>(null);
  const debug = useRef(false);
  const orbit = useRef<VanillaOrbitControls>(null);
  const [thirdPerson, setThirdPerson] = useState(false);
  const [message, setMessage, subMessage] = useMessages();
  const [loading, setLoading] = useState<string | null>(null);
  const { progress, item } = useProgress();

  // Voice controls
  const { isListening, isSupported, voiceCommands, transcript, startListening, stopListening } = useVoiceControls();

  useEffect(() => {
    const s: string = item.startsWith("/")
      ? `Loading ${item.split("/").pop()} ${progress.toFixed(1)} %`
      : `Loading ${progress.toFixed(1)} %`;
    setLoading(progress === 100 ? null : s);
  }, [progress, item]);

  useEffect(() => {
    if (orbit.current === null) return;

    const gui = new dat.GUI();

    // Debug mode
    gui.add(debug, "current").name("Debug mode");

    // Person ("first" or "third")
    gui
      .add({ v: thirdPerson ? "third" : "first" }, "v", ["first", "third"])
      .name("Person")
      .onChange((v) => setThirdPerson(v === "third"));

    // Orbit controls's auto rotate
    const orbitAutoRotate = gui
      .add(orbit.current, "autoRotate")
      .name("Auto rotate");
    let lastOrbitAutoRotate: boolean;
    function handleMouseDown() {
      lastOrbitAutoRotate = orbit.current!.autoRotate;
      orbitAutoRotate.setValue(false);
    }
    function handleMouseUp() {
      orbitAutoRotate.setValue(lastOrbitAutoRotate);
    }
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      gui.destroy();
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [orbit.current, thirdPerson]);

  return (
    <>
      <Canvas shadows style={{ backgroundColor: "lightblue" }}>
        <Physics gravity={[0, -9.81, 0]}>
          <MainScene
            landmark={landmark}
            debug={debug}
            thirdPerson={thirdPerson}
            setThirdPerson={setThirdPerson}
            setCarPosition={setCarPosition}
            setLandmark={setLandmark}
            setMessage={setMessage}
            orbit={orbit}
            voiceCommands={voiceCommands}
          />
        </Physics>
      </Canvas>
      
      {/* Voice Control UI */}
      <div className="voice-control-panel">
        <h3>Voice Control</h3>
        {!isSupported ? (
          <p className="voice-error">Speech recognition not supported in this browser</p>
        ) : (
          <>
            <button 
              className={`voice-button ${isListening ? 'listening' : ''}`}
              onClick={isListening ? stopListening : startListening}
            >
              {isListening ? '🛑 Stop Listening' : '🎤 Start Voice Control'}
            </button>
            
            {transcript && (
              <div className="voice-transcript">
                <p><strong>Transcript:</strong></p>
                <p>{transcript}</p>
              </div>
            )}
            
            {isListening && (
              <div className="voice-status">
                <p>🎧 Listening for commands...</p>
                <p>Say: "forward", "backward", "left", "right", "faster", "slower", "stop"</p>
              </div>
            )}
            
            {voiceCommands && Object.values(voiceCommands).some(Boolean) && (
              <div className="active-commands">
                <p>🚗 Active commands:</p>
                <ul>
                  {voiceCommands.forward && <li>⬆️ Forward</li>}
                  {voiceCommands.backward && <li>⬇️ Backward</li>}
                  {voiceCommands.left && <li>⬅️ Left</li>}
                  {voiceCommands.right && <li>➡️ Right</li>}
                  {voiceCommands.faster && <li>⚡ Faster</li>}
                  {voiceCommands.slower && <li>🐌 Slower</li>}
                  {voiceCommands.stop && <li>🛑 Stop</li>}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
      {loading && <div className="loading">{loading}</div>}
      {message && (
        <div className="message">
          <img src="/warning.png" alt="warning" width={"100px"} />
          <p>{message}</p>
          <p>{subMessage}</p>
          <div className="chart-close-button" onClick={() => setMessage(null)}>
            {"[x]"}
          </div>
        </div>
      )}
      {landmark && <LandmarkChart name={landmark} />}
    </>
  );
}
