import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">Sobre Nosotros</h2>
          <div className="w-20 h-1 bg-[#1FB8D2] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#1FB8D2] text-4xl mb-4">Misión</div>
            <p className="text-gray-700">
              Desarrollar soluciones tecnológicas innovadoras que impulsen el crecimiento digital de nuestros clientes, superando sus expectativas con calidad y creatividad.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#1FB8D2] text-4xl mb-4">Visión</div>
            <p className="text-gray-700">
              Ser reconocidos como líderes en desarrollo tecnológico, siendo referentes de innovación y excelencia en el mercado digital.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#1FB8D2] text-4xl mb-4">Valores</div>
            <ul className="text-gray-700 space-y-2">
              <li>• Innovación constante</li>
              <li>• Transparencia</li>
              <li>• Excelencia técnica</li>
              <li>• Orientación al cliente</li>
              <li>• Trabajo en equipo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;