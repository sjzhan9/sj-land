import styles from ".//investmentTile.module.css";
import util from "../../styles/util.module.css";

export default function InvestmentTile({ icon, title, content, url, logoUrl }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src={logoUrl || "/investments/" + icon + ".png"}
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
      </div>
    </div>
  );
}
