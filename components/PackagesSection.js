import Link from "next/link";
import { HiStar } from "react-icons/hi";
import { packages } from "@/lib/data";

export default function PackagesSection() {
  return (
    <section className="section-wrap">
      <h2 className="section-title">Tour Packages</h2>
      <p className="section-copy mt-3">
        Flexible premium package options designed for leisure, adventure,
        wellness, and executive groups.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {packages.map((item) => (
          <article
            key={item.slug}
            className="glass card-hover rounded-2xl border border-white/20 p-3"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full rounded-xl object-cover"
            />
            <div className="p-2">
              <h3 className="mt-2 text-2xl">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.summary}</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span>{item.duration}</span>
                <span className="font-semibold text-cyan-100">{item.price}</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-sm text-amber-300">
                <HiStar />
                <span>{item.rating}</span>
              </div>
              <div className="mt-4 flex gap-2">
                <Link href={`/packages/${item.slug}`} className="btn-outline">
                  View Details
                </Link>
                <Link href="/book-now" className="btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
