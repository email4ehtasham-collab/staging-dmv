import dynamic from "next/dynamic";

const components = {
  "kitchen-remodeling": dynamic(() =>
    import("./[slug]/pages/kitchen-remodeling")
  ),

  "bathroom-remodeling": dynamic(() =>
    import("./[slug]/pages/bathroom-remodeling")
  ),
  "basement-remodeling": dynamic(() =>
    import("./[slug]/pages/basement-remodeling")
  ),
  "adu": dynamic(() =>
    import("./[slug]/pages/adu")
  ),
  "decks": dynamic(() =>
    import("./[slug]/pages/decks")
  ),
  "flooring-remodeling": dynamic(() =>
    import("./[slug]/pages/flooring-remodeling")
  ),
  "design-build": dynamic(() =>
    import("./[slug]/pages/design-build")
  ),
  "siding-installation": dynamic(() =>
    import("./[slug]/pages/siding-installation")
  ),
  "carpet-installation": dynamic(() =>
    import("./[slug]/pages/carpet-installation")
  ),
  "home-additions": dynamic(() =>
    import("./[slug]/pages/home-additions")
  ),
  "electrical-services": dynamic(() =>
    import("./[slug]/pages/electrical-services")
  ),
  "plumbing-services": dynamic(() =>
    import("./[slug]/pages/plumbing-services")
  ),
  "drywall": dynamic(() =>
    import("./[slug]/pages/drywall")
  ),
  "fence-installation": dynamic(() =>
    import("./[slug]/pages/fence-installation")
  ),
  "concrete": dynamic(() =>
    import("./[slug]/pages/concrete")
  ),
  "roofing": dynamic(() =>
    import("./[slug]/pages/roofing")
  ),
};

export default function getDynamicComponent(slug) {
  return components[slug] || null;
}