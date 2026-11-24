import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";
import bethesdaHomeAdditionContent from "./content";

export default function BethesdaHomeAdditionFaq() {
  return (
    <HomeFaq
      variant="bethesda"
      eyebrow="FAQs"
      title="Frequently Asked Questions"
      text=""
      faqs={bethesdaHomeAdditionContent.faqs}
    />
  );
}
