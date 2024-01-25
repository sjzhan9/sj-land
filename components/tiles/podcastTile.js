import styles from "./podcastTile.module.css";
import Image from "next/image";
import util from "../../styles/util.module.css";

export default function PodcastTile({
  internalUrl,
  imageUrl,
  title,
  content,
  url,
  tags,
  fav,
}) {
  console.log(imageUrl);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div>
        {internalUrl ? (
          <img
            priority
            // unoptimized
            className={styles.image}
            src={"/podcasts/" + internalUrl + ".png"}
            width={288}
            height={288}
            // layout="responsive"
            alt={title}
          />
        ) : (
          <img
            // unoptimized
            className={styles.image}
            priority
            src={imageUrl}
            width={288}
            height={288}
            // layout="responsive"
            alt={title}
          />
        )}
      </div>

      <div className={styles.stack}>
        <div>
          <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
          <span className={styles.externalIcon}>↗</span>
        </div>
        <p className={styles.content}>{content}</p>
      </div>
    </a>
  );
}
