import { useState } from "react";
import Buscador from "../../components/Buscador/Buscador";
import Filtros from "../../components/Filtros/Filtros";
import styles from "./Cardapio.module.scss";
import logo from "/src/assets/Img/Logo/logo.svg";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);

  return (
    <main>
      <nav className={styles.menu}>
        <img src={logo} alt="Logo Aluroni" />
      </nav>

      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>

        <Buscador busca={busca} setBusca={setBusca} />

        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
        </div>
      </section>
    </main>
  );
}
