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
    <div className="grid grid-rows-[auto_1fr] min-h-screen p-4 sm:p-8 lg:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
        <div className="flex flex-col gap-4 sm:gap-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Instalación de Volatility3
          </h1>
          <div className="w-full overflow-x-auto">
            <Navbar />
          </div>
        </div>
      </header>

      <main className="w-full max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8">
        <label className="text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left">
          Elige el sistema operativo que deseas instalar Volatility3
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

        <div className="w-full mt-4 sm:mt-8">
          <CambiarSistemaOperativo sistemaOperativo={sistemaSeleccionado} />
        </div>
      </main>
    </div>
  );
}
