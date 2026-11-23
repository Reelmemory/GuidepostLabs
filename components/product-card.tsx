import Link from "next/link";
import type { Product } from "@/lib/site";
import { statusTone } from "@/lib/site";
import { Arrow } from "@/components/arrow";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-card-top"><span className="product-index">{product.index}</span><span className={`status status-${statusTone(product.status)}`}><i />{product.status}</span></div>
      <div className="product-card-body">
        <span className="eyebrow">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
      </div>
      <div className="product-card-bottom"><span className="status-detail">{product.statusDetail}</span><Link href={`/products/${product.slug}`} aria-label={`Explore ${product.name}`}>Explore <Arrow /></Link></div>
    </article>
  );
}
