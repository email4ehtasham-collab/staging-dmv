type ProcessStep = {
    number: string;
    title: string;
    side: "left" | "right";
    text: string;
};

const bethesdaBasementContent = {
    hero: {
        serviceName: "Basement Remodeling",
        serviceHref: "/service/basement-remodeling",
        locationName: "Bethesda, MD",
        badge: "Bethesda · Montgomery County, MD",
        title: "Basement Finishing in Bethesda, MD",
        titleAccent: "That Stays Dry",
        intro:
            "If you are planning basement remodeling in Bethesda, MD, DMV General Contracting Group is a licensed general contractor based a few minutes up the Pike in North Bethesda. We start by testing for moisture and measuring headroom, then design, permit and finish the lower level on one contract, and the workmanship is guaranteed for a year. This page covers what Bethesda basements become, the checks that come first, cost per square foot, the best season to build, permits, legal apartments, our process, timing and local projects.",
        credentials: ["4.9 on Google", "MHIC #156178", "DLCP #410526000209"],
        factsTitle: "Bethesda Basement At A Glance",
        factsCtaText:
            "Get a free basement assessment, and we will tell you on the first visit whether the space can be finished as it is.",
        factsCtaLabel: "Get a Free Basement Assessment",
        facts: [
            {
                label: "Typical cost",
                value: "$30,000–$90,000",
                note: "$30–$85 for each finished square foot",
            },
            {
                label: "Construction time",
                value: "6–12 weeks",
                note: "after 3–6 weeks of county permit review",
            },
            {
                label: "Permits",
                value: "DPS & WSSC Water",
                note: "County DPS for the build and wiring; WSSC Water if pipes are added",
            },
            {
                label: "Workmanship warranty",
                value: "1 year",
            },
        ],
        media: {
            image: "/images/basement-remodeling-bethesda-md/basement-remodeling-bethesda-md-finished-basement-kitchenette.webp",
            imageAlt: "Basement remodeling: finished basement with a living area, a kitchenette, a bathroom and white built-ins",
            featuredTitle: "Finished basement with a kitchenette",
            featuredMeta: "Living area, kitchenette, bathroom, built-ins and an electric fireplace",
            reviewScore: "4.9",
            reviewText: "Homeowners rate our basement work 4.9 out of 5 on Google.",
            glanceLinkLabel: "See Bethesda Basement Pricing",
            glanceLinkHref: "#service-location-pricing",
        },
    },
    costs: {
        eyebrow: "Cost and Pricing",
        title: "How Much Does It Cost to Finish a Basement in Bethesda?",
        text: "Bethesda basements generally cost $30 to $85 for each finished square foot, so a typical lower level comes to $30,000 to $90,000; high-end finishes push past $85 and up to $110 or more. Local jobs usually sit in the top half of each band:",
        rows: [
            {
                level: "Basic",
                title: "Dry, insulated open space",
                range: "$30–$50 / sq ft",
                text: "Framing, drywall, LVP flooring, recessed lights and heat",
            },
            {
                level: "Mid-range with bathroom",
                title: "Rooms and a bath",
                range: "$50–$85 / sq ft",
                text: "A bedroom or office, a full or half bath, an egress window and storage",
            },
            {
                level: "Premium",
                title: "High-end finishes",
                range: "$85–$110+ / sq ft",
                text: "Theater, wet bar, custom built-ins and upgraded finishes",
            },
            {
                level: "Legal accessory apartment",
                title: "Licensed second unit",
                range: "Above the premium tier",
                text: "Everything a DHCA inspector checks: cooking area, bath, own door, fire-rated separation and alarms",
            },
        ],
        note: "Your estimate itemizes every line, including waterproofing or egress work if the checks call for it.",
        ctaLabel: "Get a Free Basement Estimate",
        layout: "table" as const,
    },
    process: {
        title: "Our Basement Finishing Process in Bethesda",
        text: "Our Bethesda basement jobs run in five stages under a single project lead:",
        steps: [
            {
                number: "01",
                title: "Inspect",
                side: "left",
                text: "Moisture readings, a headroom check under the lowest beam, and a look at the foundation walls, the electrical panel and the floor drain.",
            },
            {
                number: "02",
                title: "Design",
                side: "right",
                text: "You approve a floor plan, egress locations, lighting and a written, itemized price.",
            },
            {
                number: "03",
                title: "Permit",
                side: "left",
                text: "Our office handles both filings, the county one for the alteration and wiring and the WSSC one for pipes.",
            },
            {
                number: "04",
                title: "Build",
                side: "right",
                text: "Foam goes on the walls, studs go up, wires and pipes are run and inspected, and only then come drywall, floors and trim.",
            },
            {
                number: "05",
                title: "Inspect and hand over",
                side: "left",
                text: "With the county's final approval in hand, we tour the finished rooms together and twelve months of workmanship coverage begin.",
            },
        ] as ProcessStep[],
        durations: [],
    },
    faq: {
        eyebrow: "FAQs",
        title: "Frequently Asked Questions",
        text: "Have a basement question that is not here? Call us seven days a week.",
        items: [
            {
                question: "How much does it cost to finish a basement in Bethesda?",
                answer: "Most Bethesda basements cost $30 to $85 per finished square foot, which puts a typical lower level at $30,000 to $90,000. Local projects often sit in the upper half of each band, and premium work with a theater or wet bar runs $85 to $110 or more per foot. A legal accessory apartment costs more than any of these tiers.",
            },
            {
                question: "How much does it cost to finish a 1,000 sq ft basement?",
                answer: "For a 1,000-square-foot Bethesda basement, basic to mid-range finishing works out to roughly $30,000 to $85,000. With premium materials, expect $85,000 to more than $110,000. The biggest swings come from adding a bathroom, which may need an ejector pump, and from any waterproofing or new egress window the space needs before finishing.",
            },
            {
                question: "Does finishing a basement add value?",
                answer: "In most cases, yes, provided the finished space is dry, has legal headroom and gives every bedroom an escape window. Nationally, the 2025 Cost vs Value report shows an average basement remodel of $52,012 recouping about 71 percent at sale. A licensed accessory apartment can also bring in rental income on top of any resale gain.",
            },
            {
                question: "Do I need an egress window in my basement?",
                answer: "Yes for every bedroom, and a finished basement generally needs at least one emergency escape opening even without one. Many Bethesda colonials have small windows, so we usually cut a larger opening and build a window well. The new egress window is part of the Montgomery County DPS alteration permit, and we schedule the digging for dry weather when we can.",
            },
            {
                question: "Do I need a permit to finish a basement in Bethesda?",
                answer: "Yes. Bethesda is unincorporated, so Montgomery County DPS issues the building and electrical permits for framing, insulation, wiring and any new egress window, and WSSC Water issues the plumbing permit for a bath, bar sink or laundry move. Swapping carpet for vinyl plank in an existing rec room needs no permit. We file both and book each inspection.",
            },
            {
                question: "Can I rent out my basement as an apartment?",
                answer: "Yes, once it is licensed as an accessory dwelling unit. Montgomery County requires a Class 3 ADU license from DHCA, the owner must live on the property, an attached unit is capped at 1,200 square feet and it can house no more than two adults. The unit needs egress, fire separation, alarms, a kitchen, a bath and a side or rear entrance.",
            },
            {
                question: "Can you finish a basement that has had water problems?",
                answer: "Yes, once the source is fixed. Bethesda block foundations from the 1930s to the 1960s often seep after heavy rain, usually from grading, downspouts or a missing sump. We trace the cause, correct it with regrading, extensions, interior drainage or a sump pump, and confirm the walls stay dry through rain before any framing goes up.",
            },
        ],
    },
};

export default bethesdaBasementContent;
