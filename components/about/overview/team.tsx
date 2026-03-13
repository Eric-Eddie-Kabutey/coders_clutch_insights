
'use client';
import React, { useEffect, useRef, useState } from 'react'
import linkedIcon from "@/public/assets/icons/career_icons/linkedin.svg";
import Typography from '@/components/shared/typography'
import Image from 'next/image';
import { TeamDetailModal } from './team-modal';
import { TeamMember } from '@/type';
import { team_members } from '@/constant/overview';
import ScrollReveal from '@/components/reusable/scroll-reveal';


function TeamSection() {
    const [openDetail, setOpenDetail] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const fullText = "Our Board of Directors";
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const typingSpeed = 50;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
        const card = cardRefs.current[id];
        if (card) {
          const rect = card.getBoundingClientRect();
          setCursorPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }
        setHoveredCard(id);
      };
    
      const handleMouseLeave = () => {
        setHoveredCard(null);
      };

    const handleMemberClick = (member: TeamMember): void => {
        setSelectedMember(member);
        setOpenDetail(true);
    };

    useEffect(() => {
            if (displayedText.length < fullText.length) {
              const timeout = setTimeout(() => {
                setDisplayedText(fullText.substring(0, displayedText.length + 1));
              }, typingSpeed);
        
              return () => clearTimeout(timeout);
            } else {
              const cursorTimeout = setTimeout(() => {
                setShowCursor(false);
              }, 500);
              return () => clearTimeout(cursorTimeout);
            }
          }, [displayedText, fullText]);
    
  return (
    <div className='w-full md:py-32 py-20 bg-[#F4F4F4]' id='border-directors'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col md:gap-4 gap-3'>
            <ScrollReveal>
                <Typography
                    typo="header-3-semibold"
                    className='w-fit mx-auto text-center '
                >
                    {displayedText}
                    {showCursor && <span className="animate-pulse">|</span>}
                </Typography>
            </ScrollReveal>
            <div className='w-full xl:pt-8 xs:pt-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xl:gap-16 gap-8'>
                {team_members.map((data, index) => (
                    <ScrollReveal key={data.id} delay={index * 0.15}>
                        <div 
                            onClick={() => handleMemberClick(data)}
                            ref={(el) => {
                                if (el) {
                                cardRefs.current[data.id] = el;
                                } else {
                                delete cardRefs.current[data.id];
                                }
                            }}
                            onMouseMove={(e) => handleMouseMove(e, data.id)}
                            onMouseLeave={handleMouseLeave}
                            className='relative group bg-white rounded-2xl shadow-md cursor-pointer'
                        >
                            <div className='w-full md:h-[370px] sm:h-[300px] xs:h-[360px] h-[340px] rounded-2xl overflow-hidden'>
                                <Image 
                                    src={data.img}
                                    alt={`${data.name} ${index+1}`}
                                    className='w-full h-full object-cover object-top rounded-2xl hover:rounded-2xl group-hover:scale-105 transition-transform duration-300'
                                />
                                {hoveredCard === data.id && (
                                    <div 
                                        className='absolute rounded-full pointer-events-none'
                                        style={{
                                            left: `${cursorPosition.x}px`,
                                            top: `${cursorPosition.y}px`,
                                            width: '60px',
                                            height: '60px',
                                            background: 'radial-gradient(circle, rgba(255,135,51,0.4) 100%, rgba(255,255,255,0) 70%)',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    />
                                )}
                            </div>
                            <div className='w-full px-6 xs:py-6 py-3 flex flex-col space-y-1'>
                                <div className='w-full flex justify-between items-center gap-3'>
                                    <Typography
                                        typo="header-6-semibold"
                                        className='text-gray-600 !font-bold'
                                    >
                                        {data.name}
                                    </Typography>
                                    <div className='w-6 h-fit'>
                                        <Image 
                                            src={linkedIcon}
                                            alt='LinkedIn'
                                            className='w-full h-full'
                                        />
                                    </div>
                                </div>
                                <Typography
                                    typo="body-medium-medium"
                                    className='text-gray-500'
                                >
                                    {data.title}
                                </Typography>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* <div className='w-full xl:pt-8 xs:pt-4 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 xs:gap-20 gap-4'>
                {team_members.map((data, index) => (
                    <div 
                        onClick={() => handleMemberClick(data)}
                        className='bg-white rounded-2xl shadow-md cursor-pointer'
                        key={data.id}
                    >
                        <div className='w-full h-[370px]'>
                            <Image 
                                src={data.img}
                                alt={`${data.name} ${index+1}`}
                                className='w-full h-full object-cover object-top rounded-2xl'
                            />
                        </div>
                        <div className='w-full px-6 xs:py-6 py-3 flex flex-col space-y-1'>
                            <div className='w-full flex justify-between items-center gap-3'>
                                <Typography
                                    typo="header-6-semibold"
                                    className='text-gray-600 !font-bold'
                                >
                                    {data.name}
                                </Typography>
                                <div className='w-6 h-fit'>
                                    <Image 
                                        src={linkedIcon}
                                        alt='LinkedIn'
                                        className='w-full h-full'
                                    />
                                </div>
                            </div>
                            <Typography
                                typo="body-medium-medium"
                                className='text-gray-500'
                            >
                                {data.title}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div> */}
        </section>
        <TeamDetailModal 
            open={openDetail} 
            setOpen={setOpenDetail} 
            member={selectedMember} 
        />
    </div>
  )
}

export default TeamSection