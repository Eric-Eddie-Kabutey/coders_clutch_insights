'use client';
import Typography from '@/components/shared/typography'
import { blogContent } from '@/constant';
import Image from 'next/image';
import React from 'react'
import { BlogCard } from './blog-card';

function BlogHero() {
    return (
        <div className='w-full bg-app-gray-bg lg:py-24 py-16'>
            <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-12'>
                <div className='flex flex-col gap-4 text-center max-w-3xl mx-auto'>
                    <Typography
                        className="xl:text-5xl lg:text-4xl text-3xl font-medium text-app-primary-deep"
                    >
                        Check out our <span className="text-app-secondary oleo-script">Latest </span>Blogs
                    </Typography>
                    <Typography
                        typo="body-large-regular"
                        className="inter text-black/70 !text-xl leading-relaxed"
                    >
                        Explore insights, stories, and updates on our latest innovations, tech trends, and company highlights.
                    </Typography>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-20 lg:gap-14 gap-12 mt-10'>
                    {blogContent.slice(0, 3).map((data, index) => (
                        <BlogCard key={index} data={data} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default BlogHero