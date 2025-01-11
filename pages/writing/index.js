import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import util from "../../styles/util.module.css";
import Script from "next/script";
const { Client } = require("@notionhq/client");
import WritingTile from "../../components/tiles/writingTile";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function Writing({ list, expList }) {
  useEffect(() => {
    let thisPage = document.querySelector("#writingPage");
    let top = sessionStorage.getItem("writing-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("writing-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  const description = `I’ve never been good at writing, but I read a lot and spend a lot of time in my head. Sharing a few pieces for record-keeping.`;
  return (
    <>
      <Head>
        <title>SJ · Writing</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />{" "}
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>

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
      <main className={util.page} id="writingPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Writing</h1>
          <p className={util.description}>{description}</p>
          <ul className={util.list} style={{ margin: "3rem -1rem" }}>
            <WritingTile
              key={1}
              title={"The Long Game: Choose a Career That Brings Lasting Joy"}
              excerpt={
                "Refecting on talking to 20-year-olds about career paths and reflecting on how I got here"
              }
              url={"the-long-game_choose-a-career-that-brings-lasting-joy"}
              date={"2024-12-28"}
            />
            <WritingTile
              key={2}
              title={"My 2022 Investment Thesis"}
              excerpt={
                "In hindsight everything I said was either obvious or rebatable. Some I don't even agree with anymore, but for the sake of record keeping, here it is."
              }
              url={"my-2022-investment-thesis"}
              date={"2022-05-16"}
            />
          </ul>
        </div>
      </main>
    </>
  );
}
//notion API
export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.databases.query({
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
  });
  const expResponse = await notion.databases.query({
    database_id: process.env.NOTION_EXPERIENCE_ID,
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
        property: "Order",
        direction: "ascending",
      },
    ],
  });

  return {
    props: {
      list: response.results,
      expList: expResponse.results,
    },
    revalidate: 5,
  };
}
