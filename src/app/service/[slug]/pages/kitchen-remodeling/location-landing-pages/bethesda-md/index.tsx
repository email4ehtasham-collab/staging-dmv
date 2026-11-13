import Estimate from "@/components/redesign/home/estimate/Estimate";
import FiveSteps from "@/components/redesign/home/five-steps/FiveSteps";
import InHomeConsultation from "@/components/redesign/home/in-home-consultation/InHomeConsultation";
import LicensedInsured from "@/components/redesign/home/licensed-insured/LicensedInsured";
import BethesdaNearbyAreas from "@/components/redesign/service-area/BethesdaNearbyAreas";
import BethesdaProjectsReviews from "@/components/redesign/service-area/BethesdaProjectsReviews";
import LocationCosts from "@/components/redesign/service-location/LocationCosts";
import ServiceLocationPage from "@/components/redesign/service-location/ServiceLocationPage";
import BethesdaKitchenCostDrivers from "./BethesdaKitchenCostDrivers";
import BethesdaKitchenDesign from "./BethesdaKitchenDesign";
import BethesdaKitchenFaq from "./BethesdaKitchenFaq";
import BethesdaKitchenPermits from "./BethesdaKitchenPermits";
import BethesdaKitchenRelatedWork from "./BethesdaKitchenRelatedWork";
import BethesdaKitchenServices from "./BethesdaKitchenServices";
import BethesdaKitchenTimeline from "./BethesdaKitchenTimeline";
import bethesdaKitchenContent from "./content";

export default function KitchenRemodelingBethesda() {
  return (
    <ServiceLocationPage {...bethesdaKitchenContent.hero}>
      <BethesdaKitchenServices />
      <LocationCosts {...bethesdaKitchenContent.costs} />
      <BethesdaKitchenCostDrivers />
      <InHomeConsultation
        id="service-location-consultation"
        headingId="bethesda-kitchen-consultation-title"
        title="Get an itemized price for your Bethesda kitchen."
        text="Every quote is itemized in writing after the free in-home consultation."
        ctaLabel="Book a Free Consultation"
      />
      <BethesdaKitchenDesign />
      <FiveSteps
        title={bethesdaKitchenContent.process.title}
        text={bethesdaKitchenContent.process.text}
        steps={bethesdaKitchenContent.process.steps}
        durations={bethesdaKitchenContent.process.durations}
        contactTitle="Weekly Project Updates"
        contactText="You get a short written update from your project lead each week."
        contactCtaLabel="Start With Step 1"
      />
      <BethesdaKitchenTimeline />
      <BethesdaKitchenPermits />
      <BethesdaProjectsReviews
        project={{
          badgeLabel: "Case Studies & Projects",
          location: "Bethesda, MD",
          image: "/images/projects-galary/calvert-st-kitchen/1.jpg",
          imageAlt: "Remodeled kitchen in Bethesda, Maryland",
          title: "Kitchen Remodeling Projects in Bethesda",
          text: "Our kitchen work across Bethesda and the surrounding area, from galley updates to open-plan conversions, is shown with before and after photos on our remodeling projects page.",
          primaryLabel: "See before and after photos",
          primaryHref: "/projects",
        }}
        reviews={{
          badgeLabel: "Testimonials",
          title: "What Bethesda Homeowners Say",
          score: "4.9",
          text: "We hold a 4.9-star rating on Google. Bethesda clients tell their own stories on our client reviews page.",
          googleCtaLabel: "Read Reviews on Google",
          secondaryLabel: "Client Stories",
          secondaryHref: "/testimonials",
        }}
      />
      <LicensedInsured variant="bethesda-kitchen" />
      <BethesdaKitchenRelatedWork />
      <BethesdaNearbyAreas
        eyebrow="Nearby Areas"
        title="Kitchen Remodeling Near Bethesda"
        text="We also remodel kitchens in the communities around Bethesda:"
        areas={[
          {
            eyebrow: "Montgomery County",
            name: "Chevy Chase",
            text: "Where town approval is often added to the county permit, our kitchen remodeling in Chevy Chase page explains the extra step.",
            linkLabel: "Kitchen remodeling in Chevy Chase",
            href: "/service/kitchen-remodeling/chevy-chase-md",
          },
          {
            eyebrow: "Montgomery County",
            name: "Potomac",
            text: "Large custom kitchens with high-end finishes; see kitchen remodeling in Potomac.",
            linkLabel: "Kitchen remodeling in Potomac",
            href: "/service/kitchen-remodeling/potomac-md",
          },
          {
            eyebrow: "Near Our Office",
            name: "North Bethesda",
            text: "Townhomes and condos close to our Grand Park Avenue office.",
            linkLabel: "Kitchen remodeling in North Bethesda",
            href: "/service/kitchen-remodeling",
          },
        ]}
        noteText="If the bathroom or basement is next on your list, that work can share the same Bethesda crew and contract."
        noteLinks={[
          { label: "Bathroom remodeling", href: "/service/bathroom-remodeling" },
          { label: "Basement remodeling", href: "/service/basement-remodeling" },
        ]}
      />
      <BethesdaKitchenFaq />
      <Estimate variant="bethesda-kitchen" />
    </ServiceLocationPage>
  );
}
