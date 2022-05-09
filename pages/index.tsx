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
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
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
                <span className={styles["navlink-prefix"]}>00</span>
                <span className={styles.navlink}>Home</span>
              </li>
              <li>
                <span className={styles["navlink-prefix"]}>01</span>
                <span className={styles.navlink}>Destination</span>
              </li>
              <li>
                <span className={styles["navlink-prefix"]}>02</span>
                <span className={styles.navlink}>Crew</span>
              </li>
              <li>
                <span className={styles["navlink-prefix"]}>03</span>
                <span className={styles.navlink}>Technology</span>
              </li>
            </ul>
          </nav>
        </header>
      </main>
    </>
  );
};

export default Home;
