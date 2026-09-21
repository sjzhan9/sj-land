import styles from ".//investmentTile.module.css";
import util from "../../styles/util.module.css";

export default function InvestmentTile({
  icon,
  title,
  content,
  url,
  logoUrl,
  allocation,
  averageCost,
  unrealizedReturn,
  showMetrics = false,
}) {
  const allocationPercent =
    allocation == null ? null : Math.max(0, Math.min(allocation * 100, 100));

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src={logoUrl || "/investments/" + icon + ".png"}
            height={32}
            width={32}
            alt="investment icon"
          />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.stack}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.companyLink}
          >
            <h3 className={util.tileTitle + " " + styles.inline}>{title}</h3>
            <span className={styles.externalIcon}>↗</span>
          </a>
          <p className={util.tileContent}>{content}</p>
        </div>
        {showMetrics ? (
          <div className={styles.metrics}>
            <div className={styles.allocation}>
              <span className={styles.metricValue}>
                {formatPercent(allocation)}
              </span>
              <span className={styles.allocationTrack} aria-hidden="true">
                <span
                  className={styles.allocationFill}
                  style={{ width: `${allocationPercent ?? 0}%` }}
                />
              </span>
            </div>
            <span className={styles.metricValue}>
              {formatCurrency(averageCost)}
            </span>
            <span className={returnClass(unrealizedReturn, styles)}>
              {formatPercent(unrealizedReturn, true)}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function formatCurrency(value) {
  if (value == null) return "—";

  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value < 100 ? 2 : 0,
    maximumFractionDigits: value < 100 ? 2 : 0,
  });
}

function formatPercent(value, signed = false) {
  if (value == null) return "—";

  const percent = value * 100;
  const prefix = signed && percent > 0 ? "+" : "";
  return `${prefix}${percent.toLocaleString("en-US", {
    maximumFractionDigits: 1,
  })}%`;
}

function returnClass(value, styles) {
  if (value == null || value === 0) return styles.metricValue;
  return `${styles.metricValue} ${value > 0 ? styles.positive : styles.negative}`;
}
