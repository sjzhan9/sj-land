import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Image from "next/image";
import Script from "next/script";
import StickyTab from "../../components/stickyTab";
import React, { useState, useEffect } from "react";
import generateImageComponents from "../../lib/imageUtil";
import { addScrollListener } from "../../lib/scroll";

const pageId = "compoundPage";
const description = `Leading Product & Brand Design at the Wealth Management Tech firm. I joined as the second employee in 2020, designed and shipped early products and helped the company grow from 4 employees to over 60, from $0 in Assets Under Management to over $1.3 Billion.`;

export default function Compound() {
  const [activeTab, setActiveTab] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const sections = React.useMemo(
    () => [
      {
        id: "net-worth",
        title: "Net Worth Dashboard",
        description:
          "We built our net worth dashboard with unique coverage in private assets. Beyond banks, stock brokerages and crypto platforms, our dashboard allows users to track their employer equity, angel investments and fund investment LP stakes. Below images: 1-2) the latest desktop design, 3) a well-beloved past version, 4) a speculative mock and 5) mobile view.",
        imageCount: 5,
        section: "product",
      },
      {
        id: "add-assets",
        title: "Adding Assets",
        description:
          "We designed the 'add an asset/account' flow utilizing the command bar interface. It not only allows users to progressively narrow down choices but also more conveniently to just type and search for the asset class or institution. Users can do it anywhere in the app without interrupting their current task.",
        imageCount: 5,
        section: "product",
      },
      {
        id: "crypto",
        title: "Crypto",
        description:
          "We built support for clients to track their crypto assets in their Compound dashboard and mobile app. For centralized exchanges, we first used Zabo for integrations. After Zabo was acquired and discontinued their API services, we built direct Coinbase and Coinbase Pro integrations. For web3 participants, we allow users to simply paste in their Ethereum wallet address or ENS to track their holdings, from L2 DeFi tokens to NFTs.",
        imageCount: 5,
        section: "product",
      },
      {
        id: "onboarding",
        title: "Onboarding",
        description:
          "We've consistently dedicated efforts to enhance onboarding experiences for both new users and our financial advisors. Users gain from swiftly connecting accounts and obtaining insightful details about their balance sheet – speed is crucial. Advisors, on the other hand, seek extensive information about the prospect's financial life to optimize the insights they can deliver during the initial call. Every time we make adjustments, we carefully find the sweet spot between maintaining low friction and maximizing data collection.",
        imageCount: 5,
        section: "product",
      },
      {
        id: "roadmap",
        title: "Roadmap",
        description:
          "We built a powerful cash flow and tax planning tool for clients with dedicated advisors. Advisors project short-term cash flow and tax implications by simulating events like donations, exercising options, having new kids, or buying a house. Some clients also use it for long-term financial modeling and retirement planning, simulating income changes and potential investment growth.",
        imageCount: 3,
        section: "product",
      },
      {
        id: "investment-account-opening",
        title: "Investment Account Opening",
        description:
          "We built a robo-advisor in 2021 to allow self-serve users to open a Compound Investment Account. The product was designed to provide a classic yet sophisticated robo-advisory experience that offers both ETF based portfolios and custom-indexing based portfolios.",
        imageCount: 3,
        section: "product",
      },
      {
        id: "investment-proposal",
        title: "Investment Proposal",
        description:
          "We built a fast yet comprehensive proposal generation tool for advisors to create personalized investment proposals. This tool, along with the generated proposal, is connected to data from clients' accounts, the most up-to-date models from our investment committee and live asset prices from the market.",
        imageCount: 4,
        section: "product",
      },
      {
        id: "investment-management",
        title: "Investment Management",
        description:
          "For clients with actively managed investment accounts, we built a mobile experience the enables them to review pre-aligned trades before our trading desk execute them. Additionally, we've crafted a first-party experience for clients to seamlessly monitor returns on their Compound managed portfolios and compare them to benchmarks.",
        imageCount: 2,
        section: "product",
      },
      {
        id: "advisor",
        title: "Advisor HQ",
        description:
          "We are building a powerful back-office tools for advisors. The platform allows advisors to view client profiles, look up accounts, monitor billing and much more. After the merger, we are currently in the process of consolidating the two legacy advisor dashboards to provide a unified experience for advisors from both firms.",
        imageCount: 1,
        section: "product",
      },
      {
        id: "toast-notification",
        title: "Toast Notification",
        description:
          "We designed a flexible custom toast component to account for different types of user feedback needed. Our lead engineer, Emil, later open sourced the component and it was very well received by the front-end community.",
        imageCount: 2,
        section: "product",
      },
      {
        id: "secondary-marketplace",
        title: "Secondary Marketplace",
        description:
          "Partnering with a few licensed broker dealers, we built a proof of concept platform for our clients to sell their shares in private companies like Stripe, Space X, and Notion. Due to several of compliance and market condition reasons, the platform was not fully launched.",
        imageCount: 2,
        section: "product",
      },
      {
        id: "alternative-investments",
        title: "Alternative Investments",
        description:
          "Our investment team consistently engages in meetings with fund managers and conducts thorough due diligence. We've established a repository of high-quality alternative investment opportunities available to our clients. This project aims to present them in the best, compliant way. The 'Deals Page' displays high-level key stats on different types of deals, while the 'Deal Details Page' includes our in-house memo on the deal, fact sheets, and other collateral from the fund managers. As a client, you can express interest directly in the app, and our back office will coordinate with the investment firm for your allocation.",
        imageCount: 3,
        section: "product",
      },
      {
        id: "landing-page",
        title: "Landing Page",
        description:
          "Since 2020, I’ve managed, and sometimes directly designed several relaunches of the main Compound landing page. In early 2023, I took the lead in designing the version below. Following its launch, it received widespread acclaim within the design community and attracted hundreds of new qualified leads within a matter of hours.",
        imageCount: 2,
        section: "brand",
      },
      {
        id: "compound-manual",
        title: "Compound Manual",
        description:
          "We built a curated library of wealth planning resources for tech employees. Since the launch, we've received hundreds of compliments from clients and others in the industry who found it beautiful and useful. We collaborated with Nicolas Solerieu on the initial design, who set the art direction. In the few years after the release, I managed the maintenance and iterations.",
        imageCount: 4,
        section: "brand",
      },
      {
        id: "compound-archive",
        title: "Compound Archive",
        description:
          "We built a collection of long-form essays exploring the marginalia of financial and startup history. We worked with Patrick Altair McDonald on this site, who set the art direction.",
        imageCount: 3,
        section: "brand",
      },
    ],
    []
  );

  useEffect(() => {
    const cleanupScrollListener = addScrollListener(
      sections,
      setScrolled,
      setActiveTab,
      pageId
    );

    return () => {
      cleanupScrollListener();
    };
  }, [sections, setScrolled, setActiveTab]);

  return (
    <>
      <Head>
        <title>Compound Planning</title>
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

      <main className={util.page} id={pageId}>
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
            <StickyTab
              activeTab={activeTab}
              sections={sections}
              includeBrandSection={true}
            />
          </div>

          {sections.map((section) => {
            if (section.id === "onboarding") {
              return (
                <React.Fragment key={section.id}>
                  <section id={section.id}>
                    <h2 className={util.projectSectionHeader} data-size="l">
                      {section.title}
                    </h2>
                    <p className={util.projectDescription}>
                      {section.description}
                    </p>
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
                    {generateImageComponents(
                      `/compound`,
                      section.imageCount,
                      section.id
                    )}
                  </section>
                  {/* Stop mapping after Onboarding */}
                </React.Fragment>
              );
            }

            // Continue mapping until Landing Page
            if (section.id === "landing-page") {
              return (
                <React.Fragment key={section.id}>
                  <section id={section.id}>
                    <h2 className={util.projectSectionHeader} data-size="l">
                      {section.title}
                    </h2>
                    <p className={util.projectDescription}>
                      {section.description}
                    </p>
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
                    {generateImageComponents(
                      `/compound`,
                      section.imageCount,
                      section.id
                    )}
                  </section>
                </React.Fragment>
              );
            }

            // Continue mapping other sections
            return (
              <section key={section.id} id={section.id}>
                <h2 className={util.projectSectionHeader} data-size="l">
                  {section.title}
                </h2>
                <p className={util.projectDescription}>{section.description}</p>
                {generateImageComponents(
                  `/compound`,
                  section.imageCount,
                  section.id
                )}
              </section>
            );
          })}

          <Link scroll={false} href="/projects">
            <a className={util.backButton}> ← &nbsp; Other Projects</a>
          </Link>
        </div>
      </main>
    </>
  );
}
