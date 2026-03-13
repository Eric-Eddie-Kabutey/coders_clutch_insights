'use client';
import ScrollReveal from '@/components/reusable/scroll-reveal';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'
import React from 'react';

function SeeResults() {
  return (
    <Card className='w-full py-12 bg-app-primary '> 
        <CardContent className='md:w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center gap-8'>
            <ScrollReveal>
                <div className='md:flex hidden flex-col text-white'>
                    <Typography
                        typo="header-2-semibold"
                    >
                        Ready to See the Results?
                    </Typography>
                    <Typography
                        typo="header-2-semibold"
                    >
                        Start Your PoC Now!
                    </Typography>
                </div>
            </ScrollReveal>
            <ScrollReveal>
                <div className='md:hidden text-white text-center'>
                    <Typography
                        className='!text-3xl font-bold'
                    >
                        Ready to See the Results? {""}
                    </Typography>
                    <Typography
                        className='!text-3xl text-center font-bold'
                    >
                        Start Your PoC Now!
                    </Typography>
                </div>
            </ScrollReveal>
            <ScrollReveal>
                <Button
                    variant="primary"
                    className='text-lg'
                >
                    Request Your PoC Today!
                </Button>
            </ScrollReveal>
        </CardContent>
    </Card>
  )
}

export default SeeResults