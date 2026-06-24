"use client";

import { useState } from "react";
import Link from "next/link";
import { IconMenu, IconClose } from "./icons";
import { site } from "@/lib/site";

// Hamburger menu shown on small screens (hidden from md up).
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
      >
        {open ? (
          <IconClose className="h-6 w-6" />
        ) : (
          <IconMenu className="h-6 w-6" />
        )}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-white/15 bg-ink px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
