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
        "onboarding",
        "roadmap",
        "investment-account-opening",
        "investment-proposal",
        "command-bar",
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

  const description = `Leading Product & Brand Design at the $1B+ Wealth Management Tech firm.`;
  const netWorthDescription = `Clients use the net worth dashboard to track their net worth. Below: 1-2) the latest desktop design, 3) a well-beloved past version, 4) a speculative mock and 5) mobile version.`;
  const onboardingDescription = `Onboarding was an ever evolving project. We delicately balanced between friction and cohesiveness aiming to provide the most amount of value asap with reasonable amount of client input.`;
  const investmentDescription = `A flow for self-serve investment account opening. The product featured a custom-indexed option and a reduced-tech-exposure option, which was challenging to design for.`;
  const proposalDescription = `Advisors create proposals to align with clients on their investment allocations. The generation tool is connected to live data from clients' accounts and the market.`;
  const commandDescription = `We redesigned the "add an account" flow utilizing the command bar interface. It allowed user to progressively narrow down choices, as well as to just type and search.`;
  const toastDescription = `We designed a flexible custom toast component to account for different types of user feedback needed. The engineer, Emil, later open sourced the component and it was very well received by the front-end community.`;
  const roadmapDescription = `A powerful cash flow planning tool. It allows advisors to model clients' short term cash flow as well as different long-term scenarios.`;
  const marketplaceDescription = `A secondary marketplace for clients to trade their private investments.`;
  const alternativeDescription = `A list of carefully sourced alternative investments for Compound clients.`;
  const marketingDescription = `I've been in charge of evolving Compound's main landing page since 2020. I got hands on designing the latest version featured below. It was very well received by the design community.`;
  const manualDescription = `The curated library of wealth planning resources for entrepreneurs, professionals and retirees. I worked with Nicolas Solerieu on this site, who was the main designer.`;
  const archiveDescription = `The Archive is a collection of long-form essays exploring the marginalia of financial and startup history. I worked with Patrick Altair McDonald on this site, who was the main designer.`;
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

  let commandImages = [];
  for (var i = 1; i < 5 + 1; i++) {
    commandImages.push(
      <img
        className={util.imageBg}
        src={"/project-page/compound/cmd-bar" + i + ".png"}
        width="100%"
        alt="project image"
        key={"cmd-bar" + i}
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
        <title>Compound</title>
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
              <h1 className={util.projectHeader}>Compound</h1>
              <p className={util.description}>{description} </p>
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
          <section id="command-bar">
            <h2 className={util.projectSectionHeader} id="command-bar">
              Command Bar
            </h2>
            <p className={util.projectDescription}>{commandDescription}</p>
            {commandImages}
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
