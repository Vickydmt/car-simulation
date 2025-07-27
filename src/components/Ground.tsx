import {
  ArcDeTriomphe,
  House,
  Landscape,
  NotreDameDeParis,
} from "../components";
import Tree, { TreeProps } from "./Tree";
import { HouseProps } from "./House";
import EiffelTower from "./EiffelTower";
import { Object3D } from "three";
import { LandmarkName } from "../LandmarkChart";

export default function Ground({
  debug,
  setLandmark,
  landmarkLookup,
  setThirdPerson,
}: {
  debug: React.RefObject<boolean>;
  setLandmark: React.Dispatch<React.SetStateAction<LandmarkName>>;
  landmarkLookup: React.MutableRefObject<{
    [key: string]: Object3D;
  }>;
  setThirdPerson: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const treeInfos: TreeProps[] = [
    {
      position: [20, 0, 9.9],
      name: "1",
    },
    {
      position: [21, 0, 12.3],
      name: "1",
    },
    {
      position: [82.8, 0, 37.7],
      name: "1",
    },
    {
      position: [82, 0, 39.6],
      name: "1",
    },
    {
      position: [80.8, 0, 36.8],
      name: "1",
    },
    {
      position: [80, 0, 38.7],
      name: "1",
    },
    {
      position: [74.8, 0, 34.1],
      name: "1",
    },
    {
      position: [74, 0, 36.1],
      name: "1",
    },
    {
      position: [68.8, 0, 31.5],
      name: "1",
    },
    {
      position: [68, 0, 33.5],
      name: "1",
    },
    {
      position: [62.8, 0, 28.9],
      name: "1",
    },
    {
      position: [62, 0, 30.9],
      name: "1",
    },
    {
      position: [56.8, 0, 26.2],
      name: "1",
    },
    {
      position: [56, 0, 28.3],
      name: "1",
    },
    {
      position: [50.8, 0, 23.7],
      name: "1",
    },
    {
      position: [50, 0, 25.7],
      name: "1",
    },
    {
      position: [44.8, 0, 21.0],
      name: "1",
    },
    {
      position: [44, 0, 23.1],
      name: "1",
    },
    {
      position: [38.8, 0, 18.6],
      name: "1",
    },
    {
      position: [38, 0, 20.55],
      name: "1",
    },
    {
      position: [35.5, 0, 17],
      name: "1",
    },
    {
      position: [34.5, 0, 18.8],
      name: "1",
    },
    {
      position: [30.5, 0, 14.6],
      name: "1",
    },
    {
      position: [29.5, 0, 16.4],
      name: "1",
    },
    {
      position: [24.5, 0, 11.6],
      name: "1",
    },
    {
      position: [23.5, 0, 13.4],
      name: "1",
    },
    {
      position: [10.8, 0, 6.9],
      name: "1",
    },
    {
      position: [10.8, 0, 9.3],
      name: "1",
    },
    {
      position: [15, 0, 8.3],
      name: "1",
    },
    {
      position: [15, 0, 10.5],
      name: "1",
    },
    {
      position: [5.3, 0, 4.65],
      name: "1",
    },
    {
      position: [5.3, 0, 7.1],
      name: "1",
    },
    {
      position: [-0.2, 0, 2.4],
      name: "1",
    },
    {
      position: [-0.2, 0, 4.9],
      name: "1",
    },
    {
      position: [-5.7, 0, 0.2],
      name: "1",
    },
    {
      position: [-5.7, 0, 2.7],
      name: "1",
    },
    {
      position: [-11.2, 0, 0.1],
      name: "1",
    },
    {
      position: [-11.2, 0, 2.35],
      name: "1",
    },
    {
      position: [-16.7, 0, 0.03],
      name: "1",
    },
    {
      position: [-16.7, 0, 2.2],
      name: "1",
    },
    {
      position: [-22.2, 0, -0.05],
      name: "1",
    },
    {
      position: [-22.2, 0, 2.1],
      name: "1",
    },
    {
      position: [-27.7, 0, -0.13],
      name: "1",
    },
    {
      position: [-27.7, 0, 2.05],
      name: "1",
    },
    {
      position: [-33.2, 0, -0.21],
      name: "1",
    },
    {
      position: [-33.2, 0, 1.9],
      name: "1",
    },
    {
      position: [-38.7, 0, -0.29],
      name: "1",
    },
    {
      position: [-38.7, 0, 1.8],
      name: "1",
    },
    {
      position: [-44.2, 0, -0.37],
      name: "1",
    },
    {
      position: [-44.2, 0, 1.75],
      name: "1",
    },
    {
      position: [-49.7, 0, -0.45],
      name: "1",
    },
    {
      position: [-49.7, 0, 1.62],
      name: "1",
    },
    {
      position: [-55.2, 0, -0.53],
      name: "1",
    },
    {
      position: [-55.2, 0, 1.53],
      name: "1",
    },
    {
      position: [-60.7, 0, -0.61],
      name: "1",
    },
    {
      position: [-60.7, 0, 1.45],
      name: "1",
    },
    {
      position: [-65.2, 0, -0.75],
      name: "1",
    },
    {
      position: [-65.2, 0, 1.4],
      name: "1",
    },
    {
      position: [-69.7, 0, -1],
      name: "1",
    },
    {
      position: [-74.2, 0, -1.7],
      name: "1",
    },
    {
      position: [-72.5, 0, 0.98],
      name: "1",
    },
    {
      position: [-78.2, 0, -4.3],
      name: "1",
    },
    {
      position: [-80.7, 0, -6.5],
      name: "1",
    },
    {
      position: [-83.5, 0, -13],
      name: "1",
    },
    {
      position: [-82.5, -0.3, -31.9],
      name: "1",
    },
    {
      position: [-88.2, -0.2, -33.4],
      name: "1",
    },
    {
      position: [-93.7, -0.1, -39],
      name: "1",
    },
    {
      position: [-99.2, -0.3, -42],
      name: "1",
    },
    {
      position: [-77.2, -0.3, -0.2],
      name: "1",
    },
    {
      position: [-82.2, -0.3, -4.6],
      name: "1",
    },
    {
      position: [-85.7, -0.3, -9.8],
      name: "1",
    },
    {
      position: [-85.7, -0.3, -15.8],
      name: "1",
    },
    {
      position: [-82.7, -0.3, -18.8],
      name: "1",
    },
    {
      position: [-84.7, -0.3, -21.8],
      name: "1",
    },
    {
      position: [-81.7, -0.3, -25.9],
      name: "1",
    },
    {
      position: [-80.7, -0.3, -23.6],
      name: "1",
    },
    {
      position: [-74.7, -0.3, -23.8],
      name: "1",
    },
    {
      position: [-74.7, -0.3, -26.3],
      name: "1",
    },
    {
      position: [-68.7, -0.3, -24.3],
      name: "1",
    },
    {
      position: [-69.7, -0.3, -26.5],
      name: "1",
    },
    {
      position: [-66.5, -0.3, -30.2],
      name: "1",
    },
    {
      position: [-70.5, -0.3, -30.2],
      name: "1",
    },
    {
      position: [-74.5, -0.3, -30.9],
      name: "1",
    },
    {
      position: [-72.5, -0.3, -33.2],
      name: "1",
    },
    {
      position: [-78.5, -0.3, -33.8],
      name: "1",
    },
    {
      position: [-84.5, -0.3, -34.8],
      name: "1",
    },
    {
      position: [-90.5, -0.3, -36.9],
      name: "1",
    },
    {
      position: [-94.5, -0.3, -36.4],
      name: "1",
    },
    {
      position: [-97.0, -0.3, -42.9],
      name: "1",
    },
    {
      position: [-100.0, -0.3, -47.9],
      name: "1",
    },
    {
      position: [-97.7, -0.3, -46.9],
      name: "1",
    },
    //Add trees to the opposite river bank
    {
      position: [1, 0, 19.15],
      name: "1",
    },
    {
      position: [0, 0, 21.5],
      name: "1",
    },
    {
      position: [-5, 0, 16.4],
      name: "1",
    },
    {
      position: [-6, 0, 18.8],
      name: "1",
    },
    {
      position: [-7.5, 0, 14.1],
      name: "1",
    },
    {
      position: [-11, 0, 12.4],
      name: "1",
    },
    {
      position: [-16.5, 0, 16.0],
      name: "1",
    },
    {
      position: [-12, 0, 15.5],
      name: "1",
    },
    {
      position: [-16.5, 0, 19.5],
      name: "1",
    },
    {
      position: [-22, 0, 18.6],
      name: "1",
    },
    {
      position: [-22, 0, 15.8],
      name: "1",
    },
    {
      position: [-28, 0, 18.0],
      name: "1",
    },
    {
      position: [-28, 0, 15.1],
      name: "1",
    },
    {
      position: [-34, 0, 21.1],
      name: "1",
    },
    {
      position: [-34, 0, 18.2],
      name: "1",
    },
    {
      position: [-40, 0, 20.6],
      name: "1",
    },
    {
      position: [-39, 0, 18.2],
      name: "1",
    },
    {
      position: [-46, 0, 17.3],
      name: "1",
    },
    {
      position: [-45.5, 0, 14.7],
      name: "1",
    },
    {
      position: [-52, 0, 16.8],
      name: "1",
    },
    {
      position: [-58, 0, 16.8],
      name: "1",
    },
    {
      position: [-64, 0, 16.9],
      name: "1",
    },
    {
      position: [-70, 0, 16.9],
      name: "1",
    },
    {
      position: [-76, 0, 17.1],
      name: "1",
    },
    {
      position: [-82, 0, 17.3],
      name: "1",
    },
    {
      position: [-88, 0, 17.4],
      name: "1",
    },
    {
      position: [-94, 0, 17.5],
      name: "1",
    },
    {
      position: [-100, 0, 17.7],
      name: "1",
    },
    {
      position: [-106, 0, 17.8],
      name: "1",
    },
    {
      position: [-112, 0, 17.9],
      name: "1",
    },
  ];
  const houseInfos: HouseProps[] = [
    {
      position: [-8, 0, -2.2],
      rotation: (0.5 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-14, 0, -2.2],
      rotation: (0.5 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-20, 0, -2.2],
      rotation: (0.5 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-26, 0, -2.2],
      rotation: (0.5 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-32, 0, -2.31],
      rotation: (-1.55 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-38, 0, -2.43],
      rotation: (-1.55 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-44, 0, -2.55],
      rotation: (-1.55 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-50, 0, -2.67],
      rotation: (-1.55 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-56, 0, -2.79],
      rotation: (-1.55 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-62, 0, -2.91],
      rotation: (-1.55 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [-66, 0, -1.5],
      rotation: (-90 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-68.8, 0, -1.65],
      rotation: (-95 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-71.5, 0, -2],
      rotation: (-99 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-74.2, 0, -2.5],
      rotation: (-100 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-76.5, 0, -3.8],
      rotation: (-136 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-78.6, 0, -5.6],
      rotation: (-128 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-80.8, 0, -7.6],
      rotation: (-140 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [-2.2, 0, -0.8],
      rotation: (-21.7 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [3.3, 0, 1.33],
      rotation: (-21.2 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [8.8, 0, 3.47],
      rotation: (-21.7 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [14.3, 0, 5.64],
      rotation: (-21.6 * Math.PI) / 180,
      name: "Oggy",
    },
    {
      position: [10, 0, 28],
      rotation: (65.3 * Math.PI) / 180,
      name: "Fancy",
    },
    {
      position: [4, 0, 25.2],
      rotation: (65.3 * Math.PI) / 180,
      name: "Fancy",
    },
    {
      position: [-4, 0, 23.2],
      rotation: (65.3 * Math.PI) / 180,
      name: "Fancy",
    },
    {
      position: [-10, 0, 22.2],
      rotation: (90.3 * Math.PI) / 180,
      name: "Fancy",
    },
    {
      position: [-16, 0, 22.2],
      rotation: (95.3 * Math.PI) / 180,
      name: "Fancy",
    },
    {
      position: [-22, 0, 22.8],
      rotation: (95.3 * Math.PI) / 180,
      name: "Fancy",
    },
    {
      position: [-28, 0, 23.2],
      rotation: (95.3 * Math.PI) / 180,
      name: "Fancy",
    },
    {
      position: [-34, 0, 23.8],
      rotation: (95.3 * Math.PI) / 180,
      name: "Fancy",
    },
    {
      position: [-40, 0, 24.5],
      rotation: (95.3 * Math.PI) / 180,
      name: "Fancy",
    },
    {
      position: [-44, 0, 25.0],
      rotation: (95.3 * Math.PI) / 180,
      name: "Fancy",
    },
    {
      position: [61, -0.22, -4.8],
      rotation: (67.1 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [56, -0.22, -7],
      rotation: (67.2 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [51, -0.22, -9.2],
      rotation: (67.2 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [46, -0.22, -11.4],
      rotation: (67.1 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [41, -0.22, -13.6],
      rotation: (67.1 * Math.PI) / 180,
      name: "Modern",
    },
    {
      position: [36, -0.22, -15.8],
      rotation: (67.1 * Math.PI) / 180,
      name: "Modern",
    },
  ];

  return (
    <>
      <Landscape debug={debug} />
      {houseInfos.map((props, i) => {
        return <House {...props} key={`house_${i}`} debug={debug} />;
      })}
      {treeInfos.map((props, i) => {
        return <Tree {...props} key={`tree_${i}`} debug={debug} />;
      })}
      <ArcDeTriomphe
        position={[-16.6, 0, -23]}
        rotation={(28 * Math.PI) / 180}
        debug={debug}
        setLandmark={setLandmark}
        landmarkLookup={landmarkLookup}
        setThirdPerson={setThirdPerson}
      />
      <EiffelTower
        position={[-41, 0, -16.5]}
        rotation={(90 * Math.PI) / 180}
        debug={debug}
        setLandmark={setLandmark}
        landmarkLookup={landmarkLookup}
        setThirdPerson={setThirdPerson}
      />
      <NotreDameDeParis
        position={[20, 0, -30]}
        rotation={(4 * Math.PI) / 180}
        debug={debug}
        setLandmark={setLandmark}
        landmarkLookup={landmarkLookup}
        setThirdPerson={setThirdPerson}
      />
    </>
  );
}
