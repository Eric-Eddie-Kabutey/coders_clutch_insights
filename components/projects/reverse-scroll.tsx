"use client";

import React, { useRef } from "react";
import NextImage from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

/**
 * Array of asset paths. Replace "/placeholder.svg" with actual image URLs.
 */
const CONCEPT_IMAGES = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

/**
 * Utility function to handle infinite wrapping of the marquee position.
 */
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const MarqueeRow = ({ images, baseVelocity = 1 }: { images: string[], baseVelocity?: number }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const directionFactor = useRef(1);
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((t, delta) => {
    const currentVelocity = smoothVelocity.get();

    /**
     * Sticky direction logic: Updates only when active scrolling is detected.
     */
    if (currentVelocity > 0) {
      directionFactor.current = 1;
    } else if (currentVelocity < 0) {
      directionFactor.current = -1;
    }

    // Reduced speed calculation (baseVelocity is now used at a smaller scale)
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex flex-nowrap overflow-hidden whitespace-nowrap py-2">
      <motion.div className="flex flex-nowrap gap-6" style={{ x }}>
        {[...images, ...images, ...images, ...images].map((src, index) => (
          <div
            key={index}
            className="w-[450px] h-[280px] flex-shrink-0 bg-neutral-900 rounded-[32px] border border-neutral-800 overflow-hidden"
          >
            <div className="relative w-full h-full">
              <NextImage
                src={src}
                alt="Design Concept"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const InitialConcepts = () => {
  return (
    <section className="bg-white py-24 w-full overflow-hidden">
      {/* Header section with right-aligned description */}
      <div className="max-w-[1400px] mx-auto px-10 mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <h2 className="text-6xl font-medium tracking-tight text-neutral-900">
          Initial concepts
        </h2>
        <p className="text-neutral-400 text-lg md:text-right max-w-xs pb-2">
          Early UI Concepts and Visual Explorations.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Adjusted baseVelocity for a slower, smoother crawl */}
        <MarqueeRow images={CONCEPT_IMAGES} baseVelocity={0.6} />
        <MarqueeRow images={CONCEPT_IMAGES} baseVelocity={-0.6} />
      </div>
    </section>
  );
};

export default InitialConcepts;