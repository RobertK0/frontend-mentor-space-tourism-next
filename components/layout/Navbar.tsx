import type { NextPage } from "next";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";

const Navbar: NextPage = () => {
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
          <Link href="/">
            <a>
              <span className={styles["navlink-prefix"]}>00</span>
              <span className={styles.navlink}>Home</span>
            </a>
          </Link>
          <Link href="/destination">
            <a>
              <span className={styles["navlink-prefix"]}>01</span>
              <span className={styles.navlink}>Destination</span>
            </a>
          </Link>
          <Link href="/crew">
            <a>
              <span className={styles["navlink-prefix"]}>02</span>
              <span className={styles.navlink}>Crew</span>
            </a>
          </Link>
          <Link href="/technology">
            <a>
              <span className={styles["navlink-prefix"]}>03</span>
              <span className={styles.navlink}>Technology</span>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
