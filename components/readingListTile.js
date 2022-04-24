import styles from "../components/readingListTile.module.css";
import Image from "next/image";
import util from "../styles/util.module.css";

export default function ReadingListTile({ title, url, date, fav, tags }) {
  return (
    <div className={styles.outer}>
      <p className={styles.date}>
        {new Date(date).toLocaleDateString("en-gb", {
          year: "numeric",
          month: "short",
        })}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.container}
      >
        <div className={styles.stack}>
          <h3 className={util.tileTitle}>{title}</h3>
          {fav ? <p>Fav</p> : null}
          {tags
            ? tags.map((tag) => (
                <p key={tag.name + tag.color} className={tag.color + "Tag tag"}>
                  {tag.name}
                </p>
              ))
            : null}
          <p className={util.tileContent}>{url}</p>
        </div>
        <Image
          height={20}
          width={20}
          src={"/icons/external.svg"}
          alt="external icon"
        />
      </a>
    </div>
  );
}
