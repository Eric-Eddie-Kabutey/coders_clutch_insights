'use client';
import React from 'react'
import productIcon from "@/public/assets/icons/design-gap/product.svg"
import inconsistentIcon from "@/public/assets/icons/design-gap/inconsistent.svg"
import userIcon from "@/public/assets/icons/design-gap/user.svg"
import crossIcon from "@/public/assets/icons/design-gap/cross-platform.svg"
import designIcon from "@/public/assets/icons/design-gap/design.svg"
import scopeIcon from "@/public/assets/icons/design-gap/scope-creep.svg"
import Typography from '@/components/shared/typography'
import Image from 'next/image';

const products = [
    {
        id: "1",
        title: "Why Choose",
        sub_title: "CODERS Clutch As Your Trusted Product Development Partner?",
    },
    {
        id: "2",
        icon: productIcon,
        title: "Cost-Efficient Development",
        description: `We optimize costs through streamlined processes and smart solutions, delivering high-quality software 
                        development without compromising on budget or project outcomes.`,
    },
    {
        id: "3",
        icon: inconsistentIcon,
        title: "On-Time Delivery",
        description: `Our commitment to punctuality ensures your product is delivered on schedule, keeping your business 
                        goals aligned with reliable, timely project execution.`,
    },
    {
        id: "4",
        icon: userIcon,
        title: "98% Client Retention",
        description: `Our high client retention rate reflects our dedication to quality, service, and results, 
                        creating lasting partnerships through trust and consistent excellence.`,
    },
    {
        id: "5",
        icon: crossIcon,
        title: "500+ Products Developed",
        description: `With extensive experience across 500+ projects, we bring proven methodologies and insights, 
                        ensuring each new product exceeds industry standards and expectations.`,
    },
    {
        id: "6",
        icon: designIcon,
        title: "16+ Years Of Experience",
        description: `Our 16+ years in software development equip us with the expertise needed to solve complex 
                        challenges and deliver excellence in every project.`,
    },
    {
        id: "7",
        icon: scopeIcon,
        title: "Custom-Made Applications",
        description: `We create applications that are tailored to your specific needs, ensuring unique solutions that 
                        align perfectly with your business goals and market demands.`,
    },
    {
        id: "8",
        icon: scopeIcon,
        title: "Premium Product Quality",
        description: `We prioritize quality in every detail, implementing rigorous testing and development standards to 
                        ensure your product performs reliably and exceeds expectations.`,
    },
    {
        id: "9",
        icon: scopeIcon,
        title: "300+ In-House Team",
        description: `Our diverse team of 300+ in-house experts provides end-to-end development services, delivering 
                        quality and innovation at every stage of product creation.`,
    },
]

function ProductWhyChoose() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 2xl:gap-12 gap-6'>
            {products.map((data, index) => (
                data.sub_title ? (
                    <div key={data.id} className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                        <Typography
                            typo="header-4-light"
                        >
                            Why Choose
                        </Typography>
                        <Typography
                            typo="header-4-semibold"
                            className='!font-bold'
                        >
                            CODERS Clutch As Your Trusted Product Development Partner?
                        </Typography>
                    </div>
                )
             : (
                <div key={data.id} className='lg:pr-16 md:p-0 sm:p-3 p-4 flex flex-col gap-4 md:shadow-none shadow-md md:rounded-none rounded-md'>
                    <div className='sm:w-12 w-10 sm:h-12 h-10 rounded-md'>
                        <Image
                            src={data.icon}
                            alt={`Design ${index+1}`}
                            className='w-full h-full'
                        />
                    </div>
                    <Typography
                        typo="header-6-semibold"
                    >
                        {data.title}
                    </Typography>
                    <Typography
                        typo="body-medium-medium"
                        className='!leading-relaxed'
                    >
                        {data.description}
                    </Typography>
                </div>
            )))}
        </section>
    </div>
  )
}

export default ProductWhyChoose