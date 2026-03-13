  "use client"

  import { Button } from "@/components/ui/button"
  // import hero1 from "@/public/assets/images/about/career_1.jpg"
  // import hero2 from "@/public/assets/images/about/career_1.jpg"
  // import hero3 from "@/public/assets/images/about/career_1.jpg"
  // import hero4 from "@/public/assets/images/about/career_1.jpg"
  // import hero5 from "@/public/assets/images/about/career_1.jpg"
  // import hero6 from "@/public/assets/images/about/career_1.jpg"
  import Image from "next/image"
  import Typography from "@/components/shared/typography"
  import { motion } from 'framer-motion'
  import { ArrowRight, Layers, RefreshCcw, Rocket, Timer, TrendingUp, UserCog } from "lucide-react";
  import uiuxheroImg from "@/public/assets/images/digital-solutions/uiux_hero_img.png"
  import uiuxheroImg2 from "@/public/assets/images/digital-solutions/uiux-hero2.png"



  // const categories = [
  //   {
  //     id: 1,
  //     name: "Your cause",
  //     image: hero1,
  //     position: "top-[10%] left-[15%]",
  //   },
  //   {
  //     id: 2,
  //     name: "Medical",
  //     image: hero2,
  //     position: "top-[38%] left-[5%]",
  //   },
  //   {
  //     id: 3,
  //     name: "Emergency",
  //     image: hero3,
  //     position: "bottom-[13%] left-[20%]",
  //   },
  //   {
  //     id: 4,
  //     name: "Business",
  //     image: hero4,
  //     position: "bottom-[10%] right-[25%]",
  //   },
  //   {
  //     id: 5,
  //     name: "Animal",
  //     image: hero6,
  //     position: "top-[40%] right-[8%]",
  //   },
  //   {
  //     id: 6,
  //     name: "Education",
  //     image: hero5,
  //     position: "top-[10%] right-[18%]",
  //   },
  // ]

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

  export default function UiuxMainHero() {
      const inifiniteContent2 = [...hero_content2, ...hero_content2, ...hero_content2]

    return (
      <div className="flex flex-col">
          {/* <main className="relative h-[80vh] max-h-[750px] w-full max-w-[1500px] mx-auto overflow-hidden bg-white py-16 md:py-24">
              <div className="absolute left-1/2 top-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200 md:block" />

              <div className="absolute left-1/2 top-1/2 hidden h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200 md:block" />

              <div className="absolute inset-0 hidden md:block">
                  {categories.map((category) => (
                  <div key={category.id} className={`absolute ${category.position}`}>
                      <div className="group relative">
                      <div className="relative h-48 w-48">
                          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="48" fill="none" stroke="#d1fae5" strokeWidth="2" />
                          <circle
                              cx="50"
                              cy="50"
                              r="48"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="3"
                              strokeDasharray="301.59"
                              strokeDashoffset="75.4"
                              strokeLinecap="round"
                              className="transition-all duration-300 group-hover:stroke-dashoffset-0"
                          />
                          </svg>

                          <div className="absolute inset-3 overflow-hidden rounded-full border-4 border-white shadow-lg">
                          <Image
                              src={category.image}
                              alt={category.name}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          </div>
                      </div>

                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-800 shadow-sm">
                          {category.name}
                      </div>
                      </div>
                  </div>
                  ))}
              </div>

              <div className="container relative z-10 mx-auto px-4 h-[85%] flex items-center justify-center">
                  <div className="pb-12 mx-auto max-w-3xl flex flex-col gap-2 text-center">
                      <p className="rale mb-4 text-base font-bold text-gray-700 md:text-lg">Your #1 (One)</p>

                      <Typography 
                          typo="header-1-semibold"
                          className="w-[60%] mx-auto mb-8 !text-7xl font-bold !leading-normal text-gray-900 md:text-7xl md:!leading-tight">
                          Product UI/UX Design Company
                      </Typography>

                      <Button
                          variant="primary"
                          size="lg"
                          className="w-fit mx-auto rounded-full bg-app-primary-deep px-10 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:bg-app-primary-medium hover:shadow-xl"
                      >
                          <Link href="/start">Let&apos;s Talk</Link>
                      </Button>
                  </div>
              </div>
          </main>  */}
          <div className='max-container lg:w-[85%] w-[95%] h-full lg:py-16 py-10 mx-auto'>
              <section className='2xl:w-[80%] xl:w-[90%] w-full h-full mx-auto flex flex-col justify-end gap-12'>
                  <div className='flex flex-col gap-4'>
                      <Typography
                          typo="body-medium-medium" 
                          className="text-app-primary-medium font-semibold uppercase text-center">Your #1 (One)</Typography>
                      <Typography
                          className='text-center '
                          typo="header-4-semibold"
                      >
                          Product UI/UX Design Company
                      </Typography>
                      <Typography
                          className='xl:w-[50%] lg:w-[60%] w-full mx-auto text-center '
                          typo="body-medium-regular"
                      >
                          We specialize in creating intuitive, user-friendly product interfaces that combine creativity and functionality to elevate digital experiences and engagement.
                      </Typography>
                      <Button
                          variant="outline"
                          className='w-fit mx-auto 2xl:!py-2 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-medium hover:bg-app-primary-medium hover:text-white rounded-full border-2 hover:border-app-primary-deep'
                      >
                          Let&apos;s Talk
                          <ArrowRight />
                      </Button>
                  </div>
                  
                  <div className="w-full lg:py-6 py-3 flex justify-between items-center lg:gap-20 gap-8">
                    <div className="flex-1 xl:h-[650px] lg:h-[550px] md:h-[500px] sm:h-[400px] xs:h-[300px] h-[250px] p-3 border-2 border-dashed rounded-[2rem] overflow-hidden skew-x-6">
                      <Image 
                        src={uiuxheroImg}
                        alt="outsourcing image"
                        className="w-full h-full rounded-[2rem] object-cover "
                      />  
                    </div>

                    <div className="flex-1 xl:h-[650px] lg:h-[550px] md:h-[500px] sm:h-[400px] xs:h-[300px] h-[250px] p-3 border-2 border-dashed rounded-[2rem] overflow-hidden skew-x-6 ">
                      <Image 
                        src={uiuxheroImg2}
                        alt="outsourcing image"
                        className="w-full h-full rounded-[2rem] object-cover"
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
                  To Drive Higher Engagement & Conversion
              </Typography>
              <Typography
                  typo="header-6-regular"
                  className="flex-1 !leading-relaxed"
              >
                  Design smarter, not harder. A UI/UX design and development company focused on results, not just 
                  aesthetics—delivering engagement, retention, and real business growth.
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
