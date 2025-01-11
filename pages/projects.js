import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import ProjectTile from "../components/tiles/projectTile";
import { useRouter } from "next/router";
import Script from "next/script";

export default function Projects() {
  useEffect(() => {
    let thisPage = document.querySelector("#projectsPage");
    let top = sessionStorage.getItem("projects-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("projects-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  //page header and in-page description
  const description =
    "My work today focuses on Financing products for hedge funds. Before this, I spent 4 years at Compound designing prosumer finance dashboards and wealth manager tooling, where you likely know me from. Prior to Compound, my experience spanned various UX roles, coding web experiences, and creating hardware installations.";
  return (
    <>
      <Head>
        <title>{"SJ's Projects"}</title>
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

      <main id="projectsPage" className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>Projects</h1>
          <p className={util.description}>
            {"My work today at "}
            <a
              href="https://www.coinbase.com/institutional"
              target="_blank"
              rel="noopener noreferrer"
              className={util.externalLink}
            >
              Coinbase Insitutional
            </a>
            {
              " focuses on Financing products for hedge funds. Prior to this, I spent 4 years at "
            }
            <a
              href="https://withcompound.com"
              target="_blank"
              rel="noopener noreferrer"
              className={util.externalLink}
            >
              Compound
            </a>
            {
              " designing prosumer finance dashboards and wealth manager tooling. Before Compound, I worked on a variety of UX jobs, coded web experiences and built hardware installations."
            }
          </p>
          <ul className={util.list}>
            <ProjectTile
              image="compound-detailed"
              title="Compound"
              content="Wealth tech platform with $2.5B+ assets under management."
              type="Fintech · Full-time"
              date="2024-04-01"
              url={"compound"}
              internal="true"
            />
            <ProjectTile
              image="magik"
              title="Magik"
              content={
                "AI startup helping team to more efficiently manage their Salesforce CRM."
              }
              type="AI SaaS · Advising"
              date="2024-02-01"
              url={"magik"}
              internal="true"
            />
            <ProjectTile
              image="orbit"
              title="Orbit"
              content={
                "A personal home page for things you love and recommend."
              }
              type="Mobile · Side Project"
              date="2023-10-01"
              url={"orbit"}
              internal="true"
            />
            <ProjectTile
              image="f2s"
              title="Form2Shape"
              content={
                "A graphic editor & library inspired by historically significant designs"
              }
              type="React · Side Project"
              date="2020-05-20"
              url="https://form2shape.com/"
            />
            <ProjectTile
              image="startup-idea-generator"
              title="Startup Idea Generator"
              content={
                "A site that uses keywords to generate startup ideas. All the ideas are pre-generated though a machine learning model. It is trained on more than 1800 historical Y-Combinator startup descriptions on the foundation of GPT-2."
              }
              type="GPT2 · Side Project"
              date="2020-04-25"
              url="https://startup-generator-app.web.app"
            />
            {/* <ProjectTile
              image="flo-recruit"
              title="Flo Recruit"
              content={
                "I spent 8 months freelancing for the legal recruiting platform. I worked on the dashboard for employer and school platform. I also designed and built the marketing website and a CMS driven blog."
              }
              type="Startup · Freelance"
              date="2020-04-20"
              url={"flo"}
              internal="true"
            /> */}
            <ProjectTile
              image="gesture-map"
              title="Gesture Map"
              content={"A interactive installation"}
              type="OpenFrameworks + Kinect · Side Project"
              date="2020-02-20"
              url={"https://vimeo.com/376008207"}
            />
            <ProjectTile
              image="sf-everywhere"
              title="SF Everywhere"
              content={
                "A Chrome extension that turns texts on a webpage into the system default font (San Francisco for Mac OS, Segoe UI for Window). It serves as an alternative to Reading Mode. You can use SF Everywhere to improve text readabilities but not completely remove the site design."
              }
              type="Chrome Extention · Side Project"
              date="2020-02-20"
              url={
                "https://chrome.google.com/webstore/detail/system-font-everywhere/dcncgmembfephfbibnnigchndgncmdnj?authuser=1&hl=en"
              }
            />
            <ProjectTile
              image="crumb-film"
              title="Crumb Film"
              content={"Web Design & Dev for indie film studio"}
              type="Freelance"
              date="2019-12-20"
              url={"crumb"}
              internal="true"
            />
            <ProjectTile
              image="sonos"
              title="Sonos"
              content={
                "I led design on music and podcast service intergrations."
              }
              type="NASDAQ: SONO · Full-time"
              date="2019-08-20"
              url={"https://sonos.com"}
            />
            <ProjectTile
              image="mixily"
              title="Mixily"
              content={
                "I freelanced a few month for the lightweight event planning platform. As a Facebook Event alternative that focuses on privacy and being inclusive to non-facebook users, Mixily allows you to create and manage events, RSVPs, message attendees."
              }
              type="Startup · Freelance"
              date="2019-07-20"
              url={"mixily"}
              internal="true"
            />

            <ProjectTile
              image="say-it"
              title="Say it"
              content={
                "An iOS app that adds interactive text overlays to your photos and videos. The text overlay reacts to your facial expressions. This was done in early 2019, before instagram and TikTok popularized the live transcription feature for video recording."
              }
              type="iOS · Side Project"
              date="2019-05-20"
              url={
                "https://apps.apple.com/us/app/say-it-ar-expressions/id1480969165"
              }
            />
            <ProjectTile
              image="onecare"
              title="OneCare"
              content={
                "A 2-day design exercise to improve the quality of life for children with type-1 diabetes. The app helps patient monitor their glucose level, manage insulin injection alerts and track symptoms."
              }
              type="Design Exercise"
              date="2019-04-20"
              url={"onecare"}
              internal="true"
            />
            <ProjectTile
              image="billshare"
              title="BillShare"
              content={
                "A design exercise to enable people splitting bills effectively. The experience utilizes familiar chat interfaces for the organization of groups. The App also enable various splitting methods. It was a 4 day project that I carried out from research to hi-fidelity UI design."
              }
              type="Design Exercise"
              date="2019-03-20"
              url={"billshare"}
              internal="true"
            />
            <ProjectTile
              image="oriant"
              title="Oriant"
              content={
                "A design exercise to encourage students exploring orientation events and manage their orientation schedules. It was a 5 day project that I covered from research to prototyping. "
              }
              type="Design Exercise"
              date="2018-12-20"
              url={"oriant"}
              internal="true"
            />
            {/* <ProjectTile
              image="parkamigo"
              title="ParkAmigo"
              content={
                "I spent 2 weeks working on a complete redesign of the ParkAmigo iOS app."
              }
              type="iOS - Freelance"
              date="2018-12-20"
              url={"parkamigo"}
              internal="true"
            /> */}
            <ProjectTile
              image="illesteva"
              title="Illesteva"
              content={
                "I worked as a graphic designer at the eyewear brand. I redesigned and maintained the e-commerce site and was in charge of all online and offline graphical assets."
              }
              type="Web · Full-time"
              date="2017-08-24"
              url={"illesteva"}
              internal="true"
            />
          </ul>
          <p
            className={util.tileContent}
            style={{ marginTop: "6rem", textAlign: "center" }}
          >
            {"Work before 2017 wasn't very well-documented :)"}
          </p>
        </div>
      </main>
    </>
  );
}
