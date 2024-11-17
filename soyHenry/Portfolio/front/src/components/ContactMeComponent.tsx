import React from 'react';
import { AiOutlineMail, AiOutlineClose } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface ContactMeComponentProps {
  onClose: () => void;
}

export default function ContactMeComponent({ onClose }: ContactMeComponentProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg text-white w-11/12 max-w-md flex flex-col items-center space-y-6">
      
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-white hover:text-red-500 transition"
        >
          <AiOutlineClose className="text-2xl" />
        </button>

      
        <div className="flex items-center space-x-2">
          <AiOutlineMail className="text-2xl" />
          <a href="mailto:gimenapascuale@gmail.com" className="hover:underline">
            gimenapascuale@gmail.com
          </a>
        </div>

  
        <div className="flex space-x-8">
          <a 
            href="https://www.linkedin.com/in/gimena-pascuale" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl sm:text-4xl hover:text-blue-500 transition" />
          </a>
          <a 
            href="https://github.com/GimenaP92" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl sm:text-4xl hover:text-gray-400 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}
