import type { NextPage } from "next";
import { useState } from "react";
import styles from "../../styles/Destination.module.css";
import data from "../../public/data.json";
import Head from "next/head";

const Destination: NextPage = () => {
  const [planet, setPlanet] = useState(0);

  const altText = data.destinations[planet].images.png
    .split("-")[1]
    .split(".")[0];

  const tabs = data.destinations.map((element, index) => (
    <button
      key={index}
      className={`${styles["tab-button"]} ${
        planet === index ? styles["active-tab"] : ""
      }`}
      onClick={setPlanet.bind(null, index)}
    >
      {element.name}
    </button>
  ));

  return (
    <>
      <Head>
        <title>Destination | Space Tourism</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div>
            <span className={styles["subheading-prefix"]}>01</span>
            <span className={styles["subheading-1"]}>
              Pick your destination
            </span>
          </div>
          <img
            src={data.destinations[planet].images.png}
            alt={altText}
            className={styles.image}
          />
          <div className={styles["text-container"]}>
            <div className={styles.subnav}>{tabs}</div>
            <h1 className={styles["heading-1"]}>
              {data.destinations[planet].name}
            </h1>
            <p>{data.destinations[planet].description}</p>
            <div className={styles["info-container"]}>
              <div className={styles["info-title"]}>
                Avg. distance
              </div>
              <div className={styles["info"]}>
                {data.destinations[planet].distance}
              </div>
              <div className={styles["info-title"]}>
                Est. travel time
              </div>
              <div className={styles["info"]}>
                {data.destinations[planet].travel}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Destination;
