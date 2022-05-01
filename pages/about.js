import Head from "next/head";
import Link from "next/link";
import util from "../styles/util.module.css";
import ContactContent from "../components/contactContent";
import ExpTile from "../components/tiles/expTile";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={util.page}>
        <div className={util.pageColumn}>
          <h1 className={util.header}>About</h1>
          {/* <p className={util.description}>About me.</p> */}
          <div className={util.inset4}>
            <p className={util.read}>
              Born and raised in Shanghai. I moved to New York in 2013 and have
              studied and worked here since.
            </p>
            <h2 className={util.readTitle}>On Design</h2>
            <p className={util.read}>
              Though my bread and butter today is digital product design, Im
              deeply fascinated by all design practices. I like to read about
              design histories and to talk about iconic chairs. My master thesis
              included an archive of influential 20th century industrial
              designs. During undergrad, I wrote papers on Jony Ive and Issey
              Miyake. In my fashion years, I learnt about the supply chains and
              sewn collections of garments myself. Growing up with an architect
              father, Ive paid attention to shapes, forms and spaces at every
              street corner since I was a kid. Across practices and throughout
              history, I believe the one constant of design, is that design
              makes objects or environments more functional and comprehensible.
            </p>
            <h2 className={util.readTitle}>On Learning</h2>
            <p className={util.read}>
              Another big part of my life is my pursuit to better understand how
              the world works. Complicated systems and economic patterns
              fascinate me. The rise and fall of trends and their accelerants.
            </p>
            <h2 className={util.readTitle}>On Career</h2>
            <p className={util.read}>
              In the 10 years that Ive been studying and working in design. I
              spent the first two in arts, and the next four years trying my
              hands in different design practices. In the past four years, I
              focused on designing and developing software products. Ive worked
              in large design teams as well as performed as the sole designer
              for startups. If you are interested to know more, you can find me
              on LinkedIn. Ive also added a short preview below.
            </p>

            <ExpTile
              date="2020–Now"
              title="Founding Design at Compound"
              url={"https://withcompound.com"}
              content="Led design across product and brand."
            />
            <ExpTile
              date="2020"
              title="Design Fellow at Kleiner Perkins (Zumper)"
              url={"https://zumper.com"}
              content="Led landlord portal redesign."
            />
            <ExpTile
              date="2019–20"
              title="Design at Friendly Studio"
              url={"https://friendly.studio"}
              content="First designer at the design collective. Mainly worked for YC19 recruiting startup Flo Recruit."
            />
            <ExpTile
              date="2019"
              title="UX Design at Sonos"
              url={"https://sonos.com"}
              content="Led service connections redesign and music scheduling exploration."
            />
            <ExpTile
              date="2017–18"
              title="Web/Digital Design at Fashion Company"
              url={"https://illesteva.com"}
              content="Led the website redesign and ran email marketing efforts."
            />
            <ExpTile
              date="2015–17"
              title="Co-Founder at Fashion Company"
              content="Got some press, sales, and traction but closed it down."
            />
            <ExpTile
              date="2012–20"
              title="Freelance Designer"
              content="Brand, Packaging, Websites"
            />
            <h2 className={util.readTitle}>Contact</h2>

            <ContactContent inModal="false" />
          </div>
        </div>
      </main>
    </>
  );
}
