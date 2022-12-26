import "./NotFound.scss";
import NotFoundImage from "../../assets/not_found.svg";
import classNames from "classnames";
import "../../assets/styles/Tema.scss";

export default function NotFound() {
  return (
    <div
      className={classNames({
        ["containerFound"]: true,
        ["container"]: true,
      })}
    >
      <img src={NotFoundImage} alt="" />
    </div>
  );
}
