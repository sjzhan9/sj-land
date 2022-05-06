import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Image from "next/image";

export default function Oriant() {
  const numOfImg = 8;
  let images = [];
  for (var i = 1; i < numOfImg + 1; i++) {
    images.push(
      <img
        className={util.imageBg}
        src={"/project-page/billshare/billshare" + i + ".png"}
        width="100%"
      />
    );
  }
  return (
    <>
      <Head>
        <title>BillShare</title>
        <meta
          name="description"
          content="A design exercise to enable people splitting bills effectively.
                The experience utilizes familiar chat interfaces for the
                organization of groups. The App also enable various splitting
                methods. It was a 4 day project that I carried out from research
                to hi-fidelity UI design."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={util.page}>
        <div className={util.projectColumn}>
          <div className={util.projectTopContainer}>
            <div className={util.projectTopLeft}>
              <h1 className={util.projectHeader}>BillShare</h1>
              <p className={util.description}>
                A design exercise to enable people splitting bills effectively.
                The experience utilizes familiar chat interfaces for the
                organization of groups. The App also enable various splitting
                methods. It was a 4 day project that I carried out from research
                to hi-fidelity UI design.
              </p>
            </div>

            <p className={util.projectDate}>Mar 2019</p>
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
