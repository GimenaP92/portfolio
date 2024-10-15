import React from 'react';

export default function BioComponent() {
  return (
    <div
      id="bio"
      className="min-h-screen w-full bg-gray-100 p-6 sm:p-8 flex flex-col justify-center items-center text-center sm:text-left"
    >
     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 drop-shadow-md">
  About Me
</h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl">
        Soy Gimena, licenciada en Kinesiología y Fisiatría, y me gustaría contarte un poco sobre mí. 
        Desde que descubrí el mundo de la programación, he encontrado una verdadera pasión por resolver 
        problemas y transformar ideas en realidades digitales. He aprendido tecnologías como Next.js, React, 
        y TypeScript, que me permiten expresar mi creatividad y seguir aprendiendo constantemente. También 
        disfruto trabajar con Express y Node.js en el backend, así como con bases de datos como PostgreSQL 
        y MongoDB. Fuera de las pantallas, la música y el deporte son mis grandes pasiones; me mantienen 
        inspirada y actúan como mi cable a tierra. Actualmente, estoy en busca de nuevas oportunidades y 
        desafíos que me permitan crecer en este emocionante campo. Bienvenido/a a mi portfolio, donde 
        encontrarás una muestra de mi trabajo. ¡Espero que lo disfrutes!
      </p>
    </div>
  );
}
