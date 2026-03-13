'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function CsrHero() {
  return (
    <div className='mobile-apps-bg w-full h-[55vh] md:py-12 py-8 '>
        <section className='max-container lg:w-[85%] w-[95%] h-full mx-auto flex flex-col justify-center items-center gap-6 text-white'>
            <Typography
                typo="header-2-semibold"
                className=''
            >About <span className='text-app-secondary'>us</span> </Typography>
            <Typography
                typo="body-large-medium"
            >Home / About us</Typography>
        </section>
    </div>
  )
}

export default CsrHero