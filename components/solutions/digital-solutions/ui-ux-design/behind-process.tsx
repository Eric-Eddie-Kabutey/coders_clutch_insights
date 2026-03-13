'use client';
import Typography from '@/components/shared/typography';
import { Separator } from '@/components/ui/separator';
import React from 'react'
import sketchIcon from "@/public/assets/icons/behind-process/sketch.png"
import figmaIcon from "@/public/assets/icons/behind-process/figma.png"
import aiIcon from "@/public/assets/icons/behind-process/ai.png"
import psIcon from "@/public/assets/icons/behind-process/ps.png"
import xdIcon from "@/public/assets/icons/behind-process/xd.png"
import figma2Icon from "@/public/assets/icons/behind-process/simply.png"
import invisionIcon from "@/public/assets/icons/behind-process/invision.png"
import zeplinIcon from "@/public/assets/icons/behind-process/zeplin.png"
import balsmiqIcon from "@/public/assets/icons/behind-process/balsmiq.png"
import protoIcon from "@/public/assets/icons/behind-process/proto.png"
import afterEffectIcon from "@/public/assets/icons/behind-process/after-effects.png"
import mediaIcon from "@/public/assets/icons/behind-process/media.png"
import princeIcon from "@/public/assets/icons/behind-process/prince.png"
import framerIcon from "@/public/assets/icons/behind-process/framer.png"
import Image from 'next/image';

const mini_user_centrics = [
    {
        id: "1",
        icon: sketchIcon,
        name: "Sketch",
    },
    {
        id: "2",
        icon: figmaIcon,
        name: "Figma",
    },
    {
        id: "3",
        icon: aiIcon,
        name: "Adobe Illustrator",
    },
    {
        id: "4",
        icon: psIcon,
        name: "Adobe Photoshop",
    },
    {
        id: "5",
        icon: xdIcon,
        name: "Adobe XD",
    },
    {
        id: "6",
        icon: figma2Icon,
        name: "Figma",
    },
    {
        id: "7",
        icon: invisionIcon,
        name: "InVision",
    },
    {
        id: "8",
        icon: zeplinIcon,
        name: "Zeplin",
    },
    {
        id: "9",
        icon: balsmiqIcon,
        name: "Balsamiq",
    },
    {
        id: "10",
        icon: protoIcon,
        name: "Proto.io",
    },
    {
        id: "11",
        icon: afterEffectIcon,
        name: "After Effects",
    },
    {
        id: "12",
        icon: mediaIcon,
        name: "Media Encoder",
    },
    {
        id: "13",
        icon: princeIcon,
        name: "Principle",
    },
    {
        id: "14",
        icon: framerIcon,
        name: "Framer",
    },
]

const user_centrics = [
    {
        id: "1",
        title: "Static Edits",
        contents: [
            {
                id: "1",
                icon: sketchIcon,
                name: "Sketch",
            },
            {
                id: "2",
                icon: figmaIcon,
                name: "Figma",
            },
            {
                id: "3",
                icon: aiIcon,
                name: "Adobe Illustrator",
            },
            {
                id: "4",
                icon: psIcon,
                name: "Adobe Photoshop",
            },
            {
                id: "5",
                icon: xdIcon,
                name: "Adobe XD",
            },
        ]
    },
    {
        id: "2",
        title: "Tools",
        contents: [
            {
                id: "1",
                icon: figma2Icon,
                name: "Figma",
            },
            {
                id: "2",
                icon: invisionIcon,
                name: "InVision",
            },
            {
                id: "3",
                icon: zeplinIcon,
                name: "Zeplin",
            },
            {
                id: "4",
                icon: balsmiqIcon,
                name: "Balsamiq",
            },
            {
                id: "5",
                icon: protoIcon,
                name: "Proto.io",
            },
        ]
    },
    {
        id: "3",
        title: "Tools",
        contents: [
            {
                id: "1",
                icon: afterEffectIcon,
                name: "After Effects",
            },
            {
                id: "2",
                icon: mediaIcon,
                name: "Media Encoder",
            },
            {
                id: "3",
                icon: princeIcon,
                name: "Principle",
            },
            {
                id: "4",
                icon: framerIcon,
                name: "Framer",
            },
        ]
    },
]

function BehindProcess() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='inter max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto xl:pb-12 pb-10 flex flex-col gap-2'>
            <Typography
                typo="header-3-light"
            >
                Behind the Process
            </Typography>
            <Typography
                typo="header-3-semibold"
                className='!font-bold'
            >
                Our Go-To Tools for User-Centric Designs
            </Typography>
        </section>
        <Separator 
            className=' border-b-2 border-dashed border-gray-400'
        />

        <section className='w-full relative py-8'>
            <div className='max-container 2xl:w-[85%] w-[95%] mx-auto lg:grid hidden grid-cols-3 gap-6 z-[10]'>
                {
                    user_centrics.map((data) => (
                        <div  
                            className='flex flex-col gap-6'
                            key={data.id}
                        >
                            <Typography
                                typo="header-6-semibold"
                            >
                                {data.title}
                            </Typography>
                            <div className='flex flex-col gap-3'>
                                {data.contents.map((data, index) => (
                                <div 
                                    key={data.id}
                                    className={`w-[300px] py-1 px-4 flex items-center gap-3 bg-black rounded-[1.3rem] text-white z-[10] ${
                                    index === 0 ? "ml-0" :
                                    index === 1 ? "ml-4" :
                                    index === 2 ? "ml-8" :
                                    index === 3 ? "ml-12" :
                                    "ml-16"
                                  }`}>
                                    
                                    <div className='w-12 h-fit z-[10]'>
                                        <Image 
                                            src={data.icon}
                                            alt={`Icon ${index+1}`}
                                            className='w-full h-full'
                                        />
                                    </div>
                                    <Typography
                                        typo="body-large-medium"
                                        className='z-[10]'
                                    >{data.name}</Typography>
                                    <Separator 
                                        className='absolute right-0 left-0 w-full border-b-2 border-dashed border-black z-[1]'
                                    />
                                </div>
                                ))}
                            </div> 
                        </div>
                    ))
                }
            </div>
            <div className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto lg:hidden grid grid-cols-3 gap-8 overflow-auto'>
                {mini_user_centrics.map((data, index) => (
                    <div 
                        key={data.id}
                        className={`w-[250px] py-1 px-4 flex items-center gap-3 bg-black rounded-[1.3rem] text-white`}>
                        
                        <div className='w-12 h-fit z-[10]'>
                            <Image 
                                src={data.icon}
                                alt={`Icon ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <Typography
                            typo="body-large-medium"
                            className='z-[10]'
                        >{data.name}</Typography>
                        
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default BehindProcess