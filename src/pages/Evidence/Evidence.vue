<template>
  <div class="min-h-screen py-20 px-6 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-4000"></div>
    </div>

    <!-- Floating Particles -->
    <div class="absolute inset-0 z-0">
      <div class="floating-particle absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
      <div class="floating-particle absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-50 animation-delay-1000"></div>
      <div class="floating-particle absolute top-1/3 right-1/3 w-4 h-4 bg-pink-400 rounded-full opacity-30 animation-delay-2000"></div>
      <div class="floating-particle absolute bottom-1/4 left-1/3 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animation-delay-3000"></div>
    </div>

    <div class="container mx-auto max-w-6xl relative z-10">
      <!-- Header -->
      <div class="text-center mb-16 animate-fade-in">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Evidencias del Curso
          </span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Explora las evidencias y recursos producidos durante el curso de Habilidades Comunicativas.
          Cada elemento representa un aprendizaje significativo en el desarrollo de competencias comunicativas.
        </p>
      </div>

      <!-- Evidence Grid -->
      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        <!-- Podcast Script -->
        <div class="evidence-card group animate-fade-in-up">
          <div class="evidence-icon bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/50">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Guion del Podcast</h3>
          <p class="text-gray-300 mb-8 font-light leading-relaxed">
            Documento estructurado que contiene la planificación detallada del podcast, incluyendo introducción, 
            desarrollo de temas y cierre, con el objetivo de comunicar información de manera efectiva y engaging.
          </p>
          <button 
            @click="openModal('script')"
            class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 font-semibold group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span class="relative z-10 flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
              </svg>
              Ver Guion
            </span>
          </button>
        </div>

        <!-- Podcast Audio -->
        <div class="evidence-card group animate-fade-in-up animation-delay-200">
          <div class="evidence-icon bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg shadow-purple-500/50">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">Podcast Producido</h3>
          <p class="text-gray-300 mb-8 font-light leading-relaxed">
            Producción audio completa que demuestra habilidades de comunicación oral, modulación de voz, 
            y estructura narrativa para transmitir información de forma clara y profesional.
          </p>
          <button 
            @click="openModal('audio')"
            class="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-2xl hover:shadow-xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 font-semibold group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span class="relative z-10 flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd"></path>
              </svg>
              Escuchar Podcast
            </span>
          </button>
        </div>

        <!-- Scientific Poster -->
        <div class="evidence-card group animate-fade-in-up animation-delay-400">
          <div class="evidence-icon bg-gradient-to-br from-green-500 to-green-700 shadow-lg shadow-green-500/50">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">Póster Científico</h3>
          <p class="text-gray-300 mb-8 font-light leading-relaxed">
            Presentación visual que sintetiza información investigativa de manera clara y atractiva, 
            utilizando principios de diseño para comunicar datos complejos de forma accesible.
          </p>
          <button 
            @click="openModal('poster')"
            class="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-2xl hover:shadow-xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 font-semibold group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span class="relative z-10 flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
              </svg>
              Ver Póster
            </span>
          </button>
        </div>
      </div>

      <!-- Additional Information -->
      <div class="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 animate-fade-in-up animation-delay-600">
        <h3 class="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          ¿Cómo usar estas evidencias?
        </h3>
        <p class="text-gray-300 text-lg mb-8 font-light leading-relaxed">
          Cada evidencia demuestra diferentes aspectos del aprendizaje en comunicación. 
          Haz clic en los botones para explorar el contenido en detalle.
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <div class="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div class="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
            <span class="text-sm font-semibold text-blue-200 group-hover:text-white transition-colors">Planificación</span>
          </div>
          <div class="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div class="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-pulse animation-delay-200"></div>
            <span class="text-sm font-semibold text-purple-200 group-hover:text-white transition-colors">Producción</span>
          </div>
          <div class="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div class="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse animation-delay-400"></div>
            <span class="text-sm font-semibold text-green-200 group-hover:text-white transition-colors">Visualización</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <!-- Podcast Script Modal -->
    <div v-if="modalOpen === 'script'" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div class="bg-white/10 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/20 shadow-2xl">
        <div class="flex items-center justify-between p-8 border-b border-white/20">
          <h3 class="text-3xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Guion del Podcast
          </h3>
          <button 
            @click="closeModal"
            class="text-white/70 hover:text-white text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300"
          >
            ×
          </button>
        </div>
        <div class="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div class="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h4 class="font-semibold text-white mb-4 text-lg flex items-center">
              <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
              Resumen del Contenido:
            </h4>
            <p class="text-gray-300 mb-6 font-light leading-relaxed">
              El guion presenta una estructura narrativa bien definida que incluye:
            </p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                <span class="font-light">Introducción engaging que captura la atención del auditorio</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-400 rounded-full mt-2 animate-pulse animation-delay-200"></div>
                <span class="font-light">Desarrollo de temas con ejemplos y datos relevantes</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-pink-400 rounded-full mt-2 animate-pulse animation-delay-400"></div>
                <span class="font-light">Transiciones suaves entre secciones</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-indigo-400 rounded-full mt-2 animate-pulse animation-delay-600"></div>
                <span class="font-light">Cierre con llamada a la acción y reflexión final</span>
              </li>
            </ul>
          </div>
          <div class="bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
            <p class="text-blue-200 font-light">
              <strong class="text-blue-300">Nota:</strong> El archivo PDF completo está disponible para descarga. 
              El guion demuestra habilidades de redacción, estructura narrativa y pensamiento crítico en la selección de contenido.
            </p>
          </div>
        </div>
        <div class="p-8 border-t border-white/20 bg-white/5">
          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              href="/multimedia/Guion_del_podcast.pdf" 
              target="_blank"
              class="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 text-center font-semibold group relative overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span class="relative z-10 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
                Descargar PDF
              </span>
            </a>
            <button 
              @click="closeModal"
              class="flex-1 bg-white/10 text-white py-4 px-6 rounded-2xl hover:bg-white/20 hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm border border-white/20"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Podcast Audio Modal -->
    <div v-if="modalOpen === 'audio'" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div class="bg-white/10 backdrop-blur-xl rounded-3xl max-w-2xl w-full border border-white/20 shadow-2xl">
        <div class="flex items-center justify-between p-8 border-b border-white/20">
          <h3 class="text-3xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Podcast Producido
          </h3>
          <button 
            @click="closeModal"
            class="text-white/70 hover:text-white text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300"
          >
            ×
          </button>
        </div>
        <div class="p-8">
          <div class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h4 class="font-semibold text-white mb-4 text-lg flex items-center">
              <svg class="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
              Descripción del Podcast:
            </h4>
            <p class="text-gray-300 mb-6 font-light leading-relaxed">
              Producción audio que demuestra habilidades de comunicación oral incluyendo:
            </p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
                <span class="font-light">Modulación de voz apropiada</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-pink-400 rounded-full mt-2 animate-pulse animation-delay-200"></div>
                <span class="font-light">Ritmo y entonación efectivos</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 animate-pulse animation-delay-400"></div>
                <span class="font-light">Claridad en la pronunciación</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-indigo-400 rounded-full mt-2 animate-pulse animation-delay-600"></div>
                <span class="font-light">Uso estratégico de pausas</span>
              </li>
            </ul>
          </div>
          
          <!-- Audio Player -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <audio controls class="w-full rounded-lg">
              <source src="/multimedia/Podcast_producido.mp3" type="audio/mpeg">
              Tu navegador no soporta el elemento de audio.
            </audio>
            <p class="text-gray-400 text-sm text-center mt-4 font-light">Use los controles para reproducir el podcast</p>
          </div>
        </div>
        <div class="p-8 border-t border-white/20 bg-white/5">
          <button 
            @click="closeModal"
            class="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-2xl hover:shadow-xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>

    <!-- Scientific Poster Modal -->
    <div v-if="modalOpen === 'poster'" class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div class="bg-white/10 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/20 shadow-2xl">
        <div class="flex items-center justify-between p-8 border-b border-white/20">
          <h3 class="text-3xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Póster Científico
          </h3>
          <button 
            @click="closeModal"
            class="text-white/70 hover:text-white text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300"
          >
            ×
          </button>
        </div>
        <div class="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div class="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h4 class="font-semibold text-white mb-4 text-lg flex items-center">
              <svg class="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
              Resumen del Póster:
            </h4>
            <p class="text-gray-300 mb-6 font-light leading-relaxed">
              El póster presenta información investigativa de manera visual y estructurada:
            </p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                <span class="font-light">Diseño limpio y profesional</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 animate-pulse animation-delay-200"></div>
                <span class="font-light">Uso efectivo de colores y tipografía</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-teal-400 rounded-full mt-2 animate-pulse animation-delay-400"></div>
                <span class="font-light">Organización lógica de la información</span>
              </li>
              <li class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse animation-delay-600"></div>
                <span class="font-light">Elementos visuales que facilitan la comprensión</span>
              </li>
            </ul>
          </div>
          
          <!-- Image Viewer -->
          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <img 
              src="/multimedia/Póster_científico.png" 
              alt="Póster Científico"
              class="w-full h-auto rounded-2xl shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
              @click="openImageInNewTab"
            >
            <p class="text-gray-400 text-sm text-center mt-6 font-light">
              Haz clic en la imagen para verla en tamaño completo
            </p>
          </div>
        </div>
        <div class="p-8 border-t border-white/20 bg-white/5">
          <div class="flex flex-col sm:flex-row gap-4">
            <button 
              @click="openImageInNewTab"
              class="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-2xl hover:shadow-xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 font-semibold group relative overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span class="relative z-10">Ver en Tamaño Completo</span>
            </button>
            <button 
              @click="closeModal"
              class="flex-1 bg-white/10 text-white py-4 px-6 rounded-2xl hover:bg-white/20 hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm border border-white/20"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const modalOpen = ref(null)

const openModal = (type) => {
  modalOpen.value = type
}

const closeModal = () => {
  modalOpen.value = null
}

const openImageInNewTab = () => {
  window.open('/multimedia/Póster_científico.png', '_blank')
}
</script>

<style scoped>
.evidence-card {
  @apply bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 text-center border border-white/20 hover:border-white/40;
}

.evidence-icon {
  @apply w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 transition-transform duration-300;
}

@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

.floating-particle {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

audio {
  filter: invert(1) hue-rotate(180deg) brightness(1.2);
}

audio::-webkit-media-controls-panel {
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
  backdrop-filter: blur(10px);
}
</style>