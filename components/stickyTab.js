// StickyTab.js
import React from "react";
import Link from "next/link";
import styles from "./stickyTab.module.css";

const StickyTab = ({ activeTab, sections, includeBrandSection }) => {
  const renderSectionLinks = (sectionType) => {
    return sections
      .filter((section) => section.section == sectionType)
      .map((section) => (
        <Link key={section.id} href={`#${section.id}`}>
          <a className={activeTab === section.id ? styles.active : ""}>
            {section.title}
          </a>
        </Link>
      ));
  };

  return (
    <nav>
      <div className={styles.tabBar} style={{ marginBottom: "4px" }}>
        {includeBrandSection && <p className={styles.sectionTitle}>Product</p>}
        <div className={styles.items}>{renderSectionLinks("product")}</div>
      </div>
      {includeBrandSection && (
        <div className={styles.tabBar}>
          <p className={styles.sectionTitle}>Brand</p>
          <div className={styles.items}>{renderSectionLinks("brand")}</div>
        </div>
      )}
    </nav>
  );
};

export default StickyTab;
