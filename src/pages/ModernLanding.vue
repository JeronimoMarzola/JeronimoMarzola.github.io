<template>
  <div class="min-h-screen bg-white">
    <!-- Modern Hero Section -->
    <ModernHero />

    <!-- Modern Content Section -->
    <ModernContent @open-modal="openModal" />

    <!-- Modern Team Section -->
    <ModernTeam />

    <!-- Interactive Modal -->
    <InteractiveModal
      :is-open="modalOpen"
      :type="modalType"
      :title="modalTitle"
      @close="closeModal"
    />

    <!-- Modern Footer -->
    <footer class="bg-slate-900 text-white">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid md:grid-cols-4 gap-8">
          <!-- Brand -->
          <div class="col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <span class="text-white font-bold text-xl">HC</span>
              </div>
              <span class="text-white font-bold text-2xl">Habilidades Comunicativas</span>
            </div>
            <p class="text-slate-300 leading-relaxed max-w-md">
              Desarrollando competencias comunicativas para el éxito académico y profesional. 
              Un espacio diseñado para fortalecer tus habilidades de lectura, escritura, oralidad y escucha.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul class="space-y-2">
              <li><a href="#inicio" class="text-slate-300 hover:text-white transition-colors duration-300">Inicio</a></li>
              <li><a href="#contenidos" class="text-slate-300 hover:text-white transition-colors duration-300">Contenidos</a></li>
              <li><a href="#equipo" class="text-slate-300 hover:text-white transition-colors duration-300">Equipo</a></li>
              <li><a href="#contacto" class="text-slate-300 hover:text-white transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="font-semibold text-lg mb-4">Contacto</h4>
            <div class="space-y-2 text-slate-300">
              <div class="flex items-center space-x-2">
                <Mail :size="16" class="text-slate-400" />
                <span class="text-sm">manuel.marzola@alumnos.ucn.cl</span>
              </div>
              <div class="flex items-center space-x-2">
                <MapPin :size="16" class="text-slate-400" />
                <span class="text-sm">Universidad Católica del Norte</span>
              </div>
              <div class="flex items-center space-x-2">
                <Clock :size="16" class="text-slate-400" />
                <span class="text-sm">Disponible L-V 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-slate-800 mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-slate-400 text-sm">
              © 2024 Habilidades Comunicativas - Universidad Católica del Norte
            </p>
            <div class="flex space-x-4 mt-4 md:mt-0">
              <button class="p-2 bg-slate-800 text-slate-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Twitter :size="20" />
              </button>
              <button class="p-2 bg-slate-800 text-slate-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Linkedin :size="20" />
              </button>
              <button class="p-2 bg-slate-800 text-slate-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Instagram :size="20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, MapPin, Clock, Twitter, Linkedin, Instagram } from 'lucide-vue-next'
import ModernHero from '../components/ModernHero.vue'
import ModernContent from '../components/ModernContent.vue'
import ModernTeam from '../components/ModernTeam.vue'
import InteractiveModal from '../components/InteractiveModal.vue'

const modalOpen = ref(false)
const modalType = ref<'pdf' | 'audio' | 'image' | 'video'>('pdf')
const modalTitle = ref('')

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
/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #06b6d4);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #0891b2);
}
</style>