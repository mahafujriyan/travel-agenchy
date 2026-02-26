import Link from "next/link";
import { destinations } from "@/lib/data";

export default function FeaturedDestinations() {
  return (
    <section className="section-wrap">
      <h2 className="section-title">Featured Destinations</h2>
      <p className="section-copy mt-3">
        Curated global locations for luxury leisure, corporate retreats, and
        high-end exploration.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((item) => (
          <Link
            key={item.slug}
            href={`/destinations/${item.slug}`}
            className="glass card-hover group overflow-hidden rounded-2xl"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="space-y-1 p-4">
              <p className="text-xl">{item.name}</p>
              <p className="text-sm text-slate-300">{item.country}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
