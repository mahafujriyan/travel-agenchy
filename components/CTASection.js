import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-wrap">
      <div className="rounded-[2rem] border border-cyan-200/35 bg-gradient-to-r from-cyan-800/55 via-sky-700/40 to-cyan-500/45 p-8 text-center">
        <h2 className="text-3xl md:text-5xl">Start Your Journey Today</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-100">
          Let our team design a premium travel plan tailored to your schedule,
          goals, and destination preferences.
        </p>
        <Link href="/book-now" className="btn-primary mt-6 inline-block">
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
