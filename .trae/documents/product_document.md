# Blog de Habilidades Comunicativas - Documento de Producto

## Descripción General
Blog interactivo y moderno para presentar las evidencias del curso de Habilidades Comunicativas, diseñado para ser publicado en GitHub Pages.

## Objetivos del Proyecto
- Crear una plataforma web atractiva y funcional para presentar las evidencias del curso
- Implementar una interfaz moderna y responsive que funcione en todos los dispositivos
- Facilitar la navegación entre las diferentes evidencias del curso
- Optimizar la experiencia del usuario con elementos interactivos y visuales atractivos

## Funcionalidades Principales

### 1. Página de Inicio (Home)
- Presentación del blog y su propósito educativo
- Diseño atractivo con elementos visuales modernos
- Botones de navegación claros a las diferentes secciones

### 2. Presentación del Equipo
- Imagen profesional del estudiante
- Nombre: Manuel Jeronimo Marzola Medina
- Rol: Desarrollador Full-Stack del proyecto
- Frase representativa sobre la experiencia en el curso

### 3. Evidencias del Curso
- **Guion del Podcast**: Visualizador PDF moderno y responsive
- **Podcast Producido**: Reproductor de audio con controles intuitivos
- **Póster Científico**: Visualizador de imagen con capacidad de zoom

### 4. Video Tutorial
- Reproductor de video embebido (YouTube/Vimeo)
- Explicación de navegación del blog (máximo 5 minutos)
- Guía sobre la experiencia de aprendizaje

### 5. Navegación y Funcionalidad
- Menú de navegación sticky y responsive
- Transiciones suaves entre secciones
- Botones de acción claros y accesibles
- Optimización para dispositivos móviles

## Requisitos Técnicos

### Stack Tecnológico
- **Frontend**: React 18 con TypeScript
- **Estilos**: Tailwind CSS para diseño moderno y responsive
- **Build Tool**: Vite para desarrollo rápido y optimización
- **Deployment**: GitHub Pages para hosting gratuito
- **Iconos**: Lucide React para iconos modernos
- **Componentes UI**: Componentes personalizados con animaciones

### Estructura del Proyecto
```
src/
├── components/          # Componentes reutilizables
│   ├── Layout/         # Header, Footer, Navigation
│   ├── UI/             # Botones, Cards, Modals
│   └── Media/          # Visualizadores de PDF, Audio, Video
├── pages/              # Páginas principales
│   ├── Home/           # Página de inicio
│   ├── Team/           # Presentación del equipo
│   ├── Evidence/       # Páginas de evidencias
│   └── Tutorial/       # Video tutorial
├── hooks/              # Hooks personalizados
├── utils/              # Funciones auxiliares
└── assets/             # Recursos estáticos
```

### Características de Diseño
- **Colores**: Paleta moderna con tonos profesionales (azules, grises, blancos)
- **Tipografía**: Fuentes modernas y legibles (Inter, system-ui)
- **Animaciones**: Transiciones suaves y efectos hover
- **Responsive**: Mobile-first con breakpoints para tablet y desktop
- **Accesibilidad**: Cumplimiento con estándares WCAG 2.1

### Optimización de Multimedia
- **PDF**: Visualización embebida con controles de navegación
- **Audio**: Reproductor personalizado con waveform visual
- **Imágenes**: Optimización con lazy loading y zoom functionality
- **Video**: Integración con plataformas de streaming

## Flujo de Usuario
1. Usuario accede al blog a través de GitHub Pages
2. Visualiza la página de inicio con información del curso
3. Navega a través del menú para explorar las evidencias
4. Interactúa con los elementos multimedia (PDF, audio, imagen, video)
5. Accede al video tutorial para entender la navegación
6. Puede compartir el blog con otros estudiantes o profesores

## Métricas de Éxito
- Tiempo de carga inferior a 3 segundos
- Compatibilidad con navegadores modernos (Chrome, Firefox, Safari, Edge)
- Responsive en dispositivos móviles (320px - 1440px)
- Accesibilidad para usuarios con discapacidades
- Interfaz intuitiva y fácil de navegar

## Entregables
1. Blog completamente funcional desplegado en GitHub Pages
2. Código fuente bien documentado y estructurado
3. Archivos multimedia optimizados y correctamente integrados
4. Video tutorial explicando la navegación del blog
5. Documentación de usuario y técnica

## Fechas de Entrega
- **Fase 1**: Estructura base y navegación (2 días)
- **Fase 2**: Integración de contenido multimedia (2 días)
- **Fase 3**: Optimización y testing (1 día)
- **Fase 4**: Despliegue y documentación final (1 día)