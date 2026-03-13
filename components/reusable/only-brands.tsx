'use client';
import React from 'react'
import Typography from '../shared/typography'
import Image from 'next/image'
import gtBankImg from "@/public/assets/images/solutions/brands/gtbank-circular.png";
import accessBankImg from "@/public/assets/images/solutions/brands/access-bank-circular.png";
import alatBankImg from "@/public/assets/images/solutions/brands/alat-circular.png";
import ecobankImg from "@/public/assets/images/solutions/brands/ecobank-circular.png";


const brands = [
    gtBankImg, accessBankImg, alatBankImg, ecobankImg
  ]

function OnlyBrands() {
  return (
    <div className="w-full pt-20 pb-12">
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col items-center gap-4'>
            <Typography
                className="text-center !leading-normal"
                typo="header-6-semibold"
            >
                Trusted by Funded Startups to <span className="text-[#108B47]">Fortune 500+ Brands</span> in 12+ Countries
            </Typography>
            <div className='w-full py-12 grid md:grid-cols-4 grid-cols-2 gap-8'>
                {brands.map((data, index) => (
                    <div
                        key={index+1}
                        className='xs:w-32 w-[120px] h-fit'
                    >
                        <Image 
                            src={data}
                            alt={`Brands ${index+1}`}
                            className='w-full h-full'
                        />
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default OnlyBrands