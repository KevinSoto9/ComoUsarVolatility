'use client';

import Link from 'next/link';
import Navbar from '@/app/components/navbar/navbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-col gap-4 sm:gap-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
              Como Usar Volatility3
            </h1>
            <div className="w-full overflow-x-auto">
              <Navbar />
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Sección de Introducción */}
          <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
              ¿Qué es Volatility3?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Volatility3 es una herramienta de código abierto para análisis forense de memoria. Permite extraer información digital de imágenes de memoria RAM de sistemas operativos Windows, Linux y MacOS. Esta herramienta es esencial para investigadores forenses, analistas de seguridad y profesionales de TI que necesitan analizar sistemas comprometidos o investigar incidentes de seguridad.
            </p>
          </section>

          {/* Sección de Características */}
          <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
              Características Principales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Análisis Multiplataforma</h3>
                <p className="text-sm text-gray-300">
                  Soporte para Windows, Linux y MacOS con análisis específico para cada sistema operativo.
                </p>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Detección de Malware</h3>
                <p className="text-sm text-gray-300">
                  Capacidad para identificar y analizar malware, rootkits y otros procesos maliciosos.
                </p>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Análisis de Red</h3>
                <p className="text-sm text-gray-300">
                  Visualización de conexiones de red, sockets y actividad de red sospechosa.
                </p>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Extracción de Archivos</h3>
                <p className="text-sm text-gray-300">
                  Capacidad para extraer archivos y datos de la memoria del sistema.
                </p>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Análisis de Procesos</h3>
                <p className="text-sm text-gray-300">
                  Visualización detallada de procesos, hilos y sus relaciones.
                </p>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Registro y Credenciales</h3>
                <p className="text-sm text-gray-300">
                  Análisis del registro de Windows y extracción de credenciales.
                </p>
              </div>
            </div>
          </section>

          {/* Sección de Guías Rápidas */}
          <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
              Guías Rápidas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/pages/instalacion" className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <h3 className="font-semibold mb-2 text-white">Instalación</h3>
                <p className="text-sm text-gray-300">
                  Aprende a instalar Volatility3 en tu sistema.
                </p>
              </Link>
              <Link href="/pages/comandos" className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <h3 className="font-semibold mb-2 text-white">Comandos</h3>
                <p className="text-sm text-gray-300">
                  Explora los comandos más útiles y sus funciones.
                </p>
              </Link>
              <Link href="/pages/ejemplos" className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <h3 className="font-semibold mb-2 text-white">Ejemplos Prácticos</h3>
                <p className="text-sm text-gray-300">
                  Casos de uso prácticos y ejemplos de análisis.
                </p>
              </Link>
              <Link href="/pages/casos-estudio" className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <h3 className="font-semibold mb-2 text-white">Casos de Estudio</h3>
                <p className="text-sm text-gray-300">
                  Análisis de casos reales y escenarios.
                </p>
              </Link>
              <Link href="/pages/faq" className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <h3 className="font-semibold mb-2 text-white">FAQ</h3>
                <p className="text-sm text-gray-300">
                  Preguntas frecuentes y soluciones comunes.
                </p>
              </Link>
            </div>
          </section>

          {/* Sección de Requisitos */}
          <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
              Requisitos del Sistema
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Sistema Operativo</h3>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  <li>Windows 7/8/10/11</li>
                  <li>Linux (distribuciones principales)</li>
                  <li>MacOS 10.15 o superior</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Software</h3>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  <li>Python 3.8 o superior</li>
                  <li>pip (gestor de paquetes Python)</li>
                  <li>Git (opcional, para desarrollo)</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Hardware</h3>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  <li>4GB RAM mínimo</li>
                  <li>Espacio en disco: 1GB mínimo</li>
                  <li>Procesador moderno</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección de Recursos Adicionales */}
          <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
              Recursos Adicionales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Documentación Oficial</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Accede a la documentación completa y actualizada de Volatility3.
                </p>
                <a href="https://volatility3.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                  Visitar documentación →
                </a>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2 text-white">GitHub</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Explora el código fuente y contribuye al proyecto.
                </p>
                <a href="https://github.com/volatilityfoundation/volatility3" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                  Visitar GitHub →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
