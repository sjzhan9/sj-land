import Head from "next/head";
import util from "../styles/util.module.css";
import TalentsTile from "../components/tiles/talentsTile";
const { Client } = require("@notionhq/client");
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Settings from "../components/settings";

export default function Talents({ list }) {
  console.log(list);
  useEffect(() => {
    let thisPage = document.querySelector("#talentsPage");
    let top = localStorage.getItem("talents-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      localStorage.setItem("talents-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  const description = "Incredible design talents that I keep an eye on.";

  //filtering logic depends on query params
  //if no query we assume the section is "recently added" and fav setting is "false"
  //if you toggle section or fav setting, the changed setting will be reflected in param
  //removing filter param triggers all and "overview"
  const router = useRouter();
  const [filter, setFilter] = React.useState(null);
  const [fav, setFav] = React.useState(false);
  const [currentList, setCurrentList] = React.useState(null);

  const filters = ["Product", "Brand", "Craft", "Design Engineer", "Agency"];

  function removeFilter() {
    setFilter(null);
  }
  function handleTagChange(e) {
    setFilter(e.target.innerHTML);
  }

  //set initial states
  useEffect(() => {
    if (router.query.filter && router.query.filter !== filter) {
      setFilter(router.query.filter);
    }
  }, [router.query.filter]);
  useEffect(() => {
    if (router.query.favonly) {
      if (fav == false) {
        setFav(true);
      }
    }
  }, [router.query.favonly]);

  useEffect(() => {
    //cycle through scenarios and compose lists
    let tempList = [];
    if (filter && fav == false) {
      router.push({
        query: { filter: filter },
      });
      for (var i = 0; i < list.length; i++) {
        if (
          list[i].properties.Tags.multi_select[0].name ==
          filter.replace("&amp;", "&")
        ) {
          tempList.push(list[i]);
        }
      }
    } else if (filter && fav) {
      router.push({
        query: { filter: filter, favonly: fav },
      });
      for (var i = 0; i < list.length; i++) {
        if (
          list[i].properties.Tags.multi_select[0].name ==
            filter.replace("&amp;", "&") &&
          list[i].properties.Fav.checkbox == fav
        ) {
          tempList.push(list[i]);
        }
      }
    } else if (filter == null && fav) {
      router.push({
        query: { favonly: fav },
      });
      for (var i = 0; i < list.length; i++) {
        if (list[i].properties.Fav.checkbox == fav) {
          tempList.push(list[i]);
        }
      }
    } else {
      router.push({
        query: {},
      });
      for (var i = 0; i < list.length; i++) {
        tempList.push(list[i]);
      }
    }
    setCurrentList(tempList);
  }, [filter, fav]);

  return (
    <>
      <Head>
        <title>{"SJ's Talent List"}</title>
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

      <main className={util.page} id="talentsPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Talents</h1>
          <p className={util.description}>{description}</p>

          <ul className={util.list}>
            <div className={util.tabBar}>
              <div className={util.flexRow}>
                <button
                  onClick={removeFilter}
                  className={util.tab}
                  role="tab"
                  aria-selected={filter ? null : "true"}
                >
                  All
                </button>
                {filters.map((filterName) => (
                  <button
                    key={filterName}
                    onClick={handleTagChange}
                    className={util.tab}
                    role="tab"
                    aria-selected={
                      filter
                        ? filterName == filter.replace("&amp;", "&")
                          ? "true"
                          : null
                        : null
                    }
                  >
                    {filterName}
                  </button>
                ))}
              </div>
              <Settings status={fav} updateCheckbox={setFav} />
            </div>

            {currentList ? (
              currentList.length == 0 ? (
                <div className={util.emptyState}>
                  Nothing found. Please try adjusting the filter.
                </div>
              ) : (
                currentList.map((link) => (
                  <TalentsTile
                    key={link.id}
                    title={link.properties.Name.title[0].plain_text}
                    url={link.properties.URL.url}
                    date={link.created_time}
                    fav={link.properties.Fav.checkbox}
                    tags={link.properties.Tags.multi_select}
                    notableUrl={
                      link.properties.NotableUrl.url == null
                        ? null
                        : link.properties.NotableUrl.url
                    }
                    notableTitle={
                      link.properties.NotableTitle.rich_text[0] == undefined
                        ? null
                        : link.properties.NotableTitle.rich_text[0].plain_text
                    }
                  />
                ))
              )
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
    database_id: process.env.NOTION_TALENTS_ID,
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
