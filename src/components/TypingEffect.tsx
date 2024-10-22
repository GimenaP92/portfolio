import React from 'react';

const TypingEffect: React.FC = () => {
  return (
    <div className="relative inline-block text-white text-2xl">
      <span className="animate-typing overflow-hidden whitespace-nowrap">
        {'Full Stack Web Developer'}
      </span>
      <span className="border-r-2 border-white inline-block animate-blink ml-1" />
      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 25ch; /* Longitud del texto, ajusta según el texto completo */
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        .animate-typing {
          animation: typing 2s steps(25) forwards; /* Ajusta aquí si cambias el texto */
          display: inline-block;
        }

        .animate-blink {
          animation: blink 0.6s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default TypingEffect;
