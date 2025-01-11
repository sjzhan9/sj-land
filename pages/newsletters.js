import Head from "next/head";
import util from "../styles/util.module.css";
import React, { useEffect } from "react";
import NewsletterTile from "../components/tiles/newsletterTile";
const { Client } = require("@notionhq/client");
import Script from "next/script";

export default function Newsletters({ list }) {
  useEffect(() => {
    let thisPage = document.querySelector("#newslettersPage");
    let top = sessionStorage.getItem("newsletters-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("newsletters-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  //page header and in-page description
  const description =
    "I skim through numerous newsletters every day, but these are the ones I follow closely and often share with friends.";

  return (
    <>
      <Head>
        <title>{"SJ's Favorite Newsletters"}</title>
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
      <main className={util.page} id="newslettersPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Newsletters</h1>
          <p className={util.description}>{description}</p>
          <ul className={util.list}>
            {list.map((item) => (
              <NewsletterTile
                key={item.id}
                internalUrl={item.properties.Path.url}
                imageUrl={item.properties.Logo.files[0].file.url}
                title={item.properties.Name.title[0].plain_text}
                content={item.properties.Body.rich_text[0].plain_text}
                url={item.properties.URL.url}
                tags={item.properties.Tags.multi_select}
                fav={item.properties.Fav.checkbox}
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
    database_id: process.env.NOTION_NEWSLETTERS_ID,
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
    },
    revalidate: 5,
  };
}
