import React from 'react'
import galleryImg from "@/public/assets/images/code_pay_sections/10.svg"
import Image from 'next/image'

function CodepayGallery() {
  return (
    <div className='w-full h-fit'>
        <Image 
            src={galleryImg}
            alt='About section'
            className='w-full h-full'
        />
    </div>
  )
}

export default CodepayGallery