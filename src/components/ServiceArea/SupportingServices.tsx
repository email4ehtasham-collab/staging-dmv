import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./supporting-services.module.scss";

export type SupportingServiceIcon =
  | "outdoor"
  | "structure"
  | "systems"
  | "exterior"
  | "cleanout";

export type SupportingServiceGroup = {
  title: string;
  icon: SupportingServiceIcon;
  links: {
    label: string;
    href: string;
  }[];
};

type SupportingServicesProps = {
  eyebrow: string;
  title: string;
  text: string;
  groups: SupportingServiceGroup[];
};

function GroupIcon({ icon }: { icon: SupportingServiceIcon }) {
  if (icon === "outdoor") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M12 21v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M12 3 5.5 12H9l-2.5 4h11L15 12h3.5L12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "structure") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="m14 4 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="m13.5 3.5 7 7-2.5 2.5-7-7 2.5-2.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="m12 7-8 8a2.1 2.1 0 0 0 3 3l8-8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (icon === "systems") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "exterior") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="m3 11 9-7 9 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v10h14V10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M3 7h11v9H3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 10h4l3 3v3h-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function SupportingServices({
  eyebrow,
  title,
  text,
  groups,
}: SupportingServicesProps) {
  return (
    <section className={styles.section} aria-labelledby="supporting-services-title">
      <Container>
        <div className={styles.panel}>
          <SectionHeading
            className={styles.heading}
            id="supporting-services-title"
            align="center"
            eyebrow={<Badge>{eyebrow}</Badge>}
            title={title}
            text={text}
          />

          <div className={styles.grid}>
            {groups.map((group) => (
              <div className={styles.group} key={group.title}>
                <h3 className={styles.groupTitle}>
                  <span className={styles.icon}>
                    <GroupIcon icon={group.icon} />
                  </span>
                  {group.title}
                </h3>

                <ul className={styles.links} aria-label={`${group.title} services`}>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
