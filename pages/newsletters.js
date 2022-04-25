import Head from "next/head";
import styles from "../styles/Home.module.css";
import util from "../styles/util.module.css";
import Link from "next/link";
import NewsletterTile from "../components/newsletterTile";

export default function Newsletters() {
  return (
    <>
      <Head>
        <title>SJs Favorite Newsletters</title>
        <meta
          name="description"
          content="What I read in the morning and before bed"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>Newsletters</h1>
          <p className={util.description}>
            What I read in the morning and before bed
          </p>
          <ul className={util.list}>
            <NewsletterTile
              image="compound"
              title="Robinhood Snacks"
              content="If you are a founder, pitch to me!"
              url="https://robinhood.com"
            />
            <NewsletterTile
              image="compound"
              title="All In"
              content="If you are a founder, pitch to me!"
              url="robinhood.com"
            />
            <NewsletterTile
              image="compound"
              title="Lex Fridman"
              content="If you are a founder, pitch to me!"
              url="robinhood.com"
            />
            <NewsletterTile
              image="compound"
              title="Not Boring"
              content="If you are a founder, pitch to me!"
              url="robinhood.com"
            />
          </ul>
        </div>
      </main>
    </>
  );
}
