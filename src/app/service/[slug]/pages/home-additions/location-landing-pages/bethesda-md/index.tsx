import Estimate from "@/components/Home/Estimate/Estimate";
import FiveSteps from "@/components/Home/FiveSteps/FiveSteps";
import LicensedInsured from "@/components/Home/LicensedInsured/LicensedInsured";
import BethesdaNearbyAreas from "@/components/ServiceArea/BethesdaNearbyAreas";
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
    <ServiceLocationPage {...bethesdaHomeAdditionContent.hero}>
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
          image: "/images/projects-galary/michelle-rieff/8.webp",
          imageAlt: "Home additions in Bethesda, MD",
          title: "Home Addition Projects in Bethesda",
          text: "Our build-out work lives on our projects page: see a Chevy Chase rear addition, a Kensington two-story addition and a Rockville side extension, each with photos.",
          primaryLabel: "Read more on our projects page",
          primaryHref: "/projects",
        }}
        reviews={{
          badgeLabel: "Testimonials",
          title: "What Bethesda Homeowners Say",
          score: "4.9",
          text: (
            <>
              5-star rated by Google reviewers
              <br />
              Our 4.9-star Google rating reflects the way we work across Montgomery County. Homeowners describe the
              process in their own words on our client reviews page.
            </>
          ),
          googleCtaLabel: "Read Reviews on Google",
          secondaryLabel: "Read Client Stories",
          secondaryHref: "/testimonials",
        }}
      />
      <LicensedInsured variant="bethesda-home-additions" />
      <BethesdaHomeAdditionRelatedWork />
      <BethesdaNearbyAreas
        eyebrow="Area We Serve"
        title="Home Additions in and Around Bethesda"
        text="We build additions across Bethesda and the neighborhoods around us:"
        areas={[
          {
            eyebrow: "Washington, DC",
            name: "Washington, DC",
            text: "A rowhouse addition here follows DC zoning and permit rules, not Montgomery County's.",
            linkLabel: "Home additions in Washington, DC",
            href: "/service/home-additions/washington-dc",
          },
          {
            eyebrow: "Silver Spring, MD",
            name: "Silver Spring, MD",
            text: "A shorter commute and more house for the money drive many additions here.",
            linkLabel: "Home additions in Silver Spring",
            href: "/service/home-additions/silver-spring-md",
          },
          {
            eyebrow: "Chevy Chase, MD",
            name: "Chevy Chase, MD",
            text: "Town approval can sit on top of the county permit, so we check both early.",
            linkLabel: "Home additions in Chevy Chase",
            href: "/service/home-additions/chevy-chase-md",
          },
          {
            eyebrow: "North Bethesda, MD",
            name: "North Bethesda, MD",
            text: "Close to our office, so design meetings and site checks are easy to arrange.",
            linkLabel: "Home additions in North Bethesda",
            href: "/service/home-additions/north-bethesda-md",
          },
        ]}
        noteText={"Where we work in Maryland and Washington, DC\nOur countywide general contractor page covers permits in Montgomery County, while our Washington, DC general contracting page covers permitting there."}
        noteLinks={[
          { label: "countywide general contractor page", href: "/service/design-build" },
          { label: "Washington, DC general contracting page", href: "/service/home-additions/washington-dc" },
        ]}
      />
      <BethesdaHomeAdditionFaq />
      <Estimate variant="bethesda-home-additions" />
    </ServiceLocationPage>
  );
}
