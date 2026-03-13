'use client';
import React from 'react';
import productImg from "@/public/assets/images/solutions/ai-agent/ai-agent-bg-img.png";
import { Button } from '@/components/ui/button';
import Typography from '@/components/shared/typography';
import Image from 'next/image';

function AgentMainHero() {
  return (
    <section className="w-full py-16">
      <div className="max-container lg:w-[85%] w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-white space-y-6">
          <Typography
            typo="body-medium-medium"
            className="text-app-primary-medium font-semibold uppercase tracking-wide"
          >
            AI Agent Development
          </Typography>

          <Typography
            className="text-4xl md:text-5xl font-semibold leading-tight text-app-primary-light"
            typo="header-2-medium"
          >
            On-Cloud or <span className="text-app-primary-deep oleo-script">On-Premise</span> —  
            <br className="hidden sm:block" />The Choice Is Yours.
          </Typography>

          <Typography
            className="text-gray-600 max-w-lg leading-relaxed"
            typo="body-medium-medium"
          >
            Empower your business with intelligent, autonomous agents built for performance, 
            security, and scalability — whether deployed in the cloud or hosted on-premise.
          </Typography>

          <Button
            variant="outline"
            className="w-fit mt-4 px-10 py-3 text-lg font-medium rounded-full border-2 border-app-primary-medium hover:bg-app-primary-medium hover:text-white transition-all duration-300"
          >
            Let&apos;s Talk
          </Button>
        </div>

        <div className='flex-1 h-fit'> <Image src={productImg} alt='Product hero image' className='w-full h-full object-cover rounded-xl' /> </div>

      </div>
    </section>
  );
}

export default AgentMainHero;
