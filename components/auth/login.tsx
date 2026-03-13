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

function LoginMain() {
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
        <div className='max-w-[750px] mr-auto flex-1 bg-white'>
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
                    Log in to Coders Clutch
                </Typography>
                <form className='xs:w-[80%] w-[90%] lg:mx-0 mx-auto flex flex-col gap-5'>
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
                        className='w-full py-3 !text-sm !font-medium'
                    >
                        Log in to my account
                    </Button>
                </form>
                <div className='xs:w-[80%] w-[90%] lg:mx-0 mx-auto flex flex-col items-center gap-4 '>
                    <Typography
                        typo="body-small-regular"
                        className='text-gray-700'
                    >
                        Don&apos;t have a Squad account? <Link href="/sign-up" className='text-app-secondary'>Create account</Link>
                    </Typography>
                    <Typography
                        typo="body-small-regular"
                        className='text-gray-700'
                    >
                        Forgot your pasword? <span className='text-app-secondary'>Reset your password</span>
                    </Typography>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginMain