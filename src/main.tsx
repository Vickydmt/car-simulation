import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

(async () => {
  // if ("hot" in import.meta) {
  //   // @ts-ignore
  //   import.meta.hot.on("vite:beforeUpdate", () => {
  //     console.clear();
  //     location.reload();
  //   });
  // }
  createRoot(document.querySelector("#root")!).render(<App />);
})();
