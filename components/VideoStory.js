"use client";

import { motion } from "framer-motion";
import { HiOutlinePlay } from "react-icons/hi";

export default function VideoStory() {
  return (
    <section className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/20"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-[420px] w-full object-cover"
          poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-beautiful-beach-1560/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 p-6 text-center">
          <p className="text-sm tracking-[0.25em] text-cyan-100">OUR STORY</p>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-5xl">
            Crafted journeys, cinematic destinations, unforgettable outcomes.
          </h2>
          <button className="mt-6 rounded-full border border-cyan-100/70 bg-white/10 p-4 text-2xl">
            <HiOutlinePlay />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
