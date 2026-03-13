import React from 'react'
import Typography from './typography'
import Image from 'next/image'
import middleImg from "@/public/assets/images/overlay_img.png";
import ScrollReveal from '../reusable/scroll-reveal';

function MiddleFooter() {
  return (
    <div className='w-full pt-12 relative overflow-hidden'>
        <div className="md:block hidden absolute inset-0 bg-gradient-to-bl from-[#003b38]  via-[#003b38] to-[#05fbf2] "></div>
        <div className="md:hidden block absolute inset-0 bg-gradient-to-bl from-[#05fbf2]  via-[#003b38] to-[#003b38] "></div>
        <section className='md:py-8 py-3 relative md:border-t border-gray-500 z-[10] max-container 2xl:w-[85%] md:w-[95%] w-[95%] mx-auto flex md:flex-row flex-col justify-between gap-6 text-white'>
            <div className='lg:w-[50%] flex md:flex-col flex-row justify-end gap-4'>
                {/* <Typography
                    typo="body-large-light"
                    className='pops'
                >Coders Clutch</Typography>
                <Typography
                    typo="header-4-medium"
                    className='pops'
                >Contacts</Typography> */}
                <ScrollReveal>
                    <div className=' lg:w-[300px] w-[200px] h-fit'>
                        <Image 
                            src={middleImg}
                            alt='Middle image'
                            className='w-full h-full'
                        />
                    </div>
                </ScrollReveal>
            </div>
            <div className='flex-1 sm:pl-0 pl-4 sm:pt-6 md:pb-24 pb-8 flex flex-col justify-between sm:items-end gap-5'>
                <div> 
                    <ScrollReveal>
                        <Typography
                            typo="header-4-medium"
                            className='pops'
                        >Contacts</Typography>
                    </ScrollReveal>
                </div>
                <div className=' flex flex-col sm:items-end gap-'>
                    <ScrollReveal>
                        <Typography
                            typo="body-medium-medium"
                            className='pops '
                        >Client Support contact</Typography>
                    </ScrollReveal>
                    <ScrollReveal>
                        <Typography
                            typo="body-medium-light"
                            className='pops'
                        >Clientsupport@codersclutch.com</Typography>
                    </ScrollReveal>
                </div>
                <div className='pb-2 flex flex-col sm:items-end gap-'>
                    <ScrollReveal>
                        <Typography
                            typo="body-medium-medium"
                            className='pops'
                        >General Enguiry</Typography>
                    </ScrollReveal>
                    <ScrollReveal>
                        <Typography
                            typo="body-medium-light"
                            className='pops'
                        >Info@codersclutch.com</Typography>
                    </ScrollReveal>
                </div>
                <div className='flex flex-col sm:items-end gap-'>
                    <ScrollReveal>
                        <Typography
                            typo="body-medium-medium"
                            className='pops '
                        >Coders Clutch Transnational Incorporated</Typography>
                    </ScrollReveal>
                    <ScrollReveal>
                        <Typography
                            typo="body-medium-light"
                            className='pops '
                        >OIC Highway, MSJ Plaza Off. 07-Banjul, The Gambia</Typography>
                    </ScrollReveal>
                    
                </div>
            </div>
        </section>
    </div> 
  )
}

export default MiddleFooter