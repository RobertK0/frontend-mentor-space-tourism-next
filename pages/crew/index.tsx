import type { NextPage } from "next";
import styles from "../../styles/Crew.module.css";
import data from "../../public/data.json";
import Head from "next/head";
import { useState } from "react";

const Crew: NextPage = () => {
  const [selection, setSelection] = useState(0);

  const tabs = data.crew.map((element, index) => (
    <button
      key={index}
      onClick={setSelection.bind(null, index)}
      className={`${styles.btn} ${
        selection === index ? styles["active-tab"] : ""
      }`}
    >
      Crew {index}
    </button>
  ));
  return (
    <>
      <Head>
        <title>Crew | Space Tourism</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles["text-container"]}>
            <div>
              <span className={styles["subheading-prefix"]}>
                02
              </span>
              <span className={styles["subheading-1"]}>
                Meet your crew
              </span>
            </div>
            <span className={styles.role}>
              {data.crew[selection].role}
            </span>
            <h1 className={styles.name}>
              {data.crew[selection].name}
            </h1>
            <p className={styles.bio}>{data.crew[selection].bio}</p>
            <div className={styles["btn-container"]}>{tabs}</div>
          </div>
        </div>
        <img
          className={styles["crew-img"]}
          src={data.crew[selection].images.png}
          alt="crew member"
        />
      </main>
    </>
  );
};

export default Crew;
