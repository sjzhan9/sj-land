import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import ProjectTile from "../components/tiles/projectTile";
import { useRouter } from "next/router";
import restoreScrollPosition from "next-restore-scroll";

export default function Projects() {
  useEffect(() => {
    let thisPage = document.querySelector("#projectsPage");
    let top = localStorage.getItem("projects-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      localStorage.setItem("projects-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  //page header and in-page description
  const description =
    "Since mid 2020, I’ve focused my energy on Compound. Before that, I worked on a few personal coding projects, freelance and in-house design jobs. Between 2018 and 2020 I worked on a variety of hardware, installations, AR and creative coding sketches.";
  return (
    <>
      <Head>
        <title>{"SJ's Projects"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.gif" />
      </Head>

      <main id="projectsPage" className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>Projects</h1>
          <p className={util.description}>
            {"Since mid 2020, I’ve focused my energy on "}
            <a
              href="https://withcompound.com"
              target="_blank"
              rel="noopener noreferrer"
              className={util.externalLink}
            >
              Compound
            </a>
            {
              ". Before that, I worked on a few personal coding projects, freelance and in-house design jobs. Between 2018 and 2020 I worked on a variety of hardware, installations, AR and creative coding sketches."
            }
          </p>
          <ul className={util.list}>
            <ProjectTile
              image="compound"
              title="Compound"
              content="This is where I work and spent the last 2 years"
              type="Design · Full-time"
              date="2022-05-01"
              url="https://withcompound.com"
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
              url="https://www.startupgenerator.app/"
            />
            <ProjectTile
              image="flo-recruit"
              title="Flo Recruit"
              content={
                "I spent 8 months freelancing for the legal recruiting platform. I worked on the dashboard for employer and school platform. I also designed and built the marketing website and a CMS driven blog."
              }
              type="Startup · Freelance"
              date="2020-04-20"
              url={"flo"}
              internal="true"
            />
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
              date="2019-02-20"
              url={"oriant"}
              internal="true"
            />
            <ProjectTile
              image="parkamigo"
              title="ParkAmigo"
              content={
                "I spent 2 weeks working on a complete redesign of the ParkAmigo iOS app."
              }
              type="iOS - Freelance"
              date="2018-12-20"
              url={"parkamigo"}
              internal="true"
            />
            <ProjectTile
              image="illesteva"
              title="Illesteva"
              content={
                "I worked as a graphic designer at the eyewear brand. I redesigned and maintained the e-commerce site and was in charge of all online and offline graphical assets."
              }
              type="Web · Full-time"
              date="2017-8-24"
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
