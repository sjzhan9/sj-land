import Head from "next/head";
import util from "../styles/util.module.css";
import CompanyListTile from "../components/tiles/companyListTile";
const { Client } = require("@notionhq/client");
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Settings from "../components/settings";

export default function CompanyList({ list }) {
  const description =
    "A collection of web3 companies building revolutionary products.";

  //filtering logic depends on query params
  //if no query we assume the section is "recently added" and fav setting is "false"
  //if you toggle section or fav setting, the changed setting will be reflected in param
  //removing filter param triggers all and "overview"
  const router = useRouter();
  const [filter, setFilter] = React.useState(null);
  const [fav, setFav] = React.useState(null);
  const [currentList, setCurrentList] = React.useState(null);

  useEffect(() => {
    let thisPage = document.querySelector("#readingPage");
    let top = sessionStorage.getItem("reading-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("reading-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  const filters = [
    "Developer Tool",
    "Protocol (L1 / L2s)",
    "Social / Identity",
    "NFTs",
    "DeFi",
    "Transaction Infrastructure",
    "Infrastructure",
    "Gaming",
    "Security"
  ];

  //handlers to handle filter and fav setting changes
  function removeFilter() {
    setFilter("all");
  }
  function handleTagChange(e) {
    setFilter(e.target.innerHTML);
  }

  //set initial states when url has queries
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
    } else {
      setFav(false);
    }
  }, [router.query.favonly]);
  //set initial state when url has no queries
  useEffect(() => {
    //preset filter when there's no filter in url, but data stored in local storage
    if (router && router.query.filter == null) {
      let filterSelected = sessionStorage.getItem("reading-filter");
      if (filterSelected && filterSelected !== filter) {
        setFilter(filterSelected);
      } else {
        setFilter("all");
      }
    }
    //set fav when no filter in url, but in the same session
    if (router && router.query.favonly == null) {
      let favSelected = sessionStorage.getItem("reading-fav");
      if (favSelected == "true") {
        setFav(true);
      } else {
        setFav(false);
      }
    }
  }, []);

  useEffect(() => {
    if (filter && fav !== null) {
      //cycle through scenarios and compose lists
      let tempList = [];
      if (filter !== "all" && !fav) {
        router.push({
          query: { filter: filter },
        });
        sessionStorage.setItem("reading-filter", filter);
        sessionStorage.setItem("reading-fav", false);
        for (var i = 0; i < list.length; i++) {
          for (
            var j = 0;
            j < list[i].properties.Industry.multi_select.length;
            j++
          ) {
            if (
              list[i].properties.Industry.multi_select[j].name ==
              filter.replace("&amp;", "&")
            ) {
              tempList.push(list[i]);
            }
          }
        }
      } else if (filter !== "all" && fav) {
        router.push({
          query: { filter: filter, favonly: fav },
        });
        sessionStorage.setItem("reading-filter", filter);
        sessionStorage.setItem("reading-fav", true);
        for (var i = 0; i < list.length; i++) {
          for (
            var j = 0;
            j < list[i].properties.Industry.multi_select.length;
            j++
          ) {
            if (
              list[i].properties.Industry.multi_select[j].name ==
                filter.replace("&amp;", "&") &&
              list[i].properties.Raising.checkbox == fav
            ) {
              tempList.push(list[i]);
            }
          }
        }
      } else if (filter == "all" && fav) {
        router.push({
          query: { favonly: fav },
        });
        sessionStorage.setItem("reading-filter", "all");
        sessionStorage.setItem("reading-fav", true);
        for (var i = 0; i < list.length; i++) {
          if (list[i].properties.Raising.checkbox == fav) {
            tempList.push(list[i]);
          }
        }
      } else if (filter == "all" && !fav) {
        router.push({
          query: {},
        });
        sessionStorage.setItem("reading-filter", "all");
        sessionStorage.setItem("reading-fav", false);
        for (var i = 0; i < list.length; i++) {
          tempList.push(list[i]);
        }
      }
      setCurrentList(tempList);
    }
  }, [filter, fav]);

  return (
    <>
      <Head>
        <title>{"Company List"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="icon.png" />{" "}
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>
     

      <main className={util.page} id="readingPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Portfolio</h1>
          <p className={util.description}>{description}</p>

          <ul className={util.list}>
            <div className={util.tabBar}>
              <div className={util.tabRow}>
                <button
                  onClick={removeFilter}
                  className={util.tab}
                  role="tab"
                  aria-selected={filter == "all" ? "true" : null}
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
    
                  <CompanyListTile
                    key={link.id}
                    title={link.properties.Company.title[0].plain_text}
                    tags={link.properties.Industry.multi_select}
                    url = {link.properties.URL.url}
                    about = {link.properties.About.rich_text}
                    founder = {link.properties.Founder.rich_text}
                    founderLinkedin = {link.properties.FounderLinkedin.url}
                    email = {link.properties.Email.email}
                    raising = {link.properties.Raising.checkbox}
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

  const alchemy_notion = new Client({ auth: process.env.ALCHEMOTION_API_KEY});

  const portfolioListResponse = await alchemy_notion.databases.query({
    database_id: process.env.NOTION_PORTFOLIOLIST_ID,
    sorts: [
      {
        property: "Created",
        direction: "ascending",
      },
    ],
  });

  return {
    props: {
      list: portfolioListResponse.results,
    },
    revalidate: 5,
  };
}
