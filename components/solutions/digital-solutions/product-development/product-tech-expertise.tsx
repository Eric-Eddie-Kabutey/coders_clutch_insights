'use client';
import Typography from '@/components/shared/typography'
import React, { useState } from 'react'
import frontendImg from "@/public/assets/images/solutions/product_development/fontend_product.png";
import backendImg from "@/public/assets/images/solutions/product_development/backend_product.png";
import managementImg from "@/public/assets/images/solutions/product_development/project_management_product.png";
import testingImg from "@/public/assets/images/solutions/product_development/testing_product.png";
import cloudImg from "@/public/assets/images/solutions/product_development/cloud_product.png";
import databaseImg from "@/public/assets/images/solutions/product_development/database_product.png";
import Image from 'next/image';

const experts_products = [
    {
        id: "1",
        title: "Front-end Development",
        img: frontendImg,
    },
    {
        id: "2",
        title: "Project Management and Collaboration",
        img: managementImg,
    },
    {
        id: "3",
        title: "Testing and Quality Assurance",
        img: testingImg,
    },
    {
        id: "4",
        title: "Cloud and Infrastructure",
        img: cloudImg,
    },
    {
        id: "5",
        title: "Back-end Development",
        img: backendImg,
    },
    {
        id: "6",
        title: "Database Management",
        img: databaseImg,
    },
]

function ProductTechExpertise() {
    const [selectedProduct, setSelectedProduct] = useState(experts_products[0].id)

    const currentProduct = experts_products.find(product => product.id === selectedProduct)
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Our Technology Expertise
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Building Your Digital Product with Robust Tech Stack
                </Typography>
            </div>
            <div className='w-full py-8 flex flex-col space-y-16'>
                <div className=' w-full overflow-auto'>
                    <div className='w-fit flex justify- items-center gap-5 flex-nowrap border-b-2 border-gray-400'>
                        {experts_products.map(data => (
                            <button 
                                key={data.id}
                                onClick={() => setSelectedProduct(data.id)}
                                className={`min-w-[170px] pb-3 text-base font-semibold text-center ${selectedProduct === data.id ? "border-b-[3px] border-app-green-text text-app-green-text" : ""}`}
                            >
                                {data.title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='lg:w-[700px] w-[80%] mx-auto h-fit'>
                    <Image 
                        src={currentProduct?.img || ''}
                        alt={`Product ${currentProduct?.id}`}
                        className='w-full h-full'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProductTechExpertise