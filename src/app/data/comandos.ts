export interface Comando {
  titulo: string;
  descripcion: string;
  comando: string;
  explicacion: string[];
  categoria: 'linux' | 'mac' | 'windows' | 'general';
}

export const comandos: Comando[] = [
  // Comandos Generales
  {
    titulo: "Banners",
    descripcion: "Intenta identificar posibles banners de Linux en una imagen",
    comando: "vol.py -f memoria.raw banners.Banners",
    explicacion: [
      "Analiza la memoria en busca de banners de sistema",
      "Útil para identificar versiones de sistemas operativos"
    ],
    categoria: "general"
  },
  {
    titulo: "Configwriter",
    descripcion: "Ejecuta los automagics y genera la configuración en el directorio de salida",
    comando: "vol.py -f memoria.raw configwriter.Configwriter",
    explicacion: [
      "Genera archivos de configuración",
      "Ayuda a documentar el análisis realizado"
    ],
    categoria: "general"
  },
  {
    titulo: "FrameworkInfo",
    descripcion: "Lista los componentes modulares de Volatility",
    comando: "vol.py -f memoria.raw frameworkinfo.FrameworkInfo",
    explicacion: [
      "Muestra información sobre los componentes disponibles",
      "Útil para verificar la instalación"
    ],
    categoria: "general"
  },
  {
    titulo: "ISFInfo",
    descripcion: "Determina información sobre los archivos ISF disponibles",
    comando: "vol.py -f memoria.raw isfinfo.IsfInfo",
    explicacion: [
      "Muestra información sobre archivos ISF",
      "Ayuda a verificar la configuración"
    ],
    categoria: "general"
  },
  {
    titulo: "Layerwriter",
    descripcion: "Ejecuta los automagics y escribe la capa primaria producida por el stacker",
    comando: "vol.py -f memoria.raw layerwriter.Layerwriter",
    explicacion: [
      "Genera capas de memoria",
      "Útil para análisis avanzado"
    ],
    categoria: "general"
  },
  {
    titulo: "Timeliner",
    descripcion: "Ejecuta plugins relacionados con información temporal",
    comando: "vol.py -f memoria.raw timeliner.Timeliner",
    explicacion: [
      "Ordena resultados por tiempo",
      "Ayuda a crear línea de tiempo de eventos"
    ],
    categoria: "general"
  },

  // Comandos Linux
  {
    titulo: "Bash History (Linux)",
    descripcion: "Recupera el historial de comandos bash de la memoria",
    comando: "vol.py -f memoria.raw linux.bash.Bash",
    explicacion: [
      "Extrae el historial de comandos bash",
      "Útil para análisis forense"
    ],
    categoria: "linux"
  },
  {
    titulo: "Check AFInfo (Linux)",
    descripcion: "Verifica los punteros de función de protocolos de red",
    comando: "vol.py -f memoria.raw linux.check_afinfo.Check_afinfo",
    explicacion: [
      "Analiza la integridad de los protocolos de red",
      "Ayuda a detectar malware"
    ],
    categoria: "linux"
  },
  {
    titulo: "Check Creds (Linux)",
    descripcion: "Verifica si hay procesos compartiendo estructuras de credenciales",
    comando: "vol.py -f memoria.raw linux.check_creds.Check_creds",
    explicacion: [
      "Analiza credenciales compartidas",
      "Ayuda a detectar compromisos de seguridad"
    ],
    categoria: "linux"
  },
  {
    titulo: "Check IDT (Linux)",
    descripcion: "Verifica si la IDT ha sido alterada",
    comando: "vol.py -f memoria.raw linux.check_idt.Check_idt",
    explicacion: [
      "Analiza la tabla de descriptores de interrupción",
      "Detecta modificaciones maliciosas"
    ],
    categoria: "linux"
  },
  {
    titulo: "Check Modules (Linux)",
    descripcion: "Compara la lista de módulos con la información de sysfs",
    comando: "vol.py -f memoria.raw linux.check_modules.Check_modules",
    explicacion: [
      "Verifica módulos del kernel",
      "Detecta módulos ocultos"
    ],
    categoria: "linux"
  },
  {
    titulo: "Check Syscall (Linux)",
    descripcion: "Verifica la tabla de llamadas al sistema",
    comando: "vol.py -f memoria.raw linux.check_syscall.Check_syscall",
    explicacion: [
      "Analiza llamadas al sistema",
      "Detecta hooks maliciosos"
    ],
    categoria: "linux"
  },
  {
    titulo: "ELFs (Linux)",
    descripcion: "Lista todos los archivos ELF mapeados en memoria",
    comando: "vol.py -f memoria.raw linux.elfs.Elfs",
    explicacion: [
      "Muestra archivos ELF en memoria",
      "Útil para análisis de binarios"
    ],
    categoria: "linux"
  },
  {
    titulo: "Environment Variables (Linux)",
    descripcion: "Lista variables de entorno de los procesos",
    comando: "vol.py -f memoria.raw linux.envars.Envars",
    explicacion: [
      "Muestra variables de entorno",
      "Ayuda a entender el contexto de procesos"
    ],
    categoria: "linux"
  },
  {
    titulo: "IOMem (Linux)",
    descripcion: "Genera salida similar a /proc/iomem",
    comando: "vol.py -f memoria.raw linux.iomem.IOMem",
    explicacion: [
      "Muestra mapeo de memoria",
      "Útil para análisis de hardware"
    ],
    categoria: "linux"
  },
  {
    titulo: "Keyboard Notifiers (Linux)",
    descripcion: "Analiza la cadena de notificaciones del teclado",
    comando: "vol.py -f memoria.raw linux.keyboard_notifiers.Keyboard_notifiers",
    explicacion: [
      "Analiza interceptores de teclado",
      "Detecta keyloggers"
    ],
    categoria: "linux"
  },
  {
    titulo: "Kernel Log (Linux)",
    descripcion: "Lee el buffer de registro del kernel",
    comando: "vol.py -f memoria.raw linux.kmsg.Kmsg",
    explicacion: [
      "Muestra logs del kernel",
      "Ayuda a diagnosticar problemas"
    ],
    categoria: "linux"
  },
  {
    titulo: "Loaded Modules (Linux)",
    descripcion: "Lista módulos del kernel cargados",
    comando: "vol.py -f memoria.raw linux.lsmod.Lsmod",
    explicacion: [
      "Muestra módulos cargados",
      "Detecta módulos maliciosos"
    ],
    categoria: "linux"
  },
  {
    titulo: "Open Files (Linux)",
    descripcion: "Lista archivos abiertos por procesos",
    comando: "vol.py -f memoria.raw linux.lsof.Lsof",
    explicacion: [
      "Muestra archivos abiertos",
      "Ayuda a entender actividad de archivos"
    ],
    categoria: "linux"
  },
  {
    titulo: "Malware Find (Linux)",
    descripcion: "Busca código potencialmente inyectado",
    comando: "vol.py -f memoria.raw linux.malfind.Malfind",
    explicacion: [
      "Detecta código inyectado",
      "Ayuda a encontrar malware"
    ],
    categoria: "linux"
  },
  {
    titulo: "Mount Info (Linux)",
    descripcion: "Lista puntos de montaje en espacios de nombres",
    comando: "vol.py -f memoria.raw linux.mountinfo.MountInfo",
    explicacion: [
      "Muestra información de montaje",
      "Ayuda a entender el sistema de archivos"
    ],
    categoria: "linux"
  },
  {
    titulo: "Process Maps (Linux)",
    descripcion: "Lista mapeos de memoria de procesos",
    comando: "vol.py -f memoria.raw linux.proc.Maps",
    explicacion: [
      "Muestra mapeos de memoria",
      "Ayuda a analizar procesos"
    ],
    categoria: "linux"
  },
  {
    titulo: "Process Arguments (Linux)",
    descripcion: "Lista argumentos de línea de comandos de procesos",
    comando: "vol.py -f memoria.raw linux.psaux.PsAux",
    explicacion: [
      "Muestra argumentos de procesos",
      "Ayuda a entender comportamiento"
    ],
    categoria: "linux"
  },
  {
    titulo: "Process List (Linux)",
    descripcion: "Lista procesos en la imagen de memoria",
    comando: "vol.py -f memoria.raw linux.pslist.PsList",
    explicacion: [
      "Muestra lista de procesos",
      "Fundamental para análisis"
    ],
    categoria: "linux"
  },
  {
    titulo: "Process Scan (Linux)",
    descripcion: "Busca procesos en la imagen de memoria",
    comando: "vol.py -f memoria.raw linux.psscan.PsScan",
    explicacion: [
      "Encuentra procesos ocultos",
      "Detecta procesos maliciosos"
    ],
    categoria: "linux"
  },
  {
    titulo: "Process Tree (Linux)",
    descripcion: "Muestra árbol de procesos",
    comando: "vol.py -f memoria.raw linux.pstree.PsTree",
    explicacion: [
      "Muestra jerarquía de procesos",
      "Ayuda a entender relaciones"
    ],
    categoria: "linux"
  },
  {
    titulo: "Socket Statistics (Linux)",
    descripcion: "Lista conexiones de red",
    comando: "vol.py -f memoria.raw linux.sockstat.Sockstat",
    explicacion: [
      "Muestra conexiones de red",
      "Ayuda a analizar comunicación"
    ],
    categoria: "linux"
  },
  {
    titulo: "TTY Check (Linux)",
    descripcion: "Verifica dispositivos TTY por hooks",
    comando: "vol.py -f memoria.raw linux.tty_check.tty_check",
    explicacion: [
      "Analiza dispositivos TTY",
      "Detecta interceptores de terminal"
    ],
    categoria: "linux"
  },

  // Comandos MacOS
  {
    titulo: "Bash History (MacOS)",
    descripcion: "Recupera el historial de comandos bash",
    comando: "vol.py -f memoria.raw mac.bash.Bash",
    explicacion: [
      "Extrae historial de bash",
      "Útil para análisis forense"
    ],
    categoria: "mac"
  },
  {
    titulo: "Check Syscall (MacOS)",
    descripcion: "Verifica la tabla de llamadas al sistema",
    comando: "vol.py -f memoria.raw mac.check_Syscall.Check_Syscall",
    explicacion: [
      "Analiza llamadas al sistema",
      "Detecta hooks maliciosos"
    ],
    categoria: "mac"
  },
  {
    titulo: "Check Sysctl (MacOS)",
    descripcion: "Verifica manejadores de sysctl",
    comando: "vol.py -f memoria.raw mac.check_sysctl.Check_sysctl",
    explicacion: [
      "Analiza configuración del sistema",
      "Detecta modificaciones maliciosas"
    ],
    categoria: "mac"
  },
  {
    titulo: "Check Trap Table (MacOS)",
    descripcion: "Verifica la tabla de trampas",
    comando: "vol.py -f memoria.raw mac.check_trap_table.Check_trap_table",
    explicacion: [
      "Analiza tabla de trampas",
      "Detecta interceptores"
    ],
    categoria: "mac"
  },
  {
    titulo: "Network Interfaces (MacOS)",
    descripcion: "Lista información de interfaces de red",
    comando: "vol.py -f memoria.raw mac.ifconfig.Ifconfig",
    explicacion: [
      "Muestra interfaces de red",
      "Ayuda a analizar red"
    ],
    categoria: "mac"
  },
  {
    titulo: "Kauth Listeners (MacOS)",
    descripcion: "Lista oyentes de kauth y su estado",
    comando: "vol.py -f memoria.raw mac.kauth_listeners.Kauth_listeners",
    explicacion: [
      "Analiza oyentes de seguridad",
      "Detecta modificaciones"
    ],
    categoria: "mac"
  },
  {
    titulo: "Kauth Scopes (MacOS)",
    descripcion: "Lista ámbitos de kauth y su estado",
    comando: "vol.py -f memoria.raw mac.kauth_scopes.Kauth_scopes",
    explicacion: [
      "Analiza ámbitos de seguridad",
      "Ayuda a entender permisos"
    ],
    categoria: "mac"
  },
  {
    titulo: "Kernel Events (MacOS)",
    descripcion: "Lista manejadores de eventos registrados",
    comando: "vol.py -f memoria.raw mac.kevents.Kevents",
    explicacion: [
      "Muestra eventos del kernel",
      "Ayuda a analizar comportamiento"
    ],
    categoria: "mac"
  },
  {
    titulo: "List Files (MacOS)",
    descripcion: "Lista descriptores de archivos abiertos",
    comando: "vol.py -f memoria.raw mac.list_files.List_Files",
    explicacion: [
      "Muestra archivos abiertos",
      "Ayuda a entender actividad"
    ],
    categoria: "mac"
  },
  {
    titulo: "Loaded Modules (MacOS)",
    descripcion: "Lista módulos del kernel cargados",
    comando: "vol.py -f memoria.raw mac.lsmod.Lsmod",
    explicacion: [
      "Muestra módulos cargados",
      "Detecta módulos maliciosos"
    ],
    categoria: "mac"
  },
  {
    titulo: "Open Files (MacOS)",
    descripcion: "Lista descriptores de archivos abiertos",
    comando: "vol.py -f memoria.raw mac.lsof.Lsof",
    explicacion: [
      "Muestra archivos abiertos",
      "Ayuda a analizar actividad"
    ],
    categoria: "mac"
  },
  {
    titulo: "Malware Find (MacOS)",
    descripcion: "Busca código potencialmente inyectado",
    comando: "vol.py -f memoria.raw mac.malfind.Malfind",
    explicacion: [
      "Detecta código inyectado",
      "Ayuda a encontrar malware"
    ],
    categoria: "mac"
  },
  {
    titulo: "Mount (MacOS)",
    descripcion: "Muestra información de montaje",
    comando: "vol.py -f memoria.raw mac.mount.Mount",
    explicacion: [
      "Muestra puntos de montaje",
      "Ayuda a entender sistema de archivos"
    ],
    categoria: "mac"
  },
  {
    titulo: "Network Statistics (MacOS)",
    descripcion: "Lista conexiones de red",
    comando: "vol.py -f memoria.raw mac.netstat.Netstat",
    explicacion: [
      "Muestra conexiones de red",
      "Ayuda a analizar comunicación"
    ],
    categoria: "mac"
  },
  {
    titulo: "Process Maps (MacOS)",
    descripcion: "Lista rangos de memoria de procesos",
    comando: "vol.py -f memoria.raw mac.proc_maps.Maps",
    explicacion: [
      "Muestra mapeos de memoria",
      "Ayuda a analizar procesos"
    ],
    categoria: "mac"
  },
  {
    titulo: "Process Arguments (MacOS)",
    descripcion: "Recupera argumentos de línea de comandos",
    comando: "vol.py -f memoria.raw mac.psaux.Psaux",
    explicacion: [
      "Muestra argumentos de procesos",
      "Ayuda a entender comportamiento"
    ],
    categoria: "mac"
  },
  {
    titulo: "Process List (MacOS)",
    descripcion: "Lista procesos en la imagen de memoria",
    comando: "vol.py -f memoria.raw mac.pslist.PsList",
    explicacion: [
      "Muestra lista de procesos",
      "Fundamental para análisis"
    ],
    categoria: "mac"
  },
  {
    titulo: "Process Tree (MacOS)",
    descripcion: "Muestra árbol de procesos",
    comando: "vol.py -f memoria.raw mac.pstree.Pstree",
    explicacion: [
      "Muestra jerarquía de procesos",
      "Ayuda a entender relaciones"
    ],
    categoria: "mac"
  },
  {
    titulo: "Socket Filters (MacOS)",
    descripcion: "Enumera filtros de socket del kernel",
    comando: "vol.py -f memoria.raw mac.socket_filters.Socket_filters",
    explicacion: [
      "Analiza filtros de red",
      "Detecta interceptores"
    ],
    categoria: "mac"
  },
  {
    titulo: "Timers (MacOS)",
    descripcion: "Verifica temporizadores del kernel",
    comando: "vol.py -f memoria.raw mac.timers.Timers",
    explicacion: [
      "Analiza temporizadores",
      "Detecta malware persistente"
    ],
    categoria: "mac"
  },
  {
    titulo: "TrustedBSD (MacOS)",
    descripcion: "Verifica módulos TrustedBSD maliciosos",
    comando: "vol.py -f memoria.raw mac.trustedbsd.Trustedbsd",
    explicacion: [
      "Analiza módulos de seguridad",
      "Detecta compromisos"
    ],
    categoria: "mac"
  },
  {
    titulo: "VFS Events (MacOS)",
    descripcion: "Lista procesos que filtran eventos del sistema de archivos",
    comando: "vol.py -f memoria.raw mac.ufsevents.VFSevents",
    explicacion: [
      "Analiza eventos de archivos",
      "Detecta interceptores"
    ],
    categoria: "mac"
  },

  // Comandos Windows
  {
    titulo: "Big Pools (Windows)",
    descripcion: "Lista grandes grupos de memoria",
    comando: "vol.py -f memoria.raw windows.bigpools.BigPools",
    explicacion: [
      "Muestra grupos grandes",
      "Ayuda a analizar memoria"
    ],
    categoria: "windows"
  },
  {
    titulo: "Callbacks (Windows)",
    descripcion: "Lista callbacks del kernel",
    comando: "vol.py -f memoria.raw windows.callbacks.Callbacks",
    explicacion: [
      "Muestra callbacks",
      "Detecta hooks maliciosos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Command Line (Windows)",
    descripcion: "Lista argumentos de línea de comandos",
    comando: "vol.py -f memoria.raw windows.cmdline.CmdLine",
    explicacion: [
      "Muestra argumentos de procesos",
      "Ayuda a entender comportamiento"
    ],
    categoria: "windows"
  },
  {
    titulo: "Crash Info (Windows)",
    descripcion: "Lista información del volcado de memoria",
    comando: "vol.py -f memoria.raw windows.crashinfo.Crashinfo",
    explicacion: [
      "Muestra información de crash",
      "Ayuda a diagnosticar problemas"
    ],
    categoria: "windows"
  },
  {
    titulo: "Device Tree (Windows)",
    descripcion: "Lista árbol de dispositivos",
    comando: "vol.py -f memoria.raw windows.devicetree.DeviceTree",
    explicacion: [
      "Muestra árbol de dispositivos",
      "Ayuda a analizar hardware"
    ],
    categoria: "windows"
  },
  {
    titulo: "DLL List (Windows)",
    descripcion: "Lista DLLs cargadas",
    comando: "vol.py -f memoria.raw windows.dlllist.DllList",
    explicacion: [
      "Muestra DLLs cargadas",
      "Ayuda a analizar procesos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Driver IRP (Windows)",
    descripcion: "Lista IRPs de controladores",
    comando: "vol.py -f memoria.raw windows.driverirp.DriverIrp",
    explicacion: [
      "Analiza IRPs de controladores",
      "Ayuda a entender drivers"
    ],
    categoria: "windows"
  },
  {
    titulo: "Driver Module (Windows)",
    descripcion: "Verifica controladores ocultos",
    comando: "vol.py -f memoria.raw windows.drivermodule.DriverModule",
    explicacion: [
      "Detecta controladores ocultos",
      "Ayuda a encontrar rootkits"
    ],
    categoria: "windows"
  },
  {
    titulo: "Driver Scan (Windows)",
    descripcion: "Busca controladores en la memoria",
    comando: "vol.py -f memoria.raw windows.driverscan.DriverScan",
    explicacion: [
      "Encuentra controladores",
      "Detecta drivers maliciosos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Dump Files (Windows)",
    descripcion: "Extrae archivos en caché",
    comando: "vol.py -f memoria.raw windows.dumpfiles.DumpFiles",
    explicacion: [
      "Extrae archivos",
      "Ayuda a recuperar datos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Environment Variables (Windows)",
    descripcion: "Muestra variables de entorno",
    comando: "vol.py -f memoria.raw windows.envars.Envars",
    explicacion: [
      "Muestra variables de entorno",
      "Ayuda a entender contexto"
    ],
    categoria: "windows"
  },
  {
    titulo: "File Scan (Windows)",
    descripcion: "Busca objetos de archivo",
    comando: "vol.py -f memoria.raw windows.filescan.Filescan",
    explicacion: [
      "Encuentra archivos",
      "Ayuda a recuperar datos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Get Service SIDs (Windows)",
    descripcion: "Lista SIDs de servicios",
    comando: "vol.py -f memoria.raw windows.getservicesids.GetServiceSIDs",
    explicacion: [
      "Muestra SIDs de servicios",
      "Ayuda a analizar permisos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Get SIDs (Windows)",
    descripcion: "Muestra SIDs de procesos",
    comando: "vol.py -f memoria.raw windows.getsids.GetSIDs",
    explicacion: [
      "Muestra SIDs de procesos",
      "Ayuda a analizar permisos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Handles (Windows)",
    descripcion: "Lista manejadores abiertos",
    comando: "vol.py -f memoria.raw windows.handles.Handles",
    explicacion: [
      "Muestra manejadores",
      "Ayuda a analizar recursos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Info (Windows)",
    descripcion: "Muestra detalles del sistema",
    comando: "vol.py -f memoria.raw windows.info.Info",
    explicacion: [
      "Muestra información del sistema",
      "Fundamental para análisis"
    ],
    categoria: "windows"
  },
  {
    titulo: "Job Links (Windows)",
    descripcion: "Muestra información de trabajos",
    comando: "vol.py -f memoria.raw windows.joblinks.Joblinks",
    explicacion: [
      "Muestra trabajos",
      "Ayuda a entender procesos"
    ],
    categoria: "windows"
  },
  {
    titulo: "LDR Modules (Windows)",
    descripcion: "Lista módulos cargados",
    comando: "vol.py -f memoria.raw windows.ldrmodules.LdrModules",
    explicacion: [
      "Muestra módulos cargados",
      "Ayuda a analizar procesos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Malware Find (Windows)",
    descripcion: "Busca código inyectado",
    comando: "vol.py -f memoria.raw windows.malfind.Malfind",
    explicacion: [
      "Detecta código inyectado",
      "Ayuda a encontrar malware"
    ],
    categoria: "windows"
  },
  {
    titulo: "MBR Scan (Windows)",
    descripcion: "Busca registros de arranque maestro",
    comando: "vol.py -f memoria.raw windows.mbrscan.MBRScan",
    explicacion: [
      "Analiza MBR",
      "Detecta bootkits"
    ],
    categoria: "windows"
  },
  {
    titulo: "Memory Map (Windows)",
    descripcion: "Muestra mapa de memoria",
    comando: "vol.py -f memoria.raw windows.memmap.Memmap",
    explicacion: [
      "Muestra mapa de memoria",
      "Ayuda a analizar memoria"
    ],
    categoria: "windows"
  },
  {
    titulo: "Module Scan (Windows)",
    descripcion: "Busca módulos en memoria",
    comando: "vol.py -f memoria.raw windows.modscan.Modscan",
    explicacion: [
      "Encuentra módulos",
      "Detecta módulos ocultos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Modules (Windows)",
    descripcion: "Lista módulos del kernel",
    comando: "vol.py -f memoria.raw windows.modules.Modules",
    explicacion: [
      "Muestra módulos del kernel",
      "Ayuda a analizar sistema"
    ],
    categoria: "windows"
  },
  {
    titulo: "Mutex Scan (Windows)",
    descripcion: "Busca mutexes",
    comando: "vol.py -f memoria.raw windows.mutantscan.MutantScan",
    explicacion: [
      "Encuentra mutexes",
      "Ayuda a analizar sincronización"
    ],
    categoria: "windows"
  },
  {
    titulo: "Net Scan (Windows)",
    descripcion: "Busca objetos de red",
    comando: "vol.py -f memoria.raw windows.netscan.Netscan",
    explicacion: [
      "Encuentra objetos de red",
      "Ayuda a analizar red"
    ],
    categoria: "windows"
  },
  {
    titulo: "Netstat (Windows)",
    descripcion: "Muestra conexiones de red",
    comando: "vol.py -f memoria.raw windows.netstat.NetStat",
    explicacion: [
      "Muestra conexiones",
      "Ayuda a analizar red"
    ],
    categoria: "windows"
  },
  {
    titulo: "Pool Scanner (Windows)",
    descripcion: "Escáner genérico de grupos",
    comando: "vol.py -f memoria.raw windows.poolscanner.Poolscanner",
    explicacion: [
      "Escanea grupos de memoria",
      "Ayuda a encontrar objetos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Privileges (Windows)",
    descripcion: "Lista privilegios de procesos",
    comando: "vol.py -f memoria.raw windows.privileges.Privs",
    explicacion: [
      "Muestra privilegios",
      "Ayuda a analizar permisos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Process List (Windows)",
    descripcion: "Lista procesos",
    comando: "vol.py -f memoria.raw windows.pslist.PsList",
    explicacion: [
      "Muestra procesos",
      "Fundamental para análisis"
    ],
    categoria: "windows"
  },
  {
    titulo: "Process Scan (Windows)",
    descripcion: "Busca procesos",
    comando: "vol.py -f memoria.raw windows.psscan.Psscan",
    explicacion: [
      "Encuentra procesos ocultos",
      "Detecta procesos maliciosos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Process Tree (Windows)",
    descripcion: "Muestra árbol de procesos",
    comando: "vol.py -f memoria.raw windows.pstree.PsTree",
    explicacion: [
      "Muestra jerarquía",
      "Ayuda a entender relaciones"
    ],
    categoria: "windows"
  },
  {
    titulo: "Registry Certificates (Windows)",
    descripcion: "Lista certificados en el registro",
    comando: "vol.py -f memoria.raw windows.registry.certificates.Certificates",
    explicacion: [
      "Muestra certificados",
      "Ayuda a analizar seguridad"
    ],
    categoria: "windows"
  },
  {
    titulo: "Registry Hive List (Windows)",
    descripcion: "Lista hives del registro",
    comando: "vol.py -f memoria.raw windows.registry.hivelist.Hivelist",
    explicacion: [
      "Muestra hives",
      "Ayuda a analizar registro"
    ],
    categoria: "windows"
  },
  {
    titulo: "Registry Hive Scan (Windows)",
    descripcion: "Busca hives del registro",
    comando: "vol.py -f memoria.raw windows.registry.hivescan.Hivescan",
    explicacion: [
      "Encuentra hives",
      "Ayuda a analizar registro"
    ],
    categoria: "windows"
  },
  {
    titulo: "Registry Print Key (Windows)",
    descripcion: "Lista claves del registro",
    comando: "vol.py -f memoria.raw windows.registry.printkey.PrintKey",
    explicacion: [
      "Muestra claves",
      "Ayuda a analizar configuración"
    ],
    categoria: "windows"
  },
  {
    titulo: "UserAssist (Windows)",
    descripcion: "Muestra claves UserAssist",
    comando: "vol.py -f memoria.raw windows.registry.userassist.UserAssist",
    explicacion: [
      "Muestra actividad de usuario",
      "Ayuda a analizar comportamiento"
    ],
    categoria: "windows"
  },
  {
    titulo: "Sessions (Windows)",
    descripcion: "Lista procesos con información de sesión",
    comando: "vol.py -f memoria.raw windows.sessions.Sessions",
    explicacion: [
      "Muestra sesiones",
      "Ayuda a analizar usuarios"
    ],
    categoria: "windows"
  },
  {
    titulo: "Skeleton Key Check (Windows)",
    descripcion: "Busca signos de malware Skeleton Key",
    comando: "vol.py -f memoria.raw windows.skeleton_key_check.Skeleton_Key_Check",
    explicacion: [
      "Detecta Skeleton Key",
      "Ayuda a encontrar malware"
    ],
    categoria: "windows"
  },
  {
    titulo: "SSDT (Windows)",
    descripcion: "Lista tabla de llamadas al sistema",
    comando: "vol.py -f memoria.raw windows.ssdt.SSDT",
    explicacion: [
      "Muestra SSDT",
      "Detecta hooks maliciosos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Statistics (Windows)",
    descripcion: "Lista estadísticas de memoria",
    comando: "vol.py -f memoria.raw windows.statistics.Statistics",
    explicacion: [
      "Muestra estadísticas",
      "Ayuda a analizar memoria"
    ],
    categoria: "windows"
  },
  {
    titulo: "Strings (Windows)",
    descripcion: "Lee salida del comando strings",
    comando: "vol.py -f memoria.raw windows.strings.Strings",
    explicacion: [
      "Analiza strings",
      "Ayuda a encontrar datos"
    ],
    categoria: "windows"
  },
  {
    titulo: "Symlink Scan (Windows)",
    descripcion: "Busca enlaces simbólicos",
    comando: "vol.py -f memoria.raw windows.symlinkscan.Symlinkscan",
    explicacion: [
      "Encuentra enlaces",
      "Ayuda a analizar sistema de archivos"
    ],
    categoria: "windows"
  },
  {
    titulo: "VAD Info (Windows)",
    descripcion: "Lista rangos de memoria de procesos",
    comando: "vol.py -f memoria.raw windows.vadinfo.VadInfo",
    explicacion: [
      "Muestra VADs",
      "Ayuda a analizar memoria"
    ],
    categoria: "windows"
  },
  {
    titulo: "VAD Walk (Windows)",
    descripcion: "Recorre árbol VAD",
    comando: "vol.py -f memoria.raw windows.vadwalk.Vadwalk",
    explicacion: [
      "Analiza VADs",
      "Ayuda a entender memoria"
    ],
    categoria: "windows"
  },
  {
    titulo: "Version Info (Windows)",
    descripcion: "Lista información de versión de archivos PE",
    comando: "vol.py -f memoria.raw windows.verinfo.VerInfo",
    explicacion: [
      "Muestra versiones",
      "Ayuda a analizar binarios"
    ],
    categoria: "windows"
  },
  {
    titulo: "Virtual Map (Windows)",
    descripcion: "Lista secciones mapeadas virtualmente",
    comando: "vol.py -f memoria.raw windows.virtmap.VirtMap",
    explicacion: [
      "Muestra mapeos virtuales",
      "Ayuda a analizar memoria"
    ],
    categoria: "windows"
  }
]; 