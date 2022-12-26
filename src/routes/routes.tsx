import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "../Pages/Inicio/Inicio";
import Cardapio from "../Pages/Cardapio/Cardapio";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </BrowserRouter>
  );
}
