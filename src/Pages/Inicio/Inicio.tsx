import { useNavigate } from "react-router-dom";

import cardapio from "../../data/cardapio.json";

import "./Inicio.scss";
import "../../assets/styles/Tema.scss";

import nossaCasa from "../../assets/nossa_casa.png";
import { Prato } from "../../@types/Prato";

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  const navigate = useNavigate();

  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  function redirecionaParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, {
      state: { prato },
      replace: true,
    });
  }

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
              <button
                className="recomendado__botao"
                onClick={() => redirecionaParaDetalhes(item)}
              >
                Ver mais
              </button>
            </div>
          );
        })}
      </div>

      <h3 className="titulo">Nossa casa</h3>

      <div className="nossaCasa">
        <img src={nossaCasa} alt="Casa do aluroni" />

        <div className="nossaCasa__endereco">
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
