import { CodeBlock } from "../shared/CodeBlock";

interface EjemploCardProps {
  titulo: string;
  descripcion: string;
  comando: string;
  explicacion: string[];
  resultado?: string;
}

export function EjemploCard({
  titulo,
  descripcion,
  comando,
  explicacion,
  resultado,
}: EjemploCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
        {titulo}
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
        {descripcion}
      </p>

      <div className="mb-4 sm:mb-6">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">
          Comando:
        </h3>
        <CodeBlock code={comando} />
      </div>

      <div className="mb-4 sm:mb-6">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">
          Explicación:
        </h3>
        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-300 space-y-1 sm:space-y-2">
          {explicacion.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {resultado && (
        <div>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">
            Resultado Esperado:
          </h3>
          <CodeBlock code={resultado} />
        </div>
      )}
    </div>
  );
} 