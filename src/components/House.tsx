import { FancyHouse, ModernHouse, Oggy } from "../models";
import Obstacle, { ObstacleProps } from "./Obstacle";

export type HouseProps = ObstacleProps & { name: "Oggy" | "Fancy" | "Modern" };

export default function House(props: HouseProps) {
  if (props.name === "Oggy")
    return (
      <Obstacle
        {...props}
        colliderBoxScale={[3.2, 1.225, 1.38]}
        thingScale={[0.004, 0.004, 0.004]}
        thingPosition={[0.32, 0, 0.7]}
        Thing={Oggy}
      />
    );
  if (props.name === "Fancy")
    return (
      <Obstacle
        {...props}
        colliderBoxScale={[3.6, 1.227, 3.9]}
        thingScale={[3, 3, 3]}
        thingPosition={[-0.2, 0.577, 0.18]}
        Thing={FancyHouse}
      />
    );
  return (
    <Obstacle
      {...props}
      colliderBoxScale={[1, 1, 2.3]}
      thingScale={[0.00015, 0.00015, 0.00015]}
      thingPosition={[-0.55, 0.1, 0.1]}
      Thing={ModernHouse}
    />
  );
}
