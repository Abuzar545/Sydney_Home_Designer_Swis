import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import images from '../assets/icons/images.png'
import { ArrowRight } from '@phosphor-icons/react'
import { MailOpen, Phone, Menu, X } from 'lucide-react';
import Twitter from '../assets/icons/Twitter.png'
import insta from '../assets/icons/insta.png'
import whatsapp from '../assets/icons/whatsapp.png'
import youtube from '../assets/icons/youtube.png'
import face from '../assets/icons/face.png'
import linkdin from '../assets/icons/linkdin.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mapping Nav Items to  App.jsx Routes
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT SDH', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'SMART HOME', path: '/smart-home' },
    { name: 'PROJECTS', path: '/project' },
    { name: 'CERTIFICATIONS', path: '/certificate' },
    { name: 'CLIENTS', path: '/clients' },
    { name: 'MEDIA', path: '/media' },
  ];

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>

      {/* Top Utility */}
      <div id='Top Utility' className='hidden md:flex justify-between items-center px-6 lg:px-12 py-2 border-b border-gray-100/10'>
        <div className='flex items-center gap-3'>
          {[Twitter, insta, whatsapp, youtube, face, linkdin].map((icon, index) => (
            <a key={index} href="#" className="hover:opacity-70 transition-opacity">
              <img src={icon} alt="Social" className='h-4 w-auto object-contain' />
            </a>
          ))}
        </div>

        <div className='flex items-center gap-6 text-[12px] lg:text-[14px] font-medium text-gray-800'>
          <a href="mailto:info@sydneydesignerhomes.com.au" className='flex items-center gap-2 hover:text-cyan-600 cursor-pointer transition-colors'>
            <MailOpen size={18} strokeWidth={1.5} />
            <span className="hidden lg:inline">info@sydneydesignerhomes.com.au</span>
          </a>
          <a href="tel:1300574235" className='flex items-center gap-2 hover:text-cyan-600 cursor-pointer transition-colors'>
            <Phone size={18} strokeWidth={1.5} />
            <span>1300 574 235</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div id='Main Navigation' className='flex items-center justify-between px-6 lg:px-12 py-3 min-h-[80px] lg:min-h-[100px]'>

        {/* Logo */}
        <div className='flex-shrink-0 relative z-50'>
          <Link to="/">
            <img
              src={images}
              alt="Sydney Designer Homes Logo"
              className='h-12 md:h-16 lg:h-20 w-auto'
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex flex-1 justify-center px-4">
          <ul className='bg-gray-100/90 backdrop-blur-md text-black flex items-center gap-1 lg:gap-2 px-6 py-3 rounded-full font-bold text-[12px] lg:text-[13px] tracking-tight shadow-sm border border-white/20'>
            {navItems.map((item) => (
              <li key={item.name} className="rounded-full transition-all whitespace-nowrap">
                <Link 
                  to={item.path} 
                  className="block px-3 py-2 hover:bg-white rounded-full transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Actions */}
        <div className='flex items-center gap-3 z-50'>
          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-black p-2 hover:bg-gray-100 rounded-full transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            <Link to="/contact-us">
              <button className='bg-black text-white px-6 py-3 lg:px-8 lg:py-4 font-bold text-xs lg:text-sm rounded-full flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg'>
                CONTACT US
                <ArrowRight size={18} weight="bold" />
              </button>
            </Link>

            <div className='hidden md:flex items-center -space-x-4'>
              <a href="mailto:info@sydneydesignerhomes.com.au" className='z-10 bg-[#8E537A] w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] rounded-full text-white flex items-center justify-center shadow-md hover:-translate-y-1 transition-transform cursor-pointer'>
                <MailOpen size={20} strokeWidth={1.5} />
              </a>
              <a href="tel:1300574235" className='z-0 bg-[#48AAB5] w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] rounded-full text-white flex items-center justify-center shadow-md hover:-translate-y-1 transition-transform cursor-pointer'>
                <Phone size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`xl:hidden fixed inset-0 bg-white/98 backdrop-blur-md transition-transform duration-500 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-28 pb-10 px-8">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-gray-100 pb-3">
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-extrabold tracking-tight text-gray-900 cursor-pointer active:text-cyan-600 transition-colors block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-6">
            <div className="space-y-4">
              <p className="text-gray-400 text-xs font-bold tracking-widest text-center uppercase">Get In Touch</p>
              <Link to="/contact-us" onClick={() => setIsOpen(false)}>
                <button className='w-full bg-black text-white py-5 px-6 font-bold text-base rounded-full flex justify-center items-center gap-3 shadow-xl active:scale-95 transition-transform'>
                  CONTACT US
                  <ArrowRight size={22} weight="bold" />
                </button>
              </Link>
            </div>

            <div className="flex justify-center items-center gap-10 pt-4">
              <a href="tel:1300574235" className="flex flex-col items-center gap-2 group">
                <div className="p-4 bg-gray-100 rounded-full group-active:bg-cyan-100 transition-colors">
                  <Phone size={28} className="text-gray-800" />
                </div>
                <span className="text-[10px] font-bold text-gray-500">CALL</span>
              </a>

              <a href="mailto:info@sydneydesignerhomes.com.au" className="flex flex-col items-center gap-2 group">
                <div className="p-4 bg-gray-100 rounded-full group-active:bg-purple-100 transition-colors">
                  <MailOpen size={28} className="text-gray-800" />
                </div>
                <span className="text-[10px] font-bold text-gray-500">EMAIL</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}