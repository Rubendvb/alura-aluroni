import logo from "/src/assets/Img/Logo/logo.svg";

import "./Menu.scss";

import { Link } from "react-router-dom";

export default function Menu() {
  const rotas = [
    {
      label: "Início",
      to: "/",
    },
    {
      label: "Cardápio",
      to: "/cardapio",
    },
    {
      label: "Sobre",
      to: "/sobre",
    },
  ];

  return (
    <nav className="menu">
      <img src={logo} alt="Logo Aluroni" />

      <ul className="menu__list">
        {rotas.map((rota, index) => (
          <li key={index} className="menu__link">
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
