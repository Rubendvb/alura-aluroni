import { useNavigate, useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./Prato.scss";
import cardapio from "../../data/cardapio.json";
import TagsPrato from "../../components/TagsPrato/TagsPrato";
import NotFound from "../NotFound/NotFound";
import Header from "../../components/Header/Header";

export default function Prato() {
  const { id } = useParams();

  const navigate = useNavigate();

  const prato = cardapio.find((item) => item.id === Number(id));

  if (!prato) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<Header />}>
        <Route
          index
          element={
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

                  <TagsPrato {...prato} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
