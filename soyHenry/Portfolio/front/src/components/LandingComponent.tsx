"use client"
import Image from 'next/image';
import React from 'react';
import TypingEffect from './TypingEffect';

export default function AboutMeComponent() {
  return (
    <div className="relative h-screen">
      <div className="w-full h-full relative drop-shadow-xl">
        <Image
          src="https://res.cloudinary.com/dbtfna8ev/image/upload/c_fill,w_2560,h_1440/v1728960769/andrew-neel-cckf4TsHAuw-unsplash_hctkwa.jpg"
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
        <h1 className="text-2xl text-center md:text-6xl font-bold leading-tight drop-shadow-md">
          Gimena Pascuale
        </h1>
      <div className='flex text-center'>
        <TypingEffect/>
        </div>
      </div>

      
    </div>
  );
}