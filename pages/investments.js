import Head from "next/head";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import InvestmentTile from "../components/tiles/investmentTile";
import Script from "next/script";
const { Client } = require("@notionhq/client");

export default function Investments({ list }) {
  console.log(list);
  useEffect(() => {
    let thisPage = document.querySelector("#investmentsPage");
    let top = sessionStorage.getItem("investments-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("investments-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  const description =
    "Below are my current investment holdings. They range from 20% of my investable asset to as small as $1K, roughly ordered by my position size.";

  return (
    <>
      <Head>
        <title>{"SJ's Investments"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />
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
      <main className={util.page} id="investmentsPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Investments</h1>
          <div className={util.description}>
            <p>{description}</p>

            <p>
              {
                "With public equity, I invest in 5-20 stocks at any given time. With crypto, I’m heavy in Ethereum and Solana, and tend hold positions in 1-5 smaller cap tokens."
              }
            </p>
            <p>
              {
                "In the private market, I've only invested in a select few. If you are a seed stage founder, I can be helpful giving product feedback, connecting you to design resources, and introducing you to folks at "
              }
              <a
                className={util.externalLink}
                href="https://www.kleinerperkins.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kleiner Perkins
              </a>
              {", "}

              <a
                className={util.externalLink}
                href="https://republic.com/venture-programs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Republic
              </a>

              {" or some other investors who write larger checks."}
            </p>
          </div>

          <ul className={util.list}>
            <p className={util.textDivider}>Private</p>
            {list
              .filter((item) => item.properties.Private.checkbox == true)
              .map((item) => (
                <InvestmentTile
                  key={item.id}
                  icon={item.properties.Path.url}
                  title={item.properties.Name.title[0].plain_text}
                  content={item.properties.Body.rich_text[0].plain_text}
                  url={item.properties.URL.url}
                  logoUrl={item.properties.Logo?.files[0]?.file?.url || null}
                />
              ))}
            <p className={util.textDivider}>Public</p>
            {list
              .filter((item) => item.properties.Private.checkbox == false)
              .map((item) => (
                <InvestmentTile
                  key={item.id}
                  icon={item.properties.Path.url}
                  title={item.properties.Name.title[0].plain_text}
                  content={item.properties.Body.rich_text[0].plain_text}
                  url={item.properties.URL.url}
                  logoUrl={item.properties.Logo?.files[0]?.file?.url || null}
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
    database_id: process.env.NOTION_INVESTMENTS_ID,
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
