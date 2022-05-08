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
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h3 className={util.tileTitle}>{title}</h3>
          </a>
          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </div>
  );
}
