'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import processImg from "@/public/assets/images/solutions/process-img.png";
import Image from 'next/image';

const successful_designs = [
    {
        id: "1",
        title: "Define the Problem",
        description: `Translate research insights into clear, actionable problem statements for better product direction.`,
    },
    {
        id: "2",
        title: "Wireframe & Structure",
        description: `Sketch layout and navigation structure to visualize flow and identify early design gaps.`,
    },
    {
        id: "3",
        title: "Test & Iterate",
        description: `Conduct user testing, gather feedback, and refine designs for better usability and outcomes.`,
    },
    {
        id: "4",
        title: "Research & Understand",
        description: `Analyze user behavior, market trends, and business needs to guide informed design decisions.`,
    },
    {
        id: "5",
        title: "Ideate Solutions",
        description: `Explore and brainstorm design possibilities that align with user needs and business goals.`,
    },
    {
        id: "6",
        title: "Design & Prototype",
        description: `Create engaging visuals and interactive prototypes to simulate real product experience.`,
    },
]

function OurPeek() {
  return (
    <div className='w-full md:py-32 py-20 bg-gradient-to-t from-white to-[#D1FFFB]'>
        <section className='inter max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto xl:pb-12 pb-10 flex flex-col gap-2'>
            <Typography
                typo="header-3-light"
            >
                A Peek into Our
            </Typography>
            <Typography
                typo="header-3-semibold"
                className='!font-bold'
            >
                Tried-and-Tested Methods for Successful Product Design
            </Typography>
        </section>
        <section className='md:hidden block max-container w-[90%] mx-auto'>
            <div className='lg:w-[70%] grid md:grid-cols-3 sm:grid-cols-2 lg:gap-0 gap-5 lg:pr-8'>
                    {successful_designs.map(data => (
                    <div key={data.id} className=' flex flex-col sm:justify-center sm:gap-4 gap-2'>
                        <Typography
                            typo="body-large-semibold"
                            className={`${data.id === "3" ? "lg:text-left sm:text-center" : "sm:text-center"}`}
                        >{data.title}</Typography>
                        <Typography
                            typo="body-medium-regular"
                            className={`${data.id === "3" ? "lg:text-left sm:text-center" : "sm:text-center"} !leading-normal`}
                        >{data.description}</Typography>

                    </div>
                ))}
            </div>
        </section>
        <section className='max-container md:block hidden w-full '>
            <div className='w-[90%] lg:mx-0 mx-auto pb-6 flex justify-end'>
                <div className='lg:w-[70%] grid grid-cols-3 lg:gap-0 gap-5 lg:pr-8'>
                    {successful_designs.slice(0, 3).map(data => (
                        <div key={data.id} className='max-w-[270px] flex flex-col justify-center gap-4'>
                            <Typography
                                typo="body-large-semibold"
                                className={`${data.id === "3" ? "lg:text-left text-center" : "text-center"}`}
                            >{data.title}</Typography>
                            <Typography
                                typo="body-medium-regular"
                                className={`${data.id === "3" ? "lg:text-left text-center" : "text-center"} !leading-normal`}
                            >{data.description}</Typography>

                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full h-fit lg:block hidden'>
                <Image 
                    src={processImg}
                    alt='Process image'
                    className='w-full h-full'
                />
            </div>
            <div className='lg:w-[70%] w-[90%] lg:pt-8 pt-3 mx-auto grid grid-cols-3 gap-3 pr-8'>
                {successful_designs.slice(3, 6).map(data => (
                    <div key={data.id} className='max-w-[270px] flex flex-col justify-center gap-4'>
                        <Typography
                            typo="body-large-semibold"
                            className={`${data.id === "6" ? "lg:text-left text-center" : "text-center"}`}

                        >{data.title}</Typography>
                        <Typography
                            typo="body-medium-regular"
                            className={`${data.id === "6" ? "lg:text-left text-center" : "text-center"} !leading-normal`}
                        >{data.description}</Typography>

                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default OurPeek