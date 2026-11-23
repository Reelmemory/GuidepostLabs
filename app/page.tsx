import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { ProductCard } from "@/components/product-card";
import { COMMUNITY_URL, products } from "@/lib/site";

const pillars = [
  { number: "01", title: "Discover", text: "Learn from people navigating the same fast-moving ecosystem. Share what you find and what you still need to understand." },
  { number: "02", title: "Build", text: "Turn recurring friction into focused products with a clear job to do — not another tool looking for a problem." },
  { number: "03", title: "Move forward", text: "Put useful work back in the hands of the community. Learn from real use and keep improving." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-with-dot"><span /> Community-driven Web3 product studio</div>
            <h1>Navigate Crypto <span>Together.</span></h1>
            <p className="hero-lead">A place to connect, discover opportunities and build useful solutions for the world on-chain.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/products">Explore the ecosystem <Arrow /></Link>
              <Link className="text-link" href={COMMUNITY_URL} target="_blank" rel="noreferrer">Enter the community <Arrow diagonal /></Link>
            </div>
            <div className="hero-note"><span className="note-line" /> Community first. Product minded. Always moving.</div>
          </div>
          <div className="hero-art" role="img" aria-label="Guidepost brand symbol with layered waves">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-core"><Image src="/brand/guidepost-icon-512.png" alt="" width={1024} height={1024} priority /></div>
            <div className="art-coordinate coordinate-top">WEB3 / TOGETHER</div>
            <div className="art-coordinate coordinate-bottom">FIND YOUR NEXT STEP <span>↗</span></div>
          </div>
        </div>
        <div className="hero-bottom shell"><span>01 — COMMUNITY</span><span>02 — PRODUCTS</span><span>03 — PROGRESS</span></div>
      </section>

      <section className="section-intro shell">
        <div className="section-kicker"><span>01</span> THE GUIDEPOST IDEA</div>
        <div className="intro-grid">
          <h2>Web3 moves fast.<br /><span>Find your direction.</span></h2>
          <div className="intro-copy"><p>Guidepost Labs brings a community and a product studio under one roof. People share what they are exploring, where they get stuck and what they wish existed. We build around the problems worth solving.</p><Link className="inline-link" href="/studio">How the studio works <Arrow /></Link></div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="shell">
          <div className="section-heading-row"><div><div className="section-kicker"><span>02</span> HOW WE MOVE</div><h2>From shared insight<br />to useful tools.</h2></div><p>The community and the products are not separate ideas. Each makes the other more useful.</p></div>
          <div className="pillar-grid">{pillars.map((pillar) => <article className="pillar" key={pillar.number}><span className="pillar-number">{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}</div>
        </div>
      </section>

      <section className="products-section shell">
        <div className="section-heading-row"><div><div className="section-kicker"><span>03</span> THE PRODUCT ECOSYSTEM</div><h2>Different problems.<br /><span>Purpose-built products.</span></h2></div><Link className="inline-link" href="/products">View all products <Arrow /></Link></div>
        <div className="product-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        <p className="section-footnote">Each product has its own purpose, release path and access model. Availability is shown as currently confirmed.</p>
      </section>

      <section className="community-band">
        <div className="shell community-band-inner"><div><div className="section-kicker"><span>04</span> THE COMMUNITY</div><h2>Better navigation<br />starts with <em>conversation.</em></h2><p>Bring a question, share a discovery or tell us where a workflow breaks down. There is room to learn and build together.</p></div><div className="community-band-action"><span className="community-symbol">↗</span><p>Find your people.<br />Find your next step.</p><a className="button button-primary" href={COMMUNITY_URL} target="_blank" rel="noreferrer">Join the Discord <Arrow diagonal /></a></div></div>
      </section>
    </>
  );
}
