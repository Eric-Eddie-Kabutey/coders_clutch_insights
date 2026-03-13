import React from 'react'
import aboutImg from "@/public/assets/images/code_pay_sections/2.svg"
import Image from 'next/image'

function CodepayAbout() {
  return (
    <div className='w-full h-fit'>
        <Image 
            src={aboutImg}
            alt='About section'
            className='w-full h-full'
        />
    </div>
  )
}

export default CodepayAbout