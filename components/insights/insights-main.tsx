'use client';
import React, { useEffect, useState } from 'react'
import Typography from '../shared/typography'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent, CardHeader } from '../ui/card';
import { blogContent, insight_events } from '@/constant/insights';
import { insights_events } from '@/constant/components';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight, CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs-team';
import CaseStudies from './case-studies';
import Reports from './reports';
import Blog from './blog';
import Events from './events';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';


function InsightsMain() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [activeTab, setActiveTab] = useState('blog');
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab && ['blog', 'events', 'reports'].includes(tab)) {
            setActiveTab(tab);
        }
    }, [searchParams]);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });

        return () => {
            api.off("select", () => {
                setCurrent(api.selectedScrollSnap());
            });
        };
    }, [api]);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
        router.replace(`?tab=${value}`, { scroll: false });
    };

    const getTitleText = () => {
        switch (activeTab) {
            case 'blog':
                return 'Latest blog';
            case 'events':
                return 'Events';
            case 'reports':
                return 'Reports';
            default:
                return 'Insights';
        }
    };

    const insightsCarousel = () => {
        switch (activeTab) {
            case 'blog':
                return (
                    <div className='w-full py-8'>
                        <Carousel
                            className="w-full"
                            setApi={setApi}
                        >
                            <div className="relative">
                                <CarouselContent className="flex gap-44">
                                    {blogContent.slice(0, 3).map((data, index) => (
                                        <CarouselItem key={index} className="pl-1 lg:basis-1/2">
                                            <Link
                                                href={`/insights/${data.id}`}
                                                type='button'
                                                onClick={() => {
                                                    sessionStorage.setItem('currentBlog', JSON.stringify(data));
                                                }}
                                                className="p-1"
                                            >
                                                <Card
                                                    className='xl:w-[800px] w-[650px] p-2 flex justify-between items-stretch gap-3 bg-white'
                                                >
                                                    <div className='rale flex flex-col gap-3'>
                                                        <CardHeader className='xl:pb-6 pb-3 flex flex-col gap-1'>
                                                            <span className='text-[13px] font-normal text-red-600'>Latest blog</span>
                                                            <Typography
                                                                typo="header-4-semibold"
                                                                className='!text-[1.8rem] text-[#53565A] !leading-tight line-clamp-3'
                                                            >
                                                                {data.title}
                                                            </Typography>
                                                        </CardHeader>
                                                        <CardContent className="flex flex-col xl:gap-6 gap-3">
                                                            <Typography
                                                                typo="body-small-regular"
                                                                className='pops !font-light !leading-normal line-clamp-3'
                                                            >
                                                                {data.description}
                                                            </Typography>
                                                            <Button
                                                                asChild
                                                                variant="primary"
                                                                className='!py-2 !px-4 font-normal !text-sm rounded-full'
                                                            >
                                                                <div>
                                                                    <span>Read more</span>
                                                                    <ArrowRight />
                                                                </div>
                                                            </Button>
                                                        </CardContent>
                                                    </div>
                                                    <div className='min-w-[47%] xl:h-[350px] h-[300px]'>
                                                        <Image
                                                            src={data.image.src}
                                                            alt={`${data.image.alt} ${index + 1}`}
                                                            className='w-full h-full object-cover rounded-xl'
                                                        />
                                                    </div>
                                                </Card>
                                            </Link>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </div>
                            <div className="flex items-center justify-between gap-6 mt-4">
                                <div className="flex items-center gap-4">
                                    <CarouselPrevious className="relative top-0 left-0 translate-x-0 translate-y-0" />
                                    <CarouselNext className="relative top-0 right-0 translate-x-0 translate-y-0" />
                                </div>

                                <div className="flex items-center gap-2">
                                    {Array.from({ length: count }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => api?.scrollTo(index)}
                                            className={`w-16 h-[5px] rounded-full transition-colors ${index === current ? 'bg-primary' : 'bg-gray-300'
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </Carousel>
                    </div>
                );
            case 'events':
                return (
                    <div>
                        {insight_events.slice(0, 1).map((event, index) => (
                            <section key={event.id} className='w-[95%] max-h-[700px] h-[90vh] relative mx-auto group'>
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/70 z-10 rounded-[1.2rem] group-hover:bg-black/40 transition-all duration-300"></div>

                                <div className='w-full h-[90vh] max-h-[700px]'>
                                    <Image
                                        src={event.img}
                                        alt={`Event banner ${index + 1}`}
                                        className='w-full h-full object-cover object-top rounded-[1.2rem]'
                                    />
                                </div>

                                <div className='absolute bottom-16 inset-x-0 max-container 2xl:w-[75%] w-[95%] flex flex-col gap-6 text-white z-20 transition-all duration-300 group-hover:bottom-1/2 group-hover:translate-y-1/2'>
                                    <div className='flex flex-col'>
                                        <Typography
                                            typo="header-2-medium"
                                            className='!leading-11 md:!text-[3rem] group-hover:mb-4 transition-all'
                                        >
                                            {event.title}
                                        </Typography>

                                        <div className='flex flex-wrap gap-6 mt-2'>
                                            <div className='flex items-center gap-2'>
                                                <CalendarIcon className='w-5 h-5' />
                                                <Typography typo="body-large-medium">{event.date}</Typography>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <ClockIcon className='w-5 h-5' />
                                                <Typography typo="body-large-medium">10:00 AM - 4:00 PM</Typography>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <MapPinIcon className='w-5 h-5' />
                                                <Typography typo="body-large-medium">Heirs Technologies HQ, Lagos</Typography>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 delay-100 flex flex-col gap-6'>
                                        <Typography typo="body-large-regular" className='!leading-relaxed'>
                                            Join us as we welcome the first batch of trainees for our Software Engineering Training Program (STEP) Cohort 2.
                                            This intensive 6-month program equips participants with cutting-edge technical skills and industry knowledge.
                                            The event will feature keynote speeches, networking opportunities, and a showcase of our training facilities.
                                        </Typography>

                                        <div className='flex gap-4'>
                                            <Link href={`/insights/event/${event.event_slug}`} >
                                                <Button
                                                    asChild
                                                    variant="primary"
                                                    onClick={() => {
                                                        sessionStorage.setItem('currentEvent', JSON.stringify(event));
                                                    }}
                                                    className='w-fit py-3 px-6 font-medium hover:scale-105 transition-transform'
                                                >
                                                    <div>
                                                        <span>View Event</span>
                                                        <ArrowRight className='ml-2' />
                                                    </div>
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="outline"
                                                className='w-fit py-3 px-6 font-medium border-white text-white hover:bg-white/10'
                                            >
                                                <span>Add to Calendar</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                );
            case 'reports':
                return (
                    <Carousel className="w-full" setApi={setApi}>
                        <div className="relative">
                            <CarouselContent className="flex xl:gap-0 gap-6">
                                {insights_events.map((data, index) => (
                                    data.header === "Financial Sector" && (
                                        <CarouselItem key={index} className="lg:basis-1/2">
                                            <div className="p-1">
                                                <Card className="xl:w-[600px] sm:w-[500px] w-[400px] p-2 flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition-shadow">
                                                    <div className="min-w-[47%] xl:h-[350px] sm:h-[300px] h-[250px] overflow-hidden">
                                                        <Image
                                                            src={data.img}
                                                            alt={`Financial Sector Insight: ${data.title}`}
                                                            className="w-full h-full object-cover rounded-xl transition-transform hover:scale-105"
                                                            width={600}
                                                            height={350}
                                                        />
                                                    </div>

                                                    <div className="flex flex-col sm:gap-3 gap-2 pt-4">
                                                        <CardHeader className="xl:pb-4 sm:pb-3 pb-1 space-y-2">
                                                            <span className="text-lg font-medium text-red-600 tracking-wide">
                                                                {data.header}
                                                            </span>
                                                            <Typography
                                                                typo="header-4-semibold"
                                                                className="!text-2xl text-gray-700 !leading-snug line-clamp-2"
                                                            >
                                                                {data.title}
                                                            </Typography>
                                                        </CardHeader>

                                                        <CardContent className="flex flex-col xl:gap-6 gap-3">
                                                            <Typography
                                                                typo="body-medium-regular"
                                                                className="!font-light !leading-relaxed sm:line-clamp-3 line-clamp-2 text-gray-600"
                                                            >
                                                                {data.description}
                                                            </Typography>
                                                            <Button
                                                                variant="primary"
                                                                className="w-fit !py-2 !px-6 font-medium !text-sm rounded-full hover:shadow-lg transition-all"
                                                            >
                                                                <span>Read more</span>
                                                                <ArrowRight className="ml-2 w-4 h-4" />
                                                            </Button>
                                                        </CardContent>
                                                    </div>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    )
                                ))}
                            </CarouselContent>
                        </div>

                        <div className="flex items-center justify-between mt-6 px-4">
                            <div className="flex items-center gap-4">
                                <CarouselPrevious className="static transform-none hover:bg-gray-100" />
                                <CarouselNext className="static transform-none hover:bg-gray-100" />
                            </div>

                            <div className="flex items-center gap-2">
                                {Array.from({ length: count }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => api?.scrollTo(index)}
                                        className={`w-16 h-1 rounded-full transition-all duration-300 ${index === current ? 'bg-primary w-20' : 'bg-gray-200'
                                            }`}
                                        aria-label={`Navigate to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </Carousel>
                );
        }
    }

    return (
        <div className='w-full py-12 bg-app-gray-bg'>
            <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-6'>
                <div className='md:w-[600px] w-full mx-auto flex flex-col items-center gap-4'>
                    <Typography
                        typo="header-3-semibold"
                        className='text-center text-[#53565A]'
                    >
                        {getTitleText()}
                    </Typography>
                    <Typography
                        typo="body-large-medium"
                        className='text-center text-[#53565A]'
                    >
                        Take a tour of our latest blog posts, press releases, case studies, and upcoming events.
                    </Typography>
                </div>
                <div className='w-full py-6'>
                    {insightsCarousel()}
                </div>
                <div className='py-8'>
                    <Tabs
                        value={activeTab}
                        onValueChange={handleTabChange}
                        defaultValue="case-studies"
                        className='pt-8'
                    >
                        <TabsList className='w-full overflow-auto'>
                            <div className='flex flex-nowrap gap-2'>
                                <TabsTrigger
                                    value="blog"
                                >Blog</TabsTrigger>
                                <TabsTrigger
                                    value="events"
                                >Events</TabsTrigger>
                                <TabsTrigger
                                    value="reports"
                                >Reports</TabsTrigger>
                            </div>
                        </TabsList>

                        <TabsContent value="case-studies">
                            <CaseStudies />
                        </TabsContent>
                        <TabsContent value="blog">
                            <Blog />
                        </TabsContent>
                        <TabsContent value="events">
                            <Events />
                        </TabsContent>
                        <TabsContent value="reports">
                            <Reports />
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </div>
    )
}

export default InsightsMain