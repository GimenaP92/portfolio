import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiOpenai, SiStrapi,  SiNestjs, SiPostgresql } from 'react-icons/si';


export default function ProjectsComponents() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-[var(--foreground)] sm:text-3xl">
            Mis Proyectos
          </h2>

          <p className="mx-auto mt-4 max-w-md text-[var(--foreground)] opacity-70">
            ¡Bienvenido a la sección de mis proyectos! Aquí encontrarás una variedad de trabajos en los que he estado 
            trabajando.
            Cada uno de estos proyectos ha sido creado con dedicación y amor, reflejando mi pasión por el desarrollo y 
            el diseño. ¡Espero que disfrutes navegando por ellos tanto como yo disfruté creándolos!
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         

          <li className="col-span-3 py-8">
            <Link href="/edtools" className="group block overflow-hidden">
              <Image
                src="/images/HomeI.png"
                alt="Step Up"
                className="object-cover transition duration-500 group-hover:scale-105"
                width={1200}
                height={350}
              />
              <div className="relative bg-[var(--background)] pt-3">
                <h3 className="text-sm text-[var(--foreground)] group-hover:underline group-hover:underline-offset-4">
                 Edtools
                </h3>
                <p className="mt-2 text-[var(--foreground)] text-sm">
        Plataforma de exámenes inteligentes con OpenAi
      </p>
      <p className="mt-1 text-[var(--foreground)] text-sm">
  Integra la API de OpenAI para generar exámenes estructurados en formato de opción múltiple, adaptados a las indicaciones del usuario y aplicables a cualquier área de conocimiento. También permite incluir textos introductorios para comprensión lectora o situaciones específicas. Los exámenes pueden resolverse directamente desde la plataforma y son calificados automáticamente.
</p>
<button className='border-2 border-sm rounded-lg p-1 text-sm mt-2 hover:bg-white hover:text-[var(--background)]'>Ver más</button>
                <div className="flex space-x-3 mt-2 text-[var(--foreground)]">
        <FaReact className="text-xl" title="React" />
        <SiStrapi className="text-xl" title="Strapi" />
        <SiOpenai className="text-xl" title="OpenAI" />
        <SiTailwindcss className="text-xl" title="Tailwind CSS" />
      </div>
              </div>
            </Link>
            <div className="pt-2 relative group">
  <Link 
    href="https://edtools.com.co/" 
    className="text-blue-600 transition-all duration-300 ease-in-out group-hover:text-blue-400"
  >
    Visitar página
  </Link>
</div>

          </li>
          <li className="col-span-3 py-8">
  <Link href="/projects/miPyme" className="group block overflow-hidden">
    <Image
      src="https://res.cloudinary.com/dbtfna8ev/image/upload/v1743897250/HomeMutual_iyvaps.png"
      alt="miPyme"
      className="object-cover transition duration-500 group-hover:scale-105"
      width={1200}
      height={350}
    />
    <div className="relative bg-[var(--background)] pt-3">
      <h3 className="text-sm text-[var(--foreground)] group-hover:underline group-hover:underline-offset-4">
        MiPyme Mutual
      </h3>
      <p className="mt-2">
        <span className="tracking-wider text-[var(--foreground)] font-semibold">
          Ecommerce con múltiples roles
        </span>
      </p>
      <p className="mt-2 text-[var(--foreground)] text-sm">
        Plataforma real desarrollada para una mutual que conecta emprendedores con compradores. Incluye funcionalidades clave como compras, publicidad, publicaciones y gestión de usuarios.
      </p>
      <p className="mt-1 text-[var(--foreground)] text-sm italic">
        Descubrí cómo resolvimos el manejo de roles, pagos y autenticación.
      </p>
      <button className='border-2 border-sm rounded-lg p-1 text-sm mt-2 hover:bg-white hover:text-[var(--background)]'>Ver más</button>
      <div className="flex space-x-3 mt-2 text-[var(--foreground)]">
        <SiNextdotjs className="text-xl" title="Next.js" />
        <SiNestjs className="text-xl" title="NestJS" />
        <SiTypescript className="text-xl" title="TypeScript" />
        <SiTailwindcss className="text-xl" title="Tailwind CSS" />
        <SiPostgresql className="text-xl" title="PostgreSQL" />
      </div>
    </div>
  </Link>
</li>


          <li className="col-span-3 py-8">
            <Link href="/projects/stepUp" className="group block overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dbtfna8ev/image/upload/v1729566895/imgStepup_mboyhv.png"
                alt="Step Up"
                className="object-cover transition duration-500 group-hover:scale-105"
                width={1200}
                height={350}
              />
               <div className="relative bg-[var(--background)] pt-3">
               <h3 className="text-xs text-[var(--foreground)] group-hover:underline group-hover:underline-offset-4">
                  Step Up
                </h3>
                <p className="mt-2">
                  <span className="tracking-wider text-[var(--foreground)] font-semibold">
                    Ecommerce
                  </span>
                </p>
                <div className="flex space-x-3 mt-2 text-[var(--foreground)]">
        <FaReact className="text-xl" title="React" />
        <SiNextdotjs className="text-xl" title="Next.js" />
        <SiTypescript className="text-xl" title="TypeScript" />
        <SiTailwindcss className="text-xl" title="Tailwind CSS" />
      </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
