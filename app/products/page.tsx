import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site";

export const metadata: Metadata = { title: "Products", description: "Explore the products being built within the Guidepost Labs ecosystem." };

export default function ProductsPage() {
  return (
    <div className="page-shell shell">
      <div className="page-hero"><div className="section-kicker"><span>01</span> THE ECOSYSTEM</div><h1>Tools with a<br /><span>clear purpose.</span></h1><p>Each Guidepost product is built around a specific job. Explore what it does and check its current availability before you go further.</p></div>
      <div className="product-grid product-grid-directory">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      <div className="directory-note"><span className="directory-note-mark">i</span><p>Product status reflects the latest information confirmed by the founder. Planned scope is not a guarantee that every feature is already available.</p></div>
    </div>
  );
}
