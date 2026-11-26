import Badge from "@/components/Common/Badge";
import Link from "next/link";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./permits.module.scss";

const homeRows = [
  {
    location: "Montgomery County",
    detail: "Bethesda, North Bethesda, Potomac, Chevy Chase, Silver Spring, Wheaton, Kensington, Garrett Park, Cabin John",
    building: "Montgomery County Department of Permitting Services (DPS)",
    plumbing: "WSSC Water",
  },
  {
    location: "City of Rockville",
    detail: "",
    building: "City of Rockville",
    plumbing: "City of Rockville",
  },
  {
    location: "City of Gaithersburg",
    detail: "",
    building: "City of Gaithersburg",
    plumbing: "WSSC Water",
  },
  {
    location: "Laurel",
    detail: "",
    building: "City of Laurel inside city limits; Prince George's County Department of Permitting, Inspections and Enforcement (DPIE) outside them",
    plumbing: "WSSC Water",
  },
  {
    location: "Washington, DC",
    detail: "",
    building: "DC Department of Buildings (DOB)",
    plumbing: "DC Department of Buildings (DOB)",
  },
];

const kitchenRows = [
  {
    location: "Unincorporated Montgomery County",
    detail: "Including Bethesda, Potomac, Silver Spring, Wheaton and Kensington",
    building: "Montgomery County Department of Permitting Services (DPS)",
    plumbing: "WSSC Water",
  },
  {
    location: "City of Rockville",
    detail: "",
    building: "City of Rockville",
    plumbing: "City of Rockville, or WSSC Water for addresses on WSSC water",
  },
  {
    location: "City of Gaithersburg",
    detail: "",
    building: "City of Gaithersburg",
    plumbing: "WSSC Water",
  },
  {
    location: "Laurel",
    detail: "",
    building: "City of Laurel inside city limits; Prince George's County DPIE outside them",
    plumbing: "WSSC Water",
  },
  {
    location: "Chevy Chase towns",
    detail: "",
    building: "Montgomery County DPS, plus a town permit for exterior or footprint changes",
    plumbing: "WSSC Water",
  },
  {
    location: "Washington, DC",
    detail: "",
    building: "DC Department of Buildings (DOB), with Historic Preservation Office review for historic exteriors",
    plumbing: "DC Department of Buildings (DOB)",
  },
];

const aduRows = [
  {
    location: "Unincorporated Montgomery County",
    detail: "Including Bethesda, North Bethesda, Potomac, Silver Spring and Wheaton",
    building: "DHCA ADU license, applied for before the building permit",
    plumbing: "Montgomery County Department of Permitting Services (DPS)",
  },
  {
    location: "City of Rockville",
    detail: "",
    building: "Rockville ADU review under its own zoning rules",
    plumbing: "City of Rockville",
  },
  {
    location: "City of Gaithersburg",
    detail: "",
    building: "Gaithersburg ADU review under its own zoning rules",
    plumbing: "City of Gaithersburg",
  },
  {
    location: "Laurel",
    detail: "",
    building: "Local zoning review for the accessory unit",
    plumbing: "City of Laurel inside city limits; Prince George's County DPIE outside them",
  },
  {
    location: "Washington, DC",
    detail: "",
    building: "Certificate of occupancy and rental business license to rent",
    plumbing: "DC Department of Buildings (DOB)",
  },
];

const homeAdditionRows = [
  {
    location: "Most of Montgomery County",
    detail: "",
    building: "Department of Permitting Services (DPS)",
    plumbing: "Zoning review of setbacks, coverage and height",
  },
  {
    location: "City of Rockville",
    detail: "",
    building: "City of Rockville",
    plumbing: "City zoning review",
  },
  {
    location: "City of Gaithersburg",
    detail: "",
    building: "City of Gaithersburg",
    plumbing: "City zoning review",
  },
  {
    location: "Chevy Chase towns and villages",
    detail: "",
    building: "Montgomery County DPS",
    plumbing: "A town permit on top of the county's",
  },
  {
    location: "Historic districts in Montgomery County",
    detail: "",
    building: "Montgomery County DPS",
    plumbing: "Historic Area Work Permit from the Historic Preservation Commission",
  },
  {
    location: "Washington, DC",
    detail: "",
    building: "Department of Buildings (DOB)",
    plumbing: "Zoning review, plus Historic Preservation Office review in historic districts",
  },
];

