import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/resolve";
import Link from "next/link";
import Estimate from "@/components/Home/Estimate/Estimate";
import FiveSteps from "@/components/Home/FiveSteps/FiveSteps";
import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";
import InHomeConsultation from "@/components/Home/InHomeConsultation/InHomeConsultation";
import LicensedInsured from "@/components/Home/LicensedInsured/LicensedInsured";
import ClientReviews from "@/components/Home/ClientReviews/ClientReviews";
import HomeServices from "@/components/Home/Services/Services";
import BethesdaContractorValue from "@/components/ServiceArea/BethesdaContractorValue";
import BethesdaGuide from "@/components/ServiceArea/BethesdaGuide";
import BethesdaNearbyAreas from "@/components/ServiceArea/BethesdaNearbyAreas";
import AreaProjectsGrid from "@/components/ServiceArea/AreaProjectsGrid";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/data/home/homePageMedia";
import HomesMatrix from "@/components/ServiceArea/HomesMatrix";
import ServiceAreaPage from "@/components/ServiceArea/ServiceAreaPage";
import PageSchema from "@/components/Schema/PageSchema";
import BethesdaOfficeLocation from "@/components/ServiceArea/BethesdaOfficeLocation";
import { withOgImage } from "@/data/seo/ogImages";

const baseMetadata: Metadata = {
  title: "General Contractor in Bethesda, MD | Home Remodeling",
  description:
    "Licensed general contractor in Bethesda, MD for kitchens, baths, basements, additions and ADUs. Permits and construction under one contract. Free estimate.",
  alternates: {
    canonical: "/service-area/bethesda-md",
  },
};

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/service-area/bethesda-md", baseMetadata).then((metadata) => withOgImage(metadata, "/service-area/bethesda-md"));
}

