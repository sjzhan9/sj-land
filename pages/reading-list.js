import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import util from "../styles/util.module.css";
import Link from "next/link";
import Menu from "../components/menu";
import Background from "../components/background";
import ReadingListTile from "../components/readingListTile";
export default function ReadingList() {
  return (
    <>
      <Head>
        <title>SJs Reading List</title>
        <meta
          name="description"
          content="Some of my bookmarks that I love re-reading"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>Reading List</h1>

          <p className={util.description}>
            Some of my bookmarks that I love re-reading
          </p>

          <ul className={util.list}>
            <ReadingListTile
              title="My first impression of Web3"
              url="https://moxie.org/2022/01/07/web3-first-impressions.html"
              date="2022-01-01"
            />
            <ReadingListTile
              title="We don't sell saddles here"
              url="https://moxie.org/2022/01/07/web3-first-impressions.html"
              date="2020-09-12"
            />
          </ul>
        </div>
      </main>
    </>
  );
}
