import Estimate from "@/components/Home/Estimate/Estimate";
import FiveSteps from "@/components/Home/FiveSteps/FiveSteps";
import InHomeConsultation from "@/components/Home/InHomeConsultation/InHomeConsultation";
import LicensedInsured from "@/components/Home/LicensedInsured/LicensedInsured";
import BethesdaNearbyAreas from "@/components/ServiceArea/BethesdaNearbyAreas";
import BethesdaOfficeLocation from "@/components/ServiceArea/BethesdaOfficeLocation";
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
        <ServiceLocationPage
            {...bethesdaBasementContent.hero}
            intro={
                <>
                    DMV General Contracting Group handles <strong>basement remodeling in Bethesda, MD</strong> as a
                    licensed general contractor from our North Bethesda office. We test for moisture and measure headroom
                    first, then design, permit and finish the lower level on one contract, with a 1-year workmanship
                    warranty.
                </>
            }
        >
            <InHomeConsultation
                id="bethesda-basement-consultation"
                headingId="bethesda-basement-consultation-title"
                titleAs="strong"
                title="Get a free basement assessment."
                text="We will tell you on the first visit whether the space can be finished as it is."
                ctaLabel="Book a Free Basement Assessment"
            />
            <BethesdaBasementServices />
            <BethesdaBasementConditions />
            <LocationCosts
                {...bethesdaBasementContent.costs}
                text={
                    <>
                        <strong>Bethesda basements generally cost $30 to $85 for each finished square foot.</strong> A
                        typical lower level comes to $30,000 to $90,000, and high-end finishes push past $85 and up to $110
                        or more. This table shows what each Bethesda budget tier includes:
                    </>
                }
            />
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
                    image: "/images/basement-remodeling-bethesda-md/basement-finishing-bethesda-md-built-ins-electric-fireplace.webp",
                    imageAlt: "Basement finishing with a kitchenette island, white built-in shelves and an electric fireplace wall",
                    title: "Basement Projects in Bethesda",
                    text: "This finished lower level has a kitchenette with an island, white built-ins and an electric fireplace wall. More family rooms and guest suites are pictured in our remodeling projects gallery.",
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
            <BethesdaOfficeLocation
                title="Basement Remodels Across Bethesda, MD"
                workNoun="basements"
                mapTitle="DMV General Contracting Group LLC | Basement Remodeling in Bethesda, MD"
            />
            <BethesdaNearbyAreas
                eyebrow="Area we serve"
                title="Basement Remodeling Near Bethesda"
                text="We finish basements in every Bethesda neighborhood and in these nearby areas:"
                areas={[
                    {
                        eyebrow: "Montgomery County",
                        name: "Chevy Chase",
                        zips: "20815",
                        text: "A few of the Chevy Chase villages review plans before DPS does, and our Chevy Chase page describes the extra step.",
                        linkLabel: "Chevy Chase",
                        href: "/service/basement-remodeling/chevy-chase-md",
                    },
                    {
                        eyebrow: "Montgomery County",
                        name: "Rockville",
                        zips: "20850, 20851",
                        text: "Up the Pike, homes inside city limits file their permits with the City of Rockville itself.",
                        linkLabel: "Rockville",
                        href: "/service/basement-remodeling/rockville-md",
                    },
                    {
                        eyebrow: "Near Our Office",
                        name: "North Bethesda",
                        zips: "20852",
                        text: "Townhome and single-family basements close to our Grand Park Avenue office.",
                    },
                ]}
                noteText="Permit offices differ in each of those places."
            />
            <BethesdaBasementFaq />
            <Estimate variant="bethesda-basement" />
        </ServiceLocationPage>
    );
}
