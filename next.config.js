/** @type {import('next').NextConfig} */
const nextConfig = {
    // Modo estricto de React para desarrollo más seguro
    reactStrictMode: true,
    // Configuración de redirecciones
    async rewrites() {
        return [
            {
                // Ruta que el usuario ve en el navegador
                source: '/:path*',
                // Ruta real donde se encuentra el archivo
                destination: '/pages/:path*',
            },
        ];
    },
};

module.exports = nextConfig; 