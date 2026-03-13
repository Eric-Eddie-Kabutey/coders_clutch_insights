'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import mobileApp from "@/public/assets/images/solutions/hire-devs/mobile-app.png"
import uidesignImg from "@/public/assets/images/solutions/hire-devs/ui-design.png"
import devopsImg from "@/public/assets/images/solutions/hire-devs/devops.png"
import fullstackImg from "@/public/assets/images/solutions/hire-devs/fullstack.png"
import scrumImg from "@/public/assets/images/solutions/hire-devs/scrum_master.png"
import testingImg from "@/public/assets/images/solutions/hire-devs/testing.png"
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const digitals = [
    {
        id: "1",
        img: mobileApp,
        title: "Web and Mobile App Development",
        description: `Transform your software ideas into reality with top-notch web and mobile app development. Hire skilled 
                        remote dedicated developers for state-of-the-art and innovative digital solutions.`
    },
    {
        id: "2",
        img: uidesignImg,
        title: "UI/UX Design",
        description: `Elevate your digital presence with expert UI/UX design. Collaborate with remote designers to 
                        create intuitive, visually appealing interfaces that enhance user engagement and satisfaction.`
    },
    {
        id: "3",
        img: devopsImg,
        title: "DevOps as Service",
        description: `Optimize your workflows and boost collaboration with our DevOps expertise. Hire engineers to 
                        implement seamless integration, automate processes, and accelerate project delivery.`
    },
    {
        id: "4",
        img: fullstackImg,
        title: "Full Stack Development",
        description: `Develop versatile and scalable applications with our full stack development services. Access 
                        expertise in both frontend and backend to build cohesive solutions that meet your needs.`
    },
    {
        id: "5",
        img: scrumImg,
        title: "Scrum Masters",
        description: `Lead your projects to success with skilled Scrum Masters. Hire remote experts to facilitate 
                        agile practices, manage team dynamics, and ensure timely delivery of high-quality results.`
    },
    {
        id: "6",
        img: testingImg,
        title: "QA and Testing",
        description: `Ensure your product’s quality with our thorough QA and testing services. Rely on remote experts to 
                        detect and fix issues, delivering a polished, reliable product ready for launch.`
    },
]

function HireShapeDigital() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-6 pb-4 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Shape Digital Innovation with
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Our Remote Development Services
                </Typography>
            </div>
            <div className='w-full sm:py-8 py-4 grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                {digitals.map((data, index) => (
                    <Card key={data.id}
                        className='bg-white'
                    >
                        <CardHeader 
                            className='flex flex-col gap-2'
                        >
                            <Typography
                                typo="header-6-semibold"
                            >
                                {data.title}
                            </Typography>
                            <div className='w-16 h-[2px] bg-black'></div>
                        </CardHeader>
                        <CardContent>
                            <Typography
                                typo="body-large-regular"
                                className='!text-gray-700'
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                        <CardFooter>
                            <Image 
                                src={data.img}
                                alt={`Digital ${index+1}`}
                                className='w-full xl:h-[270px] lg:h-[200px] md:h-[250px] sm:h-[200px] xs:h-[300px] h-[250px] object-cover rounded-[1.1rem]'
                            />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default HireShapeDigital