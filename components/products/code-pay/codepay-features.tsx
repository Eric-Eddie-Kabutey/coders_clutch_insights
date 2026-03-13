import React from 'react'
import featuresImg from "@/public/assets/images/code_pay_sections/3.svg"
import Image from 'next/image'

function CodepayFeatures() {
  return (
    <div className='w-full h-fit'>
        <Image 
            src={featuresImg}
            alt='About section'
            className='w-full h-full'
        />
    </div>
  )
}

export default CodepayFeatures