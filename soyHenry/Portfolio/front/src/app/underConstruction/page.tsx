import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function UnderConstruction() {
  return (
    <div className="relative h-screen overflow-hidden"> 
      <Image
        src="https://res.cloudinary.com/dbtfna8ev/image/upload/v1729566567/elvir-k-Xtyh5b5GGX4-unsplash_ckmsm8.jpg"
        alt="Background"
        layout="fill" 
        objectFit="cover" 
        className="z-0" 
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-8 md:p-12 lg:px-16 lg:py-24 z-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Ups</h2>
      
          <p className="max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Esta página está en construcción mientras trabajo para ofrecerte la mejor experiencia posible. Agradezco tu comprensión y paciencia durante este proceso. ¡Pronto estará lista para que la explores!
          </p>
      
          <div className="mt-4 sm:mt-8">
            <Link
              href="/projects"
              className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Volver a Proyectos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
