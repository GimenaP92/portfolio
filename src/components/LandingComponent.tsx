"use client"
import Image from 'next/image';
import React from 'react';
import TypingEffect from './TypingEffect';
import TechComponent from './Technologies/TechComponent';



export default function AboutMeComponent() {
  return (
    <div className="relative h-screen">
      <div className="w-full h-full relative drop-shadow-xl">
        <Image
          src="/images/fondo.webp"
          alt="Imagen presentación, notebook con frase"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-80"
        />
      </div>

      <div 
        className="
          absolute top-10 right-8 
          p-4 flex flex-col items-end 
          text-right space-y-2 
          text-white drop-shadow-md
          lg:top-10 lg:right-8"
      >
       <h1
  className="text-2xl md:text-6xl text-center font-bold leading-tight drop-shadow-md tracking-wide"
  style={{ fontFamily: 'Raleway, sans-serif' }}
>
  GIMENA PASCUALE
</h1>

      <div className='flex text-center'>
        <TypingEffect/>
        </div>
      </div>
      <div id="technologies">
        <TechComponent />
      </div>
      
    </div>
  );
}