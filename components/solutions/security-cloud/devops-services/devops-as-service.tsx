'use client';
import Typography from '@/components/shared/typography';
import React, { useState } from 'react'
import mediaImg from "@/public/assets/images/security-cloud/entertainment_img.png"
import iotImg from "@/public/assets/images/security-cloud/iot_management_img.png"
import ecommerceImg from "@/public/assets/images/security-cloud/retail_commerce_img.png"
import healthImg from "@/public/assets/images/security-cloud/healthcare_img.png"
import bankingImg from "@/public/assets/images/security-cloud/banking_img.png"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';

const devops_services = [
    {
        id: "1",
        title: "Media & Entertainment",
        img: mediaImg,
        description: `Elevate your media workflows with a scalable DevOps service company. Deliver high-qualiy content and 
                        improve experience across platforms and devices.`,
    },
    {
        id: "2",
        title: "IoT Management",
        img: iotImg,
        description: `Streamline IoT ecosystems with robust DevOps development services. Ensure seamless integration, 
                        deployment, and management of IoT devices.`,
    },
    {
        id: "3",
        title: "Retail & E-commerce",
        img: ecommerceImg,
        description: `Boost retail operations with agile DevOps solutions. Optimize online shopping experiences through rapid 
                        deployment and continuous innovation.`,
    },
    {
        id: "4",
        title: "Healthcare",
        img: healthImg,
        description: `Secure patient data and improve healthcare services with compliant, efficient processes. Get DevOps 
                        solutions tailored to the healthcare industry's needs.`,
    },
    {
        id: "5",
        title: "Banking",
        img: bankingImg,
        description: `Transform your banking services with secure, reliable DevOps services. Enable faster service delivery, 
                        safer transactions, and improoved customer satisfaction.`,
    },
]

function DevopsAsService() {
    const [activeItem, setActiveItem] = useState("item-1");
  return (
    <div className='employ_bg w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Employ DevOps As a Service
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Across Verticals and Industries
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
                            devops_services.map((data, index) => (
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
                            src={devops_services.find(item => 
                                `item-${devops_services.indexOf(item)+1}` === activeItem
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

export default DevopsAsService
