'use client';
import Typography from '@/components/shared/typography';
import React from 'react';
import BoardTeam from './board-team';
import ManagementTeam from './management-team';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs-team';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.6,
      }
    }
  };
  
  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  };
  
  const tabContentVariants = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  };

function BoardManagementMain() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      className='w-full py-20'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
        <motion.div 
          className='pops w-[500px] flex flex-col gap-4'
          variants={itemVariants}
        >
          <Typography
            typo="header-3-medium"
            className='text-gray-700'
          >
            Leadership & Executive Management
          </Typography>
          <Typography
            className='!font-light text-gray-700'
          >
            Meet the experts behind our success—a diverse team of IT professionals dedicated to delivering the best 
            for our clients.
          </Typography>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Tabs
            defaultValue="management-team"
            className='pt-8'
          >
            <motion.div variants={itemVariants}>
              <TabsList>
                <TabsTrigger value="management-team">Management</TabsTrigger>
                <TabsTrigger value="board-team">Board</TabsTrigger>
              </TabsList>
            </motion.div>
            
            <motion.div variants={tabContentVariants}>
              <TabsContent value="management-team">
                <ManagementTeam />
              </TabsContent>
            </motion.div>
            
            <motion.div variants={tabContentVariants}>
              <TabsContent value="board-team">
                <BoardTeam />
              </TabsContent>
            </motion.div>
          </Tabs>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default BoardManagementMain;