<template>
  <section id="team" class="py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    <div class="absolute inset-0 bg-black/40"></div>
    
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="team-blob absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl"></div>
      <div class="team-blob-delayed absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-black text-white mb-6">
          <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Nuestro Equipo
          </span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Conoce a los profesionales detrás de este proyecto educativo
        </p>
      </div>

      <!-- Team Members Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Main Team Member -->
        <div class="team-card main-member group relative bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-purple-400/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 md:col-span-2 lg:col-span-1">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <!-- Profile Image Container -->
          <div class="relative mb-8">
            <div class="profile-image-container w-32 h-32 mx-auto relative">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div class="relative w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center border-4 border-white/20 group-hover:border-white/40 transition-all duration-500 transform group-hover:scale-110">
                <span class="text-4xl font-black text-white">MJ</span>
              </div>
            </div>
            
            <!-- Status Indicator -->
            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div class="w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
            </div>
          </div>

          <div class="text-center relative z-10">
            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
              Manuel Jeronimo
            </h3>
            <h4 class="text-lg font-bold text-gray-300 mb-4">
              Marzola Medina
            </h4>
            
            <div class="mb-6">
              <span class="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-2">
                Estudiante de Comunicación
              </span>
              <p class="text-gray-400 text-sm leading-relaxed">
                Universidad Católica del Norte
              </p>
            </div>

            <p class="text-gray-300 mb-6 leading-relaxed">
              Apasionado por el desarrollo de habilidades comunicativas y la creación de contenido educativo innovador. 
              Especializado en producción de podcasts y materiales multimedia para el aprendizaje.
            </p>

            <!-- Skills -->
            <div class="mb-6">
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="skill-tag bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-bold border border-purple-500/30">
                  Comunicación Oral
                </span>
                <span class="skill-tag bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-xs font-bold border border-pink-500/30">
                  Producción Podcast
                </span>
                <span class="skill-tag bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/30">
                  Diseño Multimedia
                </span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3 justify-center">
              <button 
                @click="showContact = !showContact"
                class="group/btn bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <span class="flex items-center">
                  Contactar
                  <svg class="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </span>
              </button>
              
              <button 
                @click="showBio = !showBio"
                class="group/btn border-2 border-white/30 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
              >
                <span class="flex items-center">
                  Biografía
                  <svg class="w-4 h-4 ml-2 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </span>
              </button>
            </div>

            <!-- Contact Info (Expandable) -->
            <div v-if="showContact" class="mt-6 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 animate-fadeIn">
              <div class="space-y-2 text-sm">
                <div class="flex items-center text-gray-300">
                  <svg class="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  manuel.marzola@alumnos.ucn.cl
                </div>
                <div class="flex items-center text-gray-300">
                  <svg class="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +56 9 1234 5678
                </div>
              </div>
            </div>

            <!-- Bio (Expandable) -->
            <div v-if="showBio" class="mt-6 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 animate-fadeIn">
              <p class="text-sm text-gray-300 leading-relaxed">
                Manuel es un estudiante comprometido con el desarrollo de competencias comunicativas. 
                Ha participado en múltiples proyectos académicos relacionados con la comunicación efectiva, 
                producción de contenido multimedia y educación innovadora. Su pasión por la enseñanza 
                lo ha llevado a crear recursos educativos accesibles y engaging para sus compañeros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showContact = ref(false)
const showBio = ref(false)
</script>

<style scoped>
@keyframes teamBlob {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes skillPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.team-blob {
  animation: teamBlob 10s ease-in-out infinite;
}

.team-blob-delayed {
  animation: teamBlob 12s ease-in-out infinite 3s;
}

.team-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.team-card:hover {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
}

.main-member {
  position: relative;
  overflow: hidden;
}

.main-member::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  transition: all 0.5s;
  opacity: 0;
}

.main-member:hover::before {
  animation: shine 0.5s ease-in-out;
}

@keyframes shine {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
}

.profile-image-container {
  transition: all 0.5s ease;
}

.skill-tag {
  animation: skillPulse 3s ease-in-out infinite;
}

.skill-tag:nth-child(2) { animation-delay: 0.5s; }
.skill-tag:nth-child(3) { animation-delay: 1s; }

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}

@media (max-width: 768px) {
  .main-member {
    grid-column: span 1;
  }
}
</style>