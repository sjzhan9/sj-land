import styles from ".//tile.module.css";
import util from "../../../styles/util.module.css";
import Link from "next/link";
import Image from "next/image";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Fragment } from 'react';
import {
  Root as DialogRoot,
  Trigger as DialogTrigger,
  Portal as DialogPortal,
  Overlay as DialogOverlay,
  Content as DialogContent,
  Title as DialogTitle
} from "@radix-ui/react-dialog";



export default function Tile({
  internalUrl,
  logoUrl,
  title,
  content,
  tags,
  date,
  url,
  experience,
  education }) {

  const Tags = () => {
    return (
      <div className={util.tags + " " + util.flexRow}>
        {tags
          ? tags.map((tag) => (
            <p
              key={tag.name + tag.color}
              className={tag.color + "Tag tag"}
            >
              {tag.name}
            </p>
          ))
          : null}
      </div>
    )
  }

  const ExperienceLong = (content) => {
    return (
      <span className={styles.tileContent}>
        {experience.map((e, i) => {
          const items = e.plain_text.split(',');
          return (
            <Fragment key={i}>
              <h3>{e.header}</h3>
              <ul>
                {items.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.split('-').map((subitem, subindex) => {
                        return <div key={subindex}>{subitem}</div>;
                      })}
                    </li>
                  );
                })}
              </ul>
            </Fragment>
          );
        })}
      </span>
    );
  };


  

  return (
    <div className={styles.container}>
      <div className={styles.stack}>
        <div className={styles.iconContainer}>
          {internalUrl ? (
            <Image
              className={styles.icon}
              priority
              unoptimized
              src={"/recents/" + internalUrl + ".png"}
              height={28}
              width={28}
              alt={title}
            />
          ) : logoUrl ? (
            <Image
              className={styles.icon}
              priority
              unoptimized
              src={logoUrl}
              height={28}
              width={28}
              alt={title}
            />
          ) : null}
        </div>
        {/* We want:
        Overlay
        1. Summary
        2. Name + 3. Tags + Favorite / Non-Favorite
        4. Looking For:
        5. Experience (Tags for Experience , load 3, any more input out the length)
            Company Name
            Role
            Length
        6. Education
        7. Ideal Next Opportunity Tags + Salary
        8. Share, Bookmark, Not Interested, Request To Chat

        Request to chat:
        LEFT: Expanded Profile
        RIGHT: Chat / Message + Scheduling Link */}
       
        
            
       <DialogRoot>
          <DialogTrigger asChild>
            <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
          </DialogTrigger>
          <DialogPortal>  
            <DialogOverlay className={styles.overlay} />
            <DialogContent className={styles.content} onOpenAutoFocus={(event) => event.preventDefault()}>
              <div className={styles.stack}>
                <div className={styles.top}>
                  <div className={util.flexRow + " " + util.overlayRow}>
                    <DialogTitle className={styles.title}>{title}</DialogTitle>
                    <Tags />
                  </div>
                  <h3 className={styles.subheader}>Experience</h3>
                  <ExperienceLong />
                  <div className={util.tags + " " + util.flexRow}>
                    
                  </div>
                </div>
              </div>
            </DialogContent>
          </DialogPortal>
        </DialogRoot>


        {/* {url.includes("http") ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.titleLink}
          >
            <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
            <span className={styles.externalIcon}>↗</span>
          </a>
        ) : (
          <Link href={url}>
            <a className={styles.titleLink}>
              <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
              <span className={styles.externalIcon}>→</span>
            </a>
          </Link>
        )} */}
        
        <Tooltip.Provider delayDuration={800}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
            <span className={styles.tileContent}>
                    {content.map((e, i) => {
                      const splitText = e.plain_text.split(',');
                      return (
                        <Fragment key={i}>
                          {splitText.map((text, index) => (
                            <Fragment key={index}>
                              {text}
                              {index < splitText.length - 1 && <br />}
                            </Fragment>
                          ))}
                        </Fragment>
                      );
                    })}
              </span>
            </Tooltip.Trigger>
            <Tooltip.Content className={util.tooltip + " " + util.tooltipLarge}>
              <span className={util.viewTruncated}>
              {content.map((e, i) => {
                      const splitText = e.plain_text.split(',');
                      return (
                        <Fragment key={i}>
                          {splitText.map((text, index) => (
                            <Fragment key={index}>
                              {text}
                              {index < splitText.length - 1 && <br />}
                            </Fragment>
                          ))}
                        </Fragment>
                      );
                    })}
              </span>
              <Tooltip.Arrow className={util.arrow} />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
      {/* <p className={styles.date}>
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        })}
      </p> */}
      <div className={util.tags + " " + util.flexRow}>
            {tags
              ? tags.map((tag) => (
                  <p
                    key={tag.name + tag.color}
                    className={tag.color + "Tag tag"}
                  >
                    {tag.name}
                  </p>
                ))
              : null}
        </div>
    </div>
  );
};
