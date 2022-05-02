import styles from "./podcastTile.module.css";
import Image from "next/image";
import util from "../../styles/util.module.css";

export default function PodcastTile({
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
      <div className={styles.image}>
        {imageUrl ? (
          <Image
            // priority
            src={imageUrl}
            width={200}
            height={200}
            layout="responsive"
            alt={title}
          />
        ) : null}
      </div>

      <div className={styles.stack}>
        <h3 className={util.tileTitle}>{title}</h3>
        <p className={styles.content}>{content}</p>
      </div>
    </a>
  );
}
