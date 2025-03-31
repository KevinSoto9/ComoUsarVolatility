import { CodeBlock } from "../shared/CodeBlock";

export function WindowsInstalacion() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 prose prose-slate max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold">
        Instalación en Windows
      </h2>

      <section className="space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold">
          Requisitos Previos
        </h3>
        <p className="text-sm sm:text-base">
          Antes de instalar Volatility 3 en Windows, asegúrate de cumplir
          con los siguientes requisitos:
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

      <h3 className="font-semibold text-xl mt-12">
        1. Instalación de Python 3
      </h3>
      <p>
        Volatility 3 está basado en Python, por lo que necesitarás tener
        Python 3.8 o superior instalado en tu sistema. Aquí te explicamos
        cómo hacerlo:
      </p>
      <ol className="list-decimal list-inside space-y-2">
        <li>
          Visita la página oficial de Python:{" "}
          <a
            href="https://www.python.org/downloads/"
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            python.org/downloads
          </a>
          .
        </li>
        <li>
          Descarga la versión más reciente de Python 3 para Windows.
          Asegúrate de descargar la versión de 64 bits si tu sistema es de
          64 bits.
        </li>
        <li>
          Ejecuta el instalador descargado. Durante la instalación,
          asegúrate de marcar la opción{" "}
          <strong>&quot;Add Python to PATH&quot;</strong> antes de continuar. Esta
          opción es crucial para que puedas ejecutar Python desde cualquier
          ventana de comandos.
        </li>
        <li>
          Finaliza la instalación siguiendo los pasos que se indican en el
          instalador. Si es necesario, reinicia tu computadora después de la
          instalación.
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
          Abre la aplicación **CMD** (símbolo del sistema) o **PowerShell**.
          Para abrir PowerShell, haz clic derecho sobre el botón de inicio
          de Windows y selecciona &quot;Windows PowerShell&quot; o &quot;PowerShell&quot;
          dependiendo de la versión.
        </li>
        <li>
          En la ventana de comandos, escribe el siguiente comando y presiona
          Enter:
          <CodeBlock code="python --version" />
          Si la instalación fue exitosa, deberías ver algo como:
          <CodeBlock code="Python 3.x.x" />
          (donde &quot;3.x.x&quot; es la versión que instalaste).
        </li>
        <li>
          Si recibes un mensaje de error, asegúrate de haber seleccionado la
          opción &quot;Add Python to PATH&quot; durante la instalación y reinicia el
          sistema si es necesario.
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
          <li>Abre PowerShell como administrador</li>
          <li>
            Ejecuta el siguiente comando:
            <CodeBlock code="pip install volatility3" />
          </li>
          <li>
            Verifica la instalación con:
            <CodeBlock code="vol.py -h" />
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Ejemplo de Uso</h3>
        <p className="">Para analizar una imagen de memoria:</p>
        <CodeBlock code="vol.py -f memoria.raw windows.info" />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Resolución de Problemas</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Error &quot;vol.py no se reconoce como un comando&quot;:</strong>{" "}
            Verifica que Python esté en el PATH del sistema
          </li>
          <li>
            <strong>Errores de permisos:</strong> Ejecuta PowerShell como
            administrador
          </li>
        </ul>
      </section>
    </div>
  );
} 