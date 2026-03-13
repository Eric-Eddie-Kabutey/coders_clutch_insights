'use client';
import Typography from '@/components/shared/typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion-website';
import React from 'react';

const product_faqs = [
    {
        id: "1",
        question: `Why should I opt for custom AI development?`,
        answer: `Every business is unique and custom AI development means your AI solution is built specifically for your 
                    business. A trusted AI development company automates, analyzes and predicts to help you be more efficient 
                    and make better decisions.`,
    },
    {
        id: "2",
        question: `Why should I integrate AI into my business?`,
        answer: `AI automates tasks and improves efficiency. It also analyzes data for better decision making. Whether 
                    it is customer service, marketing or operations, the right AI development services simplifies processes 
                    and gives you an edge over others.`,
    },
    {
        id: "3",
        question: `How Would I Know Which AI Architecture Would Be The Best Fit For My Business?`,
        answer: `Choosing the right AI architecture depends on your industry, data and objectives. A reliable AI development 
                    company will assess your needs and build a solution that fits your business goals and is scalable and 
                    efficient.`,
    },
    {
        id: "4",
        question: `How do we ensure data security and privacy in AI implementations?`,
        answer: `Data security is top priority in custom AI development. We implement encryption, role-based access and 
                    industry standards to ensure your data is protected and private, minimizing risks of breaches.`,
    },
    {
        id: "5",
        question: `How do we ensure that the AI solutions we develop integrate with your existing systems?`,
        answer: `AI solutions should integrate seamlessly with your existing infrastructure. Our AI development services 
                    ensure compatibility with your software, APIs and workflows so you can adopt AI without disrupting 
                    operations.`,
    },
    {
        id: "6",
        question: `How much time and money does it take to create an AI-based app?`,
        answer: `Time and cost depends on the complexity of the AI solution. Simple AI apps take weeks, advanced AI apps take 
                    months. A trusted AI development company will give you a clear roadmap to plan your investment.`,
    },
]

function AiFaqs() {
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

export default AiFaqs