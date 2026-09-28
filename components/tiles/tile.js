import styles from ".//tile.module.css";
import util from "../../styles/util.module.css";
import Link from "next/link";
import { getUpdateFallbackIcon } from "./updateFallback";

export default function Tile({
  internalUrl,
  logoUrl,
  title,
  content,
  date,
  url,
  tags,
}) {
  const fallbackIcon = getUpdateFallbackIcon(tags, title);

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
        ) : (
          <span className={styles.fallbackIcon} aria-hidden="true">
            <img
              className="iconInvert"
              src={`/feather/${fallbackIcon}.svg`}
              alt=""
            />
          </span>
        )}
      </div>

      <div className={styles.right}>
        <div className={styles.stack}>
          {!url ? (
            <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
          ) : url.includes("http") ? (
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
            <Link href={url} className={styles.titleLink}>
              <h3 className={util.tileTitle + " " + styles.inline}>
                {title}
              </h3>
              <span className={styles.externalIcon}>→</span>
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
