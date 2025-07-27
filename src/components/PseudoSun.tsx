import { Triplet } from "@react-three/cannon";
import { Object3D } from "three";

export function PseudoSun({ position }: { position: Triplet }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[5, 15, 10]} />
      <meshBasicMaterial color={"gold"} transparent opacity={0.8} />
      <ambientLight intensity={1} />
      <directionalLight
        castShadow
        intensity={10}
        position={[0, 0, 0]}
        shadow-camera-right={100}
        shadow-camera-left={-100}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-camera-far={800}
        shadow-camera-near={200}
        shadow-camera-target={new Object3D()}
      />
    </mesh>
  );
}

          // return (
          //   <directionalLight
          //     castShadow
          //     intensity={16}
          //     position={lightPosition}
          //     shadow-camera-right={right}
          //     shadow-camera-left={left}
          //     shadow-camera-top={top}
          //     shadow-camera-bottom={bottom}
          //     shadow-camera-far={far}
          //     shadow-camera-near={near}
          //     shadow-camera-target={target}
          //     key={`dir_light_${i}`}
          //   />

  // const lightInfos = makeGridData(10, 2).map((d) => ({
  //   position: d,
  //   near: 200,
  //   far: 800,
  //   top: 4,
  //   bottom: -4,
  //   left: -5,
  //   right: 5,
  // }));

// function makeGridData(
//   elementSize: number,
//   columns = 1,
//   rows = 1,
//   sheets = 1
// ) {
//   const grid: Triplet[] = new Array(columns * rows * sheets);
//   let iGrid = 0;
//   for (let iSheet = 0; iSheet < sheets; ++iSheet) {
//     for (let iRow = 0; iRow < rows; ++iRow) {
//       for (let iColumn = 0; iColumn < columns; ++iColumn) {
//         grid[iGrid] = [iRow * elementSize, 0, iColumn * elementSize];
//         ++iGrid;
//       }
//     }
//   }
//   return grid;
// }
