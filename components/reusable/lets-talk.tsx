'use client';

import React from "react";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";
import ArcHeading from "./arc-text";

interface LetsTalkProps {
  title?: React.ReactNode;
  subtitle?: string;
}

export default function LetsTalk({ title, subtitle }: LetsTalkProps) {
  return (
    <section className="relative w-full">
      {/* Background: ring + blurred blobs */}
      <div className="z-10 pointer-events-none absolute inset-0 -top-[50vw] overflow-x-hidden overflow-y-visible">
        {/* faint giant circle outline */}
        {/* <div className="sun-ring" /> */}

        {/* orbit group */}
        <div className="sun-orbit">
          <div className="sun-blob sun-blob-a" />
          <div className="sun-blob sun-blob-b" />
        </div>

        {/* subtle center vignette*/}
        {/* <div className="sun-vignette" /> */}
      </div>

      {/* Content */}
      <ScrollReveal>
        <div className="relative z-10 flex h-screen py-0 sm:py-48 items-center justify-center px-6">
          <div className="mx-auto w-full max-w-7xl text-center">
            
              <h1 className="font-medium tracking-tight leading-[1.05] text-[clamp(72px,5.5vw,128px)] text-app-primary-medium">
                Turn <span className="font-semibold oleo-script text-app-secondary">{title}</span> Into an
                <br />
                <span className="font-light">Experience</span>{" "}
                <span className="font-medium">That Lasts</span>
              </h1>
            

            <p className="mx-auto mt-5 max-w-2xl text-[clamp(24px,1.4vw,28px)] text-app-primary-medium/70">
              {subtitle || "You have a story worth sharing — we help you tell it in a way that’s impossible to ignore."}
            </p>

            <div className="mt-8 flex items-center justify-center">
              <button

                type="button"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-medium tracking-wide text-app-primary-medium backdrop-blur-sm transition-all duration-300 hover:border-slate-400 hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                LET’S TALK
                <ArrowUpRight className="h-4 w-4 text-app-primary-medium transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* CSS */}
      <style jsx>{`
        /* giant circle outline like the screenshot */
        .sun-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 120vmax;
          height: 120vmax;
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          opacity: 0.55;
        }

        /* orbit container rotates very slowly */
        .sun-orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 120vmax;
          height: 120vmax;
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          animation: orbit 22s linear infinite;
        }

        .sun-blob {
          position: absolute;
          width: 52vmax;
          height: 36vmax;
          border-radius: 9999px;
          filter: blur(70px);
          opacity: 0.55;
          /* multiply makes it feel like “light” on white */
          mix-blend-mode: multiply;
          background: radial-gradient(
            closest-side,
                rgba(1, 64, 61, 0.55) 0%,
    rgba(1, 64, 61, 0.22) 42%,
    rgba(255, 255, 255, 0) 72%
          );
        }

        /* top-left blob */
        .sun-blob-a {
          left: 5%;
          top: 10%;
          transform: rotate(-18deg);
          animation: wobbleA 7.5s ease-in-out infinite;
        }

        /* bottom-right blob */
        .sun-blob-b {
          right: 6%;
          bottom: 12%;
          transform: rotate(18deg);
          animation: wobbleB 8.5s ease-in-out infinite;
        }

        /* subtle center vignette so text stays crisp */
        .sun-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 45%,
            rgba(255, 255, 255, 0.85) 0%,
            rgba(255, 255, 255, 0.6) 35%,
            rgba(255, 255, 255, 0.35) 55%,
            rgba(255, 255, 255, 0) 78%
          );
        }

        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes wobbleA {
          0%,
          100% {
            transform: rotate(-18deg) scale(1);
          }
          50% {
            transform: rotate(-10deg) scale(1.06);
          }
        }

        @keyframes wobbleB {
          0%,
          100% {
            transform: rotate(18deg) scale(1);
          }
          50% {
            transform: rotate(10deg) scale(1.06);
          }
        }
      `}</style>
    </section>
  );
}
