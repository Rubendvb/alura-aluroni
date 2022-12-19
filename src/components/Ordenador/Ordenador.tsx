import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export default function Ordenador() {
  const [aberto, setAberto] = useState(false);

  return (
    <button
      className={styles.ordenador}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)} // Ao clicar por fora o dropdown fecha
    >
      <span>Ordenar Por</span>
      {aberto ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: aberto,
        })}
      >
        {opcoes.map((opcao) => (
          <div key={opcao.value} className={styles.ordenador}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
