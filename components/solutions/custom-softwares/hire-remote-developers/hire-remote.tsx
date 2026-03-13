'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import requirementsIcon from "@/public/assets/icons/solution/hire-devs/requirements_icon.png"
import developersIcon from "@/public/assets/icons/solution/hire-devs/developers_icon.png"
import assembleIcon from "@/public/assets/icons/solution/hire-devs/assemble_icon.png"
import kickstartIcon from "@/public/assets/icons/solution/hire-devs/kickstart_icon.png"
import Image from 'next/image';

function HireRemote() {
    // Data array containing the card details
    const processes = [
        {
            id: "1",
            title: "Project Requirements",
            icon: requirementsIcon,
            description: `Clearly outline project needs for accurate developer matches.`,
        },
        {
            id: "2",
            title: "Choose Developers",
            icon: developersIcon,
            description: `Select top candidates from our expert developer pool.`,
        },
        {
            id: "3",
            title: "Assemble Your Team",
            icon: assembleIcon,
            description: `Customize Developer Selection and Manage Resources.`,
        },
        {
            id: "4",
            title: "Kickstart the Project",
            icon: kickstartIcon,
            description: `Start development with your handpicked remote team.`,
        },
    ]

    return (
        <div className='w-full md:py-32 py-20 bg-app-primary-deep overflow-hidden'>
            <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
                <div className='inter xl:pb-10 pb-6 flex flex-col gap-1 text-white'>
                    <Typography typo="header-3-light">
                        Why Hire Dedicated Remote Developers
                    </Typography>
                    <Typography typo="header-3-semibold" className='!font-bold'>
                        from CODERS Clutch?
                    </Typography>
                </div>
                
                <div className='w-full py-8 grid md:grid-cols-4 xs:grid-cols-2 xs:gap-4 gap-3 items-start'>
                    {processes.map((data, index) => (
                        <div 
                            key={data.id} 
                            // Outer wrapper handles the staggered layout (mt-10)
                            className={`relative w-full min-h-[300px] flex flex-col justify-center items-center ${index % 2 === 0 ? "md:mt-10" : "mt-0"}`}
                        >
                            {/* --- THE CARD CONTAINER --- */}
                            {/* Note: overflow-hidden is NOT used here so the number can stick out */}
                            <div className='relative z-10 lg:w-[80%] w-[90%] mx-auto xl:px-10 px-3 py-10 flex flex-col justify-center items-center gap-5 border border-gray-500 rounded-xl text-white bg-app-primary-deep'>
                                
                                {/* Inner content wrapper: Higher z-index to stay above the number */}
                                <div className='relative z-20 flex flex-col gap-5 items-center'>
                                    <Typography
                                        typo="header-6-semibold"
                                        className='text-center'
                                    >
                                        {data.title}
                                    </Typography>
                                    <Typography
                                        typo="body-medium-medium"
                                        className='text-center'
                                    >
                                        {data.description}
                                    </Typography>
                                </div>

                                {/* --- THE NUMBER (Half-In / Half-Out) --- */}
                                {/* - translate-x/y [-50%] moves the center of the number to the corner 
                                    - z-10 ensures it sits ABOVE the border/background
                                    - text-app-primary-light (without /opacity) makes it bold and solid
                                */}
                                <div
                                    className='absolute bottom-0 left-0 z-10 sm:text-9xl text-8xl font-bold text-app-primary-light leading-none pointer-events-none select-none translate-x-[-50%] translate-y-[50%]'
                                >
                                    {data.id}
                                </div>
                            </div>

                            {/* Icon Wrapper: Top-most layer */}
                            <div className='w-16 h-16 absolute top-0 left-0 z-30'>
                                <Image 
                                    src={data.icon}
                                    alt={`Process ${index+1}`}
                                    className='w-full h-full object-contain'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HireRemote;