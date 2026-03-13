'use client';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import React from 'react'

const service_operations = [
    {
        id: "1",
        title: "Project Discovery",
        description: `Identify your challenges and opportunities with our detailed discovery phase.Set the stage with a 
                        specialized DevOps services company.`,
    },
    {
        id: "2",
        title: "Planning",
        description: `Develop a comprehensive plan that aligns with your business goals. Focus on efficiency, scalability, 
                        and security in your DevOps journey.`,
    },
    {
        id: "3",
        title: "Creating Roadmap",
        description: `Outline a clear, actionable roadmap detailing step-by-step processes to achieve your DevOps services 
                        transformation with precision and clarity.`,
    },
    {
        id: "4",
        title: "Execution",
        description: `Implement the devised strategy with meticulous execution. Leverage cutting-edge tools and practices to 
                        enhance your operations and delivery.`,
    },
]

function OperationStrategy() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Move with a Clear-cut
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Devops Services Operations Strategy Ahead
                </Typography>
            </div>
            <div className='w-full md:pt-8 pt-3 px-6 flex flex-col justify-center items-center space-y-8'>
                <div className='w-full grid xl:grid-cols-4 md:grid-cols-2 gap-2'>
                    {service_operations.map((data) => (
                        <div key={data.id} className='flex flex-col gap-3'>
                            <div className='flex md:flex-row flex-col md:items-center'>
                                <Typography 
                                    typo="header-1-semibold"
                                    className='w-fit text-[#108D52]'
                                >{data.id}</Typography>
                                <div className='md:flex-1 border-b-2 border-dashed border-gray-400'></div>
                            </div>
                            <div className='sm:w-[80%] flex flex-col gap-4'>
                                <Typography
                                    typo="header-5-semibold"
                                >{data.title}</Typography>
                                <Typography
                                    typo="body-medium-medium"
                                >
                                    {data.description}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>

                <Button
                    variant="primary"
                    className='font-medium !px-6'
                >
                    Book A 30 Mins Call
                </Button>
            </div>
        </section>
    </div>
  )
}

export default OperationStrategy