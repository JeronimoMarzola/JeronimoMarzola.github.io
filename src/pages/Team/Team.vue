<template>
  <div class="min-h-screen py-20 px-6 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>

    <!-- Floating Particles -->
    <div class="absolute inset-0 z-0">
      <div class="floating-particle absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
      <div class="floating-particle absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-50 animation-delay-1000"></div>
      <div class="floating-particle absolute top-1/2 left-3/4 w-2 h-2 bg-pink-400 rounded-full opacity-40 animation-delay-2000"></div>
      <div class="floating-particle absolute bottom-1/4 left-1/3 w-4 h-4 bg-indigo-400 rounded-full opacity-30 animation-delay-3000"></div>
    </div>

    <div class="container mx-auto max-w-4xl relative z-10">
      <!-- Header -->
      <div class="text-center mb-16 animate-fade-in">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Presentación del Equipo
          </span>
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          Conoce al estudiante detrás de este proyecto académico y su experiencia en el curso de Habilidades Comunicativas.
        </p>
      </div>

      <!-- Team Member Card -->
      <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl animate-fade-in-up">
        <div class="md:flex">
          <!-- Image Section -->
          <div class="md:w-1/3 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-8 flex flex-col items-center justify-center relative overflow-hidden">
            <!-- Animated background pattern -->
            <div class="absolute inset-0 opacity-20">
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
              <div class="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            </div>
            
            <div class="relative z-10">
              <div class="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-2xl border border-white/30 transform hover:scale-110 transition-transform duration-300">
                <svg class="w-20 h-20 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="text-center">
                <h3 class="text-3xl font-bold text-white mb-2 animate-fade-in">Manuel Jeronimo</h3>
                <h4 class="text-xl text-blue-100 font-light tracking-wide">Marzola Medina</h4>
                <div class="flex space-x-2 mt-4 justify-center">
                  <div class="w-2 h-2 bg-white rounded-full opacity-75 animate-ping"></div>
                  <div class="w-2 h-2 bg-white rounded-full opacity-50 animate-ping animation-delay-200"></div>
                  <div class="w-2 h-2 bg-white rounded-full opacity-25 animate-ping animation-delay-400"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Content Section -->
          <div class="md:w-2/3 p-8 md:p-12 bg-white/5 backdrop-blur-sm">
            <div class="mb-8 animate-fade-in-up animation-delay-200">
              <h2 class="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sobre el Proyecto
              </h2>
              <p class="text-gray-200 text-lg leading-relaxed mb-8 font-light">
                Este blog representa el trabajo académico individual desarrollado en el curso de Habilidades Comunicativas. 
                Como desarrollador full-stack, he aplicado mis conocimientos en programación web para crear una plataforma 
                interactiva y moderna que presenta las evidencias del curso de manera profesional y accesible.
              </p>
              
              <div class="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                <h4 class="font-semibold text-white mb-4 text-lg">Rol en el Proyecto:</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                    <div class="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
                    <span class="text-blue-100 font-medium group-hover:text-white transition-colors">Desarrollador Frontend</span>
                  </div>
                  <div class="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                    <div class="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-pulse animation-delay-200"></div>
                    <span class="text-purple-100 font-medium group-hover:text-white transition-colors">Diseñador UX/UI</span>
                  </div>
                  <div class="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                    <div class="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full animate-pulse animation-delay-400"></div>
                    <span class="text-pink-100 font-medium group-hover:text-white transition-colors">Desarrollador Backend</span>
                  </div>
                  <div class="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                    <div class="w-3 h-3 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full animate-pulse animation-delay-600"></div>
                    <span class="text-indigo-100 font-medium group-hover:text-white transition-colors">Product Manager</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Experience Quote -->
            <div class="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 animate-fade-in-up animation-delay-400">
              <h4 class="font-semibold text-white mb-4 text-lg flex items-center">
                <svg class="w-5 h-5 mr-2 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                </svg>
                Experiencia del Curso:
              </h4>
              <blockquote class="text-gray-200 italic text-lg leading-relaxed font-light border-l-4 border-purple-400 pl-6">
                "Este curso de Habilidades Comunicativas ha sido fundamental en mi desarrollo académico. 
                Aprender a comunicarme efectivamente no solo mejoró mi desempeño universitario, sino que también 
                me preparó para los desafíos profesionales del futuro. La combinación de teoría y práctica 
                me permitió comprender la importancia de la comunicación clara y empática en todos los aspectos de la vida."
              </blockquote>
              <div class="mt-6 text-right">
                <p class="text-sm text-purple-300 font-medium">— Manuel J. Marzola Medina</p>
              </div>
            </div>

            <!-- Skills and Achievements -->
            <div class="mb-8 animate-fade-in-up animation-delay-600">
              <h4 class="font-semibold text-white mb-6 text-lg flex items-center">
                <svg class="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Competencias Desarrolladas:
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="skill-item group hover:transform hover:scale-105 transition-all duration-300">
                  <div class="flex items-center space-x-4 mb-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-shadow">
                      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="font-semibold text-white text-lg">Lectura Crítica</span>
                  </div>
                  <p class="text-gray-300 text-sm ml-16 font-light">Análisis y comprensión de textos complejos</p>
                </div>
                
                <div class="skill-item group hover:transform hover:scale-105 transition-all duration-300">
                  <div class="flex items-center space-x-4 mb-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="font-semibold text-white text-lg">Redacción Académica</span>
                  </div>
                  <p class="text-gray-300 text-sm ml-16 font-light">Escritura clara y estructurada</p>
                </div>
                
                <div class="skill-item group hover:transform hover:scale-105 transition-all duration-300">
                  <div class="flex items-center space-x-4 mb-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
                      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="font-semibold text-white text-lg">Comunicación Oral</span>
                  </div>
                  <p class="text-gray-300 text-sm ml-16 font-light">Expresión verbal efectiva</p>
                </div>
                
                <div class="skill-item group hover:transform hover:scale-105 transition-all duration-300">
                  <div class="flex items-center space-x-4 mb-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-shadow">
                      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="font-semibold text-white text-lg">Escucha Activa</span>
                  </div>
                  <p class="text-gray-300 text-sm ml-16 font-light">Comprensión empática del mensaje</p>
                </div>
              </div>
            </div>

            <!-- Call to Action -->
            <div class="text-center animate-fade-in-up animation-delay-800">
              <router-link 
                to="/evidencias" 
                class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-bold rounded-2xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group relative overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg class="w-6 h-6 mr-3 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                </svg>
                <span class="relative z-10">Explorar Evidencias del Curso</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
.skill-item {
  @apply p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300;
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

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}
</style>