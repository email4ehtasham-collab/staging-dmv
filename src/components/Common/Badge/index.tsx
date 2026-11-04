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
    <div className={`h-list ${styles.badgeStars}${noStars ? " nostars" : ""}`} data-gap="5">
      <svg width="38" height="18" viewBox="0 0 38 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.9948 17.264L24.0848 10.818L18.5848 6.814H25.3828L27.4728 0.345999L29.5848 6.814H36.3828L30.8828 10.818L32.9948 17.264L27.4728 13.282L21.9948 17.264Z" fill="#C63940"/>
        <path d="M3.99571 16.216L5.70571 10.942L1.20571 7.666H6.76771L8.47771 2.374L10.2057 7.666H15.7677L11.2677 10.942L12.9957 16.216L8.47771 12.958L3.99571 16.216Z" fill="#C63940"/>
      </svg>
      <span className={`${styles.badge} ${styles[variant]} ${badgeClassName}`.trim()}>
        {icon ? <span className={styles.icon}>{icon}</span> : null}
        <span className={styles.text}>{children}</span>
      </span>
      <svg width="38" height="18" viewBox="0 0 38 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.99476 17.264L7.08476 10.818L1.58476 6.814H8.38276L10.4728 0.345999L12.5848 6.814H19.3828L13.8828 10.818L15.9948 17.264L10.4728 13.282L4.99476 17.264Z" fill="#C63940"/>
        <path d="M24.9957 16.216L26.7057 10.942L22.2057 7.666H27.7677L29.4777 2.374L31.2057 7.666H36.7677L32.2677 10.942L33.9957 16.216L29.4777 12.958L24.9957 16.216Z" fill="#C63940"/>
      </svg>
    </div>
  );
}
