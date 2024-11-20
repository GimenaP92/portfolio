import React from 'react'
import { FaGithub, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function QuizzComponent() {
    return (
        <div className="mt-8 sm:col-span-2 lg:col-span-4 bg-white p-6">
          <h1 className="mt-8 text-3xl font-bold text-black text-center mb-6">
            Quizz multiple choice
          </h1>
    
    
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
          <div className="rounded-lg shadow-lg border-2 p-4 border-gray-300 mb-6 sm:mb-0 w-full sm:w-1/3 flex flex-col items-center hover:cursor-pointer hover:shadow-lg hover:shadow-yellow-300 transition-transform duration-300 transform hover:scale-105">
          
<div className="relative w-full max-w-md mx-auto">
   <img
      src="/images/quizz2.png"
    alt="Imagen 1"
    className="w-full rounded-lg transform rotate-[-5deg] scale-95 shadow-lg"
  />
  <img
      src="/images/quizz2.png"
    alt="Imagen 2"
    className="absolute top-10 left-10 w-[90%] rounded-lg transform rotate-[5deg] scale-105 shadow-xl"
  />
</div>
  <ul className="list-disc text-black mt-12 opacity-80 text-center">
    <li>Content Types con Strapi.io</li>
    <li>Content Manager con Strapi.io</li>
    <li>Visualización de resultados</li>
  </ul>
  <a
    href="https://github.com/GimenaP92/quizz"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 mb-4 flex items-center space-x-2 text-[var(--foreground)] hover:text-gray-400 transition"
  >
    <p className='text-gray-700'>Puedes ver el código aquí</p>
    <FaGithub className="text-3xl sm:text-4xl text-gray-800" />
  </a>
  <div className="flex justify-center space-x-6 mt-3 text-black">
              <img src="/images/logoStrapi.avif" alt="Strapi" className="w-6 h-6" title="Strapi" />
              <FaReact className="text-xl sm:text-2xl" title="React" />
             <SiNextdotjs className="text-xl sm:text-2xl" title="Next.js" />
             <SiTypescript className="text-xl sm:text-2xl" title="TypeScript" />
              <SiTailwindcss className="text-xl sm:text-2xl" title="Tailwind CSS" />
              </div>
            </div>
            <div className="w-full sm:w-2/3">
              <div className="flex justify-center mt-4">
                <video className="w-full max-w-5xl h-[400px] object-cover rounded-lg shadow-md" controls>
                  <source src="/videos/Quizz.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
            </div>
          </div>
          
         </div>
      );
    }
