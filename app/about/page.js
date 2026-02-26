import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us",
  description: "Meet Ventures Travel and our mission for premium travel excellence.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Ventures Travel"
        subtitle="We are a premium travel and venture company focused on elevated journeys, clear logistics, and measurable service quality."
      />
      <section className="section-wrap pt-4">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Our Mission", "Design the most trusted premium travel experiences for modern teams and explorers."],
            ["Our Vision", "Create seamless travel ecosystems powered by service, technology, and elite partners."],
            ["Our Values", "Precision, hospitality, transparency, and long-term client partnerships."],
          ].map(([title, copy]) => (
            <article key={title} className="glass rounded-2xl p-5">
              <h2 className="text-2xl">{title}</h2>
              <p className="mt-2 text-sm text-slate-300">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
