import Typography from '@/components/shared/typography'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import linkedIcon from "@/public/assets/icons/career_icons/linkedin.svg";
import isafaImg from "@/public/assets/images/about/career_5.jpg"
import kabuteyImg from "@/public/assets/images/about/team/kabutey_img.jpg"
import defaultImg from "@/public/assets/images/about/team/vecteezy_simple-user-default-icon_24983914.png"
import richardImg from "@/public/assets/images/about/team/richard_img.jpeg"
import jallowImg from "@/public/assets/images/about/team/jallow_img.jpeg"
// import jengImg from "@/public/assets/images/about/team/jeng_img.jpg"
import sillaImg from "@/public/assets/images/about/team/silla_img.jpg"
import dushieImg from "@/public/assets/images/about/team/dushie_img.png"
// import amaviImg from "@/public/assets/images/about/team/amavi_img.jpeg"
import { TeamMember } from '@/type';


const team_members: TeamMember[] = [
    {
        id: "1",
        name: "Isata P.B Dainkeh",
        is_board: true,
        title: "Cheif Executive Officer",
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ],
        img: isafaImg,
    },
    {
        id: "2",
        name: "Eric Kabutey",
        is_board: true,
        title: "CEO  & Tech ",
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ],
        img: defaultImg,
    },
    {
        id: "3",
        name: "Richard K. Asante",
        is_board: true,
        title: "Director",
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ],
        img: richardImg,
    },
    {
        id: "4",
        name: "Mahmoud Jallow",
        is_board: true,
        title: "Financial Advisor",
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ],
        img: jallowImg,
    },
    {
        id: "6",
        name: "MUHAMMED SILLAH",
        is_board: true,
        title: "Director - Public Relations & Global Product Delivery",
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ],
        img: sillaImg,
    },
    {
        id: "7",
        name: "Emmanuel Dushie",
        is_board: true,
        title: "Executive Director",
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ],
        img: dushieImg,
    },
]

function BoardTeam() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

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
    return (
        <div className='w-full'>
            {/* <div className='w-full xl:pt-8 xs:pt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xs:gap-8 gap-4'>
            {team_members.map((data, index) => (
                <div 
                    className='relative group'
                    key={data.id}
                >
                    <div className='w-full overflow-hidden'>
                        <Image
                            src={data.img}
                            alt={`${data.name} ${index+1}`}
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                    <div className='w-full xs:pt-5 pt-3 flex flex-col space-y-1'>
                        <div className='w-full flex justify-between items-center gap-3'>
                            <Typography
                                typo="body-large-semibold"
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
            <div className='w-full xl:pt-8 xs:pt-4 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 xs:gap-20 gap-4'>
                {team_members.map((data, index) => (
                    <div
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
                        key={data.id}
                    >
                        <div className='w-full h-[370px] rounded-2xl overflow-hidden'>
                            <Image
                                src={data.img}
                                alt={`${data.name} ${index + 1}`}
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
                ))}
            </div>
        </div>
    )
}

export default BoardTeam