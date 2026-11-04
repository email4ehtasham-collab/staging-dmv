import { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "./providers";
import localFont from "next/font/local";
import { MyContextProvider } from "@/hooks/context";

import StyledComponentsRegistry from "@/lib/registry";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.scss";

const schemaData = {
		"@context": "https://schema.org",
		"@graph": [
			{
			"@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
			"@id": "https://www.dmv-gc.com/#business",
			"name": "DMV General Contracting Group",
			"alternateName": "DMV General Contracting Group LLC",
			"description": "Licensed design-build home remodeling contractor in North Bethesda, MD. Specializing in kitchen remodeling, bathroom renovation, basement finishing, home additions, and ADU construction across Bethesda, Potomac, Chevy Chase, and the greater DMV area.",
			"url": "https://www.dmv-gc.com",
			"logo": {
				"@type": "ImageObject",
				"url": "https://www.dmv-gc.com/logo.png"
			},
			"image": "https://www.dmv-gc.com/og-image.jpg",
			"telephone": "+12407301292",
			"email": "support@dmv-gc.com",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "11810 Grand Park Ave, Suite 500",
				"addressLocality": "North Bethesda",
				"addressRegion": "MD",
				"postalCode": "20852",
				"addressCountry": "US"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": 39.0458,
				"longitude": -77.1139
			},
			"areaServed": [
				{ "@type": "City", "name": "Bethesda", "addressRegion": "MD" },
				{ "@type": "City", "name": "North Bethesda", "addressRegion": "MD" },
				{ "@type": "City", "name": "Potomac", "addressRegion": "MD" },
				{ "@type": "City", "name": "Chevy Chase", "addressRegion": "MD" },
				{ "@type": "City", "name": "Rockville", "addressRegion": "MD" },
				{ "@type": "City", "name": "Kensington", "addressRegion": "MD" },
				{ "@type": "City", "name": "Silver Spring", "addressRegion": "MD" },
				{ "@type": "City", "name": "Wheaton", "addressRegion": "MD" },
				{ "@type": "City", "name": "Gaithersburg", "addressRegion": "MD" },
				{ "@type": "City", "name": "Garrett Park", "addressRegion": "MD" },
				{ "@type": "City", "name": "Cabin John", "addressRegion": "MD" },
				{ "@type": "City", "name": "Laurel", "addressRegion": "MD" },
				{ "@type": "City", "name": "Washington", "addressRegion": "DC" }
			],
			"priceRange": "$$$$",
			"currenciesAccepted": "USD",
			"paymentAccepted": "Cash, Check, Credit Card, Financing",
			"openingHoursSpecification": {
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": [
				"Monday","Tuesday","Wednesday",
				"Thursday","Friday","Saturday","Sunday"
				],
				"opens": "08:00",
				"closes": "20:00"
			},
			"aggregateRating": {
				"@type": "AggregateRating",
				"ratingValue": "4.9",
				"reviewCount": "97",
				"bestRating": "5",
				"worstRating": "1"
			},
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Home Remodeling Services",
				"itemListElement": [
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Remodeling" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Remodeling" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basement Finishing" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Additions" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ADU Construction" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Design Build" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roofing & Siding" } },
				{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical, Plumbing & HVAC" } }
				]
			},
			"sameAs": [
				"https://www.facebook.com/dmvgcgroup",
				"https://www.instagram.com/dmvgcgroup",
				"https://www.houzz.com/dmv-gc-group",
				"https://www.bbb.org/dmv-gc-group"
			],
			"founder": {
				"@type": "Person",
				"name": "DMV General Contracting Group Founder"
			},
			"legalName": "DMV General Contracting Group LLC",
			"slogan": "Renovation Done Right, From Design To Completion"
			},
			{
			"@type": "WebSite",
			"@id": "https://www.dmv-gc.com/#website",
			"url": "https://www.dmv-gc.com",
			"name": "DMV General Contracting Group",
			"description": "Licensed home remodeling contractor in Bethesda, MD",
			"publisher": {
				"@id": "https://www.dmv-gc.com/#business"
			},
			"potentialAction": {
				"@type": "SearchAction",
				"target": {
				"@type": "EntryPoint",
				"urlTemplate": "https://www.dmv-gc.com/?s={search_term_string}"
				},
				"query-input": "required name=search_term_string"
			}
			}
		]
	};

export const metadata: Metadata = {
    metadataBase: new URL("https://www.dmv-gc.com"),
    verification: {
        google: "FD2Eg66WLTKVmM3d-ImTnaOLj1F2LYcz0myqfIA7yAY",
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
    return (
        <html suppressHydrationWarning lang="en" className={jakarta.variable}>

            <body suppressHydrationWarning className={`bg-[#FCFCFC] dark:bg-black ${jakarta.className}`}>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-18223679814"
                    strategy="afterInteractive"
                />
                <Script id="google-ads-gtag" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-18223679814');
                        gtag('config', 'AW-18223679814/cvgsCICxkdQcEMaS3fFD', {
                            'phone_conversion_number': '+1 240-730-1292'
                        });
                    `}
                </Script>

                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-7YP9F24760"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics-gtag" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-7YP9F24760');
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
                <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData),}} />

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


