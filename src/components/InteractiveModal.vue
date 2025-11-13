<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/80 backdrop-blur-sm" 
          @click="closeModal"
        ></div>
        
        <!-- Modal Content -->
        <div class="relative z-10 w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-white/20 bg-black/30 backdrop-blur-lg">
            <h3 class="text-2xl font-black text-white">
              <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {{ title }}
              </span>
            </h3>
            <button 
              @click="closeModal"
              class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white hover:text-purple-300 transition-all duration-300 transform hover:scale-110"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div class="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <!-- PDF Viewer -->
            <div v-if="type === 'pdf'" class="relative">
              <div class="bg-white rounded-2xl p-8 shadow-2xl">
                <div class="flex items-center justify-center h-96 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-dashed border-purple-300">
                  <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <h4 class="text-xl font-bold text-gray-800 mb-2">Script del Podcast</h4>
                    <p class="text-gray-600 mb-4">Guion completo de nuestro podcast educativo</p>
                    <button 
                      @click="downloadFile"
                      class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      Descargar PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Audio Player -->
            <div v-else-if="type === 'audio'" class="relative">
              <div class="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 shadow-2xl">
                <div class="text-center mb-8">
                  <div class="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                    </svg>
                  </div>
                  <h4 class="text-2xl font-bold text-white mb-2">Podcast Educativo</h4>
                  <p class="text-purple-200">Comunicación Efectiva en el Ámbito Académico</p>
                </div>

                <!-- Audio Controls -->
                <div class="bg-black/30 rounded-2xl p-6 mb-6">
                  <div class="flex items-center justify-center gap-4 mb-4">
                    <button class="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white hover:text-purple-300 transition-all duration-300 transform hover:scale-110">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path>
                      </svg>
                    </button>
                    
                    <button 
                      @click="togglePlay"
                      class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110"
                    >
                      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path v-if="!isPlaying" d="M8 5v14l11-7z"></path>
                        <path v-else d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
                      </svg>
                    </button>
                    
                    <button class="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white hover:text-purple-300 transition-all duration-300 transform hover:scale-110">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path>
                      </svg>
                    </button>
                  </div>

                  <!-- Progress Bar -->
                  <div class="mb-4">
                    <div class="bg-white/20 rounded-full h-2 mb-2">
                      <div 
                        class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        :style="{ width: progress + '%' }"
                      ></div>
                    </div>
                    <div class="flex justify-between text-sm text-purple-200">
                      <span>{{ formatTime(currentTime) }}</span>
                      <span>{{ formatTime(duration) }}</span>
                    </div>
                  </div>
                </div>

                <!-- Volume Control -->
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                  </svg>
                  <div class="flex-1 bg-white/20 rounded-full h-1">
                    <div class="bg-purple-500 h-1 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Image Viewer -->
            <div v-else-if="type === 'image'" class="relative">
              <div class="bg-white rounded-2xl p-6 shadow-2xl">
                <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 text-center">
                  <div class="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h4 class="text-2xl font-bold text-gray-800 mb-2">Póster Científico</h4>
                  <p class="text-gray-600 mb-6">Competencias Comunicativas en el Contexto Académico</p>
                  <button 
                    @click="viewImage"
                    class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Ver Póster Completo
                  </button>
                </div>
              </div>
            </div>

            <!-- Video Player -->
            <div v-else-if="type === 'video'" class="relative">
              <div class="bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div class="aspect-video bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                    <h4 class="text-2xl font-bold text-white mb-2">Video Tutorial</h4>
                    <p class="text-purple-200 mb-6">Técnicas Avanzadas de Comunicación</p>
                    <button 
                      @click="playVideo"
                      class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      Reproducir Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  isOpen: boolean
  type: 'pdf' | 'audio' | 'image' | 'video'
  title: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const isPlaying = ref(false)
const progress = ref(0)
const currentTime = ref(0)
const duration = ref(240) // 4 minutes

const closeModal = () => {
  emit('close')
  isPlaying.value = false
  progress.value = 0
  currentTime.value = 0
}

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    simulatePlayback()
  }
}

const simulatePlayback = () => {
  if (!isPlaying.value) return
  
  const interval = setInterval(() => {
    if (!isPlaying.value || currentTime.value >= duration.value) {
      clearInterval(interval)
      if (currentTime.value >= duration.value) {
        isPlaying.value = false
      }
      return
    }
    
    currentTime.value += 1
    progress.value = (currentTime.value / duration.value) * 100
  }, 1000)
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const downloadFile = () => {
  // Simulate file download
  const link = document.createElement('a')
  link.href = '/multimedia/podcast_script.pdf'
  link.download = 'Script_Podcast_Comunicacion.pdf'
  link.click()
}

const viewImage = () => {
  // Simulate image view
  window.open('/multimedia/scientific_poster.png', '_blank')
}

const playVideo = () => {
  // Simulate video play
  alert('Video tutorial sobre técnicas de comunicación - Duración: 5 minutos')
}

// Handle escape key
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: all 0.3s ease;
}

.modal-enter-from > div,
.modal-leave-to > div {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}
</style>