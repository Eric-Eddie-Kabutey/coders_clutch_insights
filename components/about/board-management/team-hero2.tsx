'use client';
import Typography from '@/components/shared/typography'
import React, { useEffect, useState } from 'react'

function TeamHero2() {
    const fullText = "Welcome to our team of code warriors, where innovation meets precision and challenges spark creativity.";
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const typingSpeed = 50;

    useEffect(() => {
        if (displayedText.length < fullText.length) {
          const timeout = setTimeout(() => {
            setDisplayedText(fullText.substring(0, displayedText.length + 1));
          }, typingSpeed);
    
          return () => clearTimeout(timeout);
        } else {
          const cursorTimeout = setTimeout(() => {
            setShowCursor(false);
          }, 500);
          return () => clearTimeout(cursorTimeout);
        }
      }, [displayedText, fullText]);
    
  return (
    <div className='w-full h-[75vh]'>
        <section className='max-container 2xl:w-[65%] md:w-[95%] w-[90%] h-full mx-auto flex flex-col justify-center gap-3'>
            <Typography
                typo="header-1-semibold"
                className='text- text-center bg-gradient-to-r from-[#F25E20] to-[#E426A0] bg-clip-text text-transparent'
            >
                {displayedText}
                {showCursor && <span className="animate-pulse">|</span>}
            </Typography>
        </section>
    </div>
  )
}

export default TeamHero2