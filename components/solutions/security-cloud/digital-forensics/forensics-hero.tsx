'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function ForensicsHero() {
  return (
    <div className='forensic-bg w-full max-h-[700px] xs:h-[90vh] h-[80vh] py-12'>
        <section className='max-w-[800px] lg:w-[65%] md:w-[80%] w-[90%] h-full mx-auto flex flex-col justify-center gap-8 text-white'>
            <Typography
                typo="header-1-medium"
                className='uppercase text-white'
            >
                Best Digital Forensics company, Accra - Ghana & The Gambia
            </Typography> 
            <Typography
                className='!text-xl'
            >
                Safeguarding our country with Digital Evidence services.
            </Typography>
        </section>
    </div>
  )
}

export default ForensicsHero