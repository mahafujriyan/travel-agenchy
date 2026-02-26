import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Blog",
  description: "Travel insights, premium itinerary tips, and company updates.",
};

const posts = [
  {
    slug: "how-to-plan-a-premium-retreat",
    title: "How to Plan a Premium Corporate Retreat",
    excerpt:
      "A practical framework for designing high-value team retreats with outcomes, not just activities.",
  },
  {
    slug: "destination-selection-playbook",
    title: "Destination Selection Playbook for 2026",
    excerpt:
      "Criteria for balancing accessibility, seasonality, service quality, and budget in premium travel planning.",
  },
  {
    slug: "travel-risk-readiness",
    title: "Travel Risk Readiness Checklist",
    excerpt:
      "Operational steps to minimize disruption and keep business travel resilient.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Travel Journal"
        subtitle="Insights from our team on premium travel strategy, operations, and destination trends."
      />
      <section className="section-wrap pt-4">
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="glass rounded-2xl p-5">
              <h2 className="text-2xl">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
              <Link href="/contact" className="mt-4 inline-block text-cyan-100">
                Request Full Article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
