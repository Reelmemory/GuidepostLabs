import Link from "next/link";

export default function NotFound() {
  return <div className="page-shell shell"><div className="page-hero"><div className="section-kicker"><span>404</span> / WRONG TURN</div><h1>This path<br /><span>doesn’t exist.</span></h1><p>The page may have moved, or the address may be incorrect.</p><Link className="button button-primary" href="/">Back to Guidepost <span aria-hidden="true">↗</span></Link></div></div>;
}
