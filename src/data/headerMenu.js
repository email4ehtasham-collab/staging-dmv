export const headerMenu = [
  {
    label: "Home",
    href: "/",
    activeKey: "home"
  },
  {
    label: "About Us",
    href: "/about-us",
    activeKey: "about",
    hasArrow: true,
    dropdown: [
      { label: "Our Team", href: "/our-team" },
      { label: "FAQs", href: "/faqs" }
    ]
  },
  {
    label: "Services",
    href: "/services",
    activeKey: "service",
    hasArrow: true,
    isMegaMenu: true,
    dropdown: [
      {
        label: "Kitchen Remodeling",
        href: "/service/kitchen-remodeling",
        submenu: [
          { label: "Bethesda, MD", href: "/service/kitchen-remodeling/bethesda-md" },
          { label: "Washington, DC", href: "/service/kitchen-remodeling/washington-dc" },
          { label: "Rockville, MD", href: "/service/kitchen-remodeling/rockville-md" },
          { label: "Kensington, MD", href: "/service/kitchen-remodeling/kensington-md" },
          { label: "Potomac, MD", href: "/service/kitchen-remodeling/potomac-md" },
          { label: "Wheaton, MD", href: "/service/kitchen-remodeling/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/kitchen-remodeling/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/kitchen-remodeling/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/kitchen-remodeling/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/kitchen-remodeling/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/kitchen-remodeling/cabin-john-md" },
        ]
      },
      { 
        label: "Bathroom Remodeling", 
        href: "/service/bathroom-remodeling",
        submenu: [
          { label: "Washington, DC", href: "/service/bathroom-remodeling/washington-dc" },
          { label: "Rockville, MD", href: "/service/bathroom-remodeling/rockville-md" },
          { label: "Potomac, MD", href: "/service/bathroom-remodeling/potomac-md" },
          { label: "Wheaton, MD", href: "/service/bathroom-remodeling/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/bathroom-remodeling/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/bathroom-remodeling/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/bathroom-remodeling/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/bathroom-remodeling/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/bathroom-remodeling/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/bathroom-remodeling/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/bathroom-remodeling/laurel-md" },
        ]
      },
      {
        label: "Basement Remodeling",
        href: "/service/basement-remodeling",
        submenu: [
          { label: "Washington, DC", href: "/service/basement-remodeling/washington-dc" },
          { label: "Rockville, MD", href: "/service/basement-remodeling/rockville-md" },
          { label: "Kensington, MD", href: "/service/basement-remodeling/kensington-md" },
          { label: "Potomac, MD", href: "/service/basement-remodeling/potomac-md" },
          { label: "Wheaton, MD", href: "/service/basement-remodeling/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/basement-remodeling/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/basement-remodeling/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/basement-remodeling/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/basement-remodeling/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/basement-remodeling/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/basement-remodeling/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/basement-remodeling/laurel-md" },
        ]
      },
      {
        label: "ADU & Guest House",
        href: "/service/adu",
        submenu: [
          { label: "Washington, DC", href: "/service/adu/washington-dc" },
          { label: "Rockville, MD", href: "/service/adu/rockville-md" },
          { label: "Kensington, MD", href: "/service/adu/kensington-md" },
          { label: "Potomac, MD", href: "/service/adu/potomac-md" },
          { label: "Wheaton, MD", href: "/service/adu/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/adu/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/adu/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/adu/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/adu/chevy-chase-md" },
          { label: "North Bethesda, MD", href: "/service/adu/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/adu/laurel-md" },
        ]
      },
      {
        label: "Decks",
        href: "/service/decks",
        submenu: [
          { label: "Washington, DC", href: "/service/decks/washington-dc" },
          { label: "Rockville, MD", href: "/service/decks/rockville-md" },
          { label: "Kensington, MD", href: "/service/decks/kensington-md" },
          { label: "Potomac, MD", href: "/service/decks/potomac-md" },
          { label: "Wheaton, MD", href: "/service/decks/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/decks/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/decks/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/decks/garrett-park-md" },
          { label: "Cabin John, MD", href: "/service/decks/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/decks/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/decks/laurel-md" },
        ]
      },
      {
        label: "Flooring",
        href: "/service/flooring-remodeling",
        submenu: [
          { label: "Washington, DC", href: "/service/flooring-remodeling/washington-dc" },
          { label: "Rockville, MD", href: "/service/flooring-remodeling/rockville-md" },
          { label: "Kensington, MD", href: "/service/flooring-remodeling/kensington-md" },
          { label: "Potomac, MD", href: "/service/flooring-remodeling/potomac-md" },
          { label: "Wheaton, MD", href: "/service/flooring-remodeling/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/flooring-remodeling/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/flooring-remodeling/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/flooring-remodeling/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/flooring-remodeling/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/flooring-remodeling/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/flooring-remodeling/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/flooring-remodeling/laurel-md" },
        ]
      },
      {
        label: "Design Build",
        href: "/service/design-build",
        submenu: [
          { label: "Rockville, MD", href: "/service/design-build/rockville-md" },
          { label: "Kensington, MD", href: "/service/design-build/kensington-md" },
          { label: "Potomac, MD", href: "/service/design-build/potomac-md" },
          { label: "Wheaton, MD", href: "/service/design-build/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/design-build/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/design-build/gaithersburg-md" },
          { label: "Chevy Chase, MD", href: "/service/design-build/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/design-build/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/design-build/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/design-build/laurel-md" },
        ]
      },
      {
        label: "Siding Installation",
        href: "/service/siding-installation",
        submenu: [
          { label: "Washington, DC", href: "/service/siding-installation/washington-dc" },
          { label: "Rockville, MD", href: "/service/siding-installation/rockville-md" },
          { label: "Kensington, MD", href: "/service/siding-installation/kensington-md" },
          { label: "Potomac, MD", href: "/service/siding-installation/potomac-md" },
          { label: "Wheaton, MD", href: "/service/siding-installation/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/siding-installation/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/siding-installation/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/siding-installation/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/siding-installation/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/siding-installation/cabin-john-md" },
          { label: "Laurel, MD", href: "/service/siding-installation/laurel-md" },
        ]
      },
      {
        label: "Carpet Installation",
        href: "/service/carpet-installation",
        submenu: [
          { label: "Washington, DC", href: "/service/carpet-installation/washington-dc" },
          { label: "Rockville, MD", href: "/service/carpet-installation/rockville-md" },
          { label: "Kensington, MD", href: "/service/carpet-installation/kensington-md" },
          { label: "Potomac, MD", href: "/service/carpet-installation/potomac-md" },
          { label: "Wheaton, MD", href: "/service/carpet-installation/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/carpet-installation/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/carpet-installation/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/carpet-installation/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/carpet-installation/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/carpet-installation/cabin-john-md" },
          { label: "Laurel, MD", href: "/service/carpet-installation/laurel-md" },
        ]
      },
      { 
        label: "Home Additions", 
        href: "/service/home-additions",
        submenu: [
          { label: "Washington, DC", href: "/service/home-additions/washington-dc" },
          { label: "Rockville, MD", href: "/service/home-additions/rockville-md" },
          { label: "Potomac, MD", href: "/service/home-additions/potomac-md" },
          { label: "Wheaton, MD", href: "/service/home-additions/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/home-additions/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/home-additions/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/home-additions/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/home-additions/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/home-additions/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/home-additions/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/home-additions/laurel-md" },
        ]
      },
      {
        label: "Electrical Services",
        href: "/service/electrical-services",
        submenu: [
          { label: "Washington, DC", href: "/service/electrical-services/washington-dc" },
          { label: "Rockville, MD", href: "/service/electrical-services/rockville-md" },
          { label: "Kensington, MD", href: "/service/electrical-services/kensington-md" },
          { label: "Potomac, MD", href: "/service/electrical-services/potomac-md" },
          { label: "Wheaton, MD", href: "/service/electrical-services/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/electrical-services/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/electrical-services/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/electrical-services/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/electrical-services/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/electrical-services/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/electrical-services/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/electrical-services/laurel-md" },
        ]
      },
      {
        label: "Plumbing Services",
        href: "/service/plumbing-services",
        submenu: [
          { label: "Washington, DC", href: "/service/plumbing-services/washington-dc" },
          { label: "Rockville, MD", href: "/service/plumbing-services/rockville-md" },
          { label: "Kensington, MD", href: "/service/plumbing-services/kensington-md" },
          { label: "Potomac, MD", href: "/service/plumbing-services/potomac-md" },
          { label: "Wheaton, MD", href: "/service/plumbing-services/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/plumbing-services/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/plumbing-services/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/plumbing-services/garrett-park-md" },
          { label: "Cabin John, MD", href: "/service/plumbing-services/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/plumbing-services/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/plumbing-services/laurel-md" },
        ]
      },
      {
        label: "Drywall",
        href: "/service/drywall",
        submenu: [
          { label: "Washington, DC", href: "/service/drywall/washington-dc" },
          { label: "Rockville, MD", href: "/service/drywall/rockville-md" },
          { label: "Kensington, MD", href: "/service/drywall/kensington-md" },
          { label: "Potomac, MD", href: "/service/drywall/potomac-md" },
          { label: "Wheaton, MD", href: "/service/drywall/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/drywall/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/drywall/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/drywall/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/drywall/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/drywall/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/drywall/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/drywall/laurel-md" },
        ]
      },
      {
        label: "Fence Installation",
        href: "/service/fence-installation",
        submenu: [
          { label: "Washington, DC", href: "/service/fence-installation/washington-dc" },
          { label: "Rockville, MD", href: "/service/fence-installation/rockville-md" },
          { label: "Kensington, MD", href: "/service/fence-installation/kensington-md" },
          { label: "Potomac, MD", href: "/service/fence-installation/potomac-md" },
          { label: "Wheaton, MD", href: "/service/fence-installation/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/fence-installation/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/fence-installation/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/fence-installation/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/fence-installation/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/fence-installation/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/fence-installation/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/fence-installation/laurel-md" },
        ]
      },
      {
        label: "Concrete",
        href: "/service/concrete",
        submenu: [
          { label: "Washington, DC", href: "/service/concrete/washington-dc" },
          { label: "Rockville, MD", href: "/service/concrete/rockville-md" },
          { label: "Kensington, MD", href: "/service/concrete/kensington-md" },
          { label: "Potomac, MD", href: "/service/concrete/potomac-md" },
          { label: "Wheaton, MD", href: "/service/concrete/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/concrete/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/concrete/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/concrete/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/concrete/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/concrete/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/concrete/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/concrete/laurel-md" },
        ]
      },
      {
        label: "Roofing",
        href: "/service/roofing",
        submenu: [
          { label: "Rockville, MD", href: "/service/roofing/rockville-md" },
          { label: "Potomac, MD", href: "/service/roofing/potomac-md" },
          { label: "Gaithersburg, MD", href: "/service/roofing/gaithersburg-md" },
          { label: "Kensington, MD", href: "/service/roofing/kensington-md" },
          { label: "Washington, DC", href: "/service/roofing/washington-dc" },
          { label: "Wheaton, MD", href: "/service/roofing/wheaton-md" },
          { label: "Chevy Chase, MD", href: "/service/roofing/chevy-chase-md" },
          { label: "Garrett Park, MD", href: "/service/roofing/garrett-park-md" },
          { label: "North Bethesda, MD", href: "/service/roofing/north-bethesda-md" },
          { label: "Cabin John, MD", href: "/service/roofing/cabin-john-md" },
        ]
      },
      {
        label: "HVAC",
        href: "/service/hvac",
        submenu: [
          { label: "Bethesda, MD", href: "/service/hvac/bethesda-md" },
          { label: "Rockville, MD", href: "/service/hvac/rockville-md" },
          { label: "Silver Spring, MD", href: "/service/hvac/silver-spring-md" },
          { label: "Potomac, MD", href: "/service/hvac/potomac-md" },
          { label: "Gaithersburg, MD", href: "/service/hvac/gaithersburg-md" },
          { label: "Kensington, MD", href: "/service/hvac/kensington-md" },
          { label: "Washington, DC", href: "/service/hvac/washington-dc" },
          { label: "Wheaton, MD", href: "/service/hvac/wheaton-md" },
          { label: "Chevy Chase, MD", href: "/service/hvac/chevy-chase-md" },
          { label: "Garrett Park, MD", href: "/service/hvac/garrett-park-md" },
          { label: "Cabin John, MD", href: "/service/hvac/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/hvac/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/hvac/laurel-md" },
        ]
      },
      {
        label: "Framing",
        href: "/service/framing",
        submenu: [
          { label: "Bethesda, MD", href: "/service/framing/bethesda-md" },
          { label: "Rockville, MD", href: "/service/framing/rockville-md" },
          { label: "Gaithersburg, MD", href: "/service/framing/gaithersburg-md" },
          { label: "Silver Spring, MD", href: "/service/framing/silver-spring-md" },
          { label: "Wheaton, MD", href: "/service/framing/wheaton-md" },
          { label: "Washington, DC", href: "/service/framing/washington-dc" },
          { label: "Kensington, MD", href: "/service/framing/kensington-md" },
          { label: "Garrett Park, MD", href: "/service/framing/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/framing/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/framing/cabin-john-md" },
          { label: "Potomac, MD", href: "/service/framing/potomac-md" },
          { label: "North Bethesda, MD", href: "/service/framing/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/framing/laurel-md" },
        ]
      },
      {
        label: "Hardscaping",
        href: "/service/hardscaping",
        submenu: [
          { label: "Bethesda, MD", href: "/service/hardscaping/bethesda-md" },
          { label: "Washington, DC", href: "/service/hardscaping/washington-dc" },
          { label: "Rockville, MD", href: "/service/hardscaping/rockville-md" },
          { label: "Kensington, MD", href: "/service/hardscaping/kensington-md" },
          { label: "Potomac, MD", href: "/service/hardscaping/potomac-md" },
          { label: "Wheaton, MD", href: "/service/hardscaping/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/hardscaping/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/hardscaping/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/hardscaping/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/hardscaping/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/hardscaping/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/hardscaping/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/hardscaping/laurel-md" },
        ]
      },
      {
        label: "Junk Removal",
        href: "/service/junk-removal",
        submenu: [
          { label: "Bethesda, MD", href: "/service/junk-removal/bethesda-md" },
          { label: "Washington, DC", href: "/service/junk-removal/washington-dc" },
          { label: "Rockville, MD", href: "/service/junk-removal/rockville-md" },
          { label: "Kensington, MD", href: "/service/junk-removal/kensington-md" },
          { label: "Potomac, MD", href: "/service/junk-removal/potomac-md" },
          { label: "Wheaton, MD", href: "/service/junk-removal/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/junk-removal/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/junk-removal/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/junk-removal/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/junk-removal/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/junk-removal/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/junk-removal/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/junk-removal/laurel-md" },
        ]
      },
      {
        label: "Patios",
        href: "/service/patios",
        submenu: [
          { label: "Bethesda, MD", href: "/service/patios/bethesda-md" },
          { label: "Washington, DC", href: "/service/patios/washington-dc" },
          { label: "Rockville, MD", href: "/service/patios/rockville-md" },
          { label: "Kensington, MD", href: "/service/patios/kensington-md" },
          { label: "Potomac, MD", href: "/service/patios/potomac-md" },
          { label: "Wheaton, MD", href: "/service/patios/wheaton-md" },
          { label: "Silver Spring, MD", href: "/service/patios/silver-spring-md" },
          { label: "Gaithersburg, MD", href: "/service/patios/gaithersburg-md" },
          { label: "Garrett Park, MD", href: "/service/patios/garrett-park-md" },
          { label: "Chevy Chase, MD", href: "/service/patios/chevy-chase-md" },
          { label: "Cabin John, MD", href: "/service/patios/cabin-john-md" },
          { label: "North Bethesda, MD", href: "/service/patios/north-bethesda-md" },
          { label: "Laurel, MD", href: "/service/patios/laurel-md" },
        ]
      }
    ]
  },
  {
    label: "Projects",
    href: "/projects",
    activeKey: "project"
  },
  {
    label: "Our Stories",
    href: "/our-stories",
    activeKey: "our-stories"
  },
  {
    label: "Blogs",
    href: "/blogs",
    activeKey: "blog"
  },
  {
    label: "Testimonials",
    href: "/testimonials",
    activeKey: "testimonials"
  }
];