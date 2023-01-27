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

import styles from "./overlay.module.css";
import Image from "next/image";
import util from "../styles/util.module.css";
  
export default function Overlay({title, url, description, tags, content}) {
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

return (
        <div>
            <DialogRoot>
            <DialogTrigger asChild>
            <div className = {styles.container}>
                <div className = {styles.stack}>
                <div className = {styles.companyHeader}>
                    <div className={styles.icon}>
                        <Image unoptimized onError="this.src='/feature/link.svg'"src={ "https://s2.googleusercontent.com/s2/favicons?domain_url=" + url +"&sz=64" } height={20} width={20} alt="url favicon" />
                    </div>
                    <h3 className={styles.tileTitle}>{title}</h3>
                    </div>
                    <Tags />
                </div>
            </div>
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay className={styles.overlay} />
                <DialogContent className={styles.content} onOpenAutoFocus={(event) => event.preventDefault()}>
                <div className = {styles.verticalContainer}>
                    <div className = {styles.row}>
                    <a href = {url} className = {styles.overlayTitleLink} ><DialogTitle className={styles.title}>{title} <span className = {styles.linkArrow}>↗</span></DialogTitle></a>
                    <Image
                            unoptimized
                            src={
                            "https://s2.googleusercontent.com/s2/favicons?domain_url=" +
                            url +
                            "&sz=64"
                            }
                            height={32}
                            width={32}
                            alt="url favicon"
                        ></Image>
                    </div>
                <div className = {styles.stack}>
                    <div className = {styles.contentWrapper}>
                        <h4 className = {styles.subheader}>Industry:</h4>
                        <Tags />
                    </div>
                    <div className = {styles.contentWrapper}>
                        <h4 className = {styles.subheader}>About:</h4>
                        <p className = {styles.description}>
                        The only way to manage and monitor your Web3 Finance. Enable financial workflows such as reconciliation, balance calculation, audit and reporting for Web3 assets from on-ramp to off-ramp
                        </p>
                    </div>
                    <div className = {styles.row + " " + styles.subrow}>
                        <div className = {styles.contentWrapper}>
                            <h4 className = {styles.subheader}>Latest Fundraising Round:</h4>
                            <p className = {styles.description}>
                            $20m at a $100m valuation.
                            </p>
                        </div>
                        <div className = {styles.contentWrapper}>
                            <h4 className = {styles.subheader}>Lead Investor:</h4>
                            <div className = {styles.row + " " + styles.investorRow}>
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
                                <p className = {styles.description}>
                                F2 Ventures
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className = {styles.contentWrapper}>
                        <h4 className = {styles.subheader}>Founders:</h4>
                        <div className = {styles.row}>
                            <p className = {styles.description}>
                            <a href = "https://linkedin.com/in/talzackon" className = {styles.founderLink}>Tal Zackon<span className = {styles.linkArrow + " " + styles.founderArrow}> ↗ </span></a> <a className = {styles.founderLink}>Elion Tomer <span className = {styles.linkArrow + " " + styles.founderArrow}> ↗</span></a>
                            </p>
                        </div>
                    </div>
                    
                    <div className = {styles.contentWrapper}>
                        <h4 className = {styles.subheader}>Reach Out:</h4>
                        <button className = {styles.contact}>Request An Intro</button>
                    </div>
                    
                    

                </div>
                </div>
    
                </DialogContent>
            </DialogPortal>
            </DialogRoot>
        </div>
)
}