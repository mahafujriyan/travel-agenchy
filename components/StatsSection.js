"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const duration = 1200;

            const tick = (time) => {
              const progress = Math.min((time - start) / duration, 1);
              setCount(Math.floor(progress * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="section-wrap">
      <div className="glass grid gap-3 rounded-3xl p-4 md:grid-cols-3 md:p-7">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl bg-black/20 p-5 text-center">
            <p className="text-4xl font-semibold text-cyan-100">
              <Counter value={item.value} suffix={item.suffix} />
            </p>
            <p className="mt-2 text-sm tracking-wider text-slate-300">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
