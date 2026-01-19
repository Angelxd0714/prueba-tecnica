# GitHub Codespaces ♥️ React - Aplicación de Galería de Álbumes

Bienvenido a esta aplicación React con autenticación y galería de álbumes. Una aplicación moderna con interfaz intuitiva y funcionalidades completas.

## 📋 Características Implementadas

### ✅ Autenticación
- **Sistema de Login** con credenciales hardcodeadas
  - Usuario: `admin`
  - Contraseña: `1234`
- Validación de credenciales
- Almacenamiento de usuario en localStorage
- Botón "Cerrar Sesión" para logout
- Contexto global de autenticación con `AuthProvider`

### ✅ Galería de Álbumes
- Consume datos de la API: `https://jsonplaceholder.typicode.com/albums`
- Muestra 100 álbumes con información estructurada:
  - ID del álbum
  - Título del álbum
  - Usuario propietario
  - Cantidad de fotos (simulada)
- Botón "Cargar Álbumes" para obtener datos
- Indicador de carga con spinner

### ✅ Paginación
- Muestra **10 álbumes por página**
- Navegación con botones "Anterior" y "Siguiente"
- Información de página actual (Ej: "Página 1 de 10")
- Muestra rango de álbumes mostrados (Ej: "Mostrando 1-10 de 100")
- Botones deshabilitados en primera/última página

### ✅ Interfaz Visual
- Diseño responsive y moderno
- Grid layout con espaciado uniforme (gap: 50px)
- Tarjetas de álbumes con efectos hover
- Barra superior con información del usuario
- Botón de logout en la esquina superior derecha
- Fuente Google Fonts "Poppins" en toda la aplicación
- Gradientes de color consistentes (púrpura/azul)

## 🗂️ Estructura del Proyecto

```
src/
├── components/
│   ├── Login.jsx          # Componente de autenticación
│   ├── Albums.jsx         # Componente principal de galería
│   └── Album.jsx          # Componente de tarjeta individual
├── context/
│   └── AuthContext.jsx    # Contexto global de autenticación
├── services/
│   └── albumService.js    # Servicio para consumir API de álbumes
├── styles/
│   ├── Login.css          # Estilos del login
│   ├── Albums.css         # Estilos de la galería
│   └── Album.css          # Estilos de las tarjetas
├── App.jsx                # Componente raíz
├── App.css                # Estilos globales
├── index.jsx              # Punto de entrada
└── index.css              # Estilos base
```

## 🚀 Flujo de la Aplicación

1. **Inicio** → Usuario ve pantalla de login
2. **Autenticación** → Inicia sesión con admin/1234
3. **Galería** → Se muestra la página de álbumes
4. **Carga de datos** → Presiona "Cargar Álbumes" para obtener datos de la API
5. **Navegación** → Usa los botones de paginación para explorar los 100 álbumes
6. **Logout** → Presiona "Cerrar Sesión" para volver al login

## 📱 Funcionalidades Técnicas

- **Context API** para manejo global de autenticación
- **Fetch API** para consumo de datos externos
- **Hooks personalizados** `useAuth()` para acceso a autenticación
- **Componentes reutilizables** (Album, Albums, Login)
- **Paginación manual** implementada con estado local
- **Manejo de errores** en consumo de API
- **Responsive design** adaptable a todos los dispositivos

## 💻 Scripts Disponibles

### `npm start`
Inicia el servidor de desarrollo en http://localhost:3000/

### `npm run build`
Construye la aplicación para producción

### `npm test`
Ejecuta los tests en modo watch

## 🎨 Paleta de Colores

- **Gradiente Principal**: `#667eea` a `#764ba2` (púrpura/azul)
- **Fondo**: Gradiente gris claro
- **Texto Primario**: `#333`
- **Texto Secundario**: `#666`
- **Error**: `#c33`

## 📦 Dependencias Principales

- **React 18+**: Framework de UI
- **Vite**: Bundler y dev server
- **Google Fonts Poppins**: Tipografía

---

Este proyecto fue construido con ♥️ usando React y Vite en GitHub Codespaces.
