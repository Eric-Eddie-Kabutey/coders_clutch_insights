'use client';
import React from 'react'
import commerceImg from "@/public/assets/images/solutions/iot_automobile.png";
import Image from 'next/image';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, DollarSign, Layers,  Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

    const security_measures = [
  {
    id: "1",
    icon: Rocket, 
    content: "50% Quicker Launch",
  },
  {
    id: "2",
    icon: DollarSign,
    content: "Trim Coding Costs by 33%",
  },
  {
    id: "3",
    icon: Database,
    content: "Simplify Data Abstraction",
  },
  {
    id: "4",
    icon: Layers,
    content: "Expand with Free Datasets",
  },
];

function IotAutomobileMainHero() {
  return (
    <div className='w-full pb-16  bg-gradient-to-t from-white via-[#f4f2ec] to-white'>
        <section className='max-container lg:w-[85%] w-[95%] h-full mx-auto '>
            <div className='relative w-full py-8 flex justify-between items-center'>
                <div className='absolute xl:max-w-[60%] max-w-[70%] px-8 py-10 flex flex-col gap-7 bg-white rounded-xl'>
                    <Typography
                        typo="header-3-semibold"
                        className='plusJak'
                    >
                        Build a Smart, Software- Defined Connected Vehicles Solution
                    </Typography>
                    <Typography
                        typo="header-5-regular"
                        className='w-[80%]'
                    >
                        Focus on your core competencies and operations— leave the grind of building your own custom-connected car solution to us.
                    </Typography>
                    <Button
                        variant="primary"
                        className='2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg text-white font-medium bg-app-primary-medium hover:bg-app-primary-deep border-2 border-white rounded-full'
                    >
                        Let&apos;s Talk
                        <ArrowRight />
                    </Button>
                </div>
                <div className='flex-1 flex justify-end xl:h-[500px] h-[400px] rounded-xl    '>
                    <Image 
                        src={commerceImg}
                        alt='Commerce image'
                        className='w-[60%] h-full !rounded-lg object-cover'
                    />
                </div>
            </div>
            <div className=' w-full mx-auto grid grid-cols-4 gap-8'>
                {security_measures.map((data) => (
                    <Card key={data.id} className='py-4 flex flex-col items-center justify-center gap-4 bg-white'>
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

export default IotAutomobileMainHero