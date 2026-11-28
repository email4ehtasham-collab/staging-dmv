import { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "./providers";
import localFont from "next/font/local";
import { MyContextProvider } from "@/hooks/context";

import StyledComponentsRegistry from "@/lib/registry";
import { DEFAULT_OG_IMAGE } from "@/data/seo/ogImages";
import { checkNavigationRoutes } from "@/config/navigationCheck";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.scss";

// Site-wide business details for Google. Facts must match the Google Business
// Profile exactly. Never add ratings or review counts here (no aggregateRating).
const schemaData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "GeneralContractor",
			"@id": "https://www.dmv-gc.com/#business",
			"name": "DMV General Contracting Group LLC",
			"legalName": "DMV General Contracting Group LLC",
			"alternateName": ["DMV General Contracting Group", "DMV-GC"],
			"description": "Licensed design-build home remodeling contractor in North Bethesda, MD, serving Montgomery County, Laurel and Washington, DC: kitchens, bathrooms, basements, home additions, ADUs and whole-home renovations.",
			"url": "https://www.dmv-gc.com/",
			"logo": {
				"@type": "ImageObject",
				"url": "https://www.dmv-gc.com/images/logo.png"
			},
			"image": "https://www.dmv-gc.com/images/banner-kitchen.jpg",
			"telephone": "+1-240-730-1292",
			"email": "support@dmv-gc.com",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "11810 Grand Park Ave #500",
				"addressLocality": "North Bethesda",
				"addressRegion": "MD",
				"postalCode": "20852",
				"addressCountry": "US"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": 39.049372,
				"longitude": -77.1174492
			},
			"hasMap": "https://www.google.com/maps?cid=14905282013525036539",
			"contactPoint": {
				"@type": "ContactPoint",
				"contactType": "customer service",
				"telephone": "+1-240-730-1292",
				"email": "support@dmv-gc.com",
				"areaServed": ["US-MD", "US-DC"]
			},
			"hasCredential": [
				{
					"@type": "EducationalOccupationalCredential",
					"credentialCategory": "license",
					"name": "Maryland Home Improvement Commission License #156178",
					"recognizedBy": { "@type": "GovernmentOrganization", "name": "Maryland Home Improvement Commission" }
				},
				{
					"@type": "EducationalOccupationalCredential",
					"credentialCategory": "license",
					"name": "DC Department of Licensing and Consumer Protection License #410526000209",
					"recognizedBy": { "@type": "GovernmentOrganization", "name": "DC Department of Licensing and Consumer Protection" }
				}
			],
			"areaServed": [
				{ "@type": "State", "name": "Maryland", "sameAs": "https://en.wikipedia.org/wiki/Maryland" },
				{ "@type": "AdministrativeArea", "name": "Montgomery County", "sameAs": "https://en.wikipedia.org/wiki/Montgomery_County,_Maryland", "containedInPlace": { "@type": "State", "name": "Maryland" } },
				{ "@type": "AdministrativeArea", "name": "Washington, DC", "sameAs": "https://en.wikipedia.org/wiki/Washington,_D.C." }
			],
			"openingHoursSpecification": [
				{
					"@type": "OpeningHoursSpecification",
					"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					"opens": "07:00",
					"closes": "17:00"
				},
				{
					"@type": "OpeningHoursSpecification",
					"dayOfWeek": "Sunday",
					"opens": "09:00",
					"closes": "17:00"
				}
			],
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Home Remodeling Services",
				"itemListElement": [
					{ "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://www.dmv-gc.com/service/kitchen-remodeling#service", "name": "Kitchen Remodeling" } },
					{ "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://www.dmv-gc.com/service/bathroom-remodeling#service", "name": "Bathroom Remodeling" } },
					{ "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://www.dmv-gc.com/service/basement-remodeling#service", "name": "Basement Remodeling" } },
					{ "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://www.dmv-gc.com/service/home-additions#service", "name": "Home Additions" } },
					{ "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://www.dmv-gc.com/service/adu#service", "name": "ADU Construction" } },
					{ "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://www.dmv-gc.com/service/design-build#service", "name": "Design-Build Remodeling" } },
					{ "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://www.dmv-gc.com/service/whole-home-renovation#service", "name": "Whole-Home Renovation" } }
				]
			},
			"sameAs": [
				"https://www.google.com/maps?cid=14905282013525036539",
				"https://www.facebook.com/DMVGCGroupLLC",
				"https://www.instagram.com/dmvgcgroupllc",
				"https://www.linkedin.com/company/104760932"
			]
		},
		{
			"@type": "WebSite",
			"@id": "https://www.dmv-gc.com/#website",
			"url": "https://www.dmv-gc.com/",
			"name": "DMV General Contracting Group",
			"inLanguage": "en-US",
			"publisher": {
				"@id": "https://www.dmv-gc.com/#business"
			}
		}
	]
};

export const metadata: Metadata = {
    metadataBase: new URL("https://www.dmv-gc.com"),
    verification: {
        google: "FD2Eg66WLTKVmM3d-ImTnaOLj1F2LYcz0myqfIA7yAY",
    },
    // Sitewide default share image. Pages that set their own openGraph add it via withOgImage().
    openGraph: {
        images: [{ url: DEFAULT_OG_IMAGE.url, width: 1200, height: 630, alt: DEFAULT_OG_IMAGE.alt }],
    },
    twitter: {
        card: "summary_large_image",
        images: [{ url: DEFAULT_OG_IMAGE.url, alt: DEFAULT_OG_IMAGE.alt }],
    },
};

const jakarta = localFont({
    src: [
        {
            path: "../../public/fonts/jakarta/PlusJakartaSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/jakarta/PlusJakartaSans-Italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../../public/fonts/jakarta/PlusJakartaSans-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/jakarta/PlusJakartaSans-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/jakarta/PlusJakartaSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/jakarta/PlusJakartaSans-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-jakarta",
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    checkNavigationRoutes();

    return (
        <html suppressHydrationWarning lang="en-US" className={jakarta.variable}>

            <body suppressHydrationWarning className={`bg-[#FCFCFC] dark:bg-black ${jakarta.className}`}>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-7YP9F24760"
                    strategy="afterInteractive"
                />
                <Script id="google-gtag-config" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-7YP9F24760');
                        gtag('config', 'AW-18223679814');
                        gtag('config', 'AW-18223679814/cvgsCICxkdQcEMaS3fFD', {
                            'phone_conversion_number': '+1 240-730-1292'
                        });
                    `}
                </Script>

                <Script id="gtm-script" strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function (w, d, s, l, i) {
                            w[l] = w[l] || [];
                            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                            var f = d.getElementsByTagName(s)[0],
                                j = d.createElement(s),
                                dl = l != 'dataLayer' ? '&l=' + l : '';
                            j.async = true;
                            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                            f.parentNode.insertBefore(j, f);
                        })(window, document, 'script', 'dataLayer', 'GTM-5SS4XJDV');
                        `,
                    }}
                />
                <script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData),}} />

                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SS4XJDV" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
                </noscript>

                <StyledComponentsRegistry>
                    <MyContextProvider>
                        <Providers>
                            <div className="isolate">
                                <Header />
                                {children}
                                <Footer />
                            </div>
                        </Providers>
                    </MyContextProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}


