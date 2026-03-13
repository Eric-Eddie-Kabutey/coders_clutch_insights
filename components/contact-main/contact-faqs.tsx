'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion-contact-faq';

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

function ContactFaqs() {
  return (
    <div className='w-full py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex lg:flex-row flex-col justify-between md:gap-24 gap-12'>
            <div className='max-w-[500px] flex flex-col flex-1 md:gap-6 gap-3'>
                <Typography
                    typo="header-4-semibold"
                >Coders Clutch sign-in resources</Typography>
                <Typography
                    typo="body-large-medium"
                >See additional resources for issues related to logging into the console</Typography>
            </div>
            <div className='flex-1'>
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
                                className='text-lg font-normal'
                            >{data.question}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p className='text-sm text-gray-500'>
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

export default ContactFaqs