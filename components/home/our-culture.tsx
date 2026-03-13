'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typography from '../shared/typography';
import Image from 'next/image';
import { home_culture } from '@/constant';
import { Card } from '../ui/card';
import ScrollReveal from '../reusable/scroll-reveal';

function OurCulture() {
    const [selectedCulture, setSelectedCulture] = useState(home_culture[0].id);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        
        const cycleImages = () => {
            setIsAnimating(true);
            
            setSelectedCulture(prev => {
                const currentIndex = home_culture.findIndex(culture => culture.id === prev);
                let nextIndex = currentIndex + 1;
                
                if (nextIndex >= home_culture.length) {
                    nextIndex = 0;
                    
                    timeoutId = setTimeout(() => {
                        setIsAnimating(false);
                        setSelectedCulture(home_culture[nextIndex].id);
                    }, 1000);
                }
                
                return home_culture[nextIndex].id;
            });

            setTimeout(() => setIsAnimating(false), 500);
        };

        const intervalId = setInterval(cycleImages, 3000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [home_culture]);

    return (
        <div className='w-full md:py-32 py-20 bg-gray-100'>
            <section className='max-container 2xl:w-[85%] w-[95%] mx-auto'>
                <ScrollReveal>
                    <div className='w-fit sm:pb-10 pb-5 flex flex-col gap-2'>
                        <Typography typo="header-3-light">
                            Our Culture
                        </Typography>
                        <Typography typo="header-3-semibold">
                            Great Products Start with a Great Workplace
                        </Typography>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className='w-full grid md:grid-cols-9 xs:grid-cols-10 grid-cols-11 gap-4'>
                        <AnimatePresence initial={false}>
                            {home_culture.map((data) => (
                                <motion.div
                                    key={`Culture-${data.id}`}
                                    layout
                                    initial={{ opacity: 0.7 }}
                                    animate={{ 
                                        opacity: selectedCulture === data.id ? 1 : 0.9,
                                    }}
                                    transition={{
                                        layout: { 
                                            type: "spring", 
                                            stiffness: 100,
                                            damping: 20,
                                            duration: 1
                                        },
                                        opacity: { duration: 0.7 }
                                    }}
                                    className={`${selectedCulture === data.id ? "md:col-span-5 xs:col-span-6 col-span-7" : "col-span-1"} md:h-[450px] sm:h-[350px] xs:h-[250px] h-[200px]`}
                                    onClick={() => {
                                        if (!isAnimating) {
                                            setIsAnimating(true);
                                            setSelectedCulture(data.id);
                                            setTimeout(() => setIsAnimating(false), 1000);
                                        }
                                    }}
                                >
                                    <Card className={`
                                        h-full w-full relative overflow-hidden 
                                        cursor-pointer rounded-[1.4rem] border-[3px] border-white
                                        ${isAnimating ? 'pointer-events-none' : ''}
                                    `}>
                                        <Image 
                                            src={data.img}
                                            alt={`Culture ${data.id}`}
                                            className='object-cover'
                                            fill
                                            priority={selectedCulture === data.id}
                                        />
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}

export default OurCulture;