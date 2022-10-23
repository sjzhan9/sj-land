import styles from ".//goodsTile.module.css";
import Image from "next/image";
import util from "../../../styles/util.module.css";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function GoodsTile({
  title,
  url,
  date,
  fav,
  tags,
  thumbnailUrl,
  price,
  brand,
}) {
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
        {/* <div>
          <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
          <span className={styles.externalIcon}>↗</span>
        </div> */}
        <p className={styles.brand}>{title}</p>
      </div>
    </a>
  );
}
