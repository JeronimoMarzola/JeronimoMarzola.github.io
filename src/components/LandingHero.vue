<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      <div class="absolute inset-0 bg-black/20"></div>
      
      <!-- Floating Elements -->
      <div class="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
      <div class="floating-element-delayed absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-15 blur-2xl"></div>
      <div class="floating-element absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25 blur-lg"></div>
      
      <!-- Particle System -->
      <div class="particles-container absolute inset-0">
        <div v-for="n in 50" :key="n" class="particle absolute w-1 h-1 bg-white rounded-full opacity-60"></div>
      </div>
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="hero-content">
        <h1 class="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
          <span class="block transform hover:scale-105 transition-transform duration-500">
            Habilidades
          </span>
          <span class="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Comunicativas
          </span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Es un gusto darles la bienvenida al curso Habilidades Comunicativas. 
          Este espacio ha sido diseñado para fortalecer sus competencias de lectura, escritura, oralidad y escucha, 
          fundamentales para la vida universitaria y profesional.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            @click="scrollToSection('evidence')"
            class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span class="relative z-10">Explorar Contenidos</span>
            <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            @click="scrollToSection('team')"
            class="group relative px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
          >
            Conocer al Equipo
          </button>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Animate particles
  const particles = document.querySelectorAll('.particle')
  particles.forEach((particle, index) => {
    const delay = Math.random() * 5
    const duration = 5 + Math.random() * 10
    const size = Math.random() * 3 + 1
    
    particle.style.animationDelay = `${delay}s`
    particle.style.animationDuration = `${duration}s`
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`
    
    particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`
  })
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

.hero-content {
  animation: fadeInUp 1s ease-out;
}

.floating-element {
  animation: float 6s ease-in-out infinite;
}

.floating-element-delayed {
  animation: float 8s ease-in-out infinite 2s;
}

.particle {
  animation: float 10s ease-in-out infinite;
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