import classNames from "classnames";
import Styles from "./Button.module.scss";

interface Props {
  negative?: boolean;
  text: string;
}

export default function Button({ negative, text }: Props) {
  return (
    <button
      className={classNames({
        [Styles.button]: true,
        [Styles.button___negative]: negative,
      })}
    >
      {text}
    </button>
  );
}
