'use client';
import React, { useEffect, useState } from 'react'
import Typography from '../shared/typography'
import { ArrowRight, BookOpen, CarFront, CircleDollarSign, HardHat, HeartPulse, Hotel, Landmark, MapPinned, ShieldCheck } from 'lucide-react';
import CaseStudies from './case-studies';
import PortfolioMain from './portfolio-main';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion'
import Image from "next/image";
import { Link } from 'phosphor-react';
import { Button } from '../ui/button';
import StarRating from '../reusable/star-rating';
import ArcHeading from '../reusable/arc-text';


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

function PortfolioHero() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const [activeTab, setActiveTab] = useState<'caseStudies' | 'latestProjects'>(
        tabParam === 'caseStudies' ? 'caseStudies' : 'latestProjects'
    );

    // useEffect(() => {
    //     router.push(`?tab=${activeTab}`, { scroll: false });
    // }, [activeTab, router]);

    useEffect(() => {
        if (tabParam === 'caseStudies') {
            setActiveTab('caseStudies');
        } else {
            setActiveTab('latestProjects');
        }
    }, [tabParam]);

    const title = activeTab === 'caseStudies' ? 'View Our Case Studies' : 'View Our Latest Projects';
    const highlight = activeTab === 'caseStudies' ? 'Case Studies' : 'Latest Projects';

    const inifiniteContent = [...hero_content, ...hero_content]
    const inifiniteContent2 = [...hero_content2, ...hero_content2]


    const goToCaseStudies = () => {
        router.push('/insights/casestudies');
    };

    const goToLatestProjects = () => {
        setActiveTab('latestProjects');
    };


    return (
        <div className="relative">
            <div className="scene mx-auto">
                <div className="planet-glow"></div>
                <div className="planet top-[50%]"></div>
                <div className='text-center mt-10 pt-20 z-50'>
                    <Typography
                        className="xl:text-5xl lg:text-4xl sm:text-3xl font-medium xs:text-3xl text-2xl text-center text-app-primary-deep"
                    >We Build <span className="text-app-secondary oleo-script">Enterprise-Grade</span> Automated Software</Typography>

                </div>
                <div className='text-center w-[80%] md:w-[60%] mx-auto'>
                    <Typography
                        typo="body-large-regular"
                        className="mx-auto inter text-center text-black !text-xl"
                    >
                        Comprehensive technology services designed to accelerate your business growth, enhance efficiency, and drive digital transformation at every level.
                    </Typography>
                </div>
                <div className="w-full flex flex-col gap-6 mt-40 overflow-hidden">
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

            {/* <div className='max-w-[50rem] lg:w-[50%] sm:w-[70%] w-[90%] mx-auto -mt-8 border flex justify-between items-center gap-8 bg-white rounded-lg overflow-hidden'>
                <button
                    className={`flex-1 py-4 text-center transition-all ${activeTab === 'latestProjects' ? 'bg-app-primary text-white font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('latestProjects')}
                >
                    Latest Projects
                </button>
                <div className='w-[2px] h-8 bg-gray-300'></div>
                <button
                    className={`flex-1 py-4 text-center transition-all ${activeTab === 'caseStudies' ? 'bg-app-primary text-white font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('caseStudies')}
                >
                    Case Studies
                </button>
            </div> */}

            <div className='max-w-[50rem] lg:w-[50%] sm:w-[70%] w-[90%] mx-auto mt-32 sm:mt-24 md:mt-12 lg:mt-0 border flex justify-between items-center gap-8 bg-white rounded-lg overflow-hidden'>
                <button
                    className={`flex-1 py-4 text-center transition-all ${activeTab === 'latestProjects'
                        ? 'bg-app-primary text-white font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    onClick={goToLatestProjects}
                >
                    Latest Projects
                </button>

                <div className='w-[2px] h-8 bg-gray-300'></div>

                <button
                    className="flex-1 py-4 text-center transition-all text-gray-600 hover:bg-gray-100"
                    onClick={goToCaseStudies}
                >
                    Case Studies
                </button>
            </div>



            {/* <div className='w-full md:py-6'>
                {activeTab === 'caseStudies' ? (
                    <CaseStudies />
                ) : (
                    <PortfolioMain />
                )}
            </div> */}



            <div className="ortfolioContent overflow-y-visible mt-20">
                <PortfolioMain />
            </div>
        </div >
    )
}

export default PortfolioHero