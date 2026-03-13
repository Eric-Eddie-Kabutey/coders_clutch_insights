'use client';
import Typography from '@/components/shared/typography';
import React from 'react';

const product_services = [
    {
        id: "1",
        title: "Sleek Design & Mobile Friendly Website",
        description: `Your needs, business objectives, and goals for your website provide insights to help us understand 
                        your brand. Our website development consultancy ensures we create a suitable project plan and timeline.`,
    },
    {
        id: "2",
        title: "Content Creation",
        description: `You need to convince customers to engage with your customers. Working collaboratively- we determine 
                        what content can achieve this on your website including the right placement.`,
    },
    {
        id: "3",
        title: "Design & Development",
        description: `You want to be proud of your brand and website. This is why we create the user-optimized responsive 
                        design structures, graphics, and visual elements to align perfectly with this.`,
    },
    {
        id: "4",
        title: "Testing & Quality Assurance",
        description: `We perform a detailed website audit and QA for functionality testing on Search Engine Optimization 
                        (SEO), site speed, security, and more to ensure that your website performs optimally.`,
    },
]

function WebsiteSleekDesign() {
  return (
    <div className='w-full sm:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-5'>
                <div className='xl:w-[65%] mx-auto pb-6 flex flex-col items-center gap-4 text-gray-700'>
                    <Typography
                        typo="header-3-medium"
                        className='!font-medium'
                    >
                        Our Website Design Process
                    </Typography>
                    <Typography
                        typo="body-medium-medium"
                        className='text-center !leading-relaxed text-gray-500 lg:line-clamp-3 line-clamp-2'
                    >
                        You need to stay informed. This is why our process ensures our website designer collaborates with you and your team through our design process. Our focus is to be reliable while creating a website that improves your business goals.
                    </Typography>
                </div>
            <div className='w-full md:py-8 grid lg:grid-cols-4 sm:grid-cols-2 md:gap-12 gap-6'>
                {
                    product_services.map((data) => (
                        <div key={data.id} className='lg:pb-0 pb-7 flex flex-col justify-center gap-3 lg:border-none border-b'>
                            <div className='flex flex-col gap-3'>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <div className='w-12 h-[3px] bg-app-green-text'></div>
                            </div>
                            <div className='flex flex-col justify-start'>
                                <Typography
                                    typo="body-medium-medium"
                                >
                                    {data.description}
                                </Typography>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default WebsiteSleekDesign