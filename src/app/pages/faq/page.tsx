'use client';

import { useState, ChangeEvent } from 'react';
import Navbar from '@/app/components/navbar/navbar';
import { faqs } from '@/app/data/faq';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoria, setSelectedCategoria] = useState<'todos' | 'general' | 'instalacion' | 'uso' | 'problemas' | 'avanzado'>('todos');

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.pregunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.respuesta.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategoria = selectedCategoria === 'todos' || faq.categoria === selectedCategoria;
    return matchesSearch && matchesCategoria;
  });

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-col gap-4 sm:gap-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
              Preguntas Frecuentes
            </h1>
            <div className="w-full overflow-x-auto">
              <Navbar />
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-6 sm:gap-8">
          <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
              Filtros de Búsqueda
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Buscar preguntas..."
                className="flex-1 px-4 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white text-sm sm:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="px-4 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white text-sm sm:text-base"
                value={selectedCategoria}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedCategoria(e.target.value as 'todos' | 'general' | 'instalacion' | 'uso' | 'problemas' | 'avanzado')}
              >
                <option value="todos">Todas las categorías</option>
                <option value="general">General</option>
                <option value="instalacion">Instalación</option>
                <option value="uso">Uso Básico</option>
                <option value="problemas">Resolución de Problemas</option>
                <option value="avanzado">Uso Avanzado</option>
              </select>
            </div>
          </section>

          <div className="space-y-6">
            {filteredFaqs.map((faq) => (
              <section key={faq.id} className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    {faq.pregunta}
                  </h2>
                  <span className="px-2 py-1 rounded text-sm bg-blue-900 text-blue-200">
                    {faq.categoria.charAt(0).toUpperCase() + faq.categoria.slice(1)}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-300">
                  {faq.respuesta}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 