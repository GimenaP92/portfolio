import Image from 'next/image';
import React from 'react';

export default function AboutMeComponent() {
  return (
    <div className="relative h-screen">
      <Image
        src="https://res.cloudinary.com/dbtfna8ev/image/upload/c_fill,w_2560,h_1440/v1728960769/andrew-neel-cckf4TsHAuw-unsplash_hctkwa.jpg" 
        alt="Imagen presentación, notebook con frase"
        layout="fill" 
        objectFit="cover" 
        objectPosition="center" 
        className="opacity-80" 
      />
      <div className="absolute top-10 right-8 flex flex-col items-end text-white text-right p-4">
        <h1 className="text-5xl md:text-6xl font-bold">Gimena Pascuale</h1>
        <h2 className="text-2xl md:text-3xl mt-2">Full Stack Web Developer</h2>
      </div>
      <div className="absolute bottom-5 right-8 flex flex-col items-end text-white text-right p-4">
        <a
          href="#bio" 
          className="mt-4 inline-flex items-center text-white font-semibold py-2 px-4 transition duration-300"
        >
          <span className="hover:underline text-lg md:text-xl">About Me</span> 
          <span className="ml-2 text-white text-xl">⇩</span>
        </a>
      </div>
    </div>
  );
}
