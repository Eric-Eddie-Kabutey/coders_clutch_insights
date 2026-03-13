import BlogDetail from '@/components/insights/blog-detail'
import React from 'react'
import { generateMetadata } from '../../metadata';
import FloatingContactButton from '@/components/reusable/floating-contact-button';


export const metadata = generateMetadata({
  title: "How AI‑Powered Fraud Detection Is Revolutionizing Banking Security in Africa",
  description: "AI fraud detection is transforming banking security across Africa—explore real‑time systems, case studies in Ghana, Gambia, South Africa, and best practices.",
  url: "/insights",
});


function InsightsDetail() {
  return (
    <div>
        <BlogDetail />
        <FloatingContactButton />
    </div>
  )
}

export default InsightsDetail