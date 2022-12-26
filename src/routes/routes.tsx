import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "../Pages/Inicio/Inicio";
import Cardapio from "../Pages/Cardapio/Cardapio";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";

export default function AppRoutes() {
  return (
    <main>
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route>
            <Route path="/" element={<Header />} />
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
