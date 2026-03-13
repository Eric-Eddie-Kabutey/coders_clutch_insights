'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import spiritIcon from "@/public/assets/icons/career_icons/career-sprite_1.png";
import Image from 'next/image';
import { Check } from 'lucide-react';

const processes = [
    {
        id: "01",
        title: "Same Day Result",
        contents: [
            "We Value & Respect Individual’s Time",
            "Our Entire Hiring Process completes within a day",
            "Get feedback on the same day with no gimmicks or false hope"
        ],
    },
    {
        id: "02",
        title: "Simple And Straightforward",
        contents: [
            "Interviews are more like a conversation providing a comfortable environment",
            "Ensuring a quick & smooth on-boarding process",
            "System tests checks your problem solving ability not the end-result"
        ],
    },
    {
        id: "03",
        title: "Recruit To Hire Internship Program",
        contents: [
            "We offer attractive Internship program for smooth transmission",
            "Hire Interns based on their performance & passion",
            "6 months provides challenging real-time projects & team-building skills"
        ],
    },
]

function HiringProcess() {
  return (
    <div className='w-full xl:py-8 md:py-6 py-3'>
        <section className='max-w-[70rem] 2xl:w-[70%] xl:w-[80%] w-[90%] mx-auto'>
            <div className='w-fit mx-auto text-center pb-4 flex flex-col gap-2'>
                <Typography
                    typo="header-4-semibold"
                >
                    Hiring Process
                </Typography>
                <div className='w-12 mx-auto h-[1px] bg-black'></div>
            </div>

            <div className='w-full lg:py-8 py-4 grid lg:grid-cols-3 sm:grid-cols-2 gap-8'>
                {processes.map((data, index) => (
                    <div 
                        key={data.id}
                        className='flex flex-col sm:gap-5 gap-2'
                    >
                        <div className='sm:h-20 h-16 w-fit relative'>
                            <Image 
                                src={spiritIcon}
                                alt={`Hiring spirit ${index+1}`}
                                className='w-full h-full'
                            />
                            <span className='pops absolute sm:top-6 top-5 sm:left-6 left-5 sm:text-2xl text-lg text-[#55A0E6] font-semibold'>{data.id}</span>
                        </div>
                        <div className='pops pb-4 text-base font-medium'>{data.title}</div>
                        <ul className='list-disc flex flex-col gap-3'>
                            {data.contents.map(content => (
                                <li key={content} className='list-disc flex gap-3 text-base'>
                                    <div className='h-fit p-1 rounded-full bg-[#b6d5f2]'>
                                        <Check size={9} />
                                    </div>
                                    {content}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default HiringProcess