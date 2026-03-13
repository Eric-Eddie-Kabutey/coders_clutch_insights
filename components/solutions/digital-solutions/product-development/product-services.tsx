'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

const product_services = [
    {
        id: "1",
        title: "Product",
        sub_title: "Consulting",
        description: `Experience seamless software product engineering from start to finish. We cover research, development, 
                        testing, deployment, and ongoing support to ensure your software’s success.`,
    },
    {
        id: "3",
        title: "Product Design ",
        sub_title: "& Engineering",
        description: `Our pre-built frameworks drive rapid growth, enabling the creation of consistent learning experiences. 
                        They adapt seamlessly to any design, duration, timeline, and learning objective.`,
    },
    {
        id: "4",
        title: "MVP ",
        sub_title: "Development",
        description: `Our certified consultants excel in developing Minimum Viable Products using the latest technologies, 
                        ensuring only the top 5% of talent works on your projects for superior results.`,
    },
    {
        id: "5",
        title: "Product",
        sub_title: "Modularization",
        description: `Revitalize your product with our re-engineering expertise. We address defects, enhance features, 
                        and minimize downtime, ensuring optimal performance that meets contemporary market needs.`,
    },
    {
        id: "6",
        title: "QA ",
        sub_title: "& Testing",
        description: `Testing digital products is complex and time-consuming in a mobile-driven world. Our comprehensive QA 
                            strategies ensure thorough validation, helping you maintain product quality and reliability.`,
    },
    {
        id: "8",
        title: "Product Support",
        sub_title: "& Maintenance",
        description: `Our dedicated team provides support and maintenance, ensuring your custom product operates smoothly. 
                        We deliver timely updates and proactive solutions for 100% enhanced user experiences.`,
    },
]

function ProductServices() {
  return (
    <div className='w-full md:py-32 py-20 bg-gradient-to-t to-white from-[#d7f7f4]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Our Services
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    A Custom Product Development Service for Data-driven Growth
                </Typography>
            </div>

            <div className='w-full md:py-6 grid lg:grid-cols-3 sm:grid-cols-2 md:gap-12 gap-6'>
                {
                    product_services.map((data) => (
                        // <div key={data.id} className='flex flex-col gap-3'>
                        //     <div className='flex flex-col gap-3'>
                        //         <Typography
                        //             typo="header-6-semibold"
                        //         >
                        //             {data.title}
                        //         </Typography>
                        //         <div className='w-12 h-[3px] bg-app-green-text'></div>
                        //     </div>
                        //     <Typography
                        //         className='!text-lg !font-normal'
                        //     >
                        //         {data.description}
                        //     </Typography>
                        // </div>
                        <Card key={data.id} className=' rounded-[1.3rem] bg-[#F8F8F8] border-l-[3px] border-t-[3px] border-r-0 border-b-0 border-green-500'>
                            <CardHeader className=' pb-3 flex flex-col gap-2'>
                                <div className=' flex items-center gap-2 '>
                                    <CardTitle
                                        className='text-xl inter'
                                    >{data.title}</CardTitle>
                                    <CardTitle
                                        className='text-xl inter'
                                    >{data.sub_title}</CardTitle>
                                </div>
                                <div className='w-12 h-[3px] bg-app-green-text'></div>
                            </CardHeader>
                            <CardContent className='pb-6'>
                                <CardDescription
                                    className='text-base text-black'
                                >{data.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default ProductServices