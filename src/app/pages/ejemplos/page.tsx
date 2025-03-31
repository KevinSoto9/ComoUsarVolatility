"use client";
import Navbar from "@/app/components/navbar/navbar";
import { EjemploCard } from "@/app/components/ejemplos/EjemploCard";
import { ejemplos } from "@/app/data/ejemplos";

export default function Ejemplos() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen p-4 sm:p-8 lg:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
        <div className="flex flex-col gap-4 sm:gap-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Ejemplos Prácticos
          </h1>
          <div className="w-full overflow-x-auto">
            <Navbar />
          </div>
        </div>
      </header>

      <main className="w-full max-w-3xl mx-auto">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg mb-8">
            Aquí encontrarás ejemplos prácticos de cómo usar Volatility 3 para analizar imágenes de memoria.
            Cada ejemplo incluye el comando necesario, una explicación detallada y el resultado esperado.
          </p>

          <div className="space-y-8">
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