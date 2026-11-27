import Link from "next/link";
import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";

const bethesdaBathroomFaqs = [
  {
    question: "Are you licensed to remodel bathrooms in Bethesda?",
    answer: (
      <>
        <strong>Yes, we hold Maryland Home Improvement Commission license #156178.</strong> You can look it up on the{" "}
        <Link target="_blank" href="https://labor.maryland.gov/license/mhic/">
          MHIC license search
        </Link>{" "}
        before you sign, and our DC license is DLCP #410526000209.
      </>
    ),
  },
  {
    question: "Can you convert my tub to a walk-in shower?",
    answer: (
      <>
        <strong>Yes, we convert tubs to walk-in showers.</strong> We remove the tub, rebuild the floor with a proper
        slope and membrane, and finish the shower with tile and glass.
      </>
    ),
  },
  {
    question: "Can a full bathroom go in my basement?",
    answer: (
      <>
        <strong>Yes, a full bathroom can go in most Bethesda basements.</strong> We run new drain and vent lines, add an
        ejector pump if the drain sits below the sewer, and file the WSSC and DPS permits.
      </>
    ),
  },
  {
    question: "Do you offer a warranty?",
    answer: (
      <>
        <strong>Yes, every bathroom remodel comes with a 1-year workmanship warranty.</strong> Any problem caused by our
        workmanship in the first twelve months is ours to fix.
      </>
    ),
  },
  {
    question: "Do you take small jobs?",
    answer: (
      <>
        <strong>Yes, we set no minimum project size.</strong> A powder-room update or a vanity replacement gets the same
        free visit and written estimate as a full remodel.
      </>
    ),
  },
];

export default function BethesdaBathroomFaq() {
  return (
    <HomeFaq
      variant="bethesda"
      eyebrow="FAQs"
      title="Frequently Asked Questions"
      text="Have a bathroom question that is not here? Call us seven days a week."
      faqs={bethesdaBathroomFaqs}
    />
  );
}
