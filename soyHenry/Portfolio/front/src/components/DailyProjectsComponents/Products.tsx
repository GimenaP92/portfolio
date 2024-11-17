import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function Products() {
  
      return (
        <div className="mt-8 sm:col-span-2 lg:col-span-4 bg-white p-6">
          <h1 className="mt-8 text-3xl font-bold text-[var(--foreground)] text-center mb-6">
            Cards de Productos
          </h1>
    
    
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
            
            <div className="rounded-lg shadow-lg border-2 p-4 border-gray-300 mb-6 sm:mb-0 w-full sm:w-1/3 flex flex-col items-center hover:cursor-pointer  hover:shadow-lg hover:shadow-yellow-300 ">
              <ul className="list-disc pl-6 text-[var(--foreground)] opacity-80 text-center">
                <li>Utilización de interfaz</li>
                <li>Mock para productos</li>
                <li>Estilos con Tailwind</li>
              </ul>
              <div className="flex justify-center space-x-6 mt-3 text-[var(--foreground)]">
                <FaReact className="text-xl" title="React" />
                <SiNextdotjs className="text-xl" title="Next.js" />
                <SiTypescript className="text-xl" title="TypeScript" />
                <SiTailwindcss className="text-xl" title="Tailwind CSS" />
              </div>
            </div>
            <div className="w-full sm:w-2/3">
              <div className="flex justify-center mt-4">
                <video className="w-full max-w-5xl h-[400px] object-cover rounded-lg shadow-md" controls>
                  <source src="/videos/CardProduct.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
            </div>
          </div>
        </div>
      );
    }
    