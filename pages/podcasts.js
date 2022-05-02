import Head from "next/head";
import Image from "next/image";
import util from "../styles/util.module.css";
import Link from "next/link";
import React, { useEffect } from "react";
const { Client } = require("@notionhq/client");

import PodcastTile from "../components/tiles/podcastTile";

export default function Podcasts({ list }) {
  console.log(list);
  return (
    <>
      <Head>
        <title>{"SJ's Favorite Podcasts"}</title>
        <meta name="description" content="What I listening to when I commute" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>Podcasts</h1>
          <p className={util.description}>What I listening to when I commute</p>
          <ul className={util.grid}>
            {list.map((item) => (
              <PodcastTile
                key={item.id}
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
    database_id: process.env.NOTION_PODCASTS_ID,
  });

  return {
    props: {
      list: response.results,
    },
    revalidate: 5,
  };
}
