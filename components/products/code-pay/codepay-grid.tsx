'use client';
import React from 'react'
import firstImg from "@/public/assets/images/gampayImgs/GamPay_Mockup_013.png"
import secondImg from "@/public/assets/images/gampayImgs/GamPay_Mockup_015.png"
import thirdImg from "@/public/assets/images/gampayImgs/GamPay_Mockup_011.png"
import fourthImg from "@/public/assets/images/gampayImgs/GamPay_Mockup_09.png"
import Image from 'next/image';

const grid_imgs = [firstImg, secondImg, thirdImg, fourthImg]

function CodepayGrid() {
  return (
    <div className='w-full md:py-32 py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-5'>
            <div className='w-full grid md:grid-cols-4 xs:grid-cols-2 gap-4'>
                {grid_imgs.map((data, index) => (
                    <div key={index+1} className={`w-full h-fit py-8 overflow-hidden`}>
                        <Image 
                            src={data}
                            alt={`Image ${index+1}`}
                            className='w-full h-full hover:scale-110 transition-all duration-300 '
                        />
                    </div>
                ))}

            </div>
        </section>
    </div>
  )
}

export default CodepayGrid