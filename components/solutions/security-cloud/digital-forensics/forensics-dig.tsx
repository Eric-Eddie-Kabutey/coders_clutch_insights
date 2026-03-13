'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

const digs = [
    {
        id: "1",
        title: "DIG",
        description: `We mine for digital evidence and examine all footprints on computer-related assets to help with criminal 
                        or civil cases.`,
    },
    {
        id: "2",
        title: "DISCOVER",
        description: `We search, locate, organize and secure data stored on electronic media- hard disks, laptops, desktop 
                        computers or any type of digital media, to assist and speed up investigations.`,
    },
    {
        id: "3",
        title: "RESPONSE",
        description: `We help you avoid incidents from reoccurring by implementing secure plans for the entire company’s IT 
                        infrastructure with our professionalism, precision and discretion.`,
    },
]

function ForensicsDig() {
  return (
    <div className='w-full py-24 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto grid sm:grid-cols-3 md:gap-16 gap-8'>
            {digs.map((data) => (
                <div key={data.id} className='rale w-full flex flex-col md:gap-10 sm:gap-8 gap-4 text-white'>
                    <Typography
                        typo="header-5-semibold"
                    >
                        {data.title}
                    </Typography>
                    <Typography>
                        {data.description}
                    </Typography>
                </div>
            ))}
        </section>
    </div>
  )
}

export default ForensicsDig