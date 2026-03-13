'use client';

import React from 'react';
import Link from 'next/link';
import Typography from '@/components/shared/typography';

interface NextProjectProps {
    slug: string;
    title: string;
}

const NextProject = ({ slug, title }: NextProjectProps) => {
    return (
        <section className="relative w-full h-[100svh] bg-[#F9FAFB] flex items-center justify-center overflow-hidden">
            {/* Optional: super subtle outer haze */}
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_50%_50%,#003B38,transparent_60%)]" />

            <Link
                href={`/portfolio/${slug}`}
                className="
          relative z-10 rounded-full overflow-hidden
          w-[min(135vmin,1500px)] aspect-square
          bg-white
          ring-1 ring-black/5
          shadow-[0_40px_140px_rgba(0,0,0,0.12)]
          flex items-center justify-center
          animate-fadeInUp
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6900]/60
        "
            >
                {/* ===== Blobs Layer ===== */}
                <div className="absolute inset-0">
                    {/* Blob top-left (orange) */}
                    <div
                        className="
              absolute left-[6%] top-[12%]
              w-[55%] h-[55%]
              rounded-full blur-[95px]
              opacity-70
              mix-blend-multiply
              blob-drift-a
            "
                        style={{
                            background:
                                'radial-gradient(circle at 30% 30%, rgba(255,105,0,0.95), rgba(255,105,0,0) 65%)',
                            transform: 'scaleX(1.08) scaleY(1.25)',
                        }}
                    />

                    {/* Blob bottom-right (orange) */}
                    <div
                        className="
              absolute right-[10%] bottom-[12%]
              w-[52%] h-[52%]
              rounded-full blur-[95px]
              opacity-65
              mix-blend-multiply
              blob-drift-b
            "
                        style={{
                            background:
                                'radial-gradient(circle at 70% 70%, rgba(255,105,0,0.90), rgba(255,105,0,0) 68%)',
                            transform: 'scaleX(1.12) scaleY(1.22)',
                        }}
                    />

                    {/* Tiny teal tint for depth (very subtle) */}
                    <div
                        className="
              absolute left-[38%] top-[55%]
              w-[45%] h-[45%]
              rounded-full blur-[120px]
              opacity-20
              mix-blend-multiply
              blob-drift-c
            "
                        style={{
                            background:
                                'radial-gradient(circle at 50% 50%, rgba(0,59,56,0.55), rgba(0,59,56,0) 70%)',
                        }}
                    />

                    {/* ===== Soft veil (DON’T overdo it) ===== */}
                    <div className="absolute inset-0 bg-white/55" />

                    {/* ===== Vignette / edge softness ===== */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'radial-gradient(circle at center, rgba(255,255,255,0.0) 40%, rgba(255,255,255,0.72) 78%, rgba(255,255,255,0.92) 100%)',
                        }}
                    />

                    {/* subtle inner shadow */}
                    <div className="absolute inset-0 shadow-[inset_0_0_110px_rgba(0,0,0,0.08)]" />
                </div>

                {/* ===== Content ===== */}
                <div className="relative z-10 text-center px-6">
                    {/* <Typography
            typo="header-1-medium"
            className="
              text-[#003B38] tracking-tighter font-medium leading-[0.95]
              text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem]
            "
          >
            Next project
          </Typography> */}
                    <h1 className="font-medium tracking-tight leading-[1.05] text-[clamp(72px,5.5vw,128px)] text-app-primary-medium">
                        Next <span className="font-semibold oleo-script text-app-secondary">Project</span>
                    </h1>




                    <div className="mt-6 flex flex-col items-center gap-3">

                        <div className="h-[1px] w-40 sm:w-56 md:w-72 bg-[#003B38]/18" />

                        <p className="mx-auto mt-5 max-w-2xl text-[clamp(24px,1.4vw,28px)] text-app-primary-medium/70">
                            {title}
                        </p>
                        <Typography typo="body-small-medium" className="text-[#003B38]/50">
                            Click to continue
                        </Typography>
                    </div>
                </div>
            </Link>

            <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translate3d(0, 14px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 700ms ease-out both;
        }

        @keyframes driftA {
          0% {
            transform: translate3d(0px, 0px, 0) scale(1.02);
          }
          50% {
            transform: translate3d(36px, -18px, 0) scale(1.08);
          }
          100% {
            transform: translate3d(0px, 0px, 0) scale(1.02);
          }
        }
        @keyframes driftB {
          0% {
            transform: translate3d(0px, 0px, 0) scale(1.02);
          }
          50% {
            transform: translate3d(-32px, 22px, 0) scale(1.07);
          }
          100% {
            transform: translate3d(0px, 0px, 0) scale(1.02);
          }
        }
        @keyframes driftC {
          0% {
            transform: translate3d(0px, 0px, 0) scale(1.02);
          }
          50% {
            transform: translate3d(-14px, -12px, 0) scale(1.05);
          }
          100% {
            transform: translate3d(0px, 0px, 0) scale(1.02);
          }
        }

        .blob-drift-a {
          animation: driftA 9s ease-in-out infinite;
        }
        .blob-drift-b {
          animation: driftB 10.5s ease-in-out infinite;
        }
        .blob-drift-c {
          animation: driftC 12s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fadeInUp,
          .blob-drift-a,
          .blob-drift-b,
          .blob-drift-c {
            animation: none !important;
          }
        }
      `}</style>
        </section>
    );
};

export default NextProject;
