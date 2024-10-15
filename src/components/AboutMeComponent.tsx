import Image from 'next/image';
import React from 'react';

export default function AboutMeComponent() {
  return (
    <div className="relative h-screen">
      {/* Contenedor de la imagen con sombra */}
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

      {/* Título y subtítulo */}
      <div 
        className="
          absolute top-10 right-8 
          p-4 flex flex-col items-end 
          text-right space-y-2 
          text-white drop-shadow-md
          lg:top-10 lg:right-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
          Gimena Pascuale
        </h1>
        <h2 className="text-xl md:text-3xl mt-2 drop-shadow-md">
          Full Stack Web Developer
        </h2>
      </div>

      {/* Enlace "About Me" con flecha */}
      <div 
        className="
          absolute bottom-5 right-5 
          flex flex-col items-end 
          p-4 text-white"
      >
        <a
          href="#bio"
          className="
            mt-4 inline-flex items-center 
            font-semibold py-2 px-4 
            drop-shadow-md transition duration-300 hover:underline
          "
        >
          <span className="text-lg md:text-xl">About Me</span>
          <span className="ml-2 text-xl">⇩</span>
        </a>
      </div>
    </div>
  );
}
