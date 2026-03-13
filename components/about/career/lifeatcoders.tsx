'use client';
import React from 'react';
import lifeatcoders from "@/public/assets/images/lifeatImg.jpg";
import Image from 'next/image';
import Typography from '@/components/shared/typography';
import diversifyIcon from "@/public/assets/icons/career_icons/culture_icon.png";
import recognitionIcon from "@/public/assets/icons/career_icons/recognition_icon.png";

const life_ats = [
    {
        id: "1",
        title: "Diversified Culture",
        icon: diversifyIcon,
        description: `To think different we need to be different! We Hire people from diverse backgrounds & beliefs`
    },
    {
        id: "2",
        title: "Promotion to advance",
        icon: diversifyIcon,
        description: `Raise the growth bar and get unbiased merits. We value ideas based on merits not hierarchy`
    },
    {
        id: "3",
        title: "Awards & Recognitions",
        icon: recognitionIcon,
        description: `Our Awards & Recognitions shows us a global leader, great employer & forward-thinking company`
    },
    {
        id: "4",
        title: "Flat Hierarchy",
        icon: diversifyIcon,
        description: `Get noticed for your every piece of work even if you just onboarded with us`
    },
]

function Lifeatcoders() {
  return (
    <div className='max-w-[100rem] mx-auto w-full py-12 flex md:flex-row flex-col items-center justify-between md:gap-16 gap-8'>
        <div className='md:hidden w-fit md:pb-4 flex flex-col gap-2'>
            <Typography
                typo="header-4-semibold"
            >
                Life at CODERS CLUTCH
            </Typography>
            <div className='w-12 mx-auto h-[1px] bg-black'></div>
        </div>
        <section className='flex-1'>
            <div className='w-full md:block hidden h-[650px] bg-white'>
                <Image 
                    src={lifeatcoders}
                    alt='Life at coders image'
                    className='w-full h-full object-cover md:rounded-r-[6.5rem] rounded-xl'
                />
            </div>
        </section>
        <section className=' flex-1 md:pt-6'>
            <div className='lg:w-[90%] md:w-full w-[90%] md:mx-0 mx-auto'>
                <div className='w-fit pb-4 md:flex hidden flex-col gap-2'>
                    <Typography
                        typo="header-4-semibold"
                    >
                        Life at CODERS CLUTCH
                    </Typography>
                    <div className='w-12 h-[1px] bg-black'></div>
                </div>
                <div className='w-full md:py-8 grid sm:grid-cols-2 lg:gap-8 sm:gap-4 gap-8'>
                    {life_ats.map((data, index) => (
                        <div key={data.id} className='flex gap-4'>
                            <div className='w-6 h-fit'>
                                <Image 
                                    src={data.icon}
                                    alt={`Life icon ${index+1}`}
                                    className='w-full h-full'
                                />
                            </div>
                            <div className='flex-1 flex flex-col gap-3'>
                                <div className='font-semibold'>{data.title}</div>
                                <div className='text-gray-700'>{data.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Lifeatcoders