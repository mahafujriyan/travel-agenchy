import PageHero from "@/components/PageHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Testimonials",
  description: "See what clients say about Travnex experiences.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Client Testimonials"
        subtitle="Real feedback from founders, teams, and enterprise clients who travel with us."
      />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
