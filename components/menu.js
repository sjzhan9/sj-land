import styles from "../components/menu.module.css";
import { ThemeChanger } from "./theme";
import Link from "next/link";
import NavLink from "./navLink";
import Contact from "./contact";
import util from "../styles/util.module.css";

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <h3 className={util.siteTitle}>SJ Zhang</h3>
        <nav className={styles.nav}>
          <NavLink svg="recents" href="/" label="Recents" shortcut="1" />
          <NavLink svg="about" href="/about" label="About" shortcut="2" />
          <NavLink
            svg="projects"
            href="/projects"
            label="Projects"
            shortcut="3"
          />
          <NavLink
            svg="investments"
            href="/investments"
            label="Investments"
            shortcut="4"
          />
          <p className={styles.divider}>Resources</p>
          <NavLink
            svg="reading"
            href="/reading-list"
            label="Reading List"
            shortcut="5"
          />
          <NavLink svg="users" href="/talent" label="Talent" shortcut="6" />
          <NavLink
            svg="newsletters"
            href="/newsletters"
            label="Newsletters"
            shortcut="7"
          />
          <NavLink
            svg="podcasts"
            href="/podcasts"
            label="Podcasts"
            shortcut="8"
          />
          <p className={styles.divider}>Stay in touch</p>
          <Contact svg="chat" label="Contact" shortcut="9" />
          <NavLink
            svg="twitter"
            href="https://twitter.com/sjzhang_"
            label="Twitter"
            external="true"
          />
        </nav>
      </div>
      <ThemeChanger />
    </div>
  );
}
