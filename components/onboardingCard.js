import styles from "../components/onboardingCard.module.css";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const OnboardingCard = React.forwardRef(
  ({ key, text, id, handleDismiss, ctaLink, ctaText }, ref) => {
    return (
      <motion.div
        layout
        key={id}
        // initial={{
        //   opacity: 0,
        //   scale: 1,
        //   //   transition: { duration: 1, ease: "easeOut" },
        // }}
        animate={{
          opacity: 1,
          scale: 1,
          //   transition: { duration: 1 },
        }}
        // whileHover={{ background: "var(--gray8)" }}
        exit={{
          opacity: 0,
          scale: 0.8,
          // x: -20,
          //   y: -20,
          transition: { delay: 0, duration: 0.2 },
        }}
        transition={{
          delay: 0.03,
          duration: 0.5,
          type: "spring",
          bounce: 0,
        }}
        // width="30%"
        className={styles.intro}
        id={id}
        ref={ref}
      >
        {text}{" "}
        {ctaLink !== null && ctaLink.includes("http") ? (
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            {ctaText}
          </a>
        ) : (
          ctaLink !== null && (
            <Link href={ctaLink}>
              <a>{ctaText}</a>
            </Link>
          )
        )}
        <span className={styles.closeIcon} onClick={handleDismiss}>
          {"×"}
        </span>
      </motion.div>
    );
  }
);
OnboardingCard.displayName = "OnboardingCard";

export default OnboardingCard;
