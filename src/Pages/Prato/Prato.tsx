import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";

import "./Prato.scss";
import cardapio from "../../data/cardapio.json";

export default function Prato() {
  const { id } = useParams();

  const navigate = useNavigate();

  const prato = cardapio.find((item) => item.id === Number(id));

  if (!prato) {
    return "";
  }

  return (
    <>
      <button className="voltar" onClick={() => navigate(-1)}>
        {"< Voltar"}
      </button>

      <section className="container">
        <h1 className="titulo">{prato.title}</h1>

        <div className="imagem">
          <img src={prato.photo} alt={prato.title} />
        </div>

        <div className="conteudo">
          <p className="conteudo__descricao">{prato.description}</p>

          <div className="tags">
            <div
              className={classNames({
                ["tags__tipo"]: true,
                [`tags__tipo__${prato.category.label.toLowerCase()}`]: true,
              })}
            >
              {prato.category.label}
            </div>

            <div className="tags__porcao">{prato.size}g</div>

            <div className="tags__qtdpessoas">
              Serve {prato.serving} pessoa{prato.serving > 1 ? "s" : ""}
            </div>

            <div className="tags__valor">R$ {prato.price.toFixed(2)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
