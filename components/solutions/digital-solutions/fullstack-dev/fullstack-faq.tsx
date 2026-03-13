'use client';
import Typography from '@/components/shared/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion-website';
import React from 'react'

const digital_faqs = [
    {
        id: "1",
        question: `What technologies does CODERS Clutch specialize in full stack development?`,
        answer: `CODERS Clutch specializes in design-centric front end web development using technologies such as AngularJS, 
                    React, Bootstrap, EmberJS, jQuery, and Material UI. Our multi-tier API development expertise includes 
                    Laravel and Django. We build secure and stable backend web applications using PHP, Python, Java, Lumen, 
                    and Spring.`,
    },
    {
        id: "2",
        question: `Why should one choose CODERS Clutch for a full-stack development project?`,
        answer: `Choose CODERS Clutch for your full stack web development project for our expertise in creating user-friendly 
                    interfaces. With a skilled team, we ensure hassle-free integration between front end and back end 
                    technologies. Our commitment to secure development and proficiency in popular frameworks make them a 
                    reliable choice for delivering robust and innovative solutions.`,
    },
    {
        id: "3",
        question: `Does CODERS Clutch provide NDA and IP protection for the project?`,
        answer: `Certainly, CODERS Clutch prioritizes confidentiality and intellectual property protection. We provide 
                    Non-Disclosure Agreements to ensure the privacy of your project and implement robust measures for 
                    safeguarding intellectual property throughout the entire development process.`,
    },
    {
        id: "4",
        question: `Can one hire a full stack developer in less than 48 hours from CODERS Clutch?`,
        answer: `Yes, CODERS Clutch offers the flexibility to hire a full stack developer in less than 48 hours. Our streamlined 
                    processes and skilled pool of developers allow for quick and efficient onboarding to meet your project 
                    requirements promptly.`,
    },
    {
        id: "5",
        question: `How does CODERS Clutch communicate with their development team?`,
        answer: `CODERS Clutch is a professional full stack web development company. We maintain effective communication with 
                    our development team through various channels, including project management tools, in-house messaging 
                    platforms, and regular meetings. We employ a collaborative approach, utilizing tools such as Slack, 
                    Jira, and video conferencing to ensure smooth communication, coordination, and progress tracking.`,
    },
    {
        id: "6",
        question: `How much does it cost to hire a full stack developer from CODERS Clutch?`,
        answer: `The cost of hiring a full-stack developer from CODERS Clutch varies depending on factors such as the developer's 
                    experience, project complexity, and overall project duration. For specific pricing details, it is highly 
                    recommended to contact CONTUS Tech directly, as they can provide customized quotes tailored to your project requirements.`,
    },
]

function FullstackFaq() {
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

export default FullstackFaq