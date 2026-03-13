'use client';
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { insight_events } from '@/constant';
import Typography from '@/components/shared/typography';
import { Calendar, MapPin, Star, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'phosphor-react';

function EventDetailHeroLight() {
    const params = useParams();
    const slug = params?.slug as string;

    // Find the event by slug
    const event = insight_events.find(e => e.event_slug === slug);

    if (!event) {
        return (
            <div className='w-full min-h-screen flex items-center justify-center bg-black text-white'>
                <Typography typo="header-3-semibold">Event not found</Typography>
            </div>
        );
    }

    const scrollToInvite = () => {
        const section = document.getElementById('apply-invite');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const words = event.title?.trim().split(/\s+/) ?? [];

    const part1 = words.slice(0, 3).join(" ");
    const part2 = words.slice(3, 6).join(" ");
    const part3 = words.slice(6).join(" ");

    return (
        <div className='w-full h-[80vh]  relative overflow-hidden flex flex-col items-center justify-center text-gray-900'>
            {/* Background Image with Light High-Key Overlay */}
            <div className='absolute inset-0 z-0 overflow-hidden'>
                <Image
                    src={event.img}
                    alt="Event Hero"
                    className='w-full h-full object-cover scale-110 opacity-10 grayscale hover:opacity-20 transition-opacity duration-1000'
                    priority
                />
                {/* Light Gradients for Depth */}
                <div className='absolute inset-0 bg-gradient-to-t from-gray-50/50 via-transparent to-gray-50/5' />
            </div>

            {/* Content Container */}
            <div className='relative z-20 max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col items-center gap-12 py-20 text-center'>
                {/* <div className='flex flex-col gap-2'>
                    <h1 className='text-[12vw] md:text-[8vw] lg:text-[7vw] font-black leading-[0.8] tracking-[-0.05em] uppercase text-gray-900'>
                        {event.title.split(' ').slice(0, 3).join(' ')}
                        <br />
                        <span className='text-transparent [-webkit-text-stroke:1px_#111827] opacity-20'>
                            {event.title.split(' ').slice(3).join(' ')}
                        </span>
                    </h1>
                </div> */}

                {/* <Typography typo="body-large-regular" className='max-w-2xl text-gray-500 leading-relaxed mx-auto italic'>
                    {event.main_description}
                </Typography> */}

                {/* <button
                    onClick={scrollToInvite}
                    className='mt-4 bg-black text-white px-14 py-5 rounded-full font-black uppercase tracking-[0.2em] hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-xl active:scale-95'
                >
                    Apply for an Invite
                </button> */}

                {/* <div className='mt-12 flex flex-col items-center gap-3'>
                    <div className='flex items-center gap-1 text-gray-900'>
                        <Star className='w-4 h-4 fill-current' />
                        <Star className='w-4 h-4 fill-current' />
                        <Star className='w-4 h-4 fill-current' />
                        <Star className='w-4 h-4 fill-current' />
                        <Star className='w-4 h-4 fill-current' />
                    </div>
                    <blockquote className='max-w-md text-sm text-gray-400 font-medium italic'>
                        "Finally, a conference that is tied to the industry's pulse and true market needs."
                    </blockquote>
                    <cite className='text-xs uppercase tracking-widest font-black text-gray-900 not-italic'>
                        Sarah L. &mdash; Previous Attendee
                    </cite>
                </div> */}

                <Typography
                    typo="body-medium-medium"
                    className="md:block hidden text-app-primary-medium font-semibold uppercase ">With Agentic Ai Intelligence Integrations</Typography>
                <Typography
                    className="xl:text-5xl lg:text-4xl sm:text-3xl font-medium xs:text-3xl text-2xl text-center text-app-primary-light"
                >{part1} <span className="text-app-primary-deep oleo-script">{part2}</span> {part3}</Typography>
                <Typography
                    typo="body-large-regular"
                    className="w-[80%] mx-auto inter md:block hidden text-center text-black !text-xl"
                >
                    {event.main_description}
                </Typography>
                <Button
                    onClick={scrollToInvite}
                    variant="outline"
                    size="lg"
                    className="md:flex hidden rounded-full text-white bg-app-primary-deep hover:bg-app-primary-deep hover:text-white"
                >
                    Apply For An Invite
                    <ArrowRight />
                </Button>
            </div>
        </div>
    );
}

export default EventDetailHeroLight;
