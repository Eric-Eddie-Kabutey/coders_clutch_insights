'use client';
import ScrollReveal from '@/components/reusable/scroll-reveal';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { careers } from '@/constant/overview';
import { Clock, MapPin, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const departments = [
  "Engineering & AI",
  "Information Technology",
  "Marketing and Communication",
  "Data Science & Analytics",
  "Research & Reporting",
  "Government & Public Sector",
  "Specialist",
  "Sales and Distribution",
  "Robotics and IoT",
  "Legal & Compliance",
  "Mentorship and Tutoring"
];


function JoinUs() {
    const [isAll, setIsAll] = useState(false);
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");


    const filteredCareers = careers.filter(career => {
        const matchesSearch = career.role.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            career.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment = selectedDepartment ? career.department === selectedDepartment : true;
        return matchesSearch && matchesDepartment;
    });

    const displayAll = isAll ? filteredCareers : filteredCareers.slice(0, 4);
    const toggleDisplay = () => {
        setIsAll(!isAll)
    }
  return (
    <div className='w-full py-12 bg-[#F6FAFD]'>
        <section className='max-container sm:w-[85%] xs:w-[90%] w-[90%] mx-auto'>
            <ScrollReveal>
                <div className='w-fit mx-auto text-center pb-6 flex flex-col gap-2'>
                    <Typography
                        typo="header-4-semibold"
                    >
                        Join Us
                    </Typography>
                    <div className='w-12 mx-auto h-[1px] bg-black'></div>
                </div>
            </ScrollReveal>
            

            <div className='w-full py-8 px-6 flex flex-col gap-4 bg-white rounded-xl shadow-md'>
                <div className='flex flex-col md:flex-row gap-4 mb-6'>
                    <div className='relative flex-1'>
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={18} />
                        <Input
                            type='text'
                            placeholder='Search by role or company...'
                            className='pl-10 py-6 outline-none focus:outline-none focus:ring-0'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        className='border rounded-md px-4 py-2 outline-none focus:outline-none focus:ring-0'
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                    >
                        <option value="">All Departments</option>
                        {departments.map((dept) => (
                            <option key={dept} value={dept} className='text-gray-500 font-light border border-red-600'>{dept}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <ScrollReveal>
                        <Typography
                            typo="header-5-semibold"
                            className=''
                        >Current Openings</Typography>
                    </ScrollReveal>
                    <ScrollReveal>
                        <Typography
                            typo="body-medium-light"
                        >
                            Thanks for checking out our job openings. See something that interests you? Apply here.
                        </Typography>
                    </ScrollReveal>
                </div>
                <Separator className='h-[0.5px] bg-gray-400' />
                {filteredCareers.length > 0 ? (
                    <div className='flex flex-col gap-8'>
                        <div className='w-full md:px-6 grid md:grid-cols-2 gap-6'>
                            {displayAll.map((data, index) => (
                                <ScrollReveal key={data.id} delay={index * 0.15}>
                                    <Card className='hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-lg overflow-hidden'>
                                        <CardHeader className='pb-2 flex flex-row justify-between'>
                                            <div className='flex flex-col gap-2'>
                                                <Typography typo="header-5-semibold" className='text-app-primary-deep'>
                                                    {data.role}
                                                </Typography>
                                                <Typography typo="body-medium-medium" className='text-gray-600'>
                                                    {data.company}
                                                </Typography>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <MapPin size={18} className='text-gray-500' />
                                                <Typography typo="body-medium-regular">
                                                    {data.location}
                                                </Typography>
                                            </div>
                                        </CardHeader>
                                        <CardContent className='space-y-3'>
                                        
                                            <div className='flex items-center gap-3'>
                                                <Clock size={18} className='text-gray-500' />
                                                <Typography typo="body-medium-regular">
                                                    {data.time}
                                                </Typography>
                                            </div>
                                            {/* <div className='flex items-center gap-3'>
                                                <UsersRound size={18} className='text-gray-500' />
                                                <Typography typo="body-medium-regular">
                                                    {data.salary}
                                                </Typography>
                                            </div> */}
                                        </CardContent>
                                        <CardFooter className='flex justify-between pt-4 border-t border-gray-100'>
                                            <Button variant="outline" className='border-app-primary-deep text-app-primary-deep hover:bg-app-primary-light hover:text-white'>
                                                Save
                                            </Button>
                                            <Button 
                                                variant="primary"
                                                onClick={() => {
                                                    router.push(`/about/careers/${data.slug}`);
                                                }}
                                                className='bg-app-primary-deep hover:bg-app-primary-light'
                                            >
                                                Apply Now
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </ScrollReveal>
                            ))}
                            
                        </div>
                        <ScrollReveal>
                            <Button
                                variant="outline"
                                onClick={toggleDisplay}
                                className='w-fit mx-auto'
                            >{isAll ? "See less" : "See more"} </Button>
                        </ScrollReveal>
                    </div>
                ) : (
                    <div className='flex flex-col gap-2 text-center py-12 bg-white rounded-lg shadow-sm'>
                        <ScrollReveal>
                            <Typography typo="header-5-medium" className='text-gray-600 mb-2'>
                                No matching jobs found
                            </Typography>
                        </ScrollReveal>
                        <ScrollReveal>
                            <Typography typo="body-medium-regular" className='text-gray-500'>
                                Try adjusting your search or filter criteria
                            </Typography>
                        </ScrollReveal>
                    </div>
                )}
                
            </div>
        </section>
    </div>
  )
}

export default JoinUs