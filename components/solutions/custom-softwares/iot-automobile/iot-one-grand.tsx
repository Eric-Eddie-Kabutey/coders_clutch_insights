'use client';
import Typography from '@/components/shared/typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { customer_journeys, one_grands } from '@/constant';
import Image from 'next/image';
import React, { useState } from 'react'

function IotOneGrand() {
    const [activeItem, setActiveItem] = useState("item-1");
    
    const activeJourney = one_grands.find(
        (_, index) => activeItem === `item-${index + 1}`
        );
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] ml-auto'>
            <div className='inter xl:pb-10 pb-4 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    One Grand, Unified Interface
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    for All Things Connectivity Management
                </Typography>
            </div>
            <div className='w-full mx-auto py-6 flex lg:flex-row flex-col justify-between items-stretch gap-8'>
                <div className='lg:flex-1 w-full flex flex-col bg-black rounded-xl'>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full h-full"
                        defaultValue="item-1"
                        onValueChange={(value) => setActiveItem(value)}
                    >
                        {
                            one_grands.map((data, index) => (
                                <AccordionItem
                                    key={data.id}
                                    value={`item-${index+1}`}
                                    className={`w-full flex xs:p-3 px-3 py-2 border-0 ${
                                        activeItem === `item-${index+1}` ? '' : 'w-full'
                                    }`}
                                >
                                <div className={`w-full sm:px-8 px-3 pb-4 flex flex-col gap-5 ${activeItem === `item-${index+1}` ? "text-gray-100 rounded-xl" : "text-gray-400"} ${data.id !== "5" ? "border-b " : ""} border-gray-600`}>
                                    <AccordionTrigger
                                        className={`xs:text-xl text-lg font-semibold ${activeItem === `item-${index+1}` ? "text-app-yellow rounded-xl" : "text-gray-400"}`}
                                    >{data.title}</AccordionTrigger>
                                    <AccordionContent className="w-full pb-6 grow flex flex-col gap-4 text-balance">
                                        <p className='w-full text-base leading-relaxed'>
                                            {data.description}
                                        </p>
                                        <div className='lg:hidden block w-full h-full max-h-[400px] overflow-hidden shadow-sm'>
                                            <Image
                                                src={data.img}
                                                alt='Industry Image'
                                                className='w-full h-full object-cover'
                                                
                                            />
                                        </div>
                                    </AccordionContent>
                                </div>
                                </AccordionItem>

                            ))
                        }
                    </Accordion>
                </div>
                <div className='flex-1 hidden lg:flex flex-col'>
                    <div className='w-full h-full overflow-hidden shadow-sm'>
                        <Image
                            src={activeJourney?.img || customer_journeys[0].img}
                            alt='Industry Image'
                            className='w-full h-full object-cover rounded-2xl'
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default IotOneGrand