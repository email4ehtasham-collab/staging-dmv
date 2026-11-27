import Estimate from "@/components/Home/Estimate/Estimate";
import FiveSteps from "@/components/Home/FiveSteps/FiveSteps";
import InHomeConsultation from "@/components/Home/InHomeConsultation/InHomeConsultation";
import LicensedInsured from "@/components/Home/LicensedInsured/LicensedInsured";
import BethesdaNearbyAreas from "@/components/ServiceArea/BethesdaNearbyAreas";
import BethesdaProjectsReviews from "@/components/ServiceArea/BethesdaProjectsReviews";
import LocationCosts from "@/components/ServiceLocation/LocationCosts";
import ServiceLocationPage from "@/components/ServiceLocation/ServiceLocationPage";
import BethesdaKitchenCostDrivers from "./BethesdaKitchenCostDrivers";
import BethesdaKitchenDesign from "./BethesdaKitchenDesign";
import BethesdaKitchenFaq from "./BethesdaKitchenFaq";
import BethesdaKitchenLocation from "./BethesdaKitchenLocation";
import BethesdaKitchenPermits from "./BethesdaKitchenPermits";
import BethesdaKitchenRelatedWork from "./BethesdaKitchenRelatedWork";
import BethesdaKitchenServices from "./BethesdaKitchenServices";
import BethesdaKitchenTimeline from "./BethesdaKitchenTimeline";
import bethesdaKitchenContent from "./content";

export default function KitchenRemodelingBethesda() {
  return (
    <ServiceLocationPage
      {...bethesdaKitchenContent.hero}
      intro={
        <>
          DMV General Contracting Group handles <strong>kitchen remodeling in Bethesda, MD</strong> as a licensed
          design-build general contractor, so one team draws your new kitchen, files the Montgomery County permits and
          builds it, whether that means refacing cabinets or a full gut renovation.
        </>
      }
    >
      <BethesdaKitchenServices />
      <LocationCosts
        {...bethesdaKitchenContent.costs}
        text={
          <>
            <strong>Kitchen remodels in Bethesda most often fall between $35,000 and $75,000.</strong> Cosmetic updates
            fall around $15,000 to $30,000, and custom kitchens with new layouts begin near $75,000 and often pass
            $120,000. This table shows what each Bethesda budget tier includes:
          </>
        }
      />
      <BethesdaKitchenCostDrivers />
      <InHomeConsultation
        id="service-location-consultation"
        headingId="bethesda-kitchen-consultation-title"
        titleAs="strong"
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
          image: "/images/kitchen-remodeling-bethesda-md/bethesda-condo-galley-kitchen-renovation.webp",
          imageAlt: "Galley kitchen renovation in a Bethesda condo with white cabinets, a built-in desk and recessed lighting",
          title: "Kitchen Remodeling Projects in Bethesda",
          text: "This Bethesda condo galley kitchen now has white cabinets, a built-in desk and recessed lighting. More kitchens, from galley updates to open-plan conversions, are shown with before and after photos on our remodeling projects page.",
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
      <BethesdaKitchenLocation />
      <BethesdaNearbyAreas
        eyebrow="Nearby Areas"
        title="Kitchen Remodeling Near Bethesda"
        text="We also remodel kitchens in the communities around Bethesda:"
        areas={[
          {
            eyebrow: "Montgomery County",
            name: "Chevy Chase",
            zips: "20815",
            text: "Town approval is often added to the county permit, and our Chevy Chase page explains the extra step.",
            linkLabel: "Chevy Chase",
            href: "/service/kitchen-remodeling/chevy-chase-md",
          },
          {
            eyebrow: "Montgomery County",
            name: "Potomac",
            zips: "20854",
            text: "Large custom kitchens with high-end finishes on bigger lots west of Bethesda.",
            linkLabel: "Potomac",
            href: "/service/kitchen-remodeling/potomac-md",
          },
          {
            eyebrow: "Near Our Office",
            name: "North Bethesda",
            zips: "20852",
            text: "Townhomes and condos close to our Grand Park Avenue office.",
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
