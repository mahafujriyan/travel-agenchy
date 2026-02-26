import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import VideoStory from "@/components/VideoStory";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Ventures Travel",
    url: "https://ventures-travel.vercel.app",
    description:
      "Premium corporate and luxury travel planning with curated destinations and concierge support.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Hero />
      <FeaturedDestinations />
      <VideoStory />
      <PackagesSection />
      <TestimonialsSection />
      <StatsSection />
      <CTASection />
    </>
  );
}
