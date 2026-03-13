'use client';
import React from 'react'
import mobileAppImg from "@/public/assets/images/solutions/infrastructure_challenge.jpg"
import Image from 'next/image'
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

function SmartInfrastructureChallenge() {
    return (
        <div className='w-full md:py-32 py-20 bg-app-primary-deep relative overflow-hidden'>
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-app-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-app-primary-light/5 rounded-full blur-[100px] -ml-48 -mb-48" />

            <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex md:flex-row flex-col justify-between items-center lg:gap-20 gap-10 relative z-10'>
                <div className='flex-1 relative z-10'>
                    <div className='xl:w-full flex flex-col xl:gap-8 gap-5'>
                        <div className="flex flex-col gap-2">
                            <Typography
                                typo="header-3-semibold"
                                className='xl:!leading-tight !text-white'
                            >
                                Urban Development Challenges
                            </Typography>
                        </div>

                        <Typography
                            typo="body-medium-regular"
                            className='inter !leading-relaxed !text-white/70 max-w-xl'
                        >
                            Cities struggle with congestion, outdated services, and no real-time infrastructure data. Our smart systems connect assets, integrate legacy tech, and centralize control for efficient operations.
                        </Typography>

                        <Button
                            asChild
                            variant="primary"
                            className='w-fit py-7 px-10 !text-lg font-bold bg-app-secondary text-white rounded-xl group shadow-lg shadow-app-secondary/20'
                        >
                            <Link href="/contact-us">
                                <span>Request a Consult</span>
                                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className='md:w-[45%] w-full relative z-10'>
                    <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl'>
                        <Image
                            src={mobileAppImg}
                            alt='Smart Infrastructure visualization'
                            fill
                            className='object-cover object-center transition-transform duration-700 hover:scale-105'
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-app-primary-deep/40 to-transparent" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SmartInfrastructureChallenge