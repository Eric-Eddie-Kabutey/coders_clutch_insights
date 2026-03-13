'use client';
import React from 'react'
import ai_developmentImg from "@/public/assets/images/solutions/ai_development.png";
import Image from 'next/image';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Lock, ShieldCheck, Sparkles, TrendingUp, Zap, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const security_measures = [
  {
    id: "1",
    icon: ShieldCheck, 
    content: "Boost Workflow efficiency by 40%",
    description: "AI-powered systems that enhance your business performance"
  },
  {
    id: "2",
    icon: Lock,
    content: "AI-Assisted Decision Making",
    description: "Empower your strategy with intelligent data-driven insights"
  },
  {
    id: "3",
    icon: CreditCard,
    content: "AI POC in 2–8 weeks",
    description: "Rapid prototyping for scalable AI solutions"
  },
]

function AiDevMainHero() {
  return (
    <div className='w-full pb-20 bg-gradient-to-br from-[#f4f2ec] via-[#f4f2ec] to-[#f4f2ec] relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3'></div>
      
      <section className='max-container lg:w-[90%] sm:w-[95%] w-[88%] h-full mx-auto relative z-10'>
        {/* Hero Section */}
        <div className='relative w-full py-16 lg:py-20 flex flex-col lg:flex-row gap-10 lg:gap-12 items-center'>
          {/* Text Content */}
          <div className='lg:w-1/2 w-full flex flex-col sm:gap-8 gap-4'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full w-fit shadow-sm'>
              <Sparkles size={16} className='text-blue-600' />
              <span className='text-sm font-medium text-blue-700'>#1 AI Development</span>
            </div>
            
            <div className='space-y-6'>
              <div className='space-y-4'>
                <Typography
                  typo="header-2-semibold"
                  className='plusJak text-gray-900 leading-tight'
                >
                   Trusted by Fortune 500+ 
                  <span className='block bg-gradient-to-r from-app-primary-deep to-app-primary-medium bg-clip-text text-transparent'>
                    Global Brands
                  </span>
                </Typography>
                <Typography
                  typo="header-6-regular"
                  className='text-gray-600 leading-relaxed max-w-lg sm:line-clamp-none line-clamp-2'
                >
                  Top brands and startups trust Coders Clutch for best-in-class AI software development services. 
                  With our end-to-end accelerator, we build AI-powered web, mobile, and enterprise applications that transform workflows.
                </Typography>
              </div>
              
              {/* Stats */}
              <div className='flex flex-wrap gap-6 pt-2'>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                  <span className='text-sm font-medium text-gray-700'>99.9% Accuracy Rate</span>
                </div>
                <div className='flex items-center gap-2'>
                  <TrendingUp size={16} className='text-blue-600' />
                  <span className='text-sm font-medium text-gray-700'>3x Faster Model Training</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Zap size={16} className='text-yellow-600' />
                  <span className='text-sm font-medium text-gray-700'>24/7 AI Monitoring</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Button
                    variant="outline"
                    size="lg"
                    className='border-app-primary-deep hover:bg-app-primary-light hover:text-white rounded-full'
                >
                    Let&apos;s Talk
                    <ArrowRight />
                </Button>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className='lg:w-1/2 w-full flex justify-center'>
            <div className='relative xl:h-[500px] lg:h-[420px] h-[350px] w-full rounded-3xl overflow-hidden shadow-2xl group'>
              <Image 
                src={ai_developmentImg}
                alt='AI development dashboard showing analytics and model performance'
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-700'
                priority
              />
              {/* Enhanced Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10'></div>
              
              {/* Floating Elements */}
              <div className='absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg'>
                <div className='flex items-center gap-2'>
                  <Cpu size={16} className='text-green-600' />
                  <span className='text-sm font-semibold text-gray-800'>Active AI Models</span>
                </div>
                <div className='text-[13px] text-gray-500 mt-1'>+42 running</div>
              </div>
              
              <div className='absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg'>
                <div className='text-white'>
                  <div className='text-sm font-medium'>Training Speed</div>
                  <div className='text-lg font-bold'>↑ 325 epochs/hr</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='xl:w-[80%] w-full mx-auto grid sm:grid-cols-3 md:gap-8 gap-4'>
            {security_measures.map((data) => (
                <Card key={data.id} className='py-3 flex flex-col items-center justify-center md:gap-1   gap-2 bg-white'>
                    <CardHeader>
                        <data.icon size={35} />
                    </CardHeader>
                    <CardContent className='text-center'>
                        <Typography
                            typo="header-6-regular"
                            className='text-center'
                        >
                            {data.content}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>

      </section>
    </div>
  )
}

export default AiDevMainHero;
