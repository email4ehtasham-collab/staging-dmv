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

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false" className={styles.noteIcon}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9v4.2M10 6.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

type PermitsProps = {
  variant?: "home" | "kitchen";
};

export default function Permits({ variant = "home" }: PermitsProps) {
  const isKitchen = variant === "kitchen";
  const rows = isKitchen ? kitchenRows : homeRows;

  return (
    <section id="permits" className={styles.section} aria-labelledby="permits-title" data-variant={variant}>
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="permits-title"
            align="center"
            eyebrow={<Badge>Permits</Badge>}
            title={
              isKitchen
                ? "Do You Need a Permit to Remodel a Kitchen in Maryland or DC?"
                : "Permits Handled Wherever We Work"
            }
            text={
              isKitchen
                ? "Yes, if the work changes walls, wiring or plumbing. The Montgomery County Department of Permitting Services lists cabinet installs and floor coverings as work that needs no permit. In Maryland and DC, the permit office depends on your address:"
                : "We apply for and manage every permit your project needs. Who issues it depends on where you live, and in Maryland the plumbing and gas permit often comes from a different office than the building permit."
            }
          />
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Location</th>
                <th scope="col">{isKitchen ? "Building permit" : "Building permits issued by"}</th>
                <th scope="col">{isKitchen ? "Plumbing and gas permit" : "Plumbing and gas permits issued by"}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.location}>
                  <th scope="row" data-label="Location">
                    <strong>{row.location}</strong>
                    {row.detail ? <span>{row.detail}</span> : null}
                  </th>
                  <td data-label={isKitchen ? "Building permit" : "Building permits issued by"}>{row.building}</td>
                  <td data-label={isKitchen ? "Plumbing and gas permit" : "Plumbing and gas permits issued by"}>
                    {row.plumbing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.note}>
          <InfoIcon />
          <p>
            {isKitchen ? (
              "New circuits or rewiring also need an electrical permit, which DPS issues in Montgomery County and DOB issues in DC. We draw the plans, file each application and book every inspection for you."
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
