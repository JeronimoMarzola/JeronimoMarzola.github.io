<template>
  <div class="min-h-screen py-20 px-6">
    <div class="container mx-auto max-w-5xl">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Video Tutorial de
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Navegación
          </span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Aprende cómo navegar por el blog, acceder a las evidencias y aprovechar al máximo 
          todos los recursos disponibles en este espacio educativo.
        </p>
      </div>

      <!-- Video Section -->
      <div class="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
        <div class="p-8">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Guía Completa de Navegación</h2>
            <p class="text-gray-600">
              Este video tutorial te mostrará paso a paso cómo usar todas las funcionalidades del blog.
              Duración aproximada: 4-5 minutos.
            </p>
          </div>

          <!-- Video Player -->
          <div class="bg-gray-900 rounded-xl overflow-hidden mb-8">
            <div class="aspect-video bg-gray-800 flex items-center justify-center">
              <!-- Placeholder for YouTube/Vimeo embed -->
              <div class="text-center text-white">
                <div class="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Video Tutorial</h3>
                <p class="text-gray-300 mb-4">
                  Aquí se incrustará el video tutorial desde YouTube o Vimeo
                </p>
                <div class="bg-gray-700 rounded-lg p-4 max-w-md mx-auto">
                  <p class="text-sm text-gray-300 mb-2">
                    <strong>Instrucciones:</strong> Sube tu video tutorial a YouTube o Vimeo 
                    y reemplaza este placeholder con el código de incrustación.
                  </p>
                  <div class="text-xs text-gray-400">
                    <p>Ejemplo de código:</p>
                    <code class="block bg-gray-800 p-2 rounded mt-2 text-left">
                      &lt;iframe width="560" height="315" <br>
                      &nbsp;&nbsp;src="https://www.youtube.com/embed/TU_VIDEO_ID" <br>
                      &nbsp;&nbsp;title="Tutorial de Navegación" <br>
                      &nbsp;&nbsp;frameborder="0" <br>
                      &nbsp;&nbsp;allowfullscreen&gt;&lt;/iframe&gt;
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Video Features -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 rounded-lg p-6">
              <h4 class="font-semibold text-blue-900 mb-3">¿Qué aprenderás?</h4>
              <ul class="space-y-2 text-blue-800">
                <li class="flex items-start space-x-2">
                  <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cómo navegar por las diferentes secciones del blog</span>
                </li>
                <li class="flex items-start space-x-2">
                  <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cómo acceder a cada evidencia del curso</span>
                </li>
                <li class="flex items-start space-x-2">
                  <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Consejos para aprovechar al máximo los recursos</span>
                </li>
                <li class="flex items-start space-x-2">
                  <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Experiencia de aprendizaje del curso</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-purple-50 rounded-lg p-6">
              <h4 class="font-semibold text-purple-900 mb-3">Características del Video</h4>
              <ul class="space-y-2 text-purple-800">
                <li class="flex items-start space-x-2">
                  <div class="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Duración optimizada (4-5 minutos)</span>
                </li>
                <li class="flex items-start space-x-2">
                  <div class="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Calidad HD para mejor visualización</span>
                </li>
                <li class="flex items-start space-x-2">
                  <div class="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Narración clara y profesional</span>
                </li>
                <li class="flex items-start space-x-2">
                  <div class="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Subtítulos para accesibilidad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Enlaces Rápidos</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <router-link 
            to="/evidencias"
            class="flex items-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
          >
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-blue-900 mb-1">Ver Evidencias</h4>
              <p class="text-sm text-blue-700">Explora todos los recursos del curso</p>
            </div>
          </router-link>

          <router-link 
            to="/equipo"
            class="flex items-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors group"
          >
            <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-purple-900 mb-1">Conocer al Equipo</h4>
              <p class="text-sm text-purple-700">Descubre más sobre el autor del proyecto</p>
            </div>
          </router-link>

          <a 
            href="https://github.com/JeronimoMarzola/JeronimoMarzola.github.io"
            target="_blank"
            class="flex items-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
          >
            <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-green-900 mb-1">Ver en GitHub</h4>
              <p class="text-sm text-green-700">Accede al código fuente del proyecto</p>
            </div>
          </a>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-6">
          ¿Tienes alguna pregunta sobre el blog o necesitas ayuda para navegar?
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/"
            class="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Volver al Inicio
          </router-link>
          <router-link 
            to="/evidencias"
            class="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            Explorar Evidencias
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
/* Additional styles if needed */
</style>