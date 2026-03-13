'use client';
import React from 'react'
import Typography from '../shared/typography'
import { termsOfUse } from '@/constant';

function TermsOfUse() {
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto '>
            <div className='xl:w-[60%] lg:w-[70%] md:w-[80%] mx-auto flex flex-col gap-6'>
                <Typography
                    typo="header-4-semibold"
                    className='!text-3xl text-center text-app-secondary'
                >Terms of use</Typography>
                <div className='pops w-full flex flex-col gap-4'>
                    {termsOfUse.sections.map(data => (
                        <div key={data.id} className='flex flex-col gap-2'>
                            <Typography
                                typo="header-6-medium"
                                className='!text-lg text-app-secondary'
                            >{data.title}</Typography>
                            <Typography
                                typo="body-small-light"
                                className='text-gray-700 !text-sm !leading-normal text-justify'
                            >{data.content}</Typography>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default TermsOfUse