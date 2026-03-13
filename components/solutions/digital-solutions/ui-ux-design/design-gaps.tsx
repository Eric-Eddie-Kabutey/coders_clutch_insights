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
        title: "Product Discovery",
        description: `Identifying what users need, so your product doesn’t end up fixing the wrong problem.`,
    },
    {
        id: "2",
        icon: inconsistentIcon,
        title: "Inconsistent UI/UX Designs",
        description: `Creating cohesive and intuitive digital designs that feel the same, no matter where the users click.`,
    },
    {
        id: "3",
        icon: userIcon,
        title: "User Usability",
        description: `Building smooth, user-friendly experiences that make every action feel natural and effortless.`,
    },
    {
        id: "4",
        icon: crossIcon,
        title: "Cross-Platform Compatibility",
        description: `Ensuring your product shines whether it is on desktop, mobile, or somewhere in between.`,
    },
    {
        id: "5",
        icon: designIcon,
        title: "Integration & API Design",
        description: `Designing smooth integrations so your product works well with other tools and systems.`,
    },
    {
        id: "6",
        icon: scopeIcon,
        title: "Scope Creep & Feature Overload",
        description: `Balancing creative ideas and strict timelines to keep your project from spiraling out of control.`,
    },
]

function DesignGaps() {
  return (
    <div className='w-full md:py-32 py-20 bg-[#F8F8F8]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col'>
                <Typography
                    typo="header-3-light"
                >
                    Design Gaps We Solve
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Fixing Design Hiccups Before They Become Real Problems
                </Typography>
            </div>
            <div className='w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-4'>
                {design_gaps.map((data, index) => (
                    <div key={data.id} className='lg:pr-16 md:p-0 sm:p-3 p-4 flex flex-col gap-4 md:shadow-none shadow-md md:rounded-none rounded-md'>
                        <div className='sm:w-16 w-12 sm:h-16 h-12 rounded-md'>
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

export default DesignGaps