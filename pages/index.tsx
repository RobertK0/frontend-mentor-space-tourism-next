import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles["text-container"]}>
        <span className={styles["subheading-1"]}>
          So, you want to travel to
        </span>
        <h1 className={styles["heading-1"]}>space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as
          well genuinely go to outer space and not hover kind of on
          the edge of it. Well sit back, and relax because we’ll
          give you a truly out of this world experience!
        </p>
      </div>
      <a className={styles.cta}>Explore</a>
    </main>
  );
};

export default Home;
