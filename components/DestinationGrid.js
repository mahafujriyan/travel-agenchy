import Link from "next/link";

export default function DestinationGrid({ items }) {
  return (
    <div className="section-wrap pt-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/destinations/${item.slug}`}
            className="glass card-hover overflow-hidden rounded-2xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl">{item.name}</h3>
              <p className="text-sm text-slate-300">{item.short}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
