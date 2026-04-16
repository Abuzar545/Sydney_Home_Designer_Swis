import React from 'react'
import { PhoneCall, NotebookPen } from 'lucide-react';

export default function Inquiry_Section() {
    return (
        <section className='bg-[#48AAB5] w-full py-16 px-6'>
            {/* 1. max-w-7xl: Limits width on big screens.
               2. lg:flex-row: Side-by-side on desktop, stacked on mobile.
               3. items-center: Keeps everything vertically aligned.
            */}
            <div className='max-w-8xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 md:px-12'>
                
                {/* Text Content */}
                <div className='flex flex-col text-center lg:text-left'>
                    <h1 className='text-white text-3xl md:text-5xl font-black leading-[1.1] font-serif font-bold uppercase tracking-tighter'>
                        START YOUR SYDNEY <br className='hidden md:block' /> HOME DESIGN JOURNEY
                    </h1>
                    <p className='text-white/90 text-lg md:text-xl font-medium mt-4 max-w-xl font-serif font-bold'>
                        Custom-designed homes tailored to your lifestyle and vision.
                    </p>
                </div>

                {/* Buttons Container */}
                <div className='flex flex-col gap-4 w-full sm:w-auto'>
                    <button className='bg-black text-white text-lg flex items-center justify-center md:pr-20 gap-3 px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto group'>
                        <PhoneCall size={24} className="group-hover:rotate-12 transition-transform" /> 
                        Request Call Back
                    </button>
                    
                    {/* Removed ml-10 to allow proper mobile stacking */}
                    <button className='bg-black text-white text-lg flex items-center justify-center gap-3 md:pr-20 px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto group'>
                        <NotebookPen size={24} className="group-hover:translate-x-1 transition-transform" /> 
                        Submit Inquiry
                    </button>
                </div>
                
            </div>
        </section>
    )
}