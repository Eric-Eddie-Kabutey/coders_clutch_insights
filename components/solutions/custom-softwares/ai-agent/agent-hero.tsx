'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react';

// const agent_services = ["Rapid AI Agent Implementation", "Hire the Top 5% of AI Talent", "24/7 AI-Driven Support & Monitoring", "15+ AI Models in Production", "End-to-End AI-Powered Automation", "10+ AI Agents Deployed & Scaling"]

function AgentHero() {
  return (
    <div className='aiagent-bg w-full h-[55vh] md:py-12 py-8 bg-app-primary-deep'>
        <section className='2xl:w-[80%] xl:w-[90%] h-full mx-auto flex flex-col justify-end gap-8 text-white'>
            <Typography
                typo="header-6-semibold"
                className='text-center text-app-green'
            >
                AI Agent Development
            </Typography>
            <div className='arial md:flex hidden flex-col lg:gap-3 text-white'>
                <Typography
                    className='text-center '
                    typo="header-3-semibold"
                >
                    On-Cloud or On-Premise On-Cloud 
                </Typography>
                <Typography
                    className='text-center '
                    typo="header-3-semibold"
                >
                    or On-Premise The Choice is Yours.
                </Typography>
            </div>
            <Typography
                typo="header-3-semibold"
                className='md:hidden block md:pt-4 text-center text-white md:!leading-relaxed !leading-snug'
            >
                The Best Business Website Designer in Accra, Ghana & The Gambia.
            </Typography>
            
            <Button
                variant="outline"
                className='w-fit mx-auto 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg text-white font-medium border-2 hover:border-app-primary-deep hover:bg-app-secondary border-white  rounded-full'
            >
                Let&apos;s Talk
            </Button>
        </section>
    </div>
  )
}

export default AgentHero