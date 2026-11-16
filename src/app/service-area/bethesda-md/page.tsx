import type { Metadata } from "next";
import Estimate from "@/components/redesign/home/estimate/Estimate";
import FiveSteps from "@/components/redesign/home/five-steps/FiveSteps";
import HomeFaq from "@/components/redesign/home/home-faq/HomeFaq";
import InHomeConsultation from "@/components/redesign/home/in-home-consultation/InHomeConsultation";
import LicensedInsured from "@/components/redesign/home/licensed-insured/LicensedInsured";
import HomeServices from "@/components/redesign/home/services/Services";
import BethesdaContractorValue from "@/components/redesign/service-area/BethesdaContractorValue";
import BethesdaGuide from "@/components/redesign/service-area/BethesdaGuide";
import BethesdaNearbyAreas from "@/components/redesign/service-area/BethesdaNearbyAreas";
import BethesdaProjectsReviews from "@/components/redesign/service-area/BethesdaProjectsReviews";
import HomesMatrix from "@/components/redesign/service-area/HomesMatrix";
import ServiceAreaPage from "@/components/redesign/service-area/ServiceAreaPage";
import SupportingServices from "@/components/redesign/service-area/SupportingServices";

export const metadata: Metadata = {
  title: "General Contractor & Home Remodeling in Bethesda, MD | DMV General Contracting Group",
  description:
    "Licensed general contractor in Bethesda, MD for kitchens, bathrooms, basements, additions and whole-home renovations. MHIC #156178 and DC DLCP #410526000209. Call (240) 730-1292.",
  alternates: {
    canonical: "/service-area/bethesda-md",
  },
};

export default function BethesdaServiceAreaPage() {
  return (
    <ServiceAreaPage
      areaName="Bethesda, MD"
      badgeLabel="Service Area · Bethesda, MD"
      title="General Contractor & Home Remodeling in"
      titleAccent="Bethesda, MD"
      intro="DMV General Contracting Group is a licensed general contractor in Bethesda, MD, with an office a few miles up Rockville Pike in North Bethesda. Bethesda houses and condos are most of our workload, from a single bath to a full gut renovation. You see the complete price, broken out by line, before anyone picks up a tool."
      credentials={[
        "MHIC #156178",
        "DC DLCP #410526000209",
        "4.9 out of 5 on Google",
        "1-year workmanship warranty",
      ]}
      factsTitle="Working With Us in Bethesda"
      factsSubtitle="6 essential operational facts"
      facts={[
        {
          label: "Maryland license",
          value: "MHIC #156178",
        },
        {
          label: "Google rating",
          value: "4.9 out of 5",
        },
        {
          label: "Warranty",
          value: "1 year on workmanship",
        },
        {
          label: "Minimum project size",
          value: "None",
        },
        {
          label: "Permits we pull",
          value: "Montgomery County DPS building permits and WSSC Water plumbing and gas permits",
        },
        {
          label: "Office",
          value: "11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852",
        },
      ]}
    >
      <HomeServices
        eyebrow="Services"
        title="Home Remodeling Services in Bethesda, MD"
        text="Our home remodeling in Bethesda, MD covers seven core services. Each runs under one project lead with our in-house designers, permit staff and licensed trades:"
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
            eyebrow: "Kitchen remodeling in Bethesda",
            title: "Kitchen Remodeling",
            imageAlt: "Bethesda kitchens",
            desc: "We handle kitchen remodeling in Bethesda from design to final inspection. Jobs range from opening a closed colonial kitchen to fitting custom cabinetry and pro-style appliances into a newer house.",
          },
          {
            slug: "bathroom-remodeling",
            eyebrow: "Bathroom remodeling in Bethesda",
            title: "Bathroom Remodeling",
            desc: "We rebuild primary suites, hall baths and powder rooms with waterproofed showers and heated floors. Many older Bethesda houses also get the ducted exhaust fan they never had.",
          },
          {
            slug: "basement-remodeling",
            eyebrow: "Basement remodeling in Bethesda",
            title: "Basement Remodeling",
            desc: "We turn lower levels into family rooms, guest suites and gyms. Any planned bedroom gets a code-compliant egress window.",
          },
          {
            slug: "home-additions",
            eyebrow: "Home additions in Bethesda",
            title: "Home Additions",
            desc: "We add space behind, beside or on top of the house, from a sunroom bump-out to a second floor. Building up or out is the usual way Bethesda owners gain space without leaving their street.",
          },
          {
            slug: "adu",
            eyebrow: "ADU construction in Bethesda",
            title: "ADU Construction",
            desc: "We build accessory dwelling units, from basement apartments to backyard cottages. County zoning changes that took effect October 5, 2026 let a Bethesda ADU reach 75% of the primary home's floor area.",
          },
          {
            slug: "whole-home-renovation",
            eyebrow: "Whole-home renovation in Bethesda",
            title: "Whole-Home Renovation",
            desc: "We take on the entire house in one coordinated job when the floor plan, wiring, plumbing and surfaces are all past due. That often follows the purchase of an older Bethesda home.",
          },
          {
            slug: "design-build",
            title: "Design-Build",
            desc: "We keep design and construction under one contract, so the people who price your plans also build them. See what our design-build service includes.",
          },
        ]}
      />

      <SupportingServices
        eyebrow="Supporting Services"
        title="Beyond those seven, we handle five groups of smaller and exterior jobs around Bethesda:"
        text="Folding these trades into a larger remodel keeps them on one schedule and one invoice."
        groups={[
          {
            title: "Outdoor living",
            icon: "outdoor",
            links: [
              { label: "Deck building", href: "/service/decks" },
              { label: "Patios in Bethesda", href: "/service/patios" },
              { label: "Hardscaping in Bethesda", href: "/service/hardscaping" },
            ],
          },
          {
            title: "Structure & interiors",
            icon: "structure",
            links: [
              { label: "Framing in Bethesda", href: "/service/framing" },
              { label: "Drywall installation", href: "/service/drywall" },
              { label: "Flooring remodeling", href: "/service/flooring-remodeling" },
              { label: "Carpet installation", href: "/service/carpet-installation" },
            ],
          },
          {
            title: "Home systems",
            icon: "systems",
            links: [
              { label: "Electrical services", href: "/service/electrical-services" },
              { label: "Plumbing services", href: "/service/plumbing-services" },
              { label: "HVAC in Bethesda", href: "/service/hvac" },
            ],
          },
          {
            title: "Exterior shell",
            icon: "exterior",
            links: [
              { label: "Roofing", href: "/service/roofing" },
              { label: "Siding installation", href: "/service/siding-installation" },
              { label: "Concrete work", href: "/service/concrete" },
              { label: "Fence installation", href: "/service/fence-installation" },
            ],
          },
          {
            title: "Cleanouts",
            icon: "cleanout",
            links: [
              { label: "Junk removal in Bethesda", href: "/service/junk-removal" },
            ],
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

      <LicensedInsured variant="bethesda" />

      <BethesdaProjectsReviews />

      <BethesdaContractorValue />

      <BethesdaNearbyAreas />

      <HomeFaq variant="bethesda" />

      <Estimate />
    </ServiceAreaPage>
  );
}
