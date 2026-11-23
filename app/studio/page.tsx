import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/arrow";

export const metadata: Metadata = { title: "The Studio", description: "How Guidepost Labs connects community insight with focused Web3 product development." };

const stages = [
  { n: "01", title: "Listen", text: "Pay attention to what people are exploring, where they get stuck and what keeps coming up." },
  { n: "02", title: "Define", text: "Separate a recurring problem from a one-off request. Write down who it affects and what a useful outcome would look like." },
  { n: "03", title: "Build", text: "Give the problem a focused product scope. Test the smallest useful solution before expanding it." },
  { n: "04", title: "Return", text: "Bring the learning back to the community. Share what changed, what did not work and what should happen next." },
];

export default function StudioPage() {
  return (
    <div className="page-shell shell">
      <div className="page-hero"><div className="section-kicker"><span>THE ORGANIZATION</span> / GUIDEPOST LABS</div><h1>A studio shaped<br /><span>by real needs.</span></h1><p>Guidepost Labs is the umbrella organization behind the community and its independent products. The studio looks for useful problems in Web3 and builds focused tools to solve them.</p></div>
      <section className="studio-principles"><div><span className="detail-label">OUR POSITION</span><h2>Community gives us context.<br />Products give that context form.</h2></div><p>Guidepost is not just a directory of tools. The community and product studio reinforce each other: shared experience helps identify problems, and useful products give the ecosystem something concrete to improve.</p></section>
      <section className="studio-process"><div className="section-kicker"><span>PROPOSED WORKING LOOP</span></div><div className="process-grid">{stages.map((stage) => <article key={stage.n}><span>{stage.n}</span><h3>{stage.title}</h3><p>{stage.text}</p></article>)}</div><p className="process-note">A proposed way to connect community feedback with product decisions. Specific ownership and moderation practices remain to be confirmed.</p></section>
      <section className="studio-ecosystem"><div><span className="detail-label">INDEPENDENT PRODUCTS</span><h2>One ecosystem.<br />Distinct jobs.</h2></div><div><p>Strike, DropCheck and MintPulse each have their own purpose and release path. They sit within Guidepost Labs without implying a shared login, wallet or technical dependency.</p><Link className="inline-link" href="/products">Explore the products <Arrow /></Link></div></section>
      <div className="product-return"><span>HAVE A PROBLEM WORTH EXPLORING?</span><Link href="/community">Bring it to the community <Arrow /></Link></div>
    </div>
  );
}
