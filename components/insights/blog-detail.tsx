'use client';
import React, { useEffect, useState } from 'react'
import Typography from '../shared/typography';
import { BlogPostProp } from '@/type';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Facebook, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogContent } from '@/constant/insights';
import Link from 'next/link';
import { useParams } from 'next/navigation';



// Metadata should only be exported from Server Components (Page or Layout)
// and is already handled in app/insights/blog/[slug]/page.tsx



function BlogDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const [blogData, setBlogData] = useState<BlogPostProp | null>(null);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    // Priority 1: Check if we can find it in blogContent by slug
    if (slug) {
      const found = blogContent.find(b => {
        // Handle both ID-based and title-based slugs if necessary
        // Our generateSlug logic produces title-based slugs
        const generateSlug = (title: string) => {
          return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .trim();
        };
        return generateSlug(b.title) === slug || b.slug === slug;
      });

      if (found) {
        setBlogData(found as any);
        sessionStorage.setItem('currentBlog', JSON.stringify(found));
      } else {
        // Priority 2: Fallback to sessionStorage
        const data = sessionStorage.getItem('currentBlog');
        if (data) setBlogData(JSON.parse(data));
      }
    } else {
      // Fallback for cases where slug might be missing
      const data = sessionStorage.getItem('currentBlog');
      if (data) setBlogData(JSON.parse(data));
    }

    setShareUrl(window.location.href);
  }, [slug]);

  if (!blogData) return null;

  // Find neighbors
  const currentIndex = blogContent.findIndex(b => b.title === blogData.title);
  const prevBlog = currentIndex > 0 ? blogContent[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogContent.length - 1 ? blogContent[currentIndex + 1] : null;

  return (
    <div className='w-full bg-white'>
      {/* Header Section */}
      <section className='pt-20 pb-16 max-container 2xl:w-[65%] lg:w-[75%] w-[90%] mx-auto flex flex-col items-center text-center'>
        <span className='text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-8'>
          {blogData.published_date}
        </span>

        <h1 className='text-4xl md:text-5xl lg:text-[64px] font-bold text-black leading-[1.1] mb-8 max-w-5xl tracking-tight uppercase'>
          {blogData.title}
        </h1>

        <Typography typo="body-large-regular" className='inter text-black/60 max-w-2xl leading-relaxed text-[18px]'>
          {blogData.description}
        </Typography>
      </section>

      {/* Hero Image Section */}
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-full mx-auto pb-20'>
        <div className='relative w-full aspect-[21/9] md:aspect-[2.4/1] overflow-hidden'>
          <Image
            src={blogData.img}
            alt={blogData.title}
            fill
            className='object-cover'
            priority
          />
        </div>
      </section>

      {/* Content Section */}
      <section className='pb-32 max-container 2xl:w-[45%] lg:w-[55%] md:w-[70%] w-[90%] mx-auto'>
        <div className='flex flex-col gap-12'>
          {blogData?.content?.map((section, idx) => {
            if (section.subtitle === "Share this article") {
              const shareTitle = blogData.title;

              const shareLinks = {
                twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
                linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
                facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
              };

              return (
                <div key={idx} className="flex items-center gap-6 mt-12 pt-12 border-t border-gray-100">
                  <span className='text-[11px] font-bold text-gray-400 uppercase tracking-widest'>Share</span>
                  <div className='flex gap-4'>
                    <a
                      href={shareLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-app-secondary transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={shareLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-app-secondary transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={shareLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-app-secondary transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                  </div>
                </div>
              );
            }

            // Consolidate text into a single markdown string for better parsing of lists/quotes
            const contentMarkdown = section.text.join('\n\n');

            return (
              <div key={idx} className="flex flex-col gap-6">
                {section.subtitle && (
                  <h2 className='text-2xl md:text-3xl font-bold text-black tracking-tight leading-snug'>
                    {section.subtitle}
                  </h2>
                )}

                <div className="flex flex-col gap-6">
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <Typography typo="body-medium-regular" className="inter text-black/70 leading-[1.8] text-[17px] block mb-4">
                          {children}
                        </Typography>
                      ),
                      li: ({ children }) => (
                        <li className="list-disc ml-6 text-black/70 text-[17px] leading-[1.8] mb-3 inter">
                          {children}
                        </li>
                      ),
                      ul: ({ children }) => (
                        <ul className="flex flex-col gap-1 mb-4">
                          {children}
                        </ul>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-bold text-black">{children}</strong>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-2 border-black pl-8 my-10 italic text-black text-xl leading-relaxed font-medium">
                          {children}
                        </blockquote>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-xl font-bold text-black mt-4 mb-2 uppercase tracking-tight">
                          {children}
                        </h3>
                      )
                    }}
                  >
                    {contentMarkdown}
                  </ReactMarkdown>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Navigation Section */}
      <section className='border-t border-gray-100'>
        <div className='max-container 2xl:w-[85%] md:w-[95%] w-full mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Previous Blog */}
            {prevBlog ? (
              <Link
                href={`/blog/${prevBlog.slug}`}
                onClick={() => sessionStorage.setItem('currentBlog', JSON.stringify(prevBlog))}
                className='group flex flex-col gap-4 p-12 md:p-20 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 transition-colors'
              >
                <div className='flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest'>
                  <ChevronLeft size={14} />
                  <span>Previous Article</span>
                </div>
                <h3 className='text-2xl md:text-3xl font-bold text-black uppercase tracking-tight leading-tight group-hover:text-app-secondary transition-colors'>
                  {prevBlog.title}
                </h3>
              </Link>
            ) : (
              <div className='p-12 md:p-20 border-b md:border-b-0 md:border-r border-gray-100 opacity-20'>
                {/* Empty space if no previous blog */}
              </div>
            )}

            {/* Next Blog */}
            {nextBlog ? (
              <Link
                href={`/blog/${nextBlog.slug}`}
                onClick={() => sessionStorage.setItem('currentBlog', JSON.stringify(nextBlog))}
                className='group flex flex-col gap-4 p-12 md:p-20 text-right hover:bg-gray-50 transition-colors'
              >
                <div className='flex items-center justify-end gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest'>
                  <span>Next Article</span>
                  <ChevronRight size={14} />
                </div>
                <h3 className='text-2xl md:text-3xl font-bold text-black uppercase tracking-tight leading-tight group-hover:text-app-secondary transition-colors'>
                  {nextBlog.title}
                </h3>
              </Link>
            ) : (
              <div className='p-12 md:p-20 opacity-20'>
                {/* Empty space if no next blog */}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetail