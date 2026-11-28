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
import BethesdaNearbyAreas from "@/components/ServiceArea/BethesdaNearbyAreas";
import DcGuide from "@/components/ServiceArea/DcGuide";
import DcProjectsReviews from "@/components/ServiceArea/DcProjectsReviews";
import HomesMatrix from "@/components/ServiceArea/HomesMatrix";
import ServiceAreaPage from "@/components/ServiceArea/ServiceAreaPage";
import PageSchema from "@/components/Schema/PageSchema";
import BethesdaOfficeLocation from "@/components/ServiceArea/BethesdaOfficeLocation";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/data/home/homePageMedia";
import { withOgImage } from "@/data/seo/ogImages";

const baseMetadata: Metadata = {
  title: "General Contractor in Washington, DC | Home Remodeling",
  description:
    "Licensed general contractor in Washington, DC for rowhouse, condo and historic home remodels. DOB permits handled. Kitchens from $35,000. Free estimate.",
  alternates: {
    canonical: "/service-area/washington-dc",
  },
};

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/service-area/washington-dc", baseMetadata).then((metadata) => withOgImage(metadata, "/service-area/washington-dc"));
}

export default function WashingtonDcServiceAreaPage() {
  return (
    <ServiceAreaPage
      areaName="Washington, DC"
      badgeLabel="Service Area · Washington, DC"
      title="General Contractor & Home Remodeling in"
      titleAccent="Washington, DC"
      intro={
        <>
          For rowhouse and condo owners in the District, DMV General Contracting Group is the licensed residential{" "}
          <strong>general contractor in Washington, DC</strong>. We design, permit and build remodels of rowhouses, condos and historic homes under one contract. Typical District jobs are English basement conversions, rowhouse kitchens, new baths, rear additions and full-house renovations, and our team brings 35 years of work on older homes to each one.
        </>
      }
      credentials={[
        "DC DLCP #410526000209",
        "MHIC #156178",
        "4.9 on Google (59 reviews)",
        "1-year workmanship warranty",
      ]}
      heroImage="/images/service-area/washington-dc/general-contractor-washington-dc.webp"
      heroImageAlt="General contractor remodeling a rowhouse in Washington, DC"
      glance={[
        { label: "DC DLCP license", value: "#410526000209" },
        { label: "Permit agency", value: "DC DOB" },
        { label: "Historic review", value: "Handled in-house" },
        { label: "Workmanship warranty", value: "1 year" },
      ]}
      glanceLink={{ label: "See DC Pricing", href: "#costs" }}
      reviewText="District homeowners rate our work 4.9 on Google (59 reviews)."
    >
      <PageSchema path="/service-area/washington-dc" />

      <HomeServices
        eyebrow="Services"
        title="Home Remodeling Services in Washington, DC"
        citySlug="washington-dc"
        showCardEyebrow={false}
        text={
          <>
            Our <strong>home remodeling in Washington, DC</strong> covers seven core services, each adapted to the way District
            houses were built:
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
            image: "/images/service-area/washington-dc/kitchen-remodeling-washington-dc.webp",
            eyebrow: "Kitchen remodeling in Washington, DC",
            title: "Kitchen Remodeling",
            href: "/service/kitchen-remodeling/washington-dc",
            imageAlt: "Rowhouse kitchen remodeling in Washington, DC",
            desc: "We rework narrow rowhouse kitchens, often opening them to the dining room. Our kitchen remodeling in Washington, DC page shows the usual layouts and costs.",
          },
          {
            slug: "bathroom-remodeling",
            image: "/images/service-area/washington-dc/bathroom-remodeling-washington-dc.webp",
            eyebrow: "Bathroom remodeling in Washington, DC",
            title: "Bathroom Remodeling",
            href: "/service/bathroom-remodeling/washington-dc",
            imageAlt: "Bathroom remodeling in a Washington, DC rowhouse",
            desc: "We fit new baths into tight rowhouse plans and older condo stacks. The bathroom remodeling in Washington, DC page explains how we work around shared risers.",
          },
          {
            slug: "basement-remodeling",
            image: "/images/service-area/washington-dc/basement-remodeling-washington-dc.webp",
            eyebrow: "Basement remodeling in Washington, DC",
            title: "Basement Remodeling",
            href: "/service/basement-remodeling/washington-dc",
            imageAlt: "English basement conversion in Washington, DC",
            desc: "We convert English basements and cellars into family rooms or rentable units. Separate entrances and ceiling heights are covered on the basement remodeling in Washington, DC page.",
          },
          {
            slug: "home-additions",
            image: "/images/service-area/washington-dc/home-additions-washington-dc.webp",
            eyebrow: "Home additions in Washington, DC",
            title: "Home Additions",
            href: "/service/home-additions/washington-dc",
            imageAlt: "Rear home addition on a Washington, DC house",
            desc: "We design rear additions and pop-ups that stay within DC height and lot occupancy limits, as set out on our home additions in Washington, DC page.",
          },
          {
            slug: "adu",
            image: "/images/service-area/washington-dc/adu-construction-washington-dc.webp",
            eyebrow: "ADUs in Washington, DC",
            title: "ADU Construction",
            href: "/service/adu/washington-dc",
            imageAlt: "Accessory dwelling unit built in Washington, DC",
            desc: "We build carriage-house units and basement apartments, which DC zoning has allowed by right in certain residential zones since 2016. Read about ADUs in Washington, DC.",
          },
          {
            slug: "whole-home-renovation",
            image: "/images/service-area/washington-dc/whole-home-renovation-washington-dc.webp",
            eyebrow: "Whole-home renovation in Washington, DC",
            title: "Whole-Home Renovation",
            imageAlt: "Whole-home renovation of a Washington, DC rowhouse",
            desc: "We gut and rebuild rowhouses and condos room by room on one schedule when every system is due.",
          },
          {
            slug: "design-build",
            image: "/images/service-area/washington-dc/design-build-remodeling-washington-dc.webp",
            eyebrow: "Design-build remodeling",
            title: "Design-Build",
            imageAlt: "Design-build remodeling project in Washington, DC",
            desc: "We keep drawings, DOB filings and construction under one contract with design-build remodeling.",
          },
        ]}
      />

      <HomesMatrix
        eyebrow="DC Homes"
        title="DC Homes and the Projects They Need"
        intro="Much of DC's housing is rowhouses and semi-detached homes built between the late 1800s and the 1940s. Condo buildings and detached houses in Upper Northwest fill out the mix. What turns up behind the walls, and the work it leads to:"
        rows={[
          {
            type: "Rowhouses",
            find: "Narrow, deep floor plans, shared party walls and aging systems",
            project: "Open plans, rear additions and English basement conversions",
          },
          {
            type: "English basements",
            find: "Low ceilings, damp walls and a separate entrance",
            project: "Waterproofing, new layouts and rental-ready units",
          },
          {
            type: "Semi-detached homes",
            find: "One shared wall with small kitchens and baths",
            project: "Kitchen and bath remodels and rear decks",
          },
          {
            type: "Condos",
            find: "Shared risers, management sign-off and quiet-hour rules",
            project: "Interior renovations with board approval",
          },
          {
            type: "Historic homes",
            find: "Original millwork, plaster and windows",
            project: "Restoration and updates within historic rules",
          },
          {
            type: "Detached homes in Upper Northwest",
            find: "Larger lots and 1920s–1950s construction",
            project: "Additions and whole-house updates",
          },
        ]}
        whyTitle="What We Check First"
        whyText="Party walls and shared risers most often separate a DC project from a suburban one, so we inspect both on the first visit."
      />

      <DcGuide />

      <InHomeConsultation
        headingId="dc-site-visit-title"
        title="Turn the DC ranges into an exact price."
        text="After a site visit, these broad bands become exact figures for each part of your job."
        ctaLabel="Book a Site Visit"
      />

      <FiveSteps
        title="Our Process and Timeline in DC"
        text="District projects move through five steps:"
        steps={[
          {
            number: "01",
            title: "Consultation",
            side: "left",
            text: "We look at the house, the party walls and the basement, then talk through what you want and what it might cost.",
          },
          {
            number: "02",
            title: "Design",
            side: "right",
            text: "Our own architects and engineers produce measured drawings and party-wall details, with a fixed price broken out by line.",
          },
          {
            number: "03",
            title: "DOB permit and reviews",
            side: "left",
            text: "We file with DOB and, where needed, the Historic Preservation Office, the Commission of Fine Arts or your condo board.",
          },
          {
            number: "04",
            title: "Build",
            side: "right",
            text: "Our crews work within permitted hours and building rules, led by one project lead.",
          },
          {
            number: "05",
            title: "Final inspection",
            side: "left",
            text: "DOB's final sign-off triggers a joint walkthrough, and from that day your workmanship is covered for a year.",
          },
        ]}
        durations={[
          {
            value: "Before build",
            text: "Historic and zoning reviews add time before construction starts, so we put them into the schedule from the first meeting.",
          },
          {
            value: "1 year",
            text: "Your workmanship warranty starts on the day DOB signs off and we finish the joint walkthrough.",
          },
        ]}
        showContact={false}
      />

      <ClientReviews id="home-reviews" title="What DC Homeowners Say" />
      <LicensedInsured variant="washington-dc" />

      <DcProjectsReviews />

      <BethesdaNearbyAreas
        eyebrow="Area We Serve"
        title="Also Serving Montgomery County, MD"
        text="Three Maryland suburbs bordering the District are also regular territory for us:"
        areas={[
          {
            eyebrow: "Next to DC",
            name: "Bethesda",
            linkLabel: "General contractor in Bethesda, MD",
            href: "/service-area/bethesda-md",
            text: "Colonials, Cape Cods and downtown condos make up most of our Bethesda work.",
          },
          {
            eyebrow: "Next Door",
            name: "Chevy Chase",
            text: "Next to Chevy Chase DC, older homes there often need a town permit as well as a county one.",
          },
          {
            eyebrow: "North of the line",
            name: "Silver Spring",
            text: "Just over the line from Takoma and Shepherd Park, post-war houses there need more room below or behind.",
          },
        ]}
        noteText="Maryland jobs follow county or city permit rules instead of DOB, and we file those too."
      />

      <BethesdaOfficeLocation
        sectionId="dc-location"
        title="Our Office and Directions From Washington, DC"
        workNoun="DC remodels"
        mapTitle="DMV General Contracting Group LLC | General Contractor in Washington, DC"
        mapUrl="https://www.google.com/maps/d/embed?mid=1UYs7FUNhU54UGGMhJhXPKzMrGpAwYPw&ehbc=2E312F&noprof=1"
        text={
          <>
            Our crews work across{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Washington,_D.C.">
              Washington, DC
            </a>{" "}
            from our office in North Bethesda, just over the Maryland line. Visit us, or use the map to plan the drive.
          </>
        }
        napTitle="Our office near Washington, DC"
        directionsTitle="Driving from downtown DC"
        directions={
          <>
            <p>From downtown DC near Farragut Square, the drive follows Wisconsin Avenue north. Follow these 4 steps:</p>
            <ol>
              <li>Take Massachusetts Avenue NW northwest to Wisconsin Avenue NW.</li>
              <li>Turn right onto Wisconsin Avenue NW and continue north into Maryland through downtown Bethesda (MD-355).</li>
              <li>North of Bethesda, MD-355 becomes Rockville Pike; turn left onto Old Georgetown Road.</li>
              <li>Turn right onto Grand Park Avenue; our office is at #500.</li>
            </ol>
            <p>
              The route ends at{" "}
              <a href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                11810 Grand Park Ave #500, North Bethesda, MD 20852
              </a>
              .
            </p>
          </>
        }
      />

      <HomeFaq
        variant="washington-dc"
        title="Frequently Asked Questions"
        text="Have a question that isn't here? Call us 7 days a week."
      />

      <Estimate
        content={{
          title: "Hire a Licensed General Contractor in Washington, DC",
          text: (
            <>
              Rowhouses, condos and historic homes need a{" "}
              <strong>licensed residential general contractor in Washington, DC</strong> who treats DOB permits and
              historic review as part of the job. That is the service we bring to homeowners across the District.
            </>
          ),
          intro: (
            <>
              Book a <Link href="/contact-us">free estimate</Link> through our site or at{" "}
              <a href="tel:+12407301292">(240) 730-1292</a>, and pick a visit time that works for you, even on a
              Saturday or Sunday.
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
    </ServiceAreaPage>
  );
}
