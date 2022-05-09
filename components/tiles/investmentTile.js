import styles from ".//investmentTile.module.css";
import util from "../../styles/util.module.css";

import Image from "next/image";

export default function InvestmentTile({ icon, title, content, url, entry }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.iconContainer}>
          <Image
            // priority
            src={"/investments/" + icon + ".png"}
            height={32}
            width={32}
            alt="investment icon"
          />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.stack}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.companyLink}
          >
            <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
            <span className={styles.externalIcon}>↗</span>
          </a>
          <p className={util.tileContent}>{content}</p>
        </div>
        <div className={styles.stackRight}>
          <p className={styles.type}>First entered</p>
          <p className={styles.entry}>{entry}</p>
        </div>
      </div>
    </div>
  );
}
