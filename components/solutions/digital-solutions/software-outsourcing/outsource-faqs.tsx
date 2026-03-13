'use client';
import Typography from '@/components/shared/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion-website';
import React from 'react'

const product_faqs = [
    {
        id: "1",
        question: `How much does it cost to outsource software development?`,
        answer: `The cost of IT outsourcing varies widely depending on your project's scope, complexity, and duration. 
                    Factors like team size, expertise needed, and location of the software development outsourcing company 
                    all play a role. To get an accurate estimate for your project, it's best to reach out for a personalized 
                    quote.`,
    },
    {
        id: "2",
        question: `Why work with a software outsourcing company?`,
        answer: `Partnering with a software outsourcing company offers several advantages. You gain access to a pool of 
                    skilled professionals without the hassle of hiring and training. This flexibility allows you to scale 
                    your team up or down as needed. Plus, you can often get your project done faster and more efficiently, 
                    saving time and money in the long run.`,
    },
    {
        id: "3",
        question: `How is an outsourcing development team managed?`,
        answer: `Managing an outsourced team involves clear communication and well-defined processes. Typically, 
                    you'll have a dedicated project manager as your main contact point. They oversee the team, track 
                    progress, and ensure deadlines are met. Regular check-ins, progress reports, and collaborative tools 
                    help keep everyone on the same page.`,
    },
    {
        id: "4",
        question: `Do you provide support & maintenance after the product delivery?`,
        answer: `Absolutely! Our commitment doesn't end with product delivery. We offer comprehensive support and 
                    maintenance services to keep your software running smoothly. We can tailor a support package to fit 
                    your specific requirements, ensuring your product stays up-to-date and continues to meet your business 
                    needs long after the initial development phase.`,
    },
    {
        id: "5",
        question: `How long does it take to complete the project?`,
        answer: `Project timelines can vary greatly depending on the complexity and scope of work. A simple app might take 
                    a few weeks, while a large-scale enterprise system could require several months. During our initial 
                    discussions, we'll work with you to understand your requirements and provide a realistic timeline estimate.`,
    },
    {
        id: "6",
        question: `How do you ensure a smooth project transition from my existing vendor to CODERS Clutch?`,
        answer: `To ensure a smooth transition, we follow a carefully planned process. This includes a thorough documentation 
                    review, knowledge transfer sessions with your current vendor, and a phased handover approach. Our team 
                    will work closely with you to minimize disruptions and maintain project continuity throughout the switch 
                    to our software development outsourcing services.`,
    },
]


function OutsourceFaqs() {
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

export default OutsourceFaqs