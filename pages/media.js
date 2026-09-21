import Head from "next/head";
import util from "../styles/util.module.css";
import React, { useEffect } from "react";
import NewsletterTile from "../components/tiles/newsletterTile";
import { queryNotionDatabase } from "../lib/notion";

export default function Media({ list }) {
  useEffect(() => {
    let thisPage = document.querySelector("#mediaPage");
    let top = sessionStorage.getItem("media-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("media-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  //page header and in-page description
  const description =
    "Newsletters and podcasts I follow closely and often share with friends.";

  return (
    <>
      <Head>
        <title>{"SJ's Favorite Media"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />{" "}
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>
      <main className={util.page} id="mediaPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Media</h1>
          <p className={util.description}>{description}</p>
          <ul className={util.list}>
            {list.map((item) => (
              <NewsletterTile
                key={item.id}
                internalUrl={item.properties.Path.url}
                imageDirectory={item.mediaType}
                imageUrl={item.properties.Logo.files[0]?.file?.url || item.properties.Logo.files[0]?.external?.url}
                title={item.properties.Name.title[0].plain_text}
                content={item.properties.Body.rich_text.map((text) => text.plain_text).join("")}
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
  const response = await queryNotionDatabase({
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

  const podcasts = await queryNotionDatabase({
    database_id: process.env.NOTION_PODCASTS_ID,
    sorts: [{ property: "Order", direction: "ascending" }],
  });

  return {
    props: {
      list: [
        ...response.results.map((item) => ({ ...item, mediaType: "newsletters" })),
        ...podcasts.results.map((item) => ({ ...item, mediaType: "podcasts" })),
      ],
    },
    revalidate: 3600,
  };
}
