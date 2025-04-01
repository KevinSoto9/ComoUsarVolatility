'use client';

import { useState, ChangeEvent } from 'react';
import Navbar from '@/app/components/navbar/navbar';
import { casosEstudio } from '@/app/data/casos-estudio';
import { CodeBlock } from '@/app/components/shared/CodeBlock';

export default function CasosEstudio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNivel, setSelectedNivel] = useState<'todos' | 'basico' | 'intermedio' | 'avanzado'>('todos');
  const [selectedOS, setSelectedOS] = useState<'todos' | 'windows' | 'linux' | 'mac'>('todos');

  const filteredCasos = casosEstudio.filter(caso => {
    const matchesSearch = caso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caso.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNivel = selectedNivel === 'todos' || caso.nivel === selectedNivel;
    const matchesOS = selectedOS === 'todos' || caso.sistemaOperativo === selectedOS;
    return matchesSearch && matchesNivel && matchesOS;
  });

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-col gap-4 sm:gap-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
              Casos de Estudio
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
                placeholder="Buscar casos..."
                className="flex-1 px-4 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white text-sm sm:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="px-4 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white text-sm sm:text-base"
                value={selectedNivel}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedNivel(e.target.value as 'todos' | 'basico' | 'intermedio' | 'avanzado')}
              >
                <option value="todos">Todos los niveles</option>
                <option value="basico">Básico</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
              </select>
              <select
                className="px-4 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white text-sm sm:text-base"
                value={selectedOS}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedOS(e.target.value as 'todos' | 'windows' | 'linux' | 'mac')}
              >
                <option value="todos">Todos los sistemas</option>
                <option value="windows">Windows</option>
                <option value="linux">Linux</option>
                <option value="mac">MacOS</option>
              </select>
            </div>
          </section>

          <div className="space-y-6">
            {filteredCasos.map((caso) => (
              <section key={caso.id} className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    {caso.titulo}
                  </h2>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded text-sm ${
                      caso.nivel === 'basico' ? 'bg-green-900 text-green-200' :
                      caso.nivel === 'intermedio' ? 'bg-yellow-900 text-yellow-200' :
                      'bg-red-900 text-red-200'
                    }`}>
                      {caso.nivel.charAt(0).toUpperCase() + caso.nivel.slice(1)}
                    </span>
                    <span className="px-2 py-1 rounded text-sm bg-blue-900 text-blue-200">
                      {caso.sistemaOperativo.toUpperCase()}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {caso.descripcion}
                </p>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Objetivo
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {caso.objetivo}
                  </p>
                </div>

                <div className="space-y-4">
                  {caso.pasos.map((paso, index) => (
                    <div key={index} className="border-t pt-4 border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {index + 1}. {paso.titulo}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-2">
                        {paso.descripcion}
                      </p>
                      <div className="space-y-2">
                        {paso.comandos.map((comando, cmdIndex) => (
                          <div key={cmdIndex} className="overflow-x-auto">
                            <CodeBlock code={comando} />
                          </div>
                        ))}
                      </div>
                      <ul className="list-disc list-inside mt-2 text-sm sm:text-base text-gray-300">
                        {paso.explicacion.map((exp, expIndex) => (
                          <li key={expIndex}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t pt-4 border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Conclusiones
                  </h3>
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-300">
                    {caso.conclusiones.map((conclusion, index) => (
                      <li key={index}>{conclusion}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t pt-4 border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Herramientas Utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {caso.herramientas.map((herramienta, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {herramienta}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 