'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { case_studies } from '@/constant';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';


function CaseStudies() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [showMore, setShowMore] = useState(false);

    // Helper function to convert title to URL-friendly slug
    const titleToSlug = (title: string): string => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };

    const categories = ["All", "Enterprise", "Start up", "Milestone"];

    const filteredProjects =
        selectedCategory === "All"
        ? case_studies
        : case_studies.filter((project) => project.type === selectedCategory);
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-4'>
            <div className='pb-3 flex flex-col items-center gap-3'>
                <Typography
                    typo="header-4-semibold"
                >
                    500+ Success Stories and Counting
                </Typography>
                <div className='w-20 h-[3px] bg-app-primary-deep'></div>
            </div>
            <div className='w-full overflow-auto'>
                <div className='w-fit flex justify-start items-center gap-4 flex-nowrap'>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant="outline"
                            type="button"
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 !py-2 !text-sm rounded-full border-gray-300 hover:border-gray-600 
                            ${selectedCategory === category ? 'bg-app-primary-medium text-white' : ''}`}
                        >
                        {category}
                        </Button>
                    ))}
                </div>
            </div>
            <div className='w-full space-y-8'>
                <div className='w-full md:grid grid-cols-2 xl:gap-16 gap-8'>
                    {filteredProjects.map((data, index) => (    
                        data.type !== "Milestone" && (
                            <Card 
                            key={data.id}
                            className=' pb-2 pt-4 rounded-[1.2rem] mb-6 bg-[#e6f6d1] border-t-0 border-r-0 border-l-0 border-b-[8px] border-app-primary-medium'
                        >
                            <div className='w-[95%] mx-auto '>
                                <Image 
                                    src={data.img}
                                    alt={`Case study ${index+1}`}
                                    className='w-full h-auto max-h-[450px] object-cover rounded-[1.2rem]'
                                />
                            </div>
                            <div className='w-[90%] mx-auto pt-3 flex justify-between gap-2'>
                                <Typography
                                    typo="header-6-semibold"
                                    className='text-app-primary-medium'
                                >{data.title}</Typography>
                                <div className='flex items-center gap-3 text-app-secondary'>
                                    <Link
                                        href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://portfolio.codersclutch.com'}/${titleToSlug(data.title)}`}
                                        className='text-app-primary-medium'
                                    >
                                        <Send fill='#00312f' />
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ) ))}
                </div>
                {/* <div className='border-b border-dashed border-gray-500'></div> */}
                
                <div className='w-full pt-4 md:grid grid-cols-2 xl:gap-16 gap-8'>
                    {filteredProjects.map((data, index) => (    
                        data.type === "Milestone" && selectedCategory !== "All" && (
                            <Card 
                                key={data.id}
                                className='rounded-none mb-6 overflow-hidden'
                            >
                                <div className='w-full mx-auto '>
                                    <Image 
                                        src={data.img}
                                        alt={`Case study ${index+1}`}
                                        className='w-full h-fit object-cover hover:scale-[1.03] transition-all duration-500'
                                    />
                                </div>
                                <div className='w-[90%] mx-auto py-3 flex justify-between gap-2'>
                                    <Typography
                                        typo="header-6-semibold"
                                        className='text-app-primary-medium'
                                    >{data.title}</Typography>
                                    <div className='flex items-center gap-3 text-app-secondary'>
                                        <Link
                                            href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://portfolio.codersclutch.com'}/portfolio?tab=caseStudies`}
                                            className='text-app-primary-medium'
                                        >
                                            Download
                                        </Link>
                                    </div>
                                </div>
                        </Card>
                    ) ))}
                </div>
            </div>
            {selectedCategory !== "Milestone" && (
                <>
                    <div className='pt-8 flex flex-col gap-6'>
                        <Typography
                            typo="header-4-semibold"
                        >Other Featured Case Studies</Typography>
                        {showMore ? (
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 xs:gap-12 gap-10'>
                                {case_studies.map((data, index) => (
                                    data.type === "Milestone" && (
                                        <Card
                                            key={data.id}
                                            className='w-full xs:mb-4 sm:p-2 flex justify-between items-stretch gap-2 bg-white'
                                        >
                                            <div className='rale flex flex-col justify-between sm:gap-2'>
                                                <CardHeader className='flex flex-col gap-1'>
                                                    <span className='text-[13px] font-normal text-gray-600'>Milestone</span>
                                                    <Typography
                                                    typo="header-4-semibold"
                                                    className='!text-[1.5rem] text-[#53565A] !leading-tight line-clamp-3'
                                                    >
                                                    {data.title}
                                                    </Typography>
                                                </CardHeader>
                                                <CardContent className="pb-3 flex flex-col gap-6">
                                                    <Typography
                                                        typo="body-small-regular"
                                                        className='pops !font-light !leading-normal line-clamp-3'
                                                    >
                                                        {data.description}
                                                    </Typography>
                                                    
                                                    <Button
                                                        variant="primary"
                                                        // onClick={() => router.push(`/insights/blog/${data.id}`)}
                                                        onClick={() => alert("Downloaded")}
                                                        className='!py-2 !px-4 font-normal !text-sm rounded-full'
                                                    >
                                                        <span>Download</span>
                                                        <ArrowRight />
                                                    </Button>
                                                </CardContent>
                                            </div>
                                            <div className='lg:block md:hidden sm:block hidden min-w-[47%] h-[320px]'>
                                            <Image
                                                src={data.img}
                                                alt={`blog ${index + 1}`}
                                                className='w-full h-full object-cover rounded-xl'
                                            />
                                            </div>
                                        </Card>
                                    )
                                ))}
                            </div>
                        ) : (
                            <div className='w-full py-6'>
                                <Carousel
                                    className="w-full" 
                                    plugins={[
                                        Autoplay({
                                            delay: 2000
                                        })
                                    ]}
                                >
                                    <CarouselContent className="flex xl:gap-16 gap-32">
                                        {case_studies.map((data, index) => (    
                                            data.type === "Milestone" && (
                                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2">
                                                    <Card
                                                        key={data.id}
                                                        className='w-full sm:p-2 flex justify-between items-stretch gap-2 bg-white'
                                                    >
                                                        <div className='rale flex flex-col justify-between sm:gap-2'>
                                                            <CardHeader className='flex flex-col gap-1'>
                                                                <span className='text-[13px] font-normal text-gray-600'>Milestone</span>
                                                                <Typography
                                                                typo="header-4-semibold"
                                                                className='!text-[1.5rem] text-[#53565A] !leading-tight line-clamp-3'
                                                                >
                                                                {data.title}
                                                                </Typography>
                                                            </CardHeader>
                                                            <CardContent className="pb-3 flex flex-col gap-6">
                                                                <Typography
                                                                    typo="body-small-regular"
                                                                    className='pops !font-light !leading-normal line-clamp-3'
                                                                >
                                                                    {data.description}
                                                                </Typography>
                                                                
                                                                <Button
                                                                    variant="primary"
                                                                    // onClick={() => router.push(`/insights/blog/${data.id}`)}
                                                                    onClick={() => alert("Downloaded")}
                                                                    className='!py-2 !px-4 font-normal !text-sm rounded-full'
                                                                >
                                                                    <span>Download</span>
                                                                    <ArrowRight />
                                                                </Button>
                                                            </CardContent>
                                                        </div>
                                                        <div className='lg:block md:hidden sm:block hidden min-w-[47%] h-[320px]'>
                                                        <Image
                                                            src={data.img}
                                                            alt={`blog ${index + 1}`}
                                                            className='w-full h-full object-cover rounded-xl'
                                                        />
                                                        </div>
                                                    </Card>
                                                </CarouselItem>
                                        ) ))}
                                    </CarouselContent>
                                </Carousel>
                            </div>
                        )}
                        
                        <div className="w-full pt-8 flex justify-center">
                            <Button
                                variant="outline"
                                className="rounded-full px-6 py-3 text-app-primary-deep border-app-primary-deep hover:bg-app-primary-deep hover:text-white"
                                onClick={() => setShowMore(!showMore)}
                            >
                                {showMore ? 'View Less' : 'Show More'}
                            </Button>
                        </div>
                    </div>
                </>
            )}
            {/* <div className='md:hidden w-full grid xs:grid-cols-2 gap-6'>
                {case_studies.map((data, index) => (
                    <Card 
                        key={data.id}
                        className='relative sm:h-[300px] xs:h-[250px] h-[330px] rounded-[1.2rem]'
                    >
                        <div className='w-full h-full'>
                            <Image 
                                src={data.img}
                                alt={`Case study ${index+1}`}
                                className='w-full h-full object-cover rounded-2xl'
                            />
                        </div>
                        <div className='absolute sm:top-1/2 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[55%] h-fit'>
                            {data.logo && (
                                <Image 
                                    src={data.logo}
                                    alt={`Case ${index+1}`}
                                    className='w-full h-full'
                                />
                            )}
                        </div>
                        <div className='absolute left-5 bottom-8 flex flex-col gap-2'>
                            <Typography
                                typo="header-6-medium"
                                className='text-white !leading-normal'
                            >{data.title}</Typography>
                            <div className='flex items-center gap-3 text-blue-700'>
                                <Link
                                    href="/portfolio"
                                    className='text-[#0873FF]'
                                >View Case Study</Link>
                                <ArrowRight />
                            </div>
                        </div>
                    </Card>
                ))}
            </div> */}
        </section>
    </div>
  )
}

export default CaseStudies