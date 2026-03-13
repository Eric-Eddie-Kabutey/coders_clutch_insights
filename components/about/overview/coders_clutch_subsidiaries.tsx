'use client';
import Typography from '@/components/shared/typography'
import { ArrowUp } from 'lucide-react'
import React from 'react';
import ai_labImg from "@/public/assets/images/solutions/brands/ai_lab.png";
import brand_labImg from "@/public/assets/images/solutions/brands/brand_lab.png";
import innovation_hubImg from "@/public/assets/images/solutions/brands/innovation_hub.png";
import tourmateImg from "@/public/assets/images/solutions/brands/tourmate.png";
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/reusable/scroll-reveal';

const coders_insta = [
    {
        id: "1",
        title: "AI Lab",
        img: ai_labImg,
        href: "/",
        sub_title: "Powering the future with AI that creates and innovates alongside you.",
    },
    {
        id: "2",
        title: "Brand Lab",
        img: brand_labImg,
        href: "/",
        sub_title: "Crafting bold stories and smart strategies that elevate executives and the brands they lead.",
    },
    {
        id: "3",
        title: "Innovation Hub",
        img: innovation_hubImg,
        href: "/",
        sub_title: "A space where curious minds turn fresh ideas into impactful solutions.",
    },
    {
        id: "3",
        title: "Tourmate",
        img: tourmateImg,
        href: "/",
        sub_title: "Your all in one travel buddy, visit tomorrow!",
    },
]

function CodersClutchInsta() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='pb-6 flex flex-col gap-5'>
                <ScrollReveal>
                    <div className='flex items-center gap-3 '>
                        <Typography
                            typo="header-3-semibold"
                            className='bg-gradient-to-r from-[#F25E20] to-[#E426A0] bg-clip-text hover:text-transparent'
                        >
                            Coders Clutch Subsidiaries
                        </Typography>
                        {/* <div >
                            <Instagram size={28} 
                                className='bg-gradient-to-r from-[#F25E20] to-[#E426A0] bg-clip-text '
                            />
                        </div> */}
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <Typography
                        typo="body-medium-medium"
                    >
                        Our subsidiaries don&apos;t just work—they innovate, collaborate, and celebrate success.
                        <span className='bg-gradient-to-r from-[#F25E20] to-[#E426A0] bg-clip-text hover:text-transparent cursor-pointer font-semibold'> {""}See More</span>
                    </Typography>
                </ScrollReveal>
            </div>
            {/* <div className='w-full pt-12 grid sm:grid-cols-3 lg:gap-8 gap-4'>
                {coders_insta.map((data, index) => (
                    <Card
                        key={data.id}
                        className='w-full xl:h-[500px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[450px]'
                    >
                        <Image 
                            src={data.img}
                            alt={`Coders Insta ${index+1}`}
                            className='w-full h-full object-cover rounded-xl'
                        />
                    </Card>
                ))}
            </div> */}
            <div className='w-full mx-auto pt-8 grid md:grid-cols-4 xs:grid-cols-2 xl:gap-16 md:gap-4 sm:gap-10 gap-4 '>
                {coders_insta.map((data, index) => (
                    <ScrollReveal key={data.id} delay={index * 0.15}>
                        <Link href={data.href}>
                            <Card className='lg:p-5 p-4 flex flex-col justify-between gap-2 group relative overflow-hidden transition-all duration-300'>
                                
                                <div className='absolute bottom-0 left-0 w-full h-0 bg-app-secondary group-hover:h-full transition-all duration-300 ease-in-out'></div>
                                <div className='flex flex-col gap-2 relative z-10'>
                                    <CardHeader className='w-full px-0 py-0'>
                                        <Image 
                                            src={data.img}
                                            alt={`service ${index+1}`}
                                            className={`w-fit lg:h-16 mx-auto object-cover rounded-lg`}
                                        />
                                    </CardHeader>
                                    <CardContent className='px-4 pt-4 xl:pb-2 pb-0 flex flex-col'>
                                        <Typography 
                                            typo="header-6-semibold"
                                            className='pb-2 text-center !leading-none group-hover:text-white'>{data.title}
                                        </Typography>
                                        <Typography
                                            typo="body-small-regular"
                                            className='text-gray-400 line-clamp-2 !leading-normal group-hover:text-gray-100'
                                        >
                                            {data.sub_title}
                                        </Typography>
                                    </CardContent>
                                </div>
                                <CardFooter className='px-0 xl:pb-3 pb-1 flex flex-row justify-end items-center z-[10]'>
                                    {/* <StarRating rating={5} /> */}
                                    <button
                                        type='button'
                                        className='p-1 border rounded-full bg-white'
                                    >
                                        <ArrowUp size={18} />
                                    </button>
                                </CardFooter>
                            </Card>
                        </Link>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    </div>
  )
}

export default CodersClutchInsta