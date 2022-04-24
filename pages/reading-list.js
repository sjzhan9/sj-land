import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import util from "../styles/util.module.css";
import Link from "next/link";
import Menu from "../components/menu";
import Background from "../components/background";
import ReadingListTile from "../components/readingListTile";
const { Client } = require("@notionhq/client");

export default function ReadingList({ list }) {
  return (
    <>
      <Head>
        <title>{"SJ's Reading List"}</title>
        <meta
          name="description"
          content="Some of my bookmarks that I love re-reading"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>Reading List</h1>

          <p className={util.description}>
            Some of my bookmarks that I love re-reading
          </p>
          <ul className={util.list}>
            {list.map((link) => (
              <ReadingListTile
                key={link.id}
                title={link.properties.Name.title[0].plain_text}
                url={link.properties.URL.url}
                date={link.created_time}
                fav={link.properties.Fav.checkbox}
                tags={link.properties.Tags.multi_select}
              />
            ))}
            {/* {list.map((link) =>
              list.id ? (
                <ReadingListTile
                  key={link.id}
                  title={link.properties.Name.title[0].plain_text}
                  url={link.properties.URL.url}
                  date={link.created_time}
                  fav={link.properties.Fav.checkbox}
                  tags={link.properties.Tags.multi_select}
                />
              ) : null
            )} */}
            {/* {list.id
              ? list.map((link) => (
                  <ReadingListTile
                    key={link.id}
                    title={link.properties.Name.title[0].plain_text}
                    url={link.properties.URL.url}
                    date={link.created_time}
                    fav={link.properties.Fav.checkbox}
                    tags={link.properties.Tags.multi_select}
                  />
                ))
              : null} */}
          </ul>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.databases.query({
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
  });

  return {
    props: {
      list: response.results,
    },
  };
  // res.status(200).json({  });
}
