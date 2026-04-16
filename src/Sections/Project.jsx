
import { useState, useEffect } from "react";
import Abou_img from '../assets/images/abou_img.jpg'
 import Home_Design from '../assets/images/Home_Design_img.jpg'
 import Service_img1 from "../assets/images/service_img1.jpg";
 import Service_img3 from "../assets/images/service_img3.jpg";
 import Service_img4 from "../assets/images/Abou_img.jpg";
 import Service_img5 from "../assets/images/heroimg.jpg";
 import { ArrowRight, CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function Project() {
  const services = [
    { title: "PROJECT NAME", image: Abou_img},
    { title: "PROJECT NAME", image: Service_img1 },
    { title: "PROJECT NAME", image: Service_img3 },
    { title: "PROJECT NAME", image: Service_img4},
    { title: "PROJECT NAME", image: Home_Design},
    { title: "PROJECT NAME", image: Service_img5},
    { title: "PROJECT NAME", image: Abou_img},
    { title: "PROJECT NAME", image: Service_img1 },
    { title: "PROJECT NAME", image: Service_img3 },
    { title: "PROJECT NAME", image: Service_img4},
    { title: "PROJECT NAME", image: Home_Design},
    { title: "PROJECT NAME", image: Service_img5}
  ];

  const [visibleCards, setVisibleCards] = useState(4);
  const [startIndex, setStartIndex] = useState(0);

  // Synchronized Responsive Logic for 4 cards on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCards(4); // Desktop: 4 cards
      else if (window.innerWidth >= 768) setVisibleCards(2); // Tablet: 2 cards
      else setVisibleCards(1); // Mobile: 1 card
    };

    handleResize(); // Initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (startIndex >= services.length - visibleCards) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex === 0) {
      setStartIndex(services.length - visibleCards);
    } else {
      setStartIndex(startIndex - 1);
    }
  };

 
  const progressPercent = ((startIndex + visibleCards) / services.length) * 100;

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-20 overflow-hidden">
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
      <div className="max-w-8xl mx-auto">
        
        {/* Header (Same as your current code) */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-8 gap-8 fade-up fade-up-d1">
          <h1 className="text-5xl md:text-6xl font-black text-center lg:text-left leading-[0.8]">
            Our <br /> Projects
          </h1>
          <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
             <p className="text-center lg:text-right  text-gray-700 text-sm md:text-md  lg:font-medium font-sans text-leading-relaxed max-w-4xl">
              At Sydney Designer Homes, we offer a wide range of services to help you create your dream home. Our team of experienced professionals is
               dedicated to providing exceptional service and craftsmanship, ensuring that every project is completed to 
               the highest standards. Whether you're looking to build a custom home, renovate an existing property, or
                
            </p>
            <div className="flex gap-3">
              <button onClick={handlePrev} className="w-13 h-13 rounded-full border-3 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <CaretLeft size={33} weight="bold" />
              </button>
              <button onClick={handleNext} className="w-13 h-13 rounded-full border-3 border-[#48AAB5] text-[#48AAB5] flex items-center justify-center hover:bg-[#48AAB5] hover:text-white transition-all">
                <CaretRight size={33} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Window */}
        <div className="relative overflow-hidden fade-up fade-up-d2">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${startIndex * (100 / visibleCards)}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                // Match the visibleCards count here: 1/1 (Mobile), 1/2 (Tablet), 1/4 (Desktop)
                className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-2xl shadow-sm group h-full flex flex-col">
                  <div
                    className="relative h-72 md:h-80 rounded-2xl bg-cover bg-center overflow-hidden"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                    <h2 className="absolute bottom-6 left-16 font-serif font-bold 
                    text-3xl text-white max-w-[200px] leading-tight 
                    text-shadow-lg">
                      {service.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="flex items-center justify-center mt-12">
          <div className="h-2 w-60 bg-black rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#48AAB5] transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}