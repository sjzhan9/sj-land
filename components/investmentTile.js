import styles from "../components/investmentTile.module.css";
import util from "../styles/util.module.css";

import Image from "next/image";

export default function InvestmentTile({ icon, title, content, url, entry }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <Image
            // priority
            src={"/investments/" + icon + ".png"}
            className={styles.icon}
            height={32}
            width={32}
            alt="investment icon"
          />
        </div>
        <div className={styles.stack}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h3 className={util.tileTitle}>{title}</h3>
          </a>
          <p className={util.tileContent}>{content}</p>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.stackRight}>
          <p className={styles.type}>First entered</p>
          <p className={styles.entry}>{entry}</p>
        </div>
        {/* <Image height={20} width={20} src={`/icons/external.svg`} alt="icon" /> */}
      </div>
    </div>
  );
}
