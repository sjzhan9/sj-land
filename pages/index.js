import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import util from "../styles/util.module.css";
import Link from "next/link";
import Menu from "../components/menu";
import Background from "../components/background";
import Tile from "../components/tile";

export default function Home() {
  return (
    <>
      <Head>
        <title>SJ · Home</title>
        <meta name="description" content="Personal site of SJ Zhang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>Recents</h1>

          <p className={util.description}>
            Currently, Im leading design at<> </>
            <a
              href="https://withcompound.com"
              target="_blank"
              rel="noopener noreferrer"
              className={util.externalLink}
            >
              Compound
            </a>
            , building a bank & wealth manager for startup founders and
            employees.
          </p>
          <p className={util.description}>
            As a trained designer, I code side projects, invest in companies,
            and is a part of a few venture communities. To learn more about me,
            press
            <> </>
            <code>2</code> to go to
            <> </>
            <nobr>
              <Link href="/about">
                <a className={util.internalLink}>About</a>
              </Link>
              .
            </nobr>
          </p>
          <ul className={util.list}>
            <Tile
              icon="about"
              title="Ive joined the Republic community as a Venture Fellow"
              content="If you are a founder, pitch to me!"
              type="Updates"
              date="2021/01/01"
            />
          </ul>
        </div>
      </main>
    </>
  );
}
