'use client';
import React from 'react'
import AboutOverview from './about-overview'
import { useRouter, useSearchParams } from 'next/navigation';
import InnovationHub from './innovation-hub';

function AboutCsrMain() {
    const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "overview"; 

    const tabs = [
        { id: "overview", label: "Our Committment", component: <AboutOverview /> },
        { id: "our-story", label: "Our Innovation Hub", component: <InnovationHub /> },
    ];
    const handleTabClick = (id: string) => {
        router.push(`?tab=${id}`)
    };
  return (
    <div className='w-full md:py-32 py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex lg:flex-row flex-col justify-between lg:gap-6 gap-10'>
            <div className="w-[300px] h-fit py-4 flex flex-col gap-2 shadow-md rounded-md lg:sticky lg:top-32">
                {tabs.map((tab) => (
                    <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`h-fit pr-4 flex items-center gap-4 text-lg text-left transition-all 
                        ${activeTab === tab.id ? "bg-app-gray-bg text-app-primary-light font-semibold" : "hover:bg-gray-100"}
                    `}
                    >
                    <div 
                        className={`h-full px-1
                        ${activeTab === tab.id ? "bg-app-primary-light text-white font-normal" : "hover:bg-gray-100"}`}></div>
                        <span className='h-full py-4 flex flex-col justify-center items-center'>{tab.label}</span>
                    </button>
                ))}
            </div>
            <div className="flex-1 xs:pl-6">
                {tabs.find((tab) => tab.id === activeTab)?.component}
            </div>
        </section>
    </div>
  )
}

export default AboutCsrMain