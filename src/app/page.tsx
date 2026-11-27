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
import PageSchema from "@/components/Schema/PageSchema";
import { pageMetadata } from "@/lib/seo/resolve";

const baseMetadata: Metadata = {
  title: "General Contractor Maryland & DC | DMV General Contracting",
  description: "Licensed general contractor in Maryland and DC for home remodeling: kitchens, baths, basements and ADUs. Most cost $60-$250+ per sq ft. Free estimate.",
  
  alternates: {
    canonical: "/",
  },
};

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/", baseMetadata);
}


export default function Home() {
    return (
        <>
            <main className="page-wrapper page-wrapper-home">
                <PageSchema path="/" />
                <NavitemActive nav="home" />
                {/* <ScrollUp /> */}
                <HeroBanner />
                <AboutBar />
                <About />
                <DeliveryResults />
                <WhatWeDo />
                <Services
                    title="Our Services for Home Remodeling in Maryland and DC"
                    text={<>We offer <strong>home remodeling in Maryland</strong> and DC through seven main services. Each one has its own page with details on design, permits, costs and timelines, and the rest of our services are listed after these seven.</>}
                    serviceOverrides={homeServiceOverrides}
                />
                <ClientReviews />
                <LicensedInsured />
                <InHomeConsultation />
                <FiveSteps />
                <Permits />
                <ServiceAreas />
                <CostGuide />
                <RecentProjects projects={homeRecentProjects} />
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
