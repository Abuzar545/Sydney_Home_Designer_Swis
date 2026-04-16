import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Route() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact-Us' element={<Contact/>}/>
    </Routes>
  )
}
