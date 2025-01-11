import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Script from "next/script";
import generateImageComponents from "../../lib/imageUtil";
import React, { useState, useEffect } from "react";
import { addScrollListener } from "../../lib/scroll";
import StickyTab from "../../components/stickyTab";

export default function TeamGuard() {
  const pageId = "teamGuardPage";
  const description = `Started by cofounders of Attentive (valued at $6.9B), TeamGuard is a security company that helps Chief Information Security Officers (CISOs) manage their security campaigns. I worked on the early product directly with the CEO.`;

  const sections = React.useMemo(
    () => [
      {
        id: "create-campaign-1",
        title: "Create Campaign V1",
        description:
          "Version 1 of the create campaign flow feel similar to the dominant player, knowbe4.com, yet vastly more modern. It's a two-step process: create and then review. It includes improved details during creation and a different approach to the review step.",
        imageCount: 5,
        section: "product",
      },
      {
        id: "create-campaign-2",
        title: "Create Campaign V2",
        description:
          "Version 2 of the create campaign flow aims to reduce the cognitive load on each step by collapsing and hiding other steps. This pattern is often seen in e-commerce checkout flows. I reused the review components from Version 1 after a step is done, so that create and review fall under the same view.",
        imageCount: 4,
        section: "product",
      },
    ],
    []
  );
  const [activeTab, setActiveTab] = useState(null);
  const [scrolled, setScrolled] = useState(false);

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
        <title>TeamGuard</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />{" "}
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
              <h1 className={util.projectHeader}>Team Guard</h1>

              <p className={util.description}>{description}</p>
            </div>

            <p className={util.projectDate}>{`2024`}</p>
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
              includeBrandSection={false}
            />
          </div>

          {sections.map((section) => {
            if (section.id === "create-campaign-1") {
              return (
                <React.Fragment key={section.id}>
                  <section id={section.id}>
                    <h2 className={util.projectSectionHeader} data-size="s">
                      {section.title}
                    </h2>
                    <p className={util.projectDescription}>
                      {section.description}
                    </p>

                    {generateImageComponents(
                      `/team-guard`,
                      section.imageCount,
                      section.id
                    )}
                    <video
                      className={util.videoBg}
                      src={"/project-page/team-guard/create-campaign-1.mp4"}
                      width="100%"
                      controls
                    />
                  </section>
                </React.Fragment>
              );
            }
            if (section.id === "create-campaign-2") {
              return (
                <React.Fragment key={section.id}>
                  <section id={section.id}>
                    <h2 className={util.projectSectionHeader} data-size="s">
                      {section.title}
                    </h2>
                    <p className={util.projectDescription}>
                      {section.description}
                    </p>

                    {generateImageComponents(
                      `/team-guard`,
                      section.imageCount,
                      section.id
                    )}
                    <video
                      className={util.videoBg}
                      src={"/project-page/team-guard/create-campaign-2.mp4"}
                      width="100%"
                      controls
                    />
                  </section>
                </React.Fragment>
              );
            }

            // Continue mapping other sections
            return (
              <section key={section.id} id={section.id}>
                <h2 className={util.projectSectionHeader}>{section.title}</h2>
                <p className={util.projectDescription}>{section.description}</p>
                {generateImageComponents(
                  `/team-guard`,
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
