import type { NextPage } from "next";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: NextPage = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <img
        src="/logo.svg"
        alt="Agency Logo"
        className={styles.logo}
      />
      <div className={styles.line}></div>
      <nav className={styles.navbar}>
        <ul className={styles.navlist}>
          <li
            className={`${
              router.pathname == "/" ? styles.active : ""
            }`}
          >
            <Link href="/">
              <a>
                <span className={styles["navlink-prefix"]}>00</span>
                <span className={`${styles.navlink}`}>Home</span>
              </a>
            </Link>
          </li>
          <li
            className={`${
              router.pathname == "/destination" ? styles.active : ""
            }`}
          >
            <Link href="/destination">
              <a>
                <span className={styles["navlink-prefix"]}>01</span>
                <span className={styles.navlink}>Destination</span>
              </a>
            </Link>
          </li>
          <li
            className={`${
              router.pathname == "/crew" ? styles.active : ""
            }`}
          >
            <Link href="/crew">
              <a>
                <span className={styles["navlink-prefix"]}>02</span>
                <span className={styles.navlink}>Crew</span>
              </a>
            </Link>
          </li>
          <li
            className={`${
              router.pathname == "/technology" ? styles.active : ""
            }`}
          >
            <Link href="/technology">
              <a>
                <span className={styles["navlink-prefix"]}>03</span>
                <span className={styles.navlink}>Technology</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
