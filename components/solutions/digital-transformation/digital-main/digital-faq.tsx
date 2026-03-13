'use client';
import Typography from '@/components/shared/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion-website';
import React from 'react'

const digital_faqs = [
    {
        id: "1",
        question: `How does CODERS Clutch develop a digital transformation strategy for enterprise solutions?`,
        answer: `CODERS Clutch develops a digital transformation strategy that focuses on your business needs by personalizing 
                    solutions tailored to the target audience. This approach involves integrating advanced technology, employing 
                    agile methodologies, and utilizing specialized resources based on the specific demands of your project.`,
    },
    {
        id: "2",
        question: `How do digital transformation services bring success to your business?`,
        answer: `Digital transformation services reduce barriers to success by facilitating effective communication and 
                    collaboration between tools, while maximizing user experience through data-driven insights.`,
    },
    {
        id: "3",
        question: `What steps does CODERS Clutch follow to ensure a smooth transition in digital transformation solutions?`,
        answer: `Contus Tech's roadmap for smooth digital transformation involves three key steps: Development of strategic 
                    plan ( Choosing right technology, robust infrastructure network, security, data management), utilizing 
                    cloud, edge, and hybrid computing for data contextualization, building a communicating channel for 
                    improvement, ensuring effective deployment strategies with best practices.`,
    },
    {
        id: "4",
        question: `Who needs digital transformation services?`,
        answer: `Digital transformation services are of great help to traditional businesses, SMEs, large corporations, 
                    startups, nonprofits, and industries facing hurdles to enhance efficiency and improve customer experiences.`,
    },
    {
        id: "5",
        question: `How is digital transformation enhancing the customer experience?`,
        answer: `By fostering an environment to collaborate brand and customer, digital transformation services allow 
                    businesses to drive increased user engagement and success into the business.`,
    },
    {
        id: "6",
        question: `What is an example of digital transformation?`,
        answer: `Recently the renowned entertainment giant, Disney implemented the MagicBand in their parks, allowing 
                    visitors to make payments, make early reservations, and to access their hotel rooms easily. 
                    Nike has also launched SNKRS app to measure your foot through image capturing and finding the right 
                    footwear for you.`,
    },
]

function DigitalFaq() {
  return (
<div className='w-full py-24 bg-[#eaeaea]'>
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
                {digital_faqs.map((data, index) => (
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

export default DigitalFaq