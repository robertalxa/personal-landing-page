import Styles from "./FirstSection.module.scss";
import ProfilePicture from "../../../assets/img/profilee.png";
import Button from "../../../components/Button";
import classNames from "classnames";

export default function FirstSection() {
  return (
    <section
      className={classNames({
        [Styles.welcome_section]: true,
      })}
    >
      <div
        className={classNames({
          [Styles.welcome_section__picture]: true,
        })}
      >
        <img src={ProfilePicture} />
      </div>
      <div
        className={classNames({
          [Styles.welcome_section__texts]: true,
        })}
      >
        <h2
          className={classNames({
            [Styles.welcome_section__texts__title]: true,
          })}
        >
          <span>FullStack</span>
          <br />
          Web Developer
        </h2>
        <p
          className={classNames({
            [Styles.welcome_section__texts__description]: true,
          })}
        >
          Oie! Prazer, eu sou o Robert, tenho 23 anos e sou desenvolvedor há 5
          anos, me divirto trabalhando e estudando tecnologias full-stack. Essa
          daqui é a minha landing page, nela vou contar um pouco da minha
          jornada e te mostrar um pouco das minhas habilidades :)
        </p>
        <div
          className={classNames({
            [Styles.welcome_section__texts__buttons]: true,
          })}
        >
          <Button text="Vamos lá" />{" "}
          {/*navegar para a próxima sessão suavemente*/}
          <Button text="Contratar esse carinha aqui" negative />
        </div>
      </div>
    </section>
  );
}
