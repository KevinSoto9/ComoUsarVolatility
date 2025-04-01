import { CodeBlock } from "../shared/CodeBlock";

export function MacOSInstalacion() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
        Instalación en MacOS
      </h2>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Requisitos Previos
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Antes de instalar Volatility 3 en MacOS, asegúrate de tener:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>
            <strong>Sistema Operativo:</strong> MacOS 10.15 o superior
          </li>
          <li>
            <strong>Python:</strong> Python 3.8 o superior
          </li>
          <li>
            <strong>Homebrew:</strong> Gestor de paquetes para MacOS
          </li>
        </ul>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          1. Instalación de Homebrew
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Si no tienes Homebrew instalado, necesitarás instalarlo primero. Abre la Terminal y ejecuta:
        </p>
        <div className="overflow-x-auto">
          <CodeBlock code='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"' />
        </div>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          2. Verificación de Homebrew
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Verifica que Homebrew se haya instalado correctamente:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
          <li>
            Verifica la instalación de Homebrew:
            <div className="overflow-x-auto">
              <CodeBlock code="brew --version" />
            </div>
          </li>
          <li>
            Actualiza Homebrew a la última versión:
            <div className="overflow-x-auto">
              <CodeBlock code="brew update" />
            </div>
          </li>
        </ol>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          3. Instalación de Python
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Una vez que tengas Homebrew instalado, sigue estos pasos:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
          <li>
            Instala Python usando Homebrew:
            <div className="overflow-x-auto">
              <CodeBlock code="brew install python" />
            </div>
          </li>
          <li>
            Verifica la instalación de Python:
            <div className="overflow-x-auto">
              <CodeBlock code="python3 --version" />
            </div>
          </li>
        </ol>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          4. Instalación de Volatility 3
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Ahora puedes instalar Volatility 3:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
          <li>
            Abre la Terminal y ejecuta:
            <div className="overflow-x-auto">
              <CodeBlock code="pip3 install volatility3" />
            </div>
          </li>
          <li>
            Verifica la instalación:
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
          <CodeBlock code="vol.py -f memoria.raw mac.info" />
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