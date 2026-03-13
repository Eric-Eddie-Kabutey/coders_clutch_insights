import React from 'react'
import dashboardImg from "@/public/assets/images/code_pay_sections/9.svg"
import Image from 'next/image'

function CodepayDashboard() {
  return (
    <div className='w-full h-fit'>
        <Image 
            src={dashboardImg}
            alt='About section'
            className='w-full h-full'
        />
    </div>
  )
}

export default CodepayDashboard