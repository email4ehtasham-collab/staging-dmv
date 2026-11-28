import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo/resolve";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import Estimate from "@/components/Home/Estimate/Estimate";
import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";
import ServiceAreaPage from "@/components/ServiceArea/ServiceAreaPage";
import guideStyles from "@/components/ServiceArea/bethesda-guide.module.scss";
import PageSchema from "@/components/Schema/PageSchema";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/data/home/homePageMedia";
import { withOgImage } from "@/data/seo/ogImages";

const baseMetadata: Metadata = {
  title: "Areas We Serve in Maryland and DC | DMV General Contracting",
  description:
    "Licensed general contractor serving Washington, DC and 12 Maryland communities, from Bethesda and Rockville to Silver Spring and Laurel. Free estimate.",
  alternates: {
    canonical: "/service-area",
  },
};

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/service-area", baseMetadata).then((metadata) => withOgImage(metadata, "/service-area"));
}

type Area = {
  name: string;
  county: string;
  zips: string[];
  permits: string;
  text: string;
  /** Only areas with a live page get a link. */
  href?: string;
  linkLabel?: string;
};

// Every community we work in. Add `href` only when that area's page is live.
const areas: Area[] = [
  {
    name: "Washington, DC",
    county: "District of Columbia",
    zips: ["20001", "20002", "20003", "20004", "20005", "20006", "20007", "20008", "20009", "20010", "20011", "20012", "20015", "20016", "20017", "20018", "20019", "20020", "20024", "20032", "20036", "20037"],
    permits: "DC Department of Buildings (DOB)",
    text: "Rowhouses, condos and historic homes in Capitol Hill, Georgetown, Chevy Chase DC, the Palisades and Forest Hills. Exterior work in historic districts also goes through historic review.",
    href: "/service-area/washington-dc",
    linkLabel: "General contractor in Washington, DC",
  },
  {
    name: "Bethesda",
    county: "Montgomery County",
    zips: ["20814", "20816", "20817"],
    permits: "Montgomery County DPS and WSSC Water",
    text: "Colonials, Cape Cods and downtown condos in Edgemoor, Bradley Hills, Wood Acres and downtown Bethesda.",
    href: "/service-area/bethesda-md",
    linkLabel: "General contractor in Bethesda, MD",
  },
  {
    name: "North Bethesda",
    county: "Montgomery County",
    zips: ["20852"],
    permits: "Montgomery County DPS",
    text: "Our office is on Grand Park Avenue, so North Bethesda condos and townhomes are a short drive for our crews.",
  },
  {
    name: "Rockville",
    county: "Montgomery County",
    zips: ["20850", "20851", "20852", "20853"],
    permits: "City of Rockville inside city limits, Montgomery County DPS outside",
    text: "Rockville runs its own permit office, so we confirm whether your address sits inside the city line before we file.",
  },
  {
    name: "Gaithersburg",
    county: "Montgomery County",
    zips: ["20877", "20878", "20879", "20882"],
    permits: "City of Gaithersburg inside city limits, Montgomery County DPS outside",
    text: "Like Rockville, Gaithersburg issues its own permits inside the city, and the county covers the rest.",
  },
  {
    name: "Potomac",
    county: "Montgomery County",
    zips: ["20854"],
    permits: "Montgomery County DPS",
    text: "Larger lots and custom homes, where additions, basements and full renovations are common requests.",
  },
  {
    name: "Chevy Chase",
    county: "Montgomery County",
    zips: ["20815"],
    permits: "Montgomery County DPS, plus town or village review where it applies",
    text: "Several incorporated villages and towns share the Chevy Chase name, and each can add its own review on top of the county permit.",
  },
  {
    name: "Kensington",
    county: "Montgomery County",
    zips: ["20895"],
    permits: "Montgomery County DPS, plus Town of Kensington and historic review",
    text: "Late Victorian and early 20th century homes, many inside the Kensington Historic District, where exterior changes need extra review.",
  },
  {
    name: "Garrett Park",
    county: "Montgomery County",
    zips: ["20896"],
    permits: "Montgomery County DPS, plus Town of Garrett Park",
    text: "A small town listed on the National Register of Historic Places, with its own town review for exterior work.",
  },
  {
    name: "Cabin John",
    county: "Montgomery County",
    zips: ["20818"],
    permits: "Montgomery County DPS",
    text: "Cottages and older homes along MacArthur Boulevard that often need updated systems along with a remodel.",
  },
  {
    name: "Silver Spring",
    county: "Montgomery County",
    zips: ["20901", "20902", "20903", "20904", "20905", "20906", "20910"],
    permits: "Montgomery County DPS and WSSC Water",
    text: "Post-war houses, townhomes and condos close to the District line, where extra space below or behind the house is the usual goal.",
  },
  {
    name: "Wheaton",
    county: "Montgomery County",
    zips: ["20902", "20906"],
    permits: "Montgomery County DPS and WSSC Water",
    text: "Mid-century ramblers and split-levels that are ready for new kitchens, baths and finished basements.",
  },
  {
    name: "Laurel",
    county: "Prince George's County and Montgomery County",
    zips: ["20707", "20708", "20723", "20724"],
    permits: "City of Laurel, Prince George's County or Montgomery County, by address",
    text: "Laurel sits where three permit authorities meet, so we check which one governs your property before any drawings are filed.",
  },
];

