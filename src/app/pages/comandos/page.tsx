"use client";
import { useState } from "react";
import Navbar from "@/app/components/navbar/navbar";
import { CodeBlock } from "@/app/components/shared/CodeBlock";
import { comandos} from "@/app/data/comandos";

export default function Comandos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredComandos = comandos.filter(comando => {
    const matchesSearch = 
      comando.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comando.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comando.comando.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || comando.categoria === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-col gap-4 sm:gap-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
              Comandos de Volatility3
            </h1>
            <div className="w-full overflow-x-auto">
              <Navbar />
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Filtros */}
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Buscar comandos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                >
                  <option value="all">Todas las categorías</option>
                  <option value="general">Generales</option>
                  <option value="linux">Linux</option>
                  <option value="mac">MacOS</option>
                  <option value="windows">Windows</option>
                </select>
              </div>
            </div>

            {/* Resultados filtrados */}
            <div className="space-y-6">
              {filteredComandos.map((comando, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold">{comando.titulo}</h2>
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-900 text-blue-200 mt-2 sm:mt-0">
                      {comando.categoria.charAt(0).toUpperCase() + comando.categoria.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">
                    {comando.descripcion}
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <CodeBlock code={comando.comando} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Explicación:</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                      {comando.explicacion.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 