'use client';
import React from 'react';
import Typography from './typography';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../reusable/scroll-reveal';

// const countries_located = [
//     {
//         id: "1",
//         img: ghanaImg,
//         country: "Ghana",
//         address: "Ghana - Tema, 5th Avenue Road – Greater Accra Region, Ghana"
//     },
//     {
//         id: "2",
//         img: gambia,
//         country: "Gambia",
//         address: "Gambia - MSJ Plaza Office 07, Brusubi TurnTable - After AfricMed"
//     },
//     {
//         id: "3",
//         img: ghanaImg,
//         country: "Ghana",
//         address: "Ghana - Tema, 5th Avenue Road – Greater Accra Region, Ghana"
//     },
//     {
//         id: "4",
//         img: ghanaImg,
//         country: "Ghana",
//         address: "Ghana - Tema, 5th Avenue Road – Greater Accra Region, Ghana"
//     },
// ]

// const footeritems = [
//     {
//         id: "1",
//         case: "Who we are",
//         title: "Coders Clutch",
//         img: codersLogo,
//         who: `Semoa is a fintech offering payment and customer relationship digital solutions. It developed one of its 
//                 solutions on the Ecobank Sandbox and is now working together with Ecobank in Togo.
//             `,
//         what: `Using the Ecobank Sandbox, Semoa developed a new digital banking service via Whatsapp called ‘Xpress Cash by Semoa’
//             `,
//         how: `Xpress Cash by Semoa enables Ecobank customers in Togo to send a Whatsapp message to Semoa’s BOT called Dédé to 
//                 send tokens for withdrawals, payment of bills or money transfers to friends or relatives in Togo or across the 
//                 WAEMU region.
//             `,
//         where: `The product is available in Togo.
//             `,
//         impact: `Semoa’s secured online services utilise Ecobank’s cutting-edge infrastructure to provide a solution to cross 
//                     the divide between the digital and cash economies. It enables the unbanked to accept and make payments 
//                     digitally, thereby accelerating financial inclusion.
//             `,
//     },
//     {
//         id: "2",
//         case: "Let's Develop Together",
//         title: "We are hear for you",
//         img: codersLogo,
//         services: [
//             {
//                 id: "1",
//                 title: "Product Development",
//                 contents: ["Product Development", "SaaS Development", "POC Development", "MVP Development", "UI/UX Design", "Software Product Development", "Enterprise Software Development", "Offshore Software Development"]
//             },
//             {
//                 id: "2",
//                 title: "Digital Engineering",
//                 contents: ["Digital Transformation", "App Modernization", "IoT Services", "Digital Product Engineering"]
//             },
//             {
//                 id: "3",
//                 title: "Cloud & DevOps",
//                 contents: ["Product Development", "SaaS Development", "POC Development", "MVP Development", "UI/UX Design", "Software Product Development", "Enterprise Software Development", "Offshore Software Development"]
//             },
//             {
//                 id: "4",
//                 title: "Artificial Intelligence",
//                 contents: ["Product Development", "SaaS Development", "POC Development", "MVP Development", "UI/UX Design", "Software Product Development", "Enterprise Software Development", "Offshore Software Development"]
//             },
//             {
//                 id: "5",
//                 title: "Cooperation Models",
//                 contents: ["Hire Remote Developers", "Hire Dedicated Development Team", "Software Development Outsourcing"]
//             },
//         ],
//         technologies: ["Flutter", "React Native", "Full Stack Development", "React.js", "Angular.js"],
        
//     },
    
// ]

