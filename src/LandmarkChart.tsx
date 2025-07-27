import { useState } from "react";

export type LandmarkName =
  | "Arc de Triomphe"
  | "Eiffel Tower"
  | "Notre-Dame de Paris"
  | null;

export function LandmarkChart({ name }: { name: LandmarkName }) {
  const [open, setOpen] = useState(true);
  const { title, content, image, url } = getLandmarkInfo(name);
  return (
    <div className="info-chart">
      <span
        className="chart-close-button"
        onClick={() => setOpen((open) => !open)}
      >
        {open ? "[close]" : "[open]"}
      </span>
      <span className="chart-title">
        <a href={url} target={"_blank"}>
          {title}
        </a>
      </span>
      {open && (
        <>
          <img src={image} />
          {["", ...content].map((v, i) => (
            <p key={i}>{v}</p>
          ))}{" "}
        </>
      )}
    </div>
  );
}

function getLandmarkInfo(name: LandmarkName): {
  title: string;
  image: string;
  content: string[];
  url: string;
} {
  switch (name) {
    case "Arc de Triomphe":
      return {
        title: "Arc de Triomphe",
        content: [
          "The Arc de Triomphe de l'Étoile, often called simply the Arc de Triomphe, is one of the most famous monuments in Paris, France, standing at the western end of the Champs-Élysées at the centre of Place Charles de Gaulle [...].",
          "The Arc de Triomphe honours those who fought and died for France in the French Revolutionary and Napoleonic Wars, with the names of all French victories and generals inscribed on its inner and outer surfaces. Beneath its vault lies the Tomb of the Unknown Soldier from World War I. (Wikipedia)",
        ],
        image: "/Crowds_of_French_patriots_line_the_Champs_Elysees-edit2.jpg",
        url: "https://en.wikipedia.org/wiki/Arc_de_Triomphe",
      };

    case "Eiffel Tower":
      return {
        title: "Eiffel Tower",
        content: [
          "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1888. (Wikipedia)",
        ],
        image: "/Eiffel_Tower_20051010.jpg",
        url: "https://en.wikipedia.org/wiki/Eiffel_Tower",
      };

    case "Notre-Dame de Paris":
      return {
        title: "Notre-Dame de Paris",
        content: [
          'Notre-Dame de Paris (meaning "Our Lady of Paris"), referred to simply as Notre-Dame, is a medieval Catholic cathedral on the Île de la Cité (an island in the Seine River), in the 4th arrondissement of Paris, France. The cathedral, dedicated to the Virgin Mary, is considered one of the finest examples of French Gothic architecture. (Wikipedia) ',
        ],
        image: "/Flèche_et_rosace_transept_sud_Notre-Dame_de_Paris.jpg",
        url: "https://www.notredamedeparis.fr/",
      };

    default:
      throw new Error("unreachable code");
  }
}
