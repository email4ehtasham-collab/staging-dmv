import Estimate from "@/components/redesign/home/estimate/Estimate";
import FiveSteps from "@/components/redesign/home/five-steps/FiveSteps";
import HomeFaq from "@/components/redesign/home/home-faq/HomeFaq";
import InHomeConsultation from "@/components/redesign/home/in-home-consultation/InHomeConsultation";
import LicensedInsured from "@/components/redesign/home/licensed-insured/LicensedInsured";
import RecentProjects from "@/components/redesign/home/recent-projects/RecentProjects";
import LocationCosts from "./LocationCosts";
import LocationOverview from "./LocationOverview";
import ServiceLocationPage from "./ServiceLocationPage";
import type { ServiceLocationContent } from "./types";

type ServiceLocationTemplateProps = {
  content: ServiceLocationContent;
};

export default function ServiceLocationTemplate({ content }: ServiceLocationTemplateProps) {
  return (
    <ServiceLocationPage {...content.hero}>
      <LocationOverview {...content.overview} />

      <LocationCosts {...content.costs} />

      <InHomeConsultation
        id="service-location-consultation"
        headingId="service-location-consultation-title"
        title={content.consultation.title}
        text={content.consultation.text}
        ctaLabel={content.consultation.ctaLabel}
      />

      <FiveSteps
        title={content.process.title}
        text={content.process.text}
        steps={content.process.steps}
        durations={content.process.durations}
        showContact={false}
      />

      <LicensedInsured variant={content.licensedVariant ?? "home"} />

      <RecentProjects serviceType={content.projectsServiceType} />

      <HomeFaq
        eyebrow={content.faq.eyebrow}
        title={content.faq.title}
        text={content.faq.text}
        faqs={content.faq.items}
      />

      <Estimate variant={content.estimateVariant ?? "home"} />
    </ServiceLocationPage>
  );
}
