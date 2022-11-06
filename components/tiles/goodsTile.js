import styles from ".//goodsTile.module.css";
import Image from "next/image";
import util from "../../styles/util.module.css";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Dialog from "@radix-ui/react-dialog";

export default function GoodsTile({
  title,
  url,
  fav,
  thumbnailUrl,
  brand,
  note,
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild id="goodsTrigger">
        <div className={styles.container}>
          <img
            src={thumbnailUrl}
            alt="product image"
            className={styles.image}
          ></img>

          <div className={styles.col}>
            <div>
              <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
            </div>
            <p className={styles.brand}>{brand}</p>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={styles.content}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <img
            src={thumbnailUrl}
            alt="product image"
            className={styles.imageInModal}
          ></img>
          <div className={styles.stack}>
            <div className={styles.top}>
              {" "}
              <p className={styles.brandInModal}>{brand}</p>
              <Dialog.Title className={styles.modalTitle}>{title}</Dialog.Title>
              <span className={styles.brandInModal}>
                {note.map((e, i) => (
                  <a key={i} href={e.href}>
                    {e.plain_text}
                  </a>
                ))}
                {/* {note.map((e) => {
                  e.href ? (
                    <a href={e.href}>{e.plain_text}</a>
                  ) : (
                    <span>{e.plain_text}</span>
                  );
                })} */}
              </span>
            </div>

            <div className={styles.row}>
              {fav ? (
                <p className={styles.disclaimer}>
                  {
                    "I have owned this item, so feel free to ask me what I think of it."
                  }
                </p>
              ) : (
                <p className={styles.disclaimer}>
                  {
                    "I do not own this item, so I can't talk about the performance."
                  }
                </p>
              )}
              <a
                className={util.primaryButton}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View</span>
                <span className={styles.externalIcon}>↗</span>
              </a>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
