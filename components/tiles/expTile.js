import styles from ".//expTile.module.css";
import util from "../../styles/util.module.css";

export default function ExpTile({ icon, title, content, url, date }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          {/* <Image
            // priority
            src={"/investments/" + icon + ".png"}
            className={styles.icon}
            height={32}
            width={32}
            alt="investment icon"
          /> */}
          {/* <p className={styles.date}>
            {new Date(date + " EST").toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </p> */}
          <p className={styles.date}> {date}</p>
        </div>
        <div className={styles.stack}>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.titleLink}
            >
              <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
              <span className={styles.externalIcon}>↗</span>
            </a>
          ) : (
            <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
          )}

          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </div>
  );
}
