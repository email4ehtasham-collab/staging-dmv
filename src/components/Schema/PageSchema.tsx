// Per-page JSON-LD (Block 2). Server component: the script tag is in the static HTML.
// The site-wide business and website nodes (Block 1) live in src/app/layout.tsx;
// every node here points to them by @id instead of repeating the business details.
// pageSchema.json is generated from the built pages (titles, descriptions and the
// visible FAQ text), so regenerate it when a page's content changes.
import pageSchema from "@/data/schema/pageSchema.json";

const schemas = pageSchema as Record<string, unknown>;

export default function PageSchema({ path }: { path: string }) {
    const schema = schemas[path];
    if (!schema) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
    );
}
