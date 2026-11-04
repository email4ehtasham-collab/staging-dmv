"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useMyContext } from "@/hooks/context";
import dynamic from "next/dynamic";

import Link from "next/link";
import Image from "next/image";
import { headerMenu } from "@/data/headerMenu";

import HeadPhoneIcon from "/public/images/headphone-icon.svg";
import ChatIcon from "/public/images/chat-icon.svg";
import Humberger from '@/assets/humberger-icon.svg';
import CloseIcon from '@/assets/close-icon.svg';
import GoogleCalendarButton from "../../GoogleCalendarButton/GoogleCalendarButton";
import Container from "@/components/Common/Container";
import Button from "@/components/Common/Button";
import styles from "../style.module.scss";

const SupportChatPopup = dynamic(() => import("@/components/chat/SupportChatPopup"), { ssr: false });

export default function HeaderOldDesign() {
    const [headerClassName, setHeaderClassName] = useState("");
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [isChatModuleActive, setIsChatModuleActive] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const [activeSubAccordion, setActiveSubAccordion] = useState<string | null>(null);

    const { activeMenuItem } = useMyContext();

    useEffect(() => {
        const onScroll = () => {
            if (window.pageYOffset >= 100) {
                setHeaderClassName(styles["active_menu"]);
            } else {
                setHeaderClassName("");
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const pathname = usePathname();

    const mobileMenu = () => {
        setMobileMenuActive((prev) => !prev);
        setActiveAccordion(null);
        setActiveSubAccordion(null);
    };

    const handleNavClick = () => {
        setMobileMenuActive(false);
        setActiveAccordion(null);
        setActiveSubAccordion(null);
    };

    const toggleAccordion = (e: React.MouseEvent, label: string) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            setActiveAccordion(activeAccordion === label ? null : label);
        }
    };

    const toggleSubAccordion = (e: React.MouseEvent, label: string) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            setActiveSubAccordion(activeSubAccordion === label ? null : label);
        }
    };

    const chatModulePopupOpen = () => {
        setIsChatModuleActive((prev) => !prev);
    };

    const closeChatModule = () => {
        setIsChatModuleActive(false);
    };

    const alignDropdown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const parent = e.currentTarget;
        const menu = parent.querySelector<HTMLElement>(`.${styles["dropdown-menu"]}`);
        if (!menu) return;

        const parentRect = parent.getBoundingClientRect();
        const isMega = menu.classList.contains(styles["mega-menu"]);
        const estimatedWidth = isMega ? 700 : 240;
        const spaceOnRight = window.innerWidth - parentRect.left;

        if (spaceOnRight < estimatedWidth) {
            menu.style.left = "auto";
            menu.style.right = "0";
        } else {
            menu.style.left = "";
            menu.style.right = "";
        }
    }, []);

    const resetDropdownAlign = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const menu = e.currentTarget.querySelector<HTMLElement>(`.${styles["dropdown-menu"]}`);
        if (!menu) return;
        menu.style.left = "";
        menu.style.right = "";
    }, []);

    const alignSubmenu = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
        const li = e.currentTarget;
        const sub = li.querySelector<HTMLElement>(`.${styles["submenu"]}`);
        if (!sub) return;

        sub.style.left = "";
        sub.style.right = "";

        requestAnimationFrame(() => {
            const subRect = sub.getBoundingClientRect();
            if (subRect.right > window.innerWidth) {
                sub.style.left = "auto";
                sub.style.right = "95%";
            }
        });
    }, []);

    const resetSubmenuAlign = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
        const sub = e.currentTarget.querySelector<HTMLElement>(`.${styles["submenu"]}`);
        if (!sub) return;
        sub.style.left = "";
        sub.style.right = "";
    }, []);

    if (pathname === "/dashboard_login" || pathname === "/s_dashboard") {
        return null;
    }

    return (
        <header className={`${styles["header-main"]} ${headerClassName}`}>
            <Container className={`h-list justify-content-between ${styles["header-inner"]}`}>
            <Link href="/" className={styles["logo-holder"]}>
                <Image
                    src="/images/logo.png"
                    alt="dmv gc logo"
                    width={200}
                    height={60}
                    priority
                    style={{ objectFit: 'contain' }}
                />
            </Link>

            <nav className={`h-list ${styles["main-nav"]} ${mobileMenuActive ? styles["active"] : ""}`} data-gap="20">

                {headerMenu.map((item, index) => (
                    <div
                        key={index}
                        className={`${item.dropdown ? styles["dropdown"] + " " + styles["show-on-hover"] : ""} ${activeAccordion === item.label ? styles["accordion-active"] : ""}`}
                        onMouseEnter={item.dropdown ? alignDropdown : undefined}
                        onMouseLeave={item.dropdown ? resetDropdownAlign : undefined}
                    >
                        <div className={styles["nav-link-wrapper"]}>
                            <Link
                                href={item.href}
                                onClick={handleNavClick}
                                className={activeMenuItem === item.activeKey ? styles["active"] : ""}
                            >
                                {item.label}
                            </Link>
                            {item.hasArrow && (
                                <span
                                    className={`${styles["nav-arrow"]} ${activeAccordion === item.label ? styles["rotated"] : ""}`}
                                    onClick={(e) => toggleAccordion(e, item.label)}
                                >
                                    â–¼
                                </span>
                            )}
                        </div>

                        {item.dropdown && (
                            <ul className={`${styles["dropdown-menu"]} ${item.isMegaMenu ? styles["mega-menu"] : ""} ${activeAccordion === item.label ? styles["show-mobile"] : ""}`}>
                                {item.dropdown.map((dropItem, dropIndex) => (
                                    <li
                                        key={dropIndex}
                                        className={`${dropItem.submenu ? styles["has-submenu"] : ""} ${activeSubAccordion === dropItem.label ? styles["sub-accordion-active"] : ""}`}
                                        onMouseEnter={dropItem.submenu ? alignSubmenu : undefined}
                                        onMouseLeave={dropItem.submenu ? resetSubmenuAlign : undefined}
                                    >
                                        <div className={styles["dropdown-item-wrapper"]}>
                                            <Link
                                                href={dropItem.href}
                                                onClick={handleNavClick}
                                                className={styles["dropdown-item"]}
                                            >
                                                <span className={styles["item-label"]}>{dropItem.label}</span>
                                            </Link>
                                            {dropItem.submenu && (
                                                <span
                                                    className={`${styles["arrow-right"]} ${activeSubAccordion === dropItem.label ? styles["rotated"] : ""}`}
                                                    onClick={(e) => toggleSubAccordion(e, dropItem.label)}
                                                >
                                                    â†’
                                                </span>
                                            )}
                                        </div>

                                        {dropItem.submenu && (
                                            <ul className={`${styles["submenu"]} ${activeSubAccordion === dropItem.label ? styles["show-mobile"] : ""}`}>
                                                {dropItem.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            href={subItem.href}
                                                            onClick={handleNavClick}
                                                            className={styles["dropdown-item"]}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}

            </nav>
            <div className="d-flex align-items-center gap-1 gap-lg-1">
                <Button href="/contact-us" variant="primary" icon={<HeadPhoneIcon />} iconPosition="left">
                    Contact Us
                </Button>
                </div>

                <GoogleCalendarButton />
                <div className={styles["chat-support-module-holder"]}>
                    <SupportChatPopup isActive={isChatModuleActive} onClose={closeChatModule} />

                    <div className={styles["chat-support-button"]} onClick={chatModulePopupOpen}>
                        <div className={styles["arrow-holder"]}>
                            <ChatIcon />
                        </div>
                        <div className={styles["content"]}>Chat with us!</div>
                    </div>
                </div>

                <div className={`icon-rounded ${styles["menu-icon"]}`} onClick={mobileMenu}>
                    {!mobileMenuActive ? (
                        <Humberger />
                    ) : (
                        <CloseIcon />
                    )}
                </div>

                <div style={{ position: "absolute" }}>
                    <audio src="/videos/bell-notification-v2.mp3" className="notification-sound" />
                </div>
            </Container>
        </header>
    );
}
