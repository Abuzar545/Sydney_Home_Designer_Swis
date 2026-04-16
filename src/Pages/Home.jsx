import React from 'react'
import About_us from '../Sections/About_us'
import Hero from '../Sections/Hero'
import States from '../Sections/States'
import Home_Design from '../Sections/Home_Design'
import Services from '../Sections/Services'  
import How_itswork from '../Sections/How_itswork'
import Choice from '../Sections/Choice'
import Test_Section from '../Sections/Test_Section'
import Inquiry_Section from '../Sections/Inquiry_Section'
import Project_Section from '../Sections/Project'
export default function Home() {
  return (
    <div>
      <Hero/>
      <States/>
      <About_us/>
      <Home_Design/>
      <Services/>
      <How_itswork/>
      <Project_Section/>
      <Choice/>
      <Test_Section/>
      <Inquiry_Section/>
    </div>
  )
}
