"use client";

import { ArrowRight } from "lucide-react";
import Typography from "../shared/typography";
import { Button } from "../ui/button";
import Image from "next/image";
import mxpmockupImg from "@/public/assets/images/Coders_Clutch_Mockup/Coders_Clutch_Mockup/MXP_Crypto.svg"
import opixmockupImg from "@/public/assets/images/Coders_Clutch_Mockup/Coders_Clutch_Mockup/Opix_Transactions_Mockup.svg"
import giismockupImg from "@/public/assets/images/Coders_Clutch_Mockup/Coders_Clutch_Mockup/GIISS_Mockup.svg"
import genaimockupImg from "@/public/assets/images/Coders_Clutch_Mockup/Coders_Clutch_Mockup/Gen_AI_Super_Admin_Mockup.svg"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import partnersLogos from "@/public/assets/images/hero_partner_logo/partners_home_trans.png";
import StarRating from "../reusable/star-rating";
import ScrollReveal from "../reusable/scroll-reveal";
import Link from "next/link";

const hero_caro = [mxpmockupImg, opixmockupImg, giismockupImg, genaimockupImg]



const Hero = () => {
    //   const tripleLogos = [...clients_logos, ...clients_logos, ...clients_logos];

    return (
        <div className="w-full pt-2 sm:pb-20 pb-6 lg:space-y-20 md:space-y-10 space-y-6 bg-gradient-to-t from-[#D1FFFB] to-[#fff]">
            <section className="w-full pt-8">
                <div className="max-container 2xl:w-[80%] w-[90%] mx-auto flex flex-col items-center gap-6">
                        <div className="w-full flex justify-center items-center gap-5 font-medium">
                            <span className="font-semibold">4.6</span>
                            <div className="flex items-center gap-1">
                                <StarRating rating={4.5} />
                                <div className="h-5 w-[0.5px] bg-app-primary-light"></div>
                                <span className="text-[#727170]">Google</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center md:gap-8 gap-1">
                            <Typography
                                typo="body-medium-medium" 
                                className="md:block hidden text-app-primary-medium font-semibold uppercase ">With Agentic Ai Intelligence Integrations</Typography>
                            <Typography
                                className="xl:text-5xl lg:text-4xl sm:text-3xl font-medium xs:text-3xl text-2xl text-center text-app-primary-light"
                            >We Build <span className="text-app-primary-deep oleo-script">Enterprise-Grade</span> Automated Software</Typography>
                            <Typography
                                typo="body-large-regular"
                                className="w-[80%] mx-auto inter md:block hidden text-center text-black !text-xl"
                            >
                                Comprehensive technology services designed to accelerate your business growth, enhance efficiency, and drive digital transformation at every level.
                            </Typography>
                            <Link 
                                href="https://form.typeform.com/to/jFOntud3"
                                target="_blank"
                            >
                                <Button
                                    variant="outline"
                                    // onClick={() => router.push("https://form.typeform.com/to/jFOntud3")}
                                    size="lg"
                                    className="md:flex hidden rounded-full text-white bg-app-primary-deep hover:bg-app-primary-deep hover:text-white"
                                >
                                    Let&apos;s Talk
                                    <ArrowRight />
                                </Button>
                            </Link>
                            {/* <Typography
                                className="inter xl:text-4xl lg:text-4xl sm:text-3xl xs:text-3xl text-2xl font-extrabold text-center text-black"
                            >With Agentic Ai Intelligence Integrations</Typography> */}
                        </div>
                    <ScrollReveal>
                        <Carousel
                            plugins={[
                                Autoplay({
                                    delay:4000
                                })
                            ]}
                        >
                            <CarouselContent>
                                {hero_caro.map((data, index) => (
                                    <CarouselItem key={`Desktop-${index+1}`}>
                                        <div className="w-full mx-auto xl:h-[600px] md:h-[500px] fit">
                                            <Image 
                                                src={data}
                                                alt={`Hero image ${index + 1}`}
                                                className="w-full h-full object-cover object-top rounded-2xl "
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                                                priority={index === 0}
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="lg:block hidden" />
                            <CarouselNext className="lg:block hidden" />
                        </Carousel>
                    </ScrollReveal> 
                    <ScrollReveal>
                        <div className="py-2 md:hidden flex flex-col justify-center items-center md:gap-3 gap-4">
                            {/* <Typography
                                className="inter sm:!text-3xl !text-2xl font-extrabold text-center text-app-primary-light"
                            >We Build Enterprise-Grade Automated Software</Typography> */}
                            <Typography
                                typo="body-large-regular"
                                className="inter text-center text-black"
                            >Comprehensive technology services designed to accelerate your business growth</Typography>
                            <Button
                                variant="outline"
                                // onClick={() => setOpenBanner(true)}
                                size="lg"
                                className="rounded-full text-app-primary-deep border border-app-primary-deep hover:bg-app-primary-deep hover:text-white"
                            >
                                Let&apos;s Talk
                                <ArrowRight />
                            </Button>
                        </div>
                    </ScrollReveal>
                    <div className="w-full">
                        <ScrollReveal>
                            <div className="md:w-[60%] w-[80%] mx-auto pt-6 md:pb-10 pb-4 flex flex-col justify-between items-center md:gap-4 gap-6">
                                <Typography
                                    typo="header-4-semibold"
                                    className="w-fit px-6"
                                >
                                    Globally trusted by
                                </Typography>
                                <div className="w-full h-fit">
                                    <Image 
                                        src={partnersLogos}
                                        alt="Partners logo"
                                        className="w-full h-full "
                                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 50vw"
                                        priority
                                    />
                                </div>
                                {/* <div className="flex-1 overflow-hidden">
                                    <motion.div
                                        className="flex md:space-x-16 space-x-6"
                                        animate={{ x: ["0", "-33.3333%"] }}
                                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                        >
                                        {tripleLogos.map((logo, index) => (
                                            <div key={index+1} className="min-w-fit md:h-8 h-6 flex items-center md:justify-center ">
                                            <Image 
                                                src={logo}
                                                alt={`Brand logo ${index}`}
                                                className="w-full h-full "
                                            />
                                            </div>
                                        ))}
                                    </motion.div>
                                </div> */}
                            </div>
                        </ScrollReveal>
                    </div>
                    
                    {/* <div className="xl:w-[80%] mx-auto py-5 flex justify-center items-center lg:gap-6 gap-4  flex-wrap">
                        {home_services.map((service, index) => {
                            return (
                                <div key={service.id} className="md:w-fit w-[45%] lg:px-6 px-3 py-3.5 flex lg:justify-center  items-center sm:gap-2 gap-3 bg-app-primary-light rounded-md">
                                    <Image 
                                        src={service.icon}
                                        alt={`Service ${index+1}`}
                                        className="lg:w-7 mdw-5 w-6 h-fit"
                                    />
                                    <Typography 
                                        className="text-white"
                                        typo="body-medium-semibold"
                                    >{service.title}</Typography>
                                </div>
                            )
                        })}
                    </div> */}
                    
                </div>
            </section>
            {/* <div className="w-full h-20 md:hidden flex flex-col justify-end overflow-hidden relative ">
                <div className="absolute top-0 left-0 right-0 h-2 shadow-md" />                
                <motion.div
                    className=" flex space-x-6"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 25, 
                        ease: "linear" 
                    }}
                >
                    {[...clients_logos, ...clients_logos].map((logo, index) => (
                        <div 
                            key={`mobile-${index}`} 
                            className="min-w-[calc(25%_-_18px)] h-12 flex items-center justify-center"
                        >
                            <Image 
                                src={logo}
                                alt={`Brand logo ${index}`}
                                className="h-full w-auto"
                            />
                        </div>
                    ))}
                </motion.div>
            </div> */}
            {/* <HomeBanner 
                open={openBanner}
                setOpen={setOpenBanner}
            /> */}
        </div>
    );
}


export default Hero