// import styles from "../components/contactContent.module.css";
import util from "../styles/util.module.css";
import styles from "../components/onboardingCard.module.css";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";

const OnboardingCard = React.forwardRef(
  ({ key, text, id, handleDismiss }, ref) => {
    return (
      //   <AnimatePresence mode={"popLayout"}>
      <motion.div
        key="box"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{
          y: "20%",
          opacity: 0,
          scale: 0.8,
          transition: { duration: 0.2, ease: "easeIn" },
        }}
        // transition={{ duration: 0.5, ease: "easeIn" }}
        className={styles.intro}
        id={`onboarding${id}`}
        ref={ref}
      >
        {text}
        <span className={styles.closeIcon} onClick={handleDismiss}>
          {"×"}
        </span>
      </motion.div>
      //   </AnimatePresence>
    );
  }
);
export default OnboardingCard;
