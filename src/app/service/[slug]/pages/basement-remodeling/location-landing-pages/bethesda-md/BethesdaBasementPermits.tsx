import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "../../../bathroom-remodeling/location-landing-pages/bethesda-md/bethesda-bathroom-permits.module.scss";
import driverStyles from "../../../bathroom-remodeling/location-landing-pages/bethesda-md/bethesda-bathroom-cost-drivers.module.scss";

const authorities = [
    {
        label: "Building, Electrical and Egress",
        value: "Montgomery County DPS",
    },
    {
        label: "Plumbing",
        value: "WSSC Water",
    },
];

const permitRows = [
    {
        work: "Framing, insulation and drywall to create rooms",
        permit: "Yes",
        issuedBy: "Montgomery County DPS",
    },
    {
        work: "Recessed lights, added outlets or a subpanel",
        permit: "Yes",
        issuedBy: "Montgomery County DPS",
    },
    {
        work: "New egress window or enlarged opening",
        permit: "Yes",
        issuedBy: "Montgomery County DPS",
    },
    {
        work: "Plumbing for a bath, bar sink or relocated laundry",
        permit: "Yes",
        issuedBy: "WSSC Water",
    },
    {
        work: "Swapping carpet for LVP in an existing rec room",
        permit: "No",
        issuedBy: "Not required",
    },
];

const rentalSteps = [
    {
        title: "Meet unit standards",
        text: "The space needs egress, fire separation, smoke and carbon monoxide alarms, its own kitchen and bath, and an entrance that the county allows, usually at the side or rear.",
    },
    {
        title: "Get the DPS building permit",
        text: "The conversion is permitted and inspected like any other alteration.",
    },
    {
        title: "Live on the property",
        text: "The county ties an accessory apartment rental license to an owner-occupied home.",
    },
    {
        title: "License and inspect",
        text: "Montgomery County's Department of Housing and Community Affairs (DHCA) inspects the unit and issues the rental license.",
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

export default function BethesdaBasementPermits() {
    return (
        <section id="permits" className={styles.section} aria-labelledby="bethesda-basement-permits-title">
            <Container>
                <div className={styles.header}>
                    <SectionHeading
                        id="bethesda-basement-permits-title"
                        align="center"
                        eyebrow={<Badge>Permits</Badge>}
                        title="Do You Need a Permit to Finish a Basement in Bethesda?"
                        text={
                            <>
                                <strong>Yes, finishing a basement in Bethesda needs a permit.</strong> It is an interior
                                alteration, so{" "}
                                <Link target="_blank" href="https://www.montgomerycountymd.gov/department-permitting-services">
                                    Montgomery County DPS
                                </Link>{" "}
                                requires a building permit, plus electrical permits for new circuits, and a basement
                                bathroom needs a{" "}
                                <Link target="_blank" href="https://www.wsscwater.com/">
                                    WSSC Water
                                </Link>{" "}
                                plumbing permit. Because Bethesda has no municipal government, the county and WSSC are the
                                only permit offices involved. The county&apos;s 2024 permit list treats basement work like
                                this:
                            </>
                        }
                    />
                </div>

                <div className={styles.authorities}>
                    {authorities.map((authority) => (
                        <article className={styles.authorityCard} key={authority.label}>
                            <span>{authority.label}</span>
                            <strong>{authority.value}</strong>
                        </article>
                    ))}
                </div>

                <div className={styles.note}>
                    <InfoIcon />
                    <p>
                        We prepare the drawings, file both permits and book every inspection. Check any contractor&apos;s
                        license with the{" "}
                        <Link target="_blank" href="https://labor.maryland.gov/license/mhic/">
                            Maryland Home Improvement Commission
                        </Link>{" "}
                        before you sign; ours is MHIC #156178.
                    </p>
                </div>

                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th scope="col">Basement work</th>
                                <th scope="col">Permit?</th>
                                <th scope="col">Issued by</th>
                            </tr>
                        </thead>
                        <tbody>
                            {permitRows.map((row) => (
                                <tr key={row.work}>
                                    <th scope="row">{row.work}</th>
                                    <td data-label="Permit?">
                                        <span className={row.permit === "Yes" ? styles.yes : styles.no}>{row.permit}</span>
                                    </td>
                                    <td data-label="Issued by">{row.issuedBy}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={`${driverStyles.header} ${driverStyles.questionHeader}`}>
                    <SectionHeading
                        id="bethesda-basement-rental-title"
                        align="center"
                        eyebrow={<Badge>Rental Units</Badge>}
                        title="Can You Rent Out a Basement Apartment in Bethesda?"
                        text="It can be, once it qualifies and is licensed as an accessory dwelling unit. The steps for a Bethesda basement apartment are:"
                    />
                </div>

                <div className={driverStyles.grid}>
                    {rentalSteps.map((step, index) => (
                        <article className={driverStyles.card} key={step.title}>
                            <div className={driverStyles.cardTop}>
                                <span className={driverStyles.iconBox}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                                        <path d="M14 2v6h6M9 15l2 2 4-4" />
                                    </svg>
                                </span>
                                <span className={driverStyles.step}>{String(index + 1).padStart(2, "0")}</span>
                            </div>
                            <h3 className={`${driverStyles.cardTitle} h3`}>{step.title}</h3>
                            <p className={driverStyles.cardText}>{step.text}</p>
                        </article>
                    ))}
                </div>

                <div className={styles.note}>
                    <InfoIcon />
                    <p>We confirm the current DPS and DHCA rules for your lot before design starts, since requirements are updated from time to time.</p>
                </div>
            </Container>
        </section>
    );
}
