import Link from 'next/link';
import React from 'react';

export default function AboutMeComponent() {
  return (
    <div className="absolute inset-0 z-0">
    <div
      className="min-h-screen w-full bg-gray-100 p-6 sm:p-8 flex flex-col justify-center items-center text-center sm:text-left"
    >
         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 drop-shadow-md">
  About Me
</h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl">
        
        👋 Hola, soy Gimena y me gustaría contarte un poco sobre mí. 
        Desde que descubrí el mundo de la programación, he encontrado una verdadera pasión por resolver 
        problemas y transformar ideas en realidades digitales. He aprendido tecnologías como Next.js, React, 
        y TypeScript, que me permiten expresar mi creatividad y seguir aprendiendo constantemente. También 
        disfruto trabajar con Express y Node.js en el backend, así como con bases de datos como PostgreSQL 
        y MongoDB. Fuera de las pantallas, la música y el deporte son mis grandes pasiones; me mantienen 
        inspirada y actúan como mi cable a tierra. Actualmente, estoy en busca de nuevas oportunidades y 
        desafíos que me permitan crecer en este emocionante campo. Bienvenido/a a mi portfolio, donde 
        encontrarás una muestra de mi trabajo. ¡Espero que lo disfrutes!
      </p>
      <div className="mt-4 sm:mt-8">
            <Link
              href="/projects"
              className="inline-block rounded-full bg-gray-900  px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Ver Proyectos
            </Link>
            </div>
    </div>
    </div>
  );
}
