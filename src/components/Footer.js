import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold">NovusWave</span>
            <span className="ml-2 text-[#1FB8D2]">Surfing the Digital Future</span>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} NovusWave. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;