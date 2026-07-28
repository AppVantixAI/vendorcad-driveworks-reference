// Semantic page content — VendorCAD rebrand of VendorCAD clone structure.

export type ListRowDataItem = {
  href: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { href: "/product", label: "Product" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/#why-vendorcad", label: "Why VendorCAD?" },
    { href: "/pricing", label: "Pricing" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" }
];

export type LogosItem = {
  href: string;
  imgSrc: string;
  width: string;
};
export const logos: LogosItem[] = [
    { href: "/demo", imgSrc: "/marketing/features/web-configurator.webp", width: "320" },
    { href: "/demo", imgSrc: "/marketing/features/preview-3d.webp", width: "320" },
    { href: "/demo", imgSrc: "/marketing/features/configure-dimensions.webp", width: "320" },
    { href: "/demo", imgSrc: "/marketing/features/generate-step.webp", width: "320" },
    { href: "/demo", imgSrc: "/marketing/features/quote-inbox-live.webp", width: "320" }
];

export type ProductsItem = {
  href: string;
  imgSrc: string;
  srcSet: string;
  id: string;
  title: string;
  description: string;
  href2: string;
  rel: string;
  href3: string;
  rel2: string;
  label: string;
};
export const products: ProductsItem[] = [
    {
      href: "/demo",
      imgSrc: "/marketing/features/web-configurator.webp",
      srcSet: "/marketing/features/web-configurator.webp 960w",
      id: "h-live-demo",
      title: "Live Demo",
      description: "Open a real VendorCAD buyer configurator: live 3D, rules, and STEP-ready quote handoff. No credit card.",
      href2: "/demo",
      rel: "vendorcad-live-demo",
      href3: "/demo",
      rel2: "vendorcad-try-demo",
      label: "Try live demo"
    },
    {
      href: "/pricing",
      imgSrc: "/marketing/features/manage-configurators.webp",
      srcSet: "/marketing/features/manage-configurators.webp 960w",
      id: "h-validation-pilot",
      title: "Validation Pilot",
      description: "DFY on one product family: parametric recipe, branded share link, and designed-in STEP for your sales motion.",
      href2: "/pricing",
      rel: "vendorcad-pilot",
      href3: "/demo",
      rel2: "vendorcad-book",
      label: "Book a pilot"
    },
    {
      href: "/product",
      imgSrc: "/marketing/pricing-platform.webp",
      srcSet: "/marketing/pricing-platform.webp 960w",
      id: "h-platform",
      title: "VendorCAD Platform",
      description: "Manufacturer App plus published configurators: CAD recipes, rules, publish, submissions inbox, and analytics.",
      href2: "/product",
      rel: "vendorcad-platform",
      href3: "/demo",
      rel2: "vendorcad-platform-demo",
      label: "See the product"
    }
];

export type Logos2Item = {
  href: string;
  imgSrc: string;
};
export const logos2: Logos2Item[] = [
    { href: "/product", imgSrc: "/brand/vendorcad-mark.svg" },
    { href: "/how-it-works", imgSrc: "/brand/vendorcad-mark.svg" },
    { href: "/demo", imgSrc: "/brand/vendorcad-mark.svg" },
    { href: "/about", imgSrc: "/brand/vendorcad-mark.svg" }
];

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "/demo", label: "Live Demo" },
    { href: "/pricing", label: "Validation Pilot" },
    { href: "/product", label: "VendorCAD Platform" },
    { href: "/contact", label: "Contact sales" }
];

export type ListRow3DataItem = {
  href: string;
  label: string;
};
export const listRow3Data: ListRow3DataItem[] = [
    { href: "/how-it-works", label: "Parametric recipes" },
    { href: "/product", label: "Rules & validation" },
    { href: "/product", label: "Branded share links" },
    { href: "/product", label: "Live 3D preview" },
    { href: "/product", label: "STEP export" },
    { href: "/product", label: "Exact-spec quotes" },
    { href: "/product", label: "Submissions inbox" }
];

export type ListRow2Data2Item = {
  href: string;
  label: string;
};
export const listRow2Data2: ListRow2Data2Item[] = [
    { href: "/product", label: "Product tour" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/demo", label: "Live demo" },
    { href: "/contact", label: "Help and support" }
];

export type ListRow3Data2Item = {
  href: string;
  label: string;
};
export const listRow3Data2: ListRow3Data2Item[] = [
    { href: "/about", label: "Our story" },
    { href: "/about", label: "Team" },
    { href: "/contact", label: "Careers" },
    { href: "/contact", label: "Contact" }
];

export type ListRow4DataItem = {
  href: string;
  label: string;
};
export const listRow4Data: ListRow4DataItem[] = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms and Conditions" },
    { href: "/sitemap.xml", label: "Sitemap" }
];

export type CtaSectionContentAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CtaSectionContent = {
  title?: string;
  actions: CtaSectionContentAction[];
};
export const ctaSectionContent: CtaSectionContent = {
  "title": "Subscribe to the VendorCAD newsletter",
  "actions": []
};
