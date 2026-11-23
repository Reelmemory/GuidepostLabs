import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Guidepost Labs — Navigate Crypto Together", template: "%s — Guidepost Labs" },
  description: "A community-driven Web3 product studio. Connect, discover opportunities and build useful tools together.",
  openGraph: {
    type: "website",
    siteName: "Guidepost Labs",
    title: "Guidepost Labs — Navigate Crypto Together",
    description: "A community-driven Web3 product studio.",
    images: [{ url: "/brand/guidepost-banner-1500x500.png", width: 2048, height: 682, alt: "Guidepost — Navigate Crypto Together" }],
  },
  twitter: { card: "summary_large_image", images: ["/brand/guidepost-banner-1500x500.png"] },
  icons: { icon: "/brand/guidepost-icon-512.png" },
};

export const viewport: Viewport = {
  themeColor: "#050c12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
