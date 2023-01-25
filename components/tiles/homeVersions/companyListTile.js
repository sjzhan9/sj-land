import styles from ".//companyListTile.module.css";
import Image from "next/image";
import util from "../../../styles/util.module.css";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function CompanyListTile({ title, url, date, fav, tags, content }) {
  let displayUrl = url
    .replace("https://www.", "")
    .replace("http://www.", "")
    .replace("https://", "")
    .replace("http://", "");
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div className={styles.icon}>
        <Image
          unoptimized
          onError="this.src='/feature/link.svg'"
          src={
            "https://s2.googleusercontent.com/s2/favicons?domain_url=" +
            url +
            "&sz=64"
          }
          height={20}
          width={20}
          alt="url favicon"
        ></Image>
      </div>
      <div className={styles.right}>
        <div className={styles.stack}>
          <div>
          <Tooltip.Provider delayDuration={800}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <h3 className={styles.tileTitle}>{title}</h3>
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
        <div className={util.tags + " " + util.flexRow}>
        {tags
          ? tags.map((tag) => (
              <p
                key={tag.name + tag.color}
                className={tag.color + "Tag tag"}
              >
                {tag.name}
              </p>
            ))
          : null}
      </div>
          </div>
        </div>
      </div>
    </a>
  );
}
