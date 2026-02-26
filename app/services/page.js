import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Services",
  description: "Premium services including itinerary design, concierge, and corporate travel management.",
};

const services = [
  {
    title: "Luxury Itinerary Planning",
    copy: "Tailored multi-destination planning with timeline precision and premium vendor selection.",
  },
  {
    title: "Corporate Retreat Management",
    copy: "Venue sourcing, activity planning, and logistical coordination for executive and team retreats.",
  },
  {
    title: "Concierge Support",
    copy: "Dedicated travel specialists for reservations, requests, and live itinerary updates.",
  },
  {
    title: "Group Travel Operations",
    copy: "Scaled planning for events, conferences, and private experiences with unified support.",
  },
  {
    title: "Visa & Documentation Help",
    copy: "Guided support for document readiness and entry requirement preparation.",
  },
  {
    title: "24/7 Emergency Assistance",
    copy: "Rapid support network for schedule shifts, disruptions, and travel contingencies.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Enterprise-grade service standards adapted for premium personal and business travel."
      />
      <section className="section-wrap pt-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <article key={item.title} className="glass card-hover rounded-2xl p-5">
              <h2 className="text-2xl">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
