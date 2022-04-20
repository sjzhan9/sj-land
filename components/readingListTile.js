import styles from "../components/readingListTile.module.css";
import Image from "next/image";
import util from "../styles/util.module.css";

export default function ReadingListTile({ title, url, date }) {
  return (
    <div className={styles.outer}>
      <p className={styles.date}>
        {new Date(date + " EST").toLocaleDateString("en-gb", {
          year: "numeric",
          month: "short",
        })}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.container}
      >
        <div className={styles.stack}>
          <h3 className={util.tileTitle}>{title}</h3>
          <p className={util.tileContent}>{url}</p>
        </div>
        <Image
          height={20}
          width={20}
          src={"/icons/external.svg"}
          alt="external icon"
        />
      </a>
    </div>
  );
}
