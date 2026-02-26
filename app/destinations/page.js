import PageHero from "@/components/PageHero";
import DestinationGrid from "@/components/DestinationGrid";
import CTASection from "@/components/CTASection";
import { destinations } from "@/lib/data";

export const metadata = {
  title: "Destinations",
  description: "Explore curated premium destinations by Travnex .",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title="Global Destinations"
        subtitle="Browse premium travel locations curated for executive, leisure, and group journeys."
      />
      <DestinationGrid items={destinations} />
      <CTASection />
    </>
  );
}
