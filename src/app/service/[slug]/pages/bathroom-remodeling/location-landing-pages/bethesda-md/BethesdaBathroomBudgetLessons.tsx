import type { ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./bethesda-bathroom-cost-drivers.module.scss";

function LessonIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const lessons = [
  {
    title: "Choose everything first",
    text: "Tile, fixtures and the vanity should be picked before demolition, so nothing stalls while you wait on a backorder.",
    icon: (
      <LessonIcon>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </LessonIcon>
    ),
  },
  {
    title: "Keep a cushion",
    text: "Setting aside 10 to 15 percent covers what turns up behind the walls of an older house.",
    icon: (
      <LessonIcon>
        <path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </LessonIcon>
    ),
  },
  {
    title: "Never skip the hidden parts",
    text: "The waterproofing membrane and a fan vented outdoors matter more than any finish.",
    icon: (
      <LessonIcon>
        <path d="M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </LessonIcon>
    ),
  },
  {
    title: "Check the license and the permit",
    text: "A valid MHIC number and a county permit protect you if something goes wrong.",
    icon: (
      <LessonIcon>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M9 15l2 2 4-4" />
      </LessonIcon>
    ),
  },
  {
    title: "Plan where you will shower",
    text: "If this is the only full bath, line up a temporary option before work starts.",
    icon: (
      <LessonIcon>
        <path d="M3 11h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" />
        <path d="M6 11V6a2 2 0 0 1 4 0M5 21l1-3M19 21l-1-3" />
      </LessonIcon>
    ),
  },
];

export default function BethesdaBathroomBudgetLessons() {
  return (
    <section className={styles.section} aria-labelledby="bethesda-bathroom-budget-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-bathroom-budget-title"
            align="center"
            eyebrow={<Badge>Budget Questions</Badge>}
            title="Is $10,000 Enough to Remodel a Bathroom?"
            text="For a powder room or a cosmetic hall-bath update, yes; for a rebuilt shower, no. Around $5,000 to $10,000 usually pays for a new vanity and top, toilet, faucets, lighting, paint and flooring in a Bethesda home, provided the drains stay where they are. Small scopes are welcome; we do not set a project minimum."
          />
        </div>

        <div className={`${styles.header} ${styles.questionHeader}`}>
          <SectionHeading
            id="bethesda-bathroom-lessons-title"
            align="center"
            eyebrow={<Badge>Before You Start</Badge>}
            title="What Do Homeowners Wish They Knew Before a Bathroom Remodel?"
            text="Five lessons come up again and again once a bathroom is finished:"
          />
        </div>

        <div className={styles.grid}>
          {lessons.map((lesson, index) => (
            <article className={styles.card} key={lesson.title}>
              <div className={styles.cardTop}>
                <span className={styles.iconBox}>{lesson.icon}</span>
                <span className={styles.step}>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className={`${styles.cardTitle} h3`}>{lesson.title}</h3>
              <p className={styles.cardText}>{lesson.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.noteBanner}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>We walk through all five with you before the contract is signed.</span>
        </div>
      </Container>
    </section>
  );
}
