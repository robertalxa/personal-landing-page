import classNames from "classnames";
import Styles from "./HomePage.module.scss";
import Header from "../../components/Header";
import FirstSection from "./FirstSection";

export default function HomePage() {
  return (
    <main
      className={classNames({
        [Styles.main]: true,
      })}
    >
      <Header />
      <FirstSection />
    </main>
  );
}
