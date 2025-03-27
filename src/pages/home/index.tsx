import classNames from "classnames";
import Styles from "./HomePage.module.scss";
import Header from "../../components/Header";

export default function HomePage() {
  return (
    <main
      className={classNames({
        [Styles.main]: true,
      })}
    >
      <Header />
    </main>
  );
}
