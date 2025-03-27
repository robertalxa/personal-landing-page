import classNames from "classnames";
import Styles from "./Button.module.scss";

interface Props {
  text: string;
}

export default function Button({ text }: Props) {
  return (
    <button
      className={classNames({
        [Styles.button]: true,
      })}
    >
      {text}
    </button>
  );
}
