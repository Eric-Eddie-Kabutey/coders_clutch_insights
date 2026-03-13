'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import lawAgency from "@/public/assets/images/security-cloud/forensic-bg.jpg"
import legalFirm from "@/public/assets/images/security-cloud/banking.png"
import government from "@/public/assets/images/security-cloud/healthcare.png"
import financial from "@/public/assets/images/security-cloud/dedicated-team.png"
import healthcare from "@/public/assets/images/security-cloud/healthcare.png"
import utilityImg from "@/public/assets/images/security-cloud/media.png"
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const institutions = [
    {
        id: "1",
        img: lawAgency,
        title: "Law Enforcement Agency",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores impedit harum, expedita quasi ab assumenda veritatis voluptates hic temporibus cupiditate?`
    },
    {
        id: "2",
        img: legalFirm,
        title: "Legal Firms",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores impedit harum, expedita quasi ab assumenda veritatis voluptates hic temporibus cupiditate?`
    },
    {
        id: "3",
        img: government,
        title: "Government Organizations",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores impedit harum, expedita quasi ab assumenda veritatis voluptates hic temporibus cupiditate?`
    },
    {
        id: "4",
        img: financial,
        title: "Financial Institutions",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores impedit harum, expedita quasi ab assumenda veritatis voluptates hic temporibus cupiditate?`
    },
    {
        id: "5",
        img: healthcare,
        title: "Healthcare Sector",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores impedit harum, expedita quasi ab assumenda veritatis voluptates hic temporibus cupiditate?`
    },
    {
        id: "6",
        img: utilityImg,
        title: "Utility Sectors",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores impedit harum, expedita quasi ab assumenda veritatis voluptates hic temporibus cupiditate?`
    },
]

function ForensicsInstitutions() {
  return (
    <div className='w-full py-16 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8'>
            <Typography
                typo="header-4-semibold"
                className='public'
            >
                Institutions We Work For 
            </Typography>

            <div className='w-full lg:py-8 py-3 grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-4'>
                {institutions.map((data, index) => (
                    <Card key={data.id}>
                        <div className='w-full lg:h-[250px] sm:h-[200px] h-[300px]'>
                            <Image 
                                src={data.img}
                                alt={`Institution ${index+1} ${data.title}`}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <CardHeader className='lg:pb-4 pb-2'>
                            <Typography
                                typo="header-6-semibold"
                            >
                                {data.title}
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

export default ForensicsInstitutions