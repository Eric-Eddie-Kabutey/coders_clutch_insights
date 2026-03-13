'use client';
import React from 'react';
import Image from 'next/image';
import { Speaker } from '@/type';
import Typography from '@/components/shared/typography';

interface SpeakerShowcaseProps {
    speakers: Speaker[];
    eventType: 'online' | 'in-person';
}

function SpeakerShowcase({ speakers, eventType }: SpeakerShowcaseProps) {
    const isOnline = eventType === 'online';

    return (
        <div className={`w-full py-12 ${isOnline ? 'bg-gradient-to-b from-blue-50 to-white' : 'bg-white'}`}>
            <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8'>
                {/* Header */}
                <div className='flex flex-col items-center gap-3'>
                    <Typography
                        typo="header-3-semibold"
                        className={isOnline ? 'text-blue-600' : 'text-gray-800'}
                    >
                        Featured Speakers
                    </Typography>
                    <Typography
                        typo="body-large-regular"
                        className='text-center text-gray-600 max-w-2xl'
                    >
                        Learn from industry experts and thought leaders
                    </Typography>
                </div>

                {/* Speakers Grid */}
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                    {speakers.map((speaker) => (
                        <div
                            key={speaker.id}
                            className={`group flex flex-col items-center gap-4 p-6 rounded-xl transition-all duration-300 ${isOnline
                                    ? 'bg-white hover:bg-blue-50 hover:shadow-lg border border-blue-100'
                                    : 'bg-gray-50 hover:bg-white soft-shadow-lg border border-gray-200'
                                }`}
                        >
                            {/* Speaker Image */}
                            <div className='relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-offset-2 ring-offset-white transition-all duration-300 group-hover:ring-8 ${isOnline ? "ring-blue-200 group-hover:ring-blue-300" : "ring-gray-200 group-hover:ring-gray-300"}'>
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className='w-full h-full object-cover'
                                />
                            </div>

                            {/* Speaker Info */}
                            <div className='flex flex-col items-center gap-1 text-center'>
                                <Typography
                                    typo="body-large-semibold"
                                    className='text-gray-900'
                                >
                                    {speaker.name}
                                </Typography>
                                <Typography
                                    typo="body-small-medium"
                                    className={isOnline ? 'text-blue-600' : 'text-gray-600'}
                                >
                                    {speaker.role}
                                </Typography>
                                {speaker.company && (
                                    <Typography
                                        typo="body-small-regular"
                                        className='text-gray-500'
                                    >
                                        {speaker.company}
                                    </Typography>
                                )}
                            </div>

                            {/* Bio (on hover) */}
                            {speaker.bio && (
                                <div className='max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500'>
                                    <Typography
                                        typo="body-small-regular"
                                        className='text-gray-600 text-center line-clamp-3'
                                    >
                                        {speaker.bio}
                                    </Typography>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default SpeakerShowcase;
