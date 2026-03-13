'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Buildings, ChartLineUp, Coin, GlobeHemisphereEast, Lightning, ShieldCheck } from 'phosphor-react';
import React from 'react';

const product_services = [
    {
        id: "1",
        title: "Faster Service Delivery",
        icon: Lightning,
        description: `Slash turnaround times from days to minutes with automated workflows.`,
    },
    {
        id: "2",
        title: "Improved Public Trust",
        icon: ShieldCheck,
        description: `Increase civic confidence with open, responsive systems.`,
    },
    {
        id: "3",
        title: "Broader Access to Government",
        icon: GlobeHemisphereEast,
        description: `Citizens can interact with services anytime, from anywhere.`,
    },
    {
        id: "4",
        title: "Operational Cost Savings",
        icon: Coin,
        description: `Reduced need for manual paperwork, printing, and office visits.`,
    },
    {
        id: "5",
        title: "Data-Driven Governance",
        icon: ChartLineUp,
        description: `Leverage reports and analytics to inform decisions and shape policy.`,
    },
    {
        id: "6",
        title: "Inter-Agency Collaboration",
        icon: Buildings,
        description: `Seamless data sharing and coordination between government departments.`,
    }
]

function SmartGovernanceBenefits() {
  return (
    <div className='w-full md:py-32 py-20 bg-gradient-to-b from-[#D1FFFB] to-[#fff]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter pb-8 flex flex-col gap-3'>
                <Typography
                    typo="header-3-light"
                >
                    Tangible Benefits
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    for Governments & Citizens
                </Typography>
            </div>
            <div className='w-full lg:p-16 xs:p-8 p-4 grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-6 gap-3 bg-[#F7EFE1] rounded-[1.2rem]'>
                {product_services.map((data) => (
                    <Card
                        key={data.id}
                        className='group xl:px-12 px-6 xl:py-4 bg-transparent border sm:shadow-none shadow-lg border-gray-300 rounded-2xl transition-all duration-300'
                    >
                        <CardHeader className='px-0 flex flex-col gap-2'>
                            <div className='w-fit p-4 rounded-xl border border-gray-300 transition-all duration-300 group-hover:bg-app-green-text group-hover:text-white'>
                                <data.icon size={35} />
                            </div>
                            <div className='inter flex flex-col gap-2'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <div className='w-[15%] h-[1px] bg-gray-700'></div>
                            </div>
                        </CardHeader>
                        <CardContent className='px-0'>
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

export default SmartGovernanceBenefits