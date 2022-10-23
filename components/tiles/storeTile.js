import styles from ".//storeTile.module.css";
import Image from "next/image";
import util from "../../styles/util.module.css";

export default function StoreTile({ id, title, type, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
      id={id}
    >
      <img className={styles.image} src={"/store/" + id + ".jpg"} alt={id} />
      <div className={styles.expandRow}>
        <div className={styles.stack}>
          <div className={styles.row}>
            <h3 className={util.tileTitle}>{title}</h3>
          </div>
          <p className={styles.type}>{type}</p>
        </div>
        <button className={util.button + " " + util.secondaryButton}>
          Get ↗
        </button>
      </div>
    </a>
  );
}
