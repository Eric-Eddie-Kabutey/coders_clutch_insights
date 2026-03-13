'use client';
import React from 'react'
import Typography from '../shared/typography'
import { cookiesPolicy } from '@/constant';

function CookiePolicy() {
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto '>
            <div className='xl:w-[70%] lg:w-[80%] mx-auto flex flex-col gap-6'>
                <Typography
                    typo="header-4-semibold"
                    className='!text-3xl text-center text-app-secondary'
                >Cookie Policy</Typography>
                <div className='pops w-full flex flex-col gap-4'>
                    {cookiesPolicy.sections.map(data => (
                        <div key={data.id} className='flex flex-col gap-2'>
                            <Typography
                                typo="header-6-medium"
                                className='!text-lg text-app-secondary'
                            >{data.title}</Typography>
                            <Typography
                                typo="body-small-light"
                                className='text-gray-700 !leading-normal'
                            >{data.content}</Typography>
                            {data.subsections && (data?.subsections.map(sub => (
                                <div key={sub.id} className='flex flex-col gap-2'>
                                    <Typography
                                        typo="header-6-semibold"
                                        className='!text-lg text-gray-700'
                                    >{sub.title}</Typography>
                                    <Typography
                                        typo="body-small-light"
                                        className='text-gray-700 !leading-normal'
                                    >{sub.content}</Typography>
                                </div>
                            )))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default CookiePolicy