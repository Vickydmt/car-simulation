import { NotreDameDeParis as Model } from "../models";
import { Triplet, useBox } from "@react-three/cannon";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { ObstacleProps } from "./Obstacle";
import { LandmarkName } from "../LandmarkChart";

export default function NotreDameDeParis({
  position,
  rotation,
  debug,
  setLandmark,
  landmarkLookup,
  setThirdPerson,
}: ObstacleProps & {
  setLandmark: React.Dispatch<React.SetStateAction<LandmarkName>>;
  landmarkLookup: React.MutableRefObject<{
    [key: string]: THREE.Object3D;
  }>;
  setThirdPerson: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const objectRef = useRef<THREE.Object3D>(null);

  useEffect(() => {
    if (
      !landmarkLookup.current ||
      !objectRef.current ||
      "Notre-Dame de Paris" in landmarkLookup.current
    )
      return;
    landmarkLookup.current["Notre-Dame de Paris"] = objectRef.current;
  }, [landmarkLookup, objectRef]);

  const boxScale: [number, number, number] = [12, 10, 27];
  const boxPositionDelta: Triplet = [1.5, 4, 0.5];

  const [ref] = useBox<THREE.Mesh>(
    () => ({
      mass: 0,
      args: boxScale,
      position: position.map((p, i) => p + boxPositionDelta[i]) as Triplet,
      rotation: [0, (68 * Math.PI) / 180, 0],
      onCollide() {
        setLandmark("Notre-Dame de Paris");
        setThirdPerson(true);
      },
    }),
    useRef(null)
  );

  return (
    <>
      <Model
        innerRef={objectRef}
        position={[0, -0.1, 0].map((p, i) => p + position[i])}
        rotation={[0, rotation ?? 0, 0]}
        scale={[0.005, 0.005, 0.005]}
      />
      <mesh ref={ref} visible={debug?.current ?? false}>
        <boxGeometry args={boxScale} />
        <meshBasicMaterial transparent opacity={0.5} color={"orange"} />
      </mesh>
    </>
  );
}