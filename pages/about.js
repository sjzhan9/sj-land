import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import ContactContent from "../components/contactContent";
import ExpTile from "../components/tiles/expTile";
import Script from "next/script";
const { Client } = require("@notionhq/client");
import Tile from "../components/tiles/tile";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function About({ list, expList }) {
  const tabs = [
    "Recent Updates",
    "Career",
    // "Background",
    "About This Site",
    "Twitter",
  ];

  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  useEffect(() => {
    let thisPage = document.querySelector("#aboutPage");
    let top = sessionStorage.getItem("about-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("about-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  const description = `I work full-time on Coinbase’s Institutional products, servicing hedge funds, market makers, and asset managers. I’m currently leading design on Prime Brokerage Financing solutions including spot leverage, shorting and agency lending products`;
  return (
    <>
      <Head>
        <title>SJ · About</title>
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
      <main className={util.page} id="aboutPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>About</h1>
          <div className={util.inset}>
            <div className={util.read}>
              <p>
                {"I work full-time on "}
                <a
                  href="https://www.coinbase.com/institutional"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.externalLink}
                >
                  {"Coinbase’s Institutional products"}
                </a>
                {
                  ", servicing hedge funds, market makers, and asset managers. I’m currently leading design on Prime Brokerage Financing solutions including spot leverage, shorting and agency lending products."
                }
              </p>
              <p>
                {
                  "Outside of work I spend most of my energy reading about the economy and the capital markets. I "
                }

                <Link href="/investments">
                  <a className={util.internalLink}>
                    invest in mostly equity and crypto
                  </a>
                </Link>

                {
                  " , but I have stakes in a few private startups as well. I used to do a bit more advising and consulting work with startups, always down to jam about the market, businesses and startup ideas."
                }
              </p>
              <p>
                {"If you knew me before it's likely from my work at "}
                <a
                  href="https://withcompound.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.normalLink}
                >
                  Compound
                </a>
                {" or from "}
                <a
                  href="https://x.com/sjzhang_/status/1526189236084408324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.normalLink}
                >
                  building this website
                </a>
                {
                  ". After four incredible years at Compound, I left following the acquisition. While I don’t have plans to rebuild this website anytime soon, I'll try my best to keep it updated."
                }
              </p>
            </div>
            <div className={util.read}></div>
            <div className={util.inset} style={{ marginBottom: "4rem" }}>
              <ContactContent />
            </div>
            <div className={util.read}>
              <h2 style={{ margin: "4rem 0rem 0.25rem 0rem" }}>
                More about me
              </h2>
            </div>
            <div className={util.tabBar} id={`about-update`}>
              <div className={util.tabRow}>
                {tabs.map((tabName) => (
                  <button
                    key={tabName}
                    onClick={() => setActiveTab(tabName)}
                    className={util.tab}
                    role="tab"
                    aria-selected={tabName == activeTab ? true : null}
                  >
                    {tabName}
                  </button>
                ))}
              </div>
            </div>
            {activeTab == "Recent Updates" && (
              <ul
                className={util.list}
                style={{ margin: "0rem 0rem 0rem 0rem" }}
              >
                {list.map((item) => (
                  <Tile
                    key={item.id}
                    internalUrl={item.properties.Path.url || null}
                    logoUrl={item.properties.Logo?.files[0]?.file?.url || null}
                    title={item.properties.Name.title[0].plain_text}
                    content={item.properties.Body.rich_text}
                    url={item.properties.URL.url}
                    date={item.properties.Time.date.start}
                    tags={item.properties.Tags.multi_select}
                  />
                ))}
              </ul>
            )}
            {activeTab == "Career" && (
              <div>
                {expList?.map((item) => (
                  <ExpTile
                    key={item.id}
                    date={item.properties.Date?.rich_text[0]?.plain_text || ""} //
                    title={item.properties.Name.title[0].plain_text} //
                    url={item.properties.URL.url} //
                    content={item.properties.Body.rich_text[0].plain_text}
                  />
                ))}
              </div>
            )}
            {activeTab == "Twitter" && (
              <div className={util.read} style={{ marginBottom: "4rem" }}>
                <div>
                  {/* <h2 id="twitter" style={{ margin: "0rem 0rem 0rem 0rem" }}>
                    SJ on Twitter
                  </h2> */}
                </div>
                <TwitterTweetEmbed tweetId={"1564256065159630849"} />
                <TwitterTweetEmbed tweetId={"1501920540642234368"} />
                {/* <TwitterTweetEmbed tweetId={"1590434156840120320"} />
              <TwitterTweetEmbed tweetId={"1607445552739885057"} />
              <TwitterTweetEmbed tweetId={"1603959970592178176"} /> */}
              </div>
            )}
            {activeTab == "About This Site" && (
              <div className={util.read}>
                <p>
                  {`This site was initially built in Apr 2022 over 2 weekends(176,591 page views since). I built it for 2
                reasons:`}
                </p>
                <ol
                  type="1"
                  start="1"
                  style={{ padding: "0rem 0rem 0rem 1.25rem" }}
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    Keep myself accountable with my investments and learnings.
                    Sharing these in public gives me another level of rigor.
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Keep myself engaged with the latest stacks. Iterating on my
                    personal site gives me an opportunity to try new libraries
                    and frameworks.
                  </li>
                </ol>
                <p>
                  This site is built with{" "}
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={util.normalLink}
                  >
                    Next.js
                  </a>{" "}
                  and deployed on{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={util.externalLink}
                  >
                    Vercel
                  </a>
                  . Content is managed in{" "}
                  <a
                    href="http://notion.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={util.normalLink}
                  >
                    Notion
                  </a>{" "}
                  and statically pre-rendered through{" "}
                  <a
                    href="https://developers.notion.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={util.externalLink}
                  >
                    Notion API
                  </a>
                  . When new discoveries are added on the go, content is
                  automatically{" "}
                  <a
                    href="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={util.normalLink}
                  >
                    regenerated
                  </a>{" "}
                  server-side.{" "}
                  <a
                    href="https://www.radix-ui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={util.externalLink}
                  >
                    Radix UI
                  </a>{" "}
                  is used for front-end components like modals and tooltips.{" "}
                  <a
                    href="https://github.com/pacocoursey/next-themes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={util.externalLink}
                  >
                    Next Themes
                  </a>{" "}
                  made light/dark-mode management easy.
                </p>
                <span
                  className={util.twitterSubtitle}
                  style={{ margin: "2rem 0rem 0rem 0rem" }}
                >
                  More on Twitter
                </span>

                <TwitterTweetEmbed tweetId={"1526189236084408324"} />
                <TwitterTweetEmbed tweetId={"1536719540775702530"} />
                <TwitterTweetEmbed tweetId={"1576936243434491904"} />
                <TwitterTweetEmbed tweetId={"1584547571342901248"} />
              </div>
            )}
            {activeTab == "Background" && (
              <div className={util.read}>
                <p>
                  {
                    "I’m deeply fascinated by all design practices from UI history to iconic chairs. My "
                  }
                  <a
                    href="https://form2shape.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={util.externalLink}
                  >
                    {"master's thesis"}
                  </a>
                  {
                    " shares my love of influential 20th century industrial design. During undergrad, I wrote papers on Jony Ive and Issey Miyake. In those fashion years, I learned about supply chains and sewed dozens of hundreds of pieces of garments. Growing up with an architect father, I’ve paid attention to shapes, forms and spaces at every street corner since I was a kid. "
                  }
                </p>
                <p>
                  {
                    "A big part of my life is my pursuit to better understand how the world works. Complicated systems fascinate me. You can find what I’ve been reading in my "
                  }
                  <Link href="/reading-list">
                    <a className={util.internalLink}>Reading List</a>
                  </Link>
                  {". "}
                </p>
              </div>
            )}
          </div>
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
