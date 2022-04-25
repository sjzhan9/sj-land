import Head from "next/head";
import styles from "../styles/Home.module.css";
import util from "../styles/util.module.css";
import Link from "next/link";
import InvestmentTile from "../components/investmentTile";

export default function Investments() {
  return (
    <>
      <Head>
        <title>SJs Investments</title>
        <meta name="description" content="SJ's Investments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>Investments</h1>

          <p className={util.description}>
            {
              "With public equity, I invest in a basket of 10-20 stocks at any given time."
            }
          </p>
          <p className={util.description}>
            {
              "With crypto, I’m heavy in Ethereal and Solana, and hold position in 1-5 DeFi alt coins at any given time."
            }
          </p>
          <p className={util.description}>
            {
              "With private investments, I have invested in very selected few companies but still reach out if you are raising. I’m somewhat affiliated with "
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

            {" and knows a few Solo GPs who writes larger checks."}
          </p>

          <ul className={util.list}>
            <p className={util.divider}>Private</p>

            <InvestmentTile
              icon="mercury"
              title="Mercury"
              content="Bank for people"
              entry="Series B / $1.2B"
              url="https://mercury.com/"
            />
            <InvestmentTile
              icon="replit"
              title="Replit"
              content="Figma for code"
              entry="Series A / $980M"
            />
            <InvestmentTile
              icon="citizens"
              title="Citizens Of"
              content="I like their brunch"
              entry="Seed / $20M"
            />
            <p className={util.divider}>Public</p>
            <InvestmentTile
              icon="eth"
              title="Ethereum"
              content="Fast L1 network"
              entry="Dec 2020 / $900"
            />
            <InvestmentTile
              icon="sol"
              title="Solana"
              content="Fast L1 network"
              entry="May 2021 / $29"
            />
            <InvestmentTile
              icon="aapl"
              title="Apple"
              content="Fast L1 network"
              entry="May 2021 / $190"
            />
            <InvestmentTile
              icon="shop"
              title="Shopify"
              content="Fast L1 network"
              entry="May 2018 / $118"
            />
            <InvestmentTile
              icon="docu"
              title="Docusign"
              content="Fast L1 network"
              entry="May 2022 / $119"
            />
            <InvestmentTile
              icon="abnb"
              title="Airbnb"
              content="Fast L1 network"
              entry="IPO in May 2021 / $160"
            />
            <InvestmentTile
              icon="fb"
              title="Meta"
              content="Built the position on a commerce bet"
              entry="May 2020 / $240"
            />
            <InvestmentTile
              icon="rdpx"
              title="Dopex Rebate Token"
              content="Bet on option vaults"
              entry="Jan 2022 / $119"
            />
            <InvestmentTile
              icon="avax"
              title="Avalanche"
              content="Fast L1 network"
              entry="Sep 2021 / $80"
            />
            <InvestmentTile
              icon="sq"
              title="Block"
              content="Bet on social and crypto move by Jack Dorsey"
              entry="Mar 2022 / $90"
            />
            <InvestmentTile
              icon="refi"
              title="Reimagined Finance"
              content="Bet of FAAS (Farming as a service)"
              entry="Jan 2022 / $0.001"
            />
            <InvestmentTile
              icon="rbn"
              title="Ribbon Finance"
              content="Bet on option vaults in crypto"
              entry="Dec 2021 / $3.20"
            />
          </ul>
        </div>
      </main>
    </>
  );
}
