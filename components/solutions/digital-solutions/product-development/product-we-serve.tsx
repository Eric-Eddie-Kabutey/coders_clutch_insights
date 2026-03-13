'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import productMediaImg from "@/public/assets/images/solutions/product_development/product_media.png"
import productBankingImg from "@/public/assets/images/solutions/product_development/product_banking.png"
import productHealthImg from "@/public/assets/images/solutions/product_development/product_healthcare.png"
import productTeleImg from "@/public/assets/images/solutions/product_development/product_telecom.png"
import productAutomotiveImg from "@/public/assets/images/solutions/product_development/product_automative.png"
import productEducationImg from "@/public/assets/images/solutions/product_development/product_education.png"
import Image from 'next/image';

const served_industries = [
    {
        id: "1",
        img: productMediaImg,
        title: "Media & Entertainment",
        description: `Capture audience attention with progressive media solutions that deliver engaging content experiences. 
                        Adapt to changing trends and foster deeper connections with your viewers.  `
    },
    {
        id: "2",
        img: productBankingImg,
        title: "Banking",
        description: `Transform your banking operations with customized solutions that enhance security & customer interactions. 
                        Build trust with technology designed specifically for financial institutions.   `
    },
    {
        id: "3",
        img: productHealthImg,
        title: "Healthcare",
        description: `Empower healthcare providers with innovative solutions that enhance patient care and operational 
                        efficiency. Integrate technology to facilitate data and improve outcomes for all.`
    },
    {
        id: "4",
        img: productTeleImg,
        title: "Telecommunications",
        description: `Build robust telecommunications software that enhances user experience and optimizes network 
                        performance. Ensure seamless connectivity and reliable communication in the digital world.`
    },
    {
        id: "5",
        img: productAutomotiveImg,
        title: "Automotive",
        description: `Enhance safety with smart automotive solutions designed for modern vehicles. Innovate the driving 
                        experience with user-centric technology that keeps you ahead in a competitive market.`
    },
    {
        id: "6",
        img: productEducationImg,
        title: "Education",
        description: `Engage students and educators with interactive platforms that foster personalized learning journeys. 
                        Prepare learners for the future with technology designed to adapt to individual needs.`
    },
]

function ProductWeServe() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Industries We Serve
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Driving Growth Across Major Industries
                </Typography>
            </div>

            <div className='w-full py-4 grid md:grid-cols-3 xs:grid-cols-2 lg:gap-16 gap-8'>
                {served_industries.map((data, index) => (
                    <div key={data.id} className='flex flex-col gap-4 text-white'>
                        <div className='md:w-24 w-16 h-fit'>
                            <Image 
                                src={data.img}
                                alt={`Industry ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Typography
                                typo="header-6-semibold"
                            >
                                {data.title}
                            </Typography>
                            <div className='w-12 h-[3px] bg-white'></div>
                        </div>
                        <Typography
                            typo="body-medium-medium"
                        >
                            {data.description}
                        </Typography>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default ProductWeServe