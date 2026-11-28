"use client";

import { useCallback, useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import {
  AREA_LINKS,
  HEADER_CTA,
  HEADER_PHONE,
  MAIN_LINKS,
  SERVICE_GROUPS,
  SERVICES_PAGE,
  VIEW_ALL_SERVICES,
} from "@/config/navigation";
import styles from "./main-header.module.scss";

type MenuKey = "services" | "areas";

// Desktop layout (dropdowns open on hover) from this width; below it the hamburger menu is used.
const DESKTOP_QUERY = "(min-width: 1366px)";

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

function ChevronIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false" className={styles.chevron}>
      <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" className={styles.phoneIcon}>
      <path
        d="M5 2.6 6.7 4.2c.2.2.3.5.2.8l-.5 1.4c.8 1.3 1.9 2.4 3.2 3.2L11 9.1c.3-.1.6 0 .8.2l1.6 1.7c.2.2.2.6 0 .8l-1.1 1.1c-.5.5-1.2.7-1.9.6C6.6 13 3 9.4 2.6 5.6c-.1-.7.1-1.4.6-1.9l1.1-1.1c.2-.2.6-.2.8 0Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const normalize = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path);

export default function MainHeader() {
  const pathname = normalize(usePathname() || "/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Partial<Record<MenuKey, HTMLButtonElement | null>>>({});

  const isCurrent = (href: string) => pathname === href;
  const servicesActive = pathname === SERVICES_PAGE.href || pathname.startsWith("/service/");
  const areasActive = AREA_LINKS.some((link) => pathname === link.href || pathname.startsWith(`${link.href}/`));

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setMenuOpen(false);
  }, []);

  // Close menus after navigation.
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Outside click and Escape close the open dropdown.
  useEffect(() => {
    const onPointer = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, []);

  const isDesktop = () => typeof window !== "undefined" && window.matchMedia(DESKTOP_QUERY).matches;
  const toggle = (key: MenuKey) => setOpenMenu((current) => (current === key ? null : key));
  const hoverOpen = (key: MenuKey) => {
    if (isDesktop()) setOpenMenu(key);
  };
  const hoverClose = (key: MenuKey) => {
    if (isDesktop()) setOpenMenu((current) => (current === key ? null : current));
  };

  const onItemKeyDown = (key: MenuKey) => (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === "Escape" && openMenu === key) {
      event.stopPropagation();
      setOpenMenu(null);
      triggerRefs.current[key]?.focus();
    }
  };
  const onItemBlur = (key: MenuKey) => (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpenMenu((current) => (current === key ? null : current));
    }
  };

  const itemClass = (key: MenuKey, active: boolean) =>
    [styles.item, styles.hasMenu, openMenu === key ? styles.itemOpen : "", active ? styles.itemActive : ""].join(" ");

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="DMV General Contracting Group home">
          <Image src="/images/logo.webp" alt="DMV General Contracting Group" width={200} height={60} priority className={styles.logoImage} />
        </Link>

        <nav
          ref={navRef}
          id="main-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Main"
        >
          <ul className={styles.menu}>
            <li
              className={itemClass("services", servicesActive)}
              onMouseEnter={() => hoverOpen("services")}
              onMouseLeave={() => hoverClose("services")}
              onKeyDown={onItemKeyDown("services")}
              onBlur={onItemBlur("services")}
            >
              <div className={styles.trigger}>
                <Link
                  href={SERVICES_PAGE.href}
                  className={styles.link}
                  aria-current={isCurrent(SERVICES_PAGE.href) ? "page" : undefined}
                  onClick={closeAll}
                >
                  {SERVICES_PAGE.label}
                </Link>
                <button
                  type="button"
                  ref={(el) => {
                    triggerRefs.current.services = el;
                  }}
                  className={styles.chevronButton}
                  aria-label="Show the Services menu"
                  aria-expanded={openMenu === "services"}
                  aria-controls="nav-menu-services"
                  onClick={() => toggle("services")}
                >
                  <ChevronIcon />
                </button>
              </div>

              <div id="nav-menu-services" className={`${styles.dropdown} ${styles.mega}`}>
                <div className={styles.megaGrid}>
                  {SERVICE_GROUPS.map((group) => (
                    <div key={group.title} className={styles.group}>
                      <p className={styles.groupTitle}>{group.title}</p>
                      <ul className={styles.subList}>
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className={styles.subLink}
                              aria-current={isCurrent(link.href) ? "page" : undefined}
                              onClick={closeAll}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link href={VIEW_ALL_SERVICES.href} className={styles.viewAll} onClick={closeAll}>
                  {VIEW_ALL_SERVICES.label} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </li>

            <li
              className={itemClass("areas", areasActive)}
              onMouseEnter={() => hoverOpen("areas")}
              onMouseLeave={() => hoverClose("areas")}
              onKeyDown={onItemKeyDown("areas")}
              onBlur={onItemBlur("areas")}
            >
              <button
                type="button"
                ref={(el) => {
                  triggerRefs.current.areas = el;
                }}
                className={`${styles.link} ${styles.linkButton}`}
                aria-expanded={openMenu === "areas"}
                aria-controls="nav-menu-areas"
                onClick={() => toggle("areas")}
              >
                Areas
                <ChevronIcon />
              </button>

              <div id="nav-menu-areas" className={`${styles.dropdown} ${styles.areas}`}>
                <ul className={styles.subList}>
                  {AREA_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={styles.subLink}
                        aria-current={isCurrent(link.href) ? "page" : undefined}
                        onClick={closeAll}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {MAIN_LINKS.map((link) => (
              <li key={link.href} className={`${styles.item} ${isCurrent(link.href) ? styles.itemActive : ""}`}>
                <Link
                  href={link.href}
                  className={styles.link}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  onClick={closeAll}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.mobileActions}>
            <a href={HEADER_PHONE.href} className={styles.phone}>
              <PhoneIcon />
              {HEADER_PHONE.label}
            </a>
            <Button href={HEADER_CTA.href} data-estimate-trigger icon={<EstimateIcon />} iconPosition="left">
              {HEADER_CTA.label}
            </Button>
          </div>
        </nav>

        <div className={styles.actions}>
          <a href={HEADER_PHONE.href} className={`${styles.phone} ${styles.desktopPhone}`}>
            <PhoneIcon />
            {HEADER_PHONE.label}
          </a>
          <Button href={HEADER_CTA.href} data-estimate-trigger icon={<EstimateIcon />} iconPosition="left">
            {HEADER_CTA.label}
          </Button>
          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </Container>
    </header>
  );
}
