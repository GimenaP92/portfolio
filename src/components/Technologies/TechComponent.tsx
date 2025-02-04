import Link from 'next/link';
import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, SiMongodb, SiStrapi } from 'react-icons/si';

export default function TechComponent() {
  return (
    <section className="py-28 px-4 flex flex-col items-center relative  text-[var(--foreground)]">
      {/* Link arriba a la izquierda */}
      <Link href="/projects" className="absolute top-4 left-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
        Projects
      </Link>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 drop-shadow-md">
        Technologies I Use
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {/* Tarjetas de tecnología */}
        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:cursor-pointer shadow-lg hover:scale-105 transition-transform">
          <FaReact className="text-blue-400 text-4xl mb-2" />
          <span className="text-lg text-white ">React</span>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:cursor-pointer shadow-lg hover:scale-105 transition-transform">
          <SiNextdotjs className="text-gray-300 text-4xl mb-2" />
          <span className="text-lg text-white ">Next.js</span>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:cursor-pointer shadow-lg hover:scale-105 transition-transform">
          <SiTypescript className="text-blue-500 text-4xl mb-2" />
          <span className="text-lg text-white ">TypeScript</span>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:cursor-pointer shadow-lg hover:scale-105 transition-transform">
          <SiTailwindcss className="text-teal-400 text-4xl mb-2" />
          <span className="text-lg text-white ">Tailwind CSS</span>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:cursor-pointer shadow-lg hover:scale-105 transition-transform">
          <FaNodeJs className="text-green-500 text-4xl mb-2" />
          <span className="text-lg text-white ">Node.js</span>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:cursor-pointer shadow-lg hover:scale-105 transition-transform">
          <SiExpress className="text-gray-400 text-4xl mb-2" />
          <span className="text-lg text-white ">Express.js</span>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:cursor-pointer shadow-lg hover:scale-105 transition-transform">
          <SiPostgresql className="text-blue-600 text-4xl mb-2" />
          <span className="text-lg text-white ">PostgreSQL</span>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:cursor-pointer shadow-lg hover:scale-105 transition-transform">
          <SiMongodb className="text-green-400 text-4xl mb-2" />
          <span className="text-lg text-white ">MongoDB</span>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:cursor-pointer shadow-lg hover:scale-105 transition-transform">
          <SiStrapi className="text-purple-500 text-4xl mb-2" />
          <span className="text-lg text-white ">Strapi</span>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:cursor-pointer shadow-lg hover:scale-105 transition-transform">
          <FaGitAlt className="text-red-500 text-4xl mb-2" />
          <span className="text-lg text-white ">Git</span>
        </div>
      </div>
    </section>
  );
}
