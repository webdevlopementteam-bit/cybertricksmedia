import { notFound } from "next/navigation";
import CategoryPage from "@/app/components/CategoryPage";
import ServicePage from "@/app/components/ServicePage";
import { CATEGORIES } from "@/app/data/serviceCategories";
import { SERVICE_PAGES } from "@/app/data/servicePages";

const SITE = "https://www.cybertricksmedia.com";

export function generateStaticParams() {
  return [
    ...Object.keys(CATEGORIES),
    ...Object.keys(SERVICE_PAGES),
  ].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = CATEGORIES[slug] || SERVICE_PAGES[slug];

  if (!data) {
    return {
      title: "Page Not Found | Cybertricks Media",
      robots: { index: false, follow: false },
    };
  }

  const seo = data.seo || {};
  const title = seo.title || `${data.eyebrow} | Cybertricks Media Pvt Ltd`;
  const description = seo.description || data.intro;
  const url = `${SITE}/${slug}`;
  const ogImage = seo.ogImage || "/images/og/default.jpg";

  return {
    title,
    description,
    keywords: seo.keywords,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const category = CATEGORIES[slug];
  const service = SERVICE_PAGES[slug];
  const data = category || service;

  if (!data) notFound();

  /* ---------- JSON-LD ---------- */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.eyebrow,
    description: data.seo?.description || data.intro,
    url: `${SITE}/${slug}`,
    provider: {
      "@type": "Organization",
      name: "Cybertricks Media Pvt Ltd",
      url: SITE,
      logo: `${SITE}/logo.png`,
      telephone: "+91-92666-12221",
      email: "info@cybertricksmedia.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "201/7, 2nd Floor, Dimension Tower, Vardhaman Market, West Enclave, Pitampura",
        addressLocality: "Delhi",
        postalCode: "110034",
        addressCountry: "IN",
      },
    },
    areaServed: { "@type": "Country", name: "India" },
    ...(service && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${data.eyebrow} Services`,
        itemListElement: service.groups.flatMap((g) =>
          g.items.map((it) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: it.t, description: it.d },
          }))
        ),
      },
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE}/services`,
      },
      ...(service?.parent
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: service.parent.label,
              item: `${SITE}${service.parent.href}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: data.eyebrow,
              item: `${SITE}/${slug}`,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 3,
              name: data.eyebrow,
              item: `${SITE}/${slug}`,
            },
          ]),
    ],
  };

  const faqSchema = service?.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {category ? <CategoryPage data={category} /> : <ServicePage data={service} />}
    </>
  );
}