import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import styles from "./style.module.scss";

type ButtonVariant = "primary" | "secondary";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  "data-estimate-trigger"?: boolean;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    className = "",
    children,
    icon,
    iconPosition = "right",
    "data-estimate-trigger": estimateTrigger,
  } = props;

  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();
  const content = (
    <>
      {icon && iconPosition === "left" ? <span className={styles.iconLeft}>{icon}</span> : null}
      <span className={styles.label}>{children}</span>
      {icon && iconPosition === "right" ? <span className={styles.iconRight}>{icon}</span> : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props as ButtonAsLink;
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        data-estimate-trigger={estimateTrigger ? "" : undefined}
      >
        {content}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button
      {...rest}
      type={type}
      className={classes}
      data-estimate-trigger={estimateTrigger ? "" : undefined}
    >
      {content}
    </button>
  );
}
