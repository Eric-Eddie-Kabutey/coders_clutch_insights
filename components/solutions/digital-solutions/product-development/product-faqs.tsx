'use client';
import Typography from '@/components/shared/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion-website';
import React from 'react'

const product_faqs = [
    {
        id: "1",
        question: `How much does it cost to build a software product?`,
        answer: `The cost to build a software product typically ranges between $30,000 to $250,000, depending on the complexity, 
                    features, and customization level. Simple products may start around $30,000, while more complex software 
                    with advanced functionality can reach the higher end of the spectrum. We can work with you to create a 
                    solution that fits your budget while meeting your business needs.`,
    },
    {
        id: "2",
        question: `How long does a software product take to develop?`,
        answer: `The development timeline usually ranges few weeks to a few months. A basic product with limited features 
                    may take around 3 weeks to 3 months, whereas a more sophisticated solution can take up to 6 months or 
                    longer, depending on requirements and the chosen tech stack. At CONTUS Tech, we maintain transparency in 
                    timelines to keep your project on track.`,
    },
    {
        id: "3",
        question: `Can you provide ongoing support and maintenance for the software product after it is developed?`,
        answer: `Absolutely! We offer continuous support and maintenance to ensure your software product performs optimally, 
                    with timely updates and troubleshooting whenever needed.`,
    },
    {
        id: "4",
        question: `Which technology do you use for product development?`,
        answer: `Our team is skilled in a wide range of technologies, including Java, Python, .NET, Angular, and cloud solutions. 
                    We choose the best-fit tech stack to ensure a scalable, efficient product.`,
    },
    {
        id: "5",
        question: `What software product development process does CODERS Clutch follow?`,
        answer: `CODERS Clutch follows a streamlined process that begins with brainstorming ideas, planning, and analyzing 
                    to lay a solid foundation. We validate concepts through Proof of Concept (PoC) and Proof of Value (PoV), 
                    followed by intuitive design, code development, and rigorous testing. The final product is seamlessly 
                    deployed, monitored, and continuously maintained with regular upgrades.`,
    },
]


function ProductFaqs() {
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

export default ProductFaqs