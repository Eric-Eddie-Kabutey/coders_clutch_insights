'use client';
import { X } from 'lucide-react'
import React, { useState } from 'react'
import Typography from './typography'

function NavBanner() {
    const [isOff, setIsOff] = useState(false);

    return (
        <div className={` hidden w-full py-2 px-4 md:flex justify-between items-center ${isOff ? "hidden" : "block"} bg-[#1870BA]`}>
            <div></div>
            <div className=' overflow-hidden'>
                <div className='w-fit flex flex-row justify-center items-center sm:gap-4 gap-2 flex-nowrap text-white animate-marquee'>
                    <Typography
                        typo="body-medium-medium"
                        className='text-center whitespace-nowrap'
                    >
                        Coder Clutch Launch: JOGNO G7 AI a Generative AI built in The Gambia for Africa&apos;s (Governments, Defense, Telecom, Fintech, Mobility)  Launch Date: 7th December 2025/12pm (UTC)
                    </Typography>
                    {/* <Typography
                        typo="body-medium-medium"
                        className='md:px-4 px-3 md:py-2 py-1 md:!text-sm !text-[12px] bg-white/30 rounded-xl uppercase whitespace-nowrap'
                    >
                        Estimate now!
                    </Typography> */}
                </div>
            </div>
            <button 
                onClick={() => setIsOff(true)}
                className='w-fit p-2 rounded-sm bg-white/40'
            >
                <X color='white' size={18} />
            </button>
        </div>
    );
}

export default NavBanner;
