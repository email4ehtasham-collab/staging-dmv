import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";
import bethesdaBasementContent from "./content";

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

export default function BethesdaBasementFaq() {
    return (
        <HomeFaq
            variant="bethesda"
            eyebrow={bethesdaBasementContent.faq.eyebrow}
            title={bethesdaBasementContent.faq.title}
            text={bethesdaBasementContent.faq.text}
            faqs={bethesdaBasementContent.faq.items.map((item) => ({
                question: item.question,
                answer: <BoldFirstSentence text={item.answer} />,
            }))}
        />
    );
}
