import Navbar from "@/app/components/navbar/navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <header className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Guía de Volatility3
        </h1>

        <Navbar />
      </header>
      
      <main className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl">
        <section className="text-lg">
          <h2 className="text-2xl font-bold mb-4">¿Qué es Volatility3?</h2>
          <p className="mb-4">
            Volatility3 es un framework de código abierto para el análisis forense de memoria RAM. 
            Permite a los investigadores examinar la memoria volátil de un sistema operativo para 
            recuperar artefactos digitales.
          </p>
          
          <h3 className="text-xl font-bold mb-2">Características principales:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Análisis de memoria RAM de Windows, Linux y Mac</li>
            <li>Detección de malware y procesos ocultos</li>
            <li>Recuperación de archivos y contraseñas</li>
            <li>Análisis de conexiones de red</li>
          </ul>
        </section>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://volatility3.readthedocs.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentación Oficial
          </a>
        </div>
      </main>
    </div>
  );
}
