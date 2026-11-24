import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";
import bethesdaBasementContent from "./content";

export default function BethesdaBasementFaq() {
    return (
        <HomeFaq
            variant="bethesda"
            eyebrow={bethesdaBasementContent.faq.eyebrow}
            title={bethesdaBasementContent.faq.title}
            text={bethesdaBasementContent.faq.text}
            faqs={bethesdaBasementContent.faq.items}
        />
    );
}
