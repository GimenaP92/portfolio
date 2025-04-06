"use client";

import Image from 'next/image';
import React, { useState } from 'react';

const clienteFeatures = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910717/cliente-micuenta_ov9gkx.png',
    title: 'Cuenta de usuario',
    description: 'El cliente puede ver sus datos de perfil, editarlos, cerrar sesión y eliminar cuenta fácilmente.'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910718/cliente-permiso_mtakkf.png',
    title: 'Solicitar vender',
    description: 'Se envía una notificación al email del administrador, el usuario solicita tener permisos de vendedor.'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910717/cliente-carrito_wvrvfq.png',
    title: 'Carrito de compras',
    description: 'Agregar productos al carrito, modificar cantidad, vaciar carrito.'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910717/cliente-historial_gzneh3.png',
    title: 'Historial de compras',
    description: 'Puede consultar detalles de sus compras realizadas.'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910718/cliente-mp_atcd29.png',
    title: 'Plataforma de pago',
    description: 'Opción como medio de pago, se encuentra integrado Mercado Pago.'
  },
  
];

export default function Cliente() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const closeModal = () => setModalImage(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[var(--foreground)] mb-10">
        Funciones del Rol Cliente
      </h2>
      <h3 className="text-sm font-bold text-center text-[var(--foreground)] mb-10">
        Haz click sobre la card para ver la imágen completa
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {clienteFeatures.map(({ id, image, title, description }) => (
          <div
            key={id}
            onClick={() => setModalImage(image)}
            className="cursor-pointer bg-[var(--background)] border border-[var(--border-color)] rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.01] p-6"
          >
            <div className="w-full relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">{title}</h3>
            <p className="text-[var(--foreground)] opacity-80 text-base">{description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative w-full h-full max-w-5xl max-h-[90vh] mx-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={modalImage}
              alt="Ampliada"
              fill
              className="object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
