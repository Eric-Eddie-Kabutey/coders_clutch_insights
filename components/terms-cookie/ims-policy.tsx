'use client';
import React from 'react'
import Typography from '../shared/typography'
import { ims_data } from '@/constant';

function ImsPolicy() {
  return (
<div className='w-full py-12'>
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
        <div className='xl:w-[60%] lg:w-[70%] md:w-[80%] mx-auto flex flex-col gap-6'>
          <Typography
            typo="header-4-semibold"
            className='!text-2xl text-center text-app-secondary'
          >
            {ims_data.title}
          </Typography>

          <div className='pops w-full flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <Typography
                typo="header-6-medium"
                className='!text-lg text-app-secondary'
              >
                IMS Policy Statement
              </Typography>
              
              <Typography
                typo="body-medium-light"
                className='text-gray-700 !text-sm !leading-relaxed text-justify'
              >
                {ims_data.mainStatement}
              </Typography>
              
              <Typography
                typo="body-medium-light"
                className='text-gray-700 !text-sm !leading-relaxed text-justify mt-2'
              >
                {ims_data.frameworkNote}
              </Typography>
              
              <Typography
                typo="header-6-medium"
                className='!text-lg text-app-secondary mt-4'
              >
                It is our Policy to ensure that:
              </Typography>
              
              <ul className='list-disc pl-5 space-y-2 mt-2'>
                {ims_data.policyPoints.map((point, index) => (
                  <li key={index}>
                    <Typography
                      typo="body-medium-light"
                      className='text-gray-700 !text-sm !leading-relaxed text-justify'
                    >
                      {point}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ImsPolicy