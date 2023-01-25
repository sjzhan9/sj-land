import styles from "./talentList.module.css";
import Image from "next/image";
import util from "../../../styles/util.module.css";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Dialog from "@radix-ui/react-dialog";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

export default function CompanyListTile({ title, url, date, fav, tags }) {

    
    let displayUrl;
    if (url) {
      displayUrl = url
        .replace("https://www.", "")
        .replace("http://www.", "")
        .replace("https://", "")
        .replace("http://", "");
    } else {
      // You can set displayUrl to some default value if url is null or undefined
      displayUrl = "";
    }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div className={styles.icon}>
        <Image
          unoptimized
          onError="this.src='/feature/link.svg'"
          src={
            "https://s2.googleusercontent.com/s2/favicons?domain_url=" +
            url +
            "&sz=64"
          }
          height={20}
          width={20}
          alt="url favicon"
        ></Image>
      </div>

      <div className={styles.right}>
        <div className={styles.stack}>
          <div>
            <Dialog.Root>
              <Dialog.Trigger asChild id ="talentTrigger">
                <h3 className={styles.tileTitle}>{title}</h3>
              </Dialog.Trigger>
           
            <Dialog.Portal>
              <Dialog.Overlay className={styles.overlay}/>
                <Dialog.Content className={styles.content}
                  onOpenAutoFocus={(e) => e.preventDefault()}
                > 
                  <Dialog.Title className={styles.modalTitle}>{title}</Dialog.Title>
                </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
            <div className={util.tags + " " + util.flexRow + " " + styles.tags}>
              {tags
                ? tags.map((tag) => (
                    <p key={tag.name + tag.color} className={styles.tag}>
                      {tag.name}
                    </p>
                  ))
                : null}
              <span className={styles.externalIcon}>↗</span>

            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
