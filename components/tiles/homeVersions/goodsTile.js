import styles from ".//goodsTile.module.css";
import util from "../../../styles/util.module.css";
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
              <span className={styles.modalIcon}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5 4C17.5 3.72386 17.2762 3.5 17 3.5H6.08582C5.80967 3.5 5.58582 3.72386 5.58582 4V12.3428C5.58582 12.6189 5.80967 12.8428 6.08582 12.8428H17C17.2762 12.8428 17.5 12.6189 17.5 12.3428V4ZM5.58582 2C4.75739 2 4.08582 2.67157 4.08582 3.5V12.8428C4.08582 13.6712 4.75739 14.3428 5.58582 14.3428H17.5C18.3285 14.3428 19 13.6712 19 12.8428V3.5C19 2.67157 18.3285 2 17.5 2H5.58582Z"
                    fill="#909090"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.08587 6.10999H2.5C1.67157 6.10999 1 6.78156 1 7.60999V16.9528C1 17.7812 1.67157 18.4528 2.5 18.4528H14.4142C15.2426 18.4528 15.9142 17.7812 15.9142 16.9528V14.3427H14.4142V16.4528C14.4142 16.7289 14.1904 16.9528 13.9142 16.9528H3C2.72386 16.9528 2.5 16.7289 2.5 16.4528V8.10999C2.5 7.83385 2.72386 7.60999 3 7.60999H4.08587V6.10999Z"
                    fill="#909090"
                  />
                </svg>
              </span>
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
