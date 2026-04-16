
import React, { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "", duration = 1500 }) {
  const [value, setValue] = useState(0);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const to = Number(target) || 0;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setValue(Math.round(to * ease));
      
      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(tick);
      }
    };

    animationFrameId.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [target, duration]);

  return (
    <span className="relative inline-block whitespace-nowrap">
      {value}
      <span className="text-4xl lg:text-6xl font-semibold ml-1">
        {suffix}
      </span>
    </span>
  );
}

export default function States() {
  const statsData = [
    { number: 30, suffix: "+", label: "EXPERIENCE IN CONSTRUCTION" },
    { number: 110, suffix: "+", label: "SATISFIED CUSTOMERS" },
    { number: 160, suffix: "+", label: "COMPLETED PROJECTS" },
    { number: 20, suffix: "+", label: "UNDER CONSTRUCTION" },
  ];

  return (
    <section className="w-full bg-black py-10 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              <div className="text-7xl lg:text-8xl xl:text-9xl font-extrabold text-[#48AAB5] mb-4 font-mono flex items-baseline ">
                <AnimatedCounter
                  target={stat.number}
                  suffix={stat.suffix}
                  duration={2000} // 2 seconds for a smooth count
                />
              </div>

              <p className="text-white text-sm lg:text-2xl font-bold  uppercase max-w-[200px] leading-tight">
                {stat.label}
              </p>
              
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}