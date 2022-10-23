import styles from ".//goodsTile.module.css";
import Image from "next/image";
import util from "../../styles/util.module.css";
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
      {/* {fav ? (
        <Tooltip.Provider delayDuration={300}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
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
            </Tooltip.Trigger>

            <Tooltip.Content className={util.tooltip}>
              One of my favorites. You can set the filter to only show
              favorites.
              <Tooltip.Arrow className={util.arrow} />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      ) : null} */}
      <img
        src={thumbnailUrl}
        alt="product image"
        className={styles.image}
      ></img>

      <div className={styles.col}>
        <div>
          <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
          <span className={styles.externalIcon}>↗</span>
        </div>
        <p className={styles.brand}>{brand}</p>
      </div>
    </a>
  );
}
