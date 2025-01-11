import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Script from "next/script";
import generateImageComponents from "../../lib/imageUtil";
import React, { useState, useEffect } from "react";
import { addScrollListener } from "../../lib/scroll";
import StickyTab from "../../components/stickyTab";

export default function Xyla() {
  const pageId = "xylaPage";
  const description = `Founded by Daniel Nadler who previously sold his AI company Kensho Technologies for $700 million, Xyla is working on aligning and grounding large language models for accuracy-critical domains.`;

  const sections = React.useMemo(
    () => [
      {
        id: "bison",
        title: "Bison Financial AI",
        description: `We developed a web interface for Bison, a finance-focused LLM trained on up-to-date official financial databases such as direct SEC filings and other reliable news sources on the web.`,
        imageCount: 5,
        section: "product",
      },
      {
        id: "tldr",
        title: "TL;Dr.",
        description: `TL;Dr. is a series of dynamic summaries on medical topics. In contrast to other online medical journals, where a random doctor can write an article after reading three papers and forget to ever update it, TL;Dr. is constantly screening and evaluating the published universe of 34,000,000+ peer-reviewed medical studies, updating sections as new evidence is released.`,
        imageCount: 4,
        section: "product",
      },

      {
        id: "oe",
        title: "OpenEvidence for Doctors",
        description: `OpenEvidence AI allows doctors to ask questions related to everything from symptoms to drug effects. Doctors can also preset and reuse patient profiles. The first version is optimized for the first question asked and its answer. We built the capability to share generated output, and doctors sharing these answers have greatly contributed to our growth. After gaining adoption and receiving more demand for follow-up questions, we updated the UI to be more like a chat interface.`,
        imageCount: 6,
        section: "product",
      },
      {
        id: "vs-chatgpt",
        title: "OpenEvidence vs ChatGPT",
        description: `We published a comparison graphic of OpenEvidence vs ChatGPT for medical related application.`,
        imageCount: 1,
        section: "brand",
      },
      {
        id: "drug-discovery",
        title: "Drug Discovery & Development Pitch Deck",
        description: `I helped Daniel in creating the pitch deck for pharmaceutical companies, showcasing the use of OpenEvidence AI to expedite the drug development process. The pitch successfully secured a million dollar contract with one of the largest companies in the world. Here are a few slides from the deck.`,
        imageCount: 3,
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
        <title>Xyla</title>
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
              <h1 className={util.projectHeader}>Xyla</h1>
              <p className={util.description}>
                {`Founded by Daniel Nadler who previously sold his AI company Kensho Technologies for $700 million, Xyla is working on aligning and grounding large language models for accuracy-critical domains. Learn more about the `}
                <a
                  href="https://www.forbes.com/sites/katiejennings/2023/07/27/this-health-ai-startup-aims-to-keep-doctors-up-to-date-on-the-latest-science/?sh=11e89421442a"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  {`company's mission`}
                </a>
                {" and "}
                <a
                  href="https://arxiv.org/pdf/2302.08091.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  why we need a specialized LLM
                </a>
                {". "}
              </p>
              <p className={util.description}>
                {`I contribute to the team part-time, assisting with product design, brand positioning, and marketing. We have established partnerships with top hospitals and pharmaceutical companies, reaching thousands of doctors. In parallel, we have initiated work on a financial AI product that will provide the same reliable AI to investors and finance professionals.`}
              </p>
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

          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className={util.projectSectionHeader}>{section.title}</h2>
              <p className={util.projectDescription}>{section.description}</p>
              {generateImageComponents(`/xyla`, section.imageCount, section.id)}
            </section>
          ))}

          <Link scroll={false} href="/projects">
            <a className={util.backButton}> ← &nbsp; Other Projects</a>
          </Link>
        </div>
      </main>
    </>
  );
}
