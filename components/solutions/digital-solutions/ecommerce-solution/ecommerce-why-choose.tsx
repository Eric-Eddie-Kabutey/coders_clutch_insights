'use client';
import Typography from '@/components/shared/typography'
import { Check } from 'lucide-react';
import React from 'react'

const why_chooses = ["Top-Notch Quality", "Highly Customizable Design", "Secure Payment Gateway Integration.", "Responsive Design", "Pre-Built Pages and Sections", "Smooth Experience", "Seo Optimized", "Clean Design", "Outstanding Customer Support", "Extensive Theme Options"]

function EcommerceWhyChoose() {
  return (
    <div className='commerce-whychoose-bg w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[65%] xl:w-[75%] lg:w-[85%] w-[90%] mx-auto flex flex-col gap-8'>
            <Typography
                typo="header-2-semibold"
                className='text-white text-center'
            >
                Why Choose Coders Clutch For Your E-commerce Project ?
            </Typography>
            <div className='rale xs:w-full w-fit py-8 mx-auto grid md:grid-cols-3 gap-2 text-white'>
            {why_chooses.map((data, index) => {
                const isPadding =
                (index + 1 === 4) || // after first 4
                (index + 1 > 4 && (index - 3) % 3 === 0); // then every 3 after that

                return (
                <div
                    key={data}
                    className={`flex items-center gap-2 ${isPadding ? "pb-6" : ""}`}
                >
                    <div className='text-gray-200 p-[2px] rounded-full bg-app-green-text'>
                    <Check size={12} />
                    </div>
                    <Typography typo="body-medium-medium">
                    {data}
                    </Typography>
                </div>
                );
            })}
            </div>
        </section> 
    </div>
  )
}

export default EcommerceWhyChoose