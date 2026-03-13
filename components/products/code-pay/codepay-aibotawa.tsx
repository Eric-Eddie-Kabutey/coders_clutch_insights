import React from 'react'
import aibotawaImg from "@/public/assets/images/code_pay_sections/7.svg"
import Image from 'next/image'

function CodepayAibotawa() {
  return (
    <div className='w-full h-fit'>
        <Image 
            src={aibotawaImg}
            alt='About section'
            className='w-full h-full'
        />
    </div>
  )
}

export default CodepayAibotawa