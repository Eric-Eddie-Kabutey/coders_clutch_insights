import React from 'react'
import contactImg from "@/public/assets/images/code_pay_sections/11.svg"
import Image from 'next/image'

function CodepayContact() {
  return (
    <div className='w-full h-fit'>
        <Image 
            src={contactImg}
            alt='About section'
            className='w-full h-full'
        />
    </div>
  )
}

export default CodepayContact