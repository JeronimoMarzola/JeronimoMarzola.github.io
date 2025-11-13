<template>
  <section id="features" class="py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"></div>
    <div class="absolute inset-0 bg-black/30"></div>
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="floating-card absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl rotate-12"></div>
      <div class="floating-card-delayed absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl -rotate-12"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6">
          <span class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contenidos del Curso
          </span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explora nuestros materiales educativos diseñados para desarrollar tus habilidades comunicativas
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Podcast Evidence -->
        <div class="feature-card group relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
              Podcast Educativo
            </h3>
            
            <p class="text-gray-300 mb-6 leading-relaxed">
              Escucha nuestro podcast sobre comunicación efectiva y desarrollo de habilidades orales.
            </p>
            
            <button 
              @click="$emit('open-modal', 'podcast')"
              class="group/btn w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span class="flex items-center justify-center">
                Escuchar Podcast
                <svg class="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <!-- Scientific Poster -->
        <div class="feature-card group relative bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
              Póster Científico
            </h3>
            
            <p class="text-gray-300 mb-6 leading-relaxed">
              Visualiza nuestro póster científico sobre las competencias comunicativas en el ámbito académico.
            </p>
            
            <button 
              @click="$emit('open-modal', 'poster')"
              class="group/btn w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span class="flex items-center justify-center">
                Ver Póster
                <svg class="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <!-- Tutorial Video -->
        <div class="feature-card group relative bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
          <div class="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
              Video Tutorial
            </h3>
            
            <p class="text-gray-300 mb-6 leading-relaxed">
              Aprende técnicas avanzadas de comunicación con nuestro video tutorial interactivo.
            </p>
            
            <button 
              @click="$emit('open-modal', 'tutorial')"
              class="group/btn w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span class="flex items-center justify-center">
                Ver Tutorial
                <svg class="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <!-- Script Evidence -->
        <div class="feature-card group relative bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
          <div class="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
              Script del Podcast
            </h3>
            
            <p class="text-gray-300 mb-6 leading-relaxed">
              Lee el guion completo de nuestro podcast y profundiza en los temas de comunicación.
            </p>
            
            <button 
              @click="$emit('open-modal', 'script')"
              class="group/btn w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span class="flex items-center justify-center">
                Leer Script
                <svg class="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <!-- Interactive Learning -->
        <div class="feature-card group relative bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-indigo-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">
              Aprendizaje Interactivo
            </h3>
            
            <p class="text-gray-300 mb-6 leading-relaxed">
              Participa en actividades interactivas diseñadas para mejorar tus habilidades comunicativas.
            </p>
            
            <button 
              @click="scrollToSection('interactive')"
              class="group/btn w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span class="flex items-center justify-center">
                Comenzar
                <svg class="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <!-- Assessment Tools -->
        <div class="feature-card group relative bg-gradient-to-br from-teal-900/50 to-green-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-teal-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
          <div class="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-green-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">
              Herramientas de Evaluación
            </h3>
            
            <p class="text-gray-300 mb-6 leading-relaxed">
              Evalúa tu progreso con nuestras herramientas de autoevaluación y seguimiento.
            </p>
            
            <button 
              @click="scrollToSection('assessment')"
              class="group/btn w-full bg-gradient-to-r from-teal-600 to-green-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span class="flex items-center justify-center">
                Evaluar
                <svg class="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(5deg); }
  50% { transform: translateY(0px) rotate(0deg); }
  75% { transform: translateY(10px) rotate(-5deg); }
}

@keyframes floatingCard {
  0%, 100% { transform: translateY(0px) rotate(12deg); }
  50% { transform: translateY(-20px) rotate(12deg); }
}

@keyframes floatingCardDelayed {
  0%, 100% { transform: translateY(0px) rotate(-12deg); }
  50% { transform: translateY(-30px) rotate(-12deg); }
}

.floating-card {
  animation: floatingCard 8s ease-in-out infinite;
}

.floating-card-delayed {
  animation: floatingCardDelayed 10s ease-in-out infinite 2s;
}

.feature-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-card:hover {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .feature-card {
    margin-bottom: 1.5rem;
  }
}
</style>