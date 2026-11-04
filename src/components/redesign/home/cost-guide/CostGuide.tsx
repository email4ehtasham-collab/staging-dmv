import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./cost-guide.module.scss";

const costs = [
  {
    title: "Kitchen remodel",
    amount: "$30,000-$115,000",
    label: "Typical total cost",
    text: "A mid-range remodel usually runs $35,000-$75,000. Custom cabinets can take 30-40% of the budget.",
  },
  {
    title: "Bathroom remodel",
    amount: "$15,000-$45,000",
    label: "Typical total cost",
    text: "Moving plumbing lines and custom tile work push the cost toward the top of the range.",
  },
  {
    title: "Basement finishing",
    amount: "$45,000-$110,000",
    label: "$30-$85 per sq ft",
    text: "Adding a bathroom, a wet bar or egress windows raises the cost.",
  },
  {
    title: "ADU",
    amount: "$150,000-$300,000",
    label: "Typical total cost",
    text: "A new detached unit. Garage and basement conversions usually cost less.",
  },
  {
    title: "Home addition",
    amount: "$120,000-$325,000",
    label: "$200-$400 per sq ft",
    text: "A new foundation and roof extension drive most of the cost.",
  },
  {
    title: "Whole-home renovation",
    amount: "$120,000-$600,000+",
    label: "$100-$250 per sq ft",
    text: "A full gut with structural changes or historic updates sits at the top of the range.",
  },
];

export default function CostGuide() {
  return (
    <section id="cost" className={styles.section} aria-labelledby="cost-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            className={styles.heading}
            id="cost-title"
            eyebrow={<Badge>Cost and pricing</Badge>}
            title="How Much Does a Home Remodel Cost in Maryland?"
          />
          <div className={styles.range}>
            <strong>$60-$250+</strong>
            <span>Per square foot for most Maryland remodels</span>
          </div>
        </div>

        <p className={styles.intro}>
          In Maryland, most home remodels cost between $60 and $250 or more per square foot. Construction and labor costs in Maryland run higher than the national average, so your budget depends on your county, the size of your home and the scope of the work. Here is what each type of project typically costs:
        </p>

        <div className={styles.grid}>
          {costs.map((cost) => (
            <article key={cost.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{cost.title}</h3>
              <p className={styles.amount}>{cost.amount}</p>
              <span className={styles.cardLabel}>{cost.label}</span>
              <p className={styles.cardText}>{cost.text}</p>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          These are 2026 figures gathered from cost guides published by Maryland and DC remodelers. Your own price depends on the size of the space, the materials you choose, any structural work and the age of your home. After the consultation, you get a free written estimate for your project.
        </p>

        <div className={styles.cta}>
          <div>
            <h3>Is it cheaper to hire the trades yourself?</h3>
            <p>
              You can save the general contractor&apos;s fee, which usually runs 10 to 20 percent of the project, but you also take on the scheduling, the permits and the cost of any delay when one trade holds up the next.
            </p>
          </div>
          <Button href="/contact-us" data-estimate-trigger>Get My Free Written Estimate</Button>
        </div>
      </Container>
    </section>
  );
}
