import {
  CompoundBodyProps,
  WheelInfoOptions,
  useCompoundBody,
} from "@react-three/cannon";
import { useRef } from "react";
import * as THREE from "three";

export default function useWheels(
  width: number,
  height: number,
  front: number,
  radius: number
): [React.Ref<THREE.Group>[], WheelInfoOptions[]] {
  const wheels = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const info: WheelInfoOptions = {
    radius,
    directionLocal: [0, -1, 0],
    axleLocal: [1, 0, 0],
    suspensionStiffness: 60,
    suspensionRestLength: 0.1,
    frictionSlip: 10,
    dampingRelaxation: 2.5,
    dampingCompression: 4.5,
    maxSuspensionForce: 100000,
    rollInfluence: 0.01,
    maxSuspensionTravel: 0.1,
    customSlidingRotationalSpeed: -15,
    useCustomSlidingRotationalSpeed: true,
  };
  const scaledWidth = width * 0.65;
  const scaledHeight = height * 0.4;
  const wheelsInfos: WheelInfoOptions[] = [
    {
      ...info,
      chassisConnectionPointLocal: [-scaledWidth, scaledHeight, front],
      isFrontWheel: true,
    },
    {
      ...info,
      chassisConnectionPointLocal: [scaledWidth, scaledHeight, front],
      isFrontWheel: true,
    },
    {
      ...info,
      chassisConnectionPointLocal: [-scaledWidth, scaledHeight, -front],
      isFrontWheel: false,
    },
    {
      ...info,
      chassisConnectionPointLocal: [scaledWidth, scaledHeight, -front],
      isFrontWheel: false,
    },
  ];
  function propsFunc(): CompoundBodyProps {
    return {
      collisionFilterGroup: 0,
      mass: 20,
      shapes: [
        {
          // @ts-expect-error Somehow it must be it
          args: [info.radius, info.radius, 0.015, 16],
          rotation: [0, 0, -Math.PI / 2],
          type: "Cylinder",
        },
      ],
      type: "Kinematic",
    };
  }

  useCompoundBody(propsFunc, wheels[0]);
  useCompoundBody(propsFunc, wheels[1]);
  useCompoundBody(propsFunc, wheels[2]);
  useCompoundBody(propsFunc, wheels[3]);

  return [wheels, wheelsInfos];
}
