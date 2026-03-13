'use client';
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { blogContent } from '@/constant/insights';
import Typography from '../shared/typography';
import { BlogCard } from './blog/blog-card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import ScrollReveal from '../reusable/scroll-reveal';
import Link from 'next/link';

const categories = ["All", "Cloud Computing", "AI", "Software Development", "Partnership Alert", "E-Commerce", "Fintech", "Public Sector Solutions"]

function Blog() {
  const [showBlogs, setShowBlogs] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const filteredProjects = selectedCategory === "All"
    ? blogContent
    : blogContent.filter(project => project.category === selectedCategory);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className='w-full py-6 space-y-6'>
      {showBlogs && (
        <ScrollReveal>
          <div className='w-full overflow-auto'>
            <div className='pb-3 flex justify-center items-center gap-4 flex-wrap'>
              {categories.map((category) => (
                <Button
                  variant="outline"
                  type='button'
                  onClick={() => setSelectedCategory(category)}
                  key={category}
                  className={`px-6 py-2 text-[12px] font-bold uppercase tracking-widest rounded-full border-gray-200 hover:border-black transition-all ${selectedCategory === category ? 'bg-black text-white border-black' : 'text-gray-500'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}
      {!showBlogs && (
        <div className="space-y-8">
          <Carousel
            setApi={setApi}
            className="w-full"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <div className="relative">
              <CarouselContent className="flex xl:gap-20 lg:gap-14 gap-12">
                {blogContent.map((data, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <BlogCard data={data} shrinkWidth />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 pb-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${index === current ? "w-8 bg-app-secondary" : "w-1.5 bg-gray-300"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {showBlogs && (
        <div className='w-full'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-20 lg:gap-14 gap-12'>
            {filteredProjects.map((data, index) => (
              <BlogCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      )}
      <div className="w-full pt-16 flex justify-center">
        <Button
          variant="outline"
          className="rounded-sm px-10 py-4 text-[13px] font-bold uppercase tracking-widest text-black border-black hover:bg-black hover:text-white transition-all"
          onClick={() => setShowBlogs(!showBlogs)}
        >
          {showBlogs ? 'View Less' : 'Show More Blogs'}
        </Button>
      </div>
    </div>
  );
}

export default Blog;
