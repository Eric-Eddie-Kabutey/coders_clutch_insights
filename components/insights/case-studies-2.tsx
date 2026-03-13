'use client';
import React, { useState, useMemo } from 'react'
import { case_studies } from '@/constant/insights';
import { Card, CardContent, CardHeader } from '../ui/card';
import Typography from '../shared/typography';
import { Button } from '../ui/button';
import { ArrowRight, BookOpen, CarFront, Hotel, Landmark, ShieldCheck, CircleDollarSign, HeartPulse, HardHat, MapPinned } from 'lucide-react';
import Image from 'next/image';
import ArcHeading from '../reusable/arc-text';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BlobButtonBar from '../reusable/blob-button-bar';

const hero_content = [
    {
        id: "1",
        title: "Fintech",
        icon: CircleDollarSign,
    },
    {
        id: "2",
        title: "Healthcare",
        icon: HeartPulse,
    },
    {
        id: "3",
        title: "Construction",
        icon: HardHat,
    },
    {
        id: "4",
        title: "Logistics",
        icon: MapPinned,
    },
    {
        id: "5",
        title: "Automotive",
        icon: CarFront,
    },

]

const hero_content2 = [
    {
        id: "1",
        title: "Hospitality",
        icon: Hotel,
    },
    {
        id: "2",
        title: "EdTech",
        icon: BookOpen,
    },
    {
        id: "3",
        title: "Insurance",
        icon: ShieldCheck,
    },
    {
        id: "4",
        title: "Public Sector Solutions",
        icon: Landmark,
    },
    {
        id: "5",
        title: "Logistics",
        icon: Hotel,
    },
]


