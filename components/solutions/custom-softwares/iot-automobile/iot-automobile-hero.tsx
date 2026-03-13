'use client'
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { ArrowRight, CircleCheckBig } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import automobileHero from "@/public/assets/images/solutions/iot-automobile/automobile_hero.png"

const digital_services = ["50% Quicker Launch", "Trim Coding Costs by 33%", "Simplify Data Abstraction", "Expand with Free Datasets"]


function IotAutomobileHero() {
  return (
    <div className='w-full md:py-12 py-8 bg-app-primary-deep'>
        <div className='max-container 2xl:w-[85%] w-[95%] mx-auto flex lg:flex-row flex-col justify-between items-center'>
            <section className='lg:flex-1 w-full mx-auto flex flex-col lg:items-start items-center gap-4 text-white'>
                <div className='arial md:flex hidden flex-col xl:gap-3 text-white'>
                    <Typography
                        className='lg:text-left text-center '
                        typo="header-3-semibold"
                    >
                        Build a Smart, Software- Defined
                    </Typography>
                    <Typography
                        className='lg:text-left text-center'
                        typo="header-3-semibold"
                    >
                        Connected Vehicles Solution
                    </Typography>
                </div>
                <Typography
                    typo="header-3-semibold"
                    className='md:hidden block md:pt-4 text-center text-white md:!leading-relaxed !leading-snug'
                >
                    Build a Smart, Software- Defined Connected Vehicles Solution
                </Typography>
                <div className='lg:w-[90%] flex flex-col py-3'>
                    <Typography
                        typo="body-medium-semibold"
                        className='!leading-relaxed lg:text-left text-center'
                    >
                        Focus on your core competencies and operations— leave the grind of building your own custom-connected car solution to us.
                    </Typography>
                </div>
                <div className='md:w-[90%] flex flex-col gap-10'>
                    <div className=' grid xs:grid-cols-2 gap-3'>
                        {
                            digital_services.map(data => (
                                <div key={data} className='flex items-center gap-3'>
                                    <CircleCheckBig size={20} />
                                    <Typography
                                        typo="body-large-semibold"
                                    >
                                        {data}
                                    </Typography>
                                </div>
                            ))
                        }
                    </div>
                    <Button
                        variant="primary"
                        className='w-fit lg:mx-0 mx-auto 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold'
                    >
                        Let&apos;s Talk
                        <ArrowRight />
                    </Button>
                    
                </div>
            </section>
            <div className='lg:block hidden w-[45%] h-fit'>
                <Image 
                    src={automobileHero}
                    alt='Automobile hero'
                    className='w-full h-full'
                />
            </div>
        </div>
    </div>
  )
}   

export default IotAutomobileHero