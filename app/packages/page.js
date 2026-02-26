import PageHero from "@/components/PageHero";
import PackageGrid from "@/components/PackageGrid";
import CTASection from "@/components/CTASection";
import { packages } from "@/lib/data";

export const metadata = {
  title: "Tour Packages",
  description: "Explore premium tour packages crafted for every travel style.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        title="Tour Packages"
        subtitle="Flexible premium package options for executives, teams, and global explorers."
      />
      <PackageGrid items={packages} />
      <CTASection />
    </>
  );
}