const faqs = [
  {
    question: "Which areas do you serve?",
    answer: (
      <>
        <strong>We serve Washington, DC and 12 Maryland communities:</strong> Bethesda, North Bethesda, Rockville,
        Gaithersburg, Potomac, Chevy Chase, Kensington, Garrett Park, Cabin John, Silver Spring, Wheaton and Laurel. If
        your town is not on the list, call us with your address and we will tell you straight away whether we can take
        the job.
      </>
    ),
  },
  {
    question: "Do you work in Virginia?",
    answer: (
      <>
        <strong>No. We work only in Maryland and Washington, DC.</strong> Our licenses are the Maryland Home Improvement
        Commission license #156178 and the DC Department of Licensing and Consumer Protection license #410526000209.
      </>
    ),
  },
  {
    question: "Who pulls the building permits in each area?",
    answer: (
      <>
        <strong>We do, for every project that needs one.</strong> In DC we file with the Department of Buildings. In
        most of Montgomery County we file with the Department of Permitting Services, and plumbing and gas permits come
        from WSSC Water. Rockville, Gaithersburg and Laurel have their own city permit offices, and some towns add their
        own review.
      </>
    ),
  },
  {
    question: "Is there a minimum project size?",
    answer: (
      <>
        <strong>No.</strong> We take on single-room jobs as well as additions and whole-home renovations anywhere in our
        service area.
      </>
    ),
  },
  {
    question: "How can I check your license before I hire you?",
    answer: (
      <>
        <strong>
          Look up MHIC license #156178 on the Maryland Department of Labor public search, and DLCP license #410526000209
          in the DC license portal.
        </strong>{" "}
        Both searches are free and show whether a license is active.
      </>
    ),
  },
];

