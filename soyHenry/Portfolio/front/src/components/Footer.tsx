import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 flex justify-between items-center">
      <div className="flex items-center">
        <AiOutlineMail className="mr-2 text-2xl" />
        <a href="mailto:gimenapascuale@gmail.com" className="hover:underline">gimenapascuale@gmail.com</a>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/gimena-pascuale" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-500" />
        </a>
        <a href="https://github.com/GimenaP92" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400" /> 
        </a>
      </div>
      <div className="flex items-center">
        <span className="text-sm">© By Gimena Pascuale</span>
      </div>
    </footer>
  );
}
