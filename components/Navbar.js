"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const links = [
  ["/", "Home"],
  ["/destinations", "Destinations"],
  ["/packages", "Tour Packages"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/testimonials", "Testimonials"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3">
      <nav className="glass glow-ring mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2">
        <Link href="/" className="text-lg font-semibold tracking-wide">
       <Image src="/travelnex-bg.png" alt="Logo" width={100} height={10} />
        </Link>
        <button
          className="text-2xl lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
        <ul className="hidden items-center gap-4 text-sm lg:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                className={`rounded-full px-3 py-2 transition ${
                  pathname === href
                    ? "bg-white/20 text-cyan-100"
                    : "text-slate-200 hover:bg-white/10"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/book-now" className="btn-primary">
              Book Now
            </Link>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="glass mt-2 rounded-2xl p-3 lg:hidden">
          <ul className="grid gap-2">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book-now"
                className="btn-primary block text-center"
                onClick={() => setOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
