'use client';
import React from 'react'
import SeeResults from '../sections/see-results'
import Typography from '../shared/typography'
import { success_stories } from '@/constant';
import Image from 'next/image';

function SuccessStories() {
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto space-y-12'>
            <SeeResults />
            <div className='w-full py-8'>
                <div className='pb-8 flex flex-col gap-'>
                    <Typography
                        typo="header-3-light"
                    >
                        Success Stories
                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                    >
                        We Don&apos;t Build Customers. We Build Relationships
                    </Typography>
                </div>
                <div className='w-full space-y-6'>
                    <div className='w-full md:py-10 grid md:grid-cols-3'>
                        {success_stories.slice(0, 3).map((story, index) => (
                            <div key={story.id} className={`xl:px-10 lg:px-8 md:px-4 py-6 flex flex-col justify-between gap-6 ${story.id === "2" || story.id === "5" ? "md:border-l-2 md:border-r-2 border-dashed" : ""} md:border-none border-b-2 border-dashed`}>
                                <div className='h-8 w-fit'>
                                    <Image
                                        src={story.icon}
                                        alt={`Success ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {story.content}
                                </Typography>

                                <div className='flex flex-col '>
                                    <Typography
                                        typo="header-6-semibold"
                                    >
                                        {story.rate}
                                    </Typography>
                                    <Typography
                                        typo="header-6-regular"
                                    >{story.summary}</Typography>
                                </div>
                            </div>
                        ))}
                    </div>  
                    <div className='md:border-b-2 border-dashed'></div>

                    <div className='w-full md:py-10 grid md:grid-cols-3'>
                        {success_stories.slice(3, 6).map((story, index) => (
                            <div key={story.id} className={`xl:px-10 lg:px-8 md:px-4 py-6 flex flex-col justify-between gap-6 ${story.id === "2" || story.id === "5" ? "md:border-l-2 md:border-r-2 border-dashed" : ""} md:border-none border-b-2 border-dashed`}>
                                <div className='h-6 w-fit'>
                                    <Image
                                        src={story.icon}
                                        alt={`Success ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {story.content}
                                </Typography>

                                <div className='flex flex-col '>
                                    <Typography
                                        typo="header-6-semibold"
                                    >
                                        {story.rate}
                                    </Typography>
                                    <Typography
                                        typo="header-6-regular"
                                    >{story.summary}</Typography>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default SuccessStories