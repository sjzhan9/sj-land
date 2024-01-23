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
        <Link href={"/projects/" + url}>
          <a
            // target="_blank"
            // rel="noopener noreferrer"
            className={styles.container}
          >
            <img
              // priority
              className={styles.image}
              src={"/projects/" + image + ".png"}
              // width={400}
              // height={220}
              // layout="responsive"
              width={"100%"}
              alt={title}
            />
            <div className={styles.stack}>
              <h3 className={util.tileTitle}>{title}</h3>
              <p className={util.tileContent}>{content}</p>
              <p className={styles.type}>{type}</p>
            </div>
          </a>
        </Link>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.container}
        >
          <img
            className={styles.image}
            // priority
            src={"/projects/" + image + ".png"}
            // width={400}
            // height={220}
            width={"100%"}
            // layout="responsive"
            alt={title}
          />

          <div className={styles.stack}>
            <div className={styles.row}>
              <h3 className={util.tileTitle}>{title}</h3>
              <span className={styles.externalIcon}>↗</span>
            </div>

            <p className={util.tileContent}>{content}</p>
            <p className={styles.type}>{type}</p>
          </div>
        </a>
      )}
    </div>
  );
}
