import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "VendorCAD — Get designed in first",
  "description": "Configure, price, quote (CPQ) custom products and deliver designed-in STEP and exact-spec quotes with VendorCAD. Save time, improve quality and increase sales.",
  "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "VendorCAD - CAD product configurator for manufacturers",
    "description": "Configure, price, quote (CPQ) custom products and deliver designed-in STEP and exact-spec quotes with VendorCAD. Save time, improve quality and increase sales.",
    "type": "website",
    "siteName": "VendorCAD",
    "url": "/",
    "images": [
      "/marketing/hero-configurator.webp"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "site": "@vendorcad"
  },
  "icons": {
    "icon": [
      { "url": "/brand/favicon-32.png", "sizes": "32x32" }
    ],
    "apple": [
      { "url": "/brand/apple-touch-180.png" }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en-US"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"", "/\",\"url\":\"", "/\",\"name\":\"VendorCAD - CAD product configurator for manufacturers - VendorCAD\",\"isPartOf\":{\"@id\":\"", "/#website\"},\"about\":{\"@id\":\"", "/#organization\"},\"primaryImageOfPage\":{\"@id\":\"", "/#primaryimage\"},\"image\":{\"@id\":\"", "/#primaryimage\"},\"thumbnailUrl\":\"", "/marketing/hero-configurator.webp\",\"datePublished\":\"2023-11-08T16:49:29+00:00\",\"dateModified\":\"2026-06-22T15:24:01+00:00\",\"description\":\"Configure, price, quote (CPQ) custom products and deliver designed-in STEP and exact-spec quotes with VendorCAD. Save time, improve quality and increase sales.\",\"breadcrumb\":{\"@id\":\"", "/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"", "/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"", "/#primaryimage\",\"url\":\"", "/marketing/hero-configurator.webp\",\"contentUrl\":\"", "/marketing/hero-configurator.webp\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\"}]},{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "/\",\"name\":\"VendorCAD\",\"description\":\"CAD product configurator for manufacturers\",\"publisher\":{\"@id\":\"", "/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"VendorCAD\",\"url\":\"", "/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"", "/#/schema/logo/image/\",\"url\":\"", "/brand/vendorcad-mark.svg\",\"contentUrl\":\"", "/brand/vendorcad-mark.svg\",\"width\":696,\"height\":696,\"caption\":\"VendorCAD\"},\"image\":{\"@id\":\"", "/#/schema/logo/image/\"},\"sameAs\":[\"https://www.facebook.com/VendorCAD\",\"https://x.com/vendorcad\",\"https://www.linkedin.com/company/vendorcad\",\"https://www.x.com/VendorCAD\",\"https://www.instagram.com/vendorcadconfigurator/\",\"https://www.youtube.com/user/VendorCAD\"]}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="box-content block text-foreground [font-family:var(--font-body)] text-base font-normal not-italic leading-[1.375rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background" data-cid="n0">
        {children}
      </body>
    </html>
  );
}
