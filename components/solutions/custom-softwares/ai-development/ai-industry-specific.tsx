'use client';
import Typography from '@/components/shared/typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { industry_specifics } from '@/constant';
import { CornerDownRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function AiIndustrySpecific() {
    const [selectedSpecific, setSelectedSpecific] = useState(industry_specifics[0].id)
    const [activeItem, setActiveItem] = useState("item-1");

    const currentSpecific = industry_specifics.find(department => department.id === selectedSpecific);
  return (
    <div className='w-full md:py-32 py-20 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[80%] md:w-[90%] w-[85%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-2 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Industry-Specific AI Solutions
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    We Build to Help Businesses Become AI-Ready
                </Typography>
            </div>
            <div className='lg:block hidden w-full py-4 space-y-10'>
                <div className='w-full flex justify-between items-center'>
                    {industry_specifics.map((data) => (
                        <button
                            type='button'
                            key={data.id}
                            onClick={() => setSelectedSpecific(data.id)}
                            className={`flex-1 py-5 xl:text-base text-sm font-medium border border-gray-600 bg-app-primary-medium ${
                                selectedSpecific === data.id ? "bg-green-400 text-black font-semibold" : "text-white"
                            }`}
                        >{data.title}</button>
                    ))}
                </div>
                <div className='w-[95%] mx-auto flex justify-between items-center gap-10'>
                    <Card className='flex-1 p-2 flex flex-col gap-4 rounded-xl bg-[#F7EFE1] border-t-[5px] border-[#0CA35B]'>
                        <CardHeader className='px-6 flex flex-col gap-[2px]'>
                            <Typography
                                typo="header-6-semibold"
                            >
                                {currentSpecific?.title === "Ecommerce" ? "Ecommerce & Retail" : currentSpecific?.title}
                            </Typography>
                            <div className='w-12 h-[3px] bg-black'></div>
                        </CardHeader>
                        <CardContent className='flex flex-col gap-4'>
                            {currentSpecific?.contents.map(content => (
                                <div key={content.id} className='flex gap-3'>
                                    <CornerDownRight color='#178450' />
                                    <div className='flex flex-col gap-2'>
                                        <Typography
                                            typo="header-6-semibold"
                                        >
                                            {content.title}
                                        </Typography>
                                        <Typography
                                            typo="body-medium-medium"
                                        >
                                            {content.description}
                                        </Typography>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <div className='w-[40%] h-fit'>
                        <Image
                            src={currentSpecific?.img || industry_specifics[0].img}
                            alt={`Department specific ${currentSpecific?.id}`}
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>
            <div className='lg:hidden block w-full'>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                    onValueChange={(value) => setActiveItem(value)}
                >
                    {
                        industry_specifics.map((data, index) => (
                            <AccordionItem
                                key={data.id}
                                value={`item-${index+1}`}
                                className={`md:px-6 px-3 border-b border-gray-400 last:border-b-0 text-white ${
                                    activeItem === `item-${index+1}` ? 'border-2-b border-[#34644C]' : ''
                                }`}
                            >
                                <AccordionTrigger
                                    className='text-xl font-semibold'
                                >{data.title}</AccordionTrigger>
                                <AccordionContent className="w-full sm:p-9 p-4 flex flex-col gap-4 text-black bg-[#F7EFE1] border-t-[5px] border-[#0CA35B] rounded-xl">
                                    <div className=' flex flex-col gap-[2px]'>
                                        <Typography
                                            typo="header-6-semibold"
                                        >
                                            {currentSpecific?.title === "Ecommerce" ? "Ecommerce & Retail" : currentSpecific?.title}
                                        </Typography>
                                        <div className='w-12 h-[3px] bg-black'></div>
                                    </div>
                                    <div className='w-full py-3 flex flex-col gap-4'>
                                        {data.contents.map((content) => (
                                            <div key={content.id} className='flex flex-col gap-3'>
                                                <Typography
                                                    typo="header-6-semibold"
                                                >
                                                    {content.title}
                                                </Typography>
                                                <Typography
                                                    className='xs:!text-base'
                                                >
                                                    {content.description}
                                                </Typography>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='lg:hidden block w-full h-full max-h-[400px] overflow-hidden shadow-sm'>
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
            </div>
        </section>
    </div>
  )
}

export default AiIndustrySpecific