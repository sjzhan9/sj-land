import Head from "next/head";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import InvestmentTile from "../components/tiles/investmentTile";

export default function Investments() {
  useEffect(() => {
    let thisPage = document.querySelector("#investmentsPage");
    let top = localStorage.getItem("investments-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      localStorage.setItem("investments-scroll", thisPage.scrollTop);
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
      </Head>

      <main className={util.page} id="investmentsPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Investments</h1>
          <p className={util.description}>{description}</p>

          <p className={util.description}>
            {
              "With public equity, I invest in a basket of 10-20 stocks at any given time. With crypto, I’m heavy in Ethereal and Solana, and tend hold positions in 1-5 smaller cap assets."
            }
          </p>
          <p className={util.description}>
            {
              "In the private market, I've invested in very selected few companies but still reach out if you are raising. I’m affiliated with "
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

            {" and knows a few investor who writes larger checks."}
          </p>

          <ul className={util.list}>
            <p className={util.divider}>Private</p>
            <InvestmentTile
              icon="replit"
              title="Replit"
              content={
                "An online IDE, Editor, Compiler, Interpreter, and REPL. Betting on it becoming the Figma for SWEs."
              }
              entry="Series B · $979M"
              url="https://replit.com/"
            />
            <InvestmentTile
              icon="mercury"
              title="Mercury"
              content={
                "Online business banking platform. Betting on vertical focused neo banks."
              }
              entry="Series B · $1.2B"
              url="https://mercury.com/"
            />

            <InvestmentTile
              icon="citizens"
              title="Citizens Of"
              content={
                "An Australian cafe group. Simply to support the business."
              }
              entry="$12M Valuation"
              url="https://citizens.coffee"
            />
            <p className={util.divider}>Public</p>
            <InvestmentTile
              icon="eth"
              title="Ethereum"
              content={
                "A decentralized blockchain with smart contract functionality. Betting on NFT and Web3 going mainstream."
              }
              entry="Dec 2020 · $900"
              url="https://ethereum.org/en/"
            />
            <InvestmentTile
              icon="sol"
              title="Solana"
              content={
                "A fast L1 blockchain, with low fees & near instant confirmations. Betting on it challenging Ethereum."
              }
              entry="May 2021 · $29"
              url="https://solana.com"
            />
            <InvestmentTile
              icon="aapl"
              title="Apple"
              content={
                "Consumer electronics, software and online services. Just a good business."
              }
              entry="Feb 2018 · $40.5"
              url="https://www.apple.com"
            />
            <InvestmentTile
              icon="shop"
              title="Shopify"
              content={
                "Online commerce platform. Built the position betting on ecommerce leaving centralized platforms for custom UX."
              }
              entry="Feb 2018 · $126"
              url="https://www.shopify.com"
            />
            <InvestmentTile
              icon="docu"
              title="Docusign"
              content="Allows organizations to manage electronic agreements. Built the position on remote work being a norm."
              entry="May 2022 · $119"
              url="https://www.docusign.com/en-us/"
            />
            <InvestmentTile
              icon="abnb"
              title="Airbnb"
              content="An online marketplace for lodging. Built the position betting on travel resurgence and remote work mobility."
              entry="IPO: Dec 2020 · $144"
              url="https://www.airbnb.com"
            />
            <InvestmentTile
              icon="fb"
              title="Meta"
              content="Social Media Company. Built the position betting on social commerce."
              entry="Feb 2018 · $191"
              url="https://about.facebook.com"
            />
            <InvestmentTile
              icon="rdpx"
              title="Dopex Rebate Token"
              content="Onchain structured product. Built the position betting on DeFi option vaults."
              entry="Jan 2022 · $119"
              url="https://www.dopex.io"
            />
            <InvestmentTile
              icon="avax"
              title="Avalanche"
              content="Fast L1 network. Part of my index of eth challengers."
              entry="Nov 2021 · $72"
              url="https://www.avax.network"
            />
            <InvestmentTile
              icon="sq"
              title="Block"
              content="Financial services and digital payments company. Betting on IRL payments and crypto moves by Jack Dorsey."
              entry="Mar 2022 · $90"
              url="https://block.xyz"
            />
            <InvestmentTile
              icon="refi"
              title="Reimagined Finance"
              content="FaaS (Farming as a Service). Betting on yield farming during a crypto winter."
              entry="Jan 2022 · $0.07"
              url="https://www.reimagined.fi"
            />
            <InvestmentTile
              icon="rbn"
              title="Ribbon Finance"
              content="Onchain structured product. Built the position betting on DeFi option vaults."
              entry="Dec 2021 · $3.20"
              url="https://www.ribbon.finance"
            />
          </ul>
        </div>
      </main>
    </>
  );
}
