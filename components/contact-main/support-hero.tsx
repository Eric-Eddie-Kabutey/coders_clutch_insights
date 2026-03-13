'use client';
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Typography from '../shared/typography'

function SupportHero() {
    return (
        <div className='flex flex-col gap-8'>
            <div className='bg-gradient-to-t from-white to-[#d7f7f4]'>
                <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8'>
                    <div className='pt-12 flex items-center gap-2'>
                        <Link href="/contact-us">Contact us</Link>
                        <ChevronRight size={14} />
                        <Link href="/contact-us/support">Support</Link>
                    </div>
                    {/* <div className='w-full flex flex-col gap-4'>
                        <div className='text-center'>
                            <Typography
                                className="xl:text-5xl lg:text-4xl sm:text-3xl font-medium xs:text-3xl text-2xl text-center text-app-primary-deep"
                            >Expert <span className="text-app-secondary oleo-script">Support</span> for Your Digital Journey</Typography>

                        </div>
                        <div className='text-center w-[80%] md:w-[60%] mx-auto'>
                            <Typography
                                typo="body-large-regular"
                                className="mx-auto inter text-center text-black !text-xl"
                            >
                                Have a question or need technical assistance? Our team is here to provide the guidance and solutions you need to keep your business running smoothly.
                            </Typography>
                        </div>
                    </div> */}
                </section>
            </div>
        </div>
    )
}

export default SupportHero