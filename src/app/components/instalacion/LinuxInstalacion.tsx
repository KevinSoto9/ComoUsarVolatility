import { CodeBlock } from "../shared/CodeBlock";

export function LinuxInstalacion() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
        Instalación en Linux
      </h2>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Requisitos Previos
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Antes de instalar Volatility 3 en Linux, asegúrate de tener:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>
            <strong>Sistema Operativo:</strong> Cualquier distribución de Linux moderna
          </li>
          <li>
            <strong>Python:</strong> Python 3.8 o superior
          </li>
          <li>
            <strong>Git:</strong> Para clonar el repositorio
          </li>
        </ul>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          1. Instalación de Dependencias
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Primero, necesitarás instalar las dependencias necesarias. Abre una terminal y ejecuta:
        </p>
        <div className="overflow-x-auto">
          <CodeBlock code="sudo apt-get update && sudo apt-get install -y python3 python3-pip git" />
        </div>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          2. Verificación de la Instalación
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Verifica que las dependencias se hayan instalado correctamente:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
          <li>
            Verifica la versión de Python:
            <div className="overflow-x-auto">
              <CodeBlock code="python3 --version" />
            </div>
          </li>
          <li>
            Verifica la versión de pip:
            <div className="overflow-x-auto">
              <CodeBlock code="pip3 --version" />
            </div>
          </li>
        </ol>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          3. Instalación de Volatility 3
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Una vez que tengas las dependencias instaladas, sigue estos pasos:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
          <li>
            Abre una terminal y asegúrate de tener privilegios de superusuario.
          </li>
          <li>
            Ejecuta el siguiente comando para instalar Volatility 3:
            <div className="overflow-x-auto">
              <CodeBlock code="pip3 install volatility3" />
            </div>
          </li>
          <li>
            Verifica la instalación ejecutando:
            <div className="overflow-x-auto">
              <CodeBlock code="vol.py --help" />
            </div>
          </li>
        </ol>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Ejemplo de Uso</h3>
        <p className="text-sm sm:text-base mb-4">Para analizar una imagen de memoria:</p>
        <div className="overflow-x-auto">
          <CodeBlock code="vol.py -f memoria.raw linux.info" />
        </div>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Resolución de Problemas</h3>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>
            <strong>Error de permisos:</strong> Usa sudo para instalar paquetes del sistema
          </li>
          <li>
            <strong>Error de dependencias:</strong> Asegúrate de tener todas las dependencias instaladas
          </li>
        </ul>
      </section>
    </div>
  );
} 