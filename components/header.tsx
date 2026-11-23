import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/community", label: "Community" },
  { href: "/studio", label: "Studio" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Guidepost Labs home">
          <Image src="/brand/guidepost-lockup.png" alt="Guidepost — Navigate Crypto Together" width={956} height={384} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-cta" href="https://discord.gg/TwbwfjJmh" target="_blank" rel="noreferrer">
          Join community <span aria-hidden="true">↗</span>
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="https://discord.gg/TwbwfjJmh" target="_blank" rel="noreferrer">Join community ↗</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
