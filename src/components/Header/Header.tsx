import "./Header.scss";
import { Outlet } from "react-router-dom";

import "../../assets/styles/Tema.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__text">A casa do código e da massa</div>
      </header>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
