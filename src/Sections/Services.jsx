
import { useState } from "react";
import Service_img1 from "../assets/images/service_img1.jpg";
import Service_img2 from "../assets/images/service_img2.jpg";
import Service_img3 from "../assets/images/service_img3.jpg";
import Service_img4 from "../assets/images/Abou_img.jpg";
import Service_img5 from "../assets/images/heroimg.jpg";

import { ArrowRight, CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function Services() {
  const services = [
    { title: "Custom Home Construction", image: Service_img1, desc: "Our team of experts will build your dream home according to your unique vision and requirements. we are committed to delivering exceptional results that exceed your expectations. ensuring that every project is completed to the highest standards. Whether youre looking to build a custom home, renovate an existing property, or" },
    { title: "Knock Down and Rebuild", image: Service_img2, desc: "Our team of experts will build your dream home according to your unique vision and requirements. we are committed to delivering exceptional results that exceed your expectations. ensuring that every project is completed to the highest standards. Whether youre looking to build a custom home, renovate an existing property, or " },
    { title: "Addition and Renovation", image: Service_img3, desc: "Our team of experts will build your dream home according to your unique vision and requirements. we are committed to delivering exceptional results that exceed your expectations. ensuring that every project is completed to the highest standards. Whether youre looking to build a custom home, renovate an existing property, or " },
    { title: "Interior Design", image: Service_img4, desc: "Our team of experts will create beautiful interior spaces tailored to your unique vision and requirements. we are committed to delivering exceptional results that exceed your expectations. ensuring that every project is completed to the highest standards." },
    { title: "Landscape Design", image: Service_img5, desc: "Our team of experts will create stunning outdoor living spaces tailored to your unique vision and requirements. we are committed to delivering exceptional results that exceed your expectations. ensuring that every project is completed to the highest standards." },
  ];

  const [startIndex, setStartIndex] = useState(0);

  // Responsive cards logic
  // Mobile: 1 card, Tablet: 2 cards, Desktop: 3 cards
  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const visibleCards = getVisibleCards();

  const handleNext = () => {
    if (startIndex >= services.length - visibleCards) {
      setStartIndex(0); // Infinite Loop jump to start
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex === 0) {
      setStartIndex(services.length - visibleCards); // Infinite Loop jump to end
    } else {
      setStartIndex(startIndex - 1);
    }
  };
  const progressPercent = ((startIndex + visibleCards) / services.length) * 100;

  return (
    <section className="bg-[#F3F0EF] py-12 md:py-20 px-4 md:px-20 overflow-hidden">
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

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-8 gap-8 fade-up fade-up-d1">
          <h1 className="text-5xl md:text-6xl font-black e text-center lg:text-left leading-[0.8]">
            Our <br /> Services
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
        <div className="relative  overflow-hidden fade-up fade-up-d2">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            // The math uses percentages based on visible cards
            style={{ transform: `translateX(-${startIndex * (100 / visibleCards)}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                // Mobile: 100%, Tablet: 50%, Desktop: 33.33%
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
              >
                <div className="bg-white p-4 rounded-2xl shadow-sm group h-full flex flex-col text-xs md:text-md leading-relaxed">
                  {/* Image Card */}
                  <div
                    className="relative h-72 md:h-100 rounded-2xl bg-cover bg-center overflow-hidden"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                    <h2 className="absolute bottom-6 left-6 font-medium text-2xl text-white max-w-55 text-shadow-lg font-black">
                      {service.title}
                    </h2>
                    <div className="hidden md:block absolute bottom-6 right-6 bg-white px-3 py-4 rounded-xl shadow-lg hover:bg-black text-black hover:text-white">
                      <ArrowRight size={33} weight="bold" className=" hover:text-white" />
                    </div>
                  </div>
                  {/* Desc */}
                  <p className="mt-3 text-black  ">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mt-8">

          {/* The Bar Section */}
          <div className="flex items-center justify-center mt-12">
            <div className="h-2 w-60 bg-black rounded-full overflow-hidden">
              <div
                className="h-full bg-[#48AAB5] transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}