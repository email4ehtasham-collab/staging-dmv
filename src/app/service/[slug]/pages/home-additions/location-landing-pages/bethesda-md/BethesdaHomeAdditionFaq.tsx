import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";
import bethesdaHomeAdditionContent from "./content";

/** Bolds the direct answer (the first sentence) of each FAQ answer. */
function BoldFirstSentence({ text }: { text: string }) {
  const match = text.match(/^(.+?[.!?])\s+(.*)$/s);
  if (!match) return <strong>{text}</strong>;
  return (
    <>
      <strong>{match[1]}</strong> {match[2]}
    </>
  );
}

export default function BethesdaHomeAdditionFaq() {
  return (
    <HomeFaq
      variant="bethesda"
      eyebrow="FAQs"
      title="Frequently Asked Questions"
      text="Have a question about your Bethesda addition that isn't here? Call us 7 days a week."
      faqs={bethesdaHomeAdditionContent.faqs.map((item) => ({
        question: item.question,
        answer: <BoldFirstSentence text={item.answer} />,
      }))}
    />
  );
}
