import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Image from "next/image";

export default function Oriant() {
  return (
    <>
      <Head>
        <title>Oriant</title>
        <meta name="description" content="Oriant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link scroll={false} href="/projects">
        back
      </Link>
      <main className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>Oriant</h1>
          <Image
            // className={styles.image}
            src={"/project-page/oriant/" + "res" + ".png"}
            width={400}
            height={220}
            layout="responsive"
            alt={"project image"}
          />
          {/* <p className={util.description}>About me.</p> */}
          <div className={util.inset4}>
            <p className={util.read}>
              Born and raised in Shanghai. I moved to New York in 2013 and have
              studied and worked here since.
            </p>
            <h2 className={util.readTitle}>On Design</h2>
          </div>
        </div>
      </main>
    </>
  );
}
