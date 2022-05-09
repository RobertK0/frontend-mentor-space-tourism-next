import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
        <img
          src="/logo.svg"
          alt="Agency Logo"
          className={styles.logo}
        />
        <div className={styles.line}></div>
        <nav className={styles.navbar}>
          <ul className={styles.navlist}>
            <li>
              <a href="#">
                <span className={styles["navlink-prefix"]}>00</span>
                <span className={styles.navlink}>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles["navlink-prefix"]}>01</span>
                <span className={styles.navlink}>Destination</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles["navlink-prefix"]}>02</span>
                <span className={styles.navlink}>Crew</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles["navlink-prefix"]}>03</span>
                <span className={styles.navlink}>Technology</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles["text-container"]}>
          <span className={styles["subheading-1"]}>
            So, you want to travel to
          </span>
          <h1 className={styles["heading-1"]}>space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as
            well genuinely go to outer space and not hover kind of
            on the edge of it. Well sit back, and relax because
            we’ll give you a truly out of this world experience!
          </p>
        </div>
        <a className={styles.cta}>Explore</a>
      </main>
    </>
  );
};

export default Home;
