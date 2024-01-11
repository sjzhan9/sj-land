import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Image from "next/image";
import Script from "next/script";
import StickyTab from "../../components/stickyTab";
import React, { useState, useEffect } from "react";

export default function Compound() {
  const [activeTab, setActiveTab] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    //if scrollY is larger than 80px setScrolled to true

    let thisPage = document.querySelector("#compoundPage");

    const handleScrollHere = () => {
      const scrollTop = parseFloat(thisPage.scrollTop);
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        "net-worth",
        "crypto",
        "add-assets",
        "onboarding",
        "roadmap",
        "investment-account-opening",
        "investment-proposal",
        "investment-management",
        "advisor",
        "toast-notification",
        "secondary-marketplace",
        "alternative-investments",
        "landing-page",
        "compound-manual",
        "compound-archive",
      ];
      const sectionOffsets = sections.map((sectionId) => {
        const section = document.getElementById(sectionId);
        return {
          id: sectionId,
          top: section.getBoundingClientRect().top,
          bottom: section.getBoundingClientRect().bottom,
        };
      });

      // Determine which section is currently in view
      let currentSection = null;
      for (const section of sectionOffsets) {
        if (section.top <= 80 && section.bottom >= 80) {
          currentSection = section.id;
          break;
        }
      }
      setActiveTab(currentSection);
    };

    handleScrollHere(); // Call it once to set the initial active tab
    thisPage.addEventListener("scroll", handleScrollHere);

    return () => {
      thisPage.removeEventListener("scroll", handleScrollHere);
    };
  }, []);

  const description = `Leading Product & Brand Design at the Wealth Management Tech firm. I joined the company in 2020 as the second employee, designed and shipped early products and helped the company grow from 4 employees to over 50, from $0 in Assets Under Management to over $1.3 Billion.`;
  const netWorthDescription = `We built our net worth dashboard with unique coverage in private assets. Beyond banks, stock brokerages and crypto platforms, our dashboard allow users to track their employer equity, angel investments and fund investment LP stakes. Below images: 1-2) the latest desktop design, 3) a well-beloved past version, 4) a speculative mock and 5) mobile view.`;
  const crytpoDescription = `We built support for clients to track their crypto assets in their Compound dashboard and mobile app. For centralized exchanges, we first used Zabo for integrations. After Zabo was acquired and discontinued their API services, we built direct Coinbase and Coinbase Pro integrations. For web3 participants, we allow users to simply paste in their Ethereum wallet address or ENS to track their holdings, from L2 DeFi tokens to NFTs.`;
  const addAssetsDescription = `We designed the "add an asset/account" flow utilizing the command bar interface. It not only allows users to progressively narrow down choices, but more conveniently to just type and search for the asset class or institution. Users can do it anywhere in the app without interrupting their current task.`;
  const onboardingDescription = `We've consistently dedicated efforts to enhance onboarding experiences for both new users and our financial advisors. Users gain from swiftly connecting accounts and obtaining insightful details about their balance sheet – speed is crucial. Advisors, on the other hand, seek extensive information about the prospect's financial life to optimize the insights they can deliver during the initial call. Every time we make adjustments, we carefully find the sweet spot between maintaining low friction and maximizing data collection.`;
  const investmentDescription = `We built a robo-advisor in 2021 to allow self-serve users to open a Compound Investment Account. The product was designed to provide a classic yet sophisticated robo-advisory experience that offers both ETF based portfolios and custom-indexing based portfolios.`;
  const proposalDescription = `We built a fast yet comprehensive proposal generation tool for advisors to create personalized investment proposals. This tool, along with the generated proposal, is connected to data from clients' accounts, the most up-to-date models from our investment committee and live asset prices from the market.`;
  const investmentManagementDescription = `For clients with actively managed investment accounts, we built a mobile experience the enables them to review pre-aligned trades before our trading desk execute them. Additionally, we've crafted a first-party experience for clients to seamlessly monitor returns on their Compound managed portfolios and compare them to benchmarks.`;
  const advisorDescription = `We are building a powerful back-office tools for advisors. The platform allows advisors to view client profiles, look up accounts, monitor billing and much more. After the merger, we are currently in the process of consolidating the two legacy advisor dashboards to provide a unified experience for advisors from both firms.`;
  const toastDescription = `We designed a flexible custom toast component to account for different types of user feedback needed. Our lead engineer, Emil, later open sourced the component and it was very well received by the front-end community.`;
  const roadmapDescription = `We built a powerful cash flow and tax planning tool for clients with dedicated advisors. Advisors project short-term cash flow and tax implications by simulating events like donations, exercising options, having new kids, or buying a house. Some clients also use it for long-term financial modeling and retirement planning, simulating income changes and potential investment growth.`;
  const marketplaceDescription = `Partnering with a few licensed broker dealers, we built a proof of concept platform for our clients to sell their shares in private companies like Stripe, Space X, and Notion. Due to several of compliance and market condition reasons, the platform was not fully launched.`;
  const alternativeDescription = `Our investment team consistently engages in meetings with fund managers and conducts thorough due diligence. We've established a repository of high-quality alternative investment opportunities available to our clients. This project aims to present them in the best, compliant way. The 'Deals Page' displays high-level key stats on different types of deals, while the 'Deal Details Page' includes our in-house memo on the deal, fact sheets, and other collateral from the fund managers. As a client, you can express interest directly in the app, and our back office will coordinate with the investment firm for your allocation.`;
  const marketingDescription = `Since 2020, I’ve managed, and sometimes directly designed several relaunches of the main Compound landing page. In early 2023, I took the lead in designing the version below. Following its launch, it received widespread acclaim within the design community and attracted hundreds of new qualified leads within a matter of hours."`;
  const manualDescription = `We built a curated library of wealth planning resources for tech employees. Since the launch, we've received hundreds of compliments from clients and others in the industry who found it beautiful and useful. We collaborated with Nicolas Solerieu on the initial design, who set the art direction. In the few years after the release, I managed the maintenance and iterations.`;
  const archiveDescription = `We built a collection of long-form essays exploring the marginalia of financial and startup history. We worked with Patrick Altair McDonald on this site, who set the art direction.`;

  let netWorthImages = [];
  for (var i = 1; i < 5 + 1; i++) {
    netWorthImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/networth" + i + ".png"}
        width="100%"
        alt="project image"
        key={"networth" + i}
      />
    );
  }
  let addAssetsImages = [];
  for (var i = 1; i < 5 + 1; i++) {
    addAssetsImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/cmd-bar" + i + ".png"}
        width="100%"
        alt="project image"
        key={"cmd-bar" + i}
      />
    );
  }
  let crytpoImages = [];
  for (var i = 1; i < 5 + 1; i++) {
    crytpoImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/crypto" + i + ".png"}
        width="100%"
        alt="project image"
        key={"crypto" + i}
      />
    );
  }
  let onboardingImages = [];
  for (var i = 1; i < 5 + 1; i++) {
    onboardingImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/onboarding" + i + ".png"}
        width="100%"
        alt="project image"
        key={"onboarding" + i}
      />
    );
  }
  let investmentImages = [];
  for (var i = 1; i < 3 + 1; i++) {
    investmentImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/invest-opening" + i + ".png"}
        width="100%"
        alt="project image"
        key={"invest-opening" + i}
      />
    );
  }
  let proposalImages = [];
  for (var i = 1; i < 4 + 1; i++) {
    proposalImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/invest-proposal" + i + ".png"}
        width="100%"
        alt="project image"
        key={"invest-proposal" + i}
      />
    );
  }
  let investmentManagementImages = [];
  for (var i = 1; i < 2 + 1; i++) {
    investmentManagementImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/investment-management" + i + ".png"}
        width="100%"
        alt="project image"
        key={"invest-management" + i}
      />
    );
  }
  let advisorImages = [];
  for (var i = 1; i < 1 + 1; i++) {
    advisorImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/advisor" + i + ".png"}
        width="100%"
        alt="project image"
        key={"advisor" + i}
      />
    );
  }

  let toastImages = [];
  for (var i = 1; i < 2 + 1; i++) {
    toastImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/toast" + i + ".png"}
        width="100%"
        alt="project image"
        key={"toast" + i}
      />
    );
  }
  let roadmapImages = [];
  for (var i = 1; i < 3 + 1; i++) {
    roadmapImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/roadmap" + i + ".png"}
        width="100%"
        alt="project image"
        key={"roadmap" + i}
      />
    );
  }
  let marketplaceImages = [];
  for (var i = 1; i < 2 + 1; i++) {
    marketplaceImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/secondary" + i + ".png"}
        width="100%"
        alt="project image"
        key={"secondary" + i}
      />
    );
  }
  let alternativeImages = [];
  for (var i = 1; i < 3 + 1; i++) {
    alternativeImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/alts" + i + ".png"}
        width="100%"
        alt="project image"
        key={"alts" + i}
      />
    );
  }
  let marketingImages = [];
  for (var i = 3; i < 4 + 1; i++) {
    marketingImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/website" + i + ".png"}
        width="100%"
        alt="project image"
        key={"website" + i}
      />
    );
  }
  let manualImages = [];
  for (var i = 1; i < 4 + 1; i++) {
    manualImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/manual" + i + ".png"}
        width="100%"
        alt="project image"
        key={"manual" + i}
      />
    );
  }
  let archiveImages = [];
  for (var i = 1; i < 3 + 1; i++) {
    archiveImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/archive" + i + ".png"}
        width="100%"
        alt="project image"
        key={"archive" + i}
      />
    );
  }
  return (
    <>
      <Head>
        <title>Compound Planning</title>
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

      <main className={util.page} id="compoundPage">
        <div className={util.projectColumn}>
          <div className={util.projectTopContainer}>
            <div className={util.projectTopLeft}>
              <h1 className={util.projectHeader}>Compound Planning</h1>
              <p className={util.description}>
                {`Leading Product & Brand Design at the Wealth Management Tech firm. I joined as the second employee in 2020, designed and shipped early products and helped the company grow from 4 employees to over 60, from $0 in Assets Under Management to over $1.3 Billion.`}
              </p>
              <p className={util.description}>
                {`My work at the company ranges from interviewing clients, doing blue sky design explorations, writing specs, making small improvements to managing product releases. Below are some of the projects I designed or managed.`}{" "}
              </p>
            </div>

            <p className={util.projectDate}>{`Apr 2020 – Now`}</p>
          </div>
          <div
            style={{
              position: "sticky",
              top: "-20px",
              zIndex: "99",
              width: "calc(100% - 2.5rem)",
              margin: "0 1.25rem",
              border: `1px solid ${scrolled ? `var(--gray3)` : "transparent"}`,
              border: `1px solid var(--gray3)`,
              borderRadius: "9px",
              backgroundColor: "var(--modalBg)",
              padding: "0.5rem 1rem 0.5rem 1rem",
            }}
          >
            <StickyTab activeTab={activeTab} />
          </div>

          <section id="net-worth">
            <h2 className={util.projectSectionHeader}>Net Worth Dashboard</h2>
            <p className={util.projectDescription}>{netWorthDescription}</p>
            {netWorthImages}
          </section>
          <section id="add-assets">
            <h2 className={util.projectSectionHeader}>Adding Assets</h2>
            <p className={util.projectDescription}>{addAssetsDescription}</p>
            {addAssetsImages}
          </section>
          <section id="crypto">
            <h2 className={util.projectSectionHeader}>Crypto</h2>
            <p className={util.projectDescription}>{crytpoDescription}</p>
            {crytpoImages}
          </section>

          <section id="onboarding">
            <h2 className={util.projectSectionHeader}>Onboarding</h2>
            <p className={util.projectDescription}>{onboardingDescription}</p>
            <video
              className={util.imageBg}
              src={"/project-page/compound/sign-up.mov"}
              width="100%"
              controls
            />
            <video
              className={util.imageBg}
              src={"/project-page/compound/unlock.mov"}
              width="100%"
              controls
            />
            {onboardingImages}
          </section>
          <section id="roadmap">
            <h2
              className={util.projectSectionHeader}
            >{`Roadmap (Cash Flow Planning)`}</h2>
            <p className={util.projectDescription}>{roadmapDescription}</p>
            {roadmapImages}
          </section>
          <section id="investment-account-opening">
            <h2 className={util.projectSectionHeader}>
              Investment Account Opening
            </h2>
            <p className={util.projectDescription}>{investmentDescription}</p>
            {investmentImages}
          </section>
          <section id="investment-proposal">
            <h2 className={util.projectSectionHeader}>Investment Proposal</h2>
            <p className={util.projectDescription}>{proposalDescription}</p>
            {proposalImages}
          </section>
          <section id="investment-management">
            <h2 className={util.projectSectionHeader}>Investment Management</h2>
            <p className={util.projectDescription}>
              {investmentManagementDescription}
            </p>
            {investmentManagementImages}
          </section>
          <section id="advisor">
            <h2 className={util.projectSectionHeader}>Advisor Dashboard</h2>
            <p className={util.projectDescription}>{advisorDescription}</p>
            {advisorImages}
          </section>

          <section id="toast-notification">
            <h2 className={util.projectSectionHeader}>Toast Notification</h2>
            <p className={util.projectDescription}>{toastDescription}</p>
            {toastImages}
          </section>
          <section id="secondary-marketplace">
            <h2 className={util.projectSectionHeader}>Secondary Marketplace</h2>

            <p className={util.projectDescription}>{marketplaceDescription}</p>
            {marketplaceImages}
          </section>
          <section id="alternative-investments">
            <h2 className={util.projectSectionHeader}>
              Alternative Investments
            </h2>
            <p className={util.projectDescription}>{alternativeDescription}</p>
            {alternativeImages}
          </section>
          <section id="landing-page">
            <h2 className={util.projectSectionHeader}>Landing Page</h2>
            <p className={util.projectDescription}>{marketingDescription}</p>
            <video
              className={util.imageBg}
              src={"/project-page/compound/membership.mp4"}
              width="100%"
              controls
            />
            <video
              className={util.imageBg}
              src={"/project-page/compound/home.mov"}
              width="100%"
              controls
            />
            {marketingImages}
          </section>
          <section id="compound-manual">
            <h2 className={util.projectSectionHeader}>Compound Manual</h2>
            <p className={util.projectDescription}>{manualDescription}</p>
            {manualImages}
          </section>
          <section id="compound-archive">
            <h2 className={util.projectSectionHeader} id="compound-archive">
              Compound Archive
            </h2>
            <p className={util.projectDescription}>{archiveDescription}</p>

            {archiveImages}
          </section>

          <Link scroll={false} href="/projects">
            <a className={util.backButton}> ← &nbsp; Other Projects</a>
          </Link>
        </div>
      </main>
    </>
  );
}
