import styles from ".//projectTile.module.css";
import Image from "next/image";
import util from "../../styles/util.module.css";
import Link from "next/link";

export default function ProjectTile({
  image,
  title,
  content,
  type,
  date = null,
  url,
  internal,
}) {
  const tileContent = (
    <>
      <img
        className={styles.image}
        src={"/projects/" + image + ".png"}
        width={"100%"}
        alt={title}
      />
      <div className={styles.stack}>
        <div className={styles.row}>
          <h3 className={util.tileTitle}>{title}</h3>
          {!internal && url ? (
            <span className={styles.externalIcon}>↗</span>
          ) : null}
        </div>
        <p className={util.tileContent}>{content}</p>
        <p className={styles.type}>{type}</p>
      </div>
    </>
  );

  return (
    <div className={styles.outer}>
      <p className={styles.date}>
        {date &&
          new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
      </p>
      {internal ? (
        <Link href={"/projects/" + url} className={styles.container}>
          {tileContent}
        </Link>
      ) : url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.container}
        >
          {tileContent}
        </a>
      ) : (
        <div className={styles.container}>{tileContent}</div>
      )}
    </div>
  );
}
