'use client';
import { motion, Variants } from 'framer-motion';
import Typography from '@/components/shared/typography';
import { technical_team } from '@/constant/overview';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import ScrollReveal from '@/components/reusable/scroll-reveal';

function TechnicalTeam() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut', 
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut', 
      },
    },
  };

  return (
    <motion.div
      className='w-full flex flex-col bg-white'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className='w-full py-12 bg-gray-100'>
        <motion.div
          className='max-container 2xl:w-[85%] md:w-[95%] w-[90%]'
          variants={cardVariants}
        >
          <ScrollReveal>
            <div className='sm:w-[400px] flex flex-col gap-2'>
              <Typography typo="body-medium-medium">Our Team</Typography>
              <Typography typo="header-3-semibold">
                40yrs approximate experience combined
              </Typography>
            </div>
          </ScrollReveal>
        </motion.div>
      </section>
        <div className='w-full py-12'>
            <motion.section
                className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] py-16 px-4 border border-dashed rounded-lg'
                variants={containerVariants}
            >
                <motion.div
                className='w-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 '
                variants={containerVariants}
                >
                {technical_team.map((data, index) => (
                  <ScrollReveal key={data.id} delay={index * 0.15}>
                    <motion.div
                      key={index}
                      className='w-full pb-8 flex flex-col gap-4'
                      variants={cardVariants}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                    <div className='relative w-full max-h-[300px] 2xl:h-[300px] xl:h-[280px] lg:h-[300px] md:h-[230px] sm:h-[280px] rounded-xl overflow-hidden group'>
                        <Image
                        src={data.img}
                        alt={`Member ${index + 1}`}
                        className='w-full h-full object-cover rounded-full border border-gray-300 bg-gray-300'
                        />

                        <div className='absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#545454]/90 via-[#545454]/60 to-transparent rounded-b-xl transition-all duration-500 ease-in-out group-hover:h-1/3'></div>

                        <div className='absolute bottom-4 left-5 p-2 rounded-full bg-white border border-gray-300 opacity-0 translate-y-3 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 z-10'>
                        <Linkedin size={18} color='#545454' strokeWidth={1.5} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <Typography
                            typo="body-large-semibold"
                        >{data.name}</Typography>
                        <Typography
                            typo="body-medium-medium"
                        >{data.title}</Typography>
                    </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
                </motion.div>
            </motion.section>
        </div>
    </motion.div>
  );
}

export default TechnicalTeam;
