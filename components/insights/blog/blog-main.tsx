'use client';
import React from 'react'
import Typography from '@/components/shared/typography';
import Blog from '../blog';

function BlogMain() {

  return (
    <div className='w-full md:py-24 py-16'>
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col justify-center items-center gap-6'>
        <Typography
          className="xl:text-5xl lg:text-4xl text-3xl font-medium text-app-primary-deep"
        >
          Our Blogs
        </Typography>
        <Blog />
      </section>
    </div>
  )
}

export default BlogMain