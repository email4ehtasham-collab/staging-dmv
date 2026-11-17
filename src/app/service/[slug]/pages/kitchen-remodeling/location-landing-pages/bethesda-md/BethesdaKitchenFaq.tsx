import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";

const bethesdaKitchenFaqs = [
  {
    question: "What is a realistic budget for a kitchen remodel in Bethesda?",
    answer:
      "Bethesda owners generally budget $35,000 to $75,000 for a kitchen remodel. Surface-only refreshes sit near $15,000 to $30,000; once the plan changes and cabinets are built to order, expect $75,000 and up, with big colonial kitchens beyond $120,000. Older homes often need a panel upgrade, new wiring or plaster repair once walls open, so we check those items before writing your itemized estimate.",
  },
  {
    question: "Is $30,000 enough for a kitchen remodel?",
    answer:
      "Yes, as long as the sink, range and walls stay where they are. In Bethesda, $30,000 typically pays for refaced or new stock cabinets, a quartz top, a tile backsplash and new lighting. It does not cover moving walls, relocating the sink, custom cabinetry or a full appliance package, which push the project into the mid-range tier.",
  },
  {
    question: "Can I remodel a kitchen for $20,000?",
    answer:
      "Yes, if the work stays cosmetic. Keep the Bethesda scope to paint or new cabinet faces, hardware, one new counter and lighting, and the total can stay below $20,000. Changing the layout or moving plumbing pushes the project into the refresh tier or higher. We are happy to quote the smaller job, since we set no minimum project size.",
  },
  {
    question: "Do I need a permit to remodel my kitchen in Bethesda?",
    answer:
      "You need a permit when walls, wiring or plumbing change, but replacing cabinets, counters or flooring alone does not need one. With no municipal government in Bethesda, building and electrical approvals come from Montgomery County DPS and plumbing approval from WSSC Water. We file both, schedule each inspection and keep the approved plans on site.",
  },
  {
    question: "How long does a kitchen remodel take?",
    answer:
      "A mid-range Bethesda kitchen usually needs one to two and a half months for design, selections and county permit review, then about six to ten weeks of construction. A refresh can be done in two to four weeks, and a new layout takes ten to fourteen. We order cabinets during permit review so they arrive when the crew is ready.",
  },
  {
    question: "Do you take on compact or condo kitchens in Bethesda?",
    answer:
      "Yes. Downtown Bethesda condos and older Cape Cods often have small kitchens, and we plan them for more storage, better lighting and an easier path between sink, range and refrigerator. In condo buildings we follow the board's rules on work hours, deliveries and elevator use, and we prepare the approval package management asks for before work begins.",
  },
];

export default function BethesdaKitchenFaq() {
  return (
    <HomeFaq
      variant="bethesda"
      eyebrow="FAQs"
      title="Frequently Asked Questions"
      text="Have a question about your Bethesda kitchen that isn't here? Call us 7 days a week."
      faqs={bethesdaKitchenFaqs}
    />
  );
}
