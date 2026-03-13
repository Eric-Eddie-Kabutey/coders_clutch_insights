import React from 'react'
import commerceImg from "@/public/assets/images/solutions/ecommerce-shop.jpg";
import Image from 'next/image';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Lock, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const security_measures = [
  {
    id: "1",
    icon: ShieldCheck, 
    content: "Advanced fraud detection and prevention",
  },
  {
    id: "2",
    icon: Lock,
    content: "End-to-end encrypted transactions",
  },
  {
    id: "3",
    icon: CreditCard,
    content: "Secure payment gateway integration",
  },
]

function EcommerceHero2() {
  return (
    <div className='w-full pb-16 bg-[#f4f2ec]'>
        <section className='max-container lg:w-[85%] w-[95%] h-full mx-auto '>
            <div className='sm:relative w-full py-8 flex sm:flex-row flex-col justify-between items-center sm:gap-4 gap-8'>
                <div className='sm:absolute xl:max-w-[60%] sm:max-w-[70%] w-full sm:px-8 px-3 py-10 flex flex-col xs:gap-7 gap-4 bg-white rounded-xl'>
                    <Typography
                        typo="header-3-semibold"
                        className='plusJak'
                    >
                        A Leading E-commerce Development Company
                    </Typography>
                    <Typography
                        typo="header-5-regular"
                        className='sm:w-[80%] w-full'
                    >
                        Create & Grow an online retail store
                        for your business efficiently
                    </Typography>
                    <Button
                        variant="primary"
                        className='2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg text-white font-medium bg-app-primary-medium hover:bg-app-primary-deep border-2 border-white rounded-full'
                    >
                        Let&apos;s Talk
                        <ArrowRight />
                    </Button>
                </div>
                <div className='sm:flex-1 w-full flex justify-end xl:h-[500px] sm:h-[400px] h-fit rounded-xl    '>
                    <Image 
                        src={commerceImg}
                        alt='Commerce image'
                        className='w-fit h-full !rounded-lg'
                    />
                </div>
            </div>
            <div className='xl:w-[80%] w-full mx-auto grid sm:grid-cols-3 md:gap-8 gap-4'>
                {security_measures.map((data) => (
                    <Card key={data.id} className='py-4 flex flex-col items-center justify-center md:gap-4 gap-2 bg-white'>
                        <CardHeader>
                            <data.icon size={35} />
                        </CardHeader>
                        <CardContent className='text-center'>
                            <Typography
                                typo="header-6-regular"
                                className='text-center'
                            >
                                {data.content}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default EcommerceHero2