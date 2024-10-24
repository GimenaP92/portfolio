import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
            trabajando. Algunos de ellos se encuentran en construcción, pero pronto estarán listos para que los explores.
            Cada uno de estos proyectos ha sido creado con dedicación y amor, reflejando mi pasión por el desarrollo y 
            el diseño. ¡Espero que disfrutes navegando por ellos tanto como yo disfruté creándolos!
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="col-span-3">
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
              </div>
            </Link>
          </li>

          <li className="relative group">
            <Link href="/underConstruction" className="block overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dbtfna8ev/image/upload/v1729566567/elvir-k-Xtyh5b5GGX4-unsplash_ckmsm8.jpg"
                alt="PupShops"
                className="object-cover transition duration-500 group-hover:scale-105 opacity-100 group-hover:opacity-50"
                width={400}
                height={350}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white text-lg font-bold">En construcción</span>
              </div>
              <div className="relative bg-[var(--background)] pt-3">
                <h3 className="text-xs text-[var(--foreground)] group-hover:underline group-hover:underline-offset-4">
                  PupShops
                </h3>
                <p className="mt-2">
                  <span className="tracking-wider text-[var(--foreground)] font-semibold">
                    Ecommerce
                  </span>
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
