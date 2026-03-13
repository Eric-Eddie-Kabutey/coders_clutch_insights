'use client';
import React from 'react'
import Typography from '../shared/typography'
import { privacyPolicy } from '@/constant';

function PrivacyPolicy() {
  return (
<div className='w-full py-12'>
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
        <div className='xl:w-[60%] lg:w-[70%] md:w-[80%] mx-auto flex flex-col gap-6'>
          <Typography
            typo="header-4-semibold"
            className='!text-3xl text-center text-app-secondary'
          >
            {privacyPolicy.title}
          </Typography>
          
          <div className='pops w-full flex flex-col gap-4'>
            {privacyPolicy.sections.map(section => (
              <div key={section.id} className='flex flex-col gap-2'>
                <Typography
                  typo="header-6-medium"
                  className='!text-lg text-app-secondary'
                >
                  {section.title}
                </Typography>
                
                {/* Render main content */}
                {section.content && section.content.map((paragraph, index) => (
                  <Typography
                    key={`content-${index}`}
                    typo="body-medium-light"
                    className='text-gray-700 !text-sm !leading-relaxed text-justify'
                  >
                    {paragraph}
                  </Typography>
                ))}
                
                {/* Render list items if they exist */}
                {section.listItems && (
                  <ul className='list-disc pl-5'>
                    {section.listItems.map((item, index) => (
                      <li key={`item-${index}`}>
                        <Typography
                          typo="body-medium-light"
                          className='text-gray-700 !text-sm !leading-relaxed text-justify'
                        >
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Render additional content */}
                {section.additionalContent && section.additionalContent.map((paragraph, index) => (
                  <Typography
                    key={`additional-${index}`}
                    typo="body-medium-light"
                    className='text-gray-700 !text-sm !leading-relaxed text-justify'
                  >
                    {paragraph}
                  </Typography>
                ))}
                
                {/* Render table if it exists */}
                {section.table && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 mt-2">
                      <thead>
                        <tr className="bg-gray-50">
                          {section.table.headers.map((header, index) => (
                            <th 
                              key={`header-${index}`}
                              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rowIndex) => (
                          <tr 
                            key={`row-${rowIndex}`}
                            className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={`cell-${rowIndex}-${cellIndex}`}
                                className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                
                {/* Render subsections */}
                {section.subsections && section.subsections.map(subsection => (
                  <div key={subsection.id} className='ml-4 mt-2'>
                    <Typography
                      typo="header-6-medium"
                      className='!text-base text-app-secondary'
                    >
                      {subsection.title}
                    </Typography>
                    {subsection.content.map((paragraph, index) => (
                      <Typography
                        key={`subcontent-${index}`}
                        typo="body-medium-light"
                        className='text-gray-700 !text-sm !leading-relaxed text-justify'
                      >
                        {paragraph}
                      </Typography>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy