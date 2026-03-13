'use client';
import React from 'react'
import Typography from '../shared/typography';
import { EventProp } from '@/type';
import Image from 'next/image';
import { Button } from '../ui/button';
import { CalendarIcon, ClockIcon, ExternalLinkIcon, MapPinIcon } from 'lucide-react';
import googleCalendarIcon from "@/public/assets/icons/insights/google_calendar_icon.png"
import yahooCalendarIcon from "@/public/assets/icons/insights/yahoo_calendar_icon.webp"
import appleDateIcon from "@/public/assets/icons/insights/apple_date_icon.webp"
import outlookDateIcon from "@/public/assets/icons/insights/outlook_date_icon.jpg"
import { Card } from '../ui/card';
import SpeakerShowcase from './events/speaker-showcase';
import EventAgenda from './events/event-agenda';

const add_calenders = [
  {
    id: "1",
    name: "Google",
    icon: googleCalendarIcon,
  },
  {
    id: "2",
    name: "Yahoo",
    icon: yahooCalendarIcon,
  },
  {
    id: "3",
    name: "Apple",
    icon: appleDateIcon,
  },
  {
    id: "4",
    name: "Outlook",
    icon: outlookDateIcon,
  },
]

interface EventDetailProps {
  event: EventProp;
}

function EventDetail({ event }: EventDetailProps) {
  const eventData = event;

  const handleJoinMeeting = () => {
    if (!eventData?.event_link) return;

    try {
      new URL(eventData.event_link);
      window.open(eventData.event_link, '_blank', 'noopener,noreferrer');
    } catch (e) {
      console.error('Invalid meeting URL:', e);
    }
  };

  const addToGoogleCalendar = () => {
    if (!eventData) return;

    const dateParts = eventData.date.split(' ');
    const month = dateParts[1];
    const day = dateParts[2].replace(',', '');
    const year = dateParts[3];

    const timeParts = eventData.time.split(' ');
    const [hours, minutes] = timeParts[0].split(':');
    const isPM = timeParts[1] === 'PM';

    let hourNum = parseInt(hours, 10);
    if (isPM && hourNum < 12) hourNum += 12;
    if (!isPM && hourNum === 12) hourNum = 0;

    const startDate = new Date(`${month} ${day}, ${year} ${hourNum}:${minutes}:00 GMT+1`);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

    const formatForGoogle = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const googleCalendarUrl = new URL('https://www.google.com/calendar/render');
    googleCalendarUrl.searchParams.set('action', 'TEMPLATE');
    googleCalendarUrl.searchParams.set('text', eventData.title);
    googleCalendarUrl.searchParams.set('dates', `${formatForGoogle(startDate)}/${formatForGoogle(endDate)}`);
    googleCalendarUrl.searchParams.set('details', eventData.main_description);
    googleCalendarUrl.searchParams.set('location', eventData.location);
    googleCalendarUrl.searchParams.set('sprop', 'website:' + window.location.href);
    googleCalendarUrl.searchParams.set('sprop', 'name:Heirs Technologies');

    if (eventData.event_link) {
      googleCalendarUrl.searchParams.set('add', eventData.event_link);
    }

    window.open(googleCalendarUrl.toString(), '_blank', 'noopener,noreferrer');
  };

  const isOnline = eventData.event_type === 'online';
  const bgColor = isOnline ? 'bg-gradient-to-b from-blue-50 to-white' : 'bg-white';
  const accentColor = isOnline ? 'text-blue-600' : 'text-gray-800';
  const badgeBg = isOnline ? 'bg-blue-600' : 'bg-gray-700';

  return (
    <div className={`w-full py-12 ${bgColor}`}>
      <section className='max-container 2xl:w-[55%] lg:w-[65%] w-[90%] mx-auto flex flex-col gap-4'>
        {eventData && (
          <div className='flex flex-col items-center gap-6'>
            {/* Event Type Badge */}
            <div className='flex items-center gap-3'>
              <span className={`px-4 py-1.5 ${badgeBg} text-white text-sm font-semibold rounded-full uppercase`}>
                {isOnline ? 'Online Event' : 'In-Person Event'}
              </span>
            </div>

            <Typography typo="body-medium-semibold" className={`uppercase ${accentColor}`}>
              Event
            </Typography>
            <Typography typo="header-4-semibold" className='text-center'>
              {eventData?.title}
            </Typography>
            <div className='flex flex-col items-center gap-'>
              <Typography typo="body-medium-light">
                Published on {eventData.published_date}
              </Typography>

            </div>
            <div className='w-full xl:h-[400px] md:h-[250px] sm:h-[500px] xs:h-[400px] h-[300px] p-2 rounded-xl bg-white'>
              <Image
                src={eventData?.img}
                alt={`Event ${eventData.id}`}
                className='w-full h-full rounded-xl object-cover'
              />
            </div>
            <div className='w-full py-4 flex flex-col gap-3'>
              {eventData.description.map(desc => (
                <div key={desc.id} className='flex flex-col'>
                  {desc.contents.map(data => (
                    <Typography key={data} typo="body-medium-regular" className='text-gray-600'>
                      {data}
                    </Typography>

                  ))}

                </div>
              ))}

            </div>

            <div className='w-full flex justify-between gap-6'>
              <div className='flex-1 flex flex-col gap-3'>
                <div className='w-full flex flex-col gap-4 bg-white p-6 rounded-lg shadow-sm'>
                  <div className='flex items-center gap-3'>
                    <CalendarIcon className='w-5 h-5 text-primary' />
                    <Typography typo="body-medium-regular">
                      {eventData.date}
                    </Typography>
                  </div>

                  <div className='flex items-center gap-3'>
                    <ClockIcon className='w-5 h-5 text-primary' />
                    <Typography typo="body-medium-regular">
                      {eventData.time}
                    </Typography>
                  </div>

                  {eventData.location && (
                    <div className='flex items-center gap-3'>
                      <MapPinIcon className='w-5 h-5 text-primary' />
                      <Typography typo="body-medium-regular">
                        {eventData.location}
                      </Typography>
                    </div>
                  )}

                  <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                    {eventData.event_link && (
                      <Button
                        variant="primary"
                        onClick={handleJoinMeeting}
                        className='flex items-center gap-2'
                      >
                        <span>Join Meeting</span>
                        <ExternalLinkIcon className='w-4 h-4' />
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      onClick={addToGoogleCalendar}
                      className='flex items-center gap-2 text-gray-600 hover:text-primary'
                    >
                      <span>Add to Calendar</span>
                      <CalendarIcon className='w-4 h-4' />
                    </Button>
                  </div>
                </div>
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
                  <Button
                    variant="primary"
                    className='w-full'
                  >Get Tickets</Button>
                </Card>
              </div>
              <div className='flex-1 flex flex-col gap-4'>
                <div className='w-full flex-1 p-6 flex flex-col gap-4 bg-white rounded-lg '>
                  <Typography
                    typo="header-6-semibold"
                  >Add to Calendar</Typography>
                  <div className='flex flex-col gap-3'>
                    {add_calenders.map((data, index) => (
                      <div key={data.id} className='w-[40%] px-2 py-1 flex items-center gap-2 border rounded-md'>
                        <Image
                          src={data.icon}
                          alt={`Date icon+${index + 1}`}
                          className='w-5 h-fit'
                        />
                        <Typography
                          typo="body-medium-semibold"
                        >{data.name}</Typography>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='w-full flex-1 flex flex-col gap-4'>
                  <Typography
                    typo="header-5-semibold"
                  >Tags</Typography>
                  <div className='flex items-center gap-3'>
                    <span className='w-fit px-2 py-1 uppercase text-sm border rounded-md'>Webinar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Speaker Showcase - Only show if event has speakers */}
      {eventData?.speakers && eventData.speakers.length > 0 && (
        <SpeakerShowcase
          speakers={eventData.speakers}
          eventType={eventData.event_type}
        />
      )}

      {/* Event Agenda - Only show if event has agenda */}
      {eventData?.agenda && eventData.agenda.length > 0 && (
        <EventAgenda
          agenda={eventData.agenda}
          speakers={eventData.speakers}
          eventType={eventData.event_type}
        />
      )}
    </div>
  );
}

export default EventDetail