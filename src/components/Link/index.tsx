import classNames from "classnames";
import Styles from "./Link.module.scss";

interface Props {
  text: string;
  to?: string;
}

export default function Link({ text, to = "#" }: Props) {
  return (
    <a
      className={classNames({
        [Styles.link]: true,
      })}
      href={to}
    >
      {text}
    </a>
  );
}
