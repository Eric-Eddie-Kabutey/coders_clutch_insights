import React from 'react'
import agentsubsImg from "@/public/assets/images/code_pay_sections/8.svg"
import Image from 'next/image'

function CodepayAgentsubs() {
  return (
    <div className='w-full h-fit'>
        <Image 
            src={agentsubsImg}
            alt='About section'
            className='w-full h-full'
        />
    </div>
  )
}

export default CodepayAgentsubs