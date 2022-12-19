import { useEffect, useState } from "react";
import Item from "./Item/Item";

import cardapio from "./itens.json";

import styles from "./Itens.module.scss";

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens({ busca, filtro, ordenador }: Props) {
  const [lista, setLista] = useState(cardapio);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, "i");

    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) {
      return filtro === id;
    }

    return true;
  }

  useEffect(() => {
    const novaLista = cardapio.filter((item) => {
      return testaBusca(item.title) && testaFiltro(item.category.id);
    });

    setLista(novaLista);
  }, [busca, filtro]); // As dependências que o useEffect deve rodar

  return (
    <div className={styles.tens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
