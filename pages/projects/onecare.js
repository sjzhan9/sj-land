import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Image from "next/image";

export default function OneCare() {
  const numOfImg = 13;
  let images = [];
  for (var i = 1; i < numOfImg + 1; i++) {
    images.push(
      <img
        className={util.imageBg}
        src={"/project-page/onecare/onecare" + i + ".jpeg"}
        width="100%"
      />
    );
  }
  return (
    <>
      <Head>
        <title>OneCare</title>
        <meta
          name="description"
          content="A 2-day design exercise to improve the quality of life for children with type-1 diabetes. The app helps patient monitor their glucose level, manage insulin injection alerts and track symptoms."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={util.page}>
        <div className={util.projectColumn}>
          <div className={util.projectTopContainer}>
            <div className={util.projectTopLeft}>
              <h1 className={util.projectHeader}>OneCare</h1>
              <p className={util.description}>
                A 2-day design exercise to improve the quality of life for
                children with type-1 diabetes. The app helps patient monitor
                their glucose level, manage insulin injection alerts and track
                symptoms.
              </p>
            </div>

            <p className={util.projectDate}>Apr 2019</p>
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
