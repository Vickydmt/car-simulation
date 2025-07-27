import { PublicApi, RaycastVehiclePublicApi } from "@react-three/cannon";
import { useEffect, useState, useRef } from "react";
import { START_CAR_POSITION, START_CAR_ROTATION_Y } from "../utils";
import { VoiceCommands } from "../types/voice";

const STEERING_VALUE_BACK = 0.05;
const ENGINE_FORCE_SLOW = 60; // Increased from 25 to 60 for faster forward movement
const ENGINE_FORCE_FAST = 150; // Increased from 100 to 150 for maximum speed
const BRAKE_BACK = 10;

const CAR_CONTROL_KEYS = ["a", "d", "r", "s", "w", " ", "enter"] as const;
const CAR_CONTROL_KET_SET = new Set(CAR_CONTROL_KEYS);
type CarControlKey = (typeof CAR_CONTROL_KEYS)[number];

function isCarControlKey(key: string): key is CarControlKey {
  return CAR_CONTROL_KET_SET.has(key as CarControlKey);
}

export default function useControls(
  vehicleApi: RaycastVehiclePublicApi,
  chassisApi: PublicApi,
  setThirdPerson: React.Dispatch<React.SetStateAction<boolean>>,
  voiceCommands?: VoiceCommands
) {
  // Engine force state for voice speed control
  const engineForceRef = useRef(ENGINE_FORCE_SLOW);
  const lastVoiceCommandRef = useRef<string>("");

  function turnLeft() {
    vehicleApi.setSteeringValue(STEERING_VALUE_BACK, 2);
    vehicleApi.setSteeringValue(STEERING_VALUE_BACK, 3);
  }
  function turnRight() {
    vehicleApi.setSteeringValue(-STEERING_VALUE_BACK, 2);
    vehicleApi.setSteeringValue(-STEERING_VALUE_BACK, 3);
  }
  function goStraight() {
    vehicleApi.setSteeringValue(0, 2);
    vehicleApi.setSteeringValue(0, 3);
  }
  function accelerateForward(force = engineForceRef.current) {
    vehicleApi.applyEngineForce(force, 2);
    vehicleApi.applyEngineForce(force, 3);
  }
  function accelerateBackward(force = ENGINE_FORCE_SLOW) {
    vehicleApi.applyEngineForce(-force, 2);
    vehicleApi.applyEngineForce(-force, 3);
  }
  function deaccelerate() {
    vehicleApi.applyEngineForce(0, 2);
    vehicleApi.applyEngineForce(0, 3);
  }
  function brake() {
    vehicleApi.setBrake(BRAKE_BACK, 2);
    vehicleApi.setBrake(BRAKE_BACK, 3);
  }
  function ease() {
    vehicleApi.setBrake(0, 2);
    vehicleApi.setBrake(0, 3);
  }
  function resetPlace() {
    chassisApi.position.set(...START_CAR_POSITION);
    chassisApi.velocity.set(0, 0, 0);
    chassisApi.angularVelocity.set(0, 0, 0);
    chassisApi.rotation.set(0, START_CAR_ROTATION_Y, 0);
  }
  function switchPerson() {
    setThirdPerson((third) => !third);
  }

  const [keys, setKeys] = useState<Record<CarControlKey, boolean>>({
    a: false,
    d: false,
    r: false,
    s: false,
    w: false,
    " ": false,
    enter: false,
  });

  useEffect(() => {
    function handleKeyDown(ev: KeyboardEvent) {
      if (ev.ctrlKey) return;
      const key = ev.key.toLowerCase();
      if (isCarControlKey(key) && keys[key] === false) {
        setKeys((keys) => ({ ...keys, [key]: true }));
      }
      ev.preventDefault();
    }

    function handleKeyUp(ev: KeyboardEvent) {
      if (ev.ctrlKey) return;
      const key = ev.key.toLowerCase();
      if (isCarControlKey(key) && keys[key] === true) {
        setKeys((keys) => ({ ...keys, [key]: false }));
      }
      ev.preventDefault();
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  useEffect(() => {
    // If a voice command is active, it overrides keyboard
    if (voiceCommands && Object.values(voiceCommands).some(Boolean)) {
      // Only one command at a time, prioritize stop > others
      if (voiceCommands.stop) {
        // Force stop - brake and set engine force to 0
        brake();
        deaccelerate();
        vehicleApi.applyEngineForce(0, 2);
        vehicleApi.applyEngineForce(0, 3);
        lastVoiceCommandRef.current = "stop";
        return;
      } else if (voiceCommands.forward) {
        // Start/forward goes slow
        engineForceRef.current = ENGINE_FORCE_SLOW;
        accelerateForward();
        goStraight();
        lastVoiceCommandRef.current = "forward";
        return;
      } else if (voiceCommands.backward) {
        // Backward goes slow
        accelerateBackward();
        goStraight();
        lastVoiceCommandRef.current = "backward";
        return;
      } else if (voiceCommands.left) {
        turnLeft();
        deaccelerate();
        lastVoiceCommandRef.current = "left";
        return;
      } else if (voiceCommands.right) {
        turnRight();
        deaccelerate();
        lastVoiceCommandRef.current = "right";
        return;
      } else if (voiceCommands.faster) {
        // Faster goes fast speed
        engineForceRef.current = ENGINE_FORCE_FAST;
        accelerateForward();
        goStraight();
        lastVoiceCommandRef.current = "faster";
        return;
      } else if (voiceCommands.slower) {
        // Slower goes back to slow speed
        engineForceRef.current = ENGINE_FORCE_SLOW;
        accelerateForward();
        goStraight();
        lastVoiceCommandRef.current = "slower";
        return;
      }
    }

    // --- Keyboard fallback ---
    if (keys["a"] && keys["d"]) {
      goStraight();
    } else if (keys["a"]) {
      turnLeft();
    } else if (keys["d"]) {
      turnRight();
    } else {
      goStraight();
    }

    if (keys["w"] && keys["s"]) {
      deaccelerate();
    } else if (keys["w"]) {
      accelerateForward();
    } else if (keys["s"]) {
      accelerateBackward();
    } else {
      deaccelerate();
    }

    if (keys[" "]) {
      brake();
    } else {
      ease();
    }

    if (keys["r"]) {
      resetPlace();
    }

    if (keys["enter"]) {
      switchPerson();
    }
  }, [keys, voiceCommands, vehicleApi, chassisApi]);
}