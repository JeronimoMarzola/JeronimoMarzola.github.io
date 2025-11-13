<template>
  <div class="min-h-screen bg-black">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">HC</span>
              </div>
            </div>
            <div class="hidden md:block ml-10">
              <div class="flex items-baseline space-x-4">
                <a 
                  v-for="item in navigation" 
                  :key="item.name"
                  @click="scrollToSection(item.href)"
                  class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300 hover:bg-white/10"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-gray-300 hover:text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-300"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <Transition name="mobile-menu">
        <div v-if="mobileMenuOpen" class="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              v-for="item in navigation"
              :key="item.name"
              @click="scrollToSection(item.href); mobileMenuOpen = false"
              class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-white/10"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- Hero Section -->
    <LandingHero />

    <!-- Features Section -->
    <FeaturesSection @open-modal="openModal" />

    <!-- Team Section -->
    <TeamSection />

    <!-- Interactive Modal -->
    <InteractiveModal
      :is-open="modalOpen"
      :type="modalType"
      :title="modalTitle"
      @close="closeModal"
    />

    <!-- Footer -->
    <footer class="bg-black border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">HC</span>
              </div>
              <span class="ml-3 text-white font-bold text-xl">Habilidades Comunicativas</span>
            </div>
            <p class="text-gray-400 leading-relaxed">
              Desarrollando competencias comunicativas para el éxito académico y profesional.
            </p>
          </div>
          
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul class="space-y-2">
              <li v-for="item in navigation" :key="item.name">
                <a
                  @click="scrollToSection(item.href)"
                  class="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300"
                >
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Contacto</h3>
            <div class="space-y-2 text-gray-400">
              <p>Universidad Católica del Norte</p>
              <p>Curso Habilidades Comunicativas</p>
              <p>manuel.marzola@alumnos.ucn.cl</p>
            </div>
          </div>
        </div>
        
        <div class="border-t border-white/10 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © 2024 Habilidades Comunicativas - Universidad Católica del Norte
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LandingHero from '../../components/LandingHero.vue'
import FeaturesSection from '../../components/FeaturesSection.vue'
import TeamSection from '../../components/TeamSection.vue'
import InteractiveModal from '../../components/InteractiveModal.vue'

const mobileMenuOpen = ref(false)
const modalOpen = ref(false)
const modalType = ref<'pdf' | 'audio' | 'image' | 'video'>('pdf')
const modalTitle = ref('')

const navigation = [
  { name: 'Inicio', href: 'hero' },
  { name: 'Contenidos', href: 'features' },
  { name: 'Equipo', href: 'team' },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const openModal = (type: 'pdf' | 'audio' | 'image' | 'video') => {
  modalType.value = type
  
  const titles = {
    pdf: 'Script del Podcast',
    audio: 'Podcast Educativo',
    image: 'Póster Científico',
    video: 'Video Tutorial'
  }
  
  modalTitle.value = titles[type]
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
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

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #8b5cf6, #ec4899);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #7c3aed, #db2777);
}
</style>