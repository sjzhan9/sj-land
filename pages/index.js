import Head from "next/head";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import Link from "next/link";
import Tile from "../components/tiles/homeVersions/tile";
import ReadingListTile from "../components/tiles/homeVersions/readingListTile";
import GoodsTile from "../components/tiles/homeVersions/goodsTile";
import StoreTile from "../components/tiles/homeVersions/storeTile";
import styles from "../pages/index.module.css";
import toast, { Toaster } from "react-hot-toast";
import OnboardingCard from "../components/onboardingCard";
import { motion, AnimatePresence } from "framer-motion";
const { Client } = require("@notionhq/client");
import Script from "next/script";

export default function Home({ updatesList, goodsList, readingListList }) {
  //create masterlist objects with uuid and text and cta
  const tips = [
    {
      id: "useShortCut",
      text: "Use keyboard shortcut 1 → 9 to navigate between pages. Try press 2, 3, 4, then 1 to come back here.",
      ctaText: null,
      ctaLink: null,
    },
    {
      id: "firstTime",
      text: "Don't know me yet? My name is SJ, and I love over-engineering my personal website.",
      ctaText: "More about me →",
      ctaLink: "/about",
    },
    {
      id: "seeTalent",
      text: "Many come here for my list of talented builders. If you are looking for a job, drop me a note.",
      ctaText: "Go to Talent →",
      ctaLink: "/talent",
    },
    {
      id: "seeHowItWasBuilt",
      text: "If you are curious how the site was built, I have a Twitter thread on it.",
      ctaText: "Check it out →",
      ctaLink: "https://twitter.com/sjzhang_/status/1526189236084408324",
    },
    {
      id: "openCal",
      text: "I enjoy meeting random people and help where I can. ",
      ctaText: "My open calendar is here ↗",
      ctaLink: "https://cal.com/sjzhang/15min",
    },
    {
      id: "support",
      text: "If this website helped you, or I helped you, feel free to ",
      ctaText: "check out some goodies →",
      ctaLink: "/store",
    },
  ];
  //create currentlist of what user need to see
  const [currentTips, setCurrentTips] = React.useState([0]);

  //on load, check masterlist with location storage,
  const [isVisible, setIsVisible] = React.useState(false);
  useEffect(() => {
    let newTips = tips;
    tips.forEach((tip) => {
      if (localStorage.getItem(tip.id)) {
        newTips = newTips.filter((e) => e.id != tip.id);
      }
    });
    //render currentlist
    setCurrentTips(newTips);
    //hide the tip section - framer motion depends on this
    newTips.length < 1 ? setIsVisible(false) : setIsVisible(true);
  }, []);

  const [userTime, setUserTime] = React.useState(null);

  //if all dismissed destroy the box with motion
  useEffect(() => {
    currentTips.length < 1 ? setIsVisible(false) : null;
  }, [currentTips]);

  //when user click on the x on onboarding cards
  //remove the card and write in local storage to not show again
  function handleOnboardingDismiss(e) {
    e.preventDefault();
    let element = e.target.parentElement;
    localStorage.setItem(element.id, true);
    let newTips = currentTips;
    newTips = newTips.filter((e) => e.id != element.id);
    //remove from current array to trigger a change
    setCurrentTips(newTips);
  }

  function resetOnboarding() {
    setCurrentTips(tips);
    tips.forEach((tip) => {
      localStorage.removeItem(tip.id);
    });
    setIsVisible(true);
  }

  useEffect(() => {
    let thisPage = document.querySelector("#recentsPage");
    let top = sessionStorage.getItem("recents-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("recents-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hour = new Date().getHours();
    var greeting =
      hour > 17
        ? "Good evening"
        : hour > 11
        ? "Good afternoon"
        : hour > 4
        ? "Good morning"
        : hour > 2
        ? "It's late, go to bed"
        : "Hello";
    setUserTime(greeting);
  }, []);

  const description =
    "I’m a designer and developer by training and trade. I spend most of my spare time reading about business, finance and crypto. If this combination interests you, welcome to my corner of the internet. This is where I share my reading list, investment updates, and software adventures.";

  return (
    <>
      <Head>
        <title>SJ · Home</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" type="image/gif" />
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>{" "}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-T2CWC86NTK"
      ></script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
       window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T2CWC86NTK');
        `}
      </Script>
      <main className={util.page} id="recentsPage">
        <div className={styles.homeColumn}>
          <h1 className={styles.homeGreetingTitle}>
            {userTime ? userTime : "Hello"}
          </h1>
          <span className={styles.tinyText}>
            My name is SJ — Welcome to sj.land.{" "}
            {isVisible
              ? `Below are some tips to get you started on this website.`
              : null}
            {!isVisible ? (
              <span onClick={resetOnboarding} className={styles.reset}>
                Need a refresher? Reset onboarding.
              </span>
            ) : null}
          </span>
          <AnimatePresence mode={"sync"}>
            {isVisible && (
              <motion.div
                className={styles.introContainer}
                layout
                // transition={{ type: "spring" }}
                initial={{
                  opacity: 0,
                  height: 0,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                animate={{
                  opacity: 1,
                  height: 180,
                  transition: { delay: 0.25, duration: 0.4, ease: "easeInOut" },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
              >
                <AnimatePresence mode={"popLayout"}>
                  {currentTips.map((tip) => (
                    <OnboardingCard
                      key={tip.id}
                      handleDismiss={handleOnboardingDismiss}
                      id={tip.id}
                      text={tip.text}
                      ctaText={tip.ctaText}
                      ctaLink={tip.ctaLink}
                      ref={React.createRef()}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
          <div className={styles.homeSectionContainer}>
            <h2 className={styles.homeSectionTitle}>Updates</h2>
            <Link href="/about#about-update">
              <a className={styles.homeLinkButton}>View All</a>
            </Link>
          </div>
          <ul className={styles.homeUpdatesGrid}>
            {updatesList.map((item) => (
              <Tile
                key={item.id}
                internalUrl={item.properties.Path?.url || null}
                logoUrl={item.properties.Logo?.files[0]?.file?.url || null}
                title={item.properties.Name.title[0].plain_text}
                content={item.properties.Body.rich_text}
                url={item.properties.URL.url}
                date={item.properties.Time.date.start}
                tags={item.properties.Tags.multi_select}
              />
            ))}
          </ul>
          <div className={styles.homeSectionContainer}>
            <h2 className={styles.homeSectionTitle}>Aesthetic Goods</h2>
            <Link href="/goods">
              <a className={styles.homeLinkButton}>View All</a>
            </Link>
          </div>
          <ul className={styles.homeGoodsGrid}>
            {goodsList.map((link) => (
              <GoodsTile
                key={link.id}
                title={link.properties.Name.title[0].plain_text}
                url={link.properties.URL.url}
                date={link.created_time}
                note={link.properties.Note.rich_text}
                fav={link.properties.Fav.checkbox}
                tags={link.properties.Tags.multi_select}
                thumbnailUrl={link.properties.Thumbnail.files[0].file.url}
                price={link.properties.Price.number}
                brand={link.properties.Brand.rich_text[0].plain_text}
              />
            ))}
          </ul>
          <div className={styles.homeSectionContainer}>
            <h2 className={styles.homeSectionTitle}>Reading List</h2>
            <Link href="/reading-list">
              <a className={styles.homeLinkButton}>View All</a>
            </Link>
          </div>{" "}
          <ul className={styles.homeReadingGrid}>
            {readingListList.map((link) => (
              <ReadingListTile
                key={link.id}
                title={link.properties.Name.title[0].plain_text}
                url={link.properties.URL.url}
                date={link.created_time}
                fav={link.properties.Fav.checkbox}
                tags={link.properties.Tags.multi_select}
              />
            ))}
          </ul>
          <div className={styles.homeSectionContainer}>
            <h2 className={styles.homeSectionTitle}>Boutique</h2>
            <Link href="/store">
              <a className={styles.homeLinkButton}>View All</a>
            </Link>
          </div>
          <ul className={styles.homeStoreGrid}>
            <StoreTile id="W01-01" title="W01-01" type="6K Desktop + Mobile" />
            <StoreTile id="W01-02" title="W01-02" type="6K Desktop + Mobile" />
            <StoreTile id="W01-03" title="W01-03" type="6K Desktop + Mobile" />
            <StoreTile id="W01-04" title="W01-04" type="6K Desktop + Mobile" />
          </ul>
        </div>
      </main>
    </>
  );
}

//notion API
export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const updatesResponse = await notion.databases.query({
    database_id: process.env.NOTION_RECENTS_ID,
    filter: {
      and: [
        {
          property: "Display",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Time",
        direction: "descending",
      },
    ],
    page_size: 4,
  });
  const goodsResponse = await notion.databases.query({
    database_id: process.env.NOTION_GOODS_ID,
    filter: {
      and: [
        {
          property: "Display",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Created",
        direction: "descending",
      },
    ],
    page_size: 5,
  });
  const readingListResponse = await notion.databases.query({
    database_id: process.env.NOTION_READINGLIST_ID,
    filter: {
      and: [
        {
          property: "Display",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Created",
        direction: "descending",
      },
    ],
    page_size: 8,
  });
  return {
    props: {
      updatesList: updatesResponse.results,
      goodsList: goodsResponse.results,
      readingListList: readingListResponse.results,
    },
    revalidate: 5,
  };
}
