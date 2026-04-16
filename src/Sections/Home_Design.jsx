import { useState } from "react";
import Home_Design_img from "../assets/images/Home_Design_img.jpg";
import { ArrowRight } from "@phosphor-icons/react";

const panels = [
  {
    title: "CUSTOM DESIGN HOME",
    desc: "Luxury houses built to your specifications and requirements. Our aim is to build custom new and innovative homes to the highest standard."
  },
  { title: "HAMPTON DESIGN", 
        desc: "Luxury houses built to your specifications and requirements. Our aim is to build custom new and innovative homes to the highest standard."

   },
  { title: "BEACH DESIGN", 
        desc: "Luxury houses built to your specifications and requirements. Our aim is to build custom new and innovative homes to the highest standard."

   },
  { title: "COASTAL DESIGN",  
        desc: "Luxury houses built to your specifications and requirements. Our aim is to build custom new and innovative homes to the highest standard."

  },
  { title: "CONTEMPORARY DESIGN",
        desc: "Luxury houses built to your specifications and requirements. Our aim is to build custom new and innovative homes to the highest standard."

   },
];

export default function HoverPanels() {
  const [active, setActive] = useState(0);  

  return (
    <div className="flex flex-col md:flex-row w-full h-screen md:min-h-screen overflow-hidden bg-black ">
      {panels.map((panel, index) => {
        const isActive = active === index;
        const inactiveBg = index % 2 === 0 ? "bg-[#48AAB5]" : "bg-black";

        return (
          <div  
            key={index}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
            className={`relative cursor-pointer transition-all duration-2000 ease-in-out 
              border-b md:border-b-0 md:border-l border-white/20
              ${isActive ? "flex-[5] md:flex-[6]" : `flex-1 ${inactiveBg}`}
            `}
          >
            {/* Background Image */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1500
                ${isActive ? "opacity-100" : "opacity-0"}
              `}
              style={{ backgroundImage: `url(${Home_Design_img})` }}
            />

            {/* Overlay */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? "bg-black/40" : "bg-transparent"}`} />

            {/* Content Container */}
            <div className="relative h-full w-full flex items-center justify-center md:justify-start p-6 md:p-12 text-white">
              {isActive ? (
                /* ACTIVE STATE */
                <div className="w-full max-w-xl animate-fadeIn mt-auto md:mt-0">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-2 md:mb-4 leading-none uppercase">
                    {panel.title}
                  </h1>
                  {panel.desc && (
                    <p className="hidden sm:block text-xs md:text-lg mb-4 md:mb-8 max-w-sm opacity-90 font-bold font-sans">
                      {panel.desc}
                    </p>
                  )}
                  <button className="flex items-center gap-2 text-white border border-white hover:bg-white hover:text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-[10px] md:text-sm font-bold transition-all">
                    LEARN MORE <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                /* INACTIVE STATE */
                <div 
                  className="flex items-center justify-center w-full h-full"
                >
                  <span 
                    className="text-sm md:text-2xl lg:text-3xl font-serif tracking-widest uppercase whitespace-nowrap transition-all duration-500"
                    style={{
                      // Horizontal on mobile, Vertical on desktop
                      writingMode: window.innerWidth > 768 ? "vertical-rl" : "horizontal-tb",
                      transform: window.innerWidth > 768 ? "rotate(180deg)" : "none",
                    }}
                  >
                    {panel.title}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
 