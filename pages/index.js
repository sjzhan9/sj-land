import Head from "next/head";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import Link from "next/link";
import Tile from "../components/tiles/homeVersions/tile";
import ReadingListTile from "../components/tiles/homeVersions/readingListTile";
import GoodsTile from "../components/tiles/homeVersions/goodsTile";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const { Client } = require("@notionhq/client");
import Script from "next/script";

export default function Home({ updatesList, goodsList, readingListList }) {
  console.log(updatesList);
  useEffect(() => {
    let thisPage = document.querySelector("#recentsPage");
    let top = sessionStorage.getItem("recents-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("recents-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  const description =
    "I’m a designer and developer by training and trade. I spend most of my spare time reading about business, finance and crypto. If this combination interests you, welcome to my corner of the internet. This is where I share my reading list, investment updates, and software adventures.";

  return (
    <>
      <Head>
        <title>SJ · Home</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" type="image/gif" />
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>{" "}
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
      <main className={util.page} id="recentsPage">
        <div className={util.goodsColumn}>
          <h1 className={util.header}>Home</h1>
          <div className={util.homeSectionContainer}>
            <h2 className={util.homeSectionTitle}>Updates</h2>
            <Link href="/about">
              <a className={util.homeLinkBotton}>View All</a>
            </Link>
          </div>
          {typeof window !== "undefined" ? (
            <Carousel
              // className={util.swimlane}
              plugins={[
                // "infinite",
                // "arrows",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: <div className={util.arrowLeft}></div>,
                    arrowLeftDisabled: (
                      <div className={util.arrowLeftDisabled}></div>
                    ),
                    arrowRight: <div className={util.arrowRight}></div>,
                    arrowRightDisabled: (
                      <div className={util.arrowRightDisabled}></div>
                    ),
                    addArrowClickHandler: true,
                  },
                },
              ]}
            >
              {updatesList.map((item) => (
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
            </Carousel>
          ) : null}
          <ul className={util.swimlane}>
            {goodsList.map((link) => (
              <GoodsTile
                key={link.id}
                title={link.properties.Name.title[0].plain_text}
                url={link.properties.URL.url}
                date={link.created_time}
                fav={link.properties.Fav.checkbox}
                tags={link.properties.Tags.multi_select}
                thumbnailUrl={link.properties.Thumbnail.files[0].file.url}
                price={link.properties.Price.number}
                brand={link.properties.Brand.rich_text[0].plain_text}
              />
            ))}
          </ul>
          <div className={util.homeSectionContainer}>
            <h2 className={util.homeSectionTitle}>Goods</h2>
            <Link href="/goods">
              <a className={util.homeLinkBotton}>View All</a>
            </Link>
          </div>
          {typeof window !== "undefined" ? (
            <Carousel
              // className={util.swimlane}
              plugins={[
                // "infinite",
                "arrows",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
              ]}
            >
              {readingListList.map((link) => (
                <ReadingListTile
                  key={link.id}
                  title={link.properties.Name.title[0].plain_text}
                  url={link.properties.URL.url}
                  date={link.created_time}
                  fav={link.properties.Fav.checkbox}
                  tags={link.properties.Tags.multi_select}
                />
              ))}
            </Carousel>
          ) : null}
        </div>
      </main>
    </>
  );
}

//notion API
export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const updatesResponse = await notion.databases.query({
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
    page_size: 8,
  });
  const goodsResponse = await notion.databases.query({
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
    page_size: 8,
  });
  const readingListResponse = await notion.databases.query({
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
    page_size: 8,
  });
  return {
    props: {
      updatesList: updatesResponse.results,
      goodsList: goodsResponse.results,
      readingListList: readingListResponse.results,
    },
    revalidate: 60,
  };
}
