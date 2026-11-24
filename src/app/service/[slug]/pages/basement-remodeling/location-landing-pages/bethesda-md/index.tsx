import Estimate from "@/components/Home/Estimate/Estimate";
import FiveSteps from "@/components/Home/FiveSteps/FiveSteps";
import InHomeConsultation from "@/components/Home/InHomeConsultation/InHomeConsultation";
import LicensedInsured from "@/components/Home/LicensedInsured/LicensedInsured";
import BethesdaNearbyAreas from "@/components/ServiceArea/BethesdaNearbyAreas";
import BethesdaProjectsReviews from "@/components/ServiceArea/BethesdaProjectsReviews";
import LocationCosts from "@/components/ServiceLocation/LocationCosts";
import ServiceLocationPage from "@/components/ServiceLocation/ServiceLocationPage";
import BethesdaBasementConditions from "./BethesdaBasementConditions";
import BethesdaBasementFaq from "./BethesdaBasementFaq";
import BethesdaBasementPermits from "./BethesdaBasementPermits";
import BethesdaBasementRelatedWork from "./BethesdaBasementRelatedWork";
import BethesdaBasementSeason from "./BethesdaBasementSeason";
import BethesdaBasementServices from "./BethesdaBasementServices";
import BethesdaBasementTimeline from "./BethesdaBasementTimeline";
import bethesdaBasementContent from "./content";

export default function BasementRemodelingBethesdaMd() {
    return (
        <ServiceLocationPage {...bethesdaBasementContent.hero}>
            <InHomeConsultation
                id="bethesda-basement-consultation"
                headingId="bethesda-basement-consultation-title"
                title="Get a free basement assessment."
                text="We will tell you on the first visit whether the space can be finished as it is."
                ctaLabel="Book a Free Basement Assessment"
            />
            <BethesdaBasementServices />
            <BethesdaBasementConditions />
            <LocationCosts {...bethesdaBasementContent.costs} />
            <BethesdaBasementSeason />
            <BethesdaBasementPermits />
            <FiveSteps
                title={bethesdaBasementContent.process.title}
                text={bethesdaBasementContent.process.text}
                steps={bethesdaBasementContent.process.steps}
                durations={bethesdaBasementContent.process.durations}
                contactTitle="One Project Lead"
                contactText="Any water fix or new escape window is completed before the first stud goes in."
                contactCtaLabel="Start With Step 1"
            />
            <BethesdaBasementTimeline />
            <BethesdaProjectsReviews
                project={{
                    badgeLabel: "Case Studies & Projects",
                    location: "Bethesda, MD",
                    image: "/images/services/basement-remodeling.webp",
                    imageAlt: "Finished basement remodeling project in Bethesda, Maryland",
                    title: "Basement Projects in Bethesda",
                    text: "Finished lower levels, from family rooms to guest suites, are pictured before and after in our remodeling projects gallery.",
                    primaryLabel: "Browse remodeling projects",
                    primaryHref: "/projects",
                }}
                reviews={{
                    badgeLabel: "Testimonials",
                    title: "What Bethesda Homeowners Say",
                    score: "4.9",
                    text: "Our Google rating is 4.9, and past clients describe their projects in their own words on the client reviews page.",
                    googleCtaLabel: "Read Reviews on Google",
                    secondaryLabel: "Client Reviews",
                    secondaryHref: "/testimonials",
                }}
            />
            <LicensedInsured variant="bethesda-basement" />
            <BethesdaBasementRelatedWork />
            <BethesdaNearbyAreas
                eyebrow="Area we serve"
                title="Basement Remodeling Near Bethesda"
                text="We finish basements in every Bethesda neighborhood and in these nearby areas:"
                areas={[
                    {
                        eyebrow: "Montgomery County",
                        name: "Chevy Chase",
                        text: "A few of the Chevy Chase villages review plans before DPS does, as our page on basement remodeling in Chevy Chase describes.",
                        linkLabel: "Basement remodeling in Chevy Chase",
                        href: "/service/basement-remodeling/chevy-chase-md",
                    },
                    {
                        eyebrow: "Montgomery County",
                        name: "Rockville",
                        text: "Up the Pike, homes inside city limits file with Rockville itself, as basement remodeling in Rockville explains.",
                        linkLabel: "Basement remodeling in Rockville",
                        href: "/service/basement-remodeling/rockville-md",
                    },
                    {
                        eyebrow: "Washington, DC",
                        name: "Washington, DC",
                        text: "South of the line, English-basement apartments and District permits are the focus of basement remodeling in Washington DC.",
                        linkLabel: "Basement remodeling in Washington, DC",
                        href: "/service/basement-remodeling/washington-dc",
                    },
                ]}
                noteText="Permit offices differ in each of those places."
            />
            <BethesdaBasementFaq />
            <Estimate variant="bethesda-basement" />
        </ServiceLocationPage>
    );
}
