import styles from ".//readingListTile.module.css";
import Image from "next/image";
import util from "../../styles/util.module.css";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function ReadingListTile({ title, url, date, fav, tags }) {
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
      {fav ? (
        <Tooltip.Provider delayDuration={300}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className={styles.heart}>
                <svg
                  width="13"
                  height="18"
                  viewBox="0 0 13 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16.8747V0H13V16.8747C13 17.308 12.4864 17.5362 12.1649 17.2458L6.83512 12.4324C6.64477 12.2605 6.35523 12.2605 6.16488 12.4324L0.83512 17.2458C0.513554 17.5362 0 17.308 0 16.8747Z"
                    fill="#838383"
                    fillOpacity="0.27"
                  />
                </svg>
              </div>
            </Tooltip.Trigger>

            <Tooltip.Content className={util.tooltip}>
              One of my favorites. You can set the filter to only show
              favorites.
              <Tooltip.Arrow className={util.arrow} />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      ) : null}
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
            <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
            <span className={styles.externalIcon}>↗</span>
          </div>

          <p className={styles.url + " " + util.hiddenOnMobile}>{displayUrl}</p>
        </div>
        <div className={util.tags + " " + util.flexRow}>
          {tags
            ? tags.map((tag) => (
                <p key={tag.name + tag.color} className={tag.color + "Tag tag"}>
                  {tag.name}
                </p>
              ))
            : null}
        </div>
      </div>
    </a>
  );
}
