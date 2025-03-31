import { CodeBlock } from "../shared/CodeBlock";

export function MacOSInstalacion() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 prose prose-slate max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold">
        Instalación en MacOS
      </h2>

      <section className="space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold">
          Requisitos Previos
        </h3>
        <p className="text-sm sm:text-base">
          Antes de instalar Volatility 3 en macOS, asegúrate de cumplir con
          los siguientes requisitos:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>
            <strong>Sistema Operativo:</strong> macOS 10.15 (Catalina) o
            superior
          </li>
          <li>
            <strong>Python:</strong> Python 3.8 o superior
          </li>
          <li>
            <strong>Línea de Comandos:</strong> Acceso a la terminal
          </li>
        </ul>
      </section>

      <h3 className="font-semibold text-xl mt-12">
        1. Instalación de Python 3
      </h3>
      <p>
        Volatility 3 está basado en Python, por lo que necesitarás tener
        Python 3.8 o superior instalado en tu sistema. Aquí te explicamos
        cómo hacerlo en macOS:
      </p>
      <ol className="list-decimal list-inside space-y-2">
        <li>
          Abre la terminal y verifica si tienes Python 3 instalado
          ejecutando:
          <CodeBlock code="python3 --version" />
        </li>
        <li>
          Si no tienes Python 3 instalado, puedes instalarlo utilizando
          Homebrew. Si no tienes Homebrew instalado, primero instala
          Homebrew ejecutando:
          <CodeBlock code="/bin/bash -c '$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)'" />
        </li>
        <li>
          Una vez que Homebrew esté instalado, puedes instalar Python 3 con
          el siguiente comando:
          <CodeBlock code="brew install python" />
        </li>
      </ol>

      <h3 className="font-semibold text-xl mt-12">
        2. Verificación de la Instalación de Python
      </h3>
      <p>
        Una vez instalado Python, es importante verificar que se haya
        instalado correctamente. Para hacerlo:
      </p>
      <ol className="list-decimal list-inside space-y-2">
        <li>
          Abre la terminal y escribe el siguiente comando para verificar la
          versión de Python instalada:
          <CodeBlock code="python3 --version" />
        </li>
        <li>
          Si la instalación fue exitosa, deberías ver algo como:
          <CodeBlock code="Python 3.x.x" />
          (donde &quot;3.x.x&quot; es la versión que instalaste).
        </li>
        <li>
          Si recibes un mensaje de error, asegúrate de que Python esté
          instalado correctamente y vuelve a intentarlo.
        </li>
      </ol>

      <section className="space-y-3 sm:space-y-4">
        <h3 className="font-semibold text-xl mt-12">
          3. Instalación de Volatility 3
        </h3>
        <p className="text-sm sm:text-base">
          Una vez que tengas Python instalado, sigue estos pasos:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
          <li>Abre una terminal.</li>
          <li>
            Ejecuta el siguiente comando para instalar Volatility 3:
            <CodeBlock code="pip3 install volatility3" />
          </li>
          <li>
            Verifica la instalación ejecutando:
            <CodeBlock code="vol.py -h" />
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Ejemplo de Uso</h3>
        <p>Para analizar una imagen de memoria:</p>
        <CodeBlock code="vol.py -f memoria.raw mac.info" />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Resolución de Problemas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Error &quot;vol.py no se reconoce como un comando&quot;:</strong>{" "}
            Verifica que Python esté en el PATH del sistema.
          </li>
          <li>
            <strong>Errores de permisos:</strong> Ejecuta la terminal con
            privilegios de superusuario (usando `sudo`) si es necesario.
          </li>
        </ul>
      </section>
    </div>
  );
} 