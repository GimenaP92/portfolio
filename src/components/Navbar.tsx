"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import ContactMeComponent from './ContactMeComponent';
import Image from 'next/image';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('/');
  const [showContactCard, setShowContactCard] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleContactCard = () => setShowContactCard(!showContactCard); 
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); 

  return (
    <>
      <nav className="py-4 relative z-20 bg-opacity-70 bg-gray-900 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? '☰' : '☰'} 
            </button>
          </div>

       
          <div className="hidden md:flex md:justify-center md:items-center md:space-x-8 text-white"> 
        
            <Link href="/" onClick={() => setActiveLink('/')} className="text-white hover:text-yellow-400 transition duration-300 relative inline-flex items-center">
              <span className="relative z-10">HOME</span>
              <span className={`underline ${activeLink === '/' ? 'active-underline' : ''}`}></span>
            </Link>
            <div className="border-l-2 border-white h-6 mx-2"></div> 
            <Link href="/aboutMe" onClick={() => setActiveLink('/aboutMe')} className="text-white hover:text-yellow-400 transition duration-300 relative inline-flex items-center">
              <span className="relative z-10">ABOUT ME</span>
              <span className={`underline ${activeLink === '/aboutMe' ? 'active-underline' : ''}`}></span>
            </Link>
            <div className="border-l-2 border-white h-6 mx-2"></div>
            <Link href="/projects" onClick={() => setActiveLink('/projects')} className="text-white hover:text-yellow-400 transition duration-300 relative inline-flex items-center">
              <span className="relative z-10">PROJECTS</span>
              <span className={`underline ${activeLink === '/projects' ? 'active-underline' : ''}`}></span>
            </Link>
            <div className="border-l-2 border-white h-6 mx-2"></div>
            <button 
              onClick={toggleContactCard} 
              className="text-white hover:text-yellow-400 transition duration-300 relative inline-flex items-center"
            >
              <span className="relative z-10">CONTACT ME</span>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-2">
          <Link href="/" onClick={() => { setActiveLink('/'); toggleMenu(); }} className="block px-4 py-2 hover:bg-gray-700">
            HOME
          </Link>
          <Link href="/aboutMe" onClick={() => { setActiveLink('/aboutMe'); toggleMenu(); }} className="block px-4 py-2 hover:bg-gray-700">
            ABOUT ME
          </Link>
          <Link href="/projects" onClick={() => { setActiveLink('/projects'); toggleMenu(); }} className="block px-4 py-2 hover:bg-gray-700">
            PROJECTS
          </Link>
          <button 
            onClick={() => { toggleContactCard(); toggleMenu(); }} 
            className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
          >
            CONTACT ME
          </button>
        </div>
      )}

      {showContactCard && (
        <ContactMeComponent onClose={toggleContactCard} />
      )}
    </>
  );
}
