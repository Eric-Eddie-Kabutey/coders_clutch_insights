'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { useForm } from 'react-hook-form';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import FloatingInput from '../reusable/floating-input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';

function SupportForm() {
    const [selected, setSelected] = useState("business-interests")
    const [isChecked, setIsChecked] = useState(false);
    const form = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            telephone: "",
            job_role: "",
            company_name: "",
            company_type: "",
            industry: "",
            interested_service: "",
            interest_type: "business-interests",
            newsletter: false,
        },
    });

    const handleCheckedChange = (checked: boolean | "indeterminate") => {
        if (typeof checked === "boolean") {
            setIsChecked(checked);
        }
    };

    return (
        <div className='w-full lg:py-16 py-8'>
            <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
                <div className='max-w-[800px] mx-auto flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="header-4-regular"
                            className='inter text-app-primary-deep'
                        >Contact Information</Typography>
                        <p className='text-gray-500 text-sm'>Please provide your details so we can best assist you.</p>
                    </div>

                    <div className='flex flex-col'>
                        <Form {...form}>
                            <form className='flex flex-col lg:gap-10 sm:gap-12 gap-8 text-gray-700'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <FormField
                                        control={form.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormControl>
                                                    <FloatingInput
                                                        label="First name*"
                                                        {...field}
                                                        className="bg-[#F3F4F6] border-none focus:ring-2 focus:ring-app-primary-light/20"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormControl>
                                                    <FloatingInput
                                                        label="Last name*"
                                                        {...field}
                                                        className="bg-[#F3F4F6] border-none focus:ring-2 focus:ring-app-primary-light/20"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormControl>
                                                    <FloatingInput
                                                        label="Email address*"
                                                        {...field}
                                                        className="bg-[#F3F4F6] border-none focus:ring-2 focus:ring-app-primary-light/20"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="telephone"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormControl>
                                                    <FloatingInput
                                                        label="Telephone*"
                                                        {...field}
                                                        className="bg-[#F3F4F6] border-none focus:ring-2 focus:ring-app-primary-light/20"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className='flex flex-col gap-6'>
                                    <Typography
                                        typo="header-4-regular"
                                        className='inter text-app-primary-deep border-b pb-2'
                                    >Employment & Project Information</Typography>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                        <div className="w-full">
                                            <label className="text-sm font-medium text-gray-600 mb-2 block">Job Role</label>
                                            <Select onValueChange={(val) => form.setValue("job_role", val)}>
                                                <SelectTrigger className="w-full h-12 border-gray-200 bg-white focus:ring-2 focus:ring-app-primary-light/20">
                                                    <SelectValue placeholder="Select job role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="ceo-founder">CEO / Founder</SelectItem>
                                                    <SelectItem value="cto-tech-lead">CTO / Technical Lead</SelectItem>
                                                    <SelectItem value="product-manager">Product Manager</SelectItem>
                                                    <SelectItem value="operations">Operations Lead</SelectItem>
                                                    <SelectItem value="it-admin">IT Administrator</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="company_name"
                                            render={({ field }) => (
                                                <FormItem className="w-full pt-7">
                                                    <FormControl>
                                                        <FloatingInput
                                                            label="Company name*"
                                                            {...field}
                                                            className="bg-[#F3F4F6] border-none"
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        <div className="w-full">
                                            <label className="text-sm font-medium text-gray-600 mb-2 block">Company Type</label>
                                            <Select onValueChange={(val) => form.setValue("company_type", val)}>
                                                <SelectTrigger className="w-full h-12 border-gray-200 bg-white focus:ring-2 focus:ring-app-primary-light/20">
                                                    <SelectValue placeholder="Select company type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="startup">Startup</SelectItem>
                                                    <SelectItem value="small-business">Small Business</SelectItem>
                                                    <SelectItem value="mid-enterprise">Mid-sized Enterprise</SelectItem>
                                                    <SelectItem value="large-corporation">Large Corporation</SelectItem>
                                                    <SelectItem value="government">Government Agency</SelectItem>
                                                    <SelectItem value="ngo">NGO</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="w-full">
                                            <label className="text-sm font-medium text-gray-600 mb-2 block">Industry</label>
                                            <Select onValueChange={(val) => form.setValue("industry", val)}>
                                                <SelectTrigger className="w-full h-12 border-gray-200 bg-white focus:ring-2 focus:ring-app-primary-light/20">
                                                    <SelectValue placeholder="Select industry" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="healthcare">Healthcare</SelectItem>
                                                    <SelectItem value="finance">Finance / Fintech</SelectItem>
                                                    <SelectItem value="ecommerce">E-Commerce / Retail</SelectItem>
                                                    <SelectItem value="government">Government & Public Sector</SelectItem>
                                                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                                                    <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <label className="text-sm font-medium text-gray-600 mb-2 block">Interested Service</label>
                                        <Select onValueChange={(val) => form.setValue("interested_service", val)}>
                                            <SelectTrigger className="w-full h-12 border-gray-200 bg-white focus:ring-2 focus:ring-app-primary-light/20">
                                                <SelectValue placeholder="Select service of interest" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="business-transformation">Business Transformation & Consulting</SelectItem>
                                                <SelectItem value="mobile-apps">Mobile App Development</SelectItem>
                                                <SelectItem value="custom-software">Custom Software & AI Solutions</SelectItem>
                                                <SelectItem value="it-cloud">IT & Cloud Computing</SelectItem>
                                                <SelectItem value="ai-dev">AI Development</SelectItem>
                                                <SelectItem value="gov-utility">Government & Utility Solutions</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <p className="text-sm font-medium text-gray-600">I am completing this form in connection with my:</p>
                                    <RadioGroup
                                        value={selected}
                                        onValueChange={(val) => {
                                            setSelected(val);
                                            form.setValue("interest_type", val);
                                        }}
                                        className="flex flex-col sm:flex-row gap-4"
                                    >
                                        <div
                                            className={`flex-1 p-4 flex items-center gap-3 border rounded-lg transition-all duration-300 cursor-pointer
                                                ${selected === "business-interests"
                                                    ? "border-app-secondary bg-app-secondary/5 ring-1 ring-app-secondary"
                                                    : "border-gray-200 hover:border-app-primary-light"
                                                }`}
                                        >
                                            <RadioGroupItem value="business-interests" id="r1" />
                                            <Label htmlFor="r1" className="cursor-pointer font-medium">Business interests</Label>
                                        </div>
                                        <div
                                            className={`flex-1 p-4 flex items-center gap-3 border rounded-lg transition-all duration-300 cursor-pointer
                                                ${selected === "personal-interests"
                                                    ? "border-app-secondary bg-app-secondary/5 ring-1 ring-app-secondary"
                                                    : "border-gray-200 hover:border-app-primary-light"
                                                }`}
                                        >
                                            <RadioGroupItem value="personal-interests" id="r2" />
                                            <Label htmlFor="r2" className="cursor-pointer font-medium">Personal interests</Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className={`p-6 flex items-start gap-4 border rounded-xl transition-all duration-300 ${isChecked
                                    ? "border-app-secondary bg-app-secondary/5 ring-1 ring-app-secondary"
                                    : "border-gray-200 hover:border-app-primary-light"
                                    }`}>
                                    <Checkbox
                                        id="newsletter"
                                        checked={isChecked}
                                        onCheckedChange={(checked) => {
                                            handleCheckedChange(checked);
                                            form.setValue("newsletter", !!checked);
                                        }}
                                        className='mt-1 data-[state=checked]:border-app-secondary data-[state=checked]:bg-app-secondary data-[state=checked]:text-white'
                                    />
                                    <div className='flex flex-col gap-3'>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Yes, I&apos;d like <span className="font-semibold">Coders Clutch</span> to share the latest news about digital transformation services
                                            and related offerings with me by email, post or telephone.
                                        </p>
                                        <p className="text-xs text-gray-500 italic">
                                            You may unsubscribe at any time. We handle your information as described
                                            in our Privacy Policy.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex justify-start pt-4'>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className='w-full sm:w-fit py-6 px-12 text-xl font-bold rounded-xl bg-app-primary-deep text-white hover:bg-app-secondary hover:shadow-[0_10px_20px_rgba(255,105,0,0.3)] transition-all duration-300 flex items-center gap-4 group'
                                    >
                                        <span>Send Inquiry</span>
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SupportForm
