<template>
  <section class="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-100 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
    </div>

    <!-- Navigation -->
    <nav class="relative z-10 max-w-7xl mx-auto px-6 py-6">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
            <span class="text-white font-bold text-lg">HC</span>
          </div>
          <span class="text-slate-800 font-semibold text-xl">Habilidades Comunicativas</span>
        </div>
        
        <div class="hidden md:flex space-x-8">
          <a v-for="item in navItems" :key="item" 
             @click="scrollToSection(item.toLowerCase())"
             class="text-slate-600 hover:text-blue-600 font-medium cursor-pointer transition-all duration-300 hover:scale-105">
            {{ item }}
          </a>
        </div>

        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-md">
          <svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="mobile-menu">
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4">
          <a v-for="item in navItems" :key="item"
             @click="scrollToSection(item.toLowerCase()); mobileMenuOpen = false"
             class="block py-2 text-slate-600 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-300">
            {{ item }}
          </a>
        </div>
      </Transition>
    </nav>

    <!-- Hero Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <!-- Left Content -->
        <div class="space-y-8">
          <div class="space-y-6">
            <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <div class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              Curso Universitario 2024
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Desarrolla tus 
              <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Habilidades
              </span>
              <span class="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Comunicativas
              </span>
            </h1>
            
            <p class="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Es un gusto darles la bienvenida al curso Habilidades Comunicativas. 
              Este espacio ha sido diseñado para fortalecer sus competencias de lectura, 
              escritura, oralidad y escucha, fundamentales para la vida universitaria y profesional.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <button @click="scrollToSection('contenidos')"
                    class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Explorar Contenidos</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button @click="scrollToSection('equipo')"
                    class="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
              Conocer al Equipo
            </button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600">5</div>
              <div class="text-sm text-slate-600">Módulos</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-cyan-600">12</div>
              <div class="text-sm text-slate-600">Horas</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-slate-800">100%</div>
              <div class="text-sm text-slate-600">Online</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Visual Element -->
        <div class="relative">
          <div class="relative w-full max-w-lg mx-auto">
            <!-- Main Visual -->
            <div class="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-2xl">
              <div class="grid grid-cols-2 gap-4">
                <div v-for="(item, index) in visualItems" :key="index"
                     class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <component :is="item.icon" :size="24" class="text-white" />
                  </div>
                  <h3 class="font-semibold text-slate-800 mb-2">{{ item.title }}</h3>
                  <p class="text-sm text-slate-600">{{ item.description }}</p>
                </div>
              </div>
            </div>
            
            <!-- Floating Elements -->
            <div class="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-80 rotate-12 animate-bounce"></div>
            <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl opacity-70 -rotate-12 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BookOpen, Pencil, Mic, Ear } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const navItems = ['Inicio', 'Contenidos', 'Equipo', 'Contacto']

const visualItems = [
  {
    title: 'Lectura',
    description: 'Comprensión y análisis',
    icon: BookOpen
  },
  {
    title: 'Escritura',
    description: 'Redacción efectiva',
    icon: Pencil
  },
  {
    title: 'Oralidad',
    description: 'Expresión verbal',
    icon: Mic
  },
  {
    title: 'Escucha',
    description: 'Comprensión auditiva',
    icon: Ear
  }
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>