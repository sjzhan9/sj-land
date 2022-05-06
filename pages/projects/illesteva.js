import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Image from "next/image";

export default function Illesteva() {
  const numOfImg = 7;
  let images = [];
  for (var i = 1; i < numOfImg + 1; i++) {
    images.push(
      <img
        className={util.imageBg}
        src={"/project-page/illesteva/illesteva" + i + ".png"}
        width="100%"
      />
    );
  }
  return (
    <>
      <Head>
        <title>Illesteva</title>
        <meta
          name="description"
          content="I worked as a graphic designer at the eyewear brand. I redesigned and maintained the e-commerce site and was in charge of all online and offline graphical assets."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={util.page}>
        <div className={util.projectColumn}>
          <div className={util.projectTopContainer}>
            <div className={util.projectTopLeft}>
              <h1 className={util.projectHeader}>Illesteva</h1>
              <p className={util.description}>
                I worked as a graphic designer at the eyewear brand. I
                redesigned and maintained the e-commerce site and was in charge
                of all online and offline graphical assets.
              </p>
            </div>

            <p className={util.projectDate}>Aug 2017 - Jul 2018</p>
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
