import styles from "../components/menu.module.css";
import { ThemeChanger } from "./theme";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import Contact from "./contact";
import util from "../styles/util.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const EMAIL = "hi.sj.zhang@gmail.com";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const workLinks = [
  { href: "/projects", label: "Projects", icon: "projects" },
  { href: "/investments", label: "Investments", icon: "investments" },
  { href: "/writing", label: "Writing", icon: "edit-3" },
];

const resourceLinks = [
  { href: "/bookmarks", label: "Bookmarks", icon: "reading" },
  { href: "/goods", label: "Goods", icon: "shopping-bag" },
  { href: "/talent", label: "Talent", icon: "users" },
  { href: "/media", label: "Media", icon: "newsletters" },
];

function MobileMenu() {
  const router = useRouter();

  const isCurrent = (href) =>
    href === "/" ? router.pathname === "/" : router.asPath.startsWith(href);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast("Email copied");
    } catch {
      toast("Copy failed");
    }
  };

  return (
    <Dialog.Root>
      <nav className={styles.mobileDock} aria-label="Primary navigation">
        <div className={styles.mobilePrimaryGroup}>
          <Link
            href="/"
            prefetch={false}
            className={`${styles.mobileDockButton} ${styles.mobileSignature}`}
            aria-label="Home"
          >
            <Image
              src="/logo.png"
              width={62}
              height={11}
              alt=""
              priority
            />
          </Link>
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className={styles.mobileDockButton}
              aria-current={isCurrent(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Dialog.Trigger asChild>
          <button
            type="button"
            className={`${styles.mobileDockButton} ${styles.mobileMoreButton}`}
            aria-label="Open more navigation"
          >
            <span className={styles.moreDots}>•••</span>
          </button>
        </Dialog.Trigger>
      </nav>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.sheetOverlay} />
        <Dialog.Content
          className={styles.sheetContent}
          onOpenAutoFocus={(event) => event.preventDefault()}
        >
          <Dialog.Title className={styles.visuallyHidden}>
            More navigation
          </Dialog.Title>
          <div className={styles.sheetList}>
            {workLinks.map((link) => (
              <Dialog.Close asChild key={link.href}>
                <Link
                  href={link.href}
                  prefetch={false}
                  className={styles.sheetItem}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                >
                  <Image
                    className={`${styles.sheetLeadingIcon} iconInvert`}
                    src={`/feather/${link.icon}.svg`}
                    height={20}
                    width={20}
                    alt=""
                  />
                  <span>{link.label}</span>
                </Link>
              </Dialog.Close>
            ))}
            <div className={styles.sheetDivider} />
            {resourceLinks.map((link) => (
              <Dialog.Close asChild key={link.href}>
                <Link
                  href={link.href}
                  prefetch={false}
                  className={styles.sheetItem}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                >
                  <Image
                    className={`${styles.sheetLeadingIcon} iconInvert`}
                    src={`/feather/${link.icon}.svg`}
                    height={20}
                    width={20}
                    alt=""
                  />
                  <span>{link.label}</span>
                </Link>
              </Dialog.Close>
            ))}
            <div className={styles.sheetDivider} />
            <Dialog.Close asChild>
              <button
                type="button"
                className={styles.sheetItem}
                onClick={copyEmail}
              >
                <Image
                  className={`${styles.sheetLeadingIcon} iconInvert`}
                  src="/feather/mail.svg"
                  height={20}
                  width={20}
                  alt=""
                />
                <span>Email</span>
                <Image
                  className={`${styles.sheetTrailingIcon} iconInvert`}
                  src="/feather/copy.svg"
                  height={16}
                  width={16}
                  alt=""
                />
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <a
                className={styles.sheetItem}
                href="https://twitter.com/sjzhang_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={`${styles.sheetLeadingIcon} ${styles.sheetSocialIcon}`}
                  src="/icons/twitter.svg"
                  height={20}
                  width={20}
                  alt=""
                />
                <span>Twitter</span>
                <span className={styles.sheetExternal}>↗</span>
              </a>
            </Dialog.Close>
            <Dialog.Close asChild>
              <a
                className={styles.sheetItem}
                href="https://www.linkedin.com/in/sj-zhang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={`${styles.sheetLeadingIcon} ${styles.sheetSocialIcon}`}
                  src="/icons/linkedin.svg"
                  height={20}
                  width={20}
                  alt=""
                />
                <span>LinkedIn</span>
                <span className={styles.sheetExternal}>↗</span>
              </a>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default function Menu() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.upper}>
          <Link href="/" prefetch={false}>
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
          <NavLink
            svg="investments"
            href="/investments"
            label="Investments"
            shortcut="4"
          />
          <NavLink svg="edit-3" href="/writing" label="Writing" shortcut="5" />
          <p className={styles.divider}>Resources</p>
          <NavLink
            svg="reading"
            href="/bookmarks"
            label="Bookmarks"
            shortcut="6"
          />
          <NavLink
            svg="shopping-bag"
            href="/goods"
            label="Goods"
            shortcut="7"
          />
          <NavLink svg="users" href="/talent" label="Talent" shortcut="8" />
          <NavLink
            svg="newsletters"
            href="/media"
            label="Media"
            shortcut="9"
          />
          <p className={styles.divider}>Stay in touch</p>
          <Contact svg="mail" label="Email" />
          <NavLink
            svg="twitter"
            href="https://twitter.com/sjzhang_"
            label="Twitter"
            external="true"
          />
          <NavLink
            svg="linkedin"
            href="https://www.linkedin.com/in/sj-zhang"
            label="LinkedIn"
            external="true"
          />
          </nav>
        </div>
        <div className={styles.themeToggle}>
          <ThemeChanger />
        </div>
      </div>
      <MobileMenu />
    </>
  );
}
