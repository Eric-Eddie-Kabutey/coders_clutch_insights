'use client';
import React from 'react'
import cloudImg from "@/public/assets/images/solutions/digital-transformation/digital_cloud.png";
import aiImg from "@/public/assets/images/solutions/digital-transformation/digital_ai.png";
import enterpriseImg from "@/public/assets/images/solutions/digital-transformation/digital_enterprise.png";
import securityImg from "@/public/assets/images/solutions/digital-transformation/digital_security.png";
import solutionImg from "@/public/assets/images/solutions/digital-transformation/digital_iot-solution.png";
import experienceImg from "@/public/assets/images/solutions/digital-transformation/digital_customer_experience.png";
import productImg from "@/public/assets/images/solutions/digital-transformation/digital_product_eng.png";
import Typography from '@/components/shared/typography';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import dashed_line from "@/public/assets/images/solutions/digital-transformation/dashed-curved-line.png";


const solutions = [

  {
    id: "1",
    img: cloudImg,
    title: "Discovery & Assessment",
    sub_title: "& Assessment",
    description: `Stakeholder workshops, system audits, and requirement gathering.`,
  },
  {
    id: "2",
    img: aiImg,
    title: "Solution Architecture & Design",
    sub_title: "Architecture & Design",
    description: `Blueprinting scalable, secure, and interoperable systems.`,
  },
  {
    id: "3",
    img: enterpriseImg,
    title: "User Experience & Prototyping",
    sub_title: "& Prototyping",
    description: `Designing intuitive platforms for doctors, patients, and administrators.`,
  },
  {
    id: "4",
    img: securityImg,
    title: "Agile Development & Integration",
    sub_title: "& Integration",
    description: `Modular development with interoperability for lab systems, EHRs, and telemedicine.`,
  },
  {
    id: "5",
    img: solutionImg,
    title: "Quality Assurance & Compliance",
    sub_title: "& Compliance",
    description: `HIPAA, HL7/FHIR standards, and public sector regulatory checks.`,
  },
  {
    id: "6",
    img: experienceImg,
    title: "Deployment & Training",
    sub_title: "& Training",
    description: `National-level rollouts, training, and capacity-building programs.`,
  },
  {
    id: "7",
    img: productImg,
    title: "Support & Enhancements",
    sub_title: "& Enhancements",
    description: `Ongoing upgrades, analytics modules, and monitoring.`,
  },

]

function DigitalHealthApproach() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between gap-6'>
            <div className='flex-1 flex  flex-col justify- items-stretch'>
                <div className='lg:w-[350px] w-full inter xl:pb-4 flex flex-col justify-start gap-1 '>
                    <Typography
                        typo="header-4-light"
                    >
                        Our Approach to

                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                        className='!font-bold !leading-tight'
                    >
                        Digital Health Transformation
                    </Typography>
                    <Button
                        variant="primary"
                        className='md:block hidden w-fit mt-6 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold rounded-none shadow-md hover:shadow-2xl'
                    >
                        Let&apos;s Talk
                    </Button>
                </div>
                <div className='w-[75%] ml-auto pb-20 md:flex hidden flex-col justify-end '>
                    <div className='w-full h-fit'>
                        <Image 
                            src={dashed_line}
                            alt='Dashed line'
                            className='w-full h-fit'
                        />
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col'>
                {solutions.map((data) => (
                    <div
                        key={data.id} 
                        className='flex gap-8'
                    >
                        <div className='flex flex-col items-center'>
                            <Typography 
                                typo="body-large-semibold"
                                className='min-w-12 h-12 p-2 flex flex-col justify-center items-center bg-app-yellow-medium rounded-full'
                            >
                                {data.id}
                            </Typography>
                            <div className={`flex-1 w-0.5 h-full ${data.id !== '7' && "border-l-2 border-dashed border-app-yellow-medium"} `}></div>
                        </div>
                        <div className='py-4 flex flex-col gap-2'>
                            <Typography
                                typo="header-6-semibold"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                            >
                                {data.description}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default DigitalHealthApproach