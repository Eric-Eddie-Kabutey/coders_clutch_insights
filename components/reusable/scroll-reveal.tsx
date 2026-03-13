'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  threshold?: number; // optional fine-tuning
}

export default function ScrollReveal({
  children,
  delay = 0.2,
  y = 50,
  threshold = 0.2,
}: ScrollRevealProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: 'easeOut' },
      });
    } else {
      // 👇 Reset when element leaves viewport so it can re-animate again
      controls.start({
        opacity: 0,
        y,
        transition: { duration: 0.4, ease: 'easeIn' },
      });
    }
  }, [inView, controls, delay, y]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
