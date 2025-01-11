import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Script from "next/script";
import generateImageComponents from "../../lib/imageUtil";
import React, { useState, useEffect } from "react";
import { addScrollListener } from "../../lib/scroll";
import StickyTab from "../../components/stickyTab";

export default function Magik() {
  const pageId = "magikPage";
  const description = `After working on the Rev Ops team at Compound, my friend Daniel started Magik, using AI to help Rev Ops teams better manage their Salesforce environments. I became an advisor early on, helping with designing the first MVP for idea validation, creating an animation showcasing the company’s ambition for fundraising, and building its first website.`;

  const sections = React.useMemo(
    () => [
      {
        id: "flow-manager",
        title: "Flow Manager",
        description:
          "We used the flow manager design to validate the idea with Rev Ops teams. We ended up choosing to build other features first for technical reasons, but the flow manager idea was what gave us confidence that there’s a market for what we are building.",
        imageCount: 5,
        section: "product",
      },
      {
        id: "dashboard",
        title: "Dashboard",
        description:
          "I set the early navigation foundation for the main dashboard, which has evolved a lot since.",
        imageCount: 1,
        section: "product",
      },
      {
        id: "rebrand",
        title: "Rebrand",
        description:
          "Rebranding to Synch, launching on TechCrunch and annocing our seed round.",
        imageCount: 1,
        section: "brand",
      },
      {
        id: "website",
        title: "Early Website",
        description:
          "I designed and built this early website for connecting with customers and applying to Y-Combinator (we got in). The most challenging part was creating the hero animation to illustrate the different features Magik would build. It made our value proposition immediately clear to our potential buyers.",
        imageCount: 5,
        section: "brand",
      },
      {
        id: "sales",
        title: "Sales One-Pager",
        description:
          "Before the product matured, Daniel and I worked on this one-pager together for him to use on sales calls and got the earliest beta customers",

        imageCount: 1,
        section: "brand",
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
        <title>Magik</title>
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
              <h1 className={util.projectHeader}>Magik</h1>

              <p className={util.description}>{description}</p>
            </div>

            <p className={util.projectDate}>{`2023 – Now`}</p>
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
            if (section.id === "website") {
              return (
                <React.Fragment key={section.id}>
                  <section id={section.id}>
                    <h2 className={util.projectSectionHeader}>
                      {section.title}
                    </h2>
                    <p className={util.projectDescription}>
                      {section.description}
                    </p>
                    <video
                      className={util.imageBg}
                      src={"/project-page/magik/magik.mov"}
                      width="100%"
                      controls
                    />
                    {generateImageComponents(
                      `/magik`,
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
                <h2 className={util.projectSectionHeader}>{section.title}</h2>
                <p className={util.projectDescription}>{section.description}</p>
                {generateImageComponents(
                  `/magik`,
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
