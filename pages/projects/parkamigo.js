import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Image from "next/image";

export default function ParkAmigo() {
  const numOfImg = 7;
  let images = [];
  for (var i = 1; i < numOfImg + 1; i++) {
    images.push(
      <img
        className={util.imageBg}
        src={"/project-page/parkamigo/parkamigo" + i + ".png"}
        width="100%"
        alt="project image"
      />
    );
  }
  return (
    <>
      <Head>
        <title>ParkAmigo</title>
        <meta
          name="description"
          content="I spent 2 weeks working on a complete redesign of the ParkAmigo iOS app."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={util.page}>
        <div className={util.projectColumn}>
          <div className={util.projectTopContainer}>
            <div className={util.projectTopLeft}>
              <h1 className={util.projectHeader}>ParkAmigo</h1>
              <p className={util.description}>
                I spent 2 weeks working on a complete redesign of the ParkAmigo
                iOS app.
              </p>
            </div>

            <p className={util.projectDate}>Dec 2018</p>
          </div>

          <iframe
            className={util.video}
            src="https://player.vimeo.com/video/312381737?h=57615d0838"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>

          {images}
          <Link scroll={false} href="/projects">
            <a className={util.backButton}> ← &nbsp; Other Projects</a>
          </Link>
        </div>
      </main>
    </>
  );
}
