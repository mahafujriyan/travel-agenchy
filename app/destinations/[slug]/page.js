import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import GallerySlider from "@/components/GallerySlider";
import { destinations } from "@/lib/data";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return { title: "Destination Not Found" };

  return {
    title: destination.name,
    description: destination.short,
    openGraph: {
      title: destination.name,
      description: destination.short,
      images: [destination.image],
    },
  };
}

export default async function DestinationDetailsPage({ params }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) notFound();

  return (
    <>
      <PageHero title={destination.name} subtitle={destination.short} />
      <section className="section-wrap pt-4">
        <div className="glass rounded-3xl p-4">
          <GallerySlider images={destination.gallery} alt={destination.name} />
        </div>
      </section>
      <section className="section-wrap pt-5">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="glass rounded-3xl p-6 lg:col-span-2">
            <h2 className="text-3xl">About This Location</h2>
            <p className="mt-3 text-slate-300">{destination.about}</p>
            <h3 className="mt-7 text-2xl">Tour Plan Timeline</h3>
            <ol className="mt-3 grid gap-2">
              {destination.timeline.map((step, idx) => (
                <li
                  key={step}
                  className="rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm"
                >
                  {idx + 1}. {step}
                </li>
              ))}
            </ol>
          </article>
          <aside className="glass rounded-3xl p-6">
            <h3 className="text-2xl">Destination Info</h3>
            <p className="mt-2 text-sm text-slate-300">{destination.locationLabel}</p>
            <p className="mt-2 text-sm text-slate-300">
              Duration: {destination.duration} | Price: {destination.price}
            </p>
            <iframe
              src={destination.map}
              title={destination.locationLabel}
              className="mt-4 h-52 w-full rounded-xl border-0"
              loading="lazy"
            />
          </aside>
        </div>
      </section>
      <section className="section-wrap pt-2">
        <h2 className="section-title">Book This Destination</h2>
        <p className="section-copy mt-2">
          Complete the form and our team will send your customized itinerary.
        </p>
        <div className="mt-4">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
