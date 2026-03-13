'use client';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

function BottomNav() {
    const router = useRouter();
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const firstSectionHeight = window.innerHeight * 0.3;
        if (window.scrollY > firstSectionHeight) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  if (!showNav) return null;
    
  return (
    <div className='sm:hidden block w-full px-4 py-2 bg-white sticky bottom-0 z-50'>
        <Button
            variant="primary"
            size="lg"
            onClick={() => router.push("/contact-us")}
            className='w-full py-3'
        >
            Get a Quote
            <ArrowRight />
        </Button>
    </div>
  )
}

export default BottomNav