import styles from ".//tile.module.css";
import util from "../../styles/util.module.css";

import Image from "next/image";

export default function Tile({ logoUrl, title, content, tags, date, url }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Image
            className={styles.icon}
            // priority
            src={logoUrl}
            height={28}
            width={28}
            alt={title}
          />
        </a>
      </div>

      <div className={styles.right}>
        <div className={styles.stack}>
          <h3 className={util.tileTitle}>{title}</h3>
          <p className={util.tileContent}>{content}</p>
          <div className={util.tags + " " + util.flexRow}>
            {/* {tags
              ? tags.map((tag) => (
                  <p
                    key={tag.name + tag.color}
                    className={tag.color + "Tag tag"}
                  >
                    {tag.name}
                  </p>
                ))
              : null} */}
          </div>
        </div>
        <p className={styles.date}>
          {new Date(date + " EST").toLocaleDateString("en-gb", {
            year: "numeric",
            month: "short",
          })}
        </p>
      </div>
    </div>
  );
}
