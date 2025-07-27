export type LandType = {
    args: [number, number, number]
    pos: [number, number, number]
    rot: [number, number, number]
    name: string
}

export default function LandSpawn({args, pos, rot}: LandType) {
      return (
        <mesh position={pos} rotation={rot}>
          <boxGeometry args={args} />
          <meshBasicMaterial transparent={true} opacity={1} color="pink" />
        </mesh>
      );
    }