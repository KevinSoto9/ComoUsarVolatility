export const ejemplos = [
  {
    titulo: "Información del Sistema",
    descripcion:
      "Obtener información básica sobre el sistema operativo y la memoria",
    comando: "vol.py -f memoria.raw windows.info",
    explicacion: [
      "Este comando muestra información básica sobre el sistema operativo y la memoria",
      "Incluye detalles como la versión del sistema operativo, la arquitectura y el tipo de memoria",
      "Es útil para verificar que la imagen de memoria es compatible con Volatility",
    ],
    resultado: `Volatility Foundation Volatility Framework 3.0.0
Windows 10 19045 64-bit
Kernel base: 0xfffff80000000000
Pagefile base: 0xfffff90000000000
Os version: 10.0.19045
Build: 19045
Architecture: x64
Memory Size: 16 GB
`,
  },
  {
    titulo: "Listar Procesos",
    descripcion:
      "Ver todos los procesos que estaban ejecutándose en el sistema",
    comando: "vol.py -f memoria.raw windows.pslist",
    explicacion: [
      "Muestra una lista de todos los procesos activos en el momento de la captura",
      "Incluye información como el PID, el nombre del proceso y el tiempo de inicio",
      "Útil para identificar procesos sospechosos o maliciosos",
    ],
    resultado: `Offset (V)  Name                   PID   PPID   Thds     Hnds    Sess  Wow64  Start                          Exit
-------------- -------------------- ------ ------ ------ -------- ------ ------ ------------------------------ ------------------------------
0x8b717f20     System                   4      0      136      0      0     No     2025-03-30 18:04:23            2025-03-30 18:45:01
0x8b728620     smss.exe                 500    4      2        14     0     No     2025-03-30 18:04:25            -
0x8b71aaf0     csrss.exe                650    500    12       24     1     No     2025-03-30 18:04:27            -
0x8b733170     winlogon.exe             700    650    10       30     1     No     2025-03-30 18:04:29            -
0x8b74f780     explorer.exe             1234   700    75       100    1     Yes    2025-03-30 18:10:00            -`,
  },
  {
    titulo: "Ver Conexiones de Red",
    descripcion: "Mostrar las conexiones de red activas",
    comando: "vol.py -f memoria.raw windows.netscan",
    explicacion: [
      "Lista todas las conexiones de red activas en el momento de la captura",
      "Muestra direcciones IP locales y remotas, puertos y estados de conexión",
      "Ayuda a identificar conexiones sospechosas o malware que se comunica con servidores remotos",
    ],
    resultado: `Offset (V)  Proto    LocalAddr    LocalPort    RemoteAddr   RemotePort   State       PID   Owner
-------------- -------- ------------ ----------- ------------- ------------ ----------- ------ -------------
0x8b730030     TCP      192.168.1.5   443         93.184.216.34 80           ESTABLISHED  1234   chrome.exe
0x8b731f40     UDP      192.168.1.5   12345       0.0.0.0       0            LISTENING   2345   explorer.exe
0x8b7325c0     TCP      192.168.1.5   135         93.184.216.34 443          TIME_WAIT   5678   svchost.exe`,
  },
  {
    titulo: "Ver DLLs Cargadas",
    descripcion: "Mostrar las DLLs cargadas por cada proceso",
    comando: "vol.py -f memoria.raw windows.dlllist",
    explicacion: [
      "Muestra todas las DLLs cargadas por cada proceso",
      "Útil para identificar malware que inyecta DLLs maliciosas",
      "Ayuda a detectar técnicas de evasión de detección",
    ],
    resultado: `Process: explorer.exe Pid: 1234
Base       Size       LoadCount  Path
0x00000000 0x00000000 0x00000000 C:\\Windows\\System32\\kernel32.dll
0x00000000 0x00000000 0x00000000 C:\\Windows\\System32\\user32.dll
0x00000000 0x00000000 0x00000000 C:\\Windows\\System32\\gdi32.dll`,
  },
  {
    titulo: "Ver Handles de Procesos",
    descripcion: "Mostrar los handles abiertos por cada proceso",
    comando: "vol.py -f memoria.raw windows.handles",
    explicacion: [
      "Lista todos los handles abiertos por cada proceso",
      "Ayuda a identificar recursos que los procesos están utilizando",
      "Útil para detectar malware que manipula handles del sistema",
    ],
    resultado: `Process: explorer.exe Pid: 1234
Handle     Type             Name
0x00000000 File             C:\\Windows\\System32\\kernel32.dll
0x00000001 Registry         SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run
0x00000002 File             C:\\Users\\User\\Documents\\suspicious.exe`,
  },
  {
    titulo: "Ver Variables de Entorno",
    descripcion: "Mostrar las variables de entorno de cada proceso",
    comando: "vol.py -f memoria.raw windows.envars",
    explicacion: [
      "Muestra las variables de entorno de cada proceso",
      "Útil para identificar configuraciones maliciosas",
      "Ayuda a detectar malware que modifica variables de entorno",
    ],
    resultado: `Process: explorer.exe Pid: 1234
Variable                   Value
PATH                      C:\\Windows\\System32
TEMP                      C:\\Users\\User\\AppData\\Local\\Temp
USERNAME                  User`,
  },
  {
    titulo: "Ver Módulos del Kernel",
    descripcion: "Mostrar los módulos cargados en el kernel",
    comando: "vol.py -f memoria.raw windows.modules",
    explicacion: [
      "Lista todos los módulos cargados en el kernel",
      "Ayuda a identificar drivers maliciosos",
      "Útil para detectar rootkits",
    ],
    resultado: `Base       Size       Name
0xfffff800 0x00000000 ntoskrnl.exe
0xfffff900 0x00000000 hal.dll
0xfffff800 0x00000000 ksecdd.sys`,
  },
  {
    titulo: "Ver Servicios",
    descripcion: "Mostrar los servicios del sistema",
    comando: "vol.py -f memoria.raw windows.svcscan",
    explicacion: [
      "Muestra todos los servicios del sistema",
      "Ayuda a identificar servicios maliciosos",
      "Útil para detectar malware que se instala como servicio",
    ],
    resultado: `Offset: 0x8b717f20
Order: 1
Process ID: 1234
Service Name: MalwareSvc
Status: Running`,
  },
  {
    titulo: "Ver Archivos Abiertos",
    descripcion: "Mostrar los archivos abiertos por cada proceso",
    comando: "vol.py -f memoria.raw windows.filescan",
    explicacion: [
      "Muestra todos los archivos abiertos por cada proceso",
      "Ayuda a identificar archivos maliciosos",
      "Útil para detectar malware que manipula archivos del sistema",
    ],
    resultado: `Offset     Ptr      #Ptr   Handle Access Name
0x00000000 0x00000000 0x00000000 0x00000000 0x00000000 C:\\Windows\\System32\\kernel32.dll
0x00000001 0x00000000 0x00000000 0x00000000 0x00000001 C:\\Users\\User\\Documents\\malware.exe`,
  },
  {
    titulo: "Ver Registro de Windows",
    descripcion: "Mostrar las claves del registro de Windows",
    comando: "vol.py -f memoria.raw windows.registry.printkey",
    explicacion: [
      "Muestra las claves del registro de Windows",
      "Ayuda a identificar modificaciones maliciosas",
      "Útil para detectar malware que modifica el registro",
    ],
    resultado: `Key: SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run
Last updated: 2025-03-30 18:15:00
Value Name: SuspiciousApp
Data: C:\\Users\\User\\AppData\\Local\\malware.exe`,
  },
  {
    titulo: "Ver Módulos de Memoria",
    descripcion: "Mostrar los módulos de memoria",
    comando: "vol.py -f memoria.raw windows.modscan",
    explicacion: [
      "Lista todos los módulos de memoria",
      "Ayuda a identificar módulos maliciosos",
      "Útil para detectar malware que inyecta código en memoria",
    ],
    resultado: `Base       Size       Name
0xfffff800 0x00000000 ntoskrnl.exe
0xfffff900 0x00000000 injected_module.sys`,
  },
];
