'use client';
import Typography from '@/components/shared/typography'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { insight_events } from '@/constant';
import { CalendarDays, MapPin, Monitor, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';

function UpcomingEvents() {
    return (
        <div className='w-full py-12 bg-gray-50'>
            <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex flex-col gap-3'>
                <Typography
                    typo="header-2-bold"
                >
                    <span className='text-gray-600'>Upcoming</span> Events
                </Typography>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    {insight_events.slice(0, 2).map((data, index) => {
                        const isOnline = data.event_type === 'online';
                        const badgeBg = isOnline ? 'bg-blue-600' : 'bg-gray-700';
                        const badgeText = isOnline ? 'Webinar' : 'Conference';
                        const LocationIcon = isOnline ? Monitor : MapPin;
                        const locationColor = isOnline ? 'text-blue-600' : 'text-pink-600';

                        return (
                            // <Link key={data.id} href={`/insights/event/${data.event_slug}`}>
                            //     <div className="relative xl:h-[650px] md:h-[600px] sm:h-[550px] xs:h-[630px] h-[650px]">
                            //         <div className='relative w-full xl:h-[450px] md:h-[400px] sm:h-[350px] xs:h-[430px] h-[350px]'>
                            //             <Image
                            //                 src={data.img}
                            //                 alt={`Event ${index + 1}`}
                            //                 className='w-full h-full object-cover rounded-lg'
                            //             />
                            //             <button className={`absolute top-8 left-10 w-fit px-3 py-1.5 text-[12px] font-semibold text-white uppercase rounded-md ${badgeBg}`}>
                            //                 {badgeText}
                            //             </button>
                            //         </div>
                            //         <div className='pops flex flex-col gap-4'>
                            //             <div className='flex flex-col gap-1'>
                            // <div className='w-full flex items-center gap-2'>
                            //     <CalendarDays size={20} />
                            //     <span>June 20, 2025</span>
                            // </div>
                            //                 <Typography
                            //                     typo="body-large-semibold"
                            //                     className='!font-bold line-clamp-2'
                            //                 >
                            //                     {data.title}
                            //                 </Typography>
                            //             </div>
                            //             <div className='flex items-center gap-2 text-pink-600'>
                            //                 <MapPin size={18} />
                            //                 <span className='text-sm'>Online</span>
                            //             </div>
                            //             <Typography
                            //                 typo="body-small-regular"
                            //                 className='!leading-normal line-clamp-2'
                            //             >
                            //                 {data?.main_description}
                            //             </Typography>
                            //         </div>
                            //     </div>
                            // </Link>
                            <Card
                                key={data.id}
                                className="group relative flex flex-col justify-start h-auto border-none rounded-lg shadow-md overflow-hidden transition-all duration-500"
                            >
                                <Link href={`/events/${data.event_slug}`} className="block w-full h-full relative">
                                    <motion.div
                                        initial="initial"
                                        whileHover="hover"
                                        className="relative w-full h-full flex flex-col p-10 justify-between z-10"
                                    >
                                        {/* Background Image & Overlay */}
                                        <div className="absolute inset-0 z-0 overflow-hidden">
                                            <Image
                                                src={data.img}
                                                alt={`Event ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-app-primary-deep/95 via-app-primary-deep/50 to-app-primary-deep/30" />
                                        </div>
                                        <div className='w-full flex flex-row flex-wrap gap-6 justify-between text-white z-10'>
                                            <span className={`w-fit px-3 py-1.5 text-[12px] font-semibold uppercase rounded-md ${badgeBg}`}>
                                                {badgeText}
                                            </span>
                                            <div className='flex items-center gap-2'>
                                                <span>{data.date}</span>
                                            </div>
                                        </div>

                                        <div className='flex flex-col justify-end'>
                                            <div className="relative z-10 flex flex-col mt-20">
                                                <div className="flex flex-col gap-1 text-white items-center justify-between">
                                                    <Typography className="text-2xl md:text-3xl font-semibold leading-tight text-white line-clamp-3">
                                                        {data.title}
                                                    </Typography>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <motion.p
                                                        variants={{
                                                            initial: { height: 0, opacity: 0, marginTop: 0 },
                                                            hover: {
                                                                height: "auto",
                                                                opacity: 1,
                                                                marginTop: 16,
                                                                transition: {
                                                                    height: { type: "spring", stiffness: 100, damping: 20 },
                                                                    opacity: { duration: 0.4 }
                                                                }
                                                            }
                                                        }}
                                                        className="text-white text-sm md:text-base leading-relaxed font-light line-clamp-4 inter"
                                                    >
                                                        {data?.main_description}
                                                    </motion.p>
                                                </div>
                                            </div>
                                            <div className="relative z-10 flex items-center gap-3 mt-10">
                                                <span className="text-sm font-bold text-white uppercase tracking-widest">
                                                    View Event
                                                </span>
                                                <MoveRight size={20} className="text-white group-hover:text-app-secondary group-hover:translate-x-3 transition-all duration-500" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </Card>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}

export default UpcomingEvents