import { useState } from "react";
import Buscador from "../../components/Buscador/Buscador";
import styles from "./Cardapio.module.scss";
import logo from "/src/assets/Img/Logo/logo.svg";

export default function Cardapio() {
  const [busca, setBusca] = useState("");

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
      </section>
    </main>
  );
}