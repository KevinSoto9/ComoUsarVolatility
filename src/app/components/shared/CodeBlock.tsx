export function CodeBlock({ code }: { code: string }) {
  return (
    <div className="mt-4 mb-4">
      <pre className="bg-black rounded-lg p-3 font-mono text-sm overflow-x-auto border border-gray-20">
        <code>{code}</code>
      </pre>
    </div>
  );
} 