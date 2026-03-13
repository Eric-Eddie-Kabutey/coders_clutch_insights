'use client';
import React from 'react';
import futureProofImg from "@/public/assets/images/digital-solutions/future_proof_img.png"
import topFutureProofImg from "@/public/assets/images/digital-solutions/top_future_proof.jpg"
import Image from 'next/image';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';

function WebsiteFutureProof() {
  return (
    <div className='w-full 2xl:h-[850px] xl:h-[650px] lg:h-[580px] flex md:flex-row flex-col justify-between '>
        <section className='flex-1'>
            <div className='w-full h-full'>
                <Image 
                    src={futureProofImg}
                    alt='Future Proof'
                    className='w-full h-full object-cover'
                />
            </div>
        </section>
        <section className='flex-1 flex flex-col xl:gap-8'>
            <div className='w-full 2xl:h-[300px] h-[150px]'>
                <Image
                    src={topFutureProofImg}
                    alt='Top future proof'
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='2xl:max-w-[600px] 2xl:w-[75%] w-[90%] mx-auto h-full md:py-8 sm:py-5 py-12 flex flex-col justify-center lg:gap-6 gap-4'>
                <Typography
                    typo="header-3-semibold"
                >Future-proof Website Design</Typography>
                <div className='rale flex flex-col lg:gap-10 gap-6'>
                    <Typography
                        typo="body-large-regular"
                    >
                        Our web design and development expertise deliver outstanding user experiences. Every website we 
                        create is unique with elements that reflect your brand voice and offerings.
                    </Typography>
                    <Typography
                        typo="body-large-regular"
                    >
                        We provide various WordPress web design packages and custom website development services that 
                        help increase traffic and conversion.
                    </Typography>
                </div>
                <Button
                    variant="primary"
                    className='w-fit 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold rounded-none'
                >
                    Our Approach
                </Button>
            </div>
        </section>
    </div>
  )
}

export default WebsiteFutureProof