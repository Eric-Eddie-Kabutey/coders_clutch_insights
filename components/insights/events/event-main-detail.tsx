'use client';
import Image from 'next/image'
import React from 'react';
import eventMainImg from "@/public/assets/images/insights/event_1.png"
import Typography from '@/components/shared/typography';
import { CalendarDays, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const event_schedules = [
  {
    id: "1",
    period: "9:30 am - 11:00 am",
    location: "Innovation Stage A",
    title: "The Future of AI in Enterprise Systems",
    description: `Understand how artificial intelligence is reshaping enterprise decision-making, automation, and customer engagement.`,
  },
  {
    id: "2",
    period: "9:30 am - 11:00 am",
    location: "Innovation Stage A",
    title: "The Future of AI in Enterprise Systems",
    description: `Understand how artificial intelligence is reshaping enterprise decision-making, automation, and customer engagement.`,
  },
  {
    id: "3",
    period: "9:30 am - 11:00 am",
    location: "Innovation Stage A",
    title: "The Future of AI in Enterprise Systems",
    description: `Understand how artificial intelligence is reshaping enterprise decision-making, automation, and customer engagement.`,
  },
  {
    id: "4",
    period: "9:30 am - 11:00 am",
    location: "Innovation Stage A",
    title: "The Future of AI in Enterprise Systems",
    description: `Understand how artificial intelligence is reshaping enterprise decision-making, automation, and customer engagement.`,
  },
]

function EventMainDetail() {
  return (
    <div className='w-full flex flex-col '>
      <section className='w-full sm:h-[400px] h-[350px] relative group'>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/70 z-10 rounded-[1.2rem] transition-all duration-300"></div>
        <div className='w-full h-full'>
          <Image 
            src={eventMainImg}
            alt='Event main Image'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto absolute inset-0 flex flex-col gap-4 z-20'>
          <div className='w-full sm:py-12 py-7 flex flex-col justify-center items-center gap-2 text-white '>
            <button type='button'
              className='w-fit mx-auto px-2 py-1 border border-white rounded-md'
            >Webinar</button>
            <Typography
              typo="header-3-semibold"
              className='text-center'
            >
              Webinar: Ghana&apos;s Leading Africa&apos;s ESG Journey
            </Typography>
          </div>
          <div className='w-full flex justify-center items-center gap-4'>
            <div className='flex items-center gap-2 text-white'>
              <CalendarDays size={20} />
              <Typography
                typo="body-large-medium"
              >April 4, 2025</Typography>
            </div>
            <div className='flex items-center gap-2 text-white'>
              <MapPin size={20}  />
              <Typography
                typo="body-large-medium"
              >Online</Typography>
            </div>
          </div>
          <div className='sm:pt-5 pt-3 text-center text-white'>
            <Typography
              typo="body-large-medium"
            >This event has expired</Typography>
          </div>
        </div>
      </section>

      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto py-8 flex lg:flex-row flex-col xl:gap-16 gap-10'>
        <div className='flex-1 flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <Typography
              typo="body-medium-regular"
            >
              Ghana is leading the charge in Environmental, Social, and Governance (ESG) initiatives, setting a benchmark for sustainable growth in Africa. Join us for this exclusive LinkedIn Live webinar, hosted by Sustainical and BlueSPACE Financial Cloud, where industry leaders, policymakers, and investors will discuss the future of ESG in Ghana and beyond.
            </Typography>
          </div>
          <div className='w-full flex flex-col gap-4'>
            <Typography
              typo="header-5-semibold"
            >Tags</Typography>
            <div className='flex items-center gap-3'>
              <span className='w-fit px-2 py-1 uppercase text-sm border rounded-md'>Webinar</span>
            </div>
          </div>
          <div className='w-full flex flex-col gap-4'>
            <Typography
              typo="header-5-semibold"
            >Schedule</Typography>
            <div className='flex flex-col gap-2'>
              {event_schedules.map(data => (
                <div key={data.id} className='w-full py-3 flex sm:flex-row flex-col xl:gap-12 gap-6 border-b border-gray-300'>
                  <div className='xl:min-w-[250px] md:min-w-[200px] min-w-[150px] flex flex-col sm:gap-3 gap-2 text-gray-500'>
                    <Typography typo="body-medium-medium">{data.period}</Typography>
                    <div className='flex items-center gap-2'>
                      <MapPin size={16} />
                      <span className='text-sm'>{data.location}</span>
                    </div>
                  </div>
                  <div className='flex flex-col sm:gap-3 gap-2'>
                    <Typography
                      typo="body-large-semibold"
                    >{data.title}</Typography>
                    <Typography
                      typo="body-medium-regular"
                    >
                      {data.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='sm:w-[400px] w-full flex flex-col sm:gap-8 gap-4'>
          <Card className='w-full p-7 flex flex-col gap-2 bg-white rounded-md'>
              <div className='flex items-center gap-2'>
                <Typography
                  typo="body-medium-semibold"
                >Time: </Typography>
                <Typography
                  typo="body-medium-regular"
                >11:00 am - 1:00 pm</Typography>
              </div>
              <Typography
                typo="body-medium-regular"
              >(Africa/Accra)</Typography>
          </Card>
          <Card className='w-full p-7 flex flex-col xs:gap-5 gap-3 bg-white rounded-md'>
              <Typography
                typo="header-6-semibold"
              >Tickets</Typography>
              <div className='py-3 text-center border border-red-600 bg-red-50 rounded-lg'>
                <Typography
                  typo="body-medium-light"
                >Sorry! This event has expired!</Typography>
              </div>
              <div className='w-full flex items-center justify-between gap-4'>
                <div className='flex items-center gap-2'>
                  <span className='font-medium text-gray-400'>Quantity: </span>
                  <span className='font-semibold text-lg text-black'>0</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className='font-medium text-gray-400'>Total: </span>
                  <span className='font-semibold text-lg text-black'>GHS 0</span>
                </div>
              </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default EventMainDetail