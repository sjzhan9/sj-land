import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Image from "next/image";
import Script from "next/script";

export default function Mixily() {
  const numOfImg = 5;
  let images = [];
  for (var i = 1; i < numOfImg + 1; i++) {
    images.push(
      <img
        className={util.imageBg}
        src={"/project-page/mixily/mixily" + i + ".png"}
        width="100%"
        alt="project image"
      />
    );
  }
  return (
    <>
      <Head>
        <title>Mixily</title>
        <meta
          name="description"
          content="I freelanced a few month for the lightweight event planning platform. As a Facebook Event alternative that focuses on privacy and being inclusive to non-facebook users, Mixily allows you to create and manage events, RSVPs, message attendees."
        />
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

      <main className={util.page}>
        <div className={util.projectColumn}>
          <div className={util.projectTopContainer}>
            <div className={util.projectTopLeft}>
              <h1 className={util.projectHeader}>Mixily</h1>
              <p className={util.description}>
                I freelanced a few month for the lightweight event planning
                platform. As a Facebook Event alternative that focuses on
                privacy and being inclusive to non-facebook users, Mixily allows
                you to create and manage events, RSVPs, message attendees.
              </p>
            </div>

            <p className={util.projectDate}>Jun 2019 – Aug 2019</p>
          </div>
          {images}
          <Link scroll={false} href="/projects">
            <a className={util.backButton}> ← &nbsp; Other Projects</a>
          </Link>
        </div>
      </main>
    </>
  );
}
