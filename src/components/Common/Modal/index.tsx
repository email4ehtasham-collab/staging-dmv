"use client";

import { ReactNode, useId } from "react";
import { Modal } from "react-bootstrap";
import styles from "./style.module.scss";

type ModalSize = "sm" | "lg" | "xl";
type ModalFullscreen = true | "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down";

interface CommonModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode;
  size?: ModalSize;
  fullscreen?: ModalFullscreen;
  centered?: boolean;
  dark?: boolean;
  className?: string;
  contentClassName?: string;
  bodyClassName?: string;
  dialogClassName?: string;
  showClose?: boolean;
  closeLabel?: string;
  ariaLabel?: string;
}

export default function CommonModal({
  open,
  onClose,
  children,
  title,
  size,
  fullscreen,
  centered = true,
  dark = false,
  className,
  contentClassName = "",
  bodyClassName = "",
  dialogClassName,
  showClose = true,
  closeLabel = "Close modal",
  ariaLabel,
}: CommonModalProps) {
  const titleId = useId();

  return (
    <Modal
      show={open}
      onHide={onClose}
      size={size}
      fullscreen={fullscreen}
      centered={centered}
      className={className}
      dialogClassName={dialogClassName}
      contentClassName={`${styles.content} ${dark ? styles.dark : ""} ${contentClassName}`.trim()}
      backdropClassName={styles.backdrop}
      aria-labelledby={title ? titleId : undefined}
      aria-label={title ? undefined : ariaLabel}
    >
      {showClose ? (
        <button
          type="button"
          className={`${styles.close} ${dark ? styles.closeDark : ""}`}
          onClick={onClose}
          aria-label={closeLabel}
        >
          &times;
        </button>
      ) : null}

      <Modal.Body className={`${styles.body} ${bodyClassName}`.trim()}>
        {title ? (
          <Modal.Title id={titleId} className={styles.title}>
            {title}
          </Modal.Title>
        ) : null}
        {children}
      </Modal.Body>
    </Modal>
  );
}
