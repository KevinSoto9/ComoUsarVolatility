import { CodeBlock } from "../shared/CodeBlock";

export function WindowsInstalacion() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
        Instalación en Windows
      </h2>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Requisitos Previos
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Antes de instalar Volatility 3 en Windows, asegúrate de tener:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>
            <strong>Sistema Operativo:</strong> Windows 10 o superior
          </li>
          <li>
            <strong>Python:</strong> Python 3.8 o superior
          </li>
          <li>
            <strong>Línea de Comandos:</strong> Acceso a CMD o PowerShell
          </li>
        </ul>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          1. Instalación de Python 3
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Volatility 3 está basado en Python, por lo que necesitarás tener Python 3.8 o superior instalado en tu sistema. Aquí te explicamos cómo hacerlo en Windows:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
          <li>
            Abre tu navegador y ve a la página oficial de Python:{" "}
            <a
              href="https://www.python.org/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              https://www.python.org/downloads/
            </a>
          </li>
          <li>
            Haz clic en el botón &quot;Download Python&quot; para descargar la última versión de Python 3.
          </li>
          <li>
            Abre el instalador descargado y asegúrate de marcar la casilla &quot;Add Python to PATH&quot; antes de hacer clic en &quot;Install Now&quot;.
          </li>
        </ol>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          2. Verificación de la Instalación de Python
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Una vez instalado Python, es importante verificar que se haya instalado correctamente. Para hacerlo:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
          <li>
            Abre el CMD o PowerShell y escribe el siguiente comando para verificar la versión de Python instalada:
            <div className="overflow-x-auto">
              <CodeBlock code="python --version" />
            </div>
          </li>
          <li>
            Si la instalación fue exitosa, deberías ver algo como:
            <div className="overflow-x-auto">
              <CodeBlock code="Python 3.x.x" />
            </div>
            (donde &quot;3.x.x&quot; es la versión que instalaste).
          </li>
          <li>
            Si recibes un mensaje de error, asegúrate de que Python esté instalado correctamente y vuelve a intentarlo.
          </li>
        </ol>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          3. Instalación de Volatility 3
        </h3>
        <p className="text-sm sm:text-base mb-4">
          Una vez que tengas Python instalado, sigue estos pasos:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
          <li>
            Abre el CMD o PowerShell y asegúrate de tener privilegios de administrador.
          </li>
          <li>
            Ejecuta el siguiente comando para instalar Volatility 3:
            <div className="overflow-x-auto">
              <CodeBlock code="pip install volatility3" />
            </div>
          </li>
          <li>
            Verifica la instalación ejecutando:
            <div className="overflow-x-auto">
              <CodeBlock code="vol.py -h" />
            </div>
          </li>
        </ol>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Ejemplo de Uso</h3>
        <p className="text-sm sm:text-base mb-4">Para analizar una imagen de memoria:</p>
        <div className="overflow-x-auto">
          <CodeBlock code="vol.py -f memoria.raw windows.info" />
        </div>
      </section>

      <section className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Resolución de Problemas</h3>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>
            <strong>Error &quot;vol.py no se reconoce como un comando&quot;:</strong>{" "}
            Verifica que Python esté en el PATH del sistema.
          </li>
          <li>
            <strong>Errores de permisos:</strong> Ejecuta el CMD o PowerShell con privilegios de administrador.
          </li>
        </ul>
      </section>
    </div>
  );
} 