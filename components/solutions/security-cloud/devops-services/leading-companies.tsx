'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import mobile_bg from "@/public/assets/images/security-cloud/mobile-bg.png"; 
import Image from 'next/image';
import leading_company from "@/public/assets/images/security-cloud/home_screen2.png"; 
import { Wallet } from 'lucide-react';

const business = [
    { id: "1", rate: "8+", title: "Fintech Companies" },
    { id: "2", rate: "2M+", title: "User Request " },
    { id: "3", rate: "15+", title: "Customizable Features" },
]

function LeadingCompanies() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography typo="header-3-light">
                    World&apos;s Leading Companies
                </Typography>
                <Typography typo="header-3-semibold" className='!font-bold'>
                    Achieve More With DevOps Services
                </Typography>
            </div>

            <div className='min-h-[550px] flex sm:flex-row flex-col justify-between items-center gap-8'>
                {/* Left Content */}
                <div className='flex-1 flex flex-col gap-6'>
                    <div className='flex items-center gap-3 '>
                        <Wallet color='#34644c' size={35} />
                        <Typography typo="header-4-semibold" className='text-app-primary-light pops !font-bold'>
                            CodePay
                        </Typography>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <Typography typo="header-6-semibold">About</Typography>
                        <Typography typo="body-medium-medium">
                            A Secure and Robust Fintech Platform trusted by some leading fintech startups. 
                        </Typography>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <Typography typo="header-6-semibold">Solution</Typography>
                        <Typography typo="body-medium-medium">
                            A state of the art utility and money transfer app, built with micro service architecture for global and seamless deliver across android, IOS and the Web.
                        </Typography>
                    </div>
                </div>

                {/* Center Visual: The Animated CSS Circle */}
                <div className='relative hidden w-[550px] h-[550px] md:flex flex-col justify-center items-center'>
                    
                    {/* ROTATING CIRCLE CONTAINER */}
                    <div className='absolute w-[480px] h-[480px] rounded-full border-2 border-dashed border-gray-300 animate-[spin_10s_linear_infinite]'>
                        {/* Blue Dot */}
                        <div className='absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]' />
                        
                        {/* Green Dot */}
                        <div className='absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)]' />
                    </div>

                    {/* PHONE IMAGES */}
                    <div className='w-full h-fit absolute top-0 z-10 pointer-events-none'>
                        <Image 
                            src={mobile_bg}
                            alt='Mobile frame'
                            className='w-full mx-auto h-full'
                        />
                    </div>
                    <div className='w-[62%] h-fit absolute top-1 right-[92px] z-20 pointer-events-none'>
                        <Image 
                            src={leading_company}
                            alt='App screen'
                            className='w-full mx-auto h-full'
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className='inter sm:flex-1 w-full flex flex-col gap-3'>
                    <Typography typo="header-6-semibold" className='pb-3'>
                        Business Impact
                    </Typography>
                    {business.map(data => (
                        <div key={data.id} className='flex flex-col gap-3'>
                            <div className='flex items-center gap-2'>
                                <Typography className='text-[#178450]' typo="header-2-semibold">
                                   {data.rate}
                                </Typography>
                                <Typography typo="body-large-regular">
                                    {data.title}
                                </Typography>
                            </div>
                            <div className='w-[70%] border-[2px] border-gray-400 border-dashed' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default LeadingCompanies;