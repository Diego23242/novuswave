import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const aboutRefs = useRef([]);

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

    aboutRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      aboutRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">Sobre Nosotros</h2>
          <div className="w-20 h-1 bg-[#1FB8D2] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Misión',
              content:
                'Desarrollar soluciones tecnológicas innovadoras que impulsen el crecimiento digital de nuestros clientes, superando sus expectativas con calidad y creatividad.',
            },
            {
              title: 'Visión',
              content:
                'Ser reconocidos como líderes en desarrollo tecnológico, siendo referentes de innovación y excelencia en el mercado digital.',
            },
            {
              title: 'Valores',
              content: (
                <ul className="text-gray-700 space-y-2">
                  <li>• Innovación constante</li>
                  <li>• Transparencia</li>
                  <li>• Excelencia técnica</li>
                  <li>• Orientación al cliente</li>
                  <li>• Trabajo en equipo</li>
                </ul>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (aboutRefs.current[index] = el)}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-[#1FB8D2] text-4xl mb-4">{item.title}</div>
              {typeof item.content === 'string' ? (
                <p className="text-gray-700">{item.content}</p>
              ) : (
                item.content
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
