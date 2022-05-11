import styles from ".//expTile.module.css";
import util from "../../styles/util.module.css";

export default function ExpTile({ title, content, url, date }) {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.date}> {date}</p>
      </div>
      <div className={styles.stack}>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.titleLink}
          >
            <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
            <span className={styles.externalIcon}>↗</span>
          </a>
        ) : (
          <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
        )}
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
}
