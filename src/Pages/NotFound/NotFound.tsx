import { useNavigate } from "react-router-dom";

import NotFoundImage from "../../assets/not_found.svg";

import classNames from "classnames";

import "../../assets/styles/Tema.scss";

import "./NotFound.scss";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className={classNames({
        ["containerFound"]: true,
        ["container"]: true,
      })}
    >
      <div className="voltar">
        <button onClick={() => navigate(-1)}>{"< Voltar"}</button>
      </div>
      <img src={NotFoundImage} alt="" />
    </div>
  );
}
