import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./bethesda-bathroom-design.module.scss";

const houseStyles = [
  {
    title: "Colonials and Cape Cods",
    text: "The primary bath grows into a closet or a slice of the hall, making room for a walk-in shower and two sinks.",
    graphic: (
      <svg viewBox="0 0 160 90" fill="none" aria-hidden="true" focusable="false">
        <path className={styles.counterPrimary} d="M30 45 80 15l50 30v35H30V45Z" />
        <rect className={styles.counterDetail} x="55" y="55" width="18" height="25" rx="2" />
        <rect className={styles.counterDetail} x="87" y="55" width="18" height="25" rx="2" />
      </svg>
    ),
  },
  {
    title: "Mid-century homes",
    text: "Layouts get reworked around better ventilation, larger showers and storage the original plans lacked.",
    graphic: (
      <svg viewBox="0 0 160 90" fill="none" aria-hidden="true" focusable="false">
        <rect className={styles.counterPrimary} x="20" y="30" width="120" height="45" rx="3" />
        <path className={styles.walkway} d="M20 52h120" />
        <rect className={styles.counterDetail} x="32" y="38" width="32" height="18" rx="2" />
        <circle className={styles.counterDetail} cx="118" cy="46" r="7" />
      </svg>
    ),
  },
  {
    title: "Newer infill houses",
    text: "Rooms are already generous, so the budget goes into finishes, lighting and fixtures.",
    graphic: (
      <svg viewBox="0 0 160 90" fill="none" aria-hidden="true" focusable="false">
        <rect className={styles.counterPrimary} x="25" y="20" width="110" height="55" rx="4" />
        <rect className={styles.counterDetail} x="40" y="34" width="35" height="27" rx="3" />
        <rect className={styles.island} x="88" y="34" width="32" height="27" rx="3" />
      </svg>
    ),
  },
];

const choices = [
  {
    number: "01",
    title: "Tile",
    text: "Porcelain for durability, natural stone for character, and large formats for fewer grout lines.",
  },
  {
    number: "02",
    title: "Vanities",
    text: "Floating units open up small rooms, while double and custom vanities suit shared primary baths.",
  },
  {
    number: "03",
    title: "Glass and showers",
    text: "Frameless glass, recessed niches and thermostatic valves are the most requested upgrades.",
  },
  {
    number: "04",
    title: "Comfort upgrades",
    text: "Heated floors are common in primary suites, and steam showers are an occasional request we plan into the waterproofing.",
  },
];

export default function BethesdaBathroomDesign() {
  return (
    <section className={styles.section} aria-labelledby="bethesda-bathroom-design-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-bathroom-design-title"
            align="center"
            eyebrow={<Badge className={`nostars ${styles.designTag}`}>Design</Badge>}
            title="Bathroom Design and Materials for Bethesda Homes"
            text="Scaled drawings, renderings and a costed finish schedule are in your hands before a single box of tile ships."
          />
        </div>

        <div className={styles.layoutContainer}>
          <div className={styles.subsectionHeader}>
            <span className={styles.stepNumber}>01</span>
            <h3 className={`${styles.subsectionTitle} h3`}>House Style</h3>
          </div>
          <p className={styles.subsectionIntro}>The approach changes with the style of house:</p>

          <div className={`${styles.layoutGrid} ${styles.stylesGrid}`}>
            {houseStyles.map((style) => (
              <article className={styles.layoutCard} key={style.title}>
                <div className={styles.floorplan}>{style.graphic}</div>
                <h2 className="h4">{style.title}</h2>
                <p>{style.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.trafficNote}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span>From there, the finishes are picked to suit how the room gets used.</span>
          </div>
        </div>

        <div className={styles.choicesGrid}>
          {choices.map((choice) => (
            <article className={styles.choiceCard} key={choice.number}>
              <div className={styles.choiceHeader}>
                <span className={styles.choiceNumber}>{choice.number}</span>
                <h3>{choice.title}</h3>
              </div>
              <p>{choice.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.trafficNote}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>Every selection is locked before construction so the price holds.</span>
        </div>
      </Container>
    </section>
  );
}
