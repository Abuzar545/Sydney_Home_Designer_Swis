import React, { useState, useEffect } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Star } from 'lucide-react';

export default function Test_Section() {
    const reviews = [
        { name: "Raheel Masood", role: "CEO", company: "Swismax Solutions", text: "Swismax has been the best web hosting provider I've used. What sets it apart is its exceptional customer support." },
        { name: "Sarah Jenkins", role: "Manager", company: "Swismax Solutions", text: "The craftsmanship is top-notch. They turned our vision into reality with incredible attention to detail." },
        { name: "David Wilson", role: "Architect", company: "Swismax Solutions", text: "Working with Sydney Designer Homes was a breeze. Professional, timely, and high-quality results." },
        { name: "Emma Thompson", role: "Owner", company: "Swismax Solutions", text: "I highly recommend their services for anyone looking for modern, sustainable home designs." },
        { name: "Michael Ross", role: "Partner", company: "Swismax Solutions", text: "Exceeded our expectations in every way. The process was transparent and the team was fantastic." },
        { name: "Jessica Day", role: "Director", company: "Swismax Solutions", text: "Incredible eye for detail. The final handover was seamless and the support post-build is great." }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(4);

    // Responsive Logic: Sync number of visible cards with screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setVisibleCards(4);
            else if (window.innerWidth >= 768) setVisibleCards(2);
            else setVisibleCards(1);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
        if (startIndex >= reviews.length - visibleCards) {
            setStartIndex(0); // Infinite Loop reset
        } else {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex === 0) {
            setStartIndex(reviews.length - visibleCards); // Jump to end
        } else {
            setStartIndex(startIndex - 1);
        }
    };

    // Calculate progress bar width
    const progressPercent = ((startIndex + visibleCards) / reviews.length) * 100;

    return (
        <section className='bg-white py-16 overflow-hidden'>
            {/* Header Section */}
            {/* Header Section */}
            <div className='max-w-7xl mx-auto relative px-6 md:px-12 mb-12'>

                {/* Main Content Container: Always Centered */}
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className='text-4xl md:text-5xl font-bold leading-[1] text-black tracking-tighter'>
                        Testimonials of <br /> Sydney Designer Home
                    </h1>
                    <p className='mt-6 text-gray-600 max-w-xl text-sm md:text-base leading-relaxed'>
                        With our <span className='font-bold text-black'>30 years</span> of experience, we serve customers in the luxury housing industry across various sectors.
                    </p>
                </div>

                {/* Buttons: Centered on mobile, Absolute Right on LG screens */}
                <div className="flex flex-row justify-center lg:absolute lg:right-12 lg:bottom-0 mt-8 lg:mt-0 gap-3">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-95 bg-white"
                    >
                        <CaretLeft size={28} weight="bold" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#48AAB5] text-[#48AAB5] flex items-center justify-center hover:bg-[#48AAB5] hover:text-white transition-all active:scale-95 bg-white"
                    >
                        <CaretRight size={28} weight="bold" />
                    </button>
                </div>
            </div>

            {/* SLIDER WINDOW */}
            <div className='max-w-8xl mx-auto px-6 md:px-19'>
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${startIndex * (100 / visibleCards)}%)` }}
                    >
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
                            >
                                <div className="bg-[#f8f8f8] p-2 rounded-2xl shadow-sm border border-transparent hover:border-[#48AAB5] transition-all duration-300 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Star size={18} fill="black" />
                                            <h2 className="text-lg font-bold text-black  tracking-tight">Google Reviews</h2>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                                            "{review.text}"
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill="#48AAB5" className="text-[#48AAB5]" />
                                            ))}
                                        </div>
                                        <div className="border-t border-gray-200 pt-4">
                                            <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">Reviewed by</p>
                                            <h3 className="text-xl font-black text-[#48AAB5] uppercase leading-tight">
                                                {review.name}
                                            </h3>
                                            <p className="text-black font-bold text-sm">{review.role}</p>
                                            <p className="text-gray-500 text-xs">{review.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="flex items-center justify-center mt-12">
                <div className="h-1.5 w-60 bg-black rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#48AAB5] transition-all duration-700 ease-out"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
            </div>
        </section>
    )
}