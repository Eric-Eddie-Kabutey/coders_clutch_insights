'use client';
import Typography from '@/components/shared/typography';
import React from 'react';
import Image from 'next/image';
import { CaseStudyProp } from '@/type';

interface CaseStudyDetailMainProps {
    case_study: CaseStudyProp;
}


function CasestudiesSolution({case_study}: CaseStudyDetailMainProps) {
  return (
    <div className='w-full py-20 bg-[#e1f7e1]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex flex-col gap-4'>
            <Typography
                typo="header-2-semibold"
            >
                Our Solution
            </Typography>
            <div className='w-full '>
                <ul className='flex flex-col gap-4 list-inside list-decimal'>
                    {case_study?.our_solutions?.solutions.map((data) => (
                        <div key={data.id}  className='flex flex-col gap-4'>
                            <li className='font-semibold'>
                                {data.title}
                            </li>
                            <ul className='flex flex-col gap-4 list-inside list-disc'>
                                {data.contents.map(data => (
                                    <li key={data}>{data}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='py-6 flex flex-col gap-4'>
                {case_study?.our_solutions?.images.map((img, index) => (
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

export default CasestudiesSolution