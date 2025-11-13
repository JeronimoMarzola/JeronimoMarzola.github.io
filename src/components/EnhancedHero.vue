<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Advanced Animated Background -->
    <div class="absolute inset-0 z-0">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      <div class="absolute inset-0 bg-black/20"></div>
      
      <!-- Animated Blobs with Parallax -->
      <div 
        class="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 blur-2xl"
        :style="{ transform: `translateY(${parallaxY * 0.5}px)` }"
      ></div>
      <div 
        class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-15 blur-3xl"
        :style="{ transform: `translateY(${parallaxY * 0.3}px)` }"
      ></div>
      <div 
        class="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25 blur-xl"
        :style="{ transform: `translateY(${parallaxY * 0.7}px)` }"
      ></div>
      
      <!-- Interactive Particle System -->
      <div class="particles-container absolute inset-0">
        <div 
          v-for="n in particleCount" 
          :key="n" 
          class="particle absolute w-1 h-1 bg-white rounded-full opacity-60"
          :style="{
            left: `${particlePositions[n]?.x || Math.random() * 100}%`,
            top: `${particlePositions[n]?.y || Math.random() * 100}%`,
            transform: `translate(${mouseX * 20}px, ${mouseY * 20}px)`
          }"
        ></div>
      </div>

      <!-- Mouse Follower Effect -->
      <div 
        class="mouse-follower absolute w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl pointer-events-none"
        :style="{
          left: `${mouseFollower.x}px`,
          top: `${mouseFollower.y}px`,
          transform: 'translate(-50%, -50%)'
        }"
      ></div>
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div 
        class="hero-content"
        :class="{ 'animate-in': isVisible }"
        ref="heroContent"
      >
        <!-- Main Title with Advanced Animations -->
        <h1 class="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
          <span class="block transform hover:scale-105 transition-transform duration-500">
            <span class="text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Habilidades
            </span>
          </span>
          <span class="block text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse-delayed">
            Comunicativas
          </span>
        </h1>
        
        <!-- Subtitle with Typewriter Effect -->
        <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed typewriter-text">
          {{ typewriterText }}
        </p>
        
        <!-- CTA Buttons with Advanced Hover Effects -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            @click="scrollToSection('evidence')"
            class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span class="relative z-10 flex items-center">
              Explorar Contenidos
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            @click="scrollToSection('team')"
            class="group relative px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span class="relative z-10 flex items-center">
              Conocer al Equipo
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </span>
          </button>
        </div>

        <!-- Feature Preview Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="feature-preview group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
            @click="scrollToSection(feature.section)"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon"></path>
              </svg>
            </div>
            <h3 class="text-white font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator with Animation -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="scroll-indicator w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollAnimation, useParallax, useMouseEffect } from '../../composables/useAnimations'

const { isVisible, elementRef: heroContent } = useScrollAnimation()
const { translateY: parallaxY } = useParallax(0.5)
const { mouseX, mouseY } = useMouseEffect()

const typewriterText = ref('')
const fullText = 'Es un gusto darles la bienvenida al curso Habilidades Comunicativas. Este espacio ha sido diseñado para fortalecer sus competencias de lectura, escritura, oralidad y escucha, fundamentales para la vida universitaria y profesional.'

const mouseFollower = ref({ x: 0, y: 0 })
const particleCount = 30
const particlePositions = ref<Array<{x: number, y: number}>>([])

const features = [
  {
    title: 'Podcast Educativo',
    description: 'Contenido audio sobre comunicación efectiva',
    section: 'evidence',
    icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
  },
  {
    title: 'Póster Científico',
    description: 'Visualización de competencias comunicativas',
    section: 'evidence',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    title: 'Video Tutorial',
    description: 'Aprendizaje visual con técnicas avanzadas',
    section: 'evidence',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Typewriter effect
const typeWriter = (text: string, index: number = 0) => {
  if (index < text.length) {
    typewriterText.value = text.substring(0, index + 1)
    setTimeout(() => typeWriter(text, index + 1), 50)
  }
}

// Mouse follower
const updateMouseFollower = (e: MouseEvent) => {
  mouseFollower.value = {
    x: e.clientX,
    y: e.clientY
  }
}

// Initialize particles
const initializeParticles = () => {
  for (let i = 0; i < particleCount; i++) {
    particlePositions.value.push({
      x: Math.random() * 100,
      y: Math.random() * 100
    })
  }
}

onMounted(() => {
  // Start typewriter effect
  setTimeout(() => typeWriter(fullText), 1000)
  
  // Initialize particles
  initializeParticles()
  
  // Add mouse follower
  window.addEventListener('mousemove', updateMouseFollower)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouseFollower)
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(90deg); }
  50% { transform: translateY(0px) rotate(180deg); }
  75% { transform: translateY(20px) rotate(270deg); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

@keyframes pulseDelayed {
  0%, 100% { opacity: 1; }
  25% { opacity: 0.7; }
  75% { opacity: 0.9; }
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

.text-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-content {
  animation: fadeInUp 1s ease-out;
}

.hero-content.animate-in .feature-preview {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-pulse-delayed {
  animation: pulseDelayed 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.typewriter-text {
  overflow: hidden;
  border-right: 2px solid transparent;
  animation: blink-caret 1s infinite;
}

@keyframes blink-caret {
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: white; }
}

.particle {
  animation: float 10s ease-in-out infinite;
}

.scroll-indicator {
  animation: bounce 2s infinite;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 3rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
  }
}
</style>