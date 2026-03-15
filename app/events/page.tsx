import EventMainHero from '@/components/insights/events/event-main-hero'
import EventsMain from '@/components/insights/events/events-main'
import UpcomingEvents from '@/components/insights/events/upcoming-events'
import FloatingContactButton from '@/components/reusable/floating-contact-button'
import React from 'react'
import EventsHeroLight from '@/components/insights/events/events-hero-light'
import SpeakersSection from '@/components/insights/events/speakers-section'

export default function EventPage() {
  return (
    <div>
      <EventMainHero />
      <UpcomingEvents />
      <EventsMain />
      <FloatingContactButton />
      {/* Light theme designs moved to individual event pages */}
      {/* <EventsHeroLight /> */}
      {/* <SpeakersSection /> */}
    </div>
  )
}