import styles from ".//writingTile.module.css";
import util from "../../styles/util.module.css";
import Link from "next/link";

export default function WritingTile({ title, excerpt, url, date, tags }) {
  return (
    <Link href={`writing/${url}`}>
      <a className={styles.container}>
        <div className={styles.stack}>
          <div>
            <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>{" "}
            <p className={util.tileContent}>{excerpt}</p>
          </div>

          <p className={styles.url + " " + util.hiddenOnMobile}>{date}</p>
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
      </a>
    </Link>
  );
}
