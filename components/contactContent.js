import styles from "../components/contactContent.module.css";
import React, { useEffect } from "react";
import Image from "next/image";
import util from "../styles/util.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function ContactContent() {
  //copy feature start
  function updateClipboard(e) {
    navigator.clipboard.writeText("hi.sj.zhang@gmail.com").then(
      function () {
        toast("Copied to clipboard");
      },
      function () {
        toast("Copy failed");
      }
    );
  }
  //copy feature end

  return (
    <>
      <div className={styles.row}>
        <div className={styles.stack}>
          <p className={styles.mainText}>Email</p>
          <p className={styles.subText}>hi.sj.zhang@gmail.com</p>
        </div>

        <div className={styles.buttonPair}>
          <a
            className={util.button + " " + styles.rightBorder}
            href="mailto:hi.sj.zhang@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2389 3.84898L17.7982 3.28166C18.0619 3.002 18.0699 2.61846 17.8062 2.35478L17.6224 2.16301C17.3827 1.9233 16.9912 1.95526 16.7355 2.21095L16.1682 2.77028L17.2389 3.84898ZM8.20174 12.0311L9.70393 11.3919L16.6875 4.40032L15.6088 3.3376L8.63322 10.3212L7.94605 11.7675C7.88213 11.9113 8.04992 12.0951 8.20174 12.0311ZM5.4131 16.9852H14.2585C15.6488 16.9852 16.4558 16.1781 16.4558 14.604V6.55772L15.1454 7.86815V14.5161C15.1454 15.2832 14.7299 15.6748 14.2185 15.6748H5.45305C4.71793 15.6748 4.31042 15.2832 4.31042 14.5161V5.9984C4.31042 5.23132 4.71793 4.83979 5.45305 4.83979H12.181L13.4994 3.52937H5.4131C3.81502 3.52937 3 4.32841 3 5.9105V14.604C3 16.1861 3.81502 16.9852 5.4131 16.9852Z"
                fill="#909090"
              />
            </svg>
            <span className={util.iconButtonText}>Compose</span>
          </a>
          <button onClick={updateClipboard} className={util.button}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.76514 16.5308C2.76514 17.9956 3.50488 18.7427 4.94775 18.7427H11.4517C12.9019 18.7427 13.6416 17.9956 13.6416 16.5308V15.249H14.8354C16.2856 15.249 17.0254 14.502 17.0254 13.0371V7.46338C17.0254 6.5918 16.8496 6.03516 16.3149 5.49316L12.8359 1.94824C12.3306 1.43555 11.7373 1.24512 10.9756 1.24512H8.33154C6.88867 1.24512 6.14893 1.99219 6.14893 3.44971V4.73145H4.94775C3.50488 4.73145 2.76514 5.47852 2.76514 6.94336V16.5308ZM12.9678 9.26514L9.17383 5.40527C8.63184 4.85596 8.18506 4.73145 7.38672 4.73145H7.35742V3.49365C7.35742 2.82715 7.70898 2.44629 8.41211 2.44629H11.415V5.91064C11.415 6.73096 11.8325 7.14111 12.6455 7.14111H15.8169V12.9932C15.8169 13.6743 15.458 14.0405 14.7549 14.0405H13.6416V11.1548C13.6416 10.2466 13.5317 9.84375 12.9678 9.26514ZM12.4624 5.74219V2.99561L15.5093 6.08643H12.8066C12.5649 6.08643 12.4624 5.98389 12.4624 5.74219ZM3.97363 16.4868V6.9873C3.97363 6.3208 4.3252 5.93994 5.02832 5.93994H7.24756V9.87305C7.24756 10.7886 7.70898 11.2427 8.61719 11.2427H12.4331V16.4868C12.4331 17.1606 12.0742 17.5342 11.3711 17.5342H5.02832C4.3252 17.5342 3.97363 17.1606 3.97363 16.4868ZM8.7417 10.1367C8.46338 10.1367 8.35352 10.0269 8.35352 9.74854V6.19629L12.228 10.1367H8.7417Z"
                fill="#909090"
              />
            </svg>
            <span className={util.iconButtonText} id="copy-text">
              Copy
            </span>
          </button>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.stack}>
          <p className={styles.mainText}>Book a time</p>
          <p className={styles.subText}>
            {"For advice, it's easier to chat live"}
          </p>
        </div>
        <a
          href="https://cal.com/sjzhang/15min"
          target="_blank"
          rel="noopener noreferrer"
          className={
            util.button + " " + util.singleButton + " " + util.iconButtonText
          }
        >
          Book
        </a>
      </div>
      <div className={styles.row}>
        <div className={styles.stack}>
          <p className={styles.mainText}>Stay in touch</p>
          <p className={styles.subText}>{"I'm most active on twitter"}</p>
        </div>
        <div className={styles.flexRow}>
          <a
            className={styles.textButton}
            href="https://twitter.com/sjzhang_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.icon}
              priority
              src={"/icons/twitter.svg"}
              height={18}
              width={18}
              alt="twitter"
            />
            <span className={util.iconButtonText}>Twitter</span>
          </a>
          <a
            className={styles.textButton}
            href="https://www.linkedin.com/in/s-j-zhang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.icon}
              priority
              src={"/icons/linkedin.svg"}
              height={18}
              width={18}
              alt="linkedin"
            />
            <span className={util.iconButtonText}>LinkedIn</span>
          </a>
          <a
            className={styles.textButton}
            href="https://read.cv/sj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.icon}
              priority
              src={"/icons/readcv.jpg"}
              height={18}
              width={18}
              alt="readcv"
            />
            <span className={util.iconButtonText}>CV</span>
          </a>
        </div>
      </div>
    </>
  );
}
