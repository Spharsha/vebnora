"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";

const links = [
  { name: "Services", href: "/#services" },
  { name: "Samples (Demo)", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <Link href="/" aria-label="Vebnora home" className="flex items-center">
        <Logo idPrefix="header" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="hover:text-white">
            {link.name}
          </Link>
        ))}
      </div>

      <Link
        href="/#contact"
        className="hidden rounded-full bg-white px-5 py-3 text-sm font-bold text-gray-900 transition hover:bg-violet-200 md:inline-block"
      >
        Let's Talk ↗
      </Link>

      {/* Mobile Navigation */}
      <div className="relative md:hidden">
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold"
        >
          {menuOpen ? "Close ✕" : "Menu ☰"}
        </button>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute right-0 top-14 z-50 w-56 rounded-2xl border border-white/10 bg-[#15172a] p-4 shadow-xl"
          >
            <div className="flex flex-col text-sm text-gray-300">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 py-3 last:border-0 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
