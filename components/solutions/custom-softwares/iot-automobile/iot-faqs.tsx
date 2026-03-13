'use client';
import Typography from '@/components/shared/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion-website';
import { iot_faqs } from '@/constant';
import React from 'react'

function IotFaqs() {
  return (
    <div className='w-full md:py-32 py-20 bg-[#eaeaea]'>
        <section className='py-12 px-10 max-container 2xl:w-[65%] md:w-[95%] w-[90%] mx-auto bg-white rounded-md'>
            <div className='inter flex flex-col gap-1'>
                <Typography
                    typo="header-4-semibold"
                    className='!font-semibold text-center'
                >
                    Frequently Asked Questions
                </Typography>
            </div>
            <div className='w-full py-6'>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {iot_faqs.map((data, index) => (
                        <AccordionItem
                            key={data.id} 
                            value={`item-${index+1}`}
                        >
                            <AccordionTrigger
                                className='text-base font-semibold'
                            >{data.question}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p className='text-sm'>
                                    {data.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    </div>
  )
}

export default IotFaqs