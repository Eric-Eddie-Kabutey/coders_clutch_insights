  "use client"

import { Button } from "@/components/ui/button"
import publicSafetyImg from "@/public/assets/images/solutions/smart_governanceImg.svg"
import Image from "next/image"
import Typography from "@/components/shared/typography"
import { motion } from 'framer-motion'
import { ArrowRight, Layers, RefreshCcw, Rocket, Timer, TrendingUp, UserCog } from "lucide-react";

const hero_content2 = [
{
    id: "1",
    title: "Custom-Tailored UX Strategies",
    icon: UserCog,
},
{
    id: "2",
    title: "Agile & Adaptive Design Approach",
    icon: RefreshCcw,
},
{
    id: "3",
    title: "2x Faster Ready Designs",
    icon: Timer,
},
{
    id: "4",
    title: "Conversion-Optimized UI/UX",
    icon: TrendingUp,
},
{
    id: "5",
    title: "30% Faster New Design Delivery",
    icon: Rocket,
},
{
    id: "6",
    title: "End-to-End Design Support",
    icon: Layers,
},
];

export default function SmartGovernanceMainHero() {
    const inifiniteContent2 = [...hero_content2, ...hero_content2, ...hero_content2]

    return (
      <div className="flex flex-col">
          <div className='max-container lg:w-[85%] w-[95%] h-full lg:py-16 py-10 mx-auto'>
              <section className='2xl:w-[80%] xl:w-[90%] w-full h-full mx-auto flex flex-col justify-end gap-12'>
                  <div className='flex flex-col gap-4'>
                      <Typography
                          typo="body-medium-medium" 
                          className="text-app-primary-medium font-semibold uppercase text-center">Digitizing Public </Typography>
                      <Typography
                          className='text-center '
                          typo="header-4-semibold"
                      >
                        Services for Transparent, Citizen-Centric Governance
                      </Typography>
                      <Typography
                          className='xl:w-[60%] lg:w-[70%] w-full mx-auto text-center '
                          typo="body-medium-regular"
                      >
                          Empowering cities with advanced data analytics and AI-driven platforms that transform raw information into real-time insights—optimizing resource allocation, improving public services, and enabling smarter decision-making.
                      </Typography>
                      <Button
                          variant="outline"
                          className='w-fit mx-auto 2xl:!py-2 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-medium hover:bg-app-primary-medium hover:text-white rounded-full border-2 hover:border-app-primary-deep'
                      >
                          Let&apos;s Talk
                          <ArrowRight />
                      </Button>
                  </div>
                  
                  <div className="w-full py-3 flex justify-between items-center lg:gap-8 gap-8">
                    <div className="bg-[#f4f2ec] xs:w-full w-[90%] mx-auto xl:h-fit lg:h-[550px] md:h-[500px] sm:h-[400px] xs:h-[300px] h-[250px] p-3 border-2 border-dashed rounded-[2rem] overflow-hidden skew-x-6">
                      <Image 
                        src={publicSafetyImg}
                        alt="outsourcing image"
                        className="w-full h-full rounded-[2rem] object-cover "
                      />  
                    </div>
                  </div>
              </section>
          </div>
          <div className="max-container sm:pt-8 pt-4 2xl:w-[85%] w-[95%] mx-auto lg:pb-16 pb-10 flex lg:flex-row flex-col justify-between xl:gap-8 gap-6">
              <Typography
                  typo="header-4-bold"
                  className="xl:w-[40%] lg:w-[45%] sm:w-[70%]"
              >
                  Modern Governance Challenges
              </Typography>
              <Typography
                  typo="header-6-regular"
                  className="flex-1 !leading-relaxed"
              >
                  Public institutions worldwide grapple with slow paper-based systems, unequal service access, and declining citizen trust. Our Smart Governance platform modernizes public services—delivering efficient digital tools, broader accessibility, and transparent systems to rebuild civic engagement.  
              </Typography>
          </div>
          <div className="w-full py-12 bg-[#fff3d0]">
              <section className="max-container 2xl:w-[85%] w-[95%] mx-auto overflow-auto">
                  <motion.div
                      className='flex space-x-2'
                      animate={{ x: ['0%', '-50%'] }}
                      transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}>
                          {inifiniteContent2.map((data, index) => (
                              <div key={index} className='flex-shrink-0 flex items-center'>
                                  <div className='flex items-center gap-2 text-gray-700 px-3 py-2 rounded-lg shadow-sm'>
                                      <div className='w-fit p-1 rounded-full border-2 border-app-primary-medium'>
                                              <data.icon
                                              size={15}
                                              color='#003b38'
                                          />
                                      </div>
                                      <span className='font-medium'>{data.title}</span>
                                  </div>
                                  <span className="pb-2">...............</span>
                              </div>
                          ))}
                  </motion.div>
              </section>
          </div>
      </div>
    )
}
