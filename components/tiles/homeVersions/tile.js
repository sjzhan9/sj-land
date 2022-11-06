import styles from ".//tile.module.css";
import util from "../../../styles/util.module.css";
import Link from "next/link";
import Image from "next/image";
import * as Tooltip from "@radix-ui/react-tooltip";

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
      <div className={styles.stack}>
        <div className={styles.iconContainer}>
          {internalUrl ? (
            <Image
              className={styles.icon}
              priority
              unoptimized
              src={"/recents/" + internalUrl + ".png"}
              height={28}
              width={28}
              alt={title}
            />
          ) : logoUrl ? (
            <Image
              className={styles.icon}
              priority
              unoptimized
              src={logoUrl}
              height={28}
              width={28}
              alt={title}
            />
          ) : null}
        </div>
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
              <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
              <span className={styles.externalIcon}>→</span>
            </a>
          </Link>
        )}
        <Tooltip.Provider delayDuration={800}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span className={styles.tileContent}>
                {content.map((e, i) => (
                  <a key={i} href={e.href}>
                    {e.plain_text}
                  </a>
                ))}
              </span>
            </Tooltip.Trigger>
            <Tooltip.Content className={util.tooltip + " " + util.tooltipLarge}>
              <span className={util.viewTruncated}>
                {content.map((e, i) => (
                  <a key={i} href={e.href}>
                    {e.plain_text}
                  </a>
                ))}
              </span>
              <Tooltip.Arrow className={util.arrow} />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
      <p className={styles.date}>
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        })}
      </p>
    </div>
  );
}
