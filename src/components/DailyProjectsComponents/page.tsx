import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function DailyProjectsComponents() {
  return (
    <section className="my-10 px-4">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Daily Projects
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[var(--foreground)] opacity-70">
            En esta sección encontrarás pequeños proyectos y tareas diarias que suman valor y experiencia a mi trabajo. Cada actividad es una oportunidad para aprender, experimentar y perfeccionar, contribuyendo al crecimiento de mis proyectos de una manera constante y significativa.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="group bg-white p-6 border-2 border-gray-300 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:cursor-pointer w-full"> 
            <Link href="/daily-projects/registerForm" className="text-[var(--foreground)] mt-4 inline-block">
              <div className="flex items-start space-x-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                    Register Form
                  </h3>
                  <p className="text-[var(--foreground)] text-sm mb-4">
                    Formulario de registro de usuario con validaciones robustas y almacenamiento en base de datos PostgreSQL. Además, incluye una notificación de registro exitoso para mejorar la experiencia del usuario.
                  </p>
                  <div className="flex space-x-3 mb-4 text-[var(--foreground)]">
                    <FaReact className="text-xl" title="React" />
                    <SiNextdotjs className="text-xl" title="Next.js" />
                    <SiTypescript className="text-xl" title="TypeScript" />
                    <SiTailwindcss className="text-xl" title="Tailwind CSS" />
                  </div>
                  <p className='hover:text-yellow-400'>Ver video</p>
                </div>
                <div className="w-56 h-56 bg-gray-300 rounded-lg overflow-hidden sm:block hidden">
             <Image width={400} height={400} src="/images/RegisterForm.png" alt="Imagen de Formulario de Registro" className="w-full h-full object-cover" />
            </div>

              </div>
            </Link>
          </div>


        </div>
      </div>
    </section>
  );
}
