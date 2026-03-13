'use client';
import React, { useEffect, useState } from 'react'
import Typography from '../shared/typography'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';
import { customer_growth, reasons_global } from '@/constant';
import ScrollReveal from '../reusable/scroll-reveal';


function CustomerSuccess() {
    const [showAllReasons, setShowAllReasons] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
          setIsMobile(window.innerWidth < 768); 
        };
    
        checkIfMobile();
    
        window.addEventListener('resize', checkIfMobile);
    
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const displayedReasons = (!isMobile || showAllReasons) 
    ? reasons_global 
    : reasons_global.slice(0, 2);

  const toggleReasons = () => {
    setShowAllReasons(!showAllReasons);
  };
  return (
    <div className='inter w-full md:py-32 py-20 bg-app-primary-light'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex xl:flex-row flex-col justify-between items-center 2xl:gap-24 gap-12'>
            <Card className='flex-1 sm:p-8 xs:p-0 bg-white rounded-none'>
                <ScrollReveal >
                    <CardHeader className=' sm:flex hidden flex-col'>
                        <Typography
                            typo="header-3-light"
                            
                        >Top 6 Reasons</Typography>
                        <Typography typo="header-3-semibold" className='!leading-normal'>
                            Why Global Companies Choose CODERS CLUTCH
                        </Typography>
                    </CardHeader>
                </ScrollReveal>
                <CardHeader className='px-3 flex sm:hidden flex-col'>
                    <ScrollReveal>
                        <Typography typo="header-3-semibold" className='!leading-relaxed !text-[20px]'>
                            Why Global Companies Choose CODERS CLUTCH
                        </Typography>
                    </ScrollReveal>
                </CardHeader>
                
                <CardContent className='xs:px-6 px-3'>
                    {displayedReasons.map((data, i) => (
                        <ScrollReveal key={data.id} delay={i * 0.15}>
                            <div  className='py-4 flex items-center xs:gap-6 gap-3 border-b'>
                                <div className='flex items-center gap-2'>
                                    <ArrowUp color='#449358' />
                                    <Typography typo="body-large-semibold">{data.rate}</Typography>
                                </div>
                                <Typography typo="body-large-regular">
                                {data.title}
                                </Typography>
                            </div>
                        </ScrollReveal>
                    ))}
                </CardContent>
                {isMobile && (
                    <CardFooter className='w-fit mx-auto'>
                        <ScrollReveal>
                            <Button
                                variant="default"
                                onClick={toggleReasons}
                                className='flex items-center gap-2'
                            >
                                {showAllReasons ? 'See Less' : 'See More'}
                                {showAllReasons ? <ArrowDown size={18} /> : <ArrowRight size={18} />}
                            </Button>
                        </ScrollReveal>
                    </CardFooter>
                )}
            </Card>
            <div className='md:flex-1 w-full space-y-3'>
                <ScrollReveal >
                    <div className='w-full flex flex-col space-y-3 text-white'>
                        <Typography
                            typo="header-3-medium"
                        >
                            Our Customer Success
                        </Typography>
                        <Typography
                            typo="header-3-semibold"
                        >
                            Is Our Growth
                        </Typography>
                    </div>
                </ScrollReveal>

                <ScrollReveal >
                    <div className='w-full py-3 flex md:flex-row flex-col justify-between items-stretch flex-wrap'>
                        {customer_growth.map((growth) => (
                            <Card 
                                key={growth.id}
                                className={`w-full h-full mb-3 ${growth.id === 3 ? "md:w-[100%] " : "md:w-[49%]"} ${growth.id % 2 !== 0 ? "bg-[#FAE1B6] text-[#1F0802]" : "bg-[#1F0802] text-[#FAE1B6]"} flex flex-col gap-2 `}
                            >
                                <CardContent
                                    className={`md:py-6 pb-3 pt-6  flex md:flex-col flex-row md:items-start items-center gap-2 ${growth.id === 5 ? "px-10" : "2xl:px-8 px-7"} `}
                                >
                                    <div
                                        className='md:text-5xl text-3xl font-normal'
                                    >{growth.rate}</div>
                                    <Typography
                                        typo="body-large-regular"
                                    >{growth.title}</Typography>
                                </CardContent>
                                <CardFooter className={`py-1.5 ${growth.id % 2 !== 0 ? "bg-[#E8CF95]" : "bg-[#1F0802]"}  rounded-b-md`}></CardFooter>
                            </Card>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    </div>
  )
}

export default CustomerSuccess