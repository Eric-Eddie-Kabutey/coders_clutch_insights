'use client';
import Typography from '@/components/shared/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion-website';
import React from 'react'

const product_faqs = [
    {
        id: "1",
        question: `What Should I Consider When Selecting An MVP Software Development Company?`,
        answer: `Look for a team that moves fast and builds smart. Prioritize experience with MVPs, a solid understanding of 
                    your domain and transparent communication. Bonus points if they challenge your ideas—in a good way.`,
    },
    {
        id: "2",
        question: `How long does it take to develop MVP software?`,
        answer: `Typically, an MVP takes 6 to 12 weeks, depending on complexity and scope. Our goal is to get your idea to market 
                    fast, without cutting corners or losing sleep over features no one asked for (yet).`,
    },
    {
        id: "3",
        question: `What are the examples of famous applications that started with an MVP?`,
        answer: `Big names like Airbnb, Facebook, Dropbox, and Uber all launched MVPs first. Simple, functional, and 
                    focused; they tested the waters before diving into full-blown product development.`,
    },
    {
        id: "4",
        question: `Can I upgrade my MVP to a full-fledged product?`,
        answer: `Absolutely. Your MVP is the launchpad. Once validated, we can scale it into a full-featured, robust 
                    product; adding new features, refining performance, and prepping it for long-term growth.`,
    },
]


function MvpFaqs() {
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
                    {product_faqs.map((data, index) => (
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

export default MvpFaqs