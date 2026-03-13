'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import Typography from '../shared/typography';
import { ArrowUpRight } from 'lucide-react';
import { ProjectProp } from '@/type';

interface ProjectCardProps {
    data: ProjectProp;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, index }) => {
    return (
        <Link href={`/portfolio/${data.slug || '#'}`} className="block group">
            <Card className='rounded-none border-none shadow-none bg-transparent group/card'>
                <div className='relative overflow-hidden w-full'>
                    <div className="w-full aspect-[16/10] overflow-hidden rounded-none">
                        <Image
                            src={data.img}
                            alt={`Project ${index + 1}`}
                            width={1200}
                            height={750}
                            className="warp-img w-full h-full object-cover will-change-transform transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
                <CardContent className='py-6 px-0 text-left flex flex-col gap-2'>
                    <Typography
                        typo="body-small-medium"
                        className="text-app-primary-medium/50 uppercase tracking-[0.2em] !font-['Helvetica','Arial',sans-serif] opacity-80"
                    >
                        {data.category}
                    </Typography>
                    <div className="relative group/title cursor-pointer w-fit">
                        <Typography
                            typo="header-3-semibold"
                            className="!font-['Helvetica','Arial',sans-serif] transition-colors duration-300 flex items-center gap-1"
                        >
                            <p className="text-app-primary-medium group-hover/card:text-app-primary-medium/90">{data.title}</p>
                            <div className="relative overflow-hidden w-8 h-8 flex items-center justify-center">
                                <ArrowUpRight
                                    className="absolute transition-all duration-500 transform translate-y-4 -translate-x-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 text-app-secondary"
                                    size={32}
                                />
                                <ArrowUpRight
                                    className="absolute transition-all duration-500 transform group-hover/card:-translate-y-4 group-hover/card:translate-x-4 group-hover/card:opacity-0 text-app-secondary"
                                    size={32}
                                />
                            </div>
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProjectCard;
