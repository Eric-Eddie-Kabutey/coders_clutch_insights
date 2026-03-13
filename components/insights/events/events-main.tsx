'use client';
import React from 'react'
import Typography from '@/components/shared/typography';
import Events from '../events';

function EventsMain() {

  return (
    <div className='w-full md:py-24 py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-6'>
            <Typography
                typo="header-3-semibold"
                className='text-center text-[#53565A]'
            >
                Past Events
            </Typography>
            <Events />
        </section>
    </div>
  )
}

export default EventsMain