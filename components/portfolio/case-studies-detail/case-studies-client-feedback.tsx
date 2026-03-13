'use client';
import Typography from '@/components/shared/typography'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';


import { CaseStudyProp } from '@/type';

interface CaseStudyDetailMainProps {
    case_study: CaseStudyProp;
    nextCaseStudy?: { title: string; slug: string; };
    prevCaseStudy?: { title: string; slug: string; };
}

function CasestudiesClientFeedback({ case_study, nextCaseStudy, prevCaseStudy }: CaseStudyDetailMainProps) {
    if (!case_study.client_feedback) return null;

    return (
        <div className='w-full py-20 bg-[#e4ffbc]'>
            <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex flex-col gap-12'>
                <div className='w-full flex flex-col gap-6'>
                    <Typography
                        typo="header-3-semibold"
                    >
                        Client&apos;s Feedback
                    </Typography>
                    <Typography
                        typo="body-large-medium"
                    >
                        &apos;{case_study.client_feedback.quote}&apos;
                    </Typography>
                    <div className='flex items-center gap-4'>
                        <Image
                            src={case_study.client_feedback.image}
                            alt='Profile image'
                            className='w-12 h-12 rounded-full object-cover'
                        />
                        <div className='flex flex-col justify-center'>
                            <Typography
                                typo="header-6-semibold"
                                className='!leading-none'
                            >
                                {case_study.client_feedback.author}
                            </Typography>
                            <Typography
                                typo="body-medium-regular"
                            >
                                {case_study.client_feedback.role}
                            </Typography>
                        </div>
                    </div>
                </div>
                {(nextCaseStudy || prevCaseStudy) && (
                    <div className='w-full flex justify-between items-center md:gap-4'>
                        {prevCaseStudy ? (
                            <Link href={`/insights/casestudies/${prevCaseStudy.slug}`} className='flex items-center md:gap-3 gap-1 group'>
                                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                                <div className='flex flex-col gap-2'>
                                    <Typography typo="body-small-light" className='uppercase'>
                                        Previous
                                    </Typography>
                                    <Typography typo="body-medium-medium" className='truncate max-w-[150px] md:max-w-[300px]'>
                                        {prevCaseStudy.title}
                                    </Typography>
                                </div>
                            </Link>
                        ) : <div />}
                        <div className='w-[0.5px] h-12 bg-gray-300'></div>
                        {nextCaseStudy ? (
                            <Link href={`/insights/casestudies/${nextCaseStudy.slug}`} className='flex items-center md:gap-3 gap-1 group'>
                                <div className='flex flex-col items-end gap-2'>
                                    <Typography typo="body-small-light" className='uppercase'>
                                        Next
                                    </Typography>
                                    <Typography typo="body-medium-medium" className='truncate max-w-[150px] md:max-w-[300px]'>
                                        {nextCaseStudy.title}
                                    </Typography>
                                </div>
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ) : <div />}
                    </div>
                )}
            </section>
        </div>
    )
}

export default CasestudiesClientFeedback