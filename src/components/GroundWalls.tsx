import { Wall, WallProps } from "./Wall";

export function GroundWalls({
  debug,
  setMessage,
}: {
  debug: React.RefObject<boolean>;
  setMessage: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const data: WallProps[] = [
    {
      position: [70, 0, 40],
      width: 120,
      rotation: [0, (60 * Math.PI) / 180, 0],
    },
    {
      position: [-32, 0, 40],
      width: 200,
      rotation: [0, (170 * Math.PI) / 180, 0],
    },
    {
      position: [42, 0, -50],
      width: 160,
      rotation: [0, (158 * Math.PI) / 180, 0],
    },
    {
      position: [80, 0, -20],
      width: 80,
      rotation: [0, (100 * Math.PI) / 180, 0],
    },
    {
      position: [-100.5, 0, -18],
      width: 120,
      rotation: [0, (90 * Math.PI) / 180, 0],
    },
    {
      position: [-60, 0, -75],
      width: 85,
      rotation: [0, (0 * Math.PI) / 180, 0],
    },
  ];
  return (
    <>
      {data.map((props, index) => {
        return (
          <Wall
            {...props}
            key={index}
            visible={debug?.current ?? false}
            setMessage={setMessage}
          />
        );
      })}
    </>
  );
}