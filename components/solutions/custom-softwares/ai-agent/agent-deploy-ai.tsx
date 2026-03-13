'use client';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import React from 'react'

function AgentAiDeploy() {
  return (
    <div className='design-touch-bg w-full lg:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto'>
            <div className='2xl:w-[75%] xl:w-[85%] lg:w-[90%] mx-auto flex flex-col justify-center lg:gap-8 sm:gap-4 gap-2 text-center'>
                <div className='flex flex-col gap-2'>
                    <Typography
                        typo="header-3-semibold"
                        className='text-white text-center'
                    >
                        Deploy <span className='text-[#F9DF91]'>AI Agent </span> Right Away & Automate 10x Faster
                    </Typography>
                </div>
                <Typography
                    typo="body-large-regular"
                    className='text-center text-white'
                >
                    Speed up decision-making, and automate 80% of repetitive tasks. AI Agents that work non-stop, making your 
                    operations smoother, faster, and spot-on
                </Typography>
                <div className='w-fit mx-auto pt-4'>
                    <Button
                        variant="primary"
                        className='!text-lg !font-semibold'
                    >
                        Book a 30 mins call
                    </Button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AgentAiDeploy