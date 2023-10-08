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

  const description =
    "I’m a designer and developer by training and trade. I spend most of my spare time reading about business, finance and crypto. If this combination interests you, welcome to my corner of the internet. This is where I share my reading list, investment updates, and software adventures.";
  return (
    <>
      <Head>
        <title>SJ · About</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />{" "}
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>
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
      <main className={util.page} id="aboutPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>About</h1>
          <div className={util.inset}>
            <p className={util.description}>{description}</p>
            <div className={util.read}>
              <h2 style={{ padding: "1rem 0rem 0rem 0rem" }} id="about-update">
                Updates
              </h2>
            </div>
            <ul className={util.list} style={{ margin: "0rem 0rem 0rem 0rem" }}>
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
            <div className={util.divider}></div>
            <div className={util.read}>
              <h2>Me</h2>
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
                  " included an archive of influential 20th century industrial design. During undergrad, I wrote papers on Jony Ive and Issey Miyake. In those fashion years, I learned about supply chains and sewed dozens of garments myself. Growing up with an architect father, I’ve paid attention to shapes, forms and spaces at every street corner since I was a kid. "
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
              <p>
                {
                  "As I learn I get interested in validating my understanding through investing. I participated in different venture related progroms at "
                }
                <a
                  href="https://fellows.kleinerperkins.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.normalLink}
                >
                  Kleiner Perkins
                </a>
                {" and "}
                <a
                  href="https://republic.com/venture-programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.normalLink}
                >
                  Republic
                </a>
                {
                  " and now prequently make intros. You can get a look at my current "
                }
                <Link href="/investments">
                  <a className={util.internalLink}>investing portfolio here</a>
                </Link>
                {". "}
              </p>
              <p>
                {"To keep myself active, I play table tennis at "}
                <a
                  href="https://pingpod.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.externalLink}
                >
                  PingPod
                </a>
                {" and boulder at a few different gyms in Brooklyn. I used to "}
                <a
                  href="https://instagram.com/woandworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.externalLink}
                >
                  travel
                </a>
                {" a lot between 2014-2018."}
              </p>

              <h2>Career</h2>
              <p className={util.read}>
                {"I’m currently working at Series B fintech company "}
                <a
                  href="https://withcompound.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.externalLink}
                >
                  Compound
                </a>
                {". "}
                {
                  "In the 10+ years that I've been studying and working in design. I spent the first two in arts, and the next four years trying my hands in different design practices. In the last 6+ years, I focused on designing and developing software products. I’ve worked in large design teams as well as performed as the sole designer for startups. If you are interested to know more, you can find me on "
                }
                <a
                  href="https://www.linkedin.com/in/s-j-zhang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={util.externalLink}
                >
                  Linkedin
                </a>
                {". I’ve also added a summary below."}
              </p>
            </div>

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
            <div className={util.read}>
              <h2>This Site</h2>
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
                  personal site gives me an opportunity to try new libraries and
                  frameworks.
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

              <h2 style={{ margin: "4rem 0rem -0.5rem 0rem" }}>Contact</h2>
            </div>
            <div className={util.inset} style={{ marginBottom: "4rem" }}>
              <ContactContent />
            </div>

            <div
              className={util.read + " " + util.twitter}
              style={{ marginBottom: "4rem" }}
            >
              <div>
                <h2 id="twitter" style={{ margin: "0rem 0rem 0rem 0rem" }}>
                  SJ on Twitter
                </h2>
                <span
                  className={util.twitterSubtitle}
                  style={{ margin: "0.25rem 0rem 1rem 0rem" }}
                >
                  Popular
                </span>
              </div>
              <TwitterTweetEmbed tweetId={"1564256065159630849"} />
              <TwitterTweetEmbed tweetId={"1501920540642234368"} />
              <TwitterTweetEmbed tweetId={"1590434156840120320"} />
              <TwitterTweetEmbed tweetId={"1607445552739885057"} />
              <TwitterTweetEmbed tweetId={"1603959970592178176"} />

              <span
                className={util.twitterSubtitle}
                style={{ margin: "2rem 0rem 0rem 0rem" }}
              >
                About this website
              </span>

              <TwitterTweetEmbed tweetId={"1526189236084408324"} />
              <TwitterTweetEmbed tweetId={"1536719540775702530"} />
              <TwitterTweetEmbed tweetId={"1576936243434491904"} />
              <TwitterTweetEmbed tweetId={"1584547571342901248"} />
            </div>
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
