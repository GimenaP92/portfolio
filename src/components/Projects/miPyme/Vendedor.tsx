"use client";

import Image from 'next/image';
import React, { useState } from 'react';

const vendedorFeatures = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910718/vendedor-todaslasventas_t4bhrj.png',
    title: 'Panel de ventas realizadas',
    description: 'El vendedor puede consultar todas sus ventas realizadas.'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910717/vendedor-historial_oslbxv.png',
    title: 'Detalles de una venta',
    description: 'Puede consultar los detalles de la venta y datos de su cliente.'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910717/vendedor-publicar_bjnzjj.png',
    title: 'Panel de Vendedor',
    description: 'En sus permisos como vendedor puede acceder a publicar productos o servicios, editarlos,eliminarlos y editar datos para transferencia bancaria'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910716/vendedor-editarprod_zprtt1.png',
    title: 'Edición',
    description: 'Modificar o eliminar productos o servicios'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910716/vendedor-datostrasnsf_bcl8a7.png',
    title: 'Transferencias bancarias',
    description: 'Formulario para completar o editar datos'
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910718/vendedor-publicarproducto_jp8ykx.png',
    title: 'Crear Producto o Servicio',
    description: 'Formulario para crear producto o servicio, sencillo e intuitivo, cuenta con detección de erorres'
  },
];

export default function Vendedor() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const closeModal = () => setModalImage(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[var(--foreground)] mb-10">
        Funciones del Rol Vendedor
      </h2>
      <h3 className="text-sm font-bold text-center text-[var(--foreground)] mb-10">
        Haz click sobre la card para ver la imágen completa
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {vendedorFeatures.map(({ id, image, title, description }) => (
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
