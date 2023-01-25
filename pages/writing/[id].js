import Head from "next/head";
import Link from "next/link";
import util from "../../styles/util.module.css";
import Script from "next/script";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title> {postData.title}</title>
        <meta name="description" content={postData.contentHtml} />
        <link rel="icon" href="icon.png" />{" "}
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T2CWC86NTK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <main className={util.page} id="aboutPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>{postData.title}</h1>
          <div className={util.inset}>
            <p className={util.description}>{postData.date}</p>
            <div className={util.divider}></div>
            <p className={util.read}>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
