import React, { useEffect, useRef } from 'react';

const PortfolioSection = () => {
  const portfolioRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    portfolioRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      portfolioRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">Portafolio</h2>
          <div className="w-20 h-1 bg-[#1FB8D2] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Próximamente mostraremos algunos de nuestros proyectos más destacados. Estamos trabajando en cosas increíbles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              ref={(el) => (portfolioRefs.current[index] = el)}
              className="bg-gray-100 h-64 rounded-lg flex items-center justify-center reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="text-gray-400">Proyecto en desarrollo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
