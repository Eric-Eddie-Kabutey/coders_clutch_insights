'use client';
import React from 'react'
import connectionIcon from "@/public/assets/icons/upside/connection.svg"
import engagementIcon from "@/public/assets/icons/upside/user-engagement.svg"
import seamlessIcon from "@/public/assets/icons/upside/seamless-integration.svg"
import directIcon from "@/public/assets/icons/upside/direct-revenue.svg"
import informedIcon from "@/public/assets/icons/upside/informed.svg"
import reducingIcon from "@/public/assets/icons/upside/reducing.svg"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Typography from '@/components/shared/typography'
import Image from 'next/image';

const upsides = [
    {
        id: "2",
        icon: connectionIcon,
        title: "Enhanced",
        sub_title: "User Connection",
        description: `Create familiar experiences that help users navigate your product with ease.`
    },
    {
        id: "3",
        icon: engagementIcon,
        title: "Amplified",
        sub_title: "Engagement",
        description: `Add interactive elements and intuitive designs that encourage users to explore deeper.`
    },
    {
        id: "4",
        icon: seamlessIcon,
        title: "Seamless Design",
        sub_title: "Integration",
        description: `Blend innovative design with your ecosystem to create a unified experience.`
    },
    {
        id: "5",
        icon: directIcon,
        title: "Direct",
        sub_title: "Revenue Uplift",
        description: `Build designs with optimized layouts & clear CTAs, users are drawn to make decisions faster.`
    },
    {
        id: "6",
        icon: informedIcon,
        title: "Informed",
        sub_title: "Prototyping",
        description: `Develop prototypes using research insights and user data for better design decisions.`
    },
    {
        id: "7",
        icon: reducingIcon,
        title: "Reduced Support",
        sub_title: "Burden",
        description: `Offer easy to understand interfaces that reduce confusion & improve user self-service.`
    },
]

function UpsidesCodersClutch() {
  return (
    <div className='w-full md:py-32 py-20 '>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='w-full flex lg:flex-row flex-col justify-between items-center gap-8'>
                <div className='inter w-fit xs:pr-10 md:pb-10 pb-3 flex flex-col'>
                    <Typography
                        typo="header-3-light"
                    >
                        Upsides of Choosing Coders Clutch
                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                        className='!font-bold'
                    >
                        For UI/UX Design Services
                    </Typography>
                </div>
                <div className='flex-1 grid sm:grid-cols-2 gap-4'>
                    {upsides.slice(0, 2).map((data, index) => (
                            <Card 
                                key={data.id}
                                className='px-2 md:py-5 py-3 bg-app-primary-deep'
                            >
                                <CardHeader>
                                    <div className='w-10 h-fit'>
                                        <Image
                                            src={data.icon}
                                            alt={`Upside ${index+1}`}
                                            className='w-full h-full'
                                        />
                                    </div>
                                    <div className='md:pt-12 sm:pt-6 pt-3 text-white flex flex-col'>
                                        <Typography
                                            typo="header-5-semibold"
                                        >
                                            {data.title}
                                        </Typography>
                                        <Typography
                                            typo="header-5-semibold"
                                        >
                                            {data.sub_title}
                                        </Typography>
                                    </div>
                                    <CardContent className='p-0 pt-4  text-white'>
                                        <Typography
                                            typo="body-medium-medium"
                                        >
                                            {data.description}
                                        </Typography>
                                    </CardContent>
                                </CardHeader>

                            </Card>
                        )
                    )}
                </div>
            </div>
            <div className='w-full pt-6 grid lg:grid-cols-4 sm:grid-cols-2 gap-4'>
                {upsides.slice(2, 6).map((data, index) => (
                        <Card 
                            key={data.id}
                            className='px-3 md:py-5 py-3 bg-app-primary-deep'
                        >
                            <CardHeader>
                                <div className='w-10 h-fit'>
                                    <Image
                                        src={data.icon}
                                        alt={`Upside ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                                <div className='md:pt-12 sm:pt-6 pt-3 text-white flex sm:flex-col sm:gap-0 gap-2'>
                                    <Typography
                                        typo="header-5-semibold"
                                    >
                                        {data.title}
                                    </Typography>
                                    <Typography
                                        typo="header-5-semibold"
                                    >
                                        {data.sub_title}
                                    </Typography>
                                </div>
                                <CardContent className='p-0 pt-4 text-white'>
                                    <Typography
                                        typo="body-medium-medium"
                                    >
                                        {data.description}
                                    </Typography>
                                </CardContent>
                            </CardHeader>

                        </Card>
                    )
                )}
            </div>
        </section>
    </div>
  )
}

export default UpsidesCodersClutch