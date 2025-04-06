import React from 'react'
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiJsonwebtokens, SiMercadopago, SiNestjs, SiNextdotjs, SiPostgresql, SiRender, SiTailwindcss, SiTypescript } from 'react-icons/si';
import RoleCards from './RoleCards';


export default function MiPymeProject() {

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
         MiPyme Mutual
        </h2>
        <p className="mt-4 max-w-md text-[var(--foreground)] opacity-70 mx-auto">
        Este proyecto es un ecommerce real desarrollado para una mutual orientada a microemprendedores. Permite a usuarios registrarse, comprar productos de distintas categorías y a emprendedores ofrecer sus productos. El sitio está estructurado para gestionar de forma clara tres tipos de roles: usuarios, vendedores y administradores.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-[var(--foreground)] mb-4">
        Roles en la plataforma
      </h2>
      <p className="text-center text-[var(--foreground)] opacity-80 mb-8">
        Haz click en un rol para conocer sus características y funciones dentro del sistema.
      </p>
      
      <RoleCards />
    </section>
    
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
     
        <div className="rounded-lg border border-[var(--border-color)] p-4 shadow-md text-center transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer bg-[var(--background)]">
          <h3 className="text-lg font-semibold text-[var(--foreground)]"> Desafíos y aprendizajes</h3>
          <p className="mt-2 text-[var(--foreground)] opacity-70">
          Uno de los mayores retos fue integrar la pasarela de pagos de Mercado Pago, ya que era la primera vez que trabajaba con pagos en línea. Tuve que investigar desde cero y aprender a manejar webhooks, preferencias de pago y seguridad. Me apoyé en la documentación oficial y tutoriales en video para lograrlo exitosamente.
          </p>
        </div>

    
        <div className="rounded-lg border border-[var(--border-color)] p-4 shadow-md text-center transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer bg-[var(--background)]">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">Tecnologías Utilizadas</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[var(--foreground)] opacity-90">
  <div className="flex items-center space-x-2">
    <SiNextdotjs className="h-8 w-8" title="Next.js" />
    <span>Next.js</span>
  </div>
  <div className="flex items-center space-x-2">
    <SiTailwindcss className="h-8 w-8" title="Tailwind CSS" />
    <span>Tailwind CSS</span>
  </div>
  <div className="flex items-center space-x-2">
    <SiTypescript className="h-8 w-8" title="TypeScript" />
    <span>TypeScript</span>
  </div>
  <div className="flex items-center space-x-2">
    <SiNestjs className="h-8 w-8" title="NestJS" />
    <span>NestJS</span>
  </div>
  <div className="flex items-center space-x-2">
    <SiPostgresql className="h-8 w-8" title="PostgreSQL" />
    <span>PostgreSQL</span>
  </div>
  <div className="flex items-center space-x-2">
    <SiRender className="h-8 w-8" title="Render" />
    <span>Render</span>
  </div>
  <div className="flex items-center space-x-2">
    <SiJsonwebtokens className="h-8 w-8" title="JWT" />
    <span>JWT</span>
  </div>
  <div className="flex items-center space-x-2">
    <MdEmail className="h-8 w-8" title="Nodemailer" />
    <span>Nodemailer</span>
  </div>
  <div className="flex items-center space-x-2">
    <SiMercadopago className="h-8 w-8" title="Mercado Pago" />
    <span>Mercado Pago</span>
  </div>
</div>

        </div>

     
        <div className="rounded-lg border border-[var(--border-color)] p-4 shadow-md text-center transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer bg-[var(--background)]">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">Enlaces</h3>
          <ul className="mt-2 text-[var(--foreground)] opacity-70 list-none">
            <li>
              <a
                href="https://project-groupsales-front.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                MiPyme Mutual Web
              </a>
            </li>
           
          </ul>
        </div>

     
        <div className="mt-8 sm:col-span-2 lg:col-span-4">
          
   
        <div className="rounded-lg text-sm border border-[var(--border-color)] p-4 shadow-md transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer bg-[var(--background)]">
          <h3 className="text-lg font-semibold text-[var(--foreground)] text-center">Características</h3>
          <ul className="mt-2 text-[var(--foreground)] opacity-70 list-disc pl-5 space-y-2">
  {/* Usuario */}
  <li className="pt-2"><span role="img" aria-label="Usuario">👤</span> <strong>Usuario:</strong></li>
  <li className="ml-4">Registro, login y recuperación de contraseña</li>
  <li className="ml-4">Edición de perfil y cierre de sesión</li>
  <li className="ml-4">Agregar productos al carrito</li>
  <li className="ml-4">Comprar vía transferencia o Mercado Pago</li>
  <li className="ml-4">Visualizar historial de compras</li>
  <li className="ml-4">Solicitar permiso para convertirse en vendedor</li>

  {/* Vendedor */}
  <li className="pt-2"><span role="img" aria-label="Vendedor">🛍️</span> <strong>Vendedor:</strong></li>
  <li className="ml-4">Publicar, editar y eliminar productos</li>
  <li className="ml-4">Asignar categoría al producto</li>
  <li className="ml-4">Visualizar historial de ventas y compradores</li>

  {/* Administrador */}
  <li className="pt-2"><span role="img" aria-label="Administrador">🛡️</span> <strong>Administrador:</strong></li>
  <li className="ml-4">Visualizar todos los usuarios</li>
  <li className="ml-4">Puede crear dos tipos de publicidades que se renderizan en distintos sectores según su tipo</li>
  <li className="ml-4">Asignar o revocar permisos de administrador o vendedor</li>
  <li className="ml-4">Ver todas las ventas realizadas en la plataforma</li>
  <li className="ml-4">Eliminar productos o usuarios si es necesario</li>

  {/* Seguridad */}
  <li className="pt-2"><span role="img" aria-label="Seguridad">🔐</span> <strong>Seguridad y validaciones:</strong></li>
  <li className="ml-4">Autenticación y autorización mediante JWT</li>
  <li className="ml-4">Rutas protegidas según rol</li>
  <li className="ml-4">Validaciones de formularios y datos en frontend y backend</li>
</ul>

        </div>

        </div>
      </div>      </section>
  );
}
