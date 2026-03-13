'use client';
import React, { useState } from 'react'
import mediaImg from "@/public/assets/images/security-cloud/entertainment_img.png"
import iotImg from "@/public/assets/images/security-cloud/iot_management_img.png"
import ecommerceImg from "@/public/assets/images/security-cloud/retail_commerce_img.png"
import healthImg from "@/public/assets/images/security-cloud/healthcare_img.png"
import bankingImg from "@/public/assets/images/security-cloud/banking_img.png"
import Typography from '@/components/shared/typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';

const accross_verticals = [
    {
        id: "1",
        title: "Media & Entertainment",
        img: mediaImg,
        description: `Create state-of-the-art streaming platforms for content delivery, engagement, and personalized 
                        entertainment solutions with full-stack web development services.`,
    },
    {
        id: "2",
        title: "IoT Management",
        img: iotImg,
        description: `Connect devices and vehicles seamlessly. Full-stack expertise ensures robust IoT ecosystems with 
                        efficient data processing, security, and real-time analytics.`,
    },
    {
        id: "3",
        title: "Retail & E-commerce",
        img: ecommerceImg,
        description: `Transform shopping experiences with full stack services optimized for e-commerce platforms. 
                        Develop scalable, user-friendly app interfaces with seamless transactions.`,
    },
    {
        id: "4",
        title: "Healthcare",
        img: healthImg,
        description: `Enhance patient care with a full stack company that builds secure, interoperable systems. Facilitate 
                        seamless data exchange and efficient healthcare management.`,
    },
    {
        id: "5",
        title: "Banking",
        img: bankingImg,
        description: `Create secure, scalable, and compliant banking systems. Facilitate secure transactions and 
                        ensure a seamless user experience with our full-stack expertise. `,
    },
]

function FullstackExpertise() {
    const [activeItem, setActiveItem] = useState("item-1");
    
  return (
    <div className='employ_bg w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Our Development Expertise
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Spans Across Verticals and Industries
                </Typography>
            </div>
            <div className='w-full py-8 flex md:flex-row flex-col justify-between'>
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
                                        activeItem === `item-${index+1}` ? 'bg-[#34644C] text-white' : ''
                                    }`}
                                >
                                    <AccordionTrigger
                                        className='text-xl font-semibold'
                                    >{data.title}</AccordionTrigger>
                                    <AccordionContent className="w-full flex flex-col gap-4 text-balance">
                                        <p className='w-full text-base'>
                                            {data.description}
                                        </p>
                                        <div className='md:hidden block w-full h-full max-h-[400px] overflow-hidden shadow-sm'>
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
                <div className='md:block hidden flex-1'>
                    <div className='w-full h-full overflow-hidden shadow-sm'>
                        <Image 
                            src={accross_verticals.find(item => 
                                `item-${accross_verticals.indexOf(item)+1}` === activeItem
                            )?.img || ecommerceImg}
                            alt='Industry Image'
                            className='w-full h-full object-cover'
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FullstackExpertise