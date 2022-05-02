import Head from "next/head";
import util from "../styles/util.module.css";
import Link from "next/link";
import NewsletterTile from "../components/tiles/newsletterTile";
const { Client } = require("@notionhq/client");

export default function Newsletters({ list }) {
  console.log(list);
  return (
    <>
      <Head>
        <title>{"SJ's Favorite Newsletters"}</title>
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
            {list.map((item) => (
              <NewsletterTile
                key={item.id}
                imageUrl={item.properties.Logo.files[0].file.url}
                title={item.properties.Name.title[0].plain_text}
                content={item.properties.Body.rich_text[0].plain_text}
                url={item.properties.URL.url}
                tags={item.properties.Tags.multi_select}
                fav={item.properties.Fav.checkbox}
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
    database_id: process.env.NOTION_NEWSLETTERS_ID,
    filter: {
      and: [
        {
          property: "Display",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });

  return {
    props: {
      list: response.results,
    },
    revalidate: 5,
  };
}
