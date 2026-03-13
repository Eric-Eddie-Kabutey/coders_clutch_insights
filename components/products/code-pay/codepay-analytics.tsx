import React from 'react'
import analyticsImg from "@/public/assets/images/code_pay_sections/6.svg"
import Image from 'next/image'

function CodepayAnalytics() {
  return (
    <div className='w-full h-fit'>
        <Image 
            src={analyticsImg}
            alt='About section'
            className='w-full h-full'
        />
    </div>
  )
}

export default CodepayAnalytics