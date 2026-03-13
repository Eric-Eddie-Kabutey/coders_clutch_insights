'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Typography from '@/components/shared/typography';
import NextImage from 'next/image';

interface SliderProps {
  images: (string | import('next/image').StaticImageData)[];
}

/**
 * PhoneSlider Component
 * A horizontal, draggable carousel designed to showcase mobile-responsive screenshots
 * with a clean, high-end aesthetic.
 */
const PhoneSlider: React.FC<SliderProps> = ({ images }) => {
  // Use placeholder if no images are provided
  const baseSlides = images && images.length > 0
    ? images.map((src, i) => ({ id: i, src }))
    : [{ id: 0, src: '/placeholder.svg' }];

  // Double the slides to ensure seamless CSS marquee (requires -50% shift)
  const repeatedSlides = [...baseSlides, ...baseSlides];

  return (
    <div
      className="w-full bg-white py-32 md:py-48 overflow-hidden border-t border-gray-100"
    >

      {/* HEADER SECTION */}
      <div className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto mb-32 md:mb-48 flex items-center justify-between">
        <Typography typo="header-2-medium" className="text-black" >
          Responsive
        </Typography>
      </div>

      {/* CONTINUOUS SCROLL TRACK */}
      <div className="flex overflow-visible">
        <div className="flex shrink-0 gap-8 animate-scroll hover:[animation-play-state:paused] w-max">
          {repeatedSlides.map((slide, i) => (
            <div
              key={`${slide.id}-${i}`}
              className="flex-shrink-0 group"
              style={{ width: `280px` }}
            >
              <div className="relative aspect-[9/19] w-full bg-transparent rounded-sm transition-transform duration-500 group-hover:scale-105">
                <NextImage
                  src={slide.src}
                  alt={`Showcase ${slide.id}`}
                  fill
                  className="object-contain pointer-events-none"
                  sizes="(max-width: 768px) 280px, 280px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneSlider;