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
        id: "1",
        title: "Why We are a",
        sub_title: "Go-To MVP Development Company for Startups and Large Enterprises"
    },
    {
        id: "2",
        icon: connectionIcon,
        title: "Agile",
        sub_title: "Architecture",
        description: `Built to flex, scale, and adapt. Our agile architecture grows with your product, not against it.`
    },
    {
        id: "3",
        icon: engagementIcon,
        title: "Post-MVP",
        sub_title: "Roadmap Support",
        description: `Beyond launch, we help you plan, refine, & evolve into a full-scale, market-ready product.`
    },
    {
        id: "4",
        icon: seamlessIcon,
        title: "Industry-Leading",
        sub_title: "Expertise",
        description: `Decades of know-how packed into a team that has built MVPs across 15+ industries.`
    },
    {
        id: "5",
        icon: directIcon,
        title: "Commitment",
        sub_title: "to Data Privacy",
        description: `We bake security into every layer. Compliance-first, privacy-obsessed, & breach-averse.`
    },
    {
        id: "6",
        icon: informedIcon,
        title: "Flexible",
        sub_title: "Engagement Models",
        description: `Need full-time, part-time, or just a quick push? We adapt to your rhythm, your way.`
    },
    {
        id: "7",
        icon: reducingIcon,
        title: "Helping",
        sub_title: "Start-Ups",
        description: `From idea spark to Series A, we have helped startups scale smart, lean, and investor-ready.`
    },
]

function MvpWhyWeAre() {
  return (
    <div className='w-full md:py-32 py-20 '>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='w-full grid lg:grid-cols-4 xs:grid-cols-2 md:gap-2 gap-5'>
                {upsides.map((data, index) => (
                    data.id === "1" ? (
                        <div key={data.id} className='inter sm:col-span-2 flex flex-col justify-center gap-3'>
                            <Typography
                                typo="header-3-light"
                            >
                                Why We are a
                            </Typography>
                            <Typography
                                typo="header-3-semibold"
                                className='!font-bold'
                            >
                                Go-To MVP Development Company for Startups and Large Enterprises
                            </Typography>
                        </div>

                    ) : (
                            <Card 
                                key={data.id}
                                className='col-span-1 xl:px-2 md:py-5 py-3 bg-app-primary-deep'
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
                        )
                    )}
            </div>
           
        </section>
    </div>
  )
}

export default MvpWhyWeAre