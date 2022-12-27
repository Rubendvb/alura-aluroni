import classNames from "classnames";
import { Prato } from "../../@types/Prato";
import "./TagsPrato.scss";

export default function TagsPrato({ category, size, serving, price }: Prato) {
  return (
    <div>
      <div className="tags">
        <div
          className={classNames({
            ["tags__tipo"]: true,
            [`tags__tipo__${category.label.toLowerCase()}`]: true,
          })}
        >
          {category.label}
        </div>

        <div className="tags__porcao">{size}g</div>

        <div className="tags__qtdpessoas">
          Serve {serving} pessoa{serving > 1 ? "s" : ""}
        </div>

        <div className="tags__valor">R$ {price.toFixed(2)}</div>
      </div>
    </div>
  );
}
