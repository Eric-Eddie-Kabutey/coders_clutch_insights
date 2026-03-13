'use client';
import React from 'react'
import bonfo from "@/public/assets/images/brands/bonfo.png"
import calbank from "@/public/assets/images/brands/calbank.png"
import dkpay from "@/public/assets/images/brands/calbank.png"
import dktelecom from "@/public/assets/images/brands/dktelecom.png"
import gayenyorro from "@/public/assets/images/brands/gayenyorro.png"
import intech from "@/public/assets/images/brands/intech.png"
import melcom from "@/public/assets/images/brands/melcom.png"
import oneworld from "@/public/assets/images/brands/oneworld.png"
import orangemoney from "@/public/assets/images/brands/orange_money.png"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';
import ScrollReveal from './scroll-reveal';

const brands = [bonfo, calbank, dkpay, dktelecom, gayenyorro, intech, melcom, oneworld, orangemoney]

function Brands() {
  return (
    <div className='w-full py-12'>
        <ScrollReveal>
            <section className='max-container sm:w-[85%] w-[70%] mx-auto'>

                <Carousel
                    plugins={[
                        Autoplay({
                        delay: 2000,
                        }),
                    ]}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full "
                >
                <CarouselContent className='flex items-center'>
                    {brands.map((brand, index) => (
                    <CarouselItem key={index+1} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                        <div className="w-32 h-fit">
                            <Image 
                                src={brand}
                                alt={`Brand ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
            </section>
        </ScrollReveal>
    </div>
  )
}

export default Brands