const bathroomRows = [
  {
    location: "Unincorporated Montgomery County",
    detail: "such as Bethesda, Potomac, Silver Spring and Wheaton",
    building: "Montgomery County DPS",
    plumbing: "WSSC Water",
  },
  {
    location: "City of Rockville",
    detail: "",
    building: "City of Rockville",
    plumbing: "City of Rockville, or WSSC Water for homes on WSSC water",
  },
  {
    location: "City of Gaithersburg",
    detail: "",
    building: "City of Gaithersburg",
    plumbing: "WSSC Water",
  },
  {
    location: "Laurel",
    detail: "",
    building: "City of Laurel within city limits; Prince George's County DPIE beyond them",
    plumbing: "WSSC Water",
  },
  {
    location: "Washington, DC",
    detail: "",
    building: "DC Department of Buildings (DOB)",
    plumbing: "DC Department of Buildings (DOB)",
  },
];

const basementRows = [
  {
    location: "Unincorporated Montgomery County (Bethesda, Potomac, Silver Spring, Wheaton and nearby)",
    detail: "",
    building: "Montgomery County Department of Permitting Services (DPS)",
    plumbing: "WSSC Water",
  },
  {
    location: "City of Rockville",
    detail: "",
    building: "City of Rockville",
    plumbing: "City of Rockville, or WSSC Water for homes served by WSSC water",
  },
  {
    location: "City of Gaithersburg",
    detail: "",
    building: "City of Gaithersburg",
    plumbing: "WSSC Water",
  },
  {
    location: "Laurel",
    detail: "",
    building: "Laurel's own permit office in town; Prince George's County DPIE beyond the city line",
    plumbing: "WSSC Water",
  },
  {
    location: "Washington, DC",
    detail: "",
    building: "DC Department of Buildings (DOB)",
    plumbing: "DC Department of Buildings (DOB)",
  },
];

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false" className={styles.noteIcon}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9v4.2M10 6.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

type PermitsProps = {
  variant?: "home" | "kitchen" | "bathroom" | "basement" | "adu" | "home-additions";
};

