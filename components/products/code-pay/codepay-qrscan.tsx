import React from 'react'
import qrscanImg from "@/public/assets/images/code_pay_sections/5.svg"
import Image from 'next/image'

function CodepayQrscan() {
  return (
    <div className='w-full h-fit'>
        <Image 
            src={qrscanImg}
            alt='About section'
            className='w-full h-full'
        />
    </div>
  )
}

export default CodepayQrscan