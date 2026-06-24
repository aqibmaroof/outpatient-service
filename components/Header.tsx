import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { site } from "@/lib/site";

// Transparent header that floats over each page's dark hero.
export default function Header() {
  return (
    <header id="top" className="absolute inset-x-0 top-0 z-30">
      {/* Contact bar */}
      <div className="border-b border-white/15 py-2 text-center text-sm text-white/90">
        Contact Us: <span className="font-semibold">{site.phone}</span>
      </div>

      {/* Navigation */}
      <Container>
        <div className="flex items-center justify-between gap-6 py-6">
          <Link href="/">
            <Logo variant="light" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
