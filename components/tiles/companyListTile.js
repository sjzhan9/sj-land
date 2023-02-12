import styles from ".//companyListTile.module.css";
import Image from "next/image";
import util from "../../styles/util.module.css";
import overlay from "../tiles/homeVersions/overlay.module.css"
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  Root as DialogRoot,
  Trigger as DialogTrigger,
  Portal as DialogPortal,
  Overlay as DialogOverlay,
  Content as DialogContent,
  Title as DialogTitle,
  Dialog,
  DialogDescription
} from "@radix-ui/react-dialog";


export default function CompanyListTile({ title, url, about, founder, founderLinkedin, email, raising, tags }) {

  let displayUrl = url
    .replace("https://www.", "")
    .replace("http://www.", "")
    .replace("https://", "")
    .replace("http://", "");
  return (
    // <a
    //   href={url}
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   className={styles.container}
    // >
    <div>
    <DialogRoot>
    <DialogTrigger asChild>
    <div className = {styles.container}>      
      {raising ? (
        <Tooltip.Provider delayDuration={300}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className={styles.heart}>
                <svg
                  width="13"
                  height="18"
                  viewBox="0 0 13 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16.8747V0H13V16.8747C13 17.308 12.4864 17.5362 12.1649 17.2458L6.83512 12.4324C6.64477 12.2605 6.35523 12.2605 6.16488 12.4324L0.83512 17.2458C0.513554 17.5362 0 17.308 0 16.8747Z"
                    fill="#838383"
                    fillOpacity="0.27"
                  />
                </svg>
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content className={util.tooltip}>
              This company is currently raising. You can use our filter to see who is raising.
              <Tooltip.Arrow className={util.arrow} />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      ) : null}
      <div className={styles.icon}>
        <Image
          unoptimized
          onError="this.src='/feature/link.svg'"
          src={
            "https://s2.googleusercontent.com/s2/favicons?domain_url=" +
            url +
            "&sz=64"
          }
          height={20}
          width={20}
          alt="url favicon"
        ></Image>
      </div>

      <div className={styles.right}>
        <div className={styles.stack}>
          <div>
            <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
            <span className={styles.externalIcon}>↗</span>
          </div>

          <p className={styles.url + " " + util.hiddenOnMobile}>{displayUrl}</p>
        </div>
        <div className={util.tags + " " + util.flexRow}>
          {tags
            ? tags.map((tag) => (
                <p key={tag.name + tag.color} className={tag.color + "Tag tag"}>
                  {tag.name}
                </p>
              ))
            : null}
        </div>
      </div>
    </div>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay className={overlay.overlay} />
               <DialogContent className={overlay.content} onOpenAutoFocus={(event) => event.preventDefault()}>
                <div className = {overlay.verticalContainer}>
                    <div className = {overlay.row}>
                    <a href = {url} className = {overlay.overlayTitleLink} ><DialogTitle className={overlay.title}>{title} <span className = {overlay.linkArrow}>↗</span></DialogTitle></a>
                    <Image unoptimized src={ "https://s2.googleusercontent.com/s2/favicons?domain_url=" + url + "&sz=64" } height={32} width={32} alt="url favicon" ></Image>
                    </div>
                <div className = {overlay.stack}>
                    <div className = {overlay.contentWrapper}>
                        <h4 className = {overlay.subheader}>Industry:</h4>
                        <div className={util.tags + " " + util.flexRow}>
                          {tags
                            ? tags.map((tag) => (
                                <p key={tag.name + tag.color} className={tag.color + "Tag tag"}>
                                  {tag.name}
                                </p>
                              ))
                            : null}
                        </div>
                    </div>
                    <div className = {overlay.contentWrapper}>
                        <h4 className = {overlay.subheader}>About:</h4>
                        <p className = {overlay.description}>
                        {about.map((e, i) => (
                            <a key={i} href={e.href}>
                                {e.plain_text}
                            </a>
                        ))}
                        </p>
                    </div>
                    <div className = {overlay.row + " " + overlay.subrow}>
                        <div className = {overlay.contentWrapper}>
                            <h4 className = {overlay.subheader}>Latest Fundraising Round:</h4>
                            <p className = {overlay.description}>
                            $20m at a $100m valuation.
                            </p>
                        </div>
                        <div className = {overlay.contentWrapper}>
                            <h4 className = {overlay.subheader}>Lead Investor:</h4>
                            <div className = {overlay.row + " " + overlay.investorRow}>
                            <Image
                            unoptimized
                            src={
                            "https://s2.googleusercontent.com/s2/favicons?domain_url=" +
                            "f2-ventures.com/" +
                            "&sz=64"
                            }
                            height={12}
                            width={12}
                            alt="url favicon"
                            />
                                <p className = {overlay.description}>
                                F2 Ventures
                                </p>
                            </div>
                        </div>

                        <div className = {overlay.contentWrapper}>
                            <h4 className = {overlay.subheader}>Stage:</h4>
                            <p className = {overlay.description}>
                           Series A
                            </p>
                        </div>


                    </div>

                    <div className = {overlay.contentWrapper}>
                        <h4 className = {overlay.subheader}>Founders:</h4>
                        <div className = {overlay.row}>
                            <p className = {overlay.description}>
                            <a href = {founderLinkedin} className = {overlay.founderLink}>
                            {founder.map((e, i) => (
                            <a key={i} href={e.href}>
                                {e.plain_text}
                            </a>
                                ))}
                                <span className = {overlay.linkArrow + " " + overlay.founderArrow}> ↗ </span>
                                </a>
                            </p>
                        </div>
                    </div>
                    
                    <div className = {overlay.contentWrapper}>
                        <h4 className = {overlay.subheader}>Reach Out:</h4>
                        <a
                            className={util.primaryButton + " " + util.primaryButtonContainer}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer" >     
                        <span className = {overlay.requestText}>Request An Intro</span>
                        <span className={overlay.externalIcon}>↗</span>
                        </a>
                       
                    </div>
                </div>
                </div>
            </DialogContent>
    </DialogPortal>
    </DialogRoot>
    </div>
  );
}
