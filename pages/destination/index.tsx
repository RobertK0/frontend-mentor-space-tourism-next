import type { NextPage } from "next";
import { useState } from "react";
import styles from "../../styles/Destination.module.css";
import data from "../../public/data.json";

const Destination: NextPage = () => {
  const [planet, setPlanet] = useState(0);

  const altText = data.destinations[planet].images.png
    .split("-")[1]
    .split(".")[0];

  const tabs = data.destinations.map((planet, index) => (
    <button
      className={styles["tab-button"]}
      onClick={setPlanet.bind(null, index)}
    >
      {planet.name}
    </button>
  ));

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <span className={styles["subheading-1"]}>
          Pick your destination
        </span>
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
  );
};

export default Destination;
