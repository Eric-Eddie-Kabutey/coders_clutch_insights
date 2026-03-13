'use client'
import FloatingContactButton from '@/components/reusable/floating-contact-button'
import EventDetailHeroLight from '@/components/insights/events/event-detail-hero-light'
import SpeakersSection from '@/components/insights/events/speakers-section'
import EventAgenda from '@/components/insights/events/event-agenda'
import ApplyInviteSection from '@/components/insights/events/apply-invite-section'
import { insight_events } from '@/constant'
import { useParams } from 'next/navigation'
import React from 'react'

function EventDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const event = insight_events.find(e => e.event_slug === slug)

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Event Not Found</h1>
          <p className="text-gray-500">The exclusive event you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-white'>
      {/* New Light Theme Design */}
      <EventDetailHeroLight />

      {/* New Professional Event Overview Section */}
      <div className='w-full py-24 bg-white border-b border-gray-100'>
        <div className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
            {/* When Section */}
            <div className='flex flex-col gap-4 border-l-2 border-gray-900 pl-8'>
              <span className='text-gray-400 font-medium tracking-widest uppercase text-sm'>When</span>
              <div className='flex flex-col'>
                <p className='text-3xl font-bold text-gray-900'>{event.date}</p>
                <p className='text-xl text-gray-500 mt-1'>{event.time}</p>
              </div>
            </div>

            {/* Where Section */}
            <div className='flex flex-col gap-4 border-l-2 border-gray-100 pl-8'>
              <span className='text-gray-400 font-medium tracking-widest uppercase text-sm'>Where</span>
              <div className='flex flex-col'>
                <p className='text-3xl font-bold text-gray-900'>{event.location}</p>
                <p className='text-xl text-gray-500 mt-1'>{event.event_type === 'online' ? 'Global Virtual Access' : 'In-Person Venue'}</p>
              </div>
            </div>

            {/* Capacity/Pricing Section */}
            <div className='flex flex-col gap-4 border-l-2 border-gray-100 pl-8'>
              <span className='text-gray-400 font-medium tracking-widest uppercase text-sm'>Details</span>
              <div className='flex flex-col'>
                <p className='text-3xl font-bold text-gray-900'>
                  {event.price ? `${event.price.amount} ${event.price.currency}` : 'Free Access'}
                </p>
                <p className='text-xl text-gray-500 mt-1'>
                  {event.max_attendees ? `${event.max_attendees - (event.current_attendees || 0)} Seats Remaining` : 'Open Registration'}
                </p>
              </div>
            </div>

            {/* Actions Section */}
            <div className='flex flex-col gap-4 justify-center'>
              <div className='flex flex-col gap-3'>
                <button
                  onClick={() => {
                    const section = document.getElementById('apply-invite');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className='w-full bg-gray-900 text-white font-bold py-4 px-8 rounded-full hover:bg-black transition-all duration-300 flex items-center justify-center gap-3 group'
                >
                  <span>Apply for Invite</span>
                  <span className='group-hover:translate-x-1 transition-transform'>→</span>
                </button>

                <button
                  onClick={() => {
                    const startDate = new Date(event.date).toISOString().replace(/-|:|\.\d\d\d/g, '');
                    const endDate = new Date(new Date(event.date).getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g, '');
                    window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}/${endDate}`, '_blank');
                  }}
                  className='text-gray-900 font-bold flex items-center justify-center gap-2 hover:underline text-sm uppercase tracking-widest'
                >
                  SAVE TO CALENDAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Speakers Section - Only show if event has speakers */}
      {event.speakers && event.speakers.length > 0 && (
        <div className='w-full py-20 bg-gray-50'>
          <div className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='grid grid-cols-5 items-center gap-2 mb-16'>
              <h2 className='col-span-3 text-7xl font-bold text-gray-900 uppercase -tracking-[0.1em]'>MEET OUR SPEAKERS</h2>
              <p className='col-span-2 text-xl text-gray-600 '>
                Gain insight from world-class sleaders, innovators, and experts who are shaping the future of technology. Each speaker brings unique perspectives, real-world experience, and actionable knowledge you can apply right away.
              </p>
            </div>
            <div className='grid grid-cols-3 gap-6'>
              {event.speakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className='group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer'
                >
                  <div className='relative aspect-[3/4] overflow-hidden'>
                    <img
                      src={speaker.image.src}
                      alt={speaker.name}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent'>
                      <p className='text-white text-2xl font-bold'>{speaker.name}</p>
                      <p className='text-gray-300 text-lg'>{speaker.role}</p>
                      {speaker.company && (
                        <p className='text-gray-400 text-sm font-lighter'>{speaker.company}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Event Agenda - Only show if event has agenda */}
      {event.agenda && event.agenda.length > 0 && (
        <EventAgenda
          agenda={event.agenda}
          speakers={event.speakers}
          eventType={event.event_type}
        />
      )}

      {/* New Apply for Invite Section */}
      <ApplyInviteSection />

      {/* Old Design - Commented Out */}
      {/* <EventDetail event={event} /> */}
      <FloatingContactButton />
    </div>
  )
}

export default EventDetailPage