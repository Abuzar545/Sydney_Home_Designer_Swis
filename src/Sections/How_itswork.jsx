// import React from 'react'
// import { ArrowRight } from '@phosphor-icons/react'
// import { NotebookPen } from 'lucide-react';

// export default function How_itswork() {
//   return (
//     <section className='bg-white h-100% '>
//       <div className='bg-[#48AAB5] max-w-6xl h-2/2 flex flex-col items-center  rounded-2xl mx-auto mt-20 py-10'>
//         {/*first part  */}
//         <div className='flex flex-col items-center'>
//           <h1 className='text-2xl md:text-6xl font-black text-white'>How its works</h1>
//           <h1 className='text-2xl font-black text-white mt-2'>Your Dream Home - Built With Confidence and care</h1>
//           <p className='text-white text-lg mt-2 text-center max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa facere consequatur
//             quibusdam, facilis ducimus? Mollitia  .</p>
//           <button className='p-2 font-extrabold text-sm bg-white rounded-3xl flex justify-center items-center gap-2 hover:bg-black hover:text-white transition-all duration-300 mt-6'>
//             <NotebookPen size={24} weight="bold" /> CONTACT WITH US <ArrowRight size={19} /></button>
//         </div>
//         {/* second part */}
//         <div className='flex max-w-5xl mt-12'>
//           <div className='flex flex-col items-center px-8'>
//             <div className='bg-white text-black rounded-full w-20 h-20 flex items-center justify-center shadow-lg'><h1 className='text-5xl font-black'>01</h1></div>
//             <div className='text-center'>
//               <h1 className='text-2xl font-bold text-white my-4 leading-tight'>Initial <br /> Consultation</h1>
//             </div>
//             <div>
//               <p className='text-white text-center'>We discuss your requirements and preferences to understand your vision for the perfect home.</p>
//             </div>
//           </div>
//           <div className='flex flex-col items-center px-8'>
//             <div className='bg-white text-black rounded-full w-20 h-20 flex items-center justify-center shadow-lg'><h1 className='text-5xl font-black'>02</h1></div>
//             <div className='text-center'>
//               <h1 className='text-2xl font-bold text-white my-4 leading-tight'>Concept & Design <br /> Development</h1>
//             </div>
//             <div>
//               <p className='text-white text-center'>We discuss your requirements and preferences to understand your vision for the perfect home.</p>
//             </div>
//           </div>
//           <div className='flex flex-col items-center px-8'>
//             <div className='bg-white text-black rounded-full w-20 h-20 flex items-center justify-center shadow-lg'><h1 className='text-5xl font-black'>03</h1></div>
//             <div className='text-center'>
//               <h1 className='text-2xl font-bold text-white my-4 leading-tight'>Approvals &<br /> pre-Build Preparatio n</h1>
//             </div>
//             <div>
//               <p className='text-white text-center'>We discuss your requirements and preferences to understand your vision for the perfect home.</p>
//             </div>
//           </div>
//         </div>
//         {/* Third part */}
//         <div className='flex max-w-5xl mt-12'>
//           <div className='flex flex-col items-center px-8'>
//             <div className='bg-white text-black rounded-full w-20 h-20 flex items-center justify-center shadow-lg'><h1 className='text-5xl font-black'>04</h1></div>
//             <div className='text-center'>
//               <h1 className='text-2xl font-bold text-white my-4 leading-tight'>Construction & <br /> Quality Assurance</h1>
//             </div>
//             <div>
//               <p className='text-white text-center'>We discuss your requirements and preferences to understand your vision for the perfect home.</p>
//             </div>
//           </div>
//           <div className='flex flex-col items-center px-8'>
//             <div className='bg-white text-black rounded-full w-20 h-20 flex items-center justify-center shadow-lg'><h1 className='text-5xl font-black'>05</h1></div>
//             <div className='text-center'>
//               <h1 className='text-2xl font-bold text-white my-4 leading-tight'>Final Inspection <br /> & Handover</h1>
//             </div>
//             <div>
//               <p className='text-white text-center'>We discuss your requirements and preferences to understand your vision for the perfect home.</p>
//             </div>
//           </div>
//           <div className='flex flex-col items-center px-8'>
//             <div className='bg-white text-black rounded-full w-20 h-20 flex items-center justify-center shadow-lg'><h1 className='text-5xl font-black'>06</h1></div>
//             <div className='text-center'>
//               <h1 className='text-2xl font-bold text-white my-4 leading-tight'>Post-Completion<br />Support </h1>
//             </div>
//             <div>
//               <p className='text-white text-center'>We discuss your requirements and preferences to understand your vision for the perfect home.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

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