import Link from "next/link";
import { HiStar } from "react-icons/hi";

export default function PackageGrid({ items }) {
  return (
    <div className="section-wrap pt-4">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.slug} className="glass card-hover rounded-2xl p-3">
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full rounded-xl object-cover"
            />
            <div className="space-y-2 p-2">
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.summary}</p>
              <div className="flex items-center justify-between text-sm">
                <span>{item.duration}</span>
                <span className="font-semibold text-cyan-100">{item.price}</span>
              </div>
              <p className="flex items-center gap-1 text-amber-300">
                <HiStar />
                {item.rating}
              </p>
              <div className="flex gap-2">
                <Link href={`/packages/${item.slug}`} className="btn-outline">
                  Details
                </Link>
                <Link href="/book-now" className="btn-primary">
                  Book
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
