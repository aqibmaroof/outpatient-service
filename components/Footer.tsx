import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { IconChevronUp } from "./icons";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link className="flex items-center justify-start" href="/">
              <Logo variant="dark" comingFor="footer" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-slate-500">
              {site.address}
            </p>
            <p className="mt-4 text-sm text-slate-500">{site.phone}</p>
          </div>

          {/* Link columns */}
          {site.footer.columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold tracking-wide text-ink">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-slate-200">
        <Container>
          <div className="flex items-center justify-between py-6 text-sm text-slate-500">
            <p>© 2026 {site.brand.name}</p>
            <div className="flex items-center gap-5">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-brand"
              >
                Privacy Policy
              </Link>
              <a
                href="#top"
                aria-label="Back to top"
                className="flex h-8 w-8 items-center justify-center rounded bg-brand text-white hover:bg-brand-dark"
              >
                <IconChevronUp className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
