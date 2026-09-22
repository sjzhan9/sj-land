import Head from "next/head";
import React, { useEffect, useState } from "react";
import util from "../styles/util.module.css";
import InvestmentTile from "../components/tiles/investmentTile";
import { queryNotionDatabase, queryNotionDataSource } from "../lib/notion";
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
              {["Holdings", "Recent Trades"].map((tab) => (
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
              <li className={`${util.textDivider} ${styles.privateHeader}`}>
                Private
              </li>
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
            <table className={styles.activityTable}>
              <colgroup>
                <col className={styles.sideColumn} />
                <col className={styles.tickerColumn} />
                <col className={styles.changeColumn} />
                <col className={styles.dateColumn} />
              </colgroup>
              <thead>
                <tr>
                  <th>Side</th>
                  <th>Ticker</th>
                  <th>Position change</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id}>
                    <td>
                      <span className={styles[activity.side]}>{activity.side}</span>
                    </td>
                    <td>
                      <div className={styles.activityTicker}>
                        <span className={styles.activityIcon} aria-hidden="true">
                          <span>{activity.name.charAt(0)}</span>
                          <img
                            src={activity.icon}
                            alt=""
                            onError={(event) => {
                              event.currentTarget.style.display = "none";
                            }}
                          />
                        </span>
                        <span>{activity.name}</span>
                      </div>
                    </td>
                    <td
                      className={`${styles.positionChange} ${
                        activity.positionChange == null
                          ? ""
                          : activity.positionChange >= 0
                          ? styles.positive
                          : styles.negative
                      }`}
                    >
                      {activity.positionChange == null
                        ? "—"
                        : `${activity.positionChange >= 0 ? "+" : ""}${activity.positionChange.toLocaleString(
                            "en-US",
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )}%`}
                    </td>
                    <td>
                      <time className={styles.activityDate} dateTime={activity.date}>
                        {activity.displayDate}
                      </time>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
  const [response, investmentResponse, activityResponse] = await Promise.all([
    queryNotionDatabase({
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
    }),
    queryNotionDatabase({
      database_id: process.env.NOTION_INVESTMENTS_ID,
    }),
    queryNotionDataSource({
      data_source_id: "c3fc21fb-6027-4e7f-8cc2-67f5dcd9029e",
      filter: {
        and: [
          {
            property: "Display",
            checkbox: {
              equals: false,
            },
          },
          {
            property: "Notional",
            number: {
              greater_than: 10000,
            },
          },
        ],
      },
      sorts: [
        {
          property: "Executed At",
          direction: "descending",
        },
      ],
    }),
  ]);

  const investmentsById = new Map(
    investmentResponse.results.map((investment) => [investment.id, investment])
  );
  const investmentsByTicker = new Map();

  investmentResponse.results.forEach((investment) => {
    getInvestmentKeys(investment).forEach((key) => {
      investmentsByTicker.set(key, investment);
    });
  });

  const activities = activityResponse.results.filter((item) => !isOptionTrade(item)).map((item) => {
    const executedAt = item.properties["Executed At"]?.date?.start;
    const name =
      item.properties.Symbol?.rich_text?.[0]?.plain_text ||
      item.properties.Name?.title?.[0]?.plain_text ||
      "Trade";
    const side = item.properties.Side?.select?.name?.toLowerCase() || "buy";
    const relatedInvestmentId =
      item.properties.Holding?.relation?.[0]?.id ||
      item.properties.Investment?.relation?.[0]?.id;
    const investment =
      investmentsById.get(relatedInvestmentId) ||
      investmentsByTicker.get(normalizeTicker(name)) ||
      investmentsByTicker.get(INVESTMENT_NAME_BY_TICKER[normalizeTicker(name)]);
    const rawPositionChange =
      item.properties["Position Change"]?.number ??
      item.properties["Position Change"]?.formula?.number ??
      item.properties["Trade Size / Position"]?.number ??
      item.properties["Trade Size / Position"]?.formula?.number ??
      null;

    return {
      id: item.id,
      name,
      icon: getInvestmentIcon(investment, name),
      side,
      date: executedAt || "",
      displayDate: executedAt
        ? new Date(`${executedAt}T12:00:00`).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "",
      positionChange:
        rawPositionChange == null
          ? null
          : (side === "sell" && rawPositionChange > 0
              ? -rawPositionChange
              : rawPositionChange) * 100,
    };
  });

  return {
    props: {
      list: response.results,
      activities,
    },
    revalidate: 3600,
  };
}

const INVESTMENT_NAME_BY_TICKER = {
  CRM: "SALESFORCE",
  DUOL: "DUOLINGO",
  HOOD: "ROBINHOOD",
  PDD: "PINDUODUO",
  SHOP: "SHOPIFY",
};

function normalizeTicker(value = "") {
  return value.trim().toUpperCase();
}

function isOptionTrade(item) {
  const properties = item.properties;
  const instrumentType =
    properties["Instrument Type"]?.select?.name ||
    properties["Asset Type"]?.select?.name ||
    "";
  const symbol = properties.Symbol?.rich_text?.[0]?.plain_text || "";
  const name = properties.Name?.title?.[0]?.plain_text || "";

  return (
    properties.Option?.checkbox === true ||
    /option/i.test(instrumentType) ||
    /^[A-Z]{1,6}\d{6}[CP]\d{8}$/i.test(symbol.replace(/\s/g, "")) ||
    /\b(call|put)\b/i.test(name)
  );
}

function getInvestmentKeys(investment) {
  const properties = investment.properties;
  const ticker =
    properties.Ticker?.rich_text?.[0]?.plain_text ||
    properties.Ticker?.title?.[0]?.plain_text ||
    properties.Ticker?.select?.name;
  const path = properties.Path?.url?.split("/").filter(Boolean).pop();
  const name = properties.Name?.title?.[0]?.plain_text;

  return [ticker, path, name].filter(Boolean).map(normalizeTicker);
}

function getInvestmentIcon(investment, fallbackTicker) {
  if (!investment) {
    return `/investments/${fallbackTicker.toLowerCase()}.png`;
  }

  const logo = investment.properties.Logo?.files?.[0];
  const path = investment.properties.Path?.url?.split("/").filter(Boolean).pop();

  return (
    logo?.file?.url ||
    logo?.external?.url ||
    `/investments/${(path || fallbackTicker).toLowerCase()}.png`
  );
}
