import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import util from "../styles/util.module.css";
import Link from "next/link";
import Tile from "../components/tiles/tile";
const { Client } = require("@notionhq/client");

export default function Home({ list }) {
  console.log(list);
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
            {
              "I’m a designer and developer by training and trade. I spend most of my spare time reading about business, finance and crypto. If this combination interests you, welcome to my library where I share my reading list, investment updates, and my software adventures."
            }
          </p>
          {/* <p className={util.description}>
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
          </p> */}
          <ul className={util.list}>
            {list.map((item) => (
              <Tile
                key={item.id}
                logoUrl={item.properties.Logo.files[0].file.url}
                title={item.properties.Name.title[0].plain_text}
                content={item.properties.Body.rich_text[0].plain_text}
                url={item.properties.URL.url}
                date={item.properties.Time.date.start}
                tags={item.properties.Tags.multi_select}
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

//notion API
export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.databases.query({
    database_id: process.env.NOTION_RECENTS_ID,
    sorts: [
      {
        property: "Time",
        direction: "descending",
      },
    ],
  });

  return {
    props: {
      list: response.results,
    },
    revalidate: 5,
  };
}
