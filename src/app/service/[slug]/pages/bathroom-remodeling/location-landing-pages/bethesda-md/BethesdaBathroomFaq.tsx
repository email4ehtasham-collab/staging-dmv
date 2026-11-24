import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";

const bethesdaBathroomFaqs = [
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Our Maryland home improvement license is MHIC #156178, our District license is DLCP #410526000209, and general liability coverage is active on each project.",
  },
  {
    question: "Can you convert my tub to a walk-in shower?",
    answer:
      "Yes. We remove the tub, rebuild the floor with a proper slope and membrane, and finish the shower with tile and glass.",
  },
  {
    question: "Can a full bathroom go in my basement?",
    answer:
      "Yes. We run new drain and vent lines, add an ejector pump if the drain sits below the sewer, and file the WSSC and DPS permits.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes. Any problem caused by our workmanship in the first twelve months is ours to fix.",
  },
  {
    question: "Do you take small jobs?",
    answer:
      "Yes. We have no minimum, so a powder-room update or vanity replacement is welcome.",
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
