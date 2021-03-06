import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Technology.module.css";
import data from "../../public/data.json";
import { useEffect, useState } from "react";

const Technology: NextPage = () => {
  const [selection, setSelection] = useState(0);

  const tabs = data.technology.map((element, index) => (
    <button
      key={index}
      onClick={setSelection.bind(null, index)}
      className={`${styles.btn} ${
        selection === index ? styles["active-tab"] : ""
      }`}
    >
      {index + 1}
    </button>
  ));

  return (
    <>
      <Head>
        <title>Technology | Space Tourism</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles["subheading-container"]}>
            <span className={styles["subheading-prefix"]}>03</span>
            <span className={styles["subheading-1"]}>
              Space launch 101
            </span>
          </div>
          <div className={styles["text-container"]}>
            <span className={styles["name-caption"]}>
              The terminology...
            </span>
            <h1 className={styles.name}>
              {data.technology[selection].name}
            </h1>
            <p className={styles.description}>
              {data.technology[selection].description}
            </p>
          </div>
          <div className={styles["btn-container"]}>{tabs}</div>
          <picture>
            <source
              media="(max-width: 1100px)"
              srcSet={data.technology[selection].images.landscape}
            />
            <source
              media="(min-width: 1100px)"
              srcSet={data.technology[selection].images.portrait}
            />
            <img
              className={styles["img"]}
              src={data.technology[selection].images.portrait}
              alt=""
            />
          </picture>
        </div>
      </main>
    </>
  );
};

export default Technology;
