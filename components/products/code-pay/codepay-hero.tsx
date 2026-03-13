import Image from 'next/image'
import heroImg from "@/public/assets/images/code_pay_sections/1.svg"
import React from 'react'

function CodepayHero() {
  return (
    <div className='w-full h-fit'>
        <Image 
            src={heroImg}
            alt='Hero section'
            className='w-full h-full'
        />
    </div>
  )
}

export default CodepayHero