import styles from ".//storeTile.module.css";
import Image from "next/image";
import util from "../../../styles/util.module.css";

export default function StoreTile({
  image,
  title,
  content,
  type,
  date,
  url,
  internal,
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <img
        className={styles.image}
        src={"/store/" + image + ".jpg"}
        alt={title}
      />
      <div className={styles.expandRow}>
        <div className={styles.stack}>
          <div className={styles.row}>
            <h3 className={util.tileTitle}>{title}</h3>
          </div>
          <p className={styles.type}>{type}</p>
        </div>
        <button className={util.button + " " + util.secondaryButton}>
          Download ↓
        </button>
      </div>
    </a>
  );
}
