export default function PageHero({ title, subtitle }) {
  return (
    <section className="section-wrap pb-2">
      <div className="glass rounded-3xl border border-white/20 p-8 md:p-12">
        <h1 className="text-4xl md:text-6xl">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-3xl text-slate-300">{subtitle}</p> : null}
      </div>
    </section>
  );
}
