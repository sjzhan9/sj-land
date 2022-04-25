import Head from "next/head";
import Image from "next/image";
import util from "../styles/util.module.css";
import Link from "next/link";
import ReadingListTile from "../components/readingListTile";
const { Client } = require("@notionhq/client");
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function ReadingList({ list }) {
  const router = useRouter();
  const [filter, setFilter] = React.useState("All");
  const [currentList, setCurrentList] = React.useState(null);

  function handleTagChange(e) {
    setFilter(e.target.innerHTML);
  }

  //when filter changes create a filtered state with only items with the right tag
  useEffect(() => {
    if (filter !== "All") {
      router.push({
        query: { filter: filter },
      });
    } else {
      router.push({
        query: {},
      });
    }
    let tempList = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].properties.Tags.multi_select[0].name == filter) {
        tempList.push(list[i]);
      }
    }
    setCurrentList(tempList);
  }, [filter]);

  //set initial state
  useEffect(() => {
    if (router.query.filter && router.query.filter !== filter) {
      // console.log("changing to " + router.query.filter);

      setFilter(router.query.filter);
    }
  }, [router.query.filter]);

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
          {/* 
          <p className={util.description}>
            Some of my bookmarks that I love re-reading
          </p> */}

          <ul className={util.list}>
            <div className={util.flexRow + " " + util.tabBar}>
              <button
                onClick={handleTagChange}
                className={util.tab}
                role="tab"
                aria-selected={"All" == filter ? "true" : null}
              >
                All
              </button>
              <button
                onClick={handleTagChange}
                className={util.tab}
                role="tab"
                aria-selected={"General" == filter ? "true" : null}
              >
                General
              </button>
              <button
                onClick={handleTagChange}
                className={util.tab}
                role="tab"
                aria-selected={"Design Principles" == filter ? "true" : null}
              >
                Design Principles
              </button>
              <button
                onClick={handleTagChange}
                className={util.tab}
                role="tab"
                aria-selected={"Design Industry" == filter ? "true" : null}
              >
                Design Industry
              </button>
              <button
                onClick={handleTagChange}
                className={util.tab}
                role="tab"
                aria-selected={"Tech" == filter ? "true" : null}
              >
                Tech
              </button>
              <button
                onClick={handleTagChange}
                className={util.tab}
                role="tab"
                aria-selected={"Compensation" == filter ? "true" : null}
              >
                Compensation
              </button>
            </div>
            {filter == "All" ? (
              list.map((link) => (
                <ReadingListTile
                  key={link.id}
                  title={link.properties.Name.title[0].plain_text}
                  url={link.properties.URL.url}
                  date={link.created_time}
                  fav={link.properties.Fav.checkbox}
                  tags={link.properties.Tags.multi_select}
                />
              ))
            ) : currentList ? (
              currentList.map((link) => (
                <ReadingListTile
                  key={link.id}
                  title={link.properties.Name.title[0].plain_text}
                  url={link.properties.URL.url}
                  date={link.created_time}
                  fav={link.properties.Fav.checkbox}
                  tags={link.properties.Tags.multi_select}
                />
              ))
            ) : (
              <p>loading...</p>
            )}
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
    revalidate: 5,
  };
}
