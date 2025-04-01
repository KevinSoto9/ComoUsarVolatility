"use client";
import { useState } from "react";
import Navbar from "@/app/components/navbar/navbar";
import { WindowsInstalacion } from "@/app/components/instalacion/WindowsInstalacion";
import { LinuxInstalacion } from "@/app/components/instalacion/LinuxInstalacion";
import { MacOSInstalacion } from "@/app/components/instalacion/MacOSInstalacion";

const SistemaButton = ({
  nombre,
  selected,
  onClick,
}: {
  nombre: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    className={`px-4 py-2 text-sm sm:text-base transition-all border-b-2 ${
      selected ? "border-blue-500" : "border-transparent hover:border-gray-300"
    }`}
    onClick={onClick}
  >
    {nombre}
  </button>
);

function CambiarSistemaOperativo({
  sistemaOperativo,
}: {
  sistemaOperativo: string;
}) {
  switch (sistemaOperativo) {
    case "Windows":
      return <WindowsInstalacion />;
    case "Linux":
      return <LinuxInstalacion />;
    case "MacOS":
      return <MacOSInstalacion />;
    default:
      return null;
  }
}

export default function Instalacion() {
  const [sistemaSeleccionado, setSistemaSeleccionado] = useState("Windows");
  const sistemas = ["Windows", "Linux", "MacOS"];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-col gap-4 sm:gap-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
              Instalación de Volatility3
            </h1>
            <div className="w-full overflow-x-auto">
              <Navbar />
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 sm:gap-8">
            <label className="text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left">
              Elige el sistema operativo en el que deseas instalar Volatility3
            </label>

            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
              {sistemas.map((sistema) => (
                <SistemaButton
                  key={sistema}
                  nombre={sistema}
                  selected={sistemaSeleccionado === sistema}
                  onClick={() => setSistemaSeleccionado(sistema)}
                />
              ))}
            </div>

            <div className="mt-4 sm:mt-8">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 sm:p-6 lg:p-8">
                  <CambiarSistemaOperativo sistemaOperativo={sistemaSeleccionado} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
