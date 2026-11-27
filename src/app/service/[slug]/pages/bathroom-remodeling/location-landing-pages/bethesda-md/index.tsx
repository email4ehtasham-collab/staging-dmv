import Estimate from "@/components/Home/Estimate/Estimate";
import FiveSteps from "@/components/Home/FiveSteps/FiveSteps";
import InHomeConsultation from "@/components/Home/InHomeConsultation/InHomeConsultation";
import LicensedInsured from "@/components/Home/LicensedInsured/LicensedInsured";
import BethesdaNearbyAreas from "@/components/ServiceArea/BethesdaNearbyAreas";
import BethesdaOfficeLocation from "@/components/ServiceArea/BethesdaOfficeLocation";
import BethesdaProjectsReviews from "@/components/ServiceArea/BethesdaProjectsReviews";
import LocationCosts from "@/components/ServiceLocation/LocationCosts";
import ServiceLocationPage from "@/components/ServiceLocation/ServiceLocationPage";
import BethesdaBathroomBudgetLessons from "./BethesdaBathroomBudgetLessons";
import BethesdaBathroomCostDrivers from "./BethesdaBathroomCostDrivers";
import BethesdaBathroomDesign from "./BethesdaBathroomDesign";
import BethesdaBathroomFaq from "./BethesdaBathroomFaq";
import BethesdaBathroomPermits from "./BethesdaBathroomPermits";
import BethesdaBathroomRelatedWork from "./BethesdaBathroomRelatedWork";
import BethesdaBathroomServices from "./BethesdaBathroomServices";
import BethesdaBathroomTimeline from "./BethesdaBathroomTimeline";
import bethesdaBathroomContent from "./content";

export default function BathroomRemodelingBethesda() {
  return (
    <ServiceLocationPage
      {...bethesdaBathroomContent.hero}
      intro={
        <>
          DMV General Contracting Group handles <strong>bathroom remodeling in Bethesda, MD</strong> as a licensed
          design-build general contractor. One contract covers the design, the county and WSSC permits, the
          waterproofing and the build for primary suites, hall baths and powder rooms, and every job carries a 1-year
          workmanship warranty.
        </>
      }
    >
      <BethesdaBathroomServices />
      <LocationCosts
        {...bethesdaBathroomContent.costs}
        text={
          <>
            <strong>A Bethesda hall or kids&apos; bath rebuilt from the studs typically costs $25,000 to $45,000.</strong>{" "}
            Keeping the plumbing and changing finishes brings it to roughly $10,000 to $20,000, and an enlarged primary
            suite usually starts around $50,000, with high-end suites above $80,000. This table shows what each Bethesda
            budget tier includes:
          </>
        }
      />
      <BethesdaBathroomCostDrivers />
      <BethesdaBathroomBudgetLessons />
      <InHomeConsultation
        id="service-location-consultation"
        headingId="bethesda-bathroom-consultation-title"
        titleAs="strong"
        title="Get a free bathroom estimate."
        text="Bring your inspiration photos; we will tell you what they cost in your house."
        ctaLabel="Get a Free Bathroom Estimate"
      />
      <BethesdaBathroomDesign />
      <FiveSteps
        title={bethesdaBathroomContent.process.title}
        text={bethesdaBathroomContent.process.text}
        steps={bethesdaBathroomContent.process.steps}
        durations={bethesdaBathroomContent.process.durations}
        contactTitle="Same Project Lead"
        contactText="The same project lead stays your contact throughout."
        contactCtaLabel="Start With Step 1"
      />
      <BethesdaBathroomTimeline />
      <BethesdaBathroomPermits />
      <BethesdaProjectsReviews
        project={{
          badgeLabel: "Case Studies & Projects",
          location: "Bethesda, MD",
          image: "/images/bathroom-remodeling-bethesda-md/bathroom-remodel-bethesda-md-glass-tub-herringbone-tile.webp",
          imageAlt: "Bethesda bathroom remodeling project with a glass-panel tub, herringbone wall tile and matte black fixtures",
          title: "Bathroom Remodeling Projects in Bethesda",
          text: "This Bethesda bath now has a glass-panel tub, herringbone wall tile and matte black fixtures. More primary suites, kids' baths and powder rooms are in our remodeling projects gallery.",
          primaryLabel: "Browse remodeling projects",
          primaryHref: "/projects",
        }}
        reviews={{
          badgeLabel: "Testimonials",
          title: "What Bethesda Homeowners Say",
          score: "4.9",
          text: "Google reviewers put us at 4.9, and you can hear from past clients directly under client reviews.",
          googleCtaLabel: "Read Reviews on Google",
          secondaryLabel: "Client Reviews",
          secondaryHref: "/testimonials",
        }}
      />
      <LicensedInsured variant="bethesda-bathroom" />
      <BethesdaBathroomRelatedWork />
      <BethesdaOfficeLocation
        title="Bathroom Remodels Across Bethesda, MD"
        workNoun="bathrooms"
        mapTitle="DMV General Contracting Group LLC | Bathroom Remodeling in Bethesda, MD"
      />
      <BethesdaNearbyAreas
        eyebrow="Area We Serve"
        title="Bathroom Remodeling Near Bethesda"
        text="We work in every Bethesda neighborhood, from Edgemoor and Bradley Hills to Wood Acres and downtown, and in these nearby communities:"
        areas={[
          {
            eyebrow: "Montgomery County",
            name: "Chevy Chase",
            zips: "20815",
            text: "Some of its villages and towns add their own building approval, and our Chevy Chase page explains the extra step.",
            linkLabel: "Chevy Chase",
            href: "/service/bathroom-remodeling/chevy-chase-md",
          },
          {
            eyebrow: "Montgomery County",
            name: "Potomac",
            zips: "20854",
            text: "Out River Road, the usual project is a large primary bath in a bigger house.",
            linkLabel: "Potomac",
            href: "/service/bathroom-remodeling/potomac-md",
          },
          {
            eyebrow: "Near Our Office",
            name: "North Bethesda",
            zips: "20852",
            text: "Townhome and condo baths close to our Grand Park Avenue office.",
          },
        ]}
        noteText="Cross a town line and the permit office can change, so check the linked page for yours."
      />
      <BethesdaBathroomFaq />
      <Estimate variant="bethesda-bathroom" />
    </ServiceLocationPage>
  );
}
