<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      <!-- Animated particles/blobs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 flex items-center justify-center min-h-screen px-6">
      <div class="text-center max-w-5xl mx-auto">
        <!-- Main Title with Animation -->
        <div class="animate-fade-in-up mb-8">
          <h1 class="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            <span class="block animate-slide-in-left">Bienvenidos al</span>
            <span class="block animate-slide-in-right bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Curso de Habilidades
            </span>
            <span class="block animate-slide-in-left bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Comunicativas
            </span>
          </h1>
        </div>

        <!-- Subtitle with Typewriter Effect -->
        <div class="animate-fade-in-up animation-delay-500 mb-12">
          <div class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <p class="mb-4">Este espacio ha sido diseñado para fortalecer sus competencias de</p>
            <div class="flex flex-wrap justify-center gap-4 text-lg">
              <span class="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-pulse">📖 Lectura</span>
              <span class="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-pulse animation-delay-200">✍️ Escritura</span>
              <span class="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-pulse animation-delay-400">🗣️ Oralidad</span>
              <span class="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-pulse animation-delay-600">👂 Escucha</span>
            </div>
          </div>
        </div>

        <!-- CTA Buttons with Hover Effects -->
        <div class="animate-fade-in-up animation-delay-1000 flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <router-link 
            to="/evidencias" 
            class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
          >
            <span class="relative z-10 flex items-center">
              <svg class="w-6 h-6 mr-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              Explorar Evidencias
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </router-link>
          
          <router-link 
            to="/equipo" 
            class="group relative px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-lg rounded-2xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
          >
            <span class="relative z-10 flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Conocer al Equipo
            </span>
          </router-link>
        </div>

        <!-- Scroll Indicator -->
        <div class="animate-bounce">
          <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section with Parallax -->
    <section class="relative z-10 py-32 px-6">
      <div class="container mx-auto max-w-7xl">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in-up">
            <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Contenido del Blog
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Descubre las herramientas y recursos que hemos preparado para fortalecer tus competencias comunicativas
          </p>
        </div>

        <!-- Feature Cards with 3D Effects -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Podcast Script -->
          <div class="group relative animate-fade-in-up animation-delay-300">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4 text-center">Guion del Podcast</h3>
              <p class="text-gray-300 mb-6 text-center text-sm leading-relaxed">Documento detallado con la estructura narrativa y contenido del podcast educativo.</p>
              <div class="text-center">
                <div class="inline-flex items-center text-blue-400 group-hover:text-cyan-400 transition-colors">
                  <span class="font-medium">Explorar</span>
                  <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Podcast Audio -->
          <div class="group relative animate-fade-in-up animation-delay-500">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4 text-center">Podcast Producido</h3>
              <p class="text-gray-300 mb-6 text-center text-sm leading-relaxed">Audio completo que demuestra habilidades de comunicación oral y modulación.</p>
              <div class="text-center">
                <div class="inline-flex items-center text-purple-400 group-hover:text-pink-400 transition-colors">
                  <span class="font-medium">Escuchar</span>
                  <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Scientific Poster -->
          <div class="group relative animate-fade-in-up animation-delay-700">
            <div class="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4 text-center">Póster Científico</h3>
              <p class="text-gray-300 mb-6 text-center text-sm leading-relaxed">Presentación visual que sintetiza información investigativa de manera clara.</p>
              <div class="text-center">
                <div class="inline-flex items-center text-green-400 group-hover:text-teal-400 transition-colors">
                  <span class="font-medium">Visualizar</span>
                  <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Tutorial Video -->
          <div class="group relative animate-fade-in-up animation-delay-900">
            <div class="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4 text-center">Video Tutorial</h3>
              <p class="text-gray-300 mb-6 text-center text-sm leading-relaxed">Guía visual sobre cómo navegar el blog y acceder a los recursos.</p>
              <div class="text-center">
                <div class="inline-flex items-center text-orange-400 group-hover:text-red-400 transition-colors">
                  <span class="font-medium">Ver Tutorial</span>
                  <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action with Parallax -->
    <section class="relative z-10 py-32 px-6">
      <div class="container mx-auto max-w-4xl text-center">
        <div class="animate-fade-in-up">
          <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
            ¿Listo para comenzar tu viaje de
            <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">aprendizaje?</span>
          </h2>
          <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Explora todas las herramientas y recursos que hemos preparado para fortalecer tus habilidades comunicativas
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <router-link 
              to="/tutorial" 
              class="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
            >
              <span class="relative z-10 flex items-center">
                <svg class="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                </svg>
                Ver Tutorial
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating Elements -->
    <div class="fixed top-1/4 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-60"></div>
    <div class="fixed top-1/3 right-20 w-6 h-6 bg-purple-400 rounded-full animate-float animation-delay-2000 opacity-60"></div>
    <div class="fixed bottom-1/4 left-20 w-5 h-5 bg-pink-400 rounded-full animate-float animation-delay-4000 opacity-60"></div>
    <div class="fixed bottom-1/3 right-10 w-3 h-3 bg-blue-400 rounded-full animate-float animation-delay-1000 opacity-60"></div>
  </div>
</template>

<script setup>
// Add custom styles for animations
const style = document.createElement('style')
style.textContent = `
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  .bg-grid-pattern {
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
  }
`
document.head.appendChild(style)
</script>

<style scoped>
/* Additional custom animations */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgba(255, 255, 255, 0.75) }
}

.typewriter {
  overflow: hidden;
  border-right: .15em solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}
</style>