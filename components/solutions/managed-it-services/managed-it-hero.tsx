'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const it_services = [
    "24/7 Network Monitoring & Support",
    "Proactive Cybersecurity Solutions",
    "Cloud Infrastructure Management",
    "Data Backup & Disaster Recovery",
    "IT Helpdesk & End-User Support",
    "Hardware & Software Maintenance"
]

function ManagedItHero() {
  return (
    <div className='managed-it-bg w-full md:py-20 py-12'>
        <div className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='xl:w-[60%] lg:w-[70%] md:w-[85%] flex flex-col md:items-start items-center xl:gap-8 gap-4 text-white'>
                <div className='xs:flex hidden flex-col'>
                    <Typography
                        typo="header-2-semibold"
                        className='md:text-left text-center'
                    >
                        Empowering Your IT 
                    </Typography>
                    <Typography
                        typo="header-2-semibold"
                        className='text-app-yellow md:text-left text-center'
                    >
                       Infrastructure with Scalable,
                    </Typography>
                    <Typography
                        typo="header-2-semibold"
                        className='md:text-left text-center'
                    >
                        Secure, and Reliable Solutions
                    </Typography>
                </div>
                <Typography
                    typo="header-2-semibold"
                    className='xs:hidden block text-center'
                >
                    Empowering Your IT <span className='text-app-yellow'>Infrastructure with Scalable, </span> Secure, and Reliable Solutions
                </Typography>
                <Typography
                    typo="body-large-medium"
                    className='text-gray-300 xs:text-left text-center !leading-relaxed'
                >
                    Coders Clutch provides expert Managed IT Services that ensure your technology infrastructure runs smoothly, 
                    securely, and efficiently, allowing you to focus on your core business.
                </Typography>
                <div className='sm:w-full w-fit mx-auto grid sm:grid-cols-2 md:gap-6 gap-3'>
                    {it_services.map((data) => (
                        <div key={data} className='flex items-center gap-4'>
                            <CircleCheckBig size={25} fill='#4D7372' />
                            <Typography>
                                {data}
                            </Typography>
                        </div>
                    ))}
                </div>
                <Button
                    variant="outline"
                    className='w-fit mt-4 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg text-white font-medium rounded-full border-2 border-white hover:border-app-primary-deep hover:bg-app-secondary'
                >
                    Let&apos;s Talk
                </Button>
            </div>
        </div>
    </div>
  )
}

export default ManagedItHero