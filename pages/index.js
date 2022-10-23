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
  const [userTime, setUserTime] = React.useState(null);
  const [onboarding1WasDismissed, setOnboarding1WasDismissed] =
    React.useState(null);
  const [onboarding2WasDismissed, setOnboarding2WasDismissed] =
    React.useState(null);
  const [onboarding3WasDismissed, setOnboarding3WasDismissed] =
    React.useState(null);
  const [userLocation, setUserLocation] = React.useState(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const [items, setItems] = React.useState([0, 1, 2, 3, 4]);
  const ref1 = React.createRef();
  const ref2 = React.createRef();
  const ref3 = React.createRef();
  //set onboarding state. if user dimissed before, do not show onboarding
  useEffect(() => {
    setOnboarding1WasDismissed(localStorage.getItem("onboarding1"));
    setOnboarding2WasDismissed(localStorage.getItem("onboarding2"));
    setOnboarding3WasDismissed(localStorage.getItem("onboarding3"));
    if (
      !localStorage.getItem("onboarding1") ||
      !localStorage.getItem("onboarding2") ||
      !localStorage.getItem("onboarding2")
    ) {
      setIsVisible(true);
    }
  }, []);

  //if all dismissed destroy the box with motion
  useEffect(() => {
    console.log("checked");

    if (
      onboarding1WasDismissed &&
      onboarding2WasDismissed &&
      onboarding3WasDismissed
    ) {
      console.log("fire");
      setIsVisible(false);
    }
  }, [
    onboarding1WasDismissed,
    onboarding2WasDismissed,
    onboarding3WasDismissed,
  ]);

  //when user click on the x on onboarding cards
  //remove the card and write in local storage to not show again
  function handleOnboardingDismiss(e) {
    e.preventDefault();
    let element = e.target.parentElement;
    console.log(element.id);

    localStorage.setItem(element.id, true);
    const dismissedId = element.id.replace("onboarding", "");

    dismissedId == 1
      ? setOnboarding1WasDismissed(true)
      : dismissedId == 2
      ? setOnboarding2WasDismissed(true)
      : dismissedId == 3
      ? setOnboarding3WasDismissed(true)
      : null;
  }

  // console.log(updatesList);
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

  //get user location
  useEffect(() => {
    const hour = new Date().getHours();
    var greeting =
      hour > 18
        ? "Good evening"
        : hour > 12
        ? "Good afternoon"
        : hour > 4
        ? "Good morning"
        : hour > 2
        ? "You should go to bed"
        : "Hello";
    setUserTime(greeting);

    var requestOptions = {
      method: "GET",
    };
    // i know my api key is exposed down below, if you are forking this site, please don't use my key, it's free!
    fetch(
      "https://api.geoapify.com/v1/ipinfo?&apiKey=255b8161369d4eb48bcd69e46cb0d8c4",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setUserLocation(result))
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T2CWC86NTK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <main className={util.page} id="recentsPage">
        <div className={styles.homeColumn}>
          <div className={styles.homeGreeting}>
            <h1 className={styles.homeGreetingTitle}>
              {userTime ? userTime : null}
            </h1>
            <h2 className={styles.homeGreetingSubtitle}>
              my friend from{" "}
              {userLocation
                ? userLocation.city.name + " " + userLocation.country.flag
                : null}
            </h2>
          </div>
          <p className={styles.tinyText}>
            Tip: Use keyboard shortcut 1 → 9 to navigate between pages
          </p>
          <AnimatePresence>
            {isVisible && (
              <motion.ul
                className={styles.introContainer}
                layout
                transition={{ type: "spring" }}
                initial={{
                  opacity: 0,
                  height: 100,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                animate={{
                  opacity: 1,
                  height: 100,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                exit={{
                  opacity: 1,
                  height: 0,
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
              >
                {" "}
                {/* <AnimatePresence mode={"popLayout"}> */}
                <AnimatePresence>
                  {/* {items.map((id) => (
                    <motion.div
                      style={{
                        background: "#6c6c6c",
                        height: "60px",
                        margin: "6px",
                      }}
                      layout
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ type: "spring" }}
                      key={id}
                      onClick={() => {
                        const newItems = [...items];
                        console.log(id);
                        if (id > -1) newItems.splice(id - 1, 1);
                        setItems(newItems);
                        console.log(newItems);
                      }}
                    />
                  ))} */}
                  {/* {onboarding1WasDismissed ? null : (
                    <motion.div
                      style={{
                        background: "#6c6c6c",
                        height: "60px",
                        margin: "6px",
                      }}
                      layout
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ type: "spring" }}
                      key={onboarding1WasDismissed}
                      onClick={() => {
                        setOnboarding1WasDismissed(true);
                      }}
                    />
                  )}
                  {onboarding2WasDismissed ? null : (
                    <motion.div
                      style={{
                        background: "#6c6c6c",
                        height: "60px",
                        margin: "6px",
                      }}
                      layout
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ type: "spring" }}
                      key={onboarding2WasDismissed}
                      onClick={() => {
                        setOnboarding2WasDismissed(true);
                      }}
                    />
                  )} */}

                  {onboarding1WasDismissed ? null : (
                    <OnboardingCard
                      key={6}
                      handleDismiss={handleOnboardingDismiss}
                      id={1}
                      ref={ref1}
                      text={
                        "First time on sj.land? My name is SJ, and I love over-engineering my personal website. More about me →"
                      }
                    />
                  )}
                  {onboarding2WasDismissed ? null : (
                    <OnboardingCard
                      key={7}
                      handleDismiss={handleOnboardingDismiss}
                      id={2}
                      ref={ref2}
                      text={
                        "I enjoy meeting random people, so say hi! My open calendar is here →"
                      }
                    />
                  )}
                  {onboarding3WasDismissed ? null : (
                    <OnboardingCard
                      key={8}
                      handleDismiss={handleOnboardingDismiss}
                      id={3}
                      ref={ref3}
                      text={
                        "If this website helped you, or I helped you personally, you can always buy my wallpaper →"
                      }
                    />
                  )}
                </AnimatePresence>
              </motion.ul>
            )}
          </AnimatePresence>
          <div className={styles.homeSectionContainer}>
            <h2 className={styles.homeSectionTitle}>Updates</h2>
            <Link href="/about">
              <a className={styles.homeLinkButton}>View All</a>
            </Link>
          </div>
          <ul className={styles.homeStoreGrid}>
            {updatesList.map((item) => (
              <Tile
                key={item.id}
                internalUrl={item.properties.Path.url}
                logoUrl={item.properties.Logo.files[0].file.url}
                title={item.properties.Name.title[0].plain_text}
                content={item.properties.Body.rich_text[0].plain_text}
                url={item.properties.URL.url}
                date={item.properties.Time.date.start}
                tags={item.properties.Tags.multi_select}
              />
            ))}
          </ul>
          <div className={styles.homeSectionContainer}>
            <h2 className={styles.homeSectionTitle}>Store</h2>
            <Link href="/store">
              <a className={styles.homeLinkButton}>View All</a>
            </Link>
          </div>
          <ul className={styles.homeStoreGrid}>
            <StoreTile
              image="W01-01"
              title="W01-01"
              type="6K Desktop + Mobile"
              url={"https://solana.com"}
            />
            <StoreTile
              image="W01-02"
              title="W01-02"
              type="6K Desktop + Mobile"
              url={"https://solana.com"}
            />
            <StoreTile
              image="W01-03"
              title="W01-03"
              type="6K Desktop + Mobile"
              url={"https://solana.com"}
            />
            <StoreTile
              image="W01-04"
              title="W01-04"
              type="6K Desktop + Mobile"
              url={"https://solana.com"}
            />
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
                fav={link.properties.Fav.checkbox}
                tags={link.properties.Tags.multi_select}
                thumbnailUrl={link.properties.Thumbnail.files[0].file.url}
                price={link.properties.Price.number}
                brand={link.properties.Brand.rich_text[0].plain_text}
              />
            ))}
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
    page_size: 1,
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
    page_size: 1,
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
    page_size: 1,
  });
  return {
    props: {
      updatesList: updatesResponse.results,
      goodsList: goodsResponse.results,
      readingListList: readingListResponse.results,
    },
    revalidate: 1,
  };
}
