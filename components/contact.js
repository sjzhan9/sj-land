import styles from "../components/contact.module.css";
import React, { useEffect } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import util from "../styles/util.module.css";
import { PopupButton } from "react-calendly";
import ContactContent from "./contactContent";

export default function Contact({ svg, label, shortcut }) {
  const [openState, setOpenState] = React.useState(false);
  // const [root, setRoot] = React.useState(false);

  // useEffect(() => {
  //   if (document) {
  //     setRoot(document.getElementById("outer"));
  //   }
  // }, []);

  useEffect(() => {
    document.addEventListener("keypress", function (event) {
      if (event.key === shortcut) {
        if (openState == false) {
          document.getElementById("contactTrigger").click();
          // setOpenState(true);
          // console.log(openState);
        }
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
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>Contact</Dialog.Title>
          <ContactContent inModal="true" />
          {/* <Dialog.Close /> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
