'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChartPieSlice, Scales, ShieldWarning, ClipboardText, Tree, Recycle } from '@phosphor-icons/react';
import React from 'react'

const product_services = [
    {
        id: "1",
        icon: ShieldWarning,
        title: "Proactive Environmental Protection",
        description: `Identify and address issues before they become crises.`,
    },
    {
        id: "2",
        icon: ChartPieSlice,
        title: "Community Transparency",
        description: `Share live data with citizens to foster awareness.`,
    },
    {
        id: "3",
        icon: Scales,
        title: "Sustainability Policy Support",
        description: `Use evidence to shape impactful environmental policies.`,
    },
    {
        id: "4",
        icon: ClipboardText,
        title: "Improved Regulatory Compliance",
        description: `Simplify reporting and exceed environmental standards.`,
    },
     {
        id: "5",
        icon: Tree,
        title: "Urban Green Infrastructure",
        description: `Plan and monitor parks, green roofs, and carbon-absorbing landscapes.`,
    },
    {
        id: "6",
        icon: Recycle,
        title: "Circular Economy Solutions",
        description: `Waste-to-resource platforms for businesses and municipalities.`,
    }
]

function EnvironmentalBenefits() {
  return (
    <div className='w-full md:py-32 py-20 bg-white'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Benefits for
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Government & Planet
                </Typography>
            </div>

            <div className='w-full lg:p-16 xs:p-8 p-4 grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-6 gap-3 bg-[#F7EFE1] rounded-[1.2rem]'>
                {product_services.map((data) => (
                    <Card
                        key={data.id}
                        className='group xl:px-12 px-6 xl:py-4 bg-transparent border sm:shadow-none shadow-lg border-gray-300 rounded-2xl transition-all duration-300'
                    >
                        <CardHeader className='px-0 flex flex-col gap-2'>
                            <div className='w-fit p-3 rounded-xl border border-gray-300 transition-all duration-300 group-hover:bg-app-green-text group-hover:text-white'>
                                <data.icon size={30} />
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

export default EnvironmentalBenefits