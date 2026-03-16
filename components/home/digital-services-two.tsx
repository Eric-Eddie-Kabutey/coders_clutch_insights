'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import { digital_services } from '@/constant';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { Accordion } from '../ui/accordion-nav';
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import ScrollReveal from '../reusable/scroll-reveal';

function DigitalServicesTwo() {
    const [activeService, setActiveService] = useState(digital_services[0]);
    const [isMore, setIsMore] = useState(false);
    const router = useRouter();
    const [activeItem, setActiveItem] = useState("item-1");

    const currentService = digital_services.find(service => service === activeService);
    const moreServices = isMore ? digital_services.slice(3, 6) : digital_services.slice(0, 3)
    const allServices = isMore ? digital_services : digital_services.slice(0, 3)
  return (
    <div className='w-full md:py-32 py-20 bg-gray-100'>
        <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto mb-6">
            <div className=" w-full h-full pb-20 flex flex-col justify-center items-center gap-4">
                <ScrollReveal>
                    <Typography typo="header-3-light"
                        className='xl:text-5xl lg:text-4xl sm:text-3xl font-medium xs:text-3xl text-2xl'
                    >
                        Digital Transformation Services for
                    </Typography>
                </ScrollReveal>
                <ScrollReveal>
                    <Typography typo="body-large-medium"
                        className='!text-xl'
                    >
                        Every Small to Large Enterprises in the World
                    </Typography>
                </ScrollReveal>
            </div>
            <div className='w-full pt-6 hidden lg:flex justify-between gap-8'>
                <div className='py-4 flex-1 flex flex-col gap-'>
                    {moreServices.map((data, i) => (
                        <ScrollReveal key={data.id} delay={i * 0.15}>
                            <div          
                                className={`w-full p-6 flex flex-col items-start gap-2 cursor-pointer ${activeService.id === data.id ? "bg-white border-2 border-app-primary-medium rounded-lg" : ""}`}
                                onClick={() => setActiveService(data)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveService(data); }}
                            >
                                <Typography
                                    typo="header-5-semibold"
                                >{data.title}</Typography>
                                <Typography
                                    typo="body-medium-regular"
                                    className='text-left '
                                >
                                    {data.description}
                                </Typography>
                                <button className='flex items-center gap-3 font-semibold text-lg text-app-primary-medium'
                                    onClick={(e) => { e.stopPropagation(); router.push(data.href); }}
                                >
                                    <span>Read more</span>
                                    <ArrowRight size={22} />
                                </button>
                            </div>
                        </ScrollReveal>
                    ))}
                    <Button
                        variant="ghost"
                        onClick={() => setIsMore(!isMore)}
                        className='mx-6 !px-2 !pb-2 border-b-2 border-app-primary-deep'
                    >
                        {isMore ? "See Previous" : "See More"}
                    </Button>
                </div>
                <div className='w-[55%] 2xl:h-[650px] h-[550px] flex justify-end items-end bg-app-primary-medium rounded-lg'>
                    {currentService && (
                        <div className='w-[90%] h-[90%]  rounded-xl'>
                                <Image
                                    src={currentService?.img}
                                    alt={`service ${currentService?.title}`}
                                    className='w-full h-full object-cover rounded-tl-xl'
                                />
                        </div>
                    )}
                </div>
            </div>
            <ScrollReveal>
                <div className='w-full lg:hidden block'>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                        onValueChange={(value) => setActiveItem(value)}
                    >
                        {
                            allServices.map((data, index) => (
                                <AccordionItem
                                    key={data.id}
                                    value={`item-${index+1}`}
                                    className={`xs:px-6 px-3 xs:py-4 border-b border-gray-200 last:border-b-0 ${
                                        activeItem === `item-${index+1}` ? 'bg-[#34644C] text-white' : ''
                                    }`}
                                >
                                    <AccordionTrigger
                                        className='text-xl font-semibold'
                                    >{data.title}</AccordionTrigger>
                                    <AccordionContent className="w-full flex flex-col gap-4 text-balance">
                                        <p className='w-full sm:text-base text-sm'>
                                            {data.description}
                                        </p>
                                        <div className='w-full h-full max-h-[400px] overflow-hidden shadow-sm'>
                                            <Image
                                                src={data.img}
                                                alt='Industry Image'
                                                className='w-full h-full object-cover'
                                                
                                            />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                            ))
                        }
                    </Accordion>
                    <Button
                        variant="ghost"
                        onClick={() => setIsMore(!isMore)}
                        className='mx-6 !px-2 !pb-2 border-b-2 border-app-primary-deep'
                    >
                        {isMore ? "See Previous" : "See More"}
                    </Button>
                </div>
            </ScrollReveal>
        </section>
    </div>
  )
}

export default DigitalServicesTwo