import Link from "next/link";
import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";

// Questions the page does not already answer in a heading (brief: licence, warranty, small kitchens,
// minimum size, licence check). Each answer starts with the direct answer in bold.
const bethesdaKitchenFaqs = [
  {
    question: "Are you licensed to remodel kitchens in Bethesda, MD?",
    answer: (
      <>
        <strong>Yes, we hold Maryland Home Improvement Commission license #156178.</strong> It covers home improvement
        work such as kitchen remodeling in Bethesda and the rest of Maryland, and you can look it up on the MHIC
        license search before you sign.
      </>
    ),
  },
  {
    question: "Do you offer a warranty on kitchen remodeling work?",
    answer: (
      <>
        <strong>Yes, every kitchen remodel comes with a 1-year workmanship warranty.</strong> It covers labor defects
        and starts on the day we hand the kitchen back to you after the final walkthrough.
      </>
    ),
  },
  {
    question: "Do you take on compact or condo kitchens in Bethesda?",
    answer: (
      <>
        <strong>Yes, we remodel small and condo kitchens in Bethesda.</strong> Downtown condos and older Cape Cods often
        have tight kitchens, and we plan them for more storage, better lighting and an easier path between sink, range
        and refrigerator. In condo buildings we follow the board&apos;s rules on work hours, deliveries and elevator use.
      </>
    ),
  },
  {
    question: "Is there a minimum project size for a kitchen job?",
    answer: (
      <>
        <strong>No, we set no minimum project size.</strong> A Bethesda kitchen refresh with new cabinet doors, one new
        counter and lighting gets the same free in-home consultation and written, itemized estimate as a full remodel.
      </>
    ),
  },
  {
    question: "How do I check a kitchen contractor's license in Maryland?",
    answer: (
      <>
        <strong>
          Search the contractor&apos;s name or license number on the{" "}
          <Link target="_blank" href="https://labor.maryland.gov/license/mhic/">
            Maryland Home Improvement Commission
          </Link>{" "}
          website.
        </strong>{" "}
        Maryland requires an MHIC license for home improvement work such as a kitchen remodel, so ask for the number
        before you sign. Ours is #156178.
      </>
    ),
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
