<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Animated Background Elements -->
    <div class="fixed inset-0 z-0 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute top-1/3 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-10 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <!-- Floating Particles -->
      <div class="absolute inset-0">
        <div class="floating-particle absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div class="floating-particle absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-50 animation-delay-1000"></div>
        <div class="floating-particle absolute top-1/2 left-3/4 w-2 h-2 bg-pink-400 rounded-full opacity-40 animation-delay-2000"></div>
        <div class="floating-particle absolute bottom-1/4 left-1/3 w-4 h-4 bg-indigo-400 rounded-full opacity-30 animation-delay-3000"></div>
      </div>
    </div>

    <!-- Header Navigation -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-4 group">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <span class="text-white font-bold text-lg">HC</span>
            </div>
            <div>
              <h1 class="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">Habilidades Comunicativas</h1>
              <p class="text-sm text-gray-300 font-light">Blog Educativo</p>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link 
              to="/" 
              class="nav-link group"
              :class="{ 'active': $route.path === '/' }"
            >
              <span class="relative z-10">Inicio</span>
              <div class="nav-link-glow"></div>
            </router-link>
            <router-link 
              to="/equipo" 
              class="nav-link group"
              :class="{ 'active': $route.path === '/equipo' }"
            >
              <span class="relative z-10">Equipo</span>
              <div class="nav-link-glow"></div>
            </router-link>
            <router-link 
              to="/evidencias" 
              class="nav-link group"
              :class="{ 'active': $route.path === '/evidencias' }"
            >
              <span class="relative z-10">Evidencias</span>
              <div class="nav-link-glow"></div>
            </router-link>
            <router-link 
              to="/tutorial" 
              class="nav-link group"
              :class="{ 'active': $route.path === '/tutorial' }"
            >
              <span class="relative z-10">Tutorial</span>
              <div class="nav-link-glow"></div>
            </router-link>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu" 
            class="md:hidden p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
          >
            <svg class="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-white/20 animate-slide-down">
          <div class="flex flex-col space-y-3 pt-4">
            <router-link 
              to="/" 
              @click="isMobileMenuOpen = false"
              class="mobile-nav-link group"
              :class="{ 'active': $route.path === '/' }"
            >
              <span class="relative z-10">Inicio</span>
              <div class="mobile-nav-link-glow"></div>
            </router-link>
            <router-link 
              to="/equipo" 
              @click="isMobileMenuOpen = false"
              class="mobile-nav-link group"
              :class="{ 'active': $route.path === '/equipo' }"
            >
              <span class="relative z-10">Equipo</span>
              <div class="mobile-nav-link-glow"></div>
            </router-link>
            <router-link 
              to="/evidencias" 
              @click="isMobileMenuOpen = false"
              class="mobile-nav-link group"
              :class="{ 'active': $route.path === '/evidencias' }"
            >
              <span class="relative z-10">Evidencias</span>
              <div class="mobile-nav-link-glow"></div>
            </router-link>
            <router-link 
              to="/tutorial" 
              @click="isMobileMenuOpen = false"
              class="mobile-nav-link group"
              :class="{ 'active': $route.path === '/tutorial' }"
            >
              <span class="relative z-10">Tutorial</span>
              <div class="mobile-nav-link-glow"></div>
            </router-link>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="pt-20">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-white/5 backdrop-blur-lg text-white py-16 mt-20 border-t border-white/20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="group">
            <h3 class="text-xl font-bold mb-6 text-white group-hover:text-blue-300 transition-colors">Habilidades Comunicativas</h3>
            <p class="text-gray-300 font-light leading-relaxed">
              Blog educativo diseñado para fortalecer competencias de lectura, escritura, oralidad y escucha.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-6 text-white">Navegación</h3>
            <ul class="space-y-3 text-gray-300">
              <li><router-link to="/" class="hover:text-white transition-colors duration-300 group flex items-center"><span class="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>Inicio</router-link></li>
              <li><router-link to="/equipo" class="hover:text-white transition-colors duration-300 group flex items-center"><span class="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>Equipo</router-link></li>
              <li><router-link to="/evidencias" class="hover:text-white transition-colors duration-300 group flex items-center"><span class="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>Evidencias</router-link></li>
              <li><router-link to="/tutorial" class="hover:text-white transition-colors duration-300 group flex items-center"><span class="w-2 h-2 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>Tutorial</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-6 text-white">Contacto</h3>
            <p class="text-gray-300 font-light leading-relaxed">
              Proyecto académico - Universidad Central del Norte
            </p>
            <p class="text-gray-300 mt-3 font-light">
              Curso: Habilidades Comunicativas B2A
            </p>
          </div>
        </div>
        <div class="border-t border-white/20 mt-12 pt-8 text-center">
          <p class="text-gray-400 font-light">&copy; 2024 Blog de Habilidades Comunicativas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
.nav-link {
  @apply px-6 py-3 text-gray-300 hover:text-white font-semibold transition-all duration-300 relative overflow-hidden rounded-2xl backdrop-blur-sm border border-transparent hover:border-white/30;
}

.nav-link-glow {
  @apply absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 transition-opacity duration-300;
}

.nav-link:hover .nav-link-glow,
.nav-link.active .nav-link-glow {
  @apply opacity-100;
}

.nav-link.active {
  @apply text-white border-white/30;
}

.mobile-nav-link {
  @apply px-6 py-4 text-gray-300 hover:text-white font-semibold transition-all duration-300 relative overflow-hidden rounded-2xl backdrop-blur-sm border border-transparent hover:border-white/30;
}

.mobile-nav-link-glow {
  @apply absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 transition-opacity duration-300;
}

.mobile-nav-link:hover .mobile-nav-link-glow,
.mobile-nav-link.active .mobile-nav-link-glow {
  @apply opacity-100;
}

.mobile-nav-link.active {
  @apply text-white border-white/30;
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

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out;
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

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>