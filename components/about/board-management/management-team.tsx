'use client'
import Typography from '@/components/shared/typography'
import Image from 'next/image'
import React from 'react';
import linkedIcon from "@/public/assets/icons/career_icons/linkedin.svg";
import defaultImg from "@/public/assets/images/about/team/vecteezy_simple-user-default-icon_24983914.png"
import balaImg from "@/public/assets/images/about/team/kabutey_img.jpg"
import thiayaImg from "@/public/assets/images/about/team/dushie_img.png"
import saravanaImg from "@/public/assets/images/about/team/jallow_img.jpeg"
import vijayImg from "@/public/assets/images/about/team/amavi_img.jpeg"
import rajagoImg from "@/public/assets/images/about/team/kabutey_img.jpg"
import venkateshImg from "@/public/assets/images/about/team/richard_img.jpeg"
import selvaImg from "@/public/assets/images/about/team/silla_img.jpg"
import nirmalImg from "@/public/assets/images/about/team/jallow_img.jpeg"

const team_members = [
    {
        id: "7",
        name: "Rajagopal",
        is_board: false,
        title: "Director - Product Development",
        img: defaultImg,
    },
    {
        id: "8",
        name: "Venkateshwaran",
        is_board: false,
        title: "Head of DevOps",
        img: venkateshImg,
    },
    {
        id: "9",
        name: "Selvakumar",
        is_board: false,
        title: "Associate Director - Product Development",
        img: selvaImg,
    },
    {
        id: "10",
        name: "Nirmal Kumar",
        is_board: false,
        title: "Associate Director - Product Development",
        img: nirmalImg,
    },
    {
        id: "11",
        name: "Balamurugan",
        is_board: false,
        title: "Vice President - Product Design",
        img: defaultImg,
    },
    {
        id: "12",
        name: "Thiaghu",
        is_board: false,
        title: "VP - Hr & Admin",
        img: thiayaImg,
    },
    {
        id: "13",
        name: "Saravana Kumar",
        is_board: false,
        title: "Director Finance",
        img: saravanaImg,
    },
    {
        id: "14",
        name: "Vijay Kumar",
        is_board: false,
        title: "Associate Vice President - HR",
        img: vijayImg,
    },
]

function ManagementTeam() {
  return (
    <div className='w-full'>
        <div className='w-full xl:pt-8 xs:pt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xs:gap-8 gap-4'>
                {team_members.map((data, index) => (
                    <div 
                        className=''
                        key={data.id}
                    >
                        <div className='w-full'>
                            <Image
                                src={data.img}
                                alt={`${data.name} ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='w-full xs:pt-5 pt-3 flex flex-col space-y-1'>
                            <div className='w-full flex justify-between items-center gap-3'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.name}
                                </Typography>
                                <div className='w-6 h-fit'>
                                    <Image
                                        src={linkedIcon}
                                        alt='LinkedIn'
                                        className='w-full h-full'
                                    />
                                </div>
                            </div>
                            <Typography
                                typo="body-medium-medium"
                                className='text-gray-500'
                            >
                                {data.title}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default ManagementTeam