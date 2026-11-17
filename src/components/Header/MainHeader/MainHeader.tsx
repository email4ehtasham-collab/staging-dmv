"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import styles from "./main-header.module.scss";

const navItems: { label: string; href: string; active?: boolean }[] = [
  { label: "Services", href: "/services"},
  // { label: "Home", href: "/", active: true },
  { label: "Process", href: "#process" },
  { label: "Permits", href: "#permits" },
  { label: "Pricing", href: "#cost" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Areas", href: "#areas" },
  { label: "Testimonials", href: "/testimonials" },
];

function EstimateIcon() {
  return (
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.9375 0C11.6211 0 12.25 0.628906 12.25 1.3125V12.6875C12.25 13.3984 11.6211 14 10.9375 14H1.3125C0.601562 14 0 13.3984 0 12.6875V1.3125C0 0.628906 0.601562 0 1.3125 0H10.9375ZM3.5 11.9219V10.8555C3.5 10.6914 3.30859 10.5 3.14453 10.5H2.07812C1.91406 10.5 1.75 10.6914 1.75 10.8555V11.9219C1.75 12.0859 1.91406 12.25 2.07812 12.25H3.14453C3.30859 12.25 3.5 12.0859 3.5 11.9219ZM3.5 8.42188V7.35547C3.5 7.19141 3.30859 7 3.14453 7H2.07812C1.91406 7 1.75 7.19141 1.75 7.35547V8.42188C1.75 8.58594 1.91406 8.75 2.07812 8.75H3.14453C3.30859 8.75 3.5 8.58594 3.5 8.42188ZM7 11.9219V10.8555C7 10.6914 6.80859 10.5 6.64453 10.5H5.57812C5.41406 10.5 5.25 10.6914 5.25 10.8555V11.9219C5.25 12.0859 5.41406 12.25 5.57812 12.25H6.64453C6.80859 12.25 7 12.0859 7 11.9219ZM7 8.42188V7.35547C7 7.19141 6.80859 7 6.64453 7H5.57812C5.41406 7 5.25 7.19141 5.25 7.35547V8.42188C5.25 8.58594 5.41406 8.75 5.57812 8.75H6.64453C6.80859 8.75 7 8.58594 7 8.42188ZM10.5 11.9219V7.35547C10.5 7.19141 10.3086 7 10.1445 7H9.07812C8.91406 7 8.75 7.19141 8.75 7.35547V11.9219C8.75 12.0859 8.91406 12.25 9.07812 12.25H10.1445C10.3086 12.25 10.5 12.0859 10.5 11.9219ZM10.5 4.92188V2.10547C10.5 1.94141 10.3086 1.75 10.1445 1.75H2.07812C1.91406 1.75 1.75 1.94141 1.75 2.10547V4.92188C1.75 5.08594 1.91406 5.25 2.07812 5.25H10.1445C10.3086 5.25 10.5 5.08594 10.5 4.92188Z" fill="white"/>
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className={styles.menuIcon}>
      {open ? (
        <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      )}
    </svg>
  );
}

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="DMV General Contracting Group home">
          <Image src="/images/logo.png" alt="DMV General Contracting Group" width={200} height={60} priority className={styles.logoImage} />
        </Link>

        <nav id="preview-primary-nav" className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.link} ${item.active ? styles.linkActive : ""}`}
              aria-current={item.active ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href="/contact-us" data-estimate-trigger icon={<EstimateIcon />} iconPosition="left">
            Get Free Estimate
          </Button>
          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="preview-primary-nav"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </Container>
    </header>
  );
}
