import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Script from "next/script";
import generateImageComponents from "../../lib/imageUtil";
import React, { useState, useEffect } from "react";
import { addScrollListener } from "../../lib/scroll";
import StickyTab from "../../components/stickyTab";

export default function Orbit() {
  const pageId = "orbitPage";
  const description = `Orbit helps you share what you love, from restaurants to music and films. It's a side project I started with a friend. We initially built a desktop version of the concept, tested it with some friends, and gathered real content. We quickly realized that the right platform is mobile, so we taught ourselves React Native and got to work. The project hasn't been released yet, but below, we have some video recordings and screenshots..
`;

  const sections = React.useMemo(
    () => [
      {
        id: "mobile",
        title: "Mobile App",
        description:
          "Currently, we are working on V2, simplifying the app before its release. However, here are some recordings of V1. Please note that we experienced some issues with the image API, so some images are not loading.",
        imageCount: 1,
        section: "product",
      },
      {
        id: "animation",
        title: "V1 Interactions",
        description:
          "This section highlights the architecture choices, logic, and navigation of the app.",
        imageCount: 0,
        section: "product",
      },
      {
        id: "desktop",
        title: "Web Version",
        description:
          "We beta-tested the web clients with a small group of friends, and these are some curations that they've made.",
        imageCount: 6,
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
        <title>Orbit</title>
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
              <h1 className={util.projectHeader}>Orbit</h1>
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
              includeBrandSection={false}
            />
          </div>

          {sections.map((section) => {
            if (section.id === "animation") {
              return (
                <React.Fragment key={section.id}>
                  <section id={section.id}>
                    <h2 className={util.projectSectionHeader} data-size="s">
                      {section.title}
                    </h2>
                    <p className={util.projectDescription}>
                      {section.description}
                    </p>
                    <video
                      className={util.imageBg}
                      src={"/project-page/orbit/animation 1.mov"}
                      width="100%"
                      controls
                    />
                    <video
                      className={util.imageBg}
                      src={"/project-page/orbit/animation 2.mov"}
                      width="100%"
                      controls
                    />
                    <video
                      className={util.imageBg}
                      src={"/project-page/orbit/animation 3.mov"}
                      width="100%"
                      controls
                    />
                  </section>
                </React.Fragment>
              );
            }

            if (section.id === "mobile") {
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
                      `/orbit`,
                      section.imageCount,
                      section.id
                    )}
                    <video
                      className={util.imageBg}
                      src={"/project-page/orbit/mobile 1.mov"}
                      width="100%"
                      controls
                    />
                    <video
                      className={util.imageBg}
                      src={"/project-page/orbit/mobile 2.mov"}
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
                <h2 className={util.projectSectionHeader} data-size="s">
                  {section.title}
                </h2>
                <p className={util.projectDescription}>{section.description}</p>
                {generateImageComponents(
                  `/orbit`,
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
