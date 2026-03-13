'use client';
import Typography from '@/components/shared/typography'
import Image from 'next/image';
import React from 'react';
import csrImg from "@/public/assets/images/about/our-team2.jpg"
import { Button } from '@/components/ui/button';


function InnovationHub() {
  return (
    <div className='pops w-full py-4 flex flex-col gap-6'>
        <div className='flex sm:flex-row flex-col justify-between gap-7'>
            <div className='flex-1 flex flex-col gap-6'>
                <Typography
                    typo="header-4-semibold"
                    className='!leading-normal'
                >
                    Our Innovation Hub
                </Typography>
                <Typography
                    typo="body-medium-light"
                    className='text-justify !leading-relaxed'
                >
                    Turning little Ideas Into world changing solutions: We empower and  connect visionaries, innovators, 
                    and entrepreneurs with tools, mentors and opportunities they need to make an impact.
                </Typography>
                <Button
                    variant="primary"
                    className='uppercase'
                >
                    Visit Our Hub 
                </Button>
            </div>
            <div className='sm:w-[50%] w-full h-[300px]'>
                <Image
                    src={csrImg}
                    alt='Csr image'
                    className='w-full h-full object-cover rounded-lg'
                />
            </div>
        </div>
    </div>
  )
}

export default InnovationHub