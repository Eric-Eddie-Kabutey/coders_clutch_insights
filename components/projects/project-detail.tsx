'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { clients_project } from '@/constant';
import Typography from '../shared/typography';
import ScrollReveal from '../reusable/scroll-reveal';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = clients_project.find((p) => p.slug === slug);

  if (!project) return null;

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-container flex flex-col items-center text-center gap-8">
          <ScrollReveal>
            <Typography 
              typo="header-1-semibold" 
              className="!text-7xl md:!text-9xl tracking-[0.05em] leading-none uppercase max-w-6xl mx-auto"
            >
              {project.title}
            </Typography>
          </ScrollReveal>

          {/* The 3 Tags are back */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-6 py-2 rounded-full border border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                {project.category}
              </span>
              <span className="px-6 py-2 rounded-full border border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                Development
              </span>
              <span className="px-6 py-2 rounded-full border border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                UI/UX
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 pb-24">
        <div className="max-container">
          <ScrollReveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1rem]">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 pb-20">
        <div className="max-container max-w-[1200px] mx-auto border-t border-gray-100 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left side: Header */}
            <div className="md:col-span-4">
              <ScrollReveal>
                <h2 className="text-[12px] uppercase tracking-[0.3em] font-bold text-black">
                  Project overview
                </h2>
              </ScrollReveal>
            </div>

            {/* Right side: Paragraph text */}
            <div className="md:col-span-8">
              <ScrollReveal>
                <p className="text-[1.1rem] md:text-[1.4rem] leading-[1.7] text-gray-700 font-normal max-w-[800px]">
                  {project.description}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Vertical Line at the bottom */}
      <div className="w-full flex justify-center pb-20">
        <ScrollReveal>
          <div className="w-[1px] h-24 bg-gray-300" />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ProjectDetail;