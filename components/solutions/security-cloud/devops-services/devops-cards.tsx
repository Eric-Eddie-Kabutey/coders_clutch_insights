'use client';
import Typography from '@/components/shared/typography'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Clock, Lock, ShieldCheck, Users } from 'lucide-react'
import React from 'react'

const security_measures = [
  {
    id: "1",
    icon: Clock,
    content: "On-Time Delivery",
  },
  {
    id: "2",
    icon: Users,
    content: "Skilled DevOps Engineers",
  },
  {
    id: "3",
    icon: ShieldCheck,
    content: "Flexible Hiring Model",
  },
  {
    id: "4",
    icon: Lock, 
    content: "Best Security Integration",
  },
];

function DevopsCards() {
  return (
    <div className='w-full pb-32 pt-8 bg-[#f4f2ec]'>
        <section className='max-container lg:w-[85%] w-[95%] '>
            <div className='xl:w-[80%] w-full mx-auto grid sm:grid-cols-4 md:gap-8 gap-4'>
                {security_measures.map((data) => (
                    <Card key={data.id} className='py-4 flex flex-col items-center justify-center md:gap-4 gap-2 bg-white'>
                        <CardHeader>
                            <data.icon size={35} />
                        </CardHeader>
                        <CardContent className='text-center'>
                            <Typography
                                typo="body-large-medium"
                                className='text-center'
                            >
                                {data.content}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default DevopsCards