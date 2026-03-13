'use client';
import Typography from '@/components/shared/typography'
import { website_features } from '@/constant';
import { Check } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function WebsiteFeatures() {
    const [featureText, setFeatureText] = useState('What you get');
    const featureOptions = ['online shop', 'portfolio', 'landing', 'magazine'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
          setIsVisible(false);
          
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % featureOptions.length);
            setFeatureText(featureOptions[currentIndex]);
            setIsVisible(true);
          }, 500);
        }, 2000);
    
        return () => clearInterval(interval);
    }, [currentIndex, featureOptions.length]);
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='inter w-full flex flex-col justify-center items-center gap-6 text-black'>
            <div className='max-container xl:w-[55%] sm:w-[80%] w-[90%] mx-auto flex flex-col items-center xl:gap-8 gap-4'>
                <div className='flex sm:flex-row flex-col items-center gap-2 text-gray-700'>
                    <Typography
                        typo="header-3-semibold"
                        className='!font-semibold'
                    >
                        Website features |  
                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                        className={`!font-bold transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {featureText}
                    </Typography> 
                </div>
                <Typography
                    typo="body-medium-medium"
                    className='text-center !leading-relaxed text-gray-500'
                >
                    We execute every website design project using best practices. The following features and addons will be 
                    included in the design for your website. Deliverables are exactly as per the scope of the project.
                </Typography>
            </div>
        </section>
        <section className='w-full pt-10 pb-16 bg-white'>
            <div className='inter max-container 2xl:w-[75%] lg:w-[85%] w-[90%] mx-auto grid md:grid-cols-3 gap-3'>
                {website_features.map((data, index) => (
                    <div key={data}
                        className={`flex items-center gap-2 ${
                            (index + 1) % 4 === 0 ? "pb-6" : ""
                        }`}
                    >
                        <div className='w-fit p-[2px] rounded-full bg-app-primary-light'>
                            <Check color='white' size={12} />
                        </div>
                        <Typography
                            key={data}
                            typo="body-medium-regular"
                        >
                            {data}
                        </Typography>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default WebsiteFeatures