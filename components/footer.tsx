import Image from "next/image";
import Link from "next/link";
import { COMMUNITY_URL, SITE_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand"><Image src="/brand/guidepost-lockup.png" alt="Guidepost — Navigate Crypto Together" width={956} height={384} /></div>
        <div className="footer-links">
          <div><span className="footer-label">Explore</span><Link href="/products">Products</Link><Link href="/community">Community</Link><Link href="/studio">Studio</Link></div>
          <div><span className="footer-label">Connect</span><a href={COMMUNITY_URL} target="_blank" rel="noreferrer">Discord ↗</a><a href={SITE_URL}>guidepostlabs.xyz ↗</a></div>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Guidepost Labs</span><span>Built around the problems worth solving.</span></div>
    </footer>
  );
}
