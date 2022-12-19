import Item from "./Item/Item";

import cardapio from "./itens.json";

import styles from "./Itens.module.scss";

export default function Itens() {
  return (
    <div className={styles.tens}>
      {cardapio.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
