import styles from "../components/tile.module.css";
import util from "../styles/util.module.css";

import Image from "next/image";

export default function Tile({ icon, title, content, type, date }) {
  return (
    <div className={styles.outer}>
      <p className={styles.date}>
        {new Date(date + " EST").toLocaleDateString("en-gb", {
          year: "numeric",
          month: "short",
        })}
      </p>

      <div className={styles.container}>
        <Image
          className={styles.icon}
          // priority
          src={`/icons/${icon}.svg`}
          height={32}
          width={32}
          alt={title}
        />
        <div className={styles.stack}>
          <h3 className={util.tileTitle}>{title}</h3>
          <p className={util.tileContent}>{content}</p>
          <p className={styles.type}>{type}</p>
        </div>
      </div>
    </div>
  );
}
