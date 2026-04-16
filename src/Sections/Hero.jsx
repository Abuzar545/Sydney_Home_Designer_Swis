
import React from 'react'
import hero from '../assets/images/heroimg.jpg'

function Hero() {
    return (
        <section className="relative w-full min-h-auto bg-white flex flex-col lg:flex-row overflow-hidden">
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

            {/* Background Image Container */}
            <div className="relative lg:absolute lg:right-0 lg:top-0 w-full lg:w-[70%] h-[45vh] lg:h-full z-0">
                <div
                    className="w-full h-full bg-cover bg-center rounded-none lg:rounded-l-[600px] xl:rounded-l-[800px] shadow-2xl transition-all duration-700 float"
                    style={{ backgroundImage: `url(${hero})` }}
                >
                    <div className="w-full h-full bg-black/5 lg:rounded-l-[800px]"></div>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12 lg:pt-52 lg:pb-20">
                
                {/* Scroll Indicator - Added fade-up-d1 */}
                <div className="hidden sm:flex items-center gap-2 mb-8 text-gray-400 font-bold text-md fade-up fade-up-d1">
                    <div className="border-2 border-gray-300 rounded-full w-5 h-8 flex justify-center pt-1">
                        <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce "></div>
                    </div>
                    KEEP SCROLLING
                </div>

                {/* Main Heading - Added fade-up-d2 */}
                <h1 className="text-[#48AAB5] text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-serif fade-up fade-up-d2">
                    Build a Forever <br />
                    <span className="text-[#48AAB5]">Home For Your</span> <br />
                    Family
                </h1>

                {/* Subtext - Added fade-up-d3 */}
                <p className="mt-6 text-gray-900 font-extrabold text-md md:text-xl max-w-md fade-up fade-up-d3">
                    Discover the secrets to building your perfect home. From the design to the selections, all our houses are different.
                </p>
                
            </div>
        </section>
    )
}

export default Hero