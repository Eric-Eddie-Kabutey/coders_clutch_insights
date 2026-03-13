import Typography from '@/components/shared/typography'
import React, { useState } from 'react'
import csrImg from "@/public/assets/images/about/our-team2.jpg"
import Image from 'next/image'
import { ChevronRight } from 'lucide-react';

function AboutOverview() {
    const [isMore, setIsMore] = useState(false);

  return (
    <div className='pops w-full py-4 flex flex-col gap-6'>
        <div className='flex md:flex-row flex-col justify-between gap-7'>
            <div className='flex-1 flex flex-col gap-4'>
                <Typography
                    typo="header-5-semibold"
                    className='!leading-normal'
                >
                    Building Responsibly for a Secure and Inclusive Digital Future
                </Typography>
                <Typography
                    typo="body-medium-light"
                    className='text-justify !leading-relaxed'
                >
                    At Coders Clutch, our mission extends beyond developing cutting-edge software, blockchain, and AI solutions. 
                    We believe that with powerful technology comes a profound responsibility to the people and communities it 
                    impacts. Our Corporate Social Responsibility (CSR) philosophy is embedded in our core ethos: to innovate 
                    with integrity and build a digital ecosystem that is secure, accessible, and empowering for all.
                </Typography>
            </div>
            <div className='md:w-[40%] w-full md:h-[300px] sm:h-[400px] h-[300px]'>
                <Image 
                    src={csrImg}
                    alt='Csr image'
                    className='w-full h-full object-cover rounded-lg'
                />
            </div>
        </div>
        {!isMore ? (
            <button
                onClick={() => setIsMore(true)}
                className='flex items-center gap-2 !text-xl text-app-primary-deep font-medium'
            >Read more
                <ChevronRight size={25} />
            </button>
        ) : (
        <div className='flex flex-col gap-4'>
            <Typography
                typo="header-6-semibold"
            >Our commitment is focused on three pillars:</Typography>
            <ul className='flex flex-col gap-5 list-inside list-decimal'>
                <div className='flex flex-col gap-3'>
                    <li>Fostering Digital Inclusion & Literacy</li>
                    <Typography
                        typo="body-medium-regular"
                        className='text-justify text-gray-600'
                    >
                        We recognize that the benefits of the digital revolution are not yet universal. We are dedicated to 
                        closing the divide by supporting initiatives that provide underserved communities with access to 
                        technology education and tools. Through partnerships with educational institutions and local 
                        organizations, we will empower the next generation of developers, cybersecurity experts, and 
                        critical thinkers in our operating regions, ensuring they are not just consumers of technology, but active creators in the global digital economy.
                    </Typography>
                </div>
                <div className='flex flex-col gap-3'>
                    <li>Championing Ethical Innovation & Security</li>
                    <Typography
                        typo="body-medium-regular"
                        className='text-justify text-gray-600'
                    >
                        In an era of rapid technological advancement, ethical stewardship is non-negotiable. We commit to 
                        building solutions with security and privacy as foundational principles, not afterthoughts. Our team 
                        of experts in cryptography, cybersecurity, and AI ethics ensures that our platforms are not only 
                        powerful but also transparent, fair, and resilient against misuse. We pledge to set industry standards 
                        for responsible innovation, protecting our users and upholding the integrity of the digital landscape.
                    </Typography>
                </div>
                <div className='flex flex-col gap-3'>
                    <li>Driving Sustainable Impact Through Our Core Expertise</li>
                    <Typography
                        typo="body-medium-regular"
                        className='text-justify text-gray-600'
                    >
                        Our most significant impact lies in applying our unique skills to solve real-world challenges. 
                        We will proactively seek projects that leverage our fintech and blockchain expertise to enhance 
                        financial inclusion, create more transparent supply chains, and support green initiatives. By 
                        dedicating a portion of our resources to pro-bono and social-impact projects, we ensure our technology 
                        serves as a catalyst for positive, sustainable change.
                    </Typography>
                </div>
                <div className='flex flex-col gap-3'>
                    
                    <Typography
                        typo="body-medium-regular"
                        className='text-justify text-gray-600'
                    >
                        Our promise is to leverage our expertise not only for commercial success but for the enduring betterment 
                        of society. This is our duty, and our privilege, as builders of the future.
                    </Typography>
                </div>
            </ul>
        </div>

        )}
       
    </div>
  )
}

export default AboutOverview