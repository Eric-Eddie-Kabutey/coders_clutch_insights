'use client';
import BaseFooter from "./base-footer";
import MiddleFooter from "./middle-footer";
import UpperFooter from "./upper-footer";



export default function FooterSection() {
    return (
        <div className="w-full">
            <UpperFooter />
            {/* <div className="w-full py-12  bg-[#003B38]">
                <section className="max-container 2xl:w-[85%] md:w-[95%] w-[95%] mx-auto flex xl:flex-row flex-col justify-between gap-8 ">
                    <div className="xl:w-[35%] w-[95%] mx-auto flex flex-col gap-8">
                        <div className="flex flex-col gap-3 text-white">
                            <Typography
                                typo="body-large-medium"
                                className="uppercase "
                            >About Coders Clutch</Typography>
                            <Typography 
                                className="text-gray-300 leading-normal"
                                typo="body-medium-regular"
                            >
                                CODERS CLUTCH is a turnkey partner for product development, design, and strategy. As a full-stack 
                                software product development company, We engineer high-performance tech products developed for rapid 
                                market launch.
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-2 text-white">
                            <Typography
                                className="text-lg font-medium"
                            >
                                Want to build next-gen digital solutions?
                            </Typography>
                            <Typography
                                className="pb-3"
                            >
                                Let&apos;s create something extraordinary together!
                            </Typography>
                            <Button
                                variant="primary"
                                className="w-fit px-6 py-3"
                            >
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                    <div className="md:pl-6 pl-4 flex-1 grid md:grid-cols-4 xs:grid-cols-2 gap-8 lg:border-l-2 border-gray-500">
                        <div className="col-span-2 flex flex-col gap-4">
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
                                    defaultValue="item-1"
                                >
                                    {footer_services.map((data, index) => (
                                        <AccordionItem value={`item-${index+1}`}
                                            className=" text-white"
                                        >
                                            <AccordionTrigger
                                                className="text-base"
                                            >{data.title}</AccordionTrigger>
                                            <AccordionContent className="flex !flex-col gap-2">
                                                {data.contents.map(item => (
                                                    <div className="flex items-center gap-2 group hover:bg-gray-700/20">
                                                        <Typography
                                                            typo="body-small-medium"
                                                            className="text-gray-300 cursor-pointer"
                                                        >{item}</Typography>
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
                            <ul className="flex flex-col gap-2 text-gray-300 text-sm">
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
                </section>
            </div>  */}
            <MiddleFooter />
            
            <BaseFooter />
            
        </div>
    );
}
