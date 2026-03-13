'use client';
import React from 'react';
import ourClients from '@/public/assets/images/our-clients.svg';
import ourClientsMobile from '@/public/assets/images/our-clients-mobile.png';
import Typography from '@/components/shared/typography';
import Image from 'next/image';

function TrustBrands() {
  return (
        <section 
            className="w-full mx-auto  text-center space-y-16"
        >
            <Typography
                className="text-center"
                typo="body-large-semibold"
            >
                Trusted by Funded Startups to <span className="text-[#108B47]">Fortune 500+ Brands</span> in 12+ Countries
            </Typography>
            <div
                className="lg:block hidden w-full mx-auto"
            >
                <Image
                    src={ourClients}
                    alt="Our Clients image"
                    className="w-full h-full"
                />
            </div>
            <div
                className="lg:hidden block w-full h-fit mx-auto"
            >
                <Image
                    src={ourClientsMobile}
                    alt="Our Clients image"
                    className="w-full h-full"
                />
            </div>
        </section>
  )
}

export default TrustBrands