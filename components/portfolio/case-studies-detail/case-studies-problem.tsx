'use client';
import Typography from '@/components/shared/typography'
import React from 'react';
import Image from 'next/image';
import { CaseStudyProp } from '@/type';

interface CaseStudyDetailMainProps {
    case_study: CaseStudyProp;
}

function CaseStudiesProblem({case_study}: CaseStudyDetailMainProps) {
  return (
    <div className='w-full py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex flex-col gap-12'>
            <div className='flex flex-col gap-4'>
                <Typography
                    typo="header-2-semibold"
                >
                    The Problem
                </Typography>
                <Typography
                    typo="body-medium-medium"
                >
                    {case_study?.problems?.title}
                </Typography>
                <ul className='flex flex-col gap-4 list-inside list-disc'>
                    {case_study?.problems.contents.map(data => (
                        <li key={data.id} className=''>
                            <span className='font-semibold'>{data.title} </span>
                            {data.description}
                        </li>
                    ))}
                </ul>
                <Typography
                    typo="body-medium-medium"
                >
                    {case_study?.problems?.summary}
                </Typography>
            </div>
            <div className='w-full flex flex-col gap-2'>
                {case_study?.problems?.problem_images.map((img, index) => (
                    <div
                        key={index+1} 
                        className='w-full h-fit'
                    >
                        <Image 
                            src={img}
                            alt='Case study image'
                            className='w-full h-full rounded-lg'
                        />
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default CaseStudiesProblem