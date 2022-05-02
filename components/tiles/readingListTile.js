import styles from ".//readingListTile.module.css";
import Image from "next/image";
import util from "../../styles/util.module.css";

export default function ReadingListTile({ title, url, date, fav, tags }) {
  let displayUrl = url
    .replace("https://www.", "")
    .replace("http://www.", "")
    .replace("https://", "")
    .replace("http://", "");
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      {fav ? (
        <div className={styles.heart}>
          <svg
            width="13"
            height="18"
            viewBox="0 0 13 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16.8747V0H13V16.8747C13 17.308 12.4864 17.5362 12.1649 17.2458L6.83512 12.4324C6.64477 12.2605 6.35523 12.2605 6.16488 12.4324L0.83512 17.2458C0.513554 17.5362 0 17.308 0 16.8747Z"
              fill="#838383"
              fillOpacity="0.27"
            />
          </svg>
        </div>
      ) : null}
      <div className={styles.icon}>
        <Image
          onError="this.src='/feature/link.svg'"
          src={
            "https://s2.googleusercontent.com/s2/favicons?domain_url=" +
            url +
            "&sz=64"
          }
          // src={getFavicons("github.com").icons[0]}
          height={20}
          width={20}
          alt="url favicon"
        ></Image>
      </div>

      <div className={styles.right}>
        <div className={styles.stack}>
          <h3 className={styles.tileTitle}>{title}</h3>
          <div className={util.flexRow + " " + styles.sub}>
            <p className={styles.url}>{displayUrl}</p>
            <p className={styles.dateSub}>
              {" · Added "}
              {new Date(date).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}{" "}
            </p>
          </div>
        </div>
        <div className={util.tags + " " + util.flexRow}>
          {tags
            ? tags.map((tag) => (
                <p key={tag.name + tag.color} className={tag.color + "Tag tag"}>
                  {tag.name}
                </p>
              ))
            : null}
        </div>
      </div>

      {/* <Image
          height={20}
          width={20}
          src={"/icons/external.svg"}
          alt="external icon"
        /> */}
    </a>
  );
}
