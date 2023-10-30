import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Image from "next/image";
import Script from "next/script";

export default function Compound() {
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

      <main className={util.page}>
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
              borderBottom: "1px solid var(--gray3)",
              height: "10px",
              width: "calc(100% - 2.5rem)",
              margin: "0 1.25rem 1rem",
            }}
          />
          <h2 className={util.projectSectionHeader}>Net Worth Dashboard</h2>
          <p className={util.projectDescription}>{netWorthDescription}</p>
          {netWorthImages}
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
          <h2
            className={util.projectSectionHeader}
          >{`Roadmap (Cash Flow Planning)`}</h2>
          <p className={util.projectDescription}>{roadmapDescription}</p>
          {roadmapImages}
          <h2 className={util.projectSectionHeader}>
            Investment Account Opening
          </h2>
          <p className={util.projectDescription}>{investmentDescription}</p>
          {investmentImages}
          <h2 className={util.projectSectionHeader}>Investment Proposal</h2>
          <p className={util.projectDescription}>{proposalDescription}</p>
          {proposalImages}
          <h2 className={util.projectSectionHeader}>Command Bar</h2>
          <p className={util.projectDescription}>{commandDescription}</p>
          {commandImages}
          <h2 className={util.projectSectionHeader}>Toast</h2>
          <p className={util.projectDescription}>{toastDescription}</p>
          {toastImages}

          <h2 className={util.projectSectionHeader}>Secondary Marketplace</h2>
          <p className={util.projectDescription}>{marketplaceDescription}</p>
          {marketplaceImages}
          <h2 className={util.projectSectionHeader}>Alternative Investments</h2>
          <p className={util.projectDescription}>{alternativeDescription}</p>
          {alternativeImages}

          <h2 className={util.projectSectionHeader}>Marketing Website</h2>
          <p className={util.projectDescription}>{marketingDescription}</p>
          <video
            className={util.imageBg}
            src={"/project-page/compound/membership.mp4"}
            width="100%"
            controls
          />
          <video
            className={util.imageBg}
            src={"/project-page/compound/home.mp4"}
            width="100%"
            controls
          />
          {marketingImages}
          <h2 className={util.projectSectionHeader}>Compound Manual</h2>
          <p className={util.projectDescription}>{manualDescription}</p>
          {manualImages}
          <h2 className={util.projectSectionHeader}>Compound Archive</h2>
          <p className={util.projectDescription}>{archiveDescription}</p>

          {archiveImages}

          <Link scroll={false} href="/projects">
            <a className={util.backButton}> ← &nbsp; Other Projects</a>
          </Link>
        </div>
      </main>
    </>
  );
}
