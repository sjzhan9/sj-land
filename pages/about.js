import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";

import util from "../styles/util.module.css";
import ContactContent from "../components/contactContent";
import ExpTile from "../components/tiles/expTile";

export default function About() {
  //memorize scroll pos, add a id to the page element, then use below code to remember scroll pos
  useEffect(() => {
    let thisPage = document.querySelector("#aboutPage");
    let top = localStorage.getItem("about-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      localStorage.setItem("about-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About me" />
        <link rel="icon" href="/favicon.gif" />
      </Head>

      <main className={util.page} id="aboutPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>About</h1>
          {/* <p className={util.description}>About me.</p> */}
          <div className={util.inset}>
            <p className={util.read}>
              {
                "I’m a designer, developer and product builder based in New York. I’m currently working at Series B fintech company "
              }
              <a
                href="https://withcompound.com"
                target="_blank"
                rel="noopener noreferrer"
                className={util.externalLink}
              >
                Compound
              </a>
              {"."}
            </p>
            <h2 className={util.readTitle}>On Design</h2>
            <p className={util.read}>
              {
                "I’m deeply fascinated by all design practices. I like to read about design histories and to talk about iconic chairs. My "
              }
              <a
                href="https://form2shape.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={util.externalLink}
              >
                master thesis
              </a>
              {
                " included an archive of influential 20th century industrial designs. During undergrad, I wrote papers on Jony Ive and Issey Miyake. In my fashion years, I learnt about the supply chains and sewn tens of garments myself. Growing up with an architect father, I’ve paid attention to shapes, forms and spaces at every street corner since I was a kid. "
              }
            </p>
            <h2 className={util.readTitle}>On Learning</h2>
            <p className={util.read}>
              {
                "Another big part of my life is my pursuit to better understand how the world works. Complicated systems and economic patterns fascinate me. You can find what I’ve been reading in my "
              }
              <Link href="/reading-list">
                <a className={util.internalLink}>Reading List</a>
              </Link>
              {"."}
            </p>
            <h2 className={util.readTitle}>On Career</h2>
            <p className={util.read}>
              {
                "In the 10 years that Ive been studying and working in design. I spent the first two in arts, and the next four years trying my hands in different design practices. In the past 5 years, I focused on designing and developing software products. I’ve worked in large design teams as well as performed as the sole designer for startups. If you are interested to know more, you can find me on LinkedIn. I’ve also added a short preview below."
              }
            </p>
            <div>
              <ExpTile
                date="2020–Now"
                title="Founding Design at Compound"
                url={"https://withcompound.com"}
                content={
                  "Started as the only designer from Seed to Series B. Then recruited and built a talent team of designers across product and brand."
                }
              />
              <ExpTile
                date="2020"
                title="Design Fellow at Kleiner Perkins (Zumper)"
                url={"https://zumper.com"}
                content={
                  "Led Zumper’s landlord portal redesign to improve listing completeness and product adoption. Zumper is the largest US private startup in the rental space."
                }
              />
              <ExpTile
                date="2019–20"
                title="Design at Friendly Studio"
                url={"https://friendly.studio"}
                content={
                  "First designer at the design collective. Mainly worked for YC19 recruiting startup Flo Recruit. Design experiences across web, tablet and mobile use-cases for lawyers. Design and built landing pages and CMS-driven blogs."
                }
              />
              <ExpTile
                date="2019"
                title="UX Design at Sonos"
                url={"https://sonos.com"}
                content={
                  "Led service connections redesign. Ran exploration on music scheduling experiences. Sonos app is used by 10M households. "
                }
              />
              <ExpTile
                date="2017–18"
                title="Web/Digital Design at Fashion Company"
                url={"https://illesteva.com"}
                content={
                  "Led the website redesign and relaunched the e-commerce platform on Shopify. Supported social graphics and ran all email marketing efforts."
                }
              />
              <ExpTile
                date="2015–17"
                title="Co-Founder at Fashion Company"
                content={
                  "Targeted the affordable luxury accessory market. Got some press, sales, and traction but ultimately closed it down. The site I built was featured as a Squarespace template example, which accidentally pushed me toward web and digital design."
                }
              />
              <ExpTile
                date="2012–20"
                title={
                  "Freelance Designer & Intern at multiple Fashion Companies"
                }
                content={
                  "Did graphic design freelance gigs, while doing the most ridiculous intern chores at different New York fashion companies."
                }
              />
            </div>

            <h2 className={util.readTitle}>About This Site</h2>

            <p className={util.read}>
              Do I need to overshare to this degree? No. Could this have been a
              notion page? Absolutely. But I built this custom site for 2
              reasons:
            </p>
            <ol
              type="1"
              start="1"
              style={{ padding: "0rem 0rem 0rem 1.25rem" }}
            >
              <li className={util.read} style={{ marginBottom: "0.5rem" }}>
                Keep myself accountable with my investments and learnings.
                Sharing these in public gives me another level of rigor.
              </li>
              <li className={util.read} style={{ marginBottom: "0.5rem" }}>
                Keep myself engaged with the latest stack in web dev. Coding and
                iterating the site exposes me to new libraries and frameworks.
              </li>
            </ol>

            <p className={util.read}>
              This site in built with{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={util.normalLink}
              >
                Next.js
              </a>{" "}
              and deployed on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className={util.externalLink}
              >
                Vercel
              </a>
              . Content is managed in{" "}
              <a
                href="http://notion.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={util.normalLink}
              >
                Notion
              </a>{" "}
              and statically pre-rendered through{" "}
              <a
                href="https://developers.notion.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={util.externalLink}
              >
                Notion API
              </a>
              . When new discoveries are added on the go, content is{" "}
              <a
                href="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration"
                target="_blank"
                rel="noopener noreferrer"
                className={util.normalLink}
              >
                regenerated
              </a>{" "}
              at server-side on demand, without manual redeployment.{" "}
              <a
                href="https://www.radix-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={util.externalLink}
              >
                Radix UI
              </a>{" "}
              is used for front-end components like modals and tooltips.{" "}
              <a
                href="https://github.com/pacocoursey/next-themes"
                target="_blank"
                rel="noopener noreferrer"
                className={util.externalLink}
              >
                Next Themes
              </a>{" "}
              made light/dark-mode management easy.
            </p>

            <p className={util.read}>
              The site was initially built in Apr 2022 over 2 weekends.
            </p>
          </div>

          <h2 className={util.readTitle} style={{ marginTop: "5rem" }}>
            Contact
          </h2>
          <ContactContent inModal="false" />
        </div>
      </main>
    </>
  );
}
