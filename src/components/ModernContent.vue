<template>
  <section id="contenidos" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
          <div class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
          Contenido Educativo
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Materiales de 
          <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Aprendizaje
          </span>
        </h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Explora nuestros recursos educativos diseñados para desarrollar tus habilidades comunicativas 
          de manera integral y efectiva.
        </p>
      </div>

      <!-- Content Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Podcast Card -->
        <div class="group bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100/50 overflow-hidden">
          <div class="relative">
            <div class="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <div class="relative">
                <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mic :size="40" class="text-white" />
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700 shadow-md">
                Audio
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
              Podcast Educativo
            </h3>
            <p class="text-slate-600 mb-4 leading-relaxed">
              Escucha nuestro podcast sobre comunicación efectiva y desarrollo de habilidades orales con ejemplos prácticos.
            </p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2 text-sm text-slate-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>15 min</span>
              </div>
              
              <button @click="$emit('open-modal', 'audio')" 
                      class="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2">
                <span>Escuchar</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Scientific Poster Card -->
        <div class="group bg-white rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-100/50 overflow-hidden">
          <div class="relative">
            <div class="h-48 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
              <div class="relative">
                <div class="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image :size="40" class="text-white" />
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700 shadow-md">
                Visual
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
              Póster Científico
            </h3>
            <p class="text-slate-600 mb-4 leading-relaxed">
              Visualiza nuestro póster científico sobre las competencias comunicativas en el ámbito académico.
            </p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2 text-sm text-slate-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>HD</span>
              </div>
              
              <button @click="$emit('open-modal', 'image')" 
                      class="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2">
                <span>Ver</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Script Card -->
        <div class="group bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-100/50 overflow-hidden">
          <div class="relative">
            <div class="h-48 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
              <div class="relative">
                <div class="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileText :size="40" class="text-white" />
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700 shadow-md">
                Documento
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
              Script del Podcast
            </h3>
            <p class="text-slate-600 mb-4 leading-relaxed">
              Revisa el guión completo de nuestro podcast educativo con notas y referencias incluidas.
            </p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2 text-sm text-slate-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>PDF</span>
              </div>
              
              <button @click="$emit('open-modal', 'pdf')" 
                      class="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center space-x-2">
                <span>Leer</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Video Tutorial Card -->
        <div class="group bg-white rounded-2xl border border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-100/50 overflow-hidden">
          <div class="relative">
            <div class="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
              <div class="relative">
                <div class="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Video :size="40" class="text-white" />
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700 shadow-md">
                Video
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
              Video Tutorial
            </h3>
            <p class="text-slate-600 mb-4 leading-relaxed">
              Aprende con nuestro video tutorial sobre técnicas de comunicación efectiva en contextos académicos.
            </p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2 text-sm text-slate-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v5a2 2 0 002 2h2a2 2 0 002-2v-5M9 10V8a2 2 0 012-2h2a2 2 0 012 2v2M9 10V8m0 0V6a2 2 0 012-2h2a2 2 0 012 2v2" />
                </svg>
                <span>8 min</span>
              </div>
              
              <button @click="$emit('open-modal', 'video')" 
                      class="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-2">
                <span>Ver</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Additional Card - Interactive Guide -->
        <div class="group bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-100/50 overflow-hidden md:col-span-2 lg:col-span-1">
          <div class="relative">
            <div class="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
              <div class="relative">
                <div class="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BookOpen :size="40" class="text-white" />
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700 shadow-md">
                Guía
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
              Guía Interactiva
            </h3>
            <p class="text-slate-600 mb-4 leading-relaxed">
              Descubre nuestra guía interactiva con ejercicios prácticos para mejorar tu comunicación.
            </p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2 text-sm text-slate-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>15 págs</span>
              </div>
              
              <button class="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center space-x-2">
                <span>Explorar</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mic, FileText, Image, Video, BookOpen } from 'lucide-vue-next'

// Component content is ready for modal interactions
defineEmits(['open-modal'])
</script>

<style scoped>
/* Additional custom styles if needed */
</style>