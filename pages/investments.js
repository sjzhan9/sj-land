import Head from "next/head";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import InvestmentTile from "../components/tiles/investmentTile";
import Script from "next/script";

export default function Investments() {
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
      <main className={util.page} id="investmentsPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Investments</h1>
          <div className={util.description}>
            <p>{description}</p>

            <p>
              {
                "With public equity, I invest in 5-20 stocks at any given time. With crypto, I’m heavy in Ethereal and Solana, and tend hold positions in 1-5 smaller cap tokens."
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
            <span className={util.badge}>{"Last updated Oct 3, 2022"}</span>
          </div>

          <ul className={util.list}>
            <p className={util.textDivider}>Private</p>
            <InvestmentTile
              icon="replit"
              title="Replit"
              content={
                "An online IDE, Editor, Compiler and more. Betting on it becoming the Figma for SWEs."
              }
              entry="Series B · $979M"
              url="https://replit.com/"
            />
            <InvestmentTile
              icon="mercury"
              title="Mercury"
              content={
                "Online business banking platform. Betting on the best-in-class, vertical focused neobank."
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
            <p className={util.textDivider}>Public</p>
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
                "Makes phones, computers and stuff. Just a good business."
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
              icon="lmnd"
              title="Lemonade"
              content={
                "Betting on the Insurtech company surviving the recession and coming out stronger."
              }
              entry="Aug 2022 · $18"
              url="https://www.lemonade.com"
            />
            <InvestmentTile
              icon="tsla"
              title="Tesla"
              content="Cool car, robots and AI. Don't really know why I own."
              entry="Jul 2022 · $670"
              url="https://www.tesla.com/"
            />
            <InvestmentTile
              icon="real"
              title="The Real Real"
              content="Betting on consumer spending on “going out fashion” post pandemic and buying second-hand due to decreased spending power during the recession."
              entry="May 2022 · $119"
              url="https://www.therealreal.com"
            />
            <InvestmentTile
              icon="adbe"
              title="Adobe"
              content={"Very bullish if the Figma acquisition go through."}
              entry="Sep 2022 · $280"
              url="https://www.adobe.com"
            />
            <InvestmentTile
              icon="dis"
              title="Disney"
              content={
                "Betting on Disney+ growth and how it contributes to the overall brand affinity we have with Disney."
              }
              entry="Sep 2022 · $100"
              url="https://www.disney.com"
            />
            {/* <InvestmentTile
              icon="docu"
              title="Docusign"
              content="Allows organizations to manage electronic agreements. Built the position on remote work being a norm."
              entry="May 2022 · $119"
              url="https://www.docusign.com/en-us/"
            /> */}
            <InvestmentTile
              icon="abnb"
              title="Airbnb"
              content="An online marketplace for lodging. Built the position betting on travel resurgence and remote work mobility."
              entry="IPO: Dec 2020 · $144"
              url="https://www.airbnb.com"
            />
            {/* <InvestmentTile
              icon="fb"
              title="Meta"
              content="Betting on social commerce, not metaverse."
              entry="Feb 2018 · $191"
              url="https://about.facebook.com"
            /> */}

            <InvestmentTile
              icon="rdpx"
              title="Dopex Rebate Token"
              content="On-chain structured product. Built the position betting on DeFi option vaults."
              entry="Jan 2022 · $119"
              url="https://www.dopex.io"
            />
            {/* <InvestmentTile
              icon="avax"
              title="Avalanche"
              content="Fast L1 network. Part of my index of eth challengers."
              entry="Nov 2021 · $72"
              url="https://www.avax.network"
            /> */}
            {/* <InvestmentTile
              icon="dydx"
              title="DYDX"
              content="Betting on crypto trading volume resurging."
              entry="Jul 2022 · $2.00"
              url="https://dydx.exchange/"
            /> */}
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
            {/* <InvestmentTile
              icon="rbn"
              title="Ribbon Finance"
              content="Onchain structured product. Built the position betting on DeFi option vaults."
              entry="Dec 2021 · $3.20"
              url="https://www.ribbon.finance"
            /> */}
          </ul>
        </div>
      </main>
    </>
  );
}
