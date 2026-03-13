'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { best_bet } from '@/constant';
import React from 'react'

function AiBestBet() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Why We are Your
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Best Bet for AI Software Development
                </Typography>
            </div>
            <div className='w-full py-4 grid lg:grid-cols-3 xs:grid-cols-2 md:gap-8 gap-4'>
                {best_bet.map((data) => (
                    <Card
                        key={data.id}
                        className='md:p-4 bg-[#F7EFE1]  border-none shadow-none'
                    >
                        <CardHeader className='flex flex-col gap-'>
                            <Typography 
                                typo="header-6-semibold"
                                className='!leading-none'
                            >
                                {data.title}
                            </Typography>
                            <Typography 
                                typo="header-6-semibold"
                            >
                                {data.sub_title}
                            </Typography>
                        </CardHeader>
                        <CardContent>
                            <Typography
                                typo="body-medium-medium"
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default AiBestBet