import styles from "../components/menu.module.css";
import { ThemeChanger } from "./theme";
import Link from "next/link";
import NavLink from "./navLink";

export default function Menu() {
  //get url to decide the state of Link components

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <h3 className={styles.title}>SJ ZHANG</h3>
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
          <p className={styles.divider}>What I enjoy</p>

          <NavLink
            svg="readinglist"
            href="/reading-list"
            label="Reading List"
            shortcut="5"
          />

          <NavLink
            svg="newsletters"
            href="/newsletters"
            label="Newsletters"
            shortcut="6"
          />
          <NavLink
            svg="podcasts"
            href="/podcasts"
            label="Podcasts"
            shortcut="7"
          />
          <p className={styles.divider}>Stay in touch</p>
          <NavLink
            svg="twitter"
            href="https://twitter.com/sjzhang_"
            label="Twitter"
            external="true"
          />
          {/* <NavLink
            svg="compound"
            href="https://withcompound.com"
            label="Compound"
            external="true"
          /> */}
          {/* <NavLink
            svg="startupgenerator"
            href="https://www.startupgenerator.app/"
            label="Startup Generator"
            external="true"
          />
          <NavLink
            svg="f2s"
            href="https://form2shape.com/"
            label="Form2Shape"
            external="true"
          />
          <NavLink
            svg="sf"
            href="https://chrome.google.com/webstore/detail/system-font-everywhere/dcncgmembfephfbibnnigchndgncmdnj"
            label="SF Everywhere"
            external="true"
          /> */}
        </nav>
      </div>

      <ThemeChanger />
    </div>
  );
}
