
// This is the tile that will be displayed on the home page for the founder request section
import styles from "./founderRequestTile.module.css";
import util from "../../../styles/util.module.css";
import Image from "next/image";
import {
    Root as DialogRoot,
    Trigger as DialogTrigger,
    Portal as DialogPortal,
    Overlay as DialogOverlay,
    Content as DialogContent,
    Title as DialogTitle,
    Close as DialogClose,
    Dialog,
    DialogDescription
  } from "@radix-ui/react-dialog";

import { useSession } from "next-auth/react";

import * as Label from '@radix-ui/react-label';

export default function FounderRequestTile( {portfolioList, title, logo}) {

    const { data: session } = useSession();
   
    function getCompanyNameFromEmail(email) {
        let companyName = email.split("@")[1].split(".")[0];
        companyName = companyName[0].toUpperCase() + companyName.slice(1);
        return companyName;
      }
    
      let email; 
      let matchedEmail;
      
      function getMatchedEmail(email, portfolioList) {
        const companyName = getCompanyNameFromEmail(email);
        let matchedEmail = null;
        portfolioList.map(value => {
          if (value.properties.Company.title[0].plain_text.toUpperCase() === companyName.toUpperCase()) {
            matchedEmail = companyName;
          }
        }).find(e => e) || 'no email found';
    
        return matchedEmail;
      }
      
      if ( session ) {
        email = session.user.email;
        const companyName = getCompanyNameFromEmail(email);
       
        matchedEmail = getMatchedEmail(email, portfolioList);
      } else {
        email = null;
      };
      



    return (
        <div>
            <DialogRoot>
                <DialogTrigger asChild>
                <div className = {styles.homeFounderDiv}>
                    <div className={styles.logoIcon}>
                        <Image
                            className = {"iconInvert"}
                            src={"/feather/" + logo + ".svg"}
                            height={66}
                            width={66}
                            alt="request"
                        />
                    </div>
                        <p>{title}</p>
                </div>
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay className={styles.overlay} />
                <DialogContent className = {styles.content}>
                    {title === "Reach out to us" ? (
                        <div>
                            <DialogTitle className = {styles.dialogTitle}>Make A Request</DialogTitle>
                            <form>
                                <div className = {styles.fieldContainer}>
                                    <Label.Root className={styles.LabelRoot} htmlFor="firstName">
                                        Your Name
                                    </Label.Root>
                                    <input className={styles.Input} type="text" id="firstName" placeholder="Nikil Viswanathan" />
                                </div>
        
                                <div className = {styles.fieldContainer}>
                                    <Label.Root className={styles.LabelRoot} htmlFor="company">
                                        Your Company
                                    </Label.Root>
                                    <select className={styles.Select} id="company-select">
                                        {portfolioList.map((link, index) => (
                                            <option key={index} value={link.properties.Company.title[0].plain_text}>
                                            {link.properties.Company.title[0].plain_text}
                                            </option>
                                        ))}
                                        </select>
                                </div>
        
                                <div className = {styles.fieldContainer}>
                                    <Label.Root className={styles.LabelRoot} htmlFor="request">
                                        Your Request
                                    </Label.Root>
                                    <textarea className = {styles.textArea} type id = "request" placeholder = "I want..."></textarea>
                            
                                </div>
        
                                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-start' }}>
                                    <DialogClose asChild>
                                        <a className={util.primaryButton + " " + util.primaryButtonContainer}>Submit Request</a>
                                    </DialogClose>
                                </div>
                            </form>
                        </div>
                    ) : 
                    title === "Request an intro" ? (
                        <div>
                        <DialogTitle className = {styles.dialogTitle}>Request an intro</DialogTitle>
                        <form>
                            <div className = {styles.fieldContainer}>
                                <Label.Root className={styles.LabelRoot} htmlFor="firstName">
                                    Your Name
                                </Label.Root>
                                <input className={styles.Input} type="text" id="firstName" placeholder="Nikil Viswanathan" />
                            </div>

                            <div className = {styles.fieldContainer}>
                                <Label.Root className={styles.LabelRoot} htmlFor="company">
                                    Your Company
                                </Label.Root>
                                <select className={styles.Select} id="company-select">
                                    {portfolioList.map((link, index) => (
                                        <option key={index} value={link.properties.Company.title[0].plain_text}>
                                        {link.properties.Company.title[0].plain_text}
                                        </option>
                                    ))}
                                    </select>

                            </div>

                            <div className = {styles.fieldContainer}>
                                <Label.Root className={styles.LabelRoot} htmlFor="theirName">
                                    Their Name
                                </Label.Root>
                                <input className={styles.Input} type="text" id="theirName" placeholder="Vitalik Buterin" />
                            </div>


                            <div className = {styles.fieldContainer}>
                                <Label.Root className={styles.LabelRoot} htmlFor="theirCompany">
                                    Their Company
                                </Label.Root>
                                <input className={styles.Input} type="text" id="theirCompany" placeholder="Ethereum Foundation" />
                            </div>


                            <div className = {styles.fieldContainer}>
                                <Label.Root className={styles.LabelRoot} htmlFor="request">
                                    Reason For Requesting Introduction
                                </Label.Root>
                                <textarea className = {styles.textArea} type id = "request" placeholder = "I want to get them to use my product!"></textarea>

                            </div>

                            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-start' }}>
                                <DialogClose asChild>
                                    <a className={util.primaryButton + " " + util.primaryButtonContainer}>Submit Request</a>
                                </DialogClose>
                            </div>
                        </form>
                        </div>

                    ) :
                    title === "Book office space" ? (
                        <div>
                        <DialogTitle className = {styles.dialogTitle}>Request an intro</DialogTitle>
                        <form>
                            <div className = {styles.fieldContainer}>
                                <Label.Root className={styles.LabelRoot} htmlFor="firstName">
                                    Your Name
                                </Label.Root>
                                <input className={styles.Input} type="text" id="firstName" placeholder="Nikil Viswanathan" />
                            </div>
    
                            <div className = {styles.fieldContainer}>
                                <Label.Root className={styles.LabelRoot} htmlFor="company">
                                    Your Company
                                </Label.Root>
                                <select className = {styles.Select} id="company-select">
                            {
                                matchedEmail === 'no email found' || matchedEmail === null ?
                                    portfolioList.map((link, index ) => (
                                    <option key = {index} value={link.properties.Company.title[0].plain_text}>
                                        {link.properties.Company.title[0].plain_text}
                                    </option>
                                    ))
                                    : (
                                    <option value = {matchedEmail}>
                                        {matchedEmail}
                                    </option>
                                 
                                        )
                                }


                                
                                </select>
    
                            </div>
    
                            <div className = {styles.fieldContainer}>
                                <Label.Root className={styles.LabelRoot} htmlFor="request">
                                    Your Request
                                </Label.Root>
                                <textarea className = {styles.textArea} type id = "request" placeholder = "I want"></textarea>
                        
                            </div>
    
                            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-start' }}>
                                <DialogClose asChild>
                                    <a className={util.primaryButton + " " + util.primaryButtonContainer}>Submit Request</a>
                                </DialogClose>
                            </div>
                        </form>
                </div>
                    ) : null }
                </DialogContent>
            </DialogPortal>
            </DialogRoot>
        </div>
    )
}
