import { notFound } from "next/navigation";
import { Metadata } from "next";
import ServiceData from "@/data/services/ServiceData";
import locationMetadata from "@/data/services/locationMetadata";
import getDynamicLocationComponent, { getLocationStaticParams } from "../../getDynamicLocationComponent";

export function generateStaticParams() {
    return getLocationStaticParams();
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string; location: string }> }
): Promise<Metadata> {
    const { slug, location } = await params;

    // Data-driven per-location metadata (SEO title & description) if present
    const specificMetadata = locationMetadata[`${slug}/${location}`];

    // Standardizing title based on slug and location for SEO if specific data is missing
    const formattedSlug = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    const formattedLocation = location.split("-").map(word => {
        if (word.toLowerCase() === "md") return "MD";
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");

    return {
        title: specificMetadata?.title ?? `${formattedSlug} in ${formattedLocation} | Licensed Contractor | DMV-GC Group`,
        description: specificMetadata?.description ?? `Licensed ${formattedSlug.toLowerCase()} contractor in ${formattedLocation}. Specializing in custom renovations and remodeling. Free in-home consultation.`,
        alternates: {
            canonical: `/service/${slug}/${location}`,
        },
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string; location: string }> }) {
    const { slug, location } = await params;

    const DynamicComponent = getDynamicLocationComponent(slug, location);

    if (!DynamicComponent) {
        return notFound();
    }

    const service = ServiceData.find((s) => s.slug === slug);

    return <DynamicComponent data={service} location={location} />;
}
