'use client';
import React, { useEffect, useState } from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { clients_project } from '@/constant';
import brandingImg from "@/public/assets/images/culture_2.jpg"
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronUp, Plus } from 'lucide-react';
import { Strategy } from '@phosphor-icons/react';
import ScrollReveal from '../reusable/scroll-reveal';
import BlobButtonBar from '../reusable/blob-button-bar';

const categories = ["All", "Websites", "Mobile App", "Custom Softwares", "AI", "E-Commerce", "IoTs", "Branding"]

const PROJECTS_INCREMENT = 6;

function LatestProjects() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [visibleProjectsCount, setVisibleProjectsCount] = useState<number>(PROJECTS_INCREMENT);


    const filteredProjects = selectedCategory === "All"
        ? clients_project
        : clients_project.filter(project => project.category === selectedCategory);

    const projectsToShow = filteredProjects.slice(0, visibleProjectsCount);
    const canLoadMore = filteredProjects.length > visibleProjectsCount;
    const canViewLess = visibleProjectsCount > PROJECTS_INCREMENT;

    const handleLoadMore = () => {
        setVisibleProjectsCount(prev => prev + PROJECTS_INCREMENT);
    };

    const handleViewLess = () => {
        setVisibleProjectsCount(PROJECTS_INCREMENT);
    };

    useEffect(() => {
        setVisibleProjectsCount(PROJECTS_INCREMENT);
    }, [selectedCategory]);
    return (
        <div className='w-full py-12'>
            <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
                <ScrollReveal>
                    <div className='pb-3 flex flex-col items-center gap-3'>
                        <Typography
                            typo="header-4-semibold"
                        >
                            20+ Latest Projects
                        </Typography>
                        <div className='w-20 h-[3px] bg-app-primary-deep'></div>
                    </div>
                </ScrollReveal>
                <div className='pt-8'>
                    <ScrollReveal>
                        <div className='w-full overflow-auto'>
                            {/* <div className='pb-3 flex justify-start items-center gap-4 flex-wrap'>
                                {categories.map((category) => (
                                    <Button
                                        variant="outline"
                                        type='button'
                                        onClick={() => setSelectedCategory(category)}
                                        key={category}
                                        className={`!px-12 !py-6 !text-xl font-bold rounded-full !border-2 border-gray-300 hover:border-app-primary-medium transition-all duration-300 ${selectedCategory === category ? 'bg-app-primary-medium !text-white shadow-xl scale-105' : 'bg-white text-gray-700'}`}
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div> */}
                            <div className='w-full overflow-auto'>
                                <BlobButtonBar
                                    categories={categories}
                                    selectedCategory={selectedCategory}
                                    setSelectedCategory={setSelectedCategory}
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                    <div>
                        {selectedCategory === "Branding" ? (
                            <div className='w-[80%] mx-auto py-10 flex justify-center items-center gap-16'>
                                <div className='flex-1 hidden lg:flex flex-col'>
                                    <div className='w-[450px] lg:h-[450px] h-[300px]'>
                                        <Image
                                            src={brandingImg}
                                            alt='Contact image'
                                            className='w-full h-full object-cover rounded-full'
                                        />
                                    </div>
                                </div>
                                <ScrollReveal>
                                    <div className='flex-1 max-w-[400px]'>
                                        <div className="pl-6 flex flex-col justify-between gap-8">
                                            <div className='flex flex-col gap-2'>
                                                <div className="w-fit p-1.5 border border-gray-400 rounded-full">
                                                    <Strategy className="w-16 h-16 text-gray-800" />
                                                </div>
                                                <Typography typo="header-6-semibold">
                                                    Let&apos;s Discuss how we can improve your brand
                                                </Typography>
                                                <Typography typo="body-medium-regular">
                                                    Visit our modern, branding and communication platform that unlocks the power of your brand and executives.
                                                </Typography>
                                            </div>
                                            <Button
                                                className="mt-3 !px-6 !py-3 !text-sm text-app-secondary hover:bg-app-secondary hover:text-white border-2 border-app-secondary"
                                            >
                                                Brand lab website
                                                <ArrowRight className="ml-2" />
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        ) : (
                            <div>
                                {
                                    filteredProjects.length === 0 ? (
                                        <div className='text-center py-12'>
                                            <Typography typo="header-5-regular">
                                                No projects completed!
                                            </Typography>
                                        </div>
                                    ) : (
                                        <>
                                            <div className='w-full py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                                                {projectsToShow.map((data, index) => (
                                                    <Card key={data.id} className='rounded-none border-none shadow-none bg-transparent group/card'>
                                                        <Link href={`/projects/${data.slug}`}>
                                                            <div className='relative overflow-hidden w-full'>
                                                                <div className='w-full aspect-[16/10] overflow-hidden rounded-none'>
                                                                    <Image
                                                                        src={data.img}
                                                                        alt={data.title}
                                                                        width={1200}
                                                                        height={750}
                                                                        className='w-full h-full object-cover transition-transform duration-700 ease-out'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <CardContent className='py-6 px-0 text-left flex flex-col gap-2'>
                                                            <Typography
                                                                typo="body-small-medium"
                                                                className="text-gray-400 uppercase tracking-[0.1em] !font-['Helvetica','Arial',sans-serif] "
                                                            >
                                                                {data.tags?.join(" - ") || "Project"}
                                                            </Typography>
                                                            <Link href={`/projects/${data.slug}`} className="relative group/title cursor-pointer w-fit">
                                                                <Typography
                                                                    typo="header-6-semibold"
                                                                    className="!font-['Helvetica','Arial',sans-serif] transition-colors duration-300 flex items-center gap-1"
                                                                >
                                                                    {data.title}
                                                                    <div className="relative overflow-hidden w-8 h-8 flex items-center justify-center">
                                                                        <ArrowUpRight
                                                                            className="absolute transition-all duration-500 transform translate-y-4 -translate-x-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 text-app-secondary"
                                                                            size={28}
                                                                        />
                                                                        <ArrowUpRight
                                                                            className="absolute transition-all duration-500 transform group-hover/card:-translate-y-4 group-hover/card:translate-x-4 group-hover/card:opacity-0"
                                                                            size={28}
                                                                        />
                                                                    </div>
                                                                </Typography>
                                                            </Link>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                            <div className='flex justify-center mt-6 gap-4'>
                                                {canLoadMore && (
                                                    <Button
                                                        onClick={handleLoadMore}
                                                        className="px-8 py-3 bg-app-primary-medium hover:bg-app-primary-deep text-white flex items-center gap-2"
                                                    >
                                                        View More
                                                        <ChevronDown className="w-4 h-4" />
                                                    </Button>
                                                )}
                                                {canViewLess && (
                                                    <Button
                                                        onClick={handleViewLess}
                                                        variant="outline"
                                                        className="px-8 py-3 border-app-primary-medium text-app-primary-medium hover:bg-app-primary-light flex items-center gap-2"
                                                    >
                                                        View Less
                                                        <ChevronUp className="w-4 h-4" />
                                                    </Button>
                                                )}
                                            </div>
                                        </>

                                    )
                                }

                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LatestProjects