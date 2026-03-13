'use client'
import React from 'react';
import intouchImg from "@/public/assets/images/contact-us/get_intouch.png";
import Image from 'next/image';
import Typography from '../shared/typography';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

function ContactIntouch() {
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center gap-12'>
            <div className='md:flex-1 w-full '>
                <div className='md:w-[60%] w-[70%] h-fit mx-auto'>
                    <Image 
                        src={intouchImg}
                        alt='In touch'
                        className='w-full h-full'
                    />
                </div>
            </div>
            <div className='flex-1 '>
                <div className='2xl:w-[89%] w-full flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="body-medium-medium"
                            className='!text-[15px] uppercase text-app-green-text'
                        >
                            I&apos;m new here
                        </Typography>
                        <Typography
                            typo="header-2-semibold"
                            className='md:!leading-[50px] !leading-[40px]'
                        >
                            Find your way around Ecosoft with Concierge
                        </Typography>
                    </div>
                    <Typography
                        typo="body-large-medium"
                    >
                        Not sure which Ecosoft product is the right fit for your company? No worries. We&apos;ll work with you to determine what solutions will best suit your business.
                    </Typography>
                    <Button
                        variant="primary"
                        className='w-fit 2xl:!py-3 sm:!py-3 2xl:!px-8 lg:!px-16 md:!px-10 !px-8 flex justify-between gap-6 uppercase !text-lg font-semibold rounded-none'
                    >
                        <span className='text-sm'>Get in touch</span>
                        <ArrowRight size={30} />
                    </Button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactIntouch