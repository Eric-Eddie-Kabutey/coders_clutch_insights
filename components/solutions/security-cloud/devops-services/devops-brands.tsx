'use client';
import React, { useEffect, useState } from 'react'
import gtBankImg from "@/public/assets/images/solutions/brands/gtbank-circular.png";
import accessBankImg from "@/public/assets/images/solutions/brands/access-bank-circular.png";
import alatBankImg from "@/public/assets/images/solutions/brands/alat-circular.png";
import ecobankImg from "@/public/assets/images/solutions/brands/ecobank-circular.png";
import fcmbBankImg from "@/public/assets/images/solutions/brands/fcmb-circular.png";
import firstBankImg from "@/public/assets/images/solutions/brands/first-bank-circular.png";
import ubaBankImg from "@/public/assets/images/solutions/brands/uba-circular.png";
import zenithBankImg from "@/public/assets/images/solutions/brands/zenith-bank-circular.png";
import Typography from '@/components/shared/typography';
import Image from 'next/image';

function DevopsBrands() {
  const brandBank = [
      gtBankImg, accessBankImg, alatBankImg, ecobankImg,
      fcmbBankImg, firstBankImg, ubaBankImg, zenithBankImg
    ].map((img, i) => ({ id: i + 1, img }));
  
    const impactStats = [
      { id: 1, value: "100+", label: "On-Time Delivery", percentage: 100, color: "#00312F" },
      { id: 2, value: "500+", label: "Skilled DevOps Engineers", percentage: 70, color: "#FF6900" },
      { id: 3, value: "70+", label: "Flexible Hiring Model", percentage: 77, color: "#FFCB40" },
      { id: 4, value: "17+", label: "Best Security Integration", percentage: 40, color: "#2E76F6" },
    ];
  
    const [logos, setLogos] = useState(() => ([
        {
            id: 'title',
            isTitle: true,
            x: 50,
            y: 0,
            speed: 1.0,
            active: true,
        },
        ...brandBank.map(brand => ({
            ...brand,
            isTitle: false,
            x: Math.random() * 90,
            y: 0,
            speed: 0.6 + Math.random() * 0.5,
            size: 50 + Math.floor(Math.random() * 90),
            active: false,
        }))
    ]));

    useEffect(() => {
        const interval = setInterval(() => {
            setLogos(prev =>
            prev.map(logo => {
                if (!logo.active) return logo;
                const newY = logo.y + logo.speed;
                return { ...logo, y: newY, active: newY <= 100 };
            }).map((logo, _, arr) => {
                if (logo.active || logo.isTitle) return logo;
                const activeCount = arr.filter(l => l.active && !l.isTitle).length;
                if (activeCount < 5 && Math.random() < 0.1) {
                return {
                    ...logo,
                    x: Math.random() * 90,
                    y: 0,
                    speed: 0.4 + Math.random() * 0.5,
                    active: true,
                };
                }
                return logo;
            })
            );
        }, 50);

        return () => clearInterval(interval);
    }, []);
  return (
    <div className='w-full pb-32'>
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex lg:flex-row flex-col items-stretch justify-between'>
        <div className='flex-1 pt-20 flex flex-col gap-4'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-4'>
                <Typography
                    typo="header-3-light"
                >
                    Why choose CODERS Clutch
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    As Your DevOps Service Provider?
                </Typography>
            </div>
            <div className='grid grid-cols-2 gap-8 sm:justify-items-start'>
                {impactStats.map(({ id, value, label, percentage, color }, index) => {
                    const degree = (percentage / 100) * 360;
                    return (
                    <div key={id} 
                        className={`flex flex-col items-center text-center 
                                ${index > 1 ? "hidden md:flex" : ""}`}
                    >
                        <div
                        className='relative xs:w-44 w-32 xs:h-44 h-32 rounded-full flex items-center justify-center'
                        style={{ background: `conic-gradient(${color} ${degree}deg, #e5e7eb ${degree}deg)` }}
                        >
                        <div className='absolute xs:w-[120px] w-[100px] xs:h-[120px] h-[100px] bg-white rounded-full flex items-center justify-center text-3xl font-semibold'>
                            {value}
                        </div>
                        </div>
                        <div className='pt-4 flex flex-col gap-1'>
                            <Typography
                                typo="body-medium-medium"
                            >
                                {label}
                            </Typography>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>

        <div className='flex-1 hidden sm:flex flex-col gap-6'>
          <div className='w-full lg:h-full sm:h-[500px] h-[400px] relative overflow-hidden '>
            {logos.filter(l => l.active).map(logo => {
            const style = {
                left: `${logo.x}%`,
                top: `${100 - logo.y}%`,
                transform: "translateX(-50%) translateY(-50%)",
                opacity: logo.y < 10 ? 1 : Math.min(1, (110 - logo.y) / 20),
            };

            return (
                <div
                    key={`${logo.id}-${logo.y}`}
                    className="w-full text-center absolute transition-all duration-300 ease-linear "
                    style={{
                        ...style,
                        width: logo.isTitle ? "100%" : 'size' in logo ? `${logo.size}px` : "auto",
                        height: logo.isTitle ? "auto" : 'size' in logo ? `${logo.size}px` : "auto",
                    }}
                >
                {logo.isTitle ? (
                    <Typography
                        typo="header-6-semibold"
                        className="text-center text-black px-4 py-2 rounded "
                    >
                        Trusted by Funded Startups to Fortune 500+ Brands in 12+ Countries
                    </Typography>
                ) : (
                    <div className="">
                    {!logo.isTitle && 'img' in logo && (
                        <Image
                            src={logo.img}
                            alt="Bank logo"
                            className="w-full h-full object-contain"
                            width={logo.size}
                            height={logo.size}
                        />
                    )}
                    </div>
                )}
                </div>
            );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DevopsBrands