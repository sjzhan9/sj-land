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
        <Link href="/">
          <img
            className={util.hiddenOnMobile + " " + util.pointer + " logoInvert"}
            src="/logo.png"
            alt="site logo"
          ></img>
        </Link>

        <nav className={styles.nav}>
          <NavLink svg="recents" href="/" label="Home" shortcut="1" />
          <NavLink svg="about" href="/about" label="About" shortcut="2" />

          <NavLink
            svg="projects"
            href="/projects"
            label="Projects"
            shortcut="3"
          />
          <NavLink svg="edit-3" href="/writing" label="Writing" shortcut="4" />
          <NavLink
            svg="investments"
            href="/investments"
            label="Investments"
            shortcut="5"
          />
          <NavLink
            svg="shopping-cart"
            href="/store"
            label="Boutique"
            shortcut="6"
          />
          <p className={styles.divider}>Resources</p>
          <NavLink
            svg="reading"
            href="/reading-list"
            label="Reading List"
            shortcut="7"
          />
          <NavLink
            svg="shopping-bag"
            href="/goods"
            label="Aesthetic Goods"
            shortcut="8"
          />
          <NavLink svg="users" href="/talent" label="Talent" shortcut="9" />
          <NavLink
            svg="newsletters"
            href="/newsletters"
            label="Newsletters"
            shortcut="0"
          />
          <NavLink
            svg="podcasts"
            href="/podcasts"
            label="Podcasts"
            shortcut="-"
          />
          <p className={styles.divider}>Stay in touch</p>
          <Contact svg="chat" label="Contact" shortcut="/" />
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
