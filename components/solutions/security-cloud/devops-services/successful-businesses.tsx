'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import test1 from "@/public/assets/images/security-cloud/fatou_saine_gaye.png"
import test2 from "@/public/assets/images/empty_profile.png"
import test3 from "@/public/assets/images/about/team/jallow_img.jpeg";
import test4 from "@/public/assets/images/security-cloud/lamin_drammeh.png"
import test1logo from "@/public/assets/images/testimo/11.png"
import test2logo from "@/public/assets/images/testimo/12.png"
import test3logo from "@/public/assets/images/testimo/13.png"
import test4logo from "@/public/assets/images/testimo/14.png"
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';

const testimonial = [
    {
        id: "1",
        title: "Truly commendable job. A big thumbs up from our side.",
        description: `We hired some 25 developers from CONTUS Tech. I must confess that their work is truly commendable, 
                        and among the finest we've encountered in a while. They incorporated unique features into our app 
                        and went above and beyond to deliver the highest quality of work possible for us.`,
        img: test1,
        company_logo: test1logo,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
    },
    {
        id: "2",
        title: "Truly commendable job. A big thumbs up from our side.",
        description: `We hired some 25 developers from CONTUS Tech. I must confess that their work is truly commendable, 
                        and among the finest we've encountered in a while. They incorporated unique features into our app 
                        and went above and beyond to deliver the highest quality of work possible for us.`,
        img: test2,
        company_logo: test2logo,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
    },
    {
        id: "3",
        title: "Truly commendable job. A big thumbs up from our side.",
        description: `We hired some 25 developers from CONTUS Tech. I must confess that their work is truly commendable, 
                        and among the finest we've encountered in a while. They incorporated unique features into our app 
                        and went above and beyond to deliver the highest quality of work possible for us.`,
        img: test3,
        company_logo: test3logo,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
    },
    {
        id: "4",
        title: "Truly commendable job. A big thumbs up from our side.",
        description: `We hired some 25 developers from CONTUS Tech. I must confess that their work is truly commendable, 
                        and among the finest we've encountered in a while. They incorporated unique features into our app 
                        and went above and beyond to deliver the highest quality of work possible for us.`,
        img: test4,
        company_logo: test4logo,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
    },
    {
        id: "5",
        title: "Truly commendable job. A big thumbs up from our side.",
        description: `We hired some 25 developers from CONTUS Tech. I must confess that their work is truly commendable, 
                        and among the finest we've encountered in a while. They incorporated unique features into our app 
                        and went above and beyond to deliver the highest quality of work possible for us.`,
        img: test1,
        company_logo: test1logo,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
    },
    {
        id: "6",
        title: "Truly commendable job. A big thumbs up from our side.",
        description: `We hired some 25 developers from CONTUS Tech. I must confess that their work is truly commendable, 
                        and among the finest we've encountered in a while. They incorporated unique features into our app 
                        and went above and beyond to deliver the highest quality of work possible for us.`,
        img: test2,
        company_logo: test3logo,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
    },
]

function SuccessfulBusinesses() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    What Successful Businesses Say
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    About CODERS Clutch
                </Typography>
            </div>
            <Carousel
                className="w-full" 
                plugins={[
                    Autoplay({
                        delay: 2000
                    })
                ]}
                opts={{
                    align: "start",
                }}
            >
                <div className="relative">
                <CarouselContent className="flex -gap-24">
                    {testimonial.map((data, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                            <div className="p-1">
                                <Card
                                    className='w-[550px] px-4 py-2 flex justify-between items-stretch bg-white'
                                >
                                    <div className='rale flex flex-col gap-2'>
                                        <CardHeader className='flex flex-col gap-1'>
                                            <Typography
                                                typo="header-4-semibold"
                                                className='!text-[1.5rem] text-[#53565A] !leading-tight line-clamp-2'
                                            >
                                                {data.title}
                                            </Typography>
                                        </CardHeader>
                                        <CardContent className="pb-3 flex flex-col gap-6">
                                            <Typography
                                                typo="body-small-regular"
                                                className='pops !font-light !leading-normal line-clamp-6 text-justify'
                                            >
                                                {data.description}
                                            </Typography>
                                            <div className='w-16 h-16 object-cover rounded-full '>
                                                <Image
                                                    src={data.img}
                                                    alt={`Insights ${index+1}`}
                                                    className='w-full h-full object-cover rounded-full'
                                                />
                                            </div>
                                        </CardContent>
                                    </div>
                                    <div className='min-w-[30%] h-[320px] flex flex-col justify-center'>
                                        <div className='w-36 h-fit mx-auto'>
                                            <Image
                                                src={data.company_logo}
                                                alt={`Insights ${index+1}`}
                                                className='w-full h-full object-cover rounded-xl'
                                            />
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                </div>
                
            </Carousel>
        </section>
    </div>
  )
}

export default SuccessfulBusinesses