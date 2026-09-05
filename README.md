# 🚀 DarkMaxDev — Personal Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Demo-Live_Preview-blue?style=for-the-badge&logo=cloudflare)](https://jhosep-ac.pages.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Motion](https://img.shields.io/badge/Motion-Framer_Motion-F08?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Portafolio web interactivo y moderno desarrollado con React, Vite, Motion y OGL.**

[Ver Demo en Vivo](https://new-portafolio.onrender.com/)

</div>

---

## 📖 Descripción

Portafolio profesional de **DarkMaxDev**, Soy un desarrollador desafiante que encuentra inspiración entre líneas de código y algoritmos la motivación para seguir la carrera programación. Cuando no estoy inmerso en la programación, disfruto del tiempo con la familia, jugar videojuegos, además, estoy firmemente en mantener un equilibrio entre mente, energía y cuerpo. Además, soy un ávido lector, principalmente en las historias de drama y suspenso. pero igual quiero tener crecimiento personal. En mis redes sociales, no comparto muchas cosas ya que me gusta mantener un perfil normal en mi vida, pero igual buscando una forma de generar nuevas ideas y proyectos, estoy disponible para conectar con otros apasionados del desarrollo de software..

---

## ✨ Características Principales

- 🌐 **Internacionalización (i18n)**: Soporte completo en Español e Inglés con detección automática del navegador (`i18next`).
- 🌗 **Modo Oscuro / Claro**: Selector de temas dinámico con persistencia en `localStorage` y soporte para preferencias del sistema.
- 🎨 **Animaciones Fluidas & Microinteracciones**: Desarrollado con `Motion` (Framer Motion) optimizado mediante `LazyMotion`, botones magnéticos y transiciones de scroll.
- 🌌 **Fondo Interactivo WebGL**: Partículas y grilla interactiva renderizadas con alto rendimiento utilizando `OGL`.
- 💻 **Terminal Interactiva**: Componente interactivo en la sección Hero simulando una interfaz de línea de comandos.
- 📱 **Diseño Totalmente Responsive**: Adaptado a todo tipo de pantallas y dispositivos móviles.
- 📄 **Descarga y Visualización de CV**: Integración con `react-pdf` y `pdfjs-dist` para previsualización y descarga directa del currículum.
- ⚡ **Alto Rendimiento**: Construido sobre **Vite 7** y **React 19** para tiempos de carga y respuesta ultrarrápidos.

---

## 🛠️ Tecnologías y Herramientas

### Frontend Core
- **[React 19](https://react.dev/)**: Biblioteca principal de interfaz de usuario.
- **[Vite 8](https://vite.dev/)**: Entorno de desarrollo y empaquetador ultrarrápido.
- **[React Router v7](https://reactrouter.com/)**: Enrutamiento declarativo para SPAs.

### Estilos y Animaciones
- **[Motion](https://motion.dev/)**: Animaciones y transiciones avanzadas.
- **[OGL](https://github.com/oframe/ogl)**: Motor WebGL ligero para efectos visuales y shaders.
- **[Lucide React](https://lucide.dev/) & [Iconify](https://icon-sets.iconify.design/)**: Conjunto completo y personalizable de iconos vectoriales.
- **CSS3 Moderno**: Variables CSS (Custom Properties), soporte de media queries y diseño responsive.

### Internacionalización & Utilidades
- **[i18next](https://www.i18next.com/)** & **react-i18next**: Gestión y traducción del contenido.
- **[react-pdf](https://react-pdf.org/)**: Visualización y renderizado de documentos PDF.

---

## 📁 Estructura del Proyecto

```plaintext
my_portfolio/
├── public/                # Archivos estáticos y favicons
├── src/
│   ├── assets/            # Imágenes, logos y recursos multimedia
│   ├── components/        # Componentes modulares
│   │   ├── common/        # Componentes compartidos (Navbar, Loader, Terminal, Grid, Particles, etc.)
│   │   ├── contact/       # Sección de contacto
│   │   ├── education/     # Sección de educación
│   │   ├── experience/    # Sección de experiencia laboral
│   │   ├── footer/        # Pie de página
│   │   ├── projects/      # Sección y tarjetas de proyectos
│   │   └── skills/        # Sección de habilidades técnicas
│   ├── context/           # React Context (AppReady, ThemeContext)
│   ├── data/              # Datos estáticos (proyectos, experiencia, educación)
│   ├── hooks/             # Custom Hooks (useLoading, etc.)
│   ├── i18n/              # Configuración y archivos de traducción (ES / EN)
│   ├── pages/             # Vistas de la aplicación (Home)
│   ├── styles/            # Hojas de estilo CSS por sección y globales
│   ├── utils/             # Funciones de ayuda y variantes de animación
│   ├── App.jsx            # Componente raíz con proveedores de contexto
│   └── main.jsx           # Punto de entrada de la aplicación
├── index.html             # Plantilla HTML principal y metadatos SEO
├── package.json           # Dependencias y scripts de Node.js
└── vite.config.js         # Configuración de Vite
```

---

## 🚀 Instalación y Puesta en Marcha

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

### Prerrequisitos
- **Node.js** (versión 18 o superior recomendada)
- **npm** o gestor de paquetes de tu preferencia (yarn, pnpm)

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/DarkMaxDev/New-Portafolio.git
   cd my-portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver el resultado.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

5. **Previsualizar la compilación de producción:**
   ```bash
   npm run preview
   ```

---

## 📬 Contacto

- **Nombre**: Gustavo Maximiliano
- **Sitio Web**: [https://new-portafolio.onrender.com/](https://new-portafolio.onrender.com/)
- **GitHub**: [DarkMaxDev](https://github.com/DarkMaxDev)
- **LinkedIn**: [Gustavo Maximiliano](mx.linkedin.com/in/gustavo-maximiliano-aguila-b641462a2)

---