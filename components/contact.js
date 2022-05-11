import styles from "../components/contact.module.css";
import React, { useEffect } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import util from "../styles/util.module.css";
import { PopupButton } from "react-calendly";
import ContactContent from "./contactContent";

export default function Contact({ svg, label, shortcut }) {
  var time = 0;

  useEffect(() => {
    setInterval(function () {
      time++;
    }, 200);
  }, []);

  useEffect(() => {
    document.addEventListener("keypress", function (event) {
      if (event.key === shortcut && time > 1) {
        document.getElementById("contactTrigger").click();
        time = 0;
      }
    });
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild id="contactTrigger">
        <div className={styles.item}>
          <div className={styles.left}>
            <div className={util.icon}>
              <Image
                className={"iconInvert"}
                priority
                src={"/feather/" + svg + ".svg"}
                height={66}
                width={66}
                alt={label}
              />
            </div>

            <p className={styles.label}>{label}</p>
          </div>
          {shortcut ? (
            <div className={styles.shortcut}>
              <span className={styles.shortcutText}>{shortcut}</span>
            </div>
          ) : null}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={styles.content}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Dialog.Title className={styles.title}>Contact</Dialog.Title>
          <ContactContent inModal="true" />
          {/* <Dialog.Close /> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
