import styles from ".//tile.module.css";
import util from "../../styles/util.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Tile({
  internalUrl,
  logoUrl,
  title,
  content,
  date,
  url,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {internalUrl ? (
          <img
            className={styles.icon}
            priority
            // unoptimized
            src={"/recents/" + internalUrl + ".png"}
            height={28}
            width={28}
            alt={title}
          />
        ) : logoUrl ? (
          <img
            className={styles.icon}
            priority
            // unoptimized
            src={logoUrl}
            height={28}
            width={28}
            alt={title}
          />
        ) : null}
      </div>

      <div className={styles.right}>
        <div className={styles.stack}>
          {url.includes("http") ? (
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
            <Link href={url}>
              <a className={styles.titleLink}>
                <h3 className={util.tileTitle + " " + styles.inline}>
                  {title}
                </h3>
                <span className={styles.externalIcon}>→</span>
              </a>
            </Link>
          )}
          {/* <p className={util.tileContent}>{content}</p> */}
          <p className={util.tileContent}>
            {content.map((e, i) => (
              <a key={i} href={e.href}>
                {e.plain_text}
              </a>
            ))}
          </p>
          <div className={util.tags + " " + util.flexRow}></div>
        </div>
        <p className={styles.date}>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
        </p>
      </div>
    </div>
  );
}
