import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./stickyTab.module.css";

const StickyTab = ({ activeTab }) => {
  console.log(activeTab);
  return (
    <nav>
      <div className={styles.tabBar} style={{ marginBottom: "4px" }}>
        <p className={styles.sectionTitle}>Product</p>
        <div className={styles.items}>
          <Link href="#net-worth">
            <a className={activeTab == "net-worth" ? styles.active : ""}>
              Net Worth
            </a>
          </Link>
          <Link href="#add-assets">
            <a className={activeTab == "add-assets" ? styles.active : ""}>
              Adding Assets
            </a>
          </Link>
          <Link href="#crypto">
            <a className={activeTab == "crypto" ? styles.active : ""}>Crypto</a>
          </Link>
          <Link href="#onboarding">
            <a className={activeTab == "onboarding" ? styles.active : ""}>
              Onboarding
            </a>
          </Link>
          <Link href="#roadmap">
            <a className={activeTab == "roadmap" ? styles.active : ""}>
              Roadmap
            </a>
          </Link>
          <Link href="#investment-account-opening">
            <a
              className={
                activeTab == "investment-account-opening" ? styles.active : ""
              }
            >
              Account Opening
            </a>
          </Link>
          <Link href="#investment-proposal">
            <a
              className={
                activeTab == "investment-proposal" ? styles.active : ""
              }
            >
              Investment Proposal
            </a>
          </Link>
          <Link href="#investment-management">
            <a
              className={
                activeTab == "investment-management" ? styles.active : ""
              }
            >
              Investment Management
            </a>
          </Link>
          <Link href="#advisor">
            <a className={activeTab == "advisor" ? styles.active : ""}>
              Advisor Dashboard
            </a>
          </Link>

          <Link href="#toast-notification">
            <a
              className={activeTab == "toast-notification" ? styles.active : ""}
            >
              Toast
            </a>
          </Link>
          <Link href="#secondary-marketplace">
            <a
              className={
                activeTab == "secondary-marketplace" ? styles.active : ""
              }
            >
              Secondary Marketplace
            </a>
          </Link>
          <Link href="#alternative-investments">
            <a
              className={
                activeTab == "alternative-investments" ? styles.active : ""
              }
            >
              Alternatives
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.tabBar}>
        <p className={styles.sectionTitle}>Brand</p>
        <div className={styles.items}>
          <Link href="#landing-page">
            <a className={activeTab == "landing-page" ? styles.active : ""}>
              Landing Page
            </a>
          </Link>
          <Link href="#compound-manual">
            <a className={activeTab == "compound-manual" ? styles.active : ""}>
              Compound Manual
            </a>
          </Link>
          <Link href="#compound-archive">
            <a className={activeTab == "compound-archive" ? styles.active : ""}>
              Compound Archive
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default StickyTab;
