"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { destinations } from "@/lib/data";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-float",
        { y: 24, opacity: 0.3 },
        { y: -2, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power2.out" }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="section-wrap pt-10">
      <div
        className="hero-grid overflow-hidden rounded-[2rem] border border-white/20 p-5 md:p-8"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(7,17,30,0.82), rgba(7,17,30,0.45)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-fit rounded-full border border-cyan-200/40 bg-black/20 px-4 py-1 text-xs tracking-[0.22em] text-cyan-100"
          >
            PREMIUM CORPORATE TRAVEL
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="max-w-xl text-4xl leading-tight md:text-6xl"
          >
            {["Explore", "The", "World", "With", "Elite", "Precision"].map(
              (word) => (
                <motion.span
                  key={word}
                  className="mr-3 inline-block"
                  variants={{
                    hidden: { y: 18, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                >
                  {word}
                </motion.span>
              )
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-xl text-slate-200"
          >
            Travnex designs elevated global experiences for teams,
            founders, and high-performance professionals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <Link href="/book-now" className="btn-primary">
              Start Booking
            </Link>
            <Link href="/destinations" className="btn-outline">
              Explore Destinations
            </Link>
          </motion.div>
        </div>

        <div className="glass rounded-3xl p-3">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500 }}
            loop
            spaceBetween={12}
            slidesPerView={1.1}
            breakpoints={{ 900: { slidesPerView: 1.2 } }}
          >
            {destinations.slice(0, 4).map((item) => (
              <SwiperSlide key={item.slug}>
                <Link
                  href={`/destinations/${item.slug}`}
                  className="hero-float block overflow-hidden rounded-2xl border border-white/20 bg-black/25 p-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-44 w-full rounded-xl object-cover"
                  />
                  <p className="mt-3 text-lg">{item.name}</p>
                  <p className="text-sm text-slate-300">{item.short}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
