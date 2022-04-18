import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import styles from "../components/theme.module.css";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  let isLightChecked = theme == "light" ? "checked" : null;
  let isDarkChecked = theme == "dark" ? "checked" : null;
  let isAutoChecked = theme == "system" ? "checked" : null;

  return (
    <div>
      <div className={styles.tabs}>
        <input
          className={styles.input}
          type="radio"
          id="radio-1"
          name="tabs"
          onChange={() => setTheme("light")}
          checked={isLightChecked}
        />
        <label className={styles.tab} htmlFor="radio-1">
          Light
        </label>
        <input
          className={styles.input}
          type="radio"
          id="radio-2"
          name="tabs"
          onChange={() => setTheme("dark")}
          checked={isDarkChecked}
        />
        <label className={styles.tab} htmlFor="radio-2">
          Dark
        </label>
        <input
          className={styles.input}
          type="radio"
          id="radio-3"
          name="tabs"
          onChange={() => setTheme("system")}
          checked={isAutoChecked}
        />
        <label className={styles.tab} htmlFor="radio-3">
          Auto
        </label>
        <span className={styles.glider}></span>
      </div>
    </div>
  );
};