export default function Permits({ variant = "home" }: PermitsProps) {
  const isKitchen = variant === "kitchen";
  const isBathroom = variant === "bathroom";
  const isBasement = variant === "basement";
  const isAdu = variant === "adu";
  const isAddition = variant === "home-additions";
  const rows = isAddition
    ? homeAdditionRows
    : isBasement
    ? basementRows
    : isAdu
      ? aduRows
      : isBathroom
        ? bathroomRows
        : isKitchen
          ? kitchenRows
          : homeRows;

  const firstColumn = isAddition
    ? "Permit office"
    : isAdu
      ? "ADU license or certificate"
      : isKitchen || isBathroom || isBasement
        ? "Building permit"
        : "Building permits issued by";
  const secondColumn = isAddition
    ? "Extra review"
    : isAdu
    ? "Building permit issued by"
    : isKitchen
      ? "Plumbing and gas permit"
      : isBathroom || isBasement
        ? "Plumbing permit"
        : "Plumbing and gas permits issued by";

  return (
    <section id="permits" className={styles.section} aria-labelledby="permits-title" data-variant={variant}>
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="permits-title"
            align="center"
            eyebrow={<Badge>Permits</Badge>}
            title={
              isAddition
                ? "Zoning and Permits for Home Additions in Maryland"
                : isBasement
                  ? "Do You Need a Permit to Finish a Basement in Maryland?"
                  : isAdu
                    ? "What Licenses and Permits Does an ADU Need in Maryland or DC?"
                    : isKitchen
                    ? "Do You Need a Permit to Remodel a Kitchen in Maryland or DC?"
                    : isBathroom
                      ? "Do You Need a Permit to Remodel a Bathroom in Maryland?"
                      : "Permits Handled Wherever We Work"
            }
            text={
              isAddition
                ? "Every addition needs a building permit and must fit your lot's setback, height and coverage rules. In Montgomery County's common R-60 zone, the house must sit 25 feet from the front line and 20 feet from the rear. Side yards need 8 feet on one side and 18 feet combined. Coverage is capped at 35% and height at 35 feet to the peak, per DPS. This table shows who reviews plans in each Maryland and DC jurisdiction:"
                : isBasement
                  ? "Yes. Finishing a basement is an interior alteration, so Montgomery County, Rockville, Gaithersburg and DC all require a building permit. New circuits or a bathroom add electrical and plumbing permits. This table shows which Maryland or DC office handles your address:"
                  : isAdu
                  ? "Yes. Montgomery County requires a DHCA ADU license before the building permit, while DC requires a certificate of occupancy and a rental business license to rent. Rockville and Gaithersburg write their own zoning, so we check each address directly:"
                  : isKitchen
                    ? "Yes, if the work changes walls, wiring or plumbing. The Montgomery County Department of Permitting Services lists cabinet installs and floor coverings as work that needs no permit. In Maryland and DC, the permit office depends on your address:"
                    : isBathroom
                      ? "Yes, once you move or add plumbing, change walls or add circuits. Plumbing appears on the Montgomery County Department of Permitting Services permit-required list, with a note to contact WSSC Water. Which agency signs off on a Maryland or DC bathroom depends on the jurisdiction:"
                      : <>We apply for and <strong>manage every permit</strong> your project needs. Who issues it depends on where you live, and in Maryland the <strong>plumbing and gas permit</strong> often comes from a different office than the <strong>building permit</strong>.</>
            }
          />
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Location</th>
                <th scope="col">{firstColumn}</th>
                <th scope="col">{secondColumn}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.location}>
                  <th scope="row" data-label="Location">
                    <strong>{row.location}</strong>
                    {row.detail ? <span>{row.detail}</span> : null}
                  </th>
                  <td data-label={firstColumn}>{row.building}</td>
                  <td data-label={secondColumn}>{row.plumbing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.note}>
          <InfoIcon />
          <p>
            {isAddition ? (
              "A bathroom or kitchen in the addition also needs a plumbing permit from WSSC Water in most of Montgomery County. Infill lots face tighter coverage caps, so we draw to the limits from the first sketch."
            ) : isBasement ? (
              "Renting out a basement apartment brings a second set of rules. Montgomery County registers and licenses accessory dwelling units through its Department of Housing and Community Affairs. DC requires a certificate of occupancy and a rental license, so we confirm the rules for your address before design."
            ) : isAdu ? (
              "Short-term rentals are not allowed on a Montgomery County lot with an ADU. In DC, separate short-term rental rules apply. We apply for the DHCA license first in Montgomery County, then file the building permit with DPS, Rockville, Gaithersburg or DC DOB, and we book every inspection."
            ) : isKitchen ? (
              "New circuits or rewiring also need an electrical permit, which DPS issues in Montgomery County and DOB issues in DC. We draw the plans, file each application and book every inspection for you."
            ) : isBathroom ? (
              "New circuits for lights, fans or heated floors also need an electrical permit from DPS or DOB. Our office prepares drawings, submits every form and lines up both the rough-in and final inspector visits."
            ) : (
              <>
                According to{" "}
                <Link target="_blank" href="https://www.montgomerycountymd.gov/department-permitting-services">
                  Montgomery County DPS
                </Link>
                , replacing cabinets and floor coverings does not need a county permit, while interior alterations, new
                electrical work and plumbing changes do. Some towns, such as Chevy Chase Village and the Town of Chevy
                Chase, and many homeowners associations add their own review on top of the county permit, and we handle
                those approvals as well.
              </>
            )}
          </p>
        </div>
      </Container>
    </section>
  );
}
