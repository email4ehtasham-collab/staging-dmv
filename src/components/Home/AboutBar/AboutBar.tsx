import Container from "@/components/Common/Container";
import styles from "./about-bar.module.scss";

type TrustItem = {
  title: string;
  detail: string;
  icon: "shield" | "building" | "insured" | "warranty" | "home";
};

const trustItems: TrustItem[] = [
  { title: "MD MHIC #156178", detail: "Maryland licensed", icon: "shield" },
  { title: "DC DLCP licensed", detail: "#410526000209", icon: "building" },
  { title: "General liability insured", detail: "Guaranty Fund eligible", icon: "insured" },
  { title: "1-year warranty", detail: "On every project", icon: "warranty" },
  { title: "No minimum job size", detail: "One room to whole home", icon: "home" },
];

function TrustIcon({ name }: { name: TrustItem["icon"] }) {
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M12 2.8 19 5v6c0 4.3-3 8.2-7 9.4-4-1.2-7-5.1-7-9.4V5l7-2.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m8.8 11.8 2.2 2.2 4.2-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "building") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M4 20V9.5L12 4l8 5.5V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20v-5h6v5M7.5 10.5h.01M12 10.5h.01M16.5 10.5h.01M7.5 13.5h.01M12 13.5h.01M16.5 13.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "insured") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M12 2.8 19 5v6c0 4.3-3 8.2-7 9.4-4-1.2-7-5.1-7-9.4V5l7-2.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 8.2v4.4M12 15.6h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "warranty") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <circle cx="12" cy="9" r="5.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="m8.7 13.3-1 7.2 4.3-2.4 4.3 2.4-1-7.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m10 9 1.4 1.4L14.5 7.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M3.5 11 12 4l8.5 7M5.5 9.5V20h13V9.5M9.5 20v-5.5h5V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutBar() {
  return (
    <section className={styles.section} aria-label="Licenses and guarantees">
      <Container>
        <ul className={styles.panel}>
          {trustItems.map((item) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.icon}>
                <TrustIcon name={item.icon} />
              </span>
              <span className={styles.copy}>
                <h5 className={styles.title}>{item.title}</h5>
                <span className={styles.detail}>{item.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
