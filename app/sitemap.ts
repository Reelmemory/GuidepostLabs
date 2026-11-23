import type { MetadataRoute } from "next";
import { SITE_URL, products } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/products", "/community", "/studio"].map((path) => ({ url: `${SITE_URL}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 }));
  const productUrls = products.map((product) => ({ url: `${SITE_URL}/products/${product.slug}`, changeFrequency: "monthly" as const, priority: 0.65 }));
  return [...fixed, ...productUrls];
}