function CaseStudies2() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    // Extract unique categories from case studies
    const categories = useMemo(() => {
        const uniqueTypes = Array.from(new Set(case_studies.map(cs => cs.type)));
        return ["All", ...uniqueTypes];
    }, []);

    // Filter case studies based on selected category
    const filteredCaseStudies = useMemo(() => {
        if (selectedCategory === "All") {
            return case_studies;
        }
        return case_studies.filter(cs => cs.type === selectedCategory);
    }, [selectedCategory]);

    const inifiniteContent = [...hero_content, ...hero_content]
    const inifiniteContent2 = [...hero_content2, ...hero_content2]
    return (
        <div className='w-full'>
            <div className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto relative">
                {/* <div className="">
                    <div className="flex flex-col justify-center items-center md:gap-8 gap-1 pt-10 md:pt-20">
                        <ArcHeading
                            text="view Our Case Studies"
                            highlight="Case Studies"
                            subtitle="You have a story worth sharing — we help you tell it in a way that’s impossible to ignore."
                            className="mx-auto w-full max-w-7xl h-[200px] sm:h-[240px] lg:h-[270px]"
                            arc={230}
                            baseY={220}
                            textClassName="font-medium fill-[#0B4B45] capitalize"
                            highlightClassName="fill-[#FF6900] oleo-script capitalize"
                        />

                    </div>
                </div> */}
                <div className="scene mx-auto">
                    <div className="planet-glow"></div>
                    <div className="planet top-[50%]"></div>
                    <div className='text-center mt-10 pt-20 z-50'>
                        <Typography
                            className="xl:text-5xl lg:text-4xl sm:text-3xl font-medium xs:text-3xl text-2xl text-center text-app-primary-deep"
                        >We Build <span className="text-app-secondary oleo-script">Enterprise-Grade</span> Automated Software</Typography>

                    </div>
                    <div className='text-center w-[80%] md:w-[60%] mx-auto z-50'>
                        <Typography
                            typo="body-large-regular"
                            className="mx-auto inter text-center text-black !text-xl"
                        >
                            Comprehensive technology services designed to accelerate your business growth, enhance efficiency, and drive digital transformation at every level.
                        </Typography>
                    </div>
                    <div className="w-full flex flex-col gap-6 mt-32 overflow-hidden">
                        {/* ROW 1 */}
                        <div
                            className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                        >
                            <motion.div
                                className="flex w-max gap-16"
                                initial={{ x: "0%" }}
                                animate={{ x: "-50%" }}
                                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                                style={{ willChange: "transform" }}
                            >
                                {inifiniteContent.map((data, index) => (
                                    <div key={`${data.id}-${index}`} className="flex-shrink-0">
                                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg shadow-sm">
                                            <div className="w-fit p-1 rounded-full border-2 border-app-primary-medium">
                                                <data.icon size={15} color="#003b38" />
                                            </div>
                                            <span className="font-medium whitespace-nowrap">{data.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* ROW 2 (reverse direction) */}
                        <div
                            className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                        >
                            <motion.div
                                className="flex w-max gap-16"
                                initial={{ x: "-50%" }}
                                animate={{ x: "0%" }}
                                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                                style={{ willChange: "transform" }}
                            >
                                {inifiniteContent2.map((data, index) => (
                                    <div key={`${data.id}-${index}`} className="flex-shrink-0">
                                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg shadow-sm">
                                            <div className="w-fit p-1 rounded-full border-2 border-app-primary-medium">
                                                <data.icon size={15} color="#003b38" />
                                            </div>
                                            <span className="font-medium whitespace-nowrap">{data.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Category Filter */}
                <div className='w-full overflow-auto mt-32 sm:mt-24 md:mt-12 lg:mt-0'>
                    <BlobButtonBar
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8">
                    {filteredCaseStudies.map((data, index) => (
                        // <div key={index} className="flex justify-center w-full">
                        //     <div className='w-full max-w-[600px] overflow-hidden'>
                        //         {/* Featured Image with Overlay */}
                        //         <div className='relative w-full h-[300px] lg:h-[350px] overflow-hidden group'>
                        //             <Image
                        //                 src={data.img}
                        //                 alt={data.title}
                        //                 className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                        //             />
                        //             {/* Dark gradient overlay */}
                        //             <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30'></div>


                        //         </div>

                        //         {/* Content Section */}
                        //         <div className="flex flex-col gap-6">
                        //             {/* Title overlay */}
                        //             <Typography
                        //                 typo="header-3-semibold"
                        //                 className='!text-white !text-3xl lg:!text-4xl !leading-tight uppercase tracking-wide'
                        //             >
                        //                 {data.title}
                        //             </Typography>
                        //             {/* Description */}
                        //             <Typography
                        //                 typo="body-medium-regular"
                        //                 className='text-gray-700 !leading-relaxed line-clamp-3'
                        //             >
                        //                 {data.description}
                        //             </Typography>

                        //             {/* Tags/Categories */}
                        //             <div className='flex flex-wrap gap-3'>
                        //                 <span className='px-4 py-2 border border-gray-800 text-gray-800 text-sm font-medium uppercase tracking-wide'>
                        //                     {data.type}
                        //                 </span>
                        //                 {/* Add more tags if available in data */}
                        //             </div>

                        //             {/* CTA Button */}
                        //             <Link href={`/insights/casestudies/${data.slug}`} className='w-full'>
                        //                 <Button
                        //                     variant="default"
                        //                     className='w-full bg-black hover:bg-gray-800 text-white !py-3 !px-6 font-semibold !text-sm uppercase tracking-wider rounded-none transition-colors duration-300'
                        //                 >
                        //                     <span>View Case Study</span>
                        //                     <ArrowRight size={18} />
                        //                 </Button>
                        //             </Link>
                        //         </div>
                        //     </div>
                        // </div>

                        <div key={data.id} className="group flex flex-col">
                            {/* Image */}
                            <Link href={`/insights/casestudies/${data.slug}`} className="block">
                                <div className="relative w-full aspect-[16/10] bg-gray-200 overflow-hidden cursor-pointer">
                                    <Image
                                        src={data.img}
                                        alt={data.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </Link>

                            {/* Title and View Button Container */}
                            <div className="flex flex-row justify-between mt-6">
                                <Link href={`/insights/casestudies/${data.slug}`} className="flex flex-col justify-end pr-6">
                                    <h1 className="w-full text-xl min-[450px]:text-2xl md:text-[30px] font-bold text-black uppercase leading-[1.1]  cursor-pointer hover:text-black/80 transition-colors">
                                        DK PAY
                                        {/* {data.title} */}
                                    </h1>
                                </Link>
                                {/* <Link className="col-span-2" href={`/insights/casestudies/${data.slug}`}>
                                    <button className=" w-full bg-black text-white px-6 py-3.5 md:px-8 md:py-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[2px] hover:bg-zinc-800 transition-colors shrink-0 lg:ml-auto">
                                        View Case Study
                                    </button>
                                </Link> */}
                                <div className="flex flex-wrap mt-auto">
                                    <button
                                        className="text-gray-400 uppercase tracking-[0.01em] !font-['Helvetica','Arial',sans-serif]"
                                    >
                                        {data.type}
                                    </button>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-zinc-600 text-sm md:text-base mt-4 mb-4 max-w-full md:max-w-[90%] leading-relaxed font-medium">
                                {data.description}
                            </p>

                            {/* Tags / Bottom Buttons */}
                            <div className="flex flex-wrap gap-2 md:gap-3 mt-auto mb-8 lg:mb-12">
                                {/* <button
                                    className="px-4 py-2 md:px-6 md:py-2.5 border border-black/80 text-[9px] md:text-[10px] font-bold uppercase tracking-[1.5px] bg-transparent hover:bg-black hover:text-white transition-all"
                                >
                                    {data.type}
                                </button> */}
                                <Link className="col-span-2" href={`/insights/casestudies/${data.slug}`}>
                                    <button className=" w-full bg-black text-white px-6 py-3.5 md:px-8 md:py-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[2px] hover:bg-zinc-800 transition-colors shrink-0 lg:ml-auto">
                                        View Case Study
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default CaseStudies2
