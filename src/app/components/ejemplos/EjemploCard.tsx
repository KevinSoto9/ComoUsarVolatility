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
    <div className="p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">{titulo}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{descripcion}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Comando:</h4>
        <CodeBlock code={comando} />
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Explicación:</h4>
        <ul className="list-disc list-inside space-y-2">
          {explicacion.map((item, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {resultado && (
        <div>
          <h4 className="font-semibold mb-2">Resultado esperado:</h4>
          <CodeBlock code={resultado} />
        </div>
      )}
    </div>
  );
} 