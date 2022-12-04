import React from "react";
import ReactDOM from "react-dom/client";
import Cardapio from "./Pages/Cardapio/Cardapio";

import "normalize.css";
import "./assets/styles/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Cardapio />
  </React.StrictMode>
);
