'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

type DescriptionItem = {
    id: string;
    content: string[];
    title?: string;
    tele?: string[];
    email?: string;
  };
  
  type SolutionItem = {
    id: string;
    title: string;
    description: DescriptionItem[];
  };

const solutions: SolutionItem[] = [
    {
        id: "1",
        title: "Ghana",
        description: [
            {
                id: "1",
                content: [
                    "Tema, 5th Avenue Road – Greater Accra Region, Ghana",
                    "Monday to Friday GMT (09:00 AM to 6:00 PM)",
                ],
                tele: ["+233 53 371 5072"],
                email: "sales@zohocorp.com"
            }
        ],
    },
    {
        id: "2",
        title: "Gambia",
        description: [
            {
                id: "1",
                title: "Gambia",
                content: [
                    "MSJ Plaza Office 07, Brusubi TurnTable - After AfricMed",
                    "Monday to Friday GMT (09:00 AM to 6:00 PM)",
                ],
                tele: ["+220 515 4308"],
            },
        ],    
    },
    {
        id: "3",
        title: "USA",
        description: [
            {
                id: "1",
                content: [
                    "849 SW Curtis St, Port Saint Lucie FL 34983 – Florida USA.",
                    "Monday to Friday GMT (09:00 AM to 6:00 PM)",
                ],
                tele: ["+1 (954) 803-3132"],
            }
        ],
    },
]
  

function SalesTeam() {
    const [activeItem, setActiveItem] = useState("item-1");
    
  return (
    <div className='w-full py-16 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between gap-8'>
            <div className='flex-1 '>
            <div className='w-full flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="body-medium-medium"
                            className='!text-[15px] uppercase text-app-green-text'
                        >
                            I&apos;m new here
                        </Typography>
                        <Typography
                            typo="header-2-semibold"
                            className='md:!leading-[50px] !leading-[40px]'
                        >
                            Interested in a product? Talk to our sales team
                        </Typography>
                    </div>
                    <Typography
                        typo="body-large-medium"
                    >
                        From questions about pricing to one-on-one personalized demos, we&apos;d love to connect and help get you started.
                    </Typography>
                </div>
            </div>
            <div className='flex-1'>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full p-4 bg-white rounded-lg shadow-lg"
                    defaultValue="item-1"
                    onValueChange={(value) => setActiveItem(value)}
                >
                    {
                        solutions.map((data, index) => (
                            <AccordionItem
                                key={data.id}
                                value={`item-${index+1}`}
                                className={`w-full  flex flex-col gap-2 xs:px-6 px-3 ${
                                    activeItem === `item-${index+1}` ? 'bg-[#fff]' : 'w-full'
                                }`}
                            >
                                <AccordionTrigger
                                    className='text-sm font-semibold'
                                >{data.title}</AccordionTrigger>
                                <AccordionContent className="w-full flex flex-col gap-4 text-balance">
                                    {data.description.map(content => (
                                        <div key={content.id} className='flex flex-col gap-1'>
                                            {content?.title && (
                                                <Typography
                                                    typo="body-small-semibold"
                                                >{content?.title}</Typography>

                                            )}
                                            <div className='py-2 flex flex-col gap-2'>
                                                {content.content && (
                                                    content.content.map(data => (
                                                        <Typography
                                                            key={data}
                                                            typo="body-small-regular"
                                                            className='font-extralight'
                                                        >{data}</Typography>
                                                    ))
                                                )}
                                            </div>
                                            {content.tele && (
                                                <div className='flex flex-col gap-1'>
                                                    {content?.tele?.map(num => (
                                                        <Typography 
                                                            key={num}
                                                            className='!text-[15px] !font-extralight text-blue-500'
                                                        >
                                                            {num}
                                                        </Typography>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    
                                </AccordionContent>
                            </AccordionItem>

                        ))
                    }
                </Accordion>
            </div>
        </section>
    </div>
  )
}

export default SalesTeam