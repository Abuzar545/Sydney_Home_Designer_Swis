// import React from 'react'
// import Home from '../pages/Home'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// export default function Route() {
//   return (
//     <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/Contact-Us' element={<Contact/>}/>
//     </Routes>
//   )
// }
import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact-Us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}