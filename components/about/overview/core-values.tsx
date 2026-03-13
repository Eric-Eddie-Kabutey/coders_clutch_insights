'use client';
import ScrollReveal from '@/components/reusable/scroll-reveal';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';

const core_values = [
    {
        id: "01",
        color: "#2A0D8D",
        title: "People-First Culture",
        description: `We prioritize the well-being, growth, and development of our employees, placing their needs and 
                        interests at the forefront of organizational decisions.`
    },
    {
        id: "02",
        color: "#FF9DAF",
        title: "Diversity and Inclusion",
        description: `Ours is a workplace that values individuals from all backgrounds, perspectives, and experiences. 
                        We foster a culture of belonging and equality for all.`
    },
    {
        id: "03",
        color: "#FADE68",
        title: "Sense of Ownership",
        description: `We cultivate a sense of ownership among our employees. They take responsibility for their work and 
                        contribute to the company's success as if it were their own.`
    },
    {
        id: "04",
        color: "#6FC9F5",
        title: "Transparent Decisions",
        description: `Transparency is at the core of our actions. We practice open communication where all team members feel 
                        comfortable sharing ideas, feedback, and concerns..`
    },
    {
        id: "05",
        color: "#73EDB0",
        title: "Continuous Improvement",
        description: `We strive for ongoing growth and development, both individually and as a company, through continuous 
                        learning, innovation, and adaptation to change.`
    },
    {
        id: "06",
        color: "#3B5EEF",
        title: "Customer Value Creation",
        description: `Our success mantra is simple. Focus on creating value for clients with exceptional products, and 
                        services that consistently exceed their expectations.`
    },
]

function CoreValues() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='w-[70%] flex flex-col gap-4'>
                <ScrollReveal>
                    <Button
                        variant="secondary"
                        className='md:!px-8 !px-4 md:!text-lg !text-base font-medium bg-app-blue rounded-full'
                    >
                        Our Core Values
                    </Button>
                </ScrollReveal>
                <ScrollReveal>
                    <Typography
                        typo="header-3-semibold"
                        // className='!leading-normal'
                    >
                        Values we cherish and nurture
                    </Typography>
                </ScrollReveal>
            </div>

            <section className='w-full lg:py-16 py-8 grid md:grid-cols-3 sm:grid-cols-2 lg:gap-8 gap-4'>
                {core_values.map((data, index) => (
                    <ScrollReveal key={data.id} delay={index * 0.15}>
                        <Card 
                            key={data.id}
                            className='xl:py-4 py-2 border-y-0 border-r-0 border-l-4 shadow-md hover:shadow-lg transition-shadow rounded-[1rem]'
                            style={{borderColor: data.color}}
                        >
                            <CardHeader className='pb-0 flex flex-col gap-2'>
                                <Typography
                                    typo="header-5-semibold"
                                    style={{color: data.color}}
                                >
                                    {data.id}
                                </Typography>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {data.title}
                                </Typography>
                            </CardHeader>
                            <CardContent className='pt-2'>
                                <Typography
                                    typo="body-medium-medium"
                                    className='!leading-relaxed'
                                >{data.description}</Typography>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                ))}
            </section>
        </section>
    </div>
  )
}

export default CoreValues