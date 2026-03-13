'use client'
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

// const digital_services = ["Fully-Tailored SaaS Solution", "Zero Downtime Deployment", "Crystal-clear MVP Estimation", "100% Secure – Data and Privacy"]


function SaasHero() {
  return (
    <div className='mobile-apps-bg w-full h-[55vh] md:py-12 py-8 '>
        <div className='max-container lg:w-[85%] w-[95%] h-full mx-auto'>
            <section className='2xl:w-[90%] h-full mx-auto flex flex-col justify-end gap-8 text-white'>
                <Typography
                    typo="header-6-semibold"
                    className='text-center text-app-green'
                >
                    Saas Product Development
                </Typography>
                <div className='arial md:flex hidden flex-col xl:gap-3 text-white'>
                    <Typography
                        className='text-center '
                        typo="header-3-semibold"
                    >
                        #1 SaaS Product Development Company
                    </Typography>
                    <Typography
                        className='text-center '
                        typo="header-3-semibold"
                    >
                        To Build Digital Products
                    </Typography>
                </div>
                <Typography
                    typo="header-3-semibold"
                    className='md:hidden block md:pt-4 text-center text-white md:!leading-relaxed !leading-snug'
                >
                    #1 SaaS Product Development Company To Build Digital Products
                </Typography>
                    
                <Button
                    variant="outline"
                    className='w-fit mx-auto 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg text-white font-medium rounded-full border-2 border-white hover:border-app-primary-deep hover:bg-app-secondary'
                >
                    Let&apos;s Talk
                    <ArrowRight />
                </Button>
                    
            </section>
        </div>
    </div>
  )
}   

export default SaasHero