export default function ServiceAreasHubPage() {
  return (
    <ServiceAreaPage
      areaName="Service Areas"
      showParentCrumb={false}
      badgeLabel="Service Areas · Maryland & DC"
      title="Areas We Serve in"
      titleAccent="Maryland and Washington, DC"
      intro={
        <>
          DMV General Contracting Group is a licensed residential{" "}
          <strong>general contractor in Maryland and Washington, DC</strong>. From our North Bethesda office we serve the
          District and 12 Maryland communities, from Bethesda and Rockville to Silver Spring and Laurel. One team handles
          design, permits and construction. Call +1 240-730-1292 or ask for a free estimate.
        </>
      }
      credentials={["MHIC #156178", "DC DLCP #410526000209", "4.9 on Google (59 reviews)", "1-year workmanship warranty"]}
      heroImageAlt="General contractor reviewing remodeling plans for homes in Maryland and Washington, DC"
      glance={[
        { label: "Maryland license", value: "MHIC #156178" },
        { label: "DC DLCP license", value: "#410526000209" },
        { label: "Communities served", value: "13" },
        { label: "Minimum project size", value: "None" },
      ]}
      glanceLink={{ label: "See All Areas", href: "#areas-list" }}
      reviewText="Homeowners across Maryland and DC rate our work 4.9 on Google (59 reviews)."
    >
      <PageSchema path="/service-area" />

      <section
        id="areas-list"
        className={`${guideStyles.section} ${guideStyles.neighborhoods}`}
        aria-labelledby="areas-list-title"
      >
        <Container>
          <SectionHeading
            className={guideStyles.heading}
            id="areas-list-title"
            align="center"
            eyebrow={<Badge>Where We Work</Badge>}
            title="Our Service Areas in Maryland and DC"
            text={
              <>
                <strong>We work in Washington, DC and 12 Maryland communities</strong>, most of them in Montgomery County.
                Two areas have their own detailed pages so far: Bethesda and Washington, DC. Every other community below
                gets the same licensed crews, the same written estimate and the same 1-year workmanship warranty.
              </>
            }
          />

          <div className={guideStyles.neighborhoodGrid}>
            {areas.map((area) => (
              <article className={guideStyles.neighborhoodCard} key={area.name}>
                <div className={guideStyles.neighborhoodTag}>{area.county}</div>
                <div>
                  <h3>{area.name}</h3>
                  <p>{area.text}</p>
                  <p>
                    {area.zips.length > 1 ? "Zip codes" : "Zip code"}:{" "}
                    {area.zips.map((zip, index) => (
                      <span key={zip}>
                        {index > 0 ? ", " : ""}
                        <strong>{zip}</strong>
                      </span>
                    ))}
                  </p>
                  {area.href ? (
                    <p>
                      <Link href={area.href}>{area.linkLabel} →</Link>
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={`${guideStyles.section} ${guideStyles.permits}`} aria-labelledby="areas-permits-title">
        <Container>
          <SectionHeading
            className={guideStyles.heading}
            id="areas-permits-title"
            align="center"
            eyebrow={<Badge>Permits</Badge>}
            title="Who Issues Building Permits in Each Area?"
            text={
              <>
                <strong>The office that issues your permit depends on your exact address, not just your town name.</strong>{" "}
                We confirm the right office for every job and file the applications ourselves. Here is how it breaks down
                across our service area:
              </>
            }
          />

          <div className={guideStyles.tableWrap}>
            <table className={guideStyles.table}>
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">Zip codes</th>
                  <th scope="col">Who issues permits</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((area) => (
                  <tr key={area.name}>
                    <th scope="row">{area.href ? <Link href={area.href}>{area.name}</Link> : area.name}</th>
                    <td>{area.zips.join(", ")}</td>
                    <td>{area.permits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={guideStyles.tableNote}>
            Historic districts, condo boards and homeowner associations can add their own review on top of the permit. We
            build that time into the schedule from the first meeting.
          </p>
        </Container>
      </section>

      <section className={`${guideStyles.section} ${guideStyles.costs}`} aria-labelledby="areas-check-title">
        <Container>
          <SectionHeading
            className={guideStyles.heading}
            id="areas-check-title"
            align="center"
            eyebrow={<Badge>Before You Hire</Badge>}
            title="How to Check a Contractor in Maryland and DC"
            text={
              <>
                <strong>Check the license first, then the complaint history and insurance.</strong> These public sources
                are free:
              </>
            }
          />

          <div className={guideStyles.tableWrap}>
            <table className={guideStyles.table}>
              <thead>
                <tr>
                  <th scope="col">What to check</th>
                  <th scope="col">Where to check it</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Maryland home improvement license</th>
                  <td>
                    <a href="https://labor.maryland.gov/license/mhic/" target="_blank" rel="noopener noreferrer">
                      Maryland Home Improvement Commission
                    </a>{" "}
                    public license search. Ours is MHIC #156178.
                  </td>
                </tr>
                <tr>
                  <th scope="row">DC contractor license</th>
                  <td>
                    <a href="https://dlcp.dc.gov/" target="_blank" rel="noopener noreferrer">
                      DC Department of Licensing and Consumer Protection
                    </a>
                    . Ours is DLCP #410526000209.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Complaint history in Montgomery County</th>
                  <td>
                    <a
                      href="https://www.montgomerycountymd.gov/ocp/a_z/home_ownership/contractor_main.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Montgomery County Office of Consumer Protection
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Insurance</th>
                  <td>Ask for a current certificate of general liability insurance before you sign.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={guideStyles.tableNote}>
            Maryland only lets homeowners claim from the MHIC Guaranty Fund when the contractor was licensed, which is one
            more reason to check before you pay a deposit.
          </p>
        </Container>
      </section>

      <HomeFaq
        title="Frequently Asked Questions"
        text="Have a question about your area that isn't here? Call us 7 days a week."
        faqs={faqs}
      />

      <Estimate
        content={{
          title: "Get a Free Estimate Anywhere in Our Service Area",
          text: (
            <>
              Wherever you live in our area, you deal with one{" "}
              <strong>licensed general contractor in Maryland and Washington, DC</strong> from the first visit to the final
              inspection.
            </>
          ),
          intro: (
            <>
              Ask for your <Link href="/contact-us">free estimate</Link> online, or call{" "}
              <a href="tel:+12407301292">+1 240-730-1292</a> any day of the week.
            </>
          ),
          contact: (
            <>
              <a href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                DMV General Contracting Group LLC, 11810 Grand Park Ave #500, North Bethesda, MD 20852
              </a>
              . Phone <a href="tel:+12407301292">+1 240-730-1292</a>. Email{" "}
              <a href="mailto:support@dmv-gc.com">support@dmv-gc.com</a>. Open 7 days a week.
            </>
          ),
        }}
      />
    </ServiceAreaPage>
  );
}
