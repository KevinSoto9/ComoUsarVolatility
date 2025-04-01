export interface CasoEstudio {
  id: string;
  titulo: string;
  descripcion: string;
  nivel: 'basico' | 'intermedio' | 'avanzado';
  sistemaOperativo: 'windows' | 'linux' | 'mac';
  objetivo: string;
  pasos: {
    titulo: string;
    descripcion: string;
    comandos: string[];
    explicacion: string[];
  }[];
  conclusiones: string[];
  herramientas: string[];
}

export const casosEstudio: CasoEstudio[] = [
  {
    id: 'caso-1',
    titulo: 'Análisis de Malware en Windows',
    descripcion: 'Investigación de un sistema Windows comprometido por malware',
    nivel: 'intermedio',
    sistemaOperativo: 'windows',
    objetivo: 'Identificar y analizar el malware presente en el sistema, determinar su comportamiento y alcance',
    pasos: [
      {
        titulo: 'Información del Sistema',
        descripcion: 'Recopilar información básica del sistema comprometido',
        comandos: [
          'vol.py -f memoria.raw windows.info',
          'vol.py -f memoria.raw windows.pslist',
          'vol.py -f memoria.raw windows.netstat'
        ],
        explicacion: [
          'windows.info nos proporciona información general del sistema',
          'pslist muestra los procesos activos',
          'netstat revela conexiones de red activas'
        ]
      },
      {
        titulo: 'Análisis de Procesos',
        descripcion: 'Identificar procesos sospechosos',
        comandos: [
          'vol.py -f memoria.raw windows.pstree',
          'vol.py -f memoria.raw windows.cmdline',
          'vol.py -f memoria.raw windows.handles'
        ],
        explicacion: [
          'pstree muestra la jerarquía de procesos',
          'cmdline revela los argumentos de línea de comandos',
          'handles muestra los recursos utilizados por los procesos'
        ]
      }
    ],
    conclusiones: [
      'Identificación de procesos maliciosos',
      'Determinación del vector de infección',
      'Evaluación del impacto en el sistema'
    ],
    herramientas: ['Volatility3', 'Process Explorer', 'Wireshark']
  },
  {
    id: 'caso-2',
    titulo: 'Detección de Rootkit en Linux',
    descripcion: 'Investigación de un servidor Linux comprometido por un rootkit',
    nivel: 'avanzado',
    sistemaOperativo: 'linux',
    objetivo: 'Detectar y analizar un rootkit en un servidor Linux',
    pasos: [
      {
        titulo: 'Verificación de Integridad',
        descripcion: 'Comprobar la integridad del sistema',
        comandos: [
          'vol.py -f memoria.raw linux.check_syscall',
          'vol.py -f memoria.raw linux.check_afinfo',
          'vol.py -f memoria.raw linux.check_modules'
        ],
        explicacion: [
          'check_syscall verifica la tabla de llamadas al sistema',
          'check_afinfo analiza los filtros de red',
          'check_modules examina los módulos del kernel'
        ]
      }
    ],
    conclusiones: [
      'Identificación de hooks maliciosos',
      'Determinación del tipo de rootkit',
      'Evaluación de la persistencia'
    ],
    herramientas: ['Volatility3', 'rkhunter', 'chkrootkit']
  },
  {
    id: 'caso-3',
    titulo: 'Análisis Forense en MacOS',
    descripcion: 'Investigación de un sistema MacOS comprometido',
    nivel: 'intermedio',
    sistemaOperativo: 'mac',
    objetivo: 'Realizar un análisis forense completo de un sistema MacOS',
    pasos: [
      {
        titulo: 'Información del Sistema',
        descripcion: 'Recopilar información básica del sistema',
        comandos: [
          'vol.py -f memoria.raw mac.info',
          'vol.py -f memoria.raw mac.pslist',
          'vol.py -f memoria.raw mac.netstat'
        ],
        explicacion: [
          'mac.info proporciona información del sistema',
          'pslist muestra procesos activos',
          'netstat revela conexiones de red'
        ]
      }
    ],
    conclusiones: [
      'Identificación de procesos maliciosos',
      'Análisis de actividad de red',
      'Evaluación de la seguridad del sistema'
    ],
    herramientas: ['Volatility3', 'Activity Monitor', 'Console']
  },
  {
    id: 'caso-4',
    titulo: 'Investigación de Fuga de Datos',
    descripcion: 'Análisis de una posible fuga de datos en un sistema Windows',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Investigar una posible fuga de datos sensibles',
    pasos: [
      {
        titulo: 'Análisis de Memoria',
        descripcion: 'Buscar indicios de fuga de datos',
        comandos: [
          'vol.py -f memoria.raw windows.memmap',
          'vol.py -f memoria.raw windows.dumpfiles',
          'vol.py -f memoria.raw windows.filescan'
        ],
        explicacion: [
          'memmap muestra el mapeo de memoria',
          'dumpfiles extrae archivos de memoria',
          'filescan busca archivos en memoria'
        ]
      }
    ],
    conclusiones: [
      'Identificación de archivos sensibles',
      'Determinación del método de fuga',
      'Evaluación del impacto'
    ],
    herramientas: ['Volatility3', 'FTK Imager', 'Autopsy']
  },
  {
    id: 'caso-5',
    titulo: 'Análisis de Ataque Ransomware',
    descripcion: 'Investigación de un sistema afectado por ransomware',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Analizar el impacto y comportamiento del ransomware',
    pasos: [
      {
        titulo: 'Análisis de Procesos',
        descripcion: 'Identificar procesos relacionados con el ransomware',
        comandos: [
          'vol.py -f memoria.raw windows.pslist',
          'vol.py -f memoria.raw windows.pstree',
          'vol.py -f memoria.raw windows.cmdline'
        ],
        explicacion: [
          'pslist muestra procesos activos',
          'pstree revela la jerarquía de procesos',
          'cmdline muestra argumentos de línea de comandos'
        ]
      }
    ],
    conclusiones: [
      'Identificación del ransomware',
      'Determinación del método de infección',
      'Evaluación de archivos afectados'
    ],
    herramientas: ['Volatility3', 'Process Monitor', 'Process Explorer']
  },
  {
    id: 'caso-6',
    titulo: 'Investigación de Acceso No Autorizado',
    descripcion: 'Análisis de un intento de acceso no autorizado en Linux',
    nivel: 'intermedio',
    sistemaOperativo: 'linux',
    objetivo: 'Investigar intentos de acceso no autorizado',
    pasos: [
      {
        titulo: 'Análisis de Autenticación',
        descripcion: 'Examinar registros de autenticación',
        comandos: [
          'vol.py -f memoria.raw linux.bash',
          'vol.py -f memoria.raw linux.check_syscall',
          'vol.py -f memoria.raw linux.psaux'
        ],
        explicacion: [
          'bash muestra historial de comandos',
          'check_syscall verifica llamadas al sistema',
          'psaux muestra procesos con argumentos completos'
        ]
      }
    ],
    conclusiones: [
      'Identificación de intentos de acceso',
      'Determinación del método de ataque',
      'Evaluación de la seguridad'
    ],
    herramientas: ['Volatility3', 'last', 'auth.log']
  },
  {
    id: 'caso-7',
    titulo: 'Análisis de Botnet',
    descripcion: 'Investigación de un sistema comprometido como parte de una botnet',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Analizar la participación del sistema en una botnet',
    pasos: [
      {
        titulo: 'Análisis de Red',
        descripcion: 'Examinar actividad de red sospechosa',
        comandos: [
          'vol.py -f memoria.raw windows.netstat',
          'vol.py -f memoria.raw windows.netscan',
          'vol.py -f memoria.raw windows.sockets'
        ],
        explicacion: [
          'netstat muestra conexiones activas',
          'netscan revela conexiones de red',
          'sockets muestra sockets abiertos'
        ]
      }
    ],
    conclusiones: [
      'Identificación de conexiones maliciosas',
      'Determinación del tipo de botnet',
      'Evaluación del alcance'
    ],
    herramientas: ['Volatility3', 'Wireshark', 'Netstat']
  },
  {
    id: 'caso-8',
    titulo: 'Investigación de Persistencia',
    descripcion: 'Análisis de mecanismos de persistencia en Windows',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Identificar mecanismos de persistencia maliciosos',
    pasos: [
      {
        titulo: 'Análisis de Registro',
        descripcion: 'Examinar entradas del registro',
        comandos: [
          'vol.py -f memoria.raw windows.hivelist',
          'vol.py -f memoria.raw windows.printkey',
          'vol.py -f memoria.raw windows.registry'
        ],
        explicacion: [
          'hivelist muestra hives del registro',
          'printkey muestra valores del registro',
          'registry analiza el registro completo'
        ]
      }
    ],
    conclusiones: [
      'Identificación de mecanismos de persistencia',
      'Determinación del método de infección',
      'Evaluación de la persistencia'
    ],
    herramientas: ['Volatility3', 'Regedit', 'Autoruns']
  },
  {
    id: 'caso-9',
    titulo: 'Análisis de Keylogger',
    descripcion: 'Investigación de un keylogger en un sistema Windows',
    nivel: 'intermedio',
    sistemaOperativo: 'windows',
    objetivo: 'Detectar y analizar un keylogger',
    pasos: [
      {
        titulo: 'Análisis de Procesos',
        descripcion: 'Identificar procesos relacionados con el keylogger',
        comandos: [
          'vol.py -f memoria.raw windows.pslist',
          'vol.py -f memoria.raw windows.handles',
          'vol.py -f memoria.raw windows.memmap'
        ],
        explicacion: [
          'pslist muestra procesos activos',
          'handles revela recursos utilizados',
          'memmap muestra mapeo de memoria'
        ]
      }
    ],
    conclusiones: [
      'Identificación del keylogger',
      'Determinación del método de captura',
      'Evaluación de datos comprometidos'
    ],
    herramientas: ['Volatility3', 'Process Monitor', 'Process Explorer']
  },
  {
    id: 'caso-10',
    titulo: 'Investigación de Backdoor',
    descripcion: 'Análisis de un backdoor en un sistema Linux',
    nivel: 'avanzado',
    sistemaOperativo: 'linux',
    objetivo: 'Detectar y analizar un backdoor',
    pasos: [
      {
        titulo: 'Análisis de Red',
        descripcion: 'Examinar conexiones sospechosas',
        comandos: [
          'vol.py -f memoria.raw linux.netstat',
          'vol.py -f memoria.raw linux.psaux',
          'vol.py -f memoria.raw linux.check_syscall'
        ],
        explicacion: [
          'netstat muestra conexiones de red',
          'psaux revela procesos con argumentos',
          'check_syscall verifica llamadas al sistema'
        ]
      }
    ],
    conclusiones: [
      'Identificación del backdoor',
      'Determinación del método de acceso',
      'Evaluación de la seguridad'
    ],
    herramientas: ['Volatility3', 'netstat', 'lsof']
  },
  {
    id: 'caso-11',
    titulo: 'Análisis de Malware en Red',
    descripcion: 'Investigación de malware que se propaga en red',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Analizar la propagación de malware en red',
    pasos: [
      {
        titulo: 'Análisis de Red',
        descripcion: 'Examinar actividad de red maliciosa',
        comandos: [
          'vol.py -f memoria.raw windows.netscan',
          'vol.py -f memoria.raw windows.sockets',
          'vol.py -f memoria.raw windows.connections'
        ],
        explicacion: [
          'netscan muestra conexiones de red',
          'sockets revela sockets abiertos',
          'connections muestra conexiones activas'
        ]
      }
    ],
    conclusiones: [
      'Identificación de propagación',
      'Determinación del método de infección',
      'Evaluación del alcance'
    ],
    herramientas: ['Volatility3', 'Wireshark', 'Network Monitor']
  },
  {
    id: 'caso-12',
    titulo: 'Investigación de Credenciales Robadas',
    descripcion: 'Análisis de robo de credenciales en Windows',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Investigar el robo de credenciales',
    pasos: [
      {
        titulo: 'Análisis de Memoria',
        descripcion: 'Buscar credenciales en memoria',
        comandos: [
          'vol.py -f memoria.raw windows.mimikatz',
          'vol.py -f memoria.raw windows.hashdump',
          'vol.py -f memoria.raw windows.lsadump'
        ],
        explicacion: [
          'mimikatz extrae credenciales',
          'hashdump muestra hashes de contraseñas',
          'lsadump revela secretos LSA'
        ]
      }
    ],
    conclusiones: [
      'Identificación de credenciales comprometidas',
      'Determinación del método de robo',
      'Evaluación del impacto'
    ],
    herramientas: ['Volatility3', 'Mimikatz', 'Credential Manager']
  },
  {
    id: 'caso-13',
    titulo: 'Análisis de Malware en MacOS',
    descripcion: 'Investigación de malware en sistema MacOS',
    nivel: 'intermedio',
    sistemaOperativo: 'mac',
    objetivo: 'Analizar malware en sistema MacOS',
    pasos: [
      {
        titulo: 'Análisis de Procesos',
        descripcion: 'Identificar procesos maliciosos',
        comandos: [
          'vol.py -f memoria.raw mac.pslist',
          'vol.py -f memoria.raw mac.pstree',
          'vol.py -f memoria.raw mac.malfind'
        ],
        explicacion: [
          'pslist muestra procesos activos',
          'pstree revela jerarquía de procesos',
          'malfind busca código malicioso'
        ]
      }
    ],
    conclusiones: [
      'Identificación del malware',
      'Determinación del comportamiento',
      'Evaluación del impacto'
    ],
    herramientas: ['Volatility3', 'Activity Monitor', 'Console']
  },
  {
    id: 'caso-14',
    titulo: 'Investigación de Ataque DDoS',
    descripcion: 'Análisis de participación en ataques DDoS',
    nivel: 'avanzado',
    sistemaOperativo: 'linux',
    objetivo: 'Investigar participación en ataques DDoS',
    pasos: [
      {
        titulo: 'Análisis de Red',
        descripcion: 'Examinar tráfico de red sospechoso',
        comandos: [
          'vol.py -f memoria.raw linux.netstat',
          'vol.py -f memoria.raw linux.psaux',
          'vol.py -f memoria.raw linux.sockets'
        ],
        explicacion: [
          'netstat muestra conexiones de red',
          'psaux revela procesos con argumentos',
          'sockets muestra sockets abiertos'
        ]
      }
    ],
    conclusiones: [
      'Identificación de tráfico malicioso',
      'Determinación del tipo de ataque',
      'Evaluación del impacto'
    ],
    herramientas: ['Volatility3', 'tcpdump', 'Wireshark']
  },
  {
    id: 'caso-15',
    titulo: 'Análisis de Malware Persistente',
    descripcion: 'Investigación de malware con persistencia en Windows',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Analizar malware con mecanismos de persistencia',
    pasos: [
      {
        titulo: 'Análisis de Registro',
        descripcion: 'Examinar mecanismos de persistencia',
        comandos: [
          'vol.py -f memoria.raw windows.hivelist',
          'vol.py -f memoria.raw windows.printkey',
          'vol.py -f memoria.raw windows.registry'
        ],
        explicacion: [
          'hivelist muestra hives del registro',
          'printkey revela valores del registro',
          'registry analiza el registro completo'
        ]
      }
    ],
    conclusiones: [
      'Identificación de mecanismos de persistencia',
      'Determinación del método de infección',
      'Evaluación de la persistencia'
    ],
    herramientas: ['Volatility3', 'Autoruns', 'Regedit']
  },
  {
    id: 'caso-16',
    titulo: 'Investigación de Malware en Red',
    descripcion: 'Análisis de malware que se propaga en red',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Analizar la propagación de malware en red',
    pasos: [
      {
        titulo: 'Análisis de Red',
        descripcion: 'Examinar actividad de red maliciosa',
        comandos: [
          'vol.py -f memoria.raw windows.netscan',
          'vol.py -f memoria.raw windows.sockets',
          'vol.py -f memoria.raw windows.connections'
        ],
        explicacion: [
          'netscan muestra conexiones de red',
          'sockets revela sockets abiertos',
          'connections muestra conexiones activas'
        ]
      }
    ],
    conclusiones: [
      'Identificación de propagación',
      'Determinación del método de infección',
      'Evaluación del alcance'
    ],
    herramientas: ['Volatility3', 'Wireshark', 'Network Monitor']
  },
  {
    id: 'caso-17',
    titulo: 'Análisis de Malware en Linux',
    descripcion: 'Investigación de malware en sistema Linux',
    nivel: 'intermedio',
    sistemaOperativo: 'linux',
    objetivo: 'Analizar malware en sistema Linux',
    pasos: [
      {
        titulo: 'Análisis de Procesos',
        descripcion: 'Identificar procesos maliciosos',
        comandos: [
          'vol.py -f memoria.raw linux.pslist',
          'vol.py -f memoria.raw linux.pstree',
          'vol.py -f memoria.raw linux.malfind'
        ],
        explicacion: [
          'pslist muestra procesos activos',
          'pstree revela jerarquía de procesos',
          'malfind busca código malicioso'
        ]
      }
    ],
    conclusiones: [
      'Identificación del malware',
      'Determinación del comportamiento',
      'Evaluación del impacto'
    ],
    herramientas: ['Volatility3', 'ps', 'top']
  },
  {
    id: 'caso-18',
    titulo: 'Investigación de Ataque de Red',
    descripcion: 'Análisis de ataque de red en sistema Linux',
    nivel: 'avanzado',
    sistemaOperativo: 'linux',
    objetivo: 'Investigar ataque de red',
    pasos: [
      {
        titulo: 'Análisis de Red',
        descripcion: 'Examinar actividad de red maliciosa',
        comandos: [
          'vol.py -f memoria.raw linux.netstat',
          'vol.py -f memoria.raw linux.psaux',
          'vol.py -f memoria.raw linux.sockets'
        ],
        explicacion: [
          'netstat muestra conexiones de red',
          'psaux revela procesos con argumentos',
          'sockets muestra sockets abiertos'
        ]
      }
    ],
    conclusiones: [
      'Identificación del ataque',
      'Determinación del método',
      'Evaluación del impacto'
    ],
    herramientas: ['Volatility3', 'tcpdump', 'Wireshark']
  },
  {
    id: 'caso-19',
    titulo: 'Análisis de Malware en Windows',
    descripcion: 'Investigación de malware en sistema Windows',
    nivel: 'intermedio',
    sistemaOperativo: 'windows',
    objetivo: 'Analizar malware en sistema Windows',
    pasos: [
      {
        titulo: 'Análisis de Procesos',
        descripcion: 'Identificar procesos maliciosos',
        comandos: [
          'vol.py -f memoria.raw windows.pslist',
          'vol.py -f memoria.raw windows.pstree',
          'vol.py -f memoria.raw windows.malfind'
        ],
        explicacion: [
          'pslist muestra procesos activos',
          'pstree revela jerarquía de procesos',
          'malfind busca código malicioso'
        ]
      }
    ],
    conclusiones: [
      'Identificación del malware',
      'Determinación del comportamiento',
      'Evaluación del impacto'
    ],
    herramientas: ['Volatility3', 'Process Explorer', 'Process Monitor']
  },
  {
    id: 'caso-20',
    titulo: 'Investigación de Malware en Red',
    descripcion: 'Análisis de malware que se propaga en red',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Analizar la propagación de malware en red',
    pasos: [
      {
        titulo: 'Análisis de Red',
        descripcion: 'Examinar actividad de red maliciosa',
        comandos: [
          'vol.py -f memoria.raw windows.netscan',
          'vol.py -f memoria.raw windows.sockets',
          'vol.py -f memoria.raw windows.connections'
        ],
        explicacion: [
          'netscan muestra conexiones de red',
          'sockets revela sockets abiertos',
          'connections muestra conexiones activas'
        ]
      }
    ],
    conclusiones: [
      'Identificación de propagación',
      'Determinación del método de infección',
      'Evaluación del alcance'
    ],
    herramientas: ['Volatility3', 'Wireshark', 'Network Monitor']
  },
  {
    id: 'caso-21',
    titulo: 'Análisis Básico de Windows',
    descripcion: 'Introducción al análisis forense en Windows',
    nivel: 'basico',
    sistemaOperativo: 'windows',
    objetivo: 'Realizar un análisis básico de un sistema Windows',
    pasos: [
      {
        titulo: 'Información del Sistema',
        descripcion: 'Obtener información básica del sistema',
        comandos: [
          'vol.py -f memoria.raw windows.info',
          'vol.py -f memoria.raw windows.pslist',
          'vol.py -f memoria.raw windows.netstat'
        ],
        explicacion: [
          'windows.info muestra información general del sistema',
          'pslist lista los procesos activos',
          'netstat muestra conexiones de red'
        ]
      }
    ],
    conclusiones: [
      'Comprensión básica del sistema',
      'Identificación de procesos normales',
      'Reconocimiento de conexiones de red'
    ],
    herramientas: ['Volatility3', 'Task Manager']
  },
  {
    id: 'caso-22',
    titulo: 'Análisis Básico de Linux',
    descripcion: 'Introducción al análisis forense en Linux',
    nivel: 'basico',
    sistemaOperativo: 'linux',
    objetivo: 'Realizar un análisis básico de un sistema Linux',
    pasos: [
      {
        titulo: 'Información del Sistema',
        descripcion: 'Obtener información básica del sistema',
        comandos: [
          'vol.py -f memoria.raw linux.info',
          'vol.py -f memoria.raw linux.pslist',
          'vol.py -f memoria.raw linux.netstat'
        ],
        explicacion: [
          'linux.info muestra información general del sistema',
          'pslist lista los procesos activos',
          'netstat muestra conexiones de red'
        ]
      }
    ],
    conclusiones: [
      'Comprensión básica del sistema',
      'Identificación de procesos normales',
      'Reconocimiento de conexiones de red'
    ],
    herramientas: ['Volatility3', 'ps', 'netstat']
  },
  {
    id: 'caso-23',
    titulo: 'Análisis Básico de MacOS',
    descripcion: 'Introducción al análisis forense en MacOS',
    nivel: 'basico',
    sistemaOperativo: 'mac',
    objetivo: 'Realizar un análisis básico de un sistema MacOS',
    pasos: [
      {
        titulo: 'Información del Sistema',
        descripcion: 'Obtener información básica del sistema',
        comandos: [
          'vol.py -f memoria.raw mac.info',
          'vol.py -f memoria.raw mac.pslist',
          'vol.py -f memoria.raw mac.netstat'
        ],
        explicacion: [
          'mac.info muestra información general del sistema',
          'pslist lista los procesos activos',
          'netstat muestra conexiones de red'
        ]
      }
    ],
    conclusiones: [
      'Comprensión básica del sistema',
      'Identificación de procesos normales',
      'Reconocimiento de conexiones de red'
    ],
    herramientas: ['Volatility3', 'Activity Monitor']
  },
  {
    id: 'caso-24',
    titulo: 'Investigación de Troyano',
    descripcion: 'Análisis de un troyano en sistema Windows',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Detectar y analizar un troyano',
    pasos: [
      {
        titulo: 'Análisis de Procesos',
        descripcion: 'Identificar procesos relacionados con el troyano',
        comandos: [
          'vol.py -f memoria.raw windows.pslist',
          'vol.py -f memoria.raw windows.pstree',
          'vol.py -f memoria.raw windows.malfind'
        ],
        explicacion: [
          'pslist muestra procesos activos',
          'pstree revela jerarquía de procesos',
          'malfind busca código malicioso'
        ]
      }
    ],
    conclusiones: [
      'Identificación del troyano',
      'Determinación del método de infección',
      'Evaluación del impacto'
    ],
    herramientas: ['Volatility3', 'Process Monitor', 'Process Explorer']
  },
  {
    id: 'caso-25',
    titulo: 'Análisis de Spyware',
    descripcion: 'Investigación de spyware en sistema Windows',
    nivel: 'intermedio',
    sistemaOperativo: 'windows',
    objetivo: 'Detectar y analizar spyware',
    pasos: [
      {
        titulo: 'Análisis de Procesos',
        descripcion: 'Identificar procesos relacionados con el spyware',
        comandos: [
          'vol.py -f memoria.raw windows.pslist',
          'vol.py -f memoria.raw windows.handles',
          'vol.py -f memoria.raw windows.memmap'
        ],
        explicacion: [
          'pslist muestra procesos activos',
          'handles revela recursos utilizados',
          'memmap muestra mapeo de memoria'
        ]
      }
    ],
    conclusiones: [
      'Identificación del spyware',
      'Determinación del método de recolección',
      'Evaluación de datos comprometidos'
    ],
    herramientas: ['Volatility3', 'Process Monitor', 'Process Explorer']
  },
  {
    id: 'caso-26',
    titulo: 'Investigación de Adware',
    descripcion: 'Análisis de adware en sistema Windows',
    nivel: 'intermedio',
    sistemaOperativo: 'windows',
    objetivo: 'Detectar y analizar adware',
    pasos: [
      {
        titulo: 'Análisis de Procesos',
        descripcion: 'Identificar procesos relacionados con el adware',
        comandos: [
          'vol.py -f memoria.raw windows.pslist',
          'vol.py -f memoria.raw windows.pstree',
          'vol.py -f memoria.raw windows.cmdline'
        ],
        explicacion: [
          'pslist muestra procesos activos',
          'pstree revela jerarquía de procesos',
          'cmdline muestra argumentos de línea de comandos'
        ]
      }
    ],
    conclusiones: [
      'Identificación del adware',
      'Determinación del método de infección',
      'Evaluación del impacto'
    ],
    herramientas: ['Volatility3', 'Process Monitor', 'Process Explorer']
  },
  {
    id: 'caso-27',
    titulo: 'Análisis de Worm',
    descripcion: 'Investigación de un worm en sistema Windows',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Detectar y analizar un worm',
    pasos: [
      {
        titulo: 'Análisis de Red',
        descripcion: 'Examinar actividad de red maliciosa',
        comandos: [
          'vol.py -f memoria.raw windows.netscan',
          'vol.py -f memoria.raw windows.sockets',
          'vol.py -f memoria.raw windows.connections'
        ],
        explicacion: [
          'netscan muestra conexiones de red',
          'sockets revela sockets abiertos',
          'connections muestra conexiones activas'
        ]
      }
    ],
    conclusiones: [
      'Identificación del worm',
      'Determinación del método de propagación',
      'Evaluación del alcance'
    ],
    herramientas: ['Volatility3', 'Wireshark', 'Network Monitor']
  },
  {
    id: 'caso-28',
    titulo: 'Investigación de Virus',
    descripcion: 'Análisis de un virus en sistema Windows',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Detectar y analizar un virus',
    pasos: [
      {
        titulo: 'Análisis de Procesos',
        descripcion: 'Identificar procesos relacionados con el virus',
        comandos: [
          'vol.py -f memoria.raw windows.pslist',
          'vol.py -f memoria.raw windows.pstree',
          'vol.py -f memoria.raw windows.malfind'
        ],
        explicacion: [
          'pslist muestra procesos activos',
          'pstree revela jerarquía de procesos',
          'malfind busca código malicioso'
        ]
      }
    ],
    conclusiones: [
      'Identificación del virus',
      'Determinación del método de infección',
      'Evaluación del impacto'
    ],
    herramientas: ['Volatility3', 'Process Monitor', 'Process Explorer']
  },
  {
    id: 'caso-29',
    titulo: 'Análisis de Malware en Red',
    descripcion: 'Investigación de malware que se propaga en red',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Analizar la propagación de malware en red',
    pasos: [
      {
        titulo: 'Análisis de Red',
        descripcion: 'Examinar actividad de red maliciosa',
        comandos: [
          'vol.py -f memoria.raw windows.netscan',
          'vol.py -f memoria.raw windows.sockets',
          'vol.py -f memoria.raw windows.connections'
        ],
        explicacion: [
          'netscan muestra conexiones de red',
          'sockets revela sockets abiertos',
          'connections muestra conexiones activas'
        ]
      }
    ],
    conclusiones: [
      'Identificación de propagación',
      'Determinación del método de infección',
      'Evaluación del alcance'
    ],
    herramientas: ['Volatility3', 'Wireshark', 'Network Monitor']
  },
  {
    id: 'caso-30',
    titulo: 'Investigación de Malware en Red',
    descripcion: 'Análisis de malware que se propaga en red',
    nivel: 'avanzado',
    sistemaOperativo: 'windows',
    objetivo: 'Analizar la propagación de malware en red',
    pasos: [
      {
        titulo: 'Análisis de Red',
        descripcion: 'Examinar actividad de red maliciosa',
        comandos: [
          'vol.py -f memoria.raw windows.netscan',
          'vol.py -f memoria.raw windows.sockets',
          'vol.py -f memoria.raw windows.connections'
        ],
        explicacion: [
          'netscan muestra conexiones de red',
          'sockets revela sockets abiertos',
          'connections muestra conexiones activas'
        ]
      }
    ],
    conclusiones: [
      'Identificación de propagación',
      'Determinación del método de infección',
      'Evaluación del alcance'
    ],
    herramientas: ['Volatility3', 'Wireshark', 'Network Monitor']
  }
]; 