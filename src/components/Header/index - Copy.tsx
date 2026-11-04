"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMyContext } from "@/hooks/context";

import Link from "next/link";
import Image from "next/image";
import SupportChatPopup from "@/components/chat/SupportChatPopup";
import { headerMenu } from "@/data/headerMenu";

import HeadPhoneIcon from "/public/images/headphone-icon.svg";
import ChatIcon from "/public/images/chat-icon.svg";
import Humberger from '@/assets/humberger-icon.svg';
import CloseIcon from '@/assets/close-icon.svg';

import styles from "./style.module.scss";

function Header() {
    const [headerClassName, setHeaderClassName] = useState("");
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [isChatModuleActive, setIsChatModuleActive] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const [activeSubAccordion, setActiveSubAccordion] = useState<string | null>(null);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    const { activeMenuItem } = useMyContext();

    useEffect(() => {
        // Window width ko client par safe set karne ke liye
        setWindowWidth(window.innerWidth);

        const onScroll = () => {
            if (window.pageYOffset >= 100) {
                setHeaderClassName(styles["active_menu"]);
            } else {
                setHeaderClassName("");
            }
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const pathname = usePathname();

    if (pathname === "/dashboard_login" || pathname === "/s_dashboard") {
        return null;
    }

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
        if (windowWidth <= 1024) {
            e.preventDefault();
            setActiveAccordion(activeAccordion === label ? null : label);
        }
    };

    const toggleSubAccordion = (e: React.MouseEvent, label: string) => {
        if (windowWidth <= 1024) {
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

    return (
        <header className={`h-list justify-content-between ${styles["header-main"]} ${headerClassName}`}>

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
                    <div key={index} className={`${item.dropdown ? styles["dropdown"] + " " + styles["show-on-hover"] : ""} ${activeAccordion === item.label ? styles["accordion-active"] : ""}`}>
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
                                    ▼
                                </span>
                            )}
                        </div>

                        {item.dropdown && (
                            <ul className={`${styles["dropdown-menu"]} ${item.isMegaMenu ? styles["mega-menu"] : ""} ${activeAccordion === item.label ? styles["show-mobile"] : ""}`}>
                                {item.dropdown.map((dropItem, dropIndex) => (
                                    <li key={dropIndex} className={`${dropItem.submenu ? styles["has-submenu"] : ""} ${activeSubAccordion === dropItem.label ? styles["sub-accordion-active"] : ""}`}>
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
                                                    →
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

            <div className={styles["desktop-contact-wrapper"]}>
                <Link href="/contact-us" className={`btn button-primary btn-c-rounded ${styles["consultation-button"]}`} data-button-height="45">
                    <Image src={HeadPhoneIcon} alt="Contact" width={20} height={20} className="me-2" />
                    Contact
                </Link>
            </div>

            <div className={styles["chat-support-module-holder"]}>
                <SupportChatPopup isActive={isChatModuleActive} onClose={closeChatModule} />

                <div className={styles["chat-support-button"]} onClick={chatModulePopupOpen}>
                    <div className={styles["arrow-holder"]}>
                        <Image src={ChatIcon} alt="Chat" width={24} height={24} />
                    </div>
                    <div className={styles["content"]}>Chat with us!</div>
                </div>
            </div>

            <div className={`icon-rounded ${styles["menu-icon"]}`} onClick={mobileMenu}>
                {!mobileMenuActive ? (
                    <Image src={Humberger} alt="Menu" width={24} height={24} />
                ) : (
                    <Image src={CloseIcon} alt="Close" width={24} height={24} />
                )}
            </div>

            <div style={{ position: "absolute" }}>
                <audio src="/videos/bell-notification-v2.mp3" className="notification-sound" />
            </div>

        </header>
    );
}

export default Header;