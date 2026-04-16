
import React from 'react'
import { Network } from 'lucide-react';
export default function Choice() {
    return (
        <section className='bg-[#F3F0EF] min-h-100  '>
            {/* first part */}
            <div className='w-full mx-auto w-full flex flex-col justify-center items-center text-center '>
                <h1 className='text-2xl md:text-4xl font-bold leading-[0.9] text-black text-center pt-12'>
                    Why Choose <br /> Sydney Designer Home </h1>
                <p className='m-2'>With our <span className='font-bold'>30 years</span> of experience, <br />we serve custerms in the oil and gas industry accross variouse sectors.</p>
            </div>
            {/* second part */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 m-10 pb-5 max-w-8xl mx-auto
             w-full px-6 md:px-19'>
                <div className='bg-white h-100 flex flex-col items-center p-8 rounded-xl transition-all duration-1000 ease-in-out
                 hover:bg-[#8E537A] hover:text-white shadow-sm hover:shadow-md'>
                    <div className='mb-6'>
                        <Network
                            size={100}
                            strokeWidth={1.0}
                            
                        />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-2xl font-bold text-center'>Superior Quality <br /> Construction</h2>
                        <p className='mt-4 text-center'>Our team has extensive experience in the oil and gas 
                            industry.Our team has extensive experience in the oil and gas industry.  experience 
                            in the oil and gas </p>
                    </div>
                </div>
                <div className='bg-[#48AAB5] h-100 rounded-xl flex flex-col items-center p-8 transition-all duration-1000 hover:bg-[#8E537A] 
                text-white'>
                    <div className='mb-6'>
                        <Network
                            size={100}
                            strokeWidth={1.0}
                            
                        />
                    </div>
                    <div>
                        <h1 className=' text-2xl font-bold  text-center'>Innovation & <br /> Sustainability</h1>
                       <p className=' mt-4 text-center'>Our team has extensive experience in the oil and gas industry.Our team has extensive experience in the oil and gas industry.  experience in the oil and gas </p>

                    </div>
                </div>
                 <div className='bg-white h-100 rounded-xl flex flex-col items-center p-8 transition-all duration-1000 hover:bg-[#8E537A] hover:text-white shadow-sm hover:shadow-md '>
                    <div className='mb-6'>
                        <Network
                            size={100}
                            strokeWidth={1.0}
                            
                        />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-2xl font-bold text-center'>Superior Quality <br /> Construction</h2>
                        <p className='mt-4 text-center'>Our team has extensive experience in the oil and gas industry.Our team has extensive experience in the oil and gas industry.  experience in the oil and gas </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
