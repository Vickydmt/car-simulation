import { useCompoundBody } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { EiffelTower as Model } from "../models";
import * as THREE from "three";
import * as CANNON from "cannon-es";
import { ObstacleProps } from "./Obstacle";
import { LandmarkName } from "../LandmarkChart";

export default function EiffelTower({
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
      "Eiffel Tower" in landmarkLookup.current
    )
      return;
    landmarkLookup.current["Eiffel Tower"] = objectRef.current;
  }, [landmarkLookup, objectRef]);

  const rotateABit: number = (82 * Math.PI) / 180;
  const collider1Position: [number, number, number] = [3, 0.6, -2];
  const collider2Position: [number, number, number] = [2.3, 1.8, -1.65];
  const collider3Position: [number, number, number] = [-3, 0.6, 2];
  const collider4Position: [number, number, number] = [-2.3, 1.8, 1.65];
  const collider5Position: [number, number, number] = [2, 0.6, 3];
  const collider6Position: [number, number, number] = [1.65, 1.8, 2.3];
  const collider7Position: [number, number, number] = [-2, 0.6, -3];
  const collider8Position: [number, number, number] = [-1.65, 1.8, -2.3];
  const collider9Position: [number, number, number] = [0, 3, 0];

  const [ref1] = useCompoundBody<THREE.Mesh>(
    () => ({
      mass: 0,
      shapes: [
        {
          args: [1.2, 1.2, 1.2],
          position: new CANNON.Vec3(...position)
            .vadd(new CANNON.Vec3(...collider1Position))
            .toArray(),
          type: "Box",
        },
        {
          args: [1.2, 1.2, 1.2],
          position: new CANNON.Vec3(...position)
            .vadd(new CANNON.Vec3(...collider2Position))
            .toArray(),
          type: "Box",
        },
        {
          args: [1.2, 1.2, 1.2],
          position: new CANNON.Vec3(...position)
            .vadd(new CANNON.Vec3(...collider3Position))
            .toArray(),
          type: "Box",
        },
        {
          args: [1.2, 1.2, 1.2],
          position: new CANNON.Vec3(...position)
            .vadd(new CANNON.Vec3(...collider4Position))
            .toArray(),
          type: "Box",
        },
        {
          args: [1.2, 1.2, 1.2],
          position: new CANNON.Vec3(...position)
            .vadd(new CANNON.Vec3(...collider5Position))
            .toArray(),
          type: "Box",
        },
        {
          args: [1.2, 1.2, 1.2],
          position: new CANNON.Vec3(...position)
            .vadd(new CANNON.Vec3(...collider6Position))
            .toArray(),
          type: "Box",
        },
        {
          args: [1.2, 1.2, 1.2],
          position: new CANNON.Vec3(...position)
            .vadd(new CANNON.Vec3(...collider7Position))
            .toArray(),
          type: "Box",
        },
        {
          args: [1.2, 1.2, 1.2],
          position: new CANNON.Vec3(...position)
            .vadd(new CANNON.Vec3(...collider8Position))
            .toArray(),
          type: "Box",
        },
        {
          args: [4, 0.5, 4],
          position: new CANNON.Vec3(...position)
            .vadd(new CANNON.Vec3(...collider9Position))
            .toArray(),
          type: "Box",
        },
      ],
      position,
      onCollideBegin() {
        setLandmark("Eiffel Tower");
        setThirdPerson(true);
      },
    }),
    useRef(null)
  );

  return (
    <mesh ref={ref1} castShadow receiveShadow>
      <Model
        position={position}
        rotation={[0, rotation, 0]}
        innerRef={objectRef}
      />
      <mesh
        position={new CANNON.Vec3(...position)
          .vadd(new CANNON.Vec3(...collider1Position))
          .toArray()}
        rotation={[0, rotateABit, 0]}
        visible={debug?.current ?? false}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial transparent={true} opacity={0.5} color="yellow" />
      </mesh>
      <mesh
        position={new CANNON.Vec3(...position)
          .vadd(new CANNON.Vec3(...collider2Position))
          .toArray()}
        rotation={[0, rotateABit, 0]}
        visible={debug?.current ?? false}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial transparent={true} opacity={0.5} color="yellow" />
      </mesh>
      <mesh
        position={new CANNON.Vec3(...position)
          .vadd(new CANNON.Vec3(...collider3Position))
          .toArray()}
        rotation={[0, rotateABit, 0]}
        visible={debug?.current ?? false}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial transparent={true} opacity={0.5} color="yellow" />
      </mesh>
      <mesh
        position={new CANNON.Vec3(...position)
          .vadd(new CANNON.Vec3(...collider4Position))
          .toArray()}
        rotation={[0, rotateABit, 0]}
        visible={debug?.current ?? false}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial transparent={true} opacity={0.5} color="yellow" />
      </mesh>
      <mesh
        position={new CANNON.Vec3(...position)
          .vadd(new CANNON.Vec3(...collider5Position))
          .toArray()}
        rotation={[0, rotateABit, 0]}
        visible={debug?.current ?? false}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial transparent={true} opacity={0.5} color="yellow" />
      </mesh>
      <mesh
        position={new CANNON.Vec3(...position)
          .vadd(new CANNON.Vec3(...collider6Position))
          .toArray()}
        rotation={[0, rotateABit, 0]}
        visible={debug?.current ?? false}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial transparent={true} opacity={0.5} color="yellow" />
      </mesh>
      <mesh
        position={new CANNON.Vec3(...position)
          .vadd(new CANNON.Vec3(...collider7Position))
          .toArray()}
        rotation={[0, rotateABit, 0]}
        visible={debug?.current ?? false}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial transparent={true} opacity={0.5} color="yellow" />
      </mesh>
      <mesh
        position={new CANNON.Vec3(...position)
          .vadd(new CANNON.Vec3(...collider8Position))
          .toArray()}
        rotation={[0, rotateABit, 0]}
        visible={debug?.current ?? false}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial transparent={true} opacity={0.5} color="yellow" />
      </mesh>
      <mesh
        position={new CANNON.Vec3(...position)
          .vadd(new CANNON.Vec3(...collider9Position))
          .toArray()}
        rotation={[0, rotateABit, 0]}
        visible={debug?.current ?? false}
      >
        <boxGeometry args={[4, 0.5, 4]} />
        <meshBasicMaterial transparent={true} opacity={0.5} color="yellow" />
      </mesh>
    </mesh>
  );
}
