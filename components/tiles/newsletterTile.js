import styles from ".//newsletterTile.module.css";
import Image from "next/image";
import util from "../../styles/util.module.css";

export default function NewsletterTile({
  imageUrl,
  title,
  content,
  url,
  tags,
  fav,
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div className={styles.image}>
        <Image
          // priority
          src={imageUrl}
          width={64}
          height={64}
          layout="fixed"
          alt={title}
        />
      </div>

      <div className={styles.stack}>
        <h3 className={util.tileTitle}>{title}</h3>
        <p className={util.tileContent}>{content}</p>
      </div>
    </a>
  );
}
