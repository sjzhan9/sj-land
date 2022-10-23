import styles from ".//readingListTile.module.css";
import Image from "next/image";
import util from "../../../styles/util.module.css";
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
            <h3 className={styles.tileTitle}>{title}</h3>
            <div className={util.tags + " " + util.flexRow + " " + styles.tags}>
              {tags
                ? tags.map((tag) => (
                    <p key={tag.name + tag.color} className={styles.tag}>
                      {tag.name}
                    </p>
                  ))
                : null}
              <span className={styles.externalIcon}>↗</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
