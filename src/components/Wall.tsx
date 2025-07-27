import { Triplet, useBox } from "@react-three/cannon";
import { useRef } from "react";
import { Mesh } from "three";

export interface WallProps {
  position?: Triplet;
  rotation?: Triplet;
  width?: number;
  height?: number;
  depth?: number;
  visible?: boolean;
}

export function Wall({
  position,
  rotation,
  width,
  height,
  depth,
  visible,
  setMessage,
}: WallProps & {
  setMessage: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const args: Triplet = [width ?? 50, height ?? 6, depth ?? 0.05];
  const [ref] = useBox<Mesh>(
    () => ({
      mass: 0,
      position,
      rotation,
      args,
      onCollide: () => setMessage("Reached world limit! Please go back."),
    }),
    useRef(null)
  );
  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshBasicMaterial
        color={"red"}
        transparent
        opacity={0.5}
        visible={visible ?? true}
      />
    </mesh>
  );
}