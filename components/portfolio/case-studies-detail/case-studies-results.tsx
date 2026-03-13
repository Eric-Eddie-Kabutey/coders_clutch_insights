'use client';
import Typography from '@/components/shared/typography';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CaseStudyProp } from '@/type';

interface CaseStudyDetailMainProps {
    case_study: CaseStudyProp;
}


function CasestudiesResults({case_study}: CaseStudyDetailMainProps) {
  return (
    <div className='w-full py-20 bg-[#f7fff6]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex flex-col gap-4'>
            <Typography
                typo="header-2-semibold"
            >
                The Result:
            </Typography>
            <div className='w-full '>
                <ul className='flex flex-col gap-4 list-inside list-disc'>
                    {case_study?.our_results?.results.map((data) => (
                        <div key={data.id} className='flex flex-col gap-4'>
                            <li  >
                                <span className='font-semibold'>{data.title}</span> {data.contents}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='pt-6 pb-12 flex flex-col gap-4'>
                {case_study?.our_results?.images.map((img, index) => (
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
            <Button
                variant="primary"
                className='w-fit mx-auto rounded-full'
            >
                View the Project
            </Button>
        </section>
    </div>
  )
}

export default CasestudiesResults