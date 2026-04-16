
import React from 'react'
import Abou_img from '../assets/images/Abou_img.jpg'
import { ArrowRight } from '@phosphor-icons/react'
export default function About_us() {
    return (
        <section className='w-full bg-white py-16 lg:py-12 px-6 md:px-12'>
              {/* ── Animations ── */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(32px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .fade-up         { animation: fadeUp 0.7s ease both; }
                .fade-up-d1      { animation-delay: 0.1s; }
                .fade-up-d2      { animation-delay: 0.25s; }
                .fade-up-d3      { animation-delay: 0.4s; }
                .fade-up-d4      { animation-delay: 0.55s; }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50%      { transform: translateY(-14px); }
                }
                .float { animation: float 5s ease-in-out infinite; }
            `}} />

            {/* 1. TOP TEXT SECTION: Centered with Gradient Heading */}
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-8 fade-up fade-up-d1">
                    <span className="bg-gradient-to-r from-[#8E537A] via-[#48AAB5] to-[#48AAB5] bg-clip-text text-transparent">
                        Thinking of Building A New Home?
                    </span>
                </h1>

                <p className="text-gray-800 md:text-lg lg:text-xl xl:text-2xl font-medium text-center lg:w-5xl font-sans">
                    Discover the secrets to building your perfect home from the design to the selections,
                    all our houses are different. Please review some of our plans, keeping in mind if
                    there are items from our range which do not align with your tastes they can be
                    amended to ensure your home is exactly what you dream it to be.
                </p>
            </div>

            {/* 2. IMAGE AND OVERLAY SECTION */}
           {/* Use items-stretch to make both columns the same height on desktop */}
<div className="flex flex-col lg:flex-row lg:items-stretch w-full max-w-8xl m-4 px-4 lg:px-0 py-5 fade-up fade-up-d2">

    {/* LEFT SIDE: IMAGE CONTAINER */}
    <div className="w-full lg:w-1/2 z-10 flex">
        <div
            /* Removed fixed height 'h-[630px]' and replaced with 'flex-1' so it grows with the container */
            className="w-full min-h-[350px] md:min-h-[450px] flex-1 rounded-3xl lg:rounded-r-none lg:rounded-l-3xl overflow-hidden shadow-2xl relative group"
            style={{
                backgroundImage: `url(${Abou_img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500"></div>

            {/* Text on Image */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10">
                <h1 className="text-xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] font-serif  py-8">
                    SYDNEY <br /> DESIGNER <br /> HOME
                </h1>
            </div>
        </div>
    </div>

    {/* RIGHT SIDE: TEAL BOX */}
    <div className="w-full lg:w-1/2 bg-[#48AAB5] text-white 
        p-8 md:p-12 lg:p-16 xl:p-20 
        flex flex-col justify-center 
        rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl 
        relative
        mt-[-40px] lg:mt-0 lg:-ml-12 
        z-20 shadow-xl"
    >
        <h2 className="md:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Welcome to <br className="hidden md:block" /> Sydney Designer Home
        </h2>
        
        <div className="space-y-4 mb-8 text-white/90 text-sm md:text-base leading-relaxed">
            <p>
                Discover the secrets to building your perfect home from the design to the selections,
                all our houses are different. Please review some of our plans, keeping in mind if
                there are items from our range which do not align with your tastes.
            </p>
            <p>
                They can be amended to ensure your home is exactly what you dream it to be.
                Our team is dedicated to bringing your vision to life with precision and style.
            </p>
        </div>

        <button className="flex gap-3 items-center text-white border-2 border-white 
            hover:bg-white hover:text-[#48AAB5] transition-all duration-300 
            px-8 py-4 rounded-full font-bold w-fit text-sm md:text-base active:scale-95 shadow-lg">
            LEARN MORE ABOUT US <ArrowRight size={20} weight="bold"/>        
        </button>
    </div>

</div>

        </section>
    )
}