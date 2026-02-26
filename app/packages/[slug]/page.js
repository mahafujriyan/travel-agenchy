import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import { packages } from "@/lib/data";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pkg = packages.find((item) => item.slug === slug);
  if (!pkg) return { title: "Package Not Found" };
  return {
    title: pkg.title,
    description: pkg.summary,
  };
}

export default async function PackageDetailsPage({ params }) {
  const { slug } = await params;
  const pkg = packages.find((item) => item.slug === slug);
  if (!pkg) notFound();

  return (
    <>
      <PageHero title={pkg.title} subtitle={pkg.summary} />
      <section className="section-wrap pt-4">
        <div className="glass grid gap-6 rounded-3xl p-5 lg:grid-cols-2">
          <img src={pkg.image} alt={pkg.title} className="h-80 w-full rounded-2xl object-cover" />
          <div>
            <h2 className="text-3xl">Package Overview</h2>
            <p className="mt-3 text-slate-300">
              Duration: {pkg.duration} | Price: {pkg.price} | Rating: {pkg.rating}
            </p>
            <ul className="mt-5 grid gap-2">
              {pkg.highlights.map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section-wrap pt-2">
        <h2 className="section-title">Reserve This Package</h2>
        <p className="section-copy mt-2">
          Complete your inquiry and our team will send a detailed offer.
        </p>
        <div className="mt-4">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
