import Head from "next/head";
import React, { useEffect, useState } from "react";
import util from "../styles/util.module.css";
import InvestmentTile from "../components/tiles/investmentTile";
import { queryNotionDatabase } from "../lib/notion";
import styles from "./investments.module.css";

export default function Investments({ list, activities = [] }) {
  const [activeTab, setActiveTab] = useState("Holdings");
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
    "I primarily focus on the public market these days. I own long term investments, do sector rotation trades, and frequently swing trade familiar names.";

  return (
    <>
      <Head>
        <title>{"SJ's Investments"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>
      <main className={util.page} id="investmentsPage">
        <div className={`${util.pageColumn} ${styles.pageColumn}`}>
          <h1 className={util.header}>Investments</h1>
          <div className={util.description}>

            <p>
              {
                "I primarily focus on the public market these days. I own long term investments, do sector rotation trades, and frequently swing trade familiar names. Holdings featured on the page are most likely outdated. NFA."
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

          <div className={util.tabBar}>
            <div className={util.tabRow} role="tablist" aria-label="Investments">
              {["Holdings", "Trading activity"].map((tab) => (
                <button
                  key={tab}
                  className={util.tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "Holdings" ? (
            <ul className={util.list}>
              <li className={styles.sectionHeader}>
                <p className={util.textDivider}>Public</p>
                <div className={styles.metricHeaders}>
                  <span>Allocation</span>
                  <span>Avg Cost</span>
                  <span>Unrealized</span>
                </div>
              </li>
              {[...list]
                .filter((item) => item.properties.Private.checkbox == false)
                .sort((a, b) => {
                  const aAllocation = a.properties.Allocation?.number;
                  const bAllocation = b.properties.Allocation?.number;

                  if (aAllocation == null) return bAllocation == null ? 0 : 1;
                  if (bAllocation == null) return -1;
                  return bAllocation - aAllocation;
                })
                .map((item) => (
                  <InvestmentTile
                    key={item.id}
                    icon={item.properties.Path.url}
                    title={item.properties.Name.title[0].plain_text}
                    content={item.properties.Body.rich_text[0]?.plain_text || ""}
                    url={item.properties.URL.url}
                    logoUrl={item.properties.Logo?.files[0]?.file?.url || null}
                    allocation={item.properties.Allocation?.number}
                    averageCost={item.properties["Avg Cost"]?.number}
                    unrealizedReturn={item.properties["Unrealized Return"]?.number}
                    showMetrics
                  />
                ))}
              <li className={util.textDivider}>Private</li>
              {list
                .filter((item) => item.properties.Private.checkbox == true)
                .map((item) => (
                  <InvestmentTile
                    key={item.id}
                    icon={item.properties.Path.url}
                    title={item.properties.Name.title[0].plain_text}
                    content={item.properties.Body.rich_text[0]?.plain_text || ""}
                    url={item.properties.URL.url}
                    logoUrl={item.properties.Logo?.files[0]?.file?.url || null}
                  />
                ))}
            </ul>
          ) : activities.length ? (
            <ul className={util.list}>
              <li className={styles.activityHeader}>
                <span>Trade</span>
                <span>Position change</span>
              </li>
              {activities.map((activity) => (
                <li className={styles.activityRow} key={activity.id}>
                  <div>
                    <p className={styles.activityTitle}>
                      <span className={styles[activity.side]}>{activity.side}</span>
                      {activity.name}
                    </p>
                    <time className={styles.activityDate} dateTime={activity.date}>
                      {activity.displayDate}
                    </time>
                  </div>
                  <span
                    className={`${styles.positionChange} ${
                      activity.positionChange >= 0 ? styles.positive : styles.negative
                    }`}
                  >
                    {activity.positionChange >= 0 ? "+" : ""}
                    {activity.positionChange.toLocaleString("en-US", {
                      maximumFractionDigits: 1,
                    })}
                    %
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className={util.emptyState}>No trading activity yet.</div>
          )}
        </div>
      </main>
    </>
  );
}
//notion API
export async function getStaticProps() {
  const response = await queryNotionDatabase({
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
      activities: [],
    },
    revalidate: 3600,
  };
}
