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
          <Image
            priority
            // unoptimized
            className={styles.image}
            src={"/podcasts/" + internalUrl + ".png"}
            width={288}
            height={288}
            layout="responsive"
            alt={title}
          />
        ) : (
          <Image
            // unoptimized
            className={styles.image}
            priority
            src={imageUrl}
            width={288}
            height={288}
            layout="responsive"
            alt={title}
          />
        )}
      </div>

      <div className={styles.stack}>
        <h3 className={util.tileTitle}>{title}</h3>
        <p className={styles.content}>{content}</p>
      </div>
    </a>
  );
}
