'use client';
import React from 'react';
import Image from 'next/image';
import { insight_events } from '@/constant';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

function EventsHeroLight() {
    // Get the first event for the hero
    const featuredEvent = insight_events[0];

    return (
        <div className='w-full min-h-screen bg-white relative overflow-hidden'>
            {/* Background Image with Overlay */}
            <div className='absolute inset-0 z-0'>
                <Image
                    src={featuredEvent.img}
                    alt="Event Hero"
                    className='w-full h-full object-cover'
                    priority
                />
                {/* Light overlay instead of blue */}
                <div className='absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70' />
            </div>

            {/* Content */}
            <div className='relative z-10 max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto min-h-screen flex flex-col justify-center py-20'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Column - Main Content */}
                    <div className='flex flex-col gap-8'>
                        {/* Date & Location */}
                        <div className='flex flex-col gap-2'>
                            <Typography typo="body-large-semibold" className='text-gray-600 uppercase tracking-wider'>
                                {featuredEvent.date}
                            </Typography>
                            <Typography typo="body-medium-regular" className='text-gray-500 flex items-center gap-2'>
                                <MapPin className='w-4 h-4' />
                                {featuredEvent.location}
                            </Typography>
                        </div>

                        {/* Main Heading */}
                        <div className='flex flex-col gap-4'>
                            <Typography typo="header-1-bold" className='text-gray-900 leading-tight'>
                                EXPLORING
                                <br />
                                THE FUTURE
                            </Typography>
                        </div>

                        {/* Speakers Preview */}
                        {featuredEvent.speakers && featuredEvent.speakers.length > 0 && (
                            <div className='flex items-center gap-4'>
                                <div className='flex -space-x-3'>
                                    {featuredEvent.speakers.slice(0, 3).map((speaker, index) => (
                                        <div
                                            key={speaker.id}
                                            className='w-12 h-12 rounded-full border-2 border-white overflow-hidden ring-2 ring-gray-200'
                                            style={{ zIndex: 3 - index }}
                                        >
                                            <Image
                                                src={speaker.image}
                                                alt={speaker.name}
                                                className='w-full h-full object-cover'
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-col'>
                                    <Typography typo="body-small-semibold" className='text-gray-900'>
                                        Skilled Speakers
                                    </Typography>
                                    <Typography typo="body-small-regular" className='text-gray-500'>
                                        {featuredEvent.speakers.length} Industry Experts
                                    </Typography>
                                </div>
                            </div>
                        )}

                        {/* Contact Info */}
                        <div className='flex flex-wrap gap-6 text-gray-600'>
                            <Typography typo="body-medium-regular">
                                +1 800 123 456 789
                            </Typography>
                            <Typography typo="body-medium-regular">
                                events@codersclutch.com
                            </Typography>
                        </div>
                    </div>

                    {/* Right Column - Event Details Card */}
                    <div className='bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-200'>
                        <div className='flex flex-col gap-6'>
                            <Typography typo="header-4-semibold" className='text-gray-900 uppercase'>
                                {featuredEvent.title}
                            </Typography>

                            <Typography typo="body-medium-regular" className='text-gray-600 leading-relaxed'>
                                {featuredEvent.main_description}
                            </Typography>

                            {/* Event Stats */}
                            <div className='grid grid-cols-2 gap-4 py-4 border-y border-gray-200'>
                                <div className='flex items-center gap-2'>
                                    <Calendar className='w-5 h-5 text-gray-500' />
                                    <div>
                                        <Typography typo="body-small-regular" className='text-gray-500'>
                                            Date
                                        </Typography>
                                        <Typography typo="body-small-semibold" className='text-gray-900'>
                                            {featuredEvent.date.split(',')[0]}
                                        </Typography>
                                    </div>
                                </div>
                                {featuredEvent.max_attendees && (
                                    <div className='flex items-center gap-2'>
                                        <Users className='w-5 h-5 text-gray-500' />
                                        <div>
                                            <Typography typo="body-small-regular" className='text-gray-500'>
                                                Attendees
                                            </Typography>
                                            <Typography typo="body-small-semibold" className='text-gray-900'>
                                                {featuredEvent.current_attendees}/{featuredEvent.max_attendees}
                                            </Typography>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* CTA Button */}
                            <Link href={`/events/${featuredEvent.event_slug}`}>
                                <Button
                                    className='w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2'
                                >
                                    View Event Details
                                    <ArrowRight className='w-5 h-5' />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Speakers Marquee */}
            {featuredEvent.speakers && featuredEvent.speakers.length > 0 && (
                <div className='absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-8 overflow-hidden'>
                    <div className='flex items-center gap-12 animate-scroll-slow'>
                        {[...Array(3)].map((_, repeatIndex) => (
                            <React.Fragment key={repeatIndex}>
                                {featuredEvent.speakers?.map((speaker) => (
                                    <div key={`${speaker.id}-${repeatIndex}`} className='flex items-center gap-4 min-w-max'>
                                        <Typography typo="header-2-bold" className='text-gray-900 uppercase'>
                                            SPEAKERS
                                        </Typography>
                                        <div className='w-2 h-2 rounded-full bg-gray-400' />
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default EventsHeroLight;
