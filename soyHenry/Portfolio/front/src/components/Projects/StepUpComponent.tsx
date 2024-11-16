import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';

export default function StepUpComponent() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          Proyecto: Step Up
        </h2>
        <p className="mt-4 max-w-md text-[var(--foreground)] opacity-70 mx-auto">
          Este proyecto fue desarrollado desde el frontend, utilizando Next.js y Tailwind CSS. 
          La idea principal es ofrecer una experiencia simple y elegante, destacando los detalles y las imágenes.
        </p>
      </header>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
     
        <div className="rounded-lg border border-[var(--border-color)] p-4 shadow-md text-center transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer bg-[var(--background)]">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">Descripción</h3>
          <p className="mt-2 text-[var(--foreground)] opacity-70">
            Se trata de un ecommerce que permite a los usuarios registrarse e iniciar sesión. Una vez dentro, 
            pueden visualizar su perfil, revisar sus órdenes y cerrar sesión.
          </p>
        </div>

   
        <div className="rounded-lg border border-[var(--border-color)] p-4 shadow-md transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer bg-[var(--background)]">
          <h3 className="text-lg font-semibold text-[var(--foreground)] text-center">Características</h3>
          <ul className="mt-2 text-[var(--foreground)] opacity-70 list-none">
            <li>- Productos organizados por categorías.</li>
            <li>- Visualización de productos por ID.</li>
            <li>- Añadir productos al carrito.</li>
            <li>- Eliminación automática de productos al completar la compra.</li>
          </ul>
        </div>

    
        <div className="rounded-lg border border-[var(--border-color)] p-4 shadow-md text-center transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer bg-[var(--background)]">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">Tecnologías Utilizadas</h3>
          <div className="mt-2 flex justify-center space-x-4 text-[var(--foreground)] opacity-70">
            <FaHtml5 className="h-8 w-8" />
            <FaCss3Alt className="h-8 w-8" />
            <FaReact className="h-8 w-8" />
            <FaNodeJs className="h-8 w-8" />
          </div>
        </div>

     
        <div className="rounded-lg border border-[var(--border-color)] p-4 shadow-md text-center transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer bg-[var(--background)]">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">Enlaces</h3>
          <ul className="mt-2 text-[var(--foreground)] opacity-70 list-none">
            <li>
              <a
                href="https://www.linkedin.com/posts/gimena-pascuale_quiero-presentarles-un-breve-recorrido-por-activity-7254140635132162048-i9_-?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GimenaP92/StepUp-ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

     
        <div className="mt-8 sm:col-span-2 lg:col-span-4">
          <h3 className="text-lg font-semibold text-[var(--foreground)] text-center">
            Mira el video del proyecto
          </h3>
          <div className="flex justify-center mt-4">
            <video className="w-full max-w-5xl h-[400px] object-cover" controls>
              <source src="/videos/StepUp.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
