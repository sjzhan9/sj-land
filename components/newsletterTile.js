import styles from "../components/newsletterTile.module.css";
import Image from "next/image";
import util from "../styles/util.module.css";

export default function NewsletterTile({ image, title, content, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <Image
        className={styles.image}
        // priority
        src={"/newsletters/" + image + ".png"}
        width={120}
        height={120}
        layout="fixed"
        alt={title}
      />
      <div className={styles.stack}>
        <h3 className={util.tileTitle}>{title}</h3>
        <p className={util.tileContent}>{content}</p>
      </div>
    </a>
  );
}
