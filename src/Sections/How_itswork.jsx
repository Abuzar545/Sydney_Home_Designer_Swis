

import React from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { NotebookPen } from 'lucide-react';

export default function How_itswork() {
  const steps = [
    { id: "01", title: "Initial Consultation", desc: "We discuss your requirements and preferences to understand your vision for the perfect home." },
    { id: "02", title: "Concept & Design Development", desc: "We discuss your requirements and preferences to understand your vision for the perfect home." },
    { id: "03", title: "Approvals & Pre-Build Preparation", desc: "We discuss your requirements and preferences to understand your vision for the perfect home." },
    { id: "04", title: "Construction & Quality Assurance", desc: "We discuss your requirements and preferences to understand your vision for the perfect home." },
    { id: "05", title: "Final Inspection & Handover", desc: "We discuss your requirements and preferences to understand your vision for the perfect home." },
    { id: "06", title: "Post-Completion Support", desc: "We discuss your requirements and preferences to understand your vision for the perfect home." },
  ];

  return (
    <section className='bg-white py-10 px-4 sm:px-6'>
      <div className='bg-[#48AAB5] max-w-7xl flex flex-col items-center rounded-3xl mx-auto py-12 md:py-20 px-6'>
        
        {/* Header Part */}
        <div className='flex flex-col items-center text-center'>
          <h1 className='text-4xl md:text-6xl font-black text-white uppercase tracking-tight'>How it works</h1>
          <h2 className='text-xl md:text-2xl font-bold text-white mt-4'>Your Dream Home - Built With Confidence and care</h2>
          <p className='text-white/90 text-sm md:text-lg mt-4 max-w-2xl leading-relaxed'>
            Our streamlined process ensures that your journey from concept to completion is smooth, transparent, and exciting.
          </p>
          <button className='px-6 py-3 font-extrabold text-sm bg-white text-black rounded-full flex justify-center items-center gap-2 hover:bg-black hover:text-white transition-all duration-300 mt-8 group'>
            <NotebookPen size={20} /> 
            CONTACT WITH US 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Steps Grid - Responsive Grid System */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 mt-16 w-full max-w-6xl'>
          {steps.map((step, index) => (
            <div key={index} className='flex flex-col items-center group'>
              {/* Number Circle */}
              <div className='bg-white text-black rounded-full w-20 h-20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300'>
                <h1 className='text-4xl font-black'>{step.id}</h1>
              </div>
              
              {/* Text Content */}
              <div className='text-center mt-6'>
                <h3 className='text-xl md:text-2xl font-bold text-white leading-tight min-h-[3rem] md:min-h-[4rem] flex items-center justify-center px-4'>
                  {step.title}
                </h3>
                <p className='text-white/80 text-sm md:text-base mt-3 leading-relaxed max-w-xs mx-auto'>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}