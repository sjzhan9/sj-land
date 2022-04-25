import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import util from "../styles/util.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

import PodcastTile from "../components/podcastTile";

export default function Podcasts() {
  // useEffect(() => {
  //   const scrollContainer = document.querySelector("main");

  //   scrollContainer.addEventListener("wheel", (evt) => {
  //     evt.preventDefault();
  //     scrollContainer.scrollLeft += evt.deltaY;
  //   });
  // });

  return (
    <>
      <Head>
        <title>{"SJ's Favorite Podcasts"}</title>
        <meta name="description" content="What I listening to when I commute" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>Podcasts</h1>
          <p className={util.description}>What I listening to when I commute</p>
        </div>
        <ul className={util.grid}>
          <PodcastTile
            image="snacks"
            title="Robinhood Snacks"
            content="If you are a founder, pitch to me!"
            url="https://robinhood.com"
          />{" "}
          <PodcastTile
            image="snacks"
            title="Robinhood Snacks"
            content="If you are a founder, pitch to me!"
            url="https://robinhood.com"
          />{" "}
          <PodcastTile
            image="snacks"
            title="Robinhood Snacks"
            content="If you are a founder, pitch to me!"
            url="https://robinhood.com"
          />{" "}
          <PodcastTile
            image="snacks"
            title="Robinhood Snacks"
            content="If you are a founder, pitch to me!"
            url="https://robinhood.com"
          />{" "}
          <PodcastTile
            image="snacks"
            title="Robinhood Snacks"
            content="If you are a founder, pitch to me!"
            url="https://robinhood.com"
          />
        </ul>
      </main>
    </>
  );
}
