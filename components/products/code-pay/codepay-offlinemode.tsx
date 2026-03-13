import React from 'react'
import offlineImg from "@/public/assets/images/code_pay_sections/4.svg"
import Image from 'next/image'

function CodepayOfflineMode() {
  return (
    <div className='w-full h-fit'>
        <Image 
            src={offlineImg}
            alt='About section'
            className='w-full h-full'
        />
    </div>
  )
}

export default CodepayOfflineMode