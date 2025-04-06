"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const adminFeatures = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910717/admin-panel_gbogox.png',
    title: 'Panel de Administrador',
    description: 'El administrador puede ver las siguientes secciones: Usuarios, Órdenes, Productos, Publicidades'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910717/admin-usuarios_awzf3n.png',
    title: 'Usuarios',
    description: 'Puede consultar todos los usuarios registrados, otorgar permisos para asignar nuevo administrador o vendedor, y eliminar un usuario no deseado'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910716/admin-historialventas_oejndi.png',
    title: 'Órdenes',
    description: 'Puede consultar todas las ventas realizadas con sus detalles relacionados a vendedor,cliente y producto/servicio'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910716/admin-eliminarprod_zzcefe.png',
    title: 'Productos/Servicios',
    description: 'Puede eliminar producto/servicio indebido'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910716/admin-crearpublic_kw2gai.png',
    title: 'Publicidad',
    description: 'Formulario para crear publicidades de dos tipos. Según el tipo se renderizará intercalada en los productos/servicios, carrito,etc'
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dbtfna8ev/image/upload/v1743910716/admin-editarpublic_rquixr.png',
    title: 'Publicidad',
    description: 'Puede editar y eliminar publicidad'
  },
];

export default function Admin() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const closeModal = () => setModalImage(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[var(--foreground)] mb-10">
        Funciones del Rol Administrador
      </h2>
      <h3 className="text-sm font-bold text-center text-[var(--foreground)] mb-10">
        Haz click sobre la card para ver la imágen completa
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {adminFeatures.map(({ id, image, title, description }) => (
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
