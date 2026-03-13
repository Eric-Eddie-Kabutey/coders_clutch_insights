'use client';
import Typography from '@/components/shared/typography'
import { Accordion, AccordionContent, AccordionTrigger } from '@/components/ui/accordion';
import { automate_services } from '@/constant';
import { AccordionItem } from '@radix-ui/react-accordion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function AiAutomateMuntane() {
    const [selectedService, setSelectedService] = useState(automate_services[0].id)

    const currentService = automate_services.find(service => service.id === selectedService);
  return (
    <div className='ai_automate_bg w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-6 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Automate Mundane Tasks with AI Development
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Services and Focus on What Truly Matters
                </Typography>
            </div>  
            <div className='xl:w-[90%] mx-auto md:py-4 hidden lg:flex justify-between gap-20'>
                <div className='w-[300px] flex flex-col gap-3'>
                    {automate_services.map(data => (
                        <button
                            key={data.id}
                            type='button'
                            onClick={() => setSelectedService(data.id)}
                            className={`w-full px-4 py-[15px] flex justify-between items-center text-lg font-semibold ${
                                selectedService === data.id ? "py-[20px] text-white bg-gradient-to-b from-[#04A56B] to-[#00562E]" : "text-black"
                            } rounded-lg`}
                        >
                            <span>{data.title}</span>
                            {selectedService === data.id && (
                                <ArrowRight color="#fff" />
                            )}
                        </button>
                    ))}
                </div>
                <div className='flex-1 flex justify-between items-center gap-8'>
                    <div className='w-[400px] h-fit'>
                        <Image 
                            src={currentService?.img || automate_services[0].img}
                            alt='Automate service'
                            className='w-full h-full'
                        />
                    </div>
                    <div className='flex-1 flex flex-col gap-6'>
                        <Typography
                            typo="header-5-semibold"
                        >
                            {currentService?.title}
                        </Typography>
                        <div className='flex flex-col gap-4'>
                            {currentService?.contents.map(content => (
                                <Typography
                                    key={content}
                                    typo="body-medium-medium"
                                >
                                    {content}
                                </Typography>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:hidden block w-full mx-auto py-4 '>
                <div className=''>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                        onValueChange={(value) => setSelectedService(value)}
                    >
                        {
                            automate_services.map((data, index) => (
                                <AccordionItem
                                    key={data.id}
                                    value={`item-${index+1}`}
                                    className={`w-full flex gap-2 xs:px-6 px-3 py-2 border-0 ${
                                        selectedService === `item-${index+1}` ? 'bg-[#F7EFE1] rounded-xl' : 'w-full'
                                    }`}
                                >
                                <div className='w-full flex gap-5'>
                                    <div className='flex-1'>
                                    <AccordionTrigger
                                        className='xs:text-xl text-lg font-semibold'
                                    >{data.title}</AccordionTrigger>
                                    <AccordionContent className="w-full flex flex-col gap-4 text-balance">
                                        <p className='w-full text-base'>
                                            {data.contents.map(content => (
                                                <Typography
                                                    key={content}
                                                    typo="body-medium-medium"
                                                >
                                                    {content}
                                                </Typography>
                                            ))}
                                        </p>
                                        <div className='lg:hidden block w-full h-full sm:max-h-[400px] xs:max-h-[300px] max-h-[250px] overflow-hidden shadow-sm'>
                                            <Image
                                                src={data.img}
                                                alt='Industry Image'
                                                className='w-full h-full object-cover'
                                                
                                            />
                                        </div>
                                    </AccordionContent>
                                    </div>
                                </div>
                                </AccordionItem>

                            ))
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AiAutomateMuntane