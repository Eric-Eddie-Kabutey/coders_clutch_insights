'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { insight_events } from '@/constant';
import { ArrowRight, CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function EventsHero() {
  return (
    <div className='w-full md:py-24 py-12 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-6'>
            <div className='md:w-[600px] w-full mx-auto flex flex-col items-center gap-4'>
                <Typography
                    typo="header-3-semibold"
                    className='text-center text-[#53565A]'
                >
                    Events
                </Typography>
                <Typography
                    typo="body-large-medium"
                    className='text-center text-[#53565A]'
                >
                    Take a tour of our upcoming events.
                </Typography>
            </div>
            <div className='w-full py-6'>
                <div>
                    {insight_events.slice(0, 1).map((event, index) => (
                        <section key={event.id} className='w-[95%] max-h-[700px] h-[90vh] relative mx-auto group'>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/70 z-10 rounded-[1.2rem] group-hover:bg-black/40 transition-all duration-300"></div>
                            
                            <div className='w-full h-[90vh] max-h-[700px]'>
                                <Image
                                    src={event.img}
                                    alt={`Event banner ${index+1}`}
                                    className='w-full h-full object-cover object-top rounded-[1.2rem]'
                                />
                            </div>
                            
                            <div className='absolute bottom-16 inset-x-0 max-container 2xl:w-[75%] w-[95%] flex flex-col gap-6 text-white z-20 transition-all duration-300 group-hover:bottom-1/2 group-hover:translate-y-1/2'>
                                <div className='flex flex-col'>
                                    <Typography
                                        typo="header-2-medium"
                                        className='!leading-11 md:!text-[3rem] group-hover:mb-4 transition-all'
                                    >
                                        {event.title}
                                    </Typography>
                                    
                                    <div className='flex flex-wrap gap-6 mt-2'>
                                        <div className='flex items-center gap-2'>
                                            <CalendarIcon className='w-5 h-5' />
                                            <Typography typo="body-large-medium">{event.date}</Typography>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <ClockIcon className='w-5 h-5' />
                                            <Typography typo="body-large-medium">10:00 AM - 4:00 PM</Typography>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <MapPinIcon className='w-5 h-5' />
                                            <Typography typo="body-large-medium">Heirs Technologies HQ, Lagos</Typography>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 delay-100 flex flex-col gap-6'>
                                    <Typography typo="body-large-regular" className='!leading-relaxed'>
                                        Join us as we welcome the first batch of trainees for our Software Engineering Training Program (STEP) Cohort 2. 
                                        This intensive 6-month program equips participants with cutting-edge technical skills and industry knowledge. 
                                        The event will feature keynote speeches, networking opportunities, and a showcase of our training facilities.
                                    </Typography>
                                    
                                    <div className='flex gap-4'>
                                        <Link href={`/insights/event/${event.event_slug}`} >
                                            <Button
                                                variant="primary"
                                                onClick={() => {
                                                    sessionStorage.setItem('currentEvent', JSON.stringify(event));
                                                }}
                                                className='w-fit py-3 px-6 font-medium hover:scale-105 transition-transform'
                                            >
                                                <span>View Event</span>
                                                <ArrowRight className='ml-2' />
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="outline"
                                            className='w-fit py-3 px-6 font-medium border-white text-white hover:bg-white/10'
                                        >
                                            <span>Add to Calendar</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default EventsHero