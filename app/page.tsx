import InsightsMain from '@/components/insights/insights-main'
import FloatingContactButton from '@/components/reusable/floating-contact-button'
import React, { Suspense } from 'react'

function InsightsPage() {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <InsightsMain />
        </Suspense>
        <FloatingContactButton />
    </div>
  )
}

export default InsightsPage