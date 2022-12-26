import { useState } from "react";

import Buscador from "../../components/Buscador/Buscador";
import Filtros from "../../components/Filtros/Filtros";
import Ordenador, {
  OpcoesOrdenador,
} from "../../components/Ordenador/Ordenador";
import Itens from "../../components/Itens/Itens";

import styles from "./Cardapio.module.scss";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<OpcoesOrdenador>("");

  return (
    <main>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>

        <Buscador busca={busca} setBusca={setBusca} />

        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />

          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>

        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}
