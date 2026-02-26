import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Book Now",
  description: "Submit your premium travel booking request.",
};

export default function BookNowPage() {
  return (
    <>
      <PageHero
        title="Book Your Journey"
        subtitle="Select your package, preferred dates, and traveler details. Our team confirms quickly."
      />
      <section className="section-wrap pt-4">
        <BookingForm />
      </section>
    </>
  );
}
