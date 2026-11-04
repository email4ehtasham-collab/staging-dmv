import dynamic from "next/dynamic";

const blogRoutes = {
  "how-much-does-a-kitchen-remodel-cost-in-bethesda-md-in-2026": dynamic(() =>
    import("@/data/blogs/pages/HowMuchDoesAKitchenRemodelCostInBethesdaMDIn2026")
  ),
  "how-to-choose-a-reliable-home-renovation-contractor-in-md-7-things-to-check": dynamic(() =>
    import("@/data/blogs/pages/howToChooseAreliableHomeRenovationContractorInMD7ThingsToCheck")
  ),
};

export default blogRoutes;