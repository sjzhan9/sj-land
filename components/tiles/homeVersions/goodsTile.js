import styles from ".//goodsTile.module.css";

export default function GoodsTile({ title, url, fav, tags, thumbnailUrl }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <img
        src={thumbnailUrl}
        alt="product image"
        className={styles.image}
      ></img>
      <span className={styles.externalIcon}>↗</span>

      <div className={styles.col}>
        <p className={styles.brand}>{title}</p>
      </div>
    </a>
  );
}
