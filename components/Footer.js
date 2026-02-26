import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-white/15 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-300 md:flex-row">
        <p>© {new Date().getFullYear()} Travnex. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-cyan-100">
            Privacy
          </Link>
          <Link href="/contact" className="hover:text-cyan-100">
            Contact
          </Link>
          <Link href="/book-now" className="hover:text-cyan-100">
            Book
          </Link>
        </div>
      </div>
    </footer>
  );
}
