import Head from "next/head";
import Image from "next/image";
import util from "../styles/util.module.css";
import Link from "next/link";
import ReadingListTile from "../components/tiles/readingListTile";
const { Client } = require("@notionhq/client");
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

export default function ReadingList({ list }) {
  useEffect(() => {
    let thisPage = document.querySelector("#readingPage");
    let top = localStorage.getItem("reading-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      localStorage.setItem("reading-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  const description =
    "From essays to videos and tweets, this page is a collection of learning materials that I enjoy. I add to the list frequently, and will improve sorting and filtering soon.";

  const router = useRouter();
  const [filter, setFilter] = React.useState("Recently Added");
  const [currentList, setCurrentList] = React.useState(null);

  function handleTagChange(e) {
    setFilter(e.target.innerHTML);
  }

  //when filter changes create a filtered state with only items with the right tag
  useEffect(() => {
    if (filter !== "Recently Added") {
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
      if (
        list[i].properties.Tags.multi_select[0].name ==
        filter.replace("&amp;", "&")
      ) {
        tempList.push(list[i]);
      }
    }
    setCurrentList(tempList);
  }, [filter]);

  //set initial state
  useEffect(() => {
    if (router.query.filter && router.query.filter !== filter) {
      setFilter(router.query.filter);
    }
  }, [router.query.filter]);

  return (
    <>
      <Head>
        <title>{"SJ's Reading List"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />{" "}
        <meta property="og:image" content="/og/index.png" />
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

      <main className={util.page} id="readingPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Reading List</h1>

          <p className={util.description}>{description}</p>

          <ul className={util.list}>
            <div className={util.flexRow + " " + util.tabBar}>
              <button
                onClick={handleTagChange}
                className={util.tab}
                role="tab"
                aria-selected={"Recently Added" == filter ? "true" : null}
              >
                Recently Added
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
                aria-selected={
                  "Business & Finance" == filter.replace("&amp;", "&")
                    ? "true"
                    : null
                }
              >
                {"Business & Finance"}
              </button>
              <button
                onClick={handleTagChange}
                className={util.tab}
                role="tab"
                aria-selected={"Design" == filter ? "true" : null}
              >
                Design
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
            {filter == "Recently Added" ? (
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

//notion API
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
    revalidate: 60,
  };
}
