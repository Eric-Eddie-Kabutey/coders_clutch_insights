'use client';
import React from 'react';
import Image from 'next/image';
import { insight_events } from '@/constant';
import Typography from '@/components/shared/typography';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function SpeakersSection() {
    // Get speakers from all events
    const allSpeakers = insight_events
        .flatMap(event => event.speakers || [])
        .filter((speaker, index, self) =>
            index === self.findIndex(s => s.id === speaker.id)
        );

    return (
        <div className='w-full py-20 bg-gray-50'>
            <div className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
                {/* Section Header */}
                <div className='flex flex-col gap-4 mb-16'>
                    <Typography typo="header-1-bold" className='text-gray-900 uppercase'>
                        SPEAKERS
                    </Typography>
                    <Typography typo="body-large-regular" className='text-gray-600 max-w-2xl'>
                        Meet our industry-leading experts who will share their knowledge and insights
                    </Typography>
                </div>

                {/* Speakers Grid */}
                <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6'>
                    {allSpeakers.map((speaker) => (
                        <div
                            key={speaker.id}
                            className='group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer'
                        >
                            {/* Speaker Image */}
                            <div className='relative aspect-[3/4] overflow-hidden'>
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                                {/* Overlay on hover */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                                {/* Speaker Info - Always visible at bottom */}
                                <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent'>
                                    <Typography typo="body-medium-semibold" className='text-white'>
                                        {speaker.name}
                                    </Typography>
                                    <Typography typo="body-small-regular" className='text-gray-300'>
                                        {speaker.role}
                                    </Typography>
                                    {speaker.company && (
                                        <Typography typo="body-small-regular" className='text-gray-400'>
                                            {speaker.company}
                                        </Typography>
                                    )}
                                </div>

                                {/* View Profile Link - Shows on hover */}
                                <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg'>
                                        <ArrowUpRight className='w-5 h-5 text-gray-900' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SpeakersSection;
