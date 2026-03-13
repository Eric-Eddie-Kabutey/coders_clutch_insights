'use client';
import React from 'react';
import loginImg from "@/public/assets/images/world-of-payment.jpg";
import Image from 'next/image';
import Typography from '../shared/typography';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import logo from "@/public/assets/images/coders_logo.png";


function Signup() {
  return (
    <div className='w-full h-[100vh] flex justify-between items-center overflow-hidden'>
        <div className=' hidden w-[47%] h-full lg:flex flex-col justify-center items-center bg-[#2F3031]'>
            <div className='mt-12 max-w-[800px] w-[90%] max-h-[800px] h-[85%]'>
                <Image 
                    src={loginImg}
                    alt='Login image'
                    className='w-full h-full object-cover rounded-xl transition-all duration-500 ease-out hover:scale-105'
                />
            </div>
        </div>
        <div className='max-w-[750px] h-full mr-auto lg:py-0 xs:py-6 pt-12 flex-1 flex flex-col justify-center bg-white overflow-auto'>
            <div className='lg:hidden block xs:w-[200px] w-[150px] h-fit mx-auto mb-8'>
                <Image 
                    src={logo}
                    alt='Coders logo image'
                    className='w-full h-full'
                />
            </div>
            <div className='xl:w-[75%] lg:w-[85%] sm:w-[75%] xs:w-[90%] mx-auto flex flex-col gap-4'>
                <Typography
                    typo="header-4-semibold"
                    className='pops !font-bold lg:text-left text-center'
                >
                    Create your free account
                </Typography>
                <form className='xs:w-[80%] w-[90%] lg:mx-0 mx-auto flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="fullname" className="text-[15px] font-medium text-gray-700 dark:text-gray-300">
                            Full name
                        </Label>
                        <Input
                            id="fullname"
                            type="text"
                            placeholder="Type your company email address"
                            className="w-full h-12 text-lg border-gray-300 dark:border-gray-600 outline-none focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="business-name" className="text-[15px] font-medium text-gray-700 dark:text-gray-300">
                            Business name
                        </Label>
                        <Input
                            id="business-name"
                            type="text"
                            placeholder="Type your company email address"
                            className="w-full h-12 text-lg border-gray-300 dark:border-gray-600 outline-none focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="email" className="text-[15px] font-medium text-gray-700 dark:text-gray-300">
                            Email address
                        </Label>
                        <Input
                            id="email"
                            type="text"
                            placeholder="Type your company email address"
                            className="w-full h-12 text-lg border-gray-300 dark:border-gray-600 outline-none focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="password" className="text-[15px] font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="text"
                            placeholder="Enter your password"
                            className="w-full h-12 text-lg border-gray-300 dark:border-gray-600 outline-none focus:outline-none focus:ring-0"
                        />
                    </div>
                    <Button
                        variant="primary"
                        className='w-full !text-sm !font-medium'
                    >
                        Log in to my account
                    </Button>
                </form>
                <div className='xs:w-[80%] w-[90%] lg:mx-0 mx-auto flex flex-col items-center gap-4 '>
                    <Typography
                        typo="body-small-regular"
                        className='text-gray-700'
                    >
                        Already have a Squad account? <Link href="/login" className='text-app-secondary'>Log in </Link>
                    </Typography>
                    <div className='flex flex-col items-center gap-1'>
                        <Typography
                            typo="body-small-regular"
                            className='text-gray-700'
                        >
                            By clicking Create My Free Account, you agree to
                        </Typography>
                        <Typography
                            typo="body-small-regular"
                            className='text-app-secondary'
                        >
                            Squad&apos;s Terms and Privacy Policy
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup