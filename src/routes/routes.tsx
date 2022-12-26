import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "../Pages/Inicio/Inicio";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import Cardapio from "../Pages/Cardapio/Cardapio";
import Sobre from "../Pages/Sobre/Sobre";

export default function AppRoutes() {
  return (
    <main>
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
