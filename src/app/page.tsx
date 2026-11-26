import HeroBanner from "@/components/Home/HeroBanner/HeroBanner";
import AboutBar from "@/components/Home/AboutBar/AboutBar";
import About from "@/components/Home/About/About";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import Services from "@/components/Home/Services/Services";
import LicensedInsured from "@/components/Home/LicensedInsured/LicensedInsured";
import InHomeConsultation from "@/components/Home/InHomeConsultation/InHomeConsultation";
import FiveSteps from "@/components/Home/FiveSteps/FiveSteps";
import DeliveryResults from "@/components/Home/DeliveryResults/DeliveryResults";
import ServiceAreas from "@/components/Home/ServiceAreas/ServiceAreas";
import LocateUs from "@/components/Home/LocateUs/LocateUs";
import CostGuide from "@/components/Home/CostGuide/CostGuide";
import Permits from "@/components/Home/Permits/Permits";
import TradesComparison from "@/components/Home/TradesComparison/TradesComparison";
import RecentProjects from "@/components/Home/RecentProjects/RecentProjects";
import ClientReviews from "@/components/Home/ClientReviews/ClientReviews";
import HomeBlogs from "@/components/Home/HomeBlogs/HomeBlogs";
import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";
import Estimate from "@/components/Home/Estimate/Estimate";
import CtaBanner from "@/components/Home/Cta/CtaBanner";
// import ScrollUp from "@/components/Common/ScrollUp";
import NavitemActive from "@/components/Common/NavitemActive";
import { homeRecentProjects, homeServiceOverrides } from "@/data/home/homePageMedia";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "General Contractor Maryland & DC | DMV General Contracting",
  description: "Licensed general contractor in Maryland and DC for home remodeling: kitchens, baths, basements and ADUs. Most cost $60-$250+ per sq ft. Free estimate.",
  
  alternates: {
    canonical: "/",
  },
};


	const schemaDataFaq = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
			"@type": "Question",
			"name": "What services does DMV General Contracting Group offer?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "DMV General Contracting Group offers a full range of home renovation and remodeling services including kitchen remodeling, bathroom renovation, basement finishing, architectural design, home additions, ADU construction, design/build, roofing, siding, flooring, electrical, plumbing, HVAC, decks, patios, fencing, concrete, hardscaping, and junk removal. All services are handled by our licensed in-house team across Washington DC and Maryland."
			}
			},
			{
			"@type": "Question",
			"name": "Do you serve areas other than Maryland?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Yes. DMV General Contracting Group serves a wide range of cities and neighborhoods across the entire DMV area. In Maryland, we serve Bethesda, Potomac, Kensington, Silver Spring, Wheaton, Gaithersburg, Garrett Park, Rockville, Chevy Chase, North Bethesda, Cabin John, and Laurel. We also serve Washington, DC. No matter where you are in the DMV area, DMV General Contracting Group brings the same quality craftsmanship, licensed expertise, and attention to detail to every project. Contact us at +1 240-730-1292 for a free in-home consultation."
			}
			},
			{
			"@type": "Question",
			"name": "How much does a kitchen remodel cost in Bethesda, MD?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "A kitchen remodel in Bethesda, MD typically costs between $40,000 and $150,000 depending on the size and scope of the project. A minor cosmetic update starts around $30,000–$45,000, a mid-range remodel runs $55,000–$85,000, and a high-end full renovation can reach $95,000–$160,000 or more. DMV General Contracting Group offers free in-home consultations to provide an accurate estimate for your specific project."
			}
			},
			{
			"@type": "Question",
			"name": "Do you handle permits?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Yes. DMV General Contracting Group handles all permit processing in-house. Our team manages building, electrical, plumbing, and structural permits required by Montgomery County. We ensure every project is fully code-compliant from day one — so you never have to worry about permit paperwork, approvals, or inspections."
			}
			},
			{
			"@type": "Question",
			"name": "What warranty do you offer?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "DMV General Contracting Group offers a 1-year warranty on all home renovation and remodeling projects. We stand behind the quality of our work and remain available to address any concerns even after project completion. Our goal is long-term client satisfaction — not just project completion."
			}
			}
		]
	};

const schemaDataOrg = {
		"@context": "https://schema.org",
		"@graph": [
			{
			"@type": "Organization",
			"@id": "https://www.dmv-gc.com/#organization",
			"name": "DMV General Contracting Group LLC",
			"url": "https://www.dmv-gc.com/",
			"telephone": "+1-240-730-1292",
			"email": "support@dmv-gc.com"
			},
			{
			"@type": "GeneralContractor",
			"@id": "https://www.dmv-gc.com/#localbusiness",
			"name": "DMV General Contracting Group LLC",
			"legalName": "DMV General Contracting Group LLC",
			"alternateName": ["DMV General Contracting Group", "DMV-GC"],
			"url": "https://www.dmv-gc.com/",
			"parentOrganization": {
				"@id": "https://www.dmv-gc.com/#organization"
			},
			"telephone": "+1-240-730-1292",
			"email": "support@dmv-gc.com",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "11810 Grand Park Ave #500",
				"addressLocality": "North Bethesda",
				"addressRegion": "MD",
				"postalCode": "20852",
				"addressCountry": "US"
			},
			"areaServed": [
				{
					"@type": "State",
					"name": "Maryland"
				},
				{
					"@type": "City",
					"name": "Washington"
				}
			]
			}
		]
	};

export default function Home() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaDataFaq),}}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaDataOrg),}}/>
            <main className="page-wrapper page-wrapper-home">
                <NavitemActive nav="home" />
                {/* <ScrollUp /> */}
                <HeroBanner />
                <AboutBar />
                <About />
                <DeliveryResults />
                <WhatWeDo />
                <Services
                    title="Our Services for Home Remodeling in Maryland and DC"
                    text={<>We offer <strong>home remodeling in Maryland</strong> and Washington, DC through seven main services. Each one has its own page with details on design, permits, costs and timelines, and the rest of our services are listed after these seven.</>}
                    serviceOverrides={homeServiceOverrides}
                />
                <LicensedInsured />
                <InHomeConsultation />
                <FiveSteps />
                <Permits />
                <ServiceAreas />
                <CostGuide />
                <RecentProjects projects={homeRecentProjects} />
                <ClientReviews />
                <TradesComparison />
                <HomeBlogs />
                <HomeFaq />
                <Estimate />
                <CtaBanner />
                <LocateUs />
            </main>
            </>
    );
}
