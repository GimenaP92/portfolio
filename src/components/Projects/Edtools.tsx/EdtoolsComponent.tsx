"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 drop-shadow-md">
        Mi aporte en Edtools
      </h2>
      <section className="py-4 px-6 text-center max-w-3xl mx-auto">
      <p className="mt-4 text-gray-600 text-lg leading-relaxed">
        <strong>Edtools</strong> es una startup dedicada a brindar acceso a una educación de calidad para todos los estudiantes, 
        al mismo tiempo que facilita el trabajo de los docentes. Su enfoque principal es la creación de exámenes inteligentes adaptados a cualquier ámbito y nivel educativo.
      </p>
      <p className="mt-4 text-gray-600 text-lg leading-relaxed">
        Con Edtools, puedes gestionar tu ritmo de estudio, recibir <strong>feedback inmediato</strong> sobre tu desempeño y generar 
        exámenes personalizados. Además, tienes la opción de <strong>compartirlos</strong> con otros estudiantes y acceder a tus <strong>notas</strong> en cualquier momento.
      </p>
    </section>

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
