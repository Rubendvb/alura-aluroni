import cardapio from "../../data/cardapio.json";

import "./Inicio.scss";

export default function Inicio() {
  let pratosRecomendados = [...cardapio];

  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className="titulo">Recomendações da cozinha</h3>
      <div className="recomendados">
        {pratosRecomendados.map((item) => {
          return (
            <div key={item.id} className="recomendado">
              <div className="recomendado__imagem">
                <img src={item.photo} alt={item.title} />
              </div>
              <button className="recomendado__botao">Ver mais</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
