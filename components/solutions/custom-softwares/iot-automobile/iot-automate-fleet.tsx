'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'
import fleetImg from "@/public/assets/images/solutions/iot-automobile/fleet_img.png";
import Image from 'next/image';

function IotAutomateFleet() {
  return (
    <div className='w-full md:pt-20 pt-12 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] ml-auto flex lg:flex-row flex-col items-end justify-between gap-8'>
            <div className='lg:flex-1 w-full pt-12 pb-10 flex flex-col lg:gap-6 gap-3 text-white'>
                <div className='hidden xs:flex flex-col lg:items-center lg:justify-center gap-2'>
                    <Typography
                        typo="header-3-semibold"
                        className='lg:text-left text-center'
                    >
                        Automate Your Fleet With Smart
                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                        className='lg:text-left text-center'
                    >
                        Connected Vehicle Solutions
                    </Typography>
                </div>
                <Typography
                        typo="header-3-semibold"
                        className='xs:hidden block !leading-relaxed lg:text-left text-center'
                >
                    Automate Your Fleet With Smart Connected Vehicle Solutions
                </Typography>
                <Typography
                    typo="body-large-medium"
                    className='lg:text-left text-center'
                >
                    Drop a message and we will get back to you within 24 hours for a personalized discussion.
                </Typography>
                <div className='w-fit lg:mx-0 mx-auto pt-4'>
                    <Button
                        variant="primary"
                        className='!px-12 !text-lg !font-semibold'
                    >
                        Let’s Talk
                    </Button>
                </div>
            </div>
            <div className='lg:block hidden xl:flex-1 w-[40%] h-fit border border-gra-100'>
                <Image 
                    src={fleetImg}
                    alt='Fleet image'
                    className='w-full h-full'
                />
            </div>
        </section>
    </div>
  )
}

export default IotAutomateFleet