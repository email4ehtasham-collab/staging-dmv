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
    text: <>A mid-range remodel usually runs <strong>$35,000-$75,000</strong>. <strong>Custom cabinets</strong> can take <strong>30-40%</strong> of the budget.</>,
  },
  {
    title: "Bathroom remodel",
    amount: "$15,000-$45,000",
    label: "Typical total cost",
    text: <>Moving <strong>plumbing lines</strong> and <strong>custom tile work</strong> push the cost toward the top of the range.</>,
  },
  {
    title: "Basement finishing",
    amount: "$45,000-$110,000",
    label: "$30-$85 per sq ft",
    text: <>Adding a <strong>bathroom</strong>, a <strong>wet bar</strong> or <strong>egress windows</strong> raises the cost.</>,
  },
  {
    title: "ADU",
    amount: "$150,000-$300,000",
    label: "Typical total cost",
    text: <>A new <strong>detached unit</strong>. <strong>Garage and basement conversions</strong> usually cost less.</>,
  },
  {
    title: "Home addition",
    amount: "$120,000-$325,000",
    label: "$200-$400 per sq ft",
    text: <>A new <strong>foundation</strong> and <strong>roof extension</strong> drive most of the cost.</>,
  },
  {
    title: "Whole-home renovation",
    amount: "$120,000-$600,000+",
    label: "$100-$250 per sq ft",
    text: <>A <strong>full gut</strong> with <strong>structural changes</strong> or <strong>historic updates</strong> sits at the top of the range.</>,
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
          In <strong>Maryland</strong>, most <strong>home remodels</strong> cost between <strong>$60 and $250 or more per square foot</strong>. Construction and labor costs in Maryland run higher than the national average, so your budget depends on your <strong>county</strong>, the <strong>size of your home</strong> and the <strong>scope of the work</strong>. Here is what each type of project typically costs:
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Typical cost</th>
                <th scope="col">Cost basis</th>
                <th scope="col">What affects the cost</th>
              </tr>
            </thead>
            <tbody>
              {costs.map((cost) => (
                <tr key={cost.title}>
                  <th scope="row" className={styles.project}>{cost.title}</th>
                  <td className={styles.amount}>{cost.amount}</td>
                  <td className={styles.label}>{cost.label}</td>
                  <td className={styles.detail}>{cost.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.note}>
          These are <strong>2026 figures</strong> gathered from cost guides published by Maryland and DC remodelers. Your own price depends on the size of the space, the materials you choose, any structural work and the age of your home. After the consultation, you get a <strong>free written estimate</strong> for your project.
        </p>

        <div className={styles.cta}>
          <div>
            <h3>Is it cheaper to hire the trades yourself?</h3>
            <p>
              You can save the general contractor&apos;s fee, which usually runs <strong>10 to 20 percent</strong> of the project, but you also take on the scheduling, the permits and the cost of any delay when one trade holds up the next.
            </p>
          </div>
          <Button href="/contact-us" data-estimate-trigger>Get My Free Written Estimate</Button>
        </div>
      </Container>
    </section>
  );
}
