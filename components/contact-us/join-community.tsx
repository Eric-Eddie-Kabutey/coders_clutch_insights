'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Facebook, Instagram, Linkedin, X, Youtube, Music2 } from 'lucide-react'; 
import Link from 'next/link';

const platforms = [
    {
        id: "1",
        title: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/share/1Ac742kQfm/?mibextid=wwXIfr",
        color: "bg-[#1877F2]", // Facebook blue
        textColor: "text-white"
    },
    {
        id: "2",
        title: "X",
        icon: X,
        href: "/",
        color: "bg-black", // X/Twitter black
        textColor: "text-white"
    },
    {
        id: "3",
        title: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/codersclutch?igsh=MTB1ZDNzbzk2dDhybg%3D%3D&utm_source=qr",
        color: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]", // Instagram gradient
        textColor: "text-white"
    },
    {
        id: "4",
        title: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/company/codersclutch-limited/",
        color: "bg-[#0077B5]", // LinkedIn blue
        textColor: "text-white"
    },
    {
        id: "5",
        title: "Youtube",
        icon: Youtube,
        href: "/",
        color: "bg-[#FF0000]", // YouTube red
        textColor: "text-white"
    },
    {
        id: "6",
        title: "TikTok",
        icon: Music2,
        href: "https://www.tiktok.com/@codersclutchlimited.com?_r=1&_t=ZM-92vhwFaIGoC",
        color: "bg-black",
        textColor: "text-white"
    },
]

function JoinCommunity() {
  return (
    <div className='w-full py-12'>
        <section className='md:w-[70%] w-[90%] mx-auto flex flex-col items-center gap-6'>
            <Typography
                typo="header-3-semibold"
                className='text-app-primary-deep'
            >
                Join Our Community
            </Typography>
            <Typography
                typo="body-large-medium"
                className='lg:w-[650px] mx-auto text-center text-gray-500'
            >
                Connect with us across platforms for exclusive content, updates, and behind-the-scenes looks.
            </Typography>
            <div className='xl:w-[60%] lg:w-[70%] md:w-[95%] mx-auto py-4 flex justify-center items-center gap-3 flex-wrap'>
                {platforms.map(data => (
                    <Link 
                        key={data.id}
                        href={data.href}
                        className={`w-24 h-20 flex flex-col justify-center items-center gap-2 ${data.color} ${data.textColor} rounded-xl hover:scale-105 transition-transform`}
                    >
                        <data.icon className="w-6 h-6" />
                        <Typography
                            typo="body-small-semibold"
                        >
                            {data.title}
                        </Typography>
                    </Link>
                ))}
            </div>
        </section>
    </div>
  )
}

export default JoinCommunity