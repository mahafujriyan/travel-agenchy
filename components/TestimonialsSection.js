"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="section-wrap">
      <h2 className="section-title">Testimonials</h2>
      <p className="section-copy mt-3">
        Trusted by executive teams, startups, and global organizations.
      </p>
      <div className="mt-8">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop
          slidesPerView={1}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="glass mx-auto max-w-4xl rounded-3xl p-7 text-center">
                <p className="text-xl leading-relaxed text-cyan-50 md:text-2xl">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-5 text-lg">{item.name}</p>
                <p className="text-sm text-slate-300">{item.role}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
