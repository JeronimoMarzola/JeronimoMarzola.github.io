# Blog de Habilidades Comunicativas

Un blog interactivo y moderno diseñado para presentar las evidencias del curso de Habilidades Comunicativas de la Universidad Central del Norte.

## 🚀 Características

- **Diseño Moderno y Responsivo**: Interfaz adaptativa para todos los dispositivos
- **Navegación Intuitiva**: Menú claro y accesible desde cualquier página
- **Contenido Multimedia**: Integración de PDF, audio e imágenes
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Optimización de Rendimiento**: Carga rápida y experiencia fluida

## 📋 Contenido del Blog

### 1. Página de Inicio
- Presentación del curso de Habilidades Comunicativas
- Objetivos educativos del blog
- Acceso rápido a las principales secciones

### 2. Presentación del Equipo
- Perfil profesional del estudiante
- Competencias desarrolladas
- Experiencia en el curso

### 3. Evidencias del Curso
- **Guion del Podcast**: Documento PDF con estructura narrativa
- **Podcast Producido**: Audio completo con contenido educativo
- **Póster Científico**: Presentación visual de investigación

### 4. Video Tutorial
- Guía de navegación paso a paso
- Explicación de funcionalidades
- Consejos para aprovechar el contenido

## 🛠️ Tecnologías Utilizadas

- **Vue.js 3**: Framework progresivo de JavaScript
- **Vue Router**: Sistema de navegación SPA
- **Tailwind CSS**: Framework de utilidades para estilos
- **Vite**: Herramienta de construcción rápida
- **TypeScript**: Tipado estático para mayor seguridad

## 📦 Instalación

### Requisitos Previos
- Node.js (versión 18 o superior)
- npm o pnpm

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/JeronimoMarzola/JeronimoMarzola.github.io.git
   cd JeronimoMarzola.github.io
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🚀 Despliegue

### GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages mediante GitHub Actions.

1. **Push a la rama main**
   ```bash
   git add .
   git commit -m "Actualización del blog"
   git push origin main
   ```

2. **El despliegue se realizará automáticamente**
   - GitHub Actions construirá el proyecto
   - Se desplegará en: `https://jeronimomarzola.github.io`

### Despliegue Manual

```bash
npm run build
npm run deploy
```

## 📁 Estructura del Proyecto

```
habilidades-comunicativas-blog/
├── public/                          # Archivos estáticos
│   ├── multimedia/                  # Archivos multimedia
│   │   ├── Guion_del_podcast.pdf
│   │   ├── Podcast_producido.mp3
│   │   └── Póster_científico.png
├── src/
│   ├── components/                  # Componentes reutilizables
│   ├── pages/                       # Páginas principales
│   ├── router/                      # Configuración de rutas
│   └── main.js                      # Punto de entrada
├── .github/workflows/               # CI/CD
├── package.json                     # Dependencias y scripts
└── README.md                        # Documentación
```

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... más tonos
  }
}
```

### Contenido
El contenido de las páginas se puede actualizar directamente en los archivos `.vue` correspondientes.

## 📱 Responsive Design

El blog está optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Pantallas grandes**: 1440px+

## 🔍 SEO y Accesibilidad

- Meta tags optimizados
- Estructura semántica HTML
- Navegación por teclado
- Contraste de colores WCAG 2.1
- Imágenes con atributos alt

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es parte del trabajo académico de la Universidad Central del Norte.

## 📞 Contacto

**Estudiante:** Manuel Jeronimo Marzola Medina  
**Curso:** Habilidades Comunicativas B2A  
**Universidad:** Universidad Central del Norte  

## 🙏 Agradecimientos

- Universidad Central del Norte
- Profesor del curso de Habilidades Comunicativas
- Compañeros del curso

---

**⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!**