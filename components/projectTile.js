import styles from "../components/projectTile.module.css";
import Image from "next/image";
import util from "../styles/util.module.css";

export default function ProjectTile({ image, title, content, type, date }) {
  return (
    <div className={styles.outer}>
      <p className={styles.date}>
        {new Date(date + " EST").toLocaleDateString("en-gb", {
          year: "numeric",
          month: "short",
        })}
      </p>

      <div className={styles.container}>
        <Image
          className={styles.image}
          // priority
          src={`/projects/${image}.png`}
          width={400}
          height={220}
          layout="responsive"
          alt={title}
        />

        <div className={styles.stack}>
          <h3 className={util.tileTitle}>{title}</h3>
          <p className={util.tileContent}>{content}</p>
          <p className={styles.type}>{type}</p>
        </div>
      </div>
    </div>
  );
}
