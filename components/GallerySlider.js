"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function GallerySlider({ images, alt }) {
  return (
    <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={12}>
      {images.map((src) => (
        <SwiperSlide key={src}>
          <img src={src} alt={alt} className="h-[400px] w-full rounded-2xl object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
