'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function ForensicsEvidence() {
  return (
    <div className='w-full py-16'>
        <section className='max-w-[650px] 2xl:w-[40%] lg:w-[50%] w-[75%] mx-auto flex flex-col justify-center gap-8'>
            <Typography
                typo="header-4-semibold"
                className='dm-sans !font-[900] text-center'
            >
                Retrieving, analyzing, and presenting digital evidence stored in mobile phones and computers
            </Typography>
            <Button
                variant="primary"
                className='w-fit mx-auto uppercase'
            >
                Our Services
            </Button>
        </section>
    </div>
  )
}

export default ForensicsEvidence