import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import styles from "./bethesda-bathroom-related-work.module.scss";

type RelatedWorkItem = {
  label: string;
  text: string;
  href: string;
  icon: "framing" | "flooring" | "electrical" | "plumbing" | "bathroom" | "wholeHome";
};

const relatedWorkItems: RelatedWorkItem[] = [
  {
    label: "Plumbing",
    text: "Replacing old galvanized supply lines while walls are open is part of our plumbing services.",
    href: "/service/plumbing-services",
    icon: "plumbing",
  },
  {
    label: "Electrical",
    text: "Circuits for heated floors, vanity lighting and a stronger fan come from our electrical services.",
    href: "/service/electrical-services",
    icon: "electrical",
  },
  {
    label: "Framing",
    text: "Borrowing space from a closet or hall to enlarge a primary bath relies on framing in Bethesda.",
    href: "/service/framing/bethesda-md",
    icon: "framing",
  },
  {
    label: "Flooring",
    text: "Running new floors down the hall outside the bathroom is handled by our flooring remodeling team.",
    href: "/service/flooring-remodeling",
    icon: "flooring",
  },
  {
    label: "Basement",
    text: "A new lower-level bathroom usually goes in alongside a finished basement through basement remodeling.",
    href: "/service/basement-remodeling",
    icon: "bathroom",
  },
  {
    label: "Kitchen",
    text: "Doing the kitchen at the same time shares setup and permits; see kitchen remodeling in Bethesda.",
    href: "/service/kitchen-remodeling/bethesda-md",
    icon: "wholeHome",
  },
];

function RelatedWorkIcon({ name }: { name: RelatedWorkItem["icon"] }) {
  if (name === "framing") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M4 9h16M8 9v11M12 9v11M16 9v11" />
      </svg>
    );
  }

  if (name === "flooring") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M3 7h18M3 12h18M3 17h18" />
        <path d="M8 7v5M15 12v5M10 17v0" />
      </svg>
    );
  }

  if (name === "electrical") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="m13 7-4 6h4l-2 5 5-7h-4l1-4Z" />
      </svg>
    );
  }

  if (name === "plumbing") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M4 8h4a4 4 0 0 1 4 4 4 4 0 0 0 4 4h4" />
        <path d="m17 13 4 3-4 3M4 5v6" />
      </svg>
    );
  }

  if (name === "bathroom") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M3 11h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" />
        <path d="M6 11V6a2 2 0 0 1 4 0M5 21l1-3M19 21l-1-3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10v10h14V10M9 20v-5h6v5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  );
}

export default function BethesdaBathroomRelatedWork() {
  return (
    <section className={styles.section} aria-labelledby="related-work-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.header}>
            <Badge>Related Work</Badge>
            <h2 id="related-work-title">What Else Changes When You Remodel a Bethesda Bathroom?</h2>
            <div className={styles.intro}>
              <p>Several related jobs fit naturally into a Bethesda bathroom project:</p>
            </div>
          </div>

          <div className={styles.grid}>
            {relatedWorkItems.map((item) => (
              <Link key={item.label} href={item.href} className={styles.card}>
                <span className={styles.iconWrap}>
                  <RelatedWorkIcon name={item.icon} />
                </span>
                <span className={styles.cardBody}>
                  <span className={styles.label}>{item.label}</span>
                  <span className={styles.text}>{item.text}</span>
                </span>
                <span className={styles.arrow}>
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>

          <div className={styles.intro}>
            <p>Bundled together, they share one dumpster, one permit cycle and one crew.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
