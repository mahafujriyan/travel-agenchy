import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="How Ventures Travel handles your data." />
      <section className="section-wrap pt-4">
        <article className="glass rounded-3xl p-6 text-sm text-slate-200">
          <p>
            We collect contact and booking details only to manage your inquiries and
            provide travel services. We do not sell personal information.
          </p>
          <p className="mt-3">
            By using this site, you consent to data processing necessary for itinerary
            planning and client communication.
          </p>
        </article>
      </section>
    </>
  );
}
