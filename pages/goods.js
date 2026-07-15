import Head from "next/head";
import util from "../styles/util.module.css";
import GoodsTile from "../components/tiles/goodsTile";
import { queryNotionDatabase } from "../lib/notion";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Settings from "../components/settings";

export default function Goods({ list }) {
  const description =
    "With a high bar for build quality, aesthetic, and usability. Here are some of the goods that I own or researched.";

  //filtering logic depends on query params
  //if no query we assume the section is "recently added" and fav setting is "false"
  //if you toggle section or fav setting, the changed setting will be reflected in param
  //removing filter param triggers all and "overview"
  const router = useRouter();
  const [filter, setFilter] = React.useState(null);
  const [fav, setFav] = React.useState(null);
  const [currentList, setCurrentList] = React.useState(null);

  useEffect(() => {
    let thisPage = document.querySelector("#goodsPage");
    let top = sessionStorage.getItem("goods-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("goods-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  const filters = ["Tech", "Home", "Workspace", "Watches", "Fashion"];

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
      let filterSelected = sessionStorage.getItem("goods-filter");
      if (filterSelected && filterSelected !== filter) {
        setFilter(filterSelected);
      } else {
        setFilter("all");
      }
    }
    //set fav when no filter in url, but in the same session
    if (router && router.query.favonly == null) {
      let favSelected = sessionStorage.getItem("goods-fav");
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
        sessionStorage.setItem("goods-filter", filter);
        sessionStorage.setItem("goods-fav", false);
        for (var i = 0; i < list.length; i++) {
          for (
            var j = 0;
            j < list[i].tags.length;
            j++
          ) {
            if (
              list[i].tags[j] == filter.replace("&amp;", "&")
            ) {
              tempList.push(list[i]);
            }
          }
        }
      } else if (filter !== "all" && fav) {
        router.push({
          query: { filter: filter, favonly: fav },
        });
        sessionStorage.setItem("goods-filter", filter);
        sessionStorage.setItem("goods-fav", true);
        for (var i = 0; i < list.length; i++) {
          for (
            var j = 0;
            j < list[i].tags.length;
            j++
          ) {
            if (
              list[i].tags[j] == filter.replace("&amp;", "&") &&
              list[i].fav == fav
            ) {
              tempList.push(list[i]);
            }
          }
        }
      } else if (filter == "all" && fav) {
        router.push({
          query: { favonly: fav },
        });
        sessionStorage.setItem("goods-filter", "all");
        sessionStorage.setItem("goods-fav", true);
        for (var i = 0; i < list.length; i++) {
          if (list[i].fav == fav) {
            tempList.push(list[i]);
          }
        }
      } else if (filter == "all" && !fav) {
        router.push({
          query: {},
        });
        sessionStorage.setItem("goods-filter", "all");
        sessionStorage.setItem("goods-fav", false);
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
        <title>{"Aesthetic Goods"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />{" "}
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>

      <main className={util.page} id="goodsPage">
        <div className={util.goodsColumn}>
          <div className={util.goodsTopContainer}>
            <div className={util.projectTopLeft}>
              <h1 className={util.goodsHeader}>Aesthetic Goods</h1>
            </div>
            <p className={util.goodsDescription}>{description}</p>
          </div>

          <div className={util.tabBar}>
            <div className={util.tabRow}>
              <button
                onClick={removeFilter}
                className={util.tab}
                role="tab"
                aria-selected={filter == "all" ? "true" : null}
              >
                Recently Added
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
              <ul className={util.fullWidthGrid}>
                {currentList.map((link) => (
                  <GoodsTile
                    key={link.id}
                    title={link.title}
                    url={link.url}
                    note={link.note}
                    fav={link.fav}
                    thumbnailUrl={link.thumbnailUrl}
                    brand={link.brand}
                  />
                ))}
              </ul>
            )
          ) : (
            <p>loading...</p>
          )}
        </div>
      </main>
    </>
  );
}

function serializeGoodsItem(page) {
  const properties = page.properties;
  const thumbnail = properties.Thumbnail.files[0];

  return {
    id: page.id,
    title: properties.Name.title[0]?.plain_text ?? "",
    url: properties.URL.url,
    note: properties.Note.rich_text.map(({ href, plain_text }) => ({
      href,
      plain_text,
    })),
    fav: properties.Fav.checkbox,
    tags: properties.Tags.multi_select.map(({ name }) => name),
    thumbnailUrl: thumbnail?.file?.url ?? thumbnail?.external?.url ?? "",
    brand: properties.Brand.rich_text[0]?.plain_text ?? "",
  };
}

// notion API
export async function getStaticProps() {
  const response = await queryNotionDatabase({
    database_id: process.env.NOTION_GOODS_ID,
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
      list: response.results.map(serializeGoodsItem),
    },
    revalidate: 3600,
  };
}
