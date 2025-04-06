"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiAntdesign, SiOpenai, SiStrapi, SiTailwindcss } from "react-icons/si";

const projects = [
  { img: "/images/HomeI.png", title: "Home", desc: "Solicitud de exámen inteligente con nivel de dificultad y cantidad de preguntas múltiple choice" },
  { img: "/images/examenGenerad.png", title: "Exámen generado", desc: "Una vez generado el exámen puedes realizarlo en línea o guardarlo" },
  { img: "/images/result.png", title: "Resultado", desc: "Resultado inmediato luego de realizado" },
  { img: "/images/Feedback.png", title: "Exámen completo", desc: "Exámen realizado con feedback" },
  { img: "/images/exams.png", title: "Historial de exámenes", desc: "Puedes consultar exámenes creados y realizados, con fecha y nota" },
  { img: "/images/thread.png", title: "Historial de conversaciones", desc: "Puedes buscar conversaciones anteriores, darles un nombre o archivarlas" },
];

export default function EdtoolsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-10 px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-200 drop-shadow-md">
        Mi aporte en Edtools
      </h2>
      <section className="py-4 px-6 text-center max-w-3xl mx-auto">
      <p className="mt-4 text-gray-300 text-sm leading-relaxed">
        <strong>Edtools</strong> es una startup dedicada a brindar acceso a una educación de calidad para todos los estudiantes, 
        al mismo tiempo que facilita el trabajo de los docentes. Su enfoque principal es la creación de exámenes inteligentes adaptados a cualquier ámbito y nivel educativo.
      </p>
      <p className="mt-4 text-gray-300 text-sm leading-relaxed">
        Con Edtools, puedes gestionar tu ritmo de estudio, recibir <strong>feedback inmediato</strong> sobre tu desempeño y generar 
        exámenes personalizados. Además, tienes la opción de <strong>compartirlos</strong> con otros estudiantes y acceder a tus <strong>notas</strong> en cualquier momento.
      </p>
    </section>
   
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
     
        <div className="rounded-lg border border-[var(--border-color)] p-4 shadow-md text-center transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer bg-[var(--background)]">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">Desafíos y aprendizajes</h3>
<p className="mt-2 text-[var(--foreground)] opacity-70">
  Uno de los principales desafíos fue aprender a utilizar la API de OpenAI a partir de su documentación oficial. Esto implicó experimentar con diferentes instrucciones y parámetros para lograr que el asistente estructurara correctamente un examen en formato JSON. Fue una experiencia muy enriquecedora que me permitió explorar el potencial de la inteligencia artificial y comprender cómo aprovecharla de manera efectiva en proyectos reales.
</p>

        </div>

   
        <div className="rounded-lg border border-[var(--border-color)] p-4 shadow-md transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer bg-[var(--background)]">
          <h3 className="text-lg font-semibold text-[var(--foreground)] text-center">Características</h3>
          <ul className="mt-2 text-[var(--foreground)] opacity-70 list-none">
          <ul className="mt-2 text-[var(--foreground)] opacity-70 list-disc ml-5">
  <li>Parseo y estructuración de exámenes en formato JSON con preguntas de opción múltiple.</li>
  <li>Creación de entidades personalizadas en Strapi para gestionar exámenes y usuarios.</li>
  <li>Funcionalidad para guardar exámenes, resolverlos y recibir retroalimentación inmediata.</li>
  <li>Perfil de usuario con opciones de edición y visualización de historial.</li>
  <li>Envío de invitaciones por correo electrónico para realizar exámenes.</li>
  <li>Evaluación automática con asignación de puntaje al finalizar el examen.</li>
  <li>Visualización de usuarios que realizaron tus exámenes y sus respectivas calificaciones.</li>
  <li>Acceso a tus propios exámenes completados junto con los resultados obtenidos.</li>
</ul>

          </ul>
        </div>

    
        <div className="rounded-lg border border-[var(--border-color)] p-4 shadow-md text-center transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer bg-[var(--background)]">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">Tecnologías Utilizadas</h3>
          <div className="mt-2 flex justify-center space-x-4 text-[var(--foreground)] opacity-70">
          <FaReact className="h-8 w-8 text-cyan-400" title="React" />
          <SiTailwindcss className="h-8 w-8 text-sky-400" title="Tailwind CSS" />
          <SiAntdesign className="h-8 w-8 text-blue-400" title="Ant Design" />
          <SiOpenai className="h-8 w-8 text-green-300" title="OpenAI" />
          <SiStrapi className="h-8 w-8 text-indigo-400" title="Strapi" />
          </div>
        </div>

     
        <div className="rounded-lg border border-[var(--border-color)] p-4 shadow-md text-center transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer bg-[var(--background)]">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">Enlaces</h3>
          <ul className="mt-2 text-[var(--foreground)] opacity-70 list-none">
            <li>
              <a
                href="https://edtools.com.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Edtools web
              </a>
            </li>
           <p className="mt-2">Pruébala tú mismo</p>
          </ul>
        </div>
        
        </div>
      <div className="relative w-full max-w-3xl">
        {/* Imagen con ajuste de tamaño */}
        <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg">
          <Image
            src={projects[currentIndex].img}
            alt={projects[currentIndex].title}
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Contenido */}
        <div className="mt-6 text-center">
          <h3 className="text-lg md:text-xl font-semibold tracking-wider text-[var(--foreground)]">
            {projects[currentIndex].title}
          </h3>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto">
            {projects[currentIndex].desc}
          </p>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white w-12 h-12 flex items-center justify-center text-lg rounded-full z-10 shadow-lg"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white w-12 h-12 flex items-center justify-center text-lg rounded-full z-10 shadow-lg"
        >
          {">"}
        </button>
      </div>

      {/* Enlace */}
      <div className="mt-6">
        <Link
          href="https://edtools.com.co/"
          className="text-blue-600 hover:underline text-center block"
        >
          ¿Interesante? Visita la página y pruébalo tú mismo
        </Link>
      </div>
    </section>
  );
}
