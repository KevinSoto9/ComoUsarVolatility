"use client";
import Navbar from "@/app/components/navbar/navbar";
import { EjemploCard } from "@/app/components/ejemplos/EjemploCard";
import { ejemplos } from "@/app/data/ejemplos";

export default function Ejemplos() {
  return (
    <div className="grid grid-rows-[auto_1fr] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
       <header className="mb-8 sm:mb-12">
          <div className="flex flex-col gap-4 sm:gap-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
              Ejemplos Prácticos
            </h1>
            <div className="w-full overflow-x-auto">
              <Navbar />
            </div>
          </div>
        </header>

      <main className="w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-6">
        <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8">
            Aquí encontrarás ejemplos prácticos de cómo usar Volatility 3 para analizar imágenes de memoria.
            Cada ejemplo incluye el comando necesario, una explicación detallada y el resultado esperado.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
            {ejemplos.map((ejemplo, index) => (
              <EjemploCard
                key={index}
                titulo={ejemplo.titulo}
                descripcion={ejemplo.descripcion}
                comando={ejemplo.comando}
                explicacion={ejemplo.explicacion}
                resultado={ejemplo.resultado}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 