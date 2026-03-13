'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import timingIcon from "@/public/assets/icons/career_icons/timing_icon.png";
import referralIcon from "@/public/assets/icons/career_icons/referral_icon.png";
import policyIcon from "@/public/assets/icons/career_icons/policy_icon.png";
import Image from 'next/image';

const benefits = [
    {
        id: "1",
        title: "Flexible Timings",
        icon: timingIcon,
        description: `There are no hard and fast rules for office work hours. At the end of the day, the result only matters.`,
    },
    {
        id: "2",
        title: "MediCare for All",
        icon: timingIcon,
        description: `Effective Medical insurance for family with accident coverage. Free assistance on tax and investment planning.`,
    },
    {
        id: "3",
        title: "Effective Referral Program",
        icon: referralIcon,
        description: `Our effective Employee referral program helps to find & hire the best talent through our existing employees' network.`,
    },
    {
        id: "4",
        title: "Parental Leave Policy",
        icon: policyIcon,
        description: `Get months of paid holiday for all the women employees with a possibility to extend.`,
    },
    {
        id: "5",
        title: "Internal Job Switch",
        icon: timingIcon,
        description: `If you have the passion to grow, a great initiator & shows amazing results, then switching between teams is a piece of cake.`,
    },
]

function EmployeeBenefits() {
  return (
    <div className='w-full py-12'>
        <section className='max-w-[70rem] 2xl:w-[70%] xl:w-[80%] w-[90%] mx-auto shadow-lg rounded-md'>
            <div className='lg:w-[80%] w-[90%] mx-auto py-8'>
                <div className='w-fit mx-auto text-center pb-4 flex flex-col gap-2'>
                    <Typography
                        typo="header-4-semibold"
                    >
                        Employee Benefits at CODERS CLUTCH
                    </Typography>
                    <div className='w-12 mx-auto h-[1px] bg-black'></div>
                </div>

                <div className='w-full py-8 grid sm:grid-cols-2 lg:gap-12 gap-8'>
                    {benefits.map((data, index) => (
                        <div key={data.id} className='flex gap-4'>
                            <div className='w-8 h-fit'>
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

export default EmployeeBenefits