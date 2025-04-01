export interface FAQ {
  id: string;
  pregunta: string;
  respuesta: string;
  categoria: 'general' | 'instalacion' | 'uso' | 'problemas' | 'avanzado';
}

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    pregunta: '¿Qué es Volatility3?',
    respuesta: 'Volatility3 es una herramienta de código abierto para análisis forense de memoria. Permite extraer información digital de imágenes de memoria RAM de sistemas operativos Windows, Linux y MacOS.',
    categoria: 'general'
  },
  {
    id: 'faq-2',
    pregunta: '¿Cuáles son los requisitos para usar Volatility3?',
    respuesta: 'Los requisitos principales son: Python 3.8 o superior, pip (gestor de paquetes de Python) y un sistema operativo compatible (Windows, Linux o MacOS).',
    categoria: 'instalacion'
  },
  {
    id: 'faq-3',
    pregunta: '¿Cómo instalo Volatility3?',
    respuesta: 'La instalación se realiza mediante pip: pip install volatility3. En Windows, también puedes usar el instalador de Windows. En Linux y MacOS, asegúrate de tener Python y pip instalados primero.',
    categoria: 'instalacion'
  },
  {
    id: 'faq-4',
    pregunta: '¿Cómo obtengo una imagen de memoria?',
    respuesta: 'Para obtener una imagen de memoria, necesitas usar herramientas específicas como WinPmem, LiME (Linux Memory Extractor) o MacMemoryReader. Estas herramientas deben ejecutarse con privilegios de administrador.',
    categoria: 'uso'
  },
  {
    id: 'faq-5',
    pregunta: '¿Qué comandos básicos debo conocer?',
    respuesta: 'Los comandos básicos incluyen: info (información del sistema), pslist (lista de procesos), netstat (conexiones de red), y malfind (búsqueda de código malicioso).',
    categoria: 'uso'
  },
  {
    id: 'faq-6',
    pregunta: '¿Cómo analizo un sistema Windows?',
    respuesta: 'Para analizar Windows, usa el comando: vol.py -f memoria.raw windows.info. Asegúrate de especificar el perfil correcto del sistema operativo.',
    categoria: 'uso'
  },
  {
    id: 'faq-7',
    pregunta: '¿Cómo analizo un sistema Linux?',
    respuesta: 'Para analizar Linux, usa: vol.py -f memoria.raw linux.info. Necesitarás el perfil del kernel correspondiente.',
    categoria: 'uso'
  },
  {
    id: 'faq-8',
    pregunta: '¿Cómo analizo un sistema MacOS?',
    respuesta: 'Para analizar MacOS, usa: vol.py -f memoria.raw mac.info. Asegúrate de tener el perfil correcto del sistema operativo.',
    categoria: 'uso'
  },
  {
    id: 'faq-9',
    pregunta: '¿Qué hacer si recibo errores de perfil?',
    respuesta: 'Si recibes errores de perfil, verifica que estás usando el perfil correcto para tu sistema operativo. Puedes listar los perfiles disponibles con: vol.py --info.',
    categoria: 'problemas'
  },
  {
    id: 'faq-10',
    pregunta: '¿Cómo detecto malware en memoria?',
    respuesta: 'Para detectar malware, usa comandos como: malfind, pslist, pstree, y netstat. Analiza procesos sospechosos, conexiones de red inusuales y código malicioso.',
    categoria: 'avanzado'
  },
  {
    id: 'faq-11',
    pregunta: '¿Cómo extraer archivos de memoria?',
    respuesta: 'Usa el comando dumpfiles para extraer archivos de memoria. Por ejemplo: vol.py -f memoria.raw windows.dumpfiles --pid 1234.',
    categoria: 'avanzado'
  },
  {
    id: 'faq-12',
    pregunta: '¿Cómo analizar el registro de Windows?',
    respuesta: 'Para analizar el registro, usa comandos como: hivelist, printkey, y registry. Estos te permiten examinar las claves del registro en memoria.',
    categoria: 'avanzado'
  },
  {
    id: 'faq-13',
    pregunta: '¿Qué hacer si la imagen de memoria está corrupta?',
    respuesta: 'Si la imagen está corrupta, intenta: 1) Verificar la integridad del archivo, 2) Usar el flag --profile para especificar el perfil manualmente, 3) Asegurarte de que la imagen se capturó correctamente.',
    categoria: 'problemas'
  },
  {
    id: 'faq-14',
    pregunta: '¿Cómo analizar procesos ocultos?',
    respuesta: 'Para analizar procesos ocultos, usa: pstree, psxview, y malfind. Compara diferentes vistas de procesos para identificar discrepancias.',
    categoria: 'avanzado'
  },
  {
    id: 'faq-15',
    pregunta: '¿Cómo extraer credenciales de memoria?',
    respuesta: 'Para extraer credenciales, usa comandos como: mimikatz, hashdump, y lsadump. Ten en cuenta que esto requiere privilegios de administrador.',
    categoria: 'avanzado'
  },
  {
    id: 'faq-16',
    pregunta: '¿Qué hacer si no encuentro el perfil correcto?',
    respuesta: 'Si no encuentras el perfil, puedes: 1) Actualizar Volatility3 a la última versión, 2) Generar el perfil manualmente, 3) Usar un perfil similar y ajustar los parámetros.',
    categoria: 'problemas'
  },
  {
    id: 'faq-17',
    pregunta: '¿Cómo analizar conexiones de red?',
    respuesta: 'Para analizar conexiones de red, usa: netstat, netscan, y sockets. Estos comandos te mostrarán conexiones activas y sockets abiertos.',
    categoria: 'uso'
  },
  {
    id: 'faq-18',
    pregunta: '¿Cómo detectar rootkits?',
    respuesta: 'Para detectar rootkits, usa: psxview, pstree, y malfind. Busca discrepancias entre diferentes vistas de procesos y código malicioso.',
    categoria: 'avanzado'
  },
  {
    id: 'faq-19',
    pregunta: '¿Qué hacer si el análisis es muy lento?',
    respuesta: 'Para mejorar el rendimiento: 1) Usa filtros específicos, 2) Limita el alcance del análisis, 3) Asegúrate de tener suficiente memoria RAM disponible.',
    categoria: 'problemas'
  },
  {
    id: 'faq-20',
    pregunta: '¿Cómo exportar resultados del análisis?',
    respuesta: 'Puedes exportar resultados usando: 1) Redirección a archivo (> output.txt), 2) El flag --output-file, 3) El flag --output=json para formato JSON.',
    categoria: 'uso'
  }
]; 