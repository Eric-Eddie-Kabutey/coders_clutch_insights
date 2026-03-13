'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { careers } from '@/constant/overview';
import { ChevronLeft, Facebook, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation';
import React from 'react'


function CareerDetail() {
    const { slug } = useParams();
    const pathname = usePathname();
    const fullUrl = typeof window !== "undefined" ? window.location.origin + pathname : pathname;
    const career = careers.find(c => c.slug === slug);
    const role_positions = career?.about_role;

  return (
    <div className='w-full py-12 bg-[#f6f6f4]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%]  mx-auto flex lg:flex-row flex-col justify-between gap-6 '>
            <div className='flex-1 p-6 flex flex-col gap-4 bg-white rounded-lg'>
                <div className='flex flex-col gap-4'>
                    <Link href="/about/careers" className='w-fit flex items-center gap-2 text-app-green-text'>
                        <ChevronLeft />
                        <Typography
                            typo="body-medium-light"
                        >
                            Job Openings
                        </Typography>
                    </Link>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="header-5-semibold"
                            className='plusJak !font-bold text-app-primary-light'
                        >{career?.role}</Typography>
                        <Typography
                            typo="body-medium-regular"
                        >
                            {career?.department} - {career?.location}
                        </Typography>
                    </div>
                </div>
                <Separator className='h-[0.5px] bg-gray-400' />
                <div className='times w-full py-5 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="body-medium-semibold"
                        >
                            About the Role
                        </Typography>
                        <Typography
                            typo="body-medium-regular"
                        >
                            {role_positions?.about}
                        </Typography>
                    </div>
                    {role_positions?.skill.map((data) => (
                        <div key={data.res_id} className='pt-3 flex flex-col gap-3'>
                            <Typography
                                typo="body-medium-semibold"
                            >{data.title}</Typography>
                            <div className='pl-8'>
                                <ul className=' list-disc list-inside'>
                                    {data.res_items && (
                                        data?.res_items?.map(item => (
                                            <li key={item}>
                                                {item}
                                            </li>
        
                                        ))
                                    )}
                                    {data.contents && (
                                        data?.contents?.map(item => (
                                            <Typography key={item}>
                                                {item}
                                            </Typography>
        
                                        ))
                                    )}
                                    {data?.sub_res?.map(res => (
                                        <div key={res.id} className='pt-1 flex flex-col gap-2'>
                                            <Typography
                                                typo="body-medium-semibold"
                                            >{res.title}</Typography>
                                            {res.title === "Why work for us?" ? (
                                                <div className='flex flex-col gap-4'>
                                                    {res.contents.map(content => (
                                                        <Typography
                                                            key={content}
                                                            typo="body-medium-regular"
                                                            className='!leading-normal'
                                                        >{content}</Typography>
                                                    ))}
                                                </div>
                                            ) : (
                                                <ul className='list-disc list-inside'>
                                                    {res.contents.map(content => (
                                                        <li key={content}>{content}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='lg:w-[300px] w-full h-fit flex lg:flex-col sm:flex-row flex-col gap-6'>
                <div className='lg:w-full flex-1 p-6 flex flex-col gap-5 bg-white rounded-lg'>
                    <Button
                        variant="primary"
                        className='w-full bg-app-primary-deep rounded-full'
                    >
                        Apply for this Job
                    </Button>
                    <Separator className='bg-gray-300' />
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="body-medium-medium"
                            className='text-gray-500'
                        >Link to This Job</Typography>
                        <div className="w-full p-2 text-sm border rounded-full overflow-x-auto">
                            <div className="w-fit px-2 whitespace-nowrap">{fullUrl}</div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <Link href="/#" 
                            className='p-2 rounded-full border border-gray-400'
                        >
                            <Linkedin size={16} />
                        </Link>
                        <Link href="/#" 
                            className='p-2 rounded-full border border-gray-400'
                        >
                            <Twitter size={16} />
                        </Link>
                        <Link href="/#" 
                            className='p-2 rounded-full border border-gray-400'
                        >
                            <Facebook size={16} />
                        </Link>
                    </div>
                </div>

                <div className='lg:w-full flex-1 px-3 flex flex-col text-gray-600'>
                    <div className='rale py-2 flex flex-col gap- border-b border-gray-400'>
                        <Typography
                            typo="body-medium-medium"
                        >Location</Typography>
                        <Typography
                            typo="body-medium-semibold"
                            
                        >{career?.location}</Typography>
                    </div>
                    <div className='rale py-2 flex flex-col gap- border-b border-gray-400'>
                        <Typography
                            typo="body-medium-medium"
                        >Department</Typography>
                        <Typography
                            typo="body-medium-semibold"
                            
                        >{career?.department}</Typography>
                    </div>
                    <div className='rale py-2 flex flex-col gap- border-b border-gray-400'>
                        <Typography
                            typo="body-medium-medium"
                        >Employment Type</Typography>
                        <Typography
                            typo="body-medium-semibold"
                            
                        >{career?.time}</Typography>
                    </div>
                    {career?.min_experience && (
                        <div className='rale py-2 flex flex-col gap- border-b border-gray-400'>
                            <Typography
                                typo="body-medium-medium"
                            >Minimum Experience</Typography>
                            <Typography
                                typo="body-medium-semibold"
                                
                            >{career?.min_experience}</Typography>
                        </div>
                    )}
                </div>
            </div>
        </section>
    </div>
  )
}

export default CareerDetail