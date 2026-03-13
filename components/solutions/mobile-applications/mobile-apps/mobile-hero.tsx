'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Typography from '@/components/shared/typography';
import { ArrowRight } from 'lucide-react';

// const digital_services = ["Seamless hiring process", "Get 2X Faster Delivery", "Fast resource onboarding", "Flexible payment methods"]


function MobileHero() {
  return (
    <div className='mobile-bg w-full max-h-[700px] h-[70vh] md:py-12 sm:py-8 py-24'>
        <div className='max-container lg:w-[85%] w-[95%] h-full ml-auto'>
            <section className='lg:w-[50%] w-[60%] ml-auto h-full flex flex-col justify-end lg:gap-8 gap-6'>
                <Typography
                    typo="body-medium-medium"
                    className='text-app-primary-medium font-semibold uppercase text-right'
                >
                    We design & develop quality and secure Mobile App.
                </Typography>
            
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col lg:gap-3 text-app-primary-deep'>
                        <Typography
                            className='font-medium text-app-primary-light !leading-tight text-right'
                            typo="header-2-medium"
                        >
                            Best <span className="text-app-primary-deep oleo-script">Android & IOS Mobile App  </span> Development Company
                        </Typography>
                    </div>
                    <Button
                        variant="outline"
                        className='w-fit ml-auto 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg hover:text-white font-medium rounded-full border-2 hover:border-app-primary-deep hover:bg-app-primary-medium'
                    >
                        Let&apos;s Talk
                        <ArrowRight />
                    </Button>
                    {/* <Typography
                        className='text-center '
                        typo="header-3-semibold"
                    >
                        Best Android & IOS Mobile App 
                    </Typography>
                    <Typography
                        className='text-center '
                        typo="header-3-semibold"
                    >
                        Development Company
                    </Typography> */}
                </div>
            </section>
        </div>
    </div>
  )
}

export default MobileHero