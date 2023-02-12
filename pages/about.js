import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import util from "../styles/util.module.css";
import classNames from 'classnames';
import ContactContent from "../components/contactContent";
import ExpTile from "../components/tiles/expTile";
import Script from "next/script";
const { Client } = require("@notionhq/client");
import Tile from "../components/tiles/tile";
import { TwitterTweetEmbed } from "react-twitter-embed";
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';


export default function About({ list }) {

  const FAQ = () => (
    <Accordion.Root className={util.AccordionRoot} type="single" defaultValue="item-1" collapsible>
    <Accordion.Item className={util.AccordionItem} value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </Accordion.Item>
  
    <Accordion.Item className={util.AccordionItem} value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        <p>Yes. Its unstyled by default, giving you freedom over the look and feel. </p>
      </AccordionContent>
    </Accordion.Item>
  
    <Accordion.Item className={util.AccordionItem} value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <Accordion.Content className={util.AccordionContent}>
        <div className={util.AccordionContentText}>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
  );
  
  // eslint-disable-next-line react/display-name
    const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
      <Accordion.Header className={util.AccordionHeader}>
        <Accordion.Trigger
          className={classNames(util.AccordionTrigger, className)}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <ChevronDownIcon className={util.AccordionChevron} aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
    ));
    
    // eslint-disable-next-line react/display-name
    const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
      <Accordion.Content
        className={classNames(util.AccordionContent, className)}
        {...props}
        ref={forwardedRef}
      >
        <div className={util.AccordionContentText}>{children}</div>
      </Accordion.Content>
  ));
 

  const items = [
    {
      id: 1,
      title: 'Accordion Item 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Accordion Item 2',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  useEffect(() => {
    let thisPage = document.querySelector("#aboutPage");
    let top = sessionStorage.getItem("about-scroll");
    if (top !== null) {
      thisPage.scrollTop = top;
    }
    const handleScroll = () => {
      sessionStorage.setItem("about-scroll", thisPage.scrollTop);
    };
    thisPage.addEventListener("scroll", handleScroll);
    return () => thisPage.removeEventListener("scroll", handleScroll);
  }, []);

  const description =
    "The best talent network in web3.";
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content={description} />
        <link rel="icon" href="icon.png" />{" "}
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>
     
     
      <main className={util.page} id="aboutPage">
        <div className={util.pageColumn}>
          <h1 className={util.header}>Introducing Alchemy Connect</h1>
          <h5 className={util.subtitle}>The a-list of decentralized networks.</h5>
            <div className={util.inset}>
                <p className={util.description}>
                Welcome to Alchemy Connect. the premier destination for finding the best talent and companies in the web3 ecosystem. As experts in the field of blockchain and decentralized technology, we understand the challenges that both job seekers and companies face in navigating this rapidly evolving industry.
                </p>
                <br></br>
                <p className={util.description}>
                    Thats why weve created a platform that carefully curates and connects top talent with leading companies in the web3 space. Our team of experts personally reviews and selects only the most qualified candidates and reputable businesses to be featured on our site.
                </p>
                <br></br>
                <p className = {util.description}>
                We believe that by providing a trusted resource for finding the best professionals and opportunities in the web3 industry, we can contribute to the mass adoption of blockchain technology and bring a billion people into the decentralized world.
                </p>
            </div>
           
           <p className={util.divider}></p>
            <h1 className={util.header}>FAQ</h1>
            <h5 className={util.subtitle}>The answer to your question lies below.</h5>
            <FAQ />
            
        </div>
      </main>
    </>
  );
}

