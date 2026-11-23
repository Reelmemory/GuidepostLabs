import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { getProduct, products, statusTone } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: product.shortDescription };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="page-shell shell product-detail-page">
      <Link className="back-link" href="/products">← All products</Link>
      <section className="product-detail-hero">
        <div className="section-kicker"><span>GUIDEPOST PRODUCT / {product.index}</span></div>
        <div className="product-detail-heading"><div><p className="eyebrow">{product.category}</p><h1>{product.name}<span className="title-period">.</span></h1></div><div className={`status status-${statusTone(product.status)}`}><i />{product.status}<small>{product.statusDetail}</small></div></div>
        <p className="product-detail-lead">{product.description}</p>
      </section>
      <div className="product-detail-grid">
        <section className="detail-block"><span className="detail-label">THE PROBLEM</span><h2>Why it exists.</h2><p>{product.problem}</p></section>
        <section className="detail-block"><span className="detail-label">PRODUCT SCOPE</span><h2>What it is designed to do.</h2><ul className="scope-list">{product.scope.map((item) => <li key={item}><span>↗</span>{item}</li>)}</ul></section>
      </div>
      <section className="availability-panel"><div><span className="detail-label">CURRENT AVAILABILITY</span><h2>Where things stand.</h2><p>{product.availability}</p></div><a className="button button-primary" href={product.ctaHref} target={product.externalCta ? "_blank" : undefined} rel={product.externalCta ? "noreferrer" : undefined}>{product.ctaLabel}<Arrow diagonal /></a></section>
      <div className="product-return"><span>PART OF THE GUIDEPOST LABS ECOSYSTEM</span><Link href="/">Back to Guidepost <Arrow /></Link></div>
    </div>
  );
}
