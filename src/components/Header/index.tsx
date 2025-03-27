import Styles from "./Header.module.scss";
import classNames from "classnames";
import Button from "../Button";
import Link from "../Link";

export default function Header() {
  return (
    <header
      className={classNames({
        [Styles.header]: true,
      })}
    >
      <div>
        <h1
          className={classNames({
            [Styles.header__title]: true,
          })}
        >
          Robert Alexandre
        </h1>
      </div>
      <div>
        <ul
          className={classNames({
            [Styles.header__options]: true,
          })}
        >
          <li
            className={classNames({
              [Styles.header__options__option]: true,
            })}
          >
            <Link to="#" text="Início" />
          </li>
          <li
            className={classNames({
              [Styles.header__options__option]: true,
            })}
          >
            <Link to="#" text="Sobre Mim" />
          </li>
          <li
            className={classNames({
              [Styles.header__options__option]: true,
            })}
          >
            <Link to="#" text="Skills" />
          </li>
          <li
            className={classNames({
              [Styles.header__options__option]: true,
            })}
          >
            <Link to="#" text="Formação" />
          </li>
          <li
            className={classNames({
              [Styles.header__options__option]: true,
            })}
          >
            <Link to="#" text="Contato" />
          </li>
        </ul>
      </div>
      <div>
        <Button text="Baixar CV" />
      </div>
    </header>
  );
}
