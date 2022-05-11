import Head from "next/head";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import Link from "next/link";
import Tile from "../components/tiles/tile";
const { Client } = require("@notionhq/client");
import Script from "next/script";

export default function Home({ list }) {
  useEffect(() => {
    let thisPage = document.querySelector("#recentsPage");
    let top = localStorage.getItem("recents-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      localStorage.setItem("recents-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  const description =
    "I’m a designer and developer by training and trade. I spend most of my spare time reading about business, finance and crypto. If this combination interests you, welcome to my corner of the internet where I share my reading list, investment updates, and software adventures.";

  return (
    <>
      <Head>
        <title>SJ · Home</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" type="image/gif" />
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
      </Head>

      <main className={util.page} id="recentsPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Recents</h1>
          <p className={util.description}>{description}</p>
          <ul className={util.list}>
            {list.map((item) => (
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

  return {
    props: {
      list: response.results,
    },
    revalidate: 60,
  };
}
