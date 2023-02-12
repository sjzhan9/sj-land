import styles from "../components/menu.module.css";
import { ThemeChanger } from "./theme";
import Link from "next/link";
import NavLink from "./navLink";
import Contact from "./contact";
import util from "../styles/util.module.css";
import SignInModal from "./signInModal";
import { useSession } from "next-auth/react";



export default function Menu() {
  const { data: session } = useSession();

  function getCompanyNameFromEmail(email) {
    let companyName = email.split("@")[1].split(".")[0];
    companyName = companyName.toUpperCase();
    return companyName;
  }

  let matchedEmail = false;

  function checkEmails(userEmail) {
    userEmail = getCompanyNameFromEmail(userEmail);
    return (userEmail === "ALCHEMY") ? true : false;
  }

  if (session) {

    matchedEmail = checkEmails(session.user.email);
  }



  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <Link href="/">
          <img style = {{width: "150px"}}
            className={util.hiddenOnMobile + " " + util.pointer + " logoInvert"}
            src="/logo.png"
            alt="site logo"
          ></img>
        </Link>

        <nav className={styles.nav}>
          <NavLink svg="recents" href="/" label="Home" shortcut="1" />
          <NavLink svg="about" href="/about" label="About" shortcut="2" />
          <NavLink svg="users" href="/talent" label="Talent" shortcut="3" />
          <NavLink svg="projects" href="/companies" label="Portfolio" shortcut="4" />
          

          {/* <NavLink
            svg="projects"
            href="/projects"
            label="Projects"
            shortcut="3"
          />
          <NavLink
            svg="shopping-cart"
            href="/store"
            label="Boutique"
            shortcut="4"
          />
          <NavLink
            svg="investments"
            href="/investments"
            label="Investments"
            shortcut="5"
          /> */}
          <p className={styles.divider}>Resources</p>
          <NavLink
            svg="reading"
            href="/reading-list"
            label="Building web3 teams"
            shortcut="5"
          />
          {/* <NavLink
            svg="shopping-bag"
            href="/goods"
            label="Aesthetic Goods"
            shortcut="7"
          />
           */}
          <NavLink
            svg="newsletters"
            href="/newsletter"
            label="Newsletter"
            shortcut="6"
          />
          <NavLink
            svg="podcasts"
            href="/podcast"
            label="Podcast"
            shortcut="7"
          />
          <p className={styles.divider}>Reach out</p>
          <Contact svg="chat" label="Contact" shortcut="/" />
          <NavLink
            svg="twitter"
            href="https://twitter.com/alchemy_vc_"
            label="Twitter"
            external="true"
          />

         {matchedEmail ? (
          <>
         <p className={styles.divider}>Ventures Employees (Confidential)</p>
         <NavLink
         svg="overview"
         href="/overview"
         label="Overview"
         shortcut="8"
       />
       </>
         ) : null}

        </nav>
      </div>
      <div className={styles.loginDiv}>
        <SignInModal />
        <ThemeChanger />
      </div>
    </div>
  );
}
