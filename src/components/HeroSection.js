import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0B1F3A] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1FB8D2]/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1FB8D2] rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1FB8D2] to-white">Innovación Digital</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
          Transformamos ideas en soluciones tecnológicas que impulsan tu negocio hacia el futuro.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-200">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-gradient-to-r from-[#1FB8D2] to-[#0B1F3A] text-white rounded-lg font-medium hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
          >
            Contáctanos
          </a>
          <a 
            href="#services" 
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#0B1F3A] transition-all transform hover:scale-105"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="block">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;


// DONE