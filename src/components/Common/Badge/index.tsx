import { ReactNode } from "react";
import styles from "./style.module.scss";

type BadgeVariant = "brand" | "accent";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  variant?: BadgeVariant;
}

export default function Badge({ children, className = "", icon, variant = "brand" }: BadgeProps) {
  const classNames = className.split(/\s+/).filter(Boolean);
  const noStars = classNames.includes("nostars") || classNames.includes("nostarts");
  const badgeClassName = classNames.filter((name) => name !== "nostars" && name !== "nostarts").join(" ");

  return (
    <div className={`h-list ${styles.badgeStars}${noStars ? " nostars" : ""}`} data-gap="10">
      <svg width="30" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="3" fill="currentColor" className="brand-color-primary"/>
        <rect y="6" width="30" height="3" fill="currentColor" className="brand-color-secondary"/>
      </svg>
      <span className={`${styles.badge} ${styles[variant]} ${badgeClassName}`.trim()}>
        {icon ? <span className={styles.icon}>{icon}</span> : null}
        <span className={styles.text}>{children}</span>
      </span>
      <svg width="30" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="3" fill="currentColor" className="brand-color-primary"/>
        <rect y="6" width="30" height="3" fill="currentColor" className="brand-color-secondary"/>
      </svg>
    </div>
  );
}
