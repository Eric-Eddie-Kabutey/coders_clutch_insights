'use client';
import React, { useState } from 'react'
import mediaImg from "@/public/assets/images/solutions/saas-product/media_img.png";
import iotImg from "@/public/assets/images/solutions/saas-product/iotImg.png";
import retailImg from "@/public/assets/images/solutions/saas-product/retailImg.png";
import educationImg from "@/public/assets/images/solutions/saas-product/educationImg.png";
import enterpriseImg from "@/public/assets/images/solutions/saas-product/enterpriseImg.png";
import crmImg from "@/public/assets/images/solutions/saas-product/crmImg.png";
import Typography from '@/components/shared/typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { Building2, GraduationCap, MonitorPlay, Ratio, RefreshCcwDot, ShoppingCart } from 'lucide-react';

const solutions = [
  {
      id: "1",
      icon: MonitorPlay,
      title: "Media & Entertainment",
      img: mediaImg,
      description: `Host, distribute and transcode videos — view analytics and reporting, market videos like a pro.`,
  },
  {
      id: "2",
      icon: Ratio,
      title: "IoT Management",
      img: iotImg,
      description: `Monitor, manage, and analyze IoT devices remotely — process data in real-time with minimal hardware.`,
  },
  {
      id: "3",
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      img: retailImg,
      description: `Manage your business easily like never before — build SaaS solutions for POS systems, CRM, & inventory management.`,
  },
  {
      id: "4",
      icon: GraduationCap,
      title: "Education",
      img: educationImg,
      description: `Build student information systems, LMS & assessment portals for 2x better learning outcomes. `,
      
  },
  {
      id: "5",
      icon: Building2,
      title: "Enterprise",
      img: enterpriseImg,
      description: `Centralize management, improve collaboration, and cut down costs and maintenance with dedicated solutions.`,
  },
  {
      id: "6",
      icon: RefreshCcwDot,
      title: "CRM System",
      img: crmImg,
      description: `Manage customer interactions, contacts, and leads. Track sales pipeline, and make marketing automation simple.`,
  },
]

function SaasTailoredSolution() {
  const [activeItem, setActiveItem] = useState("item-1");
  return (
    <div className='w-full md:py-32 py-20 bg-[#F1F1F7]'>
      <section className='max-container 2xl:w-[80%] md:w-[95%] w-[90%] mx-auto'>
        <div className='inter xl:pb-10 pb-6 flex flex-col gap-2'>
            <Typography
                typo="header-3-light"
            >
              Get a Tailored SaaS Solution
            </Typography>
            <Typography
                typo="header-3-semibold"
                className='!font-bold'
            >
              Built for Your Business
            </Typography>
        </div>
        <div className='w-full flex md:flex-row flex-col justify-between items-center gap-16'>
            <div className='flex-1 '>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                    onValueChange={(value) => setActiveItem(value)}
                >
                    {
                        solutions.map((data, index) => (
                            <AccordionItem
                                key={data.id}
                                value={`item-${index+1}`}
                                className={`w-full flex gap-2 xs:px-6 px-3 py-2 border-0 ${
                                    activeItem === `item-${index+1}` ? 'bg-[#F7EFE1] rounded-xl' : 'w-full'
                                }`}
                            >
                              <div className='w-full flex gap-5'>
                                <data.icon className="w-6 h-6 mt-5 flex-shrink-0" />
                                <div className='flex-1'>
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
                                </div>
                              </div>
                            </AccordionItem>

                        ))
                    }
                </Accordion>
            </div>
            <div className='lg:block hidden flex-1'>
                <div className='w-full h-fit overflow-hidden shadow-sm'>
                    <Image
                        src={solutions.find(item => 
                            `item-${solutions.indexOf(item)+1}` === activeItem
                        )?.img || retailImg}
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

export default SaasTailoredSolution