export default function BethesdaServiceAreaPage() {
  return (
    <ServiceAreaPage
      areaName="Bethesda, MD"
      badgeLabel="Service Area · Bethesda, MD"
      title="General Contractor & Home Remodeling in"
      titleAccent="Bethesda, MD"
      intro={
        <>
          DMV General Contracting Group is a <strong>licensed general contractor in Bethesda, MD</strong>, with an office a few
          miles up Rockville Pike in North Bethesda. Bethesda houses and condos are most of our workload, from a single bath to
          a full gut renovation. You see the complete price, broken out by line, before anyone picks up a tool.
        </>
      }
      credentials={[
        "MHIC #156178",
        "DC DLCP #410526000209",
        "4.9 on Google (59 reviews)",
        "1-year workmanship warranty",
      ]}
      heroImage="/images/service-area/bethesda-md/general-contractor-bethesda-md.webp"
      heroImageAlt="General contractor remodeling a home in Bethesda, MD"
      glance={[
        { label: "Maryland license", value: "MHIC #156178" },
        { label: "Workmanship warranty", value: "1 year" },
        { label: "Minimum project size", value: "None" },
        { label: "Permits", value: "DPS and WSSC Water" },
      ]}
      glanceLink={{ label: "See Bethesda Pricing", href: "#costs" }}
      reviewText="Bethesda homeowners rate our work 4.9 on Google (59 reviews)."
    >
      <HomeServices
        eyebrow="Services"
        title="Home Remodeling Services in Bethesda, MD"
        citySlug="bethesda-md"
        showCardEyebrow={false}
        text={
          <>
            Our <strong>home remodeling in Bethesda, MD</strong> covers seven core services. Each runs under one project lead with
            our in-house designers, permit staff and licensed trades:
          </>
        }
        align="center"
        serviceOrder={[
          "kitchen-remodeling",
          "bathroom-remodeling",
          "basement-remodeling",
          "home-additions",
          "adu",
          "whole-home-renovation",
          "design-build",
        ]}
        serviceOverrides={[
          {
            slug: "kitchen-remodeling",
            image: "/images/service-area/bethesda-md/kitchen-remodeling-bethesda-md.webp",
            imageAlt: "Kitchen remodeling in Bethesda, MD",
            eyebrow: "Kitchen remodeling in Bethesda",
            title: "Kitchen Remodeling",
            desc: "We handle kitchen remodeling in Bethesda from design to final inspection. Jobs range from opening a closed colonial kitchen to fitting custom cabinetry and pro-style appliances into a newer house.",
          },
          {
            slug: "bathroom-remodeling",
            image: "/images/service-area/bethesda-md/bathroom-remodeling-bethesda-md.webp",
            imageAlt: "Bathroom remodeling in Bethesda, MD",
            eyebrow: "Bathroom remodeling in Bethesda",
            title: "Bathroom Remodeling",
            desc: "We rebuild primary suites, hall baths and powder rooms with waterproofed showers and heated floors. Many older Bethesda houses also get the ducted exhaust fan they never had.",
          },
          {
            slug: "basement-remodeling",
            image: "/images/service-area/bethesda-md/basement-remodeling-bethesda-md.webp",
            imageAlt: "Basement remodeling in Bethesda, MD",
            eyebrow: "Basement remodeling in Bethesda",
            title: "Basement Remodeling",
            desc: "We turn lower levels into family rooms, guest suites and gyms. Any planned bedroom gets a code-compliant egress window.",
          },
          {
            slug: "home-additions",
            image: "/images/service-area/bethesda-md/home-additions-bethesda-md.webp",
            imageAlt: "Home addition in Bethesda, MD",
            eyebrow: "Home additions in Bethesda",
            title: "Home Additions",
            desc: "We add space behind, beside or on top of the house, from a sunroom bump-out to a second floor. Building up or out is the usual way Bethesda owners gain space without leaving their street.",
          },
          {
            slug: "adu",
            image: "/images/service-area/bethesda-md/adu-construction-bethesda-md.webp",
            imageAlt: "Accessory dwelling unit built in Bethesda, MD",
            eyebrow: "ADU construction in Bethesda",
            title: "ADU Construction",
            desc: "We build accessory dwelling units, from basement apartments to backyard cottages. County zoning changes that took effect October 5, 2026 let a Bethesda ADU reach 75% of the primary home's floor area.",
          },
          {
            slug: "whole-home-renovation",
            image: "/images/service-area/bethesda-md/whole-home-renovation-bethesda-md.webp",
            imageAlt: "Whole-home renovation in Bethesda, MD",
            eyebrow: "Whole-home renovation in Bethesda",
            title: "Whole-Home Renovation",
            desc: "We take on the entire house in one coordinated job when the floor plan, wiring, plumbing and surfaces are all past due. That often follows the purchase of an older Bethesda home.",
          },
          {
            slug: "design-build",
            image: "/images/service-area/bethesda-md/design-build-remodeling-bethesda-md.webp",
            imageAlt: "Design-build remodeling in Bethesda, MD",
            title: "Design-Build",
            desc: "We keep design and construction under one contract, so the people who price your plans also build them. See what our design-build service includes.",
          },
        ]}
      />

      <HomesMatrix
        eyebrow="Bethesda Homes"
        title="Bethesda Homes and the Remodels They Need"
        intro="Bethesda's streets mix Colonial Revival, Cape Cod, Tudor and mid-century houses with newer custom homes built on teardown lots. This table matches each Bethesda home type to its usual project:"
        rows={[
          {
            type: "Brick colonials",
            find: "Closed kitchens, small baths and limited closet space",
            project: "Opening the kitchen to the family room, or a primary suite addition",
          },
          {
            type: "Cape Cods",
            find: "Low upper-floor ceilings and small dormer rooms",
            project: "Full dormers, second-story additions and bathroom upgrades",
          },
          {
            type: "Tudors and other prewar houses",
            find: "Plaster walls, aging wiring and plumbing, steep roofs",
            project: "Systems upgrades combined with careful kitchen and bath work",
          },
          {
            type: "Mid-century ramblers and split-levels",
            find: "Original floor plans, single-pane glass and dated systems",
            project: "Layout changes, new HVAC, kitchens and baths",
          },
          {
            type: "Newer infill houses",
            find: "Sound structure with builder-grade finishes",
            project: "Basement finishing, finish upgrades and outdoor living",
          },
          {
            type: "Downtown condos and townhomes",
            find: "Building rules, shared walls and set work hours",
            project: "Full condo renovations, kitchens and baths",
          },
        ]}
        whyTitle="Why It Matters"
        whyText="A house's age tells us where to expect old wiring, plaster or undersized beams. Those items go into the estimate instead of becoming change orders."
      />

      <BethesdaGuide />

      <InHomeConsultation
        headingId="bethesda-site-visit-title"
        title="Turn the Bethesda ranges into an exact price."
        text="After a site visit, these broad bands become exact figures for each part of your job."
        ctaLabel="Book a Site Visit"
      />

      <FiveSteps
        title="Our Process and Timeline"
        text="Whatever the size, a Bethesda contract follows this sequence:"
        steps={[
          {
            number: "01",
            title: "Consultation",
            side: "left",
            text: "We visit the house, measure each room, note your goals and agree on a working budget.",
          },
          {
            number: "02",
            title: "Design and estimate",
            side: "right",
            text: "Our in-house designers and engineers draw the plan, and you receive a fixed, line-item price.",
          },
          {
            number: "03",
            title: "Permits",
            side: "left",
            text: "We file with DPS and WSSC Water, plus any town or historic review your address needs.",
          },
          {
            number: "04",
            title: "Construction",
            side: "right",
            text: "A single lead supervises the site and emails you a progress summary every week.",
          },
          {
            number: "05",
            title: "Handover",
            side: "left",
            text: "Once DPS signs off, you tour the finished rooms with us, and the 1-year workmanship warranty clock starts.",
          },
        ]}
        durations={[
          {
            value: "3–14 wks",
            text: "On site, a Bethesda kitchen or bath runs roughly 3 to 14 weeks after permit approval.",
          },
          {
            value: "Months",
            text: "Additions and whole-home projects run for several months.",
          },
        ]}
        showContact={false}
      />

      <ClientReviews id="home-reviews" title="What Bethesda Homeowners Say" />
      <LicensedInsured variant="bethesda" />

      <AreaProjectsGrid
        badgeLabel="Projects in Bethesda"
        title="Our Remodeling Projects"
        slugs={[
          "bethesda-condo-full-renovation",
          "robert-b-porch-addition-over-garage",
          "michelle-r-dual-bathroom-transformation",
          "teresa-f-modern-bathroom-transformation",
          "gabriella-w-kitchen-bath-renaissance",
          "julia-mike-complete-kitchen-living-renovation-new-hvac",
          "colin-nicole-merging-two-units",
          "dave-bathroom-reimagined",
          "jennifer-a-bathroom-built-comfort",
          "kevin-w-convenient-half-bath",
          "ronnie-r-kitchen-revival-plumbing-crisis",
        ]}
      />

      <BethesdaContractorValue />

      <BethesdaNearbyAreas />

      <BethesdaOfficeLocation
        title="Our Office and Directions From Downtown Bethesda"
        workNoun="home remodels"
        mapTitle="DMV General Contracting Group LLC | General Contractor in Bethesda, MD"
        mapUrl="https://www.google.com/maps/d/embed?mid=1ufPHEgzYlIm76iKaJLzOGktl1z2ij24&ehbc=2E312F&noprof=1"
      />

      <HomeFaq variant="bethesda" />

      <Estimate
        content={{
          title: "Hire a Licensed General Contractor in Bethesda, MD",
          text: (
            <>
              High-end remodels need a <strong>licensed general contractor in Bethesda, MD</strong> who manages design,
              permits and every trade. DMV General Contracting Group brings that approach to kitchens, baths, basements,
              additions and whole homes across Bethesda.
            </>
          ),
          intro: (
            <>
              Ask for your <Link href="/contact-us">free estimate</Link> online, or ring{" "}
              <a href="tel:+12407301292">(240) 730-1292</a> on a Saturday or Sunday if that suits you better.
            </>
          ),
          contact: (
            <>
              <a href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                DMV General Contracting Group LLC, 11810 Grand Park Ave #500, North Bethesda, MD 20852
              </a>
              . Phone <a href="tel:+12407301292">(240) 730-1292</a>. Email{" "}
              <a href="mailto:support@dmv-gc.com">support@dmv-gc.com</a>. Open 7 days a week.
            </>
          ),
        }}
      />

      <PageSchema path="/service-area/bethesda-md" />
    </ServiceAreaPage>
  );
}
