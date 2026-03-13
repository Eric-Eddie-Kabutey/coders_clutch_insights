'use client';
import Typography from '@/components/shared/typography';
import React, { useState } from 'react'
import universalImg from "@/public/assets/images/solutions/ai-agent/universal_img.png";
import llmImg from "@/public/assets/images/solutions/ai-agent/llm_img.png";
import securityImg from "@/public/assets/images/solutions/ai-agent/security_img.png";
import automatedImg from "@/public/assets/images/solutions/ai-agent/automated_img.png";
import flexibleImg from "@/public/assets/images/solutions/ai-agent/fexible_img.png";
import readyImg from "@/public/assets/images/solutions/ai-agent/ready_use_img.png";
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const accross_verticals = [
    {
        id: "1",
        title: "Universal LLM Compatibility",
        img: universalImg,
        description: `Plug and play with any LLM of your choice. No tech headaches, just smooth AI operations that scale 
                        with ease.`,
    },
    {
        id: "2",
        title: "LLM Performance Optimization",
        img: llmImg,
        description: `Track, optimize, and fine-tune your AI models with real-time insights. No guesswork, just data-backed 
                        improvements.`,
    },
    {
        id: "3",
        title: "Security & Compliance",
        img: securityImg,
        description: `Rock solid security that keeps your AI agents compliant, private, and tamper-proof. No loopholes, 
                        just peace of mind.`,
    },
    {
        id: "4",
        title: "Fully Automated AI Pipelines",
        img: automatedImg,
        description: `From model training to deployment, automate the entire AI workflow. Less manual work, 
                        more efficiency at every step`,
        
    },
    {
        id: "5",
        title: "Flexible Deployment",
        img: flexibleImg,
        description: `Cloud, on-premise, or hybrid—deploy AI agents your way. No vendor traps, just full control over your 
                        AI stack.`,
    },
    {
        id: "6",
        title: "Ready-to-Use AI Agents",
        img: readyImg,
        description: `Skip the long dev cycles. Ready-to-use AI agents that handle tasks from day one, built for enterprise 
                        efficiency.`,
    },
]

function AgentAutomatic() {
    const [activeItem, setActiveItem] = useState("item-1");
    
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Automation is Just the Start
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Scale Smarter with Enterprise-Ready AI Agents
                </Typography>
            </div>
            <div className='w-full py-8 flex md:flex-row flex-col justify-between items-center gap-16'>
                <div className='flex-1 bg-white'>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                        onValueChange={(value) => setActiveItem(value)}
                    >
                        {
                            accross_verticals.map((data, index) => (
                                <AccordionItem
                                    key={data.id}
                                    value={`item-${index+1}`}
                                    className={`xs:px-6 px-3 xs:py-4 border-b border-gray-200 last:border-b-0 ${
                                        activeItem === `item-${index+1}` ? 'border-2-b border-[#34644C]' : ''
                                    }`}
                                >
                                    <AccordionTrigger
                                        className='xs:text-xl text-lg font-semibold'
                                    >{data.title}</AccordionTrigger>
                                    <AccordionContent className="w-full flex flex-col gap-4 text-balance">
                                        <p className='w-full text-base'>
                                            {data.description}
                                        </p>
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
                <div className='lg:block hidden flex-1'>
                    <div className='w-full h-fit overflow-hidden shadow-sm'>
                        <Image
                            src={accross_verticals.find(item => 
                                `item-${accross_verticals.indexOf(item)+1}` === activeItem
                            )?.img || universalImg}
                            alt='Industry Image'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AgentAutomatic