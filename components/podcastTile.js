import styles from "../components/podcastTile.module.css";
import Image from "next/image";
import util from "../styles/util.module.css";

export default function PodcastTile({ image, title, content, url }) {
  return (
    <a href={url} target="_blank" className={styles.container}>
      <Image
        className={styles.image}
        // priority
        src={"/podcasts/" + { image } + ".png"}
        width={200}
        height={200}
        layout="responsive"
        alt={title}
      />
      <div className={styles.stack}>
        <h3 className={util.tileTitle}>{title}</h3>
        <p className={util.tileContent}>{content}</p>
      </div>
    </a>
  );
}
