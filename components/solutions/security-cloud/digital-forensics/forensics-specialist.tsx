'use client'
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'
import { useForm } from 'react-hook-form';

const inquiries = ["General Information", "What we do", "Business Inquiry", "Partnership", "Media Inquiry", "Program Information", "Other"]


function ForensicsSpecialist() {
    const form = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            type_of_aid: "",
            contact_info: "",
            description: "",
        },
    });
  return (
    <div className='forensic-form w-full py-20'>
        <section className='rale max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8'>
            <Typography
                typo="header-4-semibold"
                className='text-white'
            >
                Speak with a Forensic Specialist
            </Typography>
            <div className='pb-'>
                <Form {...form}>
                    <form className='flex flex-col lg:gap-6 sm:gap-10 gap-3'>
                        <div className='flex sm:flex-row flex-col justify-between items-center sm:gap-5 gap-8'>
                            <FormField
                                control={form?.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem className='sm:flex-1 w-full flex flex-col gap-0'>
                                        <FormControl className="py-">
                                            <Input className="!py-6 text-gray-500 rounded-[0.5rem] bg-white border-gray-300" placeholder="Enter your full name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form?.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem
                                        className='sm:flex-1 w-full flex flex-col gap-0'
                                    >
                                    <FormControl className=" ">
                                        <Input className="!py-6 text-gray-500 border-gray-300 bg-white rounded-[0.5rem]" placeholder="Enter your email address" {...field} />
                                    </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='pb-5 flex sm:flex-row flex-col justify-between items-center sm:gap-5'>
                            <FormField
                                control={form?.control}
                                name="type_of_aid"
                                render={({ field }) => (
                                    <FormItem
                                        className='sm:flex-1 w-full flex flex-col gap-0'
                                    >
                                        <FormLabel>Subject</FormLabel>
                                        <Select
                                            value={field.value}
                                            onValueChange={(value) => field.onChange(value)}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-full py-6 rounded-[0.5rem] border-gray-300 bg-white !text-gray-600">
                                                    <SelectValue placeholder="Select a subject" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="!py-2 text-gray-800 border-gray-500 rounded-[0.5rem] bg-white">
                                                <SelectGroup
                                                    className='bg-white'
                                                >
                                                    <SelectLabel>Subject</SelectLabel>
                                                    {inquiries.map((inquiry) => (
                                                        <SelectItem
                                                            key={inquiry} 
                                                            value={inquiry}
                                                        >
                                                            {inquiry}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            
                        </div>
                        <FormField
                            control={form?.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className='flex flex-col gap-0'>
                                    <FormControl className="py-">
                                        <div className='border-b rounded-xl border-gray-300'>
                                            <Textarea
                                                className="!py-4 text-gray-500 rounded-[0.5rem] bg-white border-none" 
                                                placeholder="Type your message here" 
                                                {...field} 
                                                rows={8}
                                            />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button
                            variant="primary"
                            className='w-full md:py-4 py-4 text-lg !rounded-[0.6rem]'
                        >
                            Submit Message
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    </div>
  )
}

export default ForensicsSpecialist