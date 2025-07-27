import { Triplet, useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls as VanillaOrbitControls } from "three-stdlib";
import { useControls, useWheels } from "../hooks";
import { WheellessCar } from "../models";
import Wheel from "./Wheel";
import { START_CAR_POSITION, START_CAR_ROTATION_Y } from "../utils";
import { VoiceCommands } from "../types/voice";

export default function Car({
  setCarPosition,
  orbit,
  startPosition,
  startRotationY,
  thirdPerson,
  setThirdPerson,
  debug,
  voiceCommands,
}: {
  setCarPosition: React.Dispatch<React.SetStateAction<THREE.Vector3>>;
  orbit: React.RefObject<VanillaOrbitControls>;
  startPosition?: Triplet;
  startRotationY?: number;
  thirdPerson: boolean;
  setThirdPerson: React.Dispatch<React.SetStateAction<boolean>>;
  debug: React.RefObject<boolean>;
  voiceCommands?: VoiceCommands;
}) {
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.05;
  const position = startPosition ?? START_CAR_POSITION;
  const rotationY = startRotationY ?? START_CAR_ROTATION_Y;

  const [chassisBody, chassisApi] = useBox<THREE.Group>(
    () => ({
      allowSleep: false,
      args: [width, height, 2 * front],
      mass: 400,
      position,
      rotation: [0, rotationY, 0],
    }),
    useRef(null)
  );

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle<THREE.Group>(
    () => ({ chassisBody, wheelInfos, wheels }),
    useRef(null)
  );

  const { camera } = useThree();

  useControls(vehicleApi, chassisApi, setThirdPerson, voiceCommands);

  useFrame(() => {
    if (!chassisBody.current) return;
    const position = new THREE.Vector3().setFromMatrixPosition(
      chassisBody.current.matrixWorld
    );
    setCarPosition(position.clone());

    if (orbit.current && !thirdPerson) {
      const quaternion = new THREE.Quaternion().setFromRotationMatrix(
        chassisBody.current.matrixWorld
      );
      const worldDirection = new THREE.Vector3(0, 0, 1)
        .applyQuaternion(quaternion)
        .normalize()
        .add(new THREE.Vector3(0, 0.19, 0));

      camera.position.copy(position.clone().add(worldDirection));
      camera.lookAt(position);
      orbit.current.target.copy(position);
      orbit.current.update();
    }
  });

  useEffect(() => {
    if (orbit.current && thirdPerson) {
      camera.position
        .copy(orbit.current.target)
        .add(new THREE.Vector3(0, 100, 100));
      camera.updateMatrixWorld();
    }
  }, [camera, orbit, thirdPerson]);

  return (
    <group ref={vehicle}>
      <group ref={chassisBody} visible={!(debug?.current ?? false)}>
        <WheellessCar transparent opacity={0.3} />
      </group>
      <Wheel
        wheelRef={wheels[0]}
        radius={wheelRadius}
        position={position}
        debug={debug}
      />
      <Wheel
        wheelRef={wheels[1]}
        radius={wheelRadius}
        position={position}
        debug={debug}
      />
      <Wheel
        wheelRef={wheels[2]}
        radius={wheelRadius}
        position={position}
        debug={debug}
      />
      <Wheel
        wheelRef={wheels[3]}
        radius={wheelRadius}
        position={position}
        debug={debug}
      />
    </group>
  );
}
