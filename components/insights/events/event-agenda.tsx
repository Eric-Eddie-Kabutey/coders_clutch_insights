'use client';
import React from 'react';
import { AgendaItem, Speaker } from '@/type';
import Typography from '@/components/shared/typography';
import { ArrowRight } from 'lucide-react';
import NextImage from 'next/image';

interface EventAgendaProps {
    agenda: AgendaItem[];
    speakers?: Speaker[];
    eventType: 'online' | 'in-person';
}

function EventAgenda({ agenda, speakers, eventType }: EventAgendaProps) {
    const isOnline = eventType === 'online';

    const getSpeakerById = (speakerId?: string) => {
        if (!speakerId || !speakers) return null;
        return speakers.find(s => s.id === speakerId);
    };

    return (
        <div className="w-full py-24 bg-white">
            <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto">
                {/* Header Section - Matching the Speakers Style */}
                <div className="grid grid-cols-1 lg:grid-cols-5 items-end gap-8 mb-20">
                    <div className="lg:col-span-3">
                        <span className="text-gray-400 font-medium tracking-[0.2em] uppercase block mb-4">Schedule</span>
                        <h2 className="text-6xl md:text-8xl font-bold text-gray-900 uppercase -tracking-[0.05em] leading-[0.9]">
                            EVENT<br />AGENDA
                        </h2>
                    </div>
                    <div className="lg:col-span-2">
                        <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-gray-900 pl-6">
                            A curated sequence of sessions, workshops, and networking opportunities designed to maximize your learning and connection.
                        </p>
                    </div>
                </div>

                {/* Agenda Grid */}
                <div className="flex flex-col">
                    {agenda.map((item, index) => {
                        const speaker = getSpeakerById(item.speaker_id);

                        return (
                            <div
                                key={item.id}
                                className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-all duration-500 ease-in-out px-4"
                            >
                                {/* Time Column */}
                                <div className="md:col-span-2 flex flex-col justify-start">
                                    <span className="text-3xl font-bold text-gray-900 group-hover:translate-x-1 transition-transform duration-300">
                                        {item.time}
                                    </span>
                                    <span className="text-sm font-medium text-gray-400 uppercase tracking-widest mt-1">
                                        Session {index + 1}
                                    </span>
                                </div>

                                {/* Content Column */}
                                <div className="md:col-span-7 flex flex-col gap-4">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight group-hover:text-black transition-colors">
                                        {item.title}
                                    </h3>
                                    {item.description && (
                                        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                                            {item.description}
                                        </p>
                                    )}
                                </div>

                                {/* Speaker Column */}
                                <div className="md:col-span-3 flex flex-col justify-center">
                                    {speaker && (
                                        <div className="flex items-center gap-4 group/speaker">
                                            <div className="relative w-14 h-14 flex-shrink-0">
                                                <div className="absolute inset-0 bg-gray-900 rounded-full scale-0 group-hover/speaker:scale-110 transition-transform duration-300 opacity-10" />
                                                <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-transparent group-hover/speaker:ring-gray-900 transition-all duration-300">
                                                    <NextImage
                                                        src={speaker.image}
                                                        alt={speaker.name}
                                                        fill
                                                        className="object-cover grayscale group-hover/speaker:grayscale-0 transition-all duration-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-base font-bold text-gray-900 leading-tight">
                                                    {speaker.name}
                                                </span>
                                                <span className="text-sm text-gray-500 uppercase tracking-tight">
                                                    {speaker.role}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Subtle indicator */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-900 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default EventAgenda;
