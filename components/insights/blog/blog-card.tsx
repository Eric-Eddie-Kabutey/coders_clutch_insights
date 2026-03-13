'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@/components/shared/typography';

import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
    data: any;
    shrinkWidth?: boolean;
}

export const BlogCard = ({ data, shrinkWidth }: BlogCardProps) => {
    // Helper to create a URL-friendly slug from the title
    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special chars
            .replace(/\s+/g, '-')      // Replace spaces with hyphens
            .replace(/--+/g, '-')      // Replace multiple hyphens with single hyphen
            .trim();
    };

    const slug = generateSlug(data.title);

    return (
        <Link
            href={`/insights/blog/${slug}`}
            onClick={() => {
                sessionStorage.setItem('currentBlog', JSON.stringify(data));
            }}
            className={`group flex flex-col h-full ${shrinkWidth ? 'w-full' : ''}`}
        >
            {/* Image Container */}
            <div className='relative w-full aspect-[4/3] bg-gray-50 rounded-sm overflow-hidden mb-4 block'>
                <Image
                    src={data.image.src || data.img}
                    alt={data.image.alt || data.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-app-primary-deep/50 to-transparent'></div>
            </div>

            <span className='text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] text-right mb-4'>
                {data.category}
            </span>
            <div className='flex flex-col flex-1'>
                <h3 className='text-xl xl:text-[22px] font-bold text-black uppercase tracking-tight leading-snug'>
                    {data.title}
                </h3>

                <Typography
                    typo="body-small-regular"
                    className='inter !leading-[1.7] text-black/60 line-clamp-2 mt-2 mb-4 text-[14px]'
                >
                    {data.description}
                </Typography>

                <div className='mt-auto mb-20'>
                    <div className="inline-flex items-center gap-0 text-gray-900 group-hover:text-app-secondary text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300">
                        <span>View Blog</span>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-2" />
                    </div>
                </div>
            </div>
        </Link>
    );
};
