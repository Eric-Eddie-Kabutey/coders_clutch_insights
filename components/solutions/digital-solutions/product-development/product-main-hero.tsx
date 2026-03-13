'use client';
import React from 'react'
import productImg from "@/public/assets/images/digital-solutions/product_hero_img.svg"
import { Button } from '@/components/ui/button';
import Typography from '@/components/shared/typography';
import Image from 'next/image';


function ProductMainHero() {
  return (
    <div className='w-full py-12'>
        <div className='max-container lg:w-[85%] w-[95%] h-full flex md:flex-row flex-col justify-between items-center md:gap-0 gap-8'>
            <section className='flex-1 text-white '>
                <div className='rale h-full mx-auto flex flex-col justify-center sm:gap-8 gap-4'>
                    <Typography
                        typo="body-medium-medium"
                        className=' text-app-primary-medium font-semibold uppercase '
                    >
                        From Concept To Product Launch
                    </Typography>
                    <div className='flex flex-col lg:gap-3 text-app-primary-deep'>
                        <Typography
                            className='font-medium text-app-primary-light !leading-tight'
                            typo="header-2-medium"
                        >
                            A Full-Cycle <span className="text-app-primary-deep oleo-script">Product Development </span> Company To Build Future-Ready Products
                        </Typography>
                    </div>
                    
                    <Button
                        variant="outline"
                        className='w-fit 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg  font-medium rounded-full border-2  hover:bg-app-primary-medium hover:text-white '
                    >
                        Let&apos;s Talk
                    </Button>

                </div>
            </section>
            <div className='flex-1 h-fit'>
                <Image 
                    src={productImg}
                    alt='Product hero image'
                    className='w-full h-full object-cover rounded-xl'
                />
            </div>
        </div>
    </div>
  )
}

export default ProductMainHero