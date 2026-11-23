export const COMMUNITY_URL = "https://discord.gg/TwbwfjJmh";
export const SITE_URL = "https://guidepostlabs.xyz";

export type ProductStatus = "Completed" | "Final development stage" | "In development";

export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  status: ProductStatus;
  statusDetail: string;
  index: string;
  problem: string;
  scope: string[];
  availability: string;
  ctaLabel: string;
  ctaHref: string;
  externalCta?: boolean;
};

export const products: Product[] = [
  {
    slug: "mintpulse",
    name: "MintPulse",
    category: "NFT mint reminders",
    shortDescription: "A Discord bot designed to help people keep track of upcoming NFT mint opportunities.",
    description: "MintPulse is an NFT mint-reminder Discord bot currently being developed by Guidepost Labs.",
    status: "In development",
    statusDetail: "Work in progress",
    index: "01",
    problem: "Mint announcements can be spread across different places. MintPulse is being built around the simple job of helping people keep upcoming mint times in view inside Discord.",
    scope: ["Discord-based NFT mint reminders", "Upcoming mint opportunity tracking"],
    availability: "MintPulse is in development. Installation details, supported schedules and release timing have not been announced.",
    ctaLabel: "Follow development",
    ctaHref: COMMUNITY_URL,
    externalCta: true,
  },
  {
    slug: "dropcheck",
    name: "DropCheck",
    category: "OpenSea drop eligibility",
    shortDescription: "A privacy-first way to check which wallets qualify for each phase of an OpenSea-hosted drop.",
    description: "DropCheck is a read-only, multi-wallet eligibility analyser scoped to OpenSea-hosted NFT drops.",
    status: "Final development stage",
    statusDetail: "Public launch planned",
    index: "02",
    problem: "When a collector manages several wallets, checking each address and each mint phase individually becomes slow and easy to get wrong.",
    scope: [
      "Check multiple EVM wallet addresses",
      "Paste addresses or import a CSV",
      "Review eligibility by available mint phase",
      "See allocation, price and timing where OpenSea provides the data",
      "Export a consolidated CSV report",
    ],
    availability: "DropCheck is in its final stage of development. A public launch is planned; there is no public application link yet.",
    ctaLabel: "Get launch updates",
    ctaHref: COMMUNITY_URL,
    externalCta: true,
  },
  {
    slug: "strike",
    name: "Strike",
    category: "NFT minting bot",
    shortDescription: "An NFT minting bot built for the Guidepost ecosystem.",
    description: "Strike is Guidepost Labs’ NFT minting bot. The product is complete and access is currently restricted.",
    status: "Completed",
    statusDetail: "Special access required",
    index: "03",
    problem: "Strike is an NFT minting bot in the Guidepost Labs ecosystem. Its supported chains, execution model and detailed workflow have not been documented in the public brief.",
    scope: ["NFT minting bot", "Completed product", "Special access required"],
    availability: "Strike is complete. Access is not open to the public; special access is required. Contact the Guidepost community for the approved access route.",
    ctaLabel: "Ask about access",
    ctaHref: COMMUNITY_URL,
    externalCta: true,
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function statusTone(status: ProductStatus) {
  if (status === "Completed") return "complete";
  if (status === "Final development stage") return "near-release";
  return "building";
}
