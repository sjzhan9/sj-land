import styles from "../components/contact.module.css";
import Image from "next/image";
import util from "../styles/util.module.css";
import toast from "react-hot-toast";

const EMAIL = "hi.sj.zhang@gmail.com";

export default function Contact({ svg, label }) {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast("Email copied");
    } catch {
      toast("Copy failed");
    }
  };

  return (
    <button
      type="button"
      className={styles.item}
      onClick={copyEmail}
      aria-label={`Copy ${EMAIL}`}
    >
      <div className={styles.left}>
        <div className={`${util.icon} ${styles.contactIcon}`}>
          <Image
            className={"iconInvert"}
            priority
            src={"/feather/" + svg + ".svg"}
            height={66}
            width={66}
            alt=""
          />
        </div>
        <p className={styles.label}>{label}</p>
      </div>
      <span className={styles.copyIcon} aria-hidden="true" />
    </button>
  );
}
