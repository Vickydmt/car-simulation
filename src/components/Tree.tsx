import { Triplet } from "@react-three/cannon";
import Birch1 from "../models/Birch1";
import Obstacle, { ObstacleProps } from "./Obstacle";

export type TreeProps = ObstacleProps & {
  position: Triplet;
  name: "1" | "2" | "3";
};

export default function Tree(props: TreeProps) {
  // if (props.name === "1")
  return (
    <Obstacle
      {...props}
      rotation={0}
      colliderBoxScale={[0.2, 1, 0.2]}
      thingScale={[0.4, 0.4, 0.4]}
      thingPosition={[0, 0, 0]}
      Thing={Birch1}
    />
  );
  //if (props.name === "2")
  //if (props.name === "3")
}
