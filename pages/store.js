import Head from "next/head";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import StoreTile from "../components/tiles/storeTile";
import Script from "next/script";

export default function Store() {
  useEffect(() => {
    let thisPage = document.querySelector("#storePage");
    let top = sessionStorage.getItem("store-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("store-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  const description =
    "Sharing some random stuff that I cooked up. I’ve been asked a lot if I would sell this website as a template. Nope, it's free to fork, but you are welcome to buy me coffee : )";
  return (
    <>
      <Head>
        <title>{"SJ.Land Store"}</title>
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
      <main className={util.page} id="storePage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Boutique</h1>
          <div className={util.description}>
            <p>{description}</p>
          </div>
          <div className={util.inlineCTA}>
            <div>
              <h3 className={util.tileTitle}>Forking this website?</h3>
              <p className={util.tileContent}>
                {"It is free on Github, but feel free to buy me lunch "}
                <nobr>{": )"}</nobr>
              </p>
            </div>
            <button className={util.button + " " + util.primaryButton}>
              <a
                href="https://sjzhang.gumroad.com/l/support"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support my adventure ↗
              </a>
            </button>
          </div>
          <ul className={util.list}>
            <p className={util.textDivider}>Wallpapers</p>
            <StoreTile
              id="W01-01"
              title="W01-01"
              type="6K Desktop + Mobile"
              url={"https://sjzhang.gumroad.com/l/wallpaper-01"}
            />
            <StoreTile
              id="W01-02"
              title="W01-02"
              type="6K Desktop + Mobile"
              url={"https://sjzhang.gumroad.com/l/wallpaper-01"}
            />
            <StoreTile
              id="W01-03"
              title="W01-03"
              type="6K Desktop + Mobile"
              url={"https://sjzhang.gumroad.com/l/wallpaper-01"}
            />
            <StoreTile
              id="W01-04"
              title="W01-04"
              type="6K Desktop + Mobile"
              url={"https://sjzhang.gumroad.com/l/wallpaper-01"}
            />
          </ul>
        </div>
      </main>
    </>
  );
}
