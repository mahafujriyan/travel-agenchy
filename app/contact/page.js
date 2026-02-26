import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Contact Travnex for inquiries and planning support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Tell us your travel goals and our team will provide a tailored response."
      />
      <section className="section-wrap pt-4">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-2xl">Get In Touch</h2>
            <p className="mt-3 text-sm text-slate-300">Email: hello@venturestravel.com</p>
            <p className="mt-2 text-sm text-slate-300">Phone: +1 (555) 231-8890</p>
            <p className="mt-2 text-sm text-slate-300">
              Address: 1800 Mission Plaza, San Francisco, CA
            </p>
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
