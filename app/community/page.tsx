import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { COMMUNITY_URL } from "@/lib/site";

export const metadata: Metadata = { title: "Community", description: "Connect, learn, share opportunities and navigate Web3 with the Guidepost community." };

export default function CommunityPage() {
  return (
    <div className="page-shell shell">
      <div className="page-hero community-page-hero"><div className="section-kicker"><span>THE PEOPLE</span> / GUIDEPOST COMMUNITY</div><h1>Navigate better<br /><span>with others.</span></h1><p>Web3 is easier to make sense of when you can compare notes, ask better questions and learn alongside people moving in the same space.</p><a className="button button-primary" href={COMMUNITY_URL} target="_blank" rel="noreferrer">Join the Guidepost Discord <Arrow diagonal /></a></div>
      <div className="community-content-grid"><section><span className="detail-label">WHY COMMUNITY</span><h2>More than a place to chat.</h2><p>Guidepost is a place to connect, learn, collaborate and discover opportunities. It is also where useful problems can become visible to the studio.</p></section><section><span className="detail-label">BRING INTO THE ROOM</span><h2>Start with what you know.</h2><ul className="scope-list"><li><span>01</span>Something you are trying to understand in Web3.</li><li><span>02</span>An opportunity or resource worth sharing.</li><li><span>03</span>A workflow that is harder than it should be.</li><li><span>04</span>A question, idea or useful correction.</li></ul></section></div>
      <div className="community-close"><p>Come as you are. Bring curiosity, context and a willingness to contribute.</p><a className="inline-link" href={COMMUNITY_URL} target="_blank" rel="noreferrer">Open the Discord invite <Arrow diagonal /></a></div>
      <div className="product-return"><span>EXPLORE WHAT WE ARE BUILDING</span><Link href="/products">Browse products <Arrow /></Link></div>
    </div>
  );
}
