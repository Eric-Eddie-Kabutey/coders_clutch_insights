import BlogHero from '@/components/insights/blog/blog-hero'
import BlogMain from '@/components/insights/blog/blog-main'
import FloatingContactButton from '@/components/reusable/floating-contact-button'
import React from 'react'

function BlogPage() {
  return (
    <div>
        <BlogHero />
        <BlogMain />
        <FloatingContactButton />
    </div>
  )
}

export default BlogPage