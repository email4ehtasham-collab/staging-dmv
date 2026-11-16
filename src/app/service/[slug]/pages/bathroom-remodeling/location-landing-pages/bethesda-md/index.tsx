import Estimate from "@/components/redesign/home/estimate/Estimate";
import FiveSteps from "@/components/redesign/home/five-steps/FiveSteps";
import InHomeConsultation from "@/components/redesign/home/in-home-consultation/InHomeConsultation";
import LicensedInsured from "@/components/redesign/home/licensed-insured/LicensedInsured";
import BethesdaNearbyAreas from "@/components/redesign/service-area/BethesdaNearbyAreas";
import BethesdaProjectsReviews from "@/components/redesign/service-area/BethesdaProjectsReviews";
import LocationCosts from "@/components/redesign/service-location/LocationCosts";
import ServiceLocationPage from "@/components/redesign/service-location/ServiceLocationPage";
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
    <ServiceLocationPage {...bethesdaBathroomContent.hero}>
      <BethesdaBathroomServices />
      <LocationCosts {...bethesdaBathroomContent.costs} />
      <BethesdaBathroomCostDrivers />
      <BethesdaBathroomBudgetLessons />
      <InHomeConsultation
        id="service-location-consultation"
        headingId="bethesda-bathroom-consultation-title"
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
          image: "/images/projects-galary/primary-bathroom-entry-powder-room/1.jpg",
          imageAlt: "Remodeled bathroom in Bethesda, Maryland",
          title: "Bathroom Remodeling Projects in Bethesda",
          text: "To see primary suites, kids' baths and powder rooms we have finished, browse the remodeling projects gallery.",
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
      <BethesdaNearbyAreas
        eyebrow="Area We Serve"
        title="Bathroom Remodeling Near Bethesda"
        text="We work in every Bethesda neighborhood, from Edgemoor and Bradley Hills to Wood Acres and downtown, and in these nearby communities:"
        areas={[
          {
            eyebrow: "Montgomery County",
            name: "Chevy Chase",
            text: "Some of its villages and towns add their own building approval, as explained under bathroom remodeling in Chevy Chase.",
            linkLabel: "Bathroom remodeling in Chevy Chase",
            href: "/service/bathroom-remodeling/chevy-chase-md",
          },
          {
            eyebrow: "Montgomery County",
            name: "Potomac",
            text: "Out River Road, big-house primary baths are the focus of bathroom remodeling in Potomac.",
            linkLabel: "Bathroom remodeling in Potomac",
            href: "/service/bathroom-remodeling/potomac-md",
          },
          {
            eyebrow: "Washington, DC",
            name: "Washington, DC",
            text: "Rowhouse and condo baths under DOB permits are described on our bathroom remodeling in Washington DC page.",
            linkLabel: "Bathroom remodeling in Washington, DC",
            href: "/service/bathroom-remodeling/washington-dc",
          },
        ]}
        noteText="Cross a town or District line and the permit office changes, so check the linked page for yours."
      />
      <BethesdaBathroomFaq />
      <Estimate variant="bethesda-bathroom" />
    </ServiceLocationPage>
  );
}
