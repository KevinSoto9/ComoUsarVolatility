'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="rounded-lg p-4">
      <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
        {pathname !== '/' && (
          <li>
            <Link
              href="/"
              className="hover:text-gray-400 transition-colors font-medium"
            >
              Inicio
            </Link>
          </li>
        )}
        <li>
          <Link
            href="/instalacion"
            className="hover:text-gray-400 transition-colors font-medium"
          >
            Instalación
          </Link>
        </li>
        <li>
          <Link
            href="/ejemplos"
            className="hover:text-gray-400 transition-colors font-medium"
          >
            Ejemplos Prácticos
          </Link>
        </li>
        <li>
          <Link
            href="/comandos"
            className="hover:text-gray-400 transition-colors font-medium"
          >
            Comandos
          </Link>
        </li>
        <li>
          <Link
            href="/casos-estudio"
            className="hover:text-gray-400 transition-colors font-medium"
          >
            Casos de Estudio
          </Link>
        </li>
        <li>
          <Link
            href="/faq"
            className="hover:text-gray-400 transition-colors font-medium"
          >
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
