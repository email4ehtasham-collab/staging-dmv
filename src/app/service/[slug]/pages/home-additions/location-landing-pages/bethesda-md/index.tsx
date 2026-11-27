import Estimate from "@/components/Home/Estimate/Estimate";
import FiveSteps from "@/components/Home/FiveSteps/FiveSteps";
import LicensedInsured from "@/components/Home/LicensedInsured/LicensedInsured";
import BethesdaNearbyAreas from "@/components/ServiceArea/BethesdaNearbyAreas";
import BethesdaOfficeLocation from "@/components/ServiceArea/BethesdaOfficeLocation";
import BethesdaProjectsReviews from "@/components/ServiceArea/BethesdaProjectsReviews";
import ServiceLocationPage from "@/components/ServiceLocation/ServiceLocationPage";
import BethesdaHomeAdditionCosts from "./BethesdaHomeAdditionCosts";
import BethesdaHomeAdditionFaq from "./BethesdaHomeAdditionFaq";
import BethesdaHomeAdditionPermits from "./BethesdaHomeAdditionPermits";
import BethesdaHomeAdditionRelatedWork from "./BethesdaHomeAdditionRelatedWork";
import BethesdaHomeAdditionServices from "./BethesdaHomeAdditionServices";
import BethesdaHomeAdditionStructure from "./BethesdaHomeAdditionStructure";
import BethesdaHomeAdditionTimeline from "./BethesdaHomeAdditionTimeline";
import BethesdaHomeAdditionUpOrOut from "./BethesdaHomeAdditionUpOrOut";
import bethesdaHomeAdditionContent from "./content";

export default function HomeAdditionsBethesdaMd() {
  return (
    <ServiceLocationPage
      {...bethesdaHomeAdditionContent.hero}
      intro={
        <>
          DMV General Contracting Group builds <strong>home additions in Bethesda, MD</strong> as a licensed
          design-build general contractor from our North Bethesda office. We check the zoning on your lot, engineer the
          structure, file the Montgomery County permits and build the addition under one contract.
        </>
      }
    >
      <BethesdaHomeAdditionServices />
      <BethesdaHomeAdditionUpOrOut />
      <BethesdaHomeAdditionCosts />
      <BethesdaHomeAdditionPermits />
      <BethesdaHomeAdditionStructure />
      <FiveSteps
        title={bethesdaHomeAdditionContent.process.title}
        text={bethesdaHomeAdditionContent.process.text}
        steps={bethesdaHomeAdditionContent.process.steps}
        showContact={false}
      />
      <BethesdaHomeAdditionTimeline />
      <BethesdaProjectsReviews
        project={{
          badgeLabel: "Case Studies & Projects",
          location: "Bethesda, MD",
          image: "/images/home-additions-bethesda-md/bethesda-home-addition-contractor-screened-porch-interior.webp",
          imageAlt: "Inside a screened porch addition over a garage in Chevy Chase, MD, with a ceiling fan and white railings",
          title: "Home Addition Projects in Bethesda",
          text: "Our nearest finished addition is a screened porch built over a garage in Chevy Chase, next door to Bethesda. More of our work is on the projects page.",
          primaryLabel: "See our remodeling projects",
          primaryHref: "/projects",
        }}
        reviews={{
          badgeLabel: "Testimonials",
          title: "What Bethesda Homeowners Say",
          score: "4.9",
          text: "Our 4.9-star Google rating reflects the way we work across Montgomery County. Homeowners describe the process in their own words on our client reviews page.",
          googleCtaLabel: "Read Reviews on Google",
          secondaryLabel: "Read Client Stories",
          secondaryHref: "/testimonials",
        }}
      />
      <LicensedInsured variant="bethesda-home-additions" />
      <BethesdaHomeAdditionRelatedWork />
      <BethesdaOfficeLocation
        title="Home Additions Across Bethesda, MD"
        workNoun="additions"
        mapTitle="DMV General Contracting Group LLC | Home Additions in Bethesda, MD"
      />
      <BethesdaNearbyAreas
        eyebrow="Area We Serve"
        title="Home Additions in and Around Bethesda"
        text="We build additions across Bethesda and the neighborhoods around us:"
        areas={[
          {
            eyebrow: "Montgomery County",
            name: "Chevy Chase",
            zips: "20815",
            text: "Town approval can sit on top of the county permit, so we check both early.",
            linkLabel: "Chevy Chase",
            href: "/service/home-additions/chevy-chase-md",
          },
          {
            eyebrow: "Near Our Office",
            name: "North Bethesda",
            zips: "20852",
            text: "Close to our office, so design meetings and site checks are easy to arrange.",
            linkLabel: "North Bethesda",
            href: "/service/home-additions/north-bethesda-md",
          },
          {
            eyebrow: "Montgomery County",
            name: "Silver Spring",
            zips: "20901, 20910",
            text: "A shorter commute and more house for the money drive many additions here.",
            linkLabel: "Silver Spring",
            href: "/service/home-additions/silver-spring-md",
          },
        ]}
        noteText="Wherever you live in the area, the same team, contract terms and warranty apply."
      />
      <BethesdaHomeAdditionFaq />
      <Estimate variant="bethesda-home-additions" />
    </ServiceLocationPage>
  );
}
