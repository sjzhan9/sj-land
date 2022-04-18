import styles from "../components/navLink.module.css";
import React, { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";

export default function NavLink({ svg, label, href, shortcut, external }) {
  const router = useRouter();
  const ariaCurrent = router.asPath === href ? "page" : undefined;

  useEffect(() => {
    document.addEventListener("keypress", function (event) {
      if (event.key === shortcut) {
        router.push(href);
      }
    });
  });

  return external ? (
    <a target="_blank" className={styles.item} href={href}>
      <div className={styles.left}>
        <Image
          className={styles.icon}
          priority
          src={`/icons/${svg}.svg`}
          height={22}
          width={22}
          alt={label}
        />
        <p className={styles.label}>{label}</p>
      </div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.09102 4.00012C4.80169 4.00012 4.52422 4.11506 4.31964 4.31964C4.11506 4.52422 4.00012 4.80169 4.00012 5.09102V14.9091C4.00012 15.1984 4.11506 15.4759 4.31964 15.6804C4.52422 15.885 4.80169 16 5.09102 16H14.9091C15.1984 16 15.4759 15.885 15.6804 15.6804C15.885 15.4759 16 15.1984 16 14.9091V11.0909C16 10.9463 15.9425 10.8075 15.8402 10.7052C15.7379 10.603 15.5992 10.5455 15.4545 10.5455C15.3098 10.5455 15.1711 10.603 15.0688 10.7052C14.9665 10.8075 14.9091 10.9463 14.9091 11.0909V14.9091H5.09102V5.09102H8.90915C9.05381 5.09102 9.19254 5.03355 9.29484 4.93126C9.39713 4.82897 9.45459 4.69023 9.45459 4.54557C9.45459 4.40091 9.39713 4.26217 9.29484 4.15988C9.19254 4.05759 9.05381 4.00012 8.90915 4.00012H5.09102ZM15.8407 4.15939C15.9421 4.26108 15.9994 4.39867 16 4.5423V7.81825C16 7.96292 15.9425 8.10165 15.8402 8.20394C15.7379 8.30623 15.5992 8.3637 15.4545 8.3637C15.3098 8.3637 15.1711 8.30623 15.0688 8.20394C14.9665 8.10165 14.9091 7.96292 14.9091 7.81825V5.86228L9.29532 11.4771C9.24461 11.5278 9.1844 11.5681 9.11814 11.5955C9.05188 11.6229 8.98087 11.6371 8.90915 11.6371C8.83743 11.6371 8.76641 11.6229 8.70015 11.5955C8.63389 11.5681 8.57368 11.5278 8.52297 11.4771C8.47226 11.4264 8.43203 11.3662 8.40458 11.2999C8.37714 11.2337 8.36301 11.1627 8.36301 11.0909C8.36301 11.0192 8.37714 10.9482 8.40458 10.8819C8.43203 10.8157 8.47226 10.7555 8.52297 10.7048L14.1378 5.09102H12.1818C12.0372 5.09102 11.8984 5.03355 11.7961 4.93126C11.6938 4.82897 11.6364 4.69023 11.6364 4.54557C11.6364 4.40091 11.6938 4.26217 11.7961 4.15988C11.8984 4.05759 12.0372 4.00012 12.1818 4.00012H15.4545C15.5262 3.99994 15.5972 4.01391 15.6635 4.04124C15.7298 4.06857 15.79 4.10873 15.8407 4.15939V4.15939Z"
          fill="#979797"
        />
      </svg>
    </a>
  ) : (
    <Link href={href}>
      <a className={styles.item} aria-current={ariaCurrent}>
        <div className={styles.left}>
          <Image
            className={styles.icon}
            priority
            src={`/icons2/${svg}.svg`}
            //   className={utilStyles.borderCircle}
            height={22}
            width={22}
            alt={label}
          />
          <p className={styles.label}>{label}</p>
        </div>
        {shortcut ? (
          <div className={styles.shortcut}>
            <span className={styles.shortcutText}>{shortcut}</span>
          </div>
        ) : null}
      </a>
    </Link>
  );
}
