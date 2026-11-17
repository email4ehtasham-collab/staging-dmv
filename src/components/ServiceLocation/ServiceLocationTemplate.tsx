import Estimate from "@/components/Home/Estimate/Estimate";
import FiveSteps from "@/components/Home/FiveSteps/FiveSteps";
import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";
import InHomeConsultation from "@/components/Home/InHomeConsultation/InHomeConsultation";
import LicensedInsured from "@/components/Home/LicensedInsured/LicensedInsured";
import RecentProjects from "@/components/Home/RecentProjects/RecentProjects";
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
