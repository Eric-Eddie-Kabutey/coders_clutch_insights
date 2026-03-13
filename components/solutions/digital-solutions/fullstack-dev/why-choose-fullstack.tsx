'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import productIcon from "@/public/assets/icons/design-gap/product.svg"
import inconsistentIcon from "@/public/assets/icons/design-gap/inconsistent.svg"
import userIcon from "@/public/assets/icons/design-gap/user.svg"
import crossIcon from "@/public/assets/icons/design-gap/cross-platform.svg"
import designIcon from "@/public/assets/icons/design-gap/design.svg"
import scopeIcon from "@/public/assets/icons/design-gap/scope-creep.svg"
import Image from 'next/image';

const design_gaps = [
    {
        id: "1",
        icon: productIcon,
        title: "No Hidden Costs",
        description: `Transparent pricing, no surprises. Know exactly what you're paying for your full-stack web development projects.`,
    },
    {
        id: "2",
        icon: inconsistentIcon,
        title: "Flexible Hiring Model",
        description: `Adapt your team tailored to your needs. You can choose from flexible hiring models for better collaboration.`,
    },
    {
        id: "3",
        icon: userIcon,
        title: "Agile Methodology",
        description: `Navigate changes effortlessly. Our Agile approach ensures adaptability, efficiency, and success.`,
    },
    {
        id: "4",
        icon: crossIcon,
        title: "On-time Delivery",
        description: `We know your deadlines matter. Count on us for punctual, on-target delivery of your full-stack solutions.`,
    },
    {
        id: "5",
        icon: designIcon,
        title: "Superior Customer Retention",
        description: `Build lasting relationships with clients. Elevate satisfaction with a reliable full stack development company.`,
    },
    {
        id: "6",
        icon: scopeIcon,
        title: "Certified Developers",
        description: `Hire our skilled, pro-level, certified, time zone-matched full-stack developers for maximum results.`,
    },
]

function WhyChooseFullstack() {
  return (
    <div className='w-full md:py-32 py-20 bg-[#F8F8F8]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Why choose CODERS Clutch
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    for full stack development?
                </Typography>
            </div>
            <div className='w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-4'>
                {design_gaps.map((data, index) => (
                    <div key={data.id} className='lg:pr-16 md:p-0 sm:p-3 p-4 flex flex-col gap-4 md:shadow-none shadow-md md:rounded-none rounded-md'>
                        <div className='sm:w-12 w-10 sm:h-12 h-10 rounded-md'>
                            <Image 
                                src={data.icon}
                                alt={`Design ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <Typography
                            typo="header-6-semibold"
                        >
                            {data.title}
                        </Typography>
                        <Typography
                            typo="body-medium-medium"
                            className='!leading-relaxed'
                        >
                            {data.description}
                        </Typography>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default WhyChooseFullstack