function UpperFooter() {

  return (
    <div className='w-full flex flex-col'>
        <section className='w-full pb-8 pt-20 text-white bg-[#003b38]'>
            <div className='max-container 2xl:w-[85%] md:w-[95%] w-[95%] mx-auto py-6 flex justify-between xl:gap-44 sm:gap-32 gap-6'>
                    <div className='flex-1 sm:pl-0 pl-3'>
                        <div className='w-full flex flex-col gap-8'>
                            <div className='flex flex-col gap-1'>
                                <ScrollReveal>
                                    <Typography 
                                        typo="header-3-medium"
                                        className='sm:!leading-normal'
                                    >Who we are</Typography>
                                </ScrollReveal>
                                <ScrollReveal>
                                    <Typography 
                                        typo="header-4-light"
                                        className='rale'
                                    >Coders Clutch</Typography>
                                </ScrollReveal>
                            </div>
                            <div className='md:pr-20 pr-[50px] flex justify-end items-center gap-6'>
                                <ScrollReveal>
                                    <Typography
                                        typo="body-medium-light"
                                        className='rale sm:block hidden'
                                    >Our business overview</Typography>
                                </ScrollReveal>
                                <ScrollReveal>
                                    <button
                                        // variant="ghost"
                                        className='sm:p-5 p-3 bg-app-secondary !rounded-full'
                                    >
                                        <ArrowRight size={40} />
                                    </button>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 '>
                        <div className='w-full pr-6 flex flex-col sm:gap-8 gap-7'>
                            <div className='flex flex-col gap-4'>
                                <ScrollReveal>
                                    <Typography 
                                        typo="header-3-medium"
                                        className='!leading-normal'
                                    >Lets Develop Together</Typography>
                                </ScrollReveal>
                                <ScrollReveal>
                                    <Typography 
                                        typo="header-4-light"
                                        className='rale sm:block hidden'
                                    >We are here for you</Typography>
                                </ScrollReveal>
                            </div>
                            <div className='flex justify-end items-center gap-6'>
                                <ScrollReveal>
                                    <Typography
                                        typo="body-medium-light"
                                        className='rale sm:block hidden'
                                    >Let&apos;s talk</Typography>
                                </ScrollReveal>
                                <ScrollReveal>
                                    <button
                                        // variant="ghost"
                                        className='sm:p-5 p-3 bg-app-secondary !rounded-full'
                                    >
                                        <ArrowRight size={40} />
                                    </button>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        {/* <section className='py-8 bg-gradient-to-r from-[#01403d] to-[#0f5351]'>
            
            {currentItem?.id === "2" ? (
                <div className='max-container 2xl:w-[85%] md:w-[95%] w-[95%] mx-auto py-6 flex lg:flex-row flex-col justify-between items-stretch gap-8 text-white'>
                    <div className="flex-1 flex flex-col "> 
                        <div className='lg:block hidden w-[90%] h-[550px] mx-auto'>
                            <Image 
                                src={mainImg}
                                alt='Main image'
                                className='w-full h-full object-cover rounded-full'
                            />
                        </div>
                    </div>
                    
                    <div className='lg:w-1 lg:h-auto w-full h-2 lg:border-l lg:border-t-0 border-t border-dashed border-gray-400 my-4 lg:my-0'></div>
                    
                    <div className='flex-1 flex flex-col'> 
                        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
                            <div className="lg:w-[60%] w-full flex flex-col gap-4">
                                <Typography
                                    className="uppercase text-white"
                                    typo="body-medium-medium"
                                >
                                    Services
                                </Typography>
                                <div className="w-full">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="w-full flex flex-col"
                                    >
                                        {currentItem?.services?.map((data, index) => (
                                            <AccordionItem key={data.id} value={`item-${index+1}`}
                                                className="text-white"
                                            >
                                                <AccordionTrigger className="text-base">
                                                    {data?.title}
                                                </AccordionTrigger>
                                                <AccordionContent className="flex !flex-col">
                                                    {data?.contents?.map(item => (
                                                        <div key={item} className="px-3 py-2 flex items-center gap-2 group hover:bg-gray-700/20">
                                                            <Typography
                                                                typo="body-small-medium"
                                                                className="text-gray-300 cursor-pointer"
                                                            >
                                                                {item}
                                                            </Typography>
                                                            <ArrowRight size={16} 
                                                                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
                                                            />
                                                        </div>
                                                    ))}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-4">
                                <Typography
                                    className="uppercase text-white"
                                    typo="body-medium-medium"
                                >
                                    Technologies
                                </Typography>
                                <ul className="flex flex-col gap-2 text-gray-100 text-sm">
                                    <li>Flutter</li>
                                    <li>React Native</li>
                                    <li>Full Stack Development</li>
                                    <li>React.js</li>
                                    <li>Angular.js</li>
                                    <li>Python</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='max-container 2xl:w-[85%] md:w-[95%] w-[95%] mx-auto py-6 flex lg:flex-row flex-col justify-between gap-20 text-white'>
                    <div className='flex-1 flex flex-col gap-6'>
                        <div className="w-[100%] flex flex-col gap-3 text-white">
                            <Typography
                                typo="body-large-medium"
                                className="uppercase "
                            >Who we are</Typography>
                            <Typography 
                                className="text-gray-300 leading-normal"
                                typo="body-medium-regular"
                            >
                                CODERS CLUTCH is a turnkey partner for product development, design, and strategy. As a full-stack 
                                software product development company, We engineer high-performance tech products developed for rapid 
                                market launch.
                            </Typography>
                        </div>
                        <div className="w-full flex flex-col gap-3 text-white">
                            <Typography
                                typo="body-large-medium"
                                className="uppercase "
                            >Mission</Typography>
                            <Typography 
                                className="text-gray-300 leading-normal line-clamp-2"
                                typo="body-medium-regular"
                            >
                                CODERS CLUTCH is a turnkey partner for product development, design, and strategy. As a full-stack 
                                software product development company, We engineer high-performance tech products developed for rapid 
                                market launch.
                            </Typography>
                        </div>
                        <div className="w-full flex flex-col gap-3 text-white">
                            <Typography
                                typo="body-large-medium"
                                className="uppercase "
                            >Vision</Typography>
                            <Typography 
                                className="text-gray-300 leading-normal line-clamp-2"
                                typo="body-medium-regular"
                            >
                                CODERS CLUTCH is a turnkey partner for product development, design, and strategy. As a full-stack 
                                software product development company, We engineer high-performance tech products developed for rapid 
                                market launch.
                            </Typography>
                        </div>
                        <Button
                            variant="primary"
                            className="w-fit px-6 py-3"
                        >
                            Contact Sales
                        </Button>
                    </div>
                    <div className='lg:w-1 lg:h-auto w-full h-2 lg:border-l lg:border-t-0 border-t border-dashed border-gray-400 my-4 lg:my-0'></div>
                    <div className='flex-1 '>
                        <div className=' w-full grid grid-cols-2 gap-4'>
                            {countries_located.map((data, index) => (
                                <div key={data.id} className='flex-1 p-3 flex flex-col gap-2 border border-white rounded-lg'>
                                    <Image 
                                        src={data.img}
                                        alt={`Country flag ${index+1}`}
                                        className='w-10 h-fit'
                                    />
                                    <Typography
                                        className='text-sm text-gray-300 leading-relaxed'
                                    >
                                        {data.address}
                                    </Typography>
                                    <div className='w-full pt-4 flex justify-between items-center gap-8'>
                                        <Button
                                            variant="primary"
                                            className='flex-1 !py-2 border-white text-white'
                                        >Call</Button>
                                        <Button
                                            variant="outline"
                                            className='flex-1 !py-2 border-white text-white'
                                        >Get Direction</Button>
                                    </div>
                                </div>
                            ))}
                        
                        </div>
                    </div>
                </div>
            )}
        </section> */}
    </div>
  )
}

export default UpperFooter