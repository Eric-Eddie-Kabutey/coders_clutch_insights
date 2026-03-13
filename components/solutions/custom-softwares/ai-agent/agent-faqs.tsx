'use client';
import Typography from '@/components/shared/typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion-website';
import React from 'react';

const product_faqs = [
    {
        id: "1",
        question: `What is an AI Agent?`,
        answer: `An AI agent is a smart software solution developed to perform tasks, make decisions, and increase efficiency. 
                    With proper AI agent development, businesses can automate processes, improve customer support, and 
                    streamline operations.`,
    },
    {
        id: "2",
        question: `How do you ensure Al agent security?`,
        answer: `Ensuring security for AI agents for business involves encryption, secure access controls, and regular updates. 
                    These measures protect sensitive data and ensure the AI system operates safely.`,
    },
    {
        id: "3",
        question: `What capabilities do your Al agents possess?`,
        answer: `AI agents are designed to manage various tasks, including customer support, data analysis, and workflow 
                    automation. Partnering with an AI agent development company can help tailor these capabilities to meet 
                    specific business needs.`,
    },
    {
        id: "4",
        question: `How can I implement Al agents in my business?`,
        answer: `Implementing AI agents for software development or customer engagement involves integrating them into 
                    existing systems. A well-planned strategy ensures smooth adoption, improving operational efficiency.`,
    },
    {
        id: "5",
        question: `Do I need technical expertise to implement Al agents?`,
        answer: `Technical expertise is not always necessary. Many AI agent development services provide end-to-end support, 
                    ensuring easy integration and minimal effort from the business side.`,
    },
    {
        id: "6",
        question: `How can AI agents benefit my business?`,
        answer: `AI agents can improve productivity by automating routine tasks, enhancing customer experiences, and 
                    delivering data-driven insights. Moreover, investing in AI agent development can lead to better 
                    decision-making and growth opportunities.`,
    },
]

function AgentFaqs() {
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

export default AgentFaqs