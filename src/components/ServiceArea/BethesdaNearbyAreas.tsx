import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./bethesda-nearby-areas.module.scss";

type NearbyArea = {
  eyebrow: string;
  name: string;
  /** Optional zip codes, shown in bold under the area name. */
  zips?: string;
  text: string;
  linkLabel?: string;
  href?: string;
};

type NearbyAreaLink = {
  label: string;
  href: string;
};

type BethesdaNearbyAreasProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  areas?: NearbyArea[];
  noteText?: string;
  noteLinks?: NearbyAreaLink[];
};

const nearbyAreas: NearbyArea[] = [
  {
    eyebrow: "Countywide",
    name: "Montgomery County",
    text: "Our countywide general contractor page covers DPS permits and WSSC connections.",
  },
  {
    eyebrow: "Our Office",
    name: "North Bethesda",
    text: "Our office is here, so site visits often take minutes.",
  },
  {
    eyebrow: "Next Door",
    name: "Chevy Chase",
    text: "Next door, projects often include town permits and historic review.",
  },
  {
    eyebrow: "West of Bethesda",
    name: "Potomac",
    text: "Larger lots west of Bethesda mean additions and whole-home projects.",
  },
];

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M10 17s5.5-5 5.5-9.5a5.5 5.5 0 1 0-11 0C4.5 12 10 17 10 17Z" />
      <circle cx="10" cy="7.5" r="1.8" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export default function BethesdaNearbyAreas({
  eyebrow = "Area We Serve",
  title = "Nearby Areas We Serve",
  text = "Bethesda borders four other areas where we work:",
  areas = nearbyAreas,
  noteText = "Wherever you live in the area, the same team, contract terms and warranty apply.",
  noteLinks = [],
}: BethesdaNearbyAreasProps = {}) {
  return (
    <section id="nearby-areas" className={styles.section} aria-labelledby="nearby-areas-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="nearby-areas-title"
            align="center"
            eyebrow={<Badge>{eyebrow}</Badge>}
            title={title}
            text={text}
          />
        </div>

        <div className={styles.grid}>
          {areas.map((area) => (
            <article className={styles.card} key={area.name}>
              <span className={styles.eyebrow}>{area.eyebrow}</span>
              <h3 className={styles.title}>{area.name}</h3>
              {area.zips ? <strong className={styles.zips}>{area.zips}</strong> : null}
              <p className={styles.text}>{area.text}</p>
              {area.href && area.linkLabel ? (
                <Link href={area.href} className={styles.areaLink}>
                  {area.linkLabel}
                  <ArrowIcon />
                </Link>
              ) : (
                <span className={styles.areaTag}>
                  <PinIcon />
                  {area.name}
                </span>
              )}
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <p>{noteText}</p>
          {noteLinks.length > 0 ? (
            <div className={styles.noteLinks}>
              {noteLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.noteLink}>
                  {link.label}
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
