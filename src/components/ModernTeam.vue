<template>
  <section id="equipo" class="py-20 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
          <div class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
          Nuestro Equipo
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Conoce a nuestro 
          <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Equipo
          </span>
        </h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Profesionales dedicados a potenciar tus habilidades comunicativas con experiencia y compromiso académico.
        </p>
      </div>

      <!-- Team Member -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Left: Image and Basic Info -->
            <div class="p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-cyan-50">
              <div class="text-center">
                <!-- Profile Picture Placeholder -->
                <div class="relative mx-auto mb-6">
                  <div class="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                    <span class="text-white font-bold text-3xl">MJ</span>
                  </div>
                  <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <div class="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <h3 class="text-2xl font-bold text-slate-900 mb-2">Manuel Jeronimo</h3>
                <h4 class="text-lg font-semibold text-blue-600 mb-4">Marzola Medina</h4>
                
                <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                  Estudiante de Comunicación
                </div>

                <!-- Contact Info -->
                <div class="space-y-3 text-left max-w-xs mx-auto">
                  <div class="flex items-center space-x-3 text-slate-600">
                    <Mail :size="20" class="text-blue-500" />
                    <span class="text-sm">manuel.marzola@alumnos.ucn.cl</span>
                  </div>
                  <div class="flex items-center space-x-3 text-slate-600">
                    <Phone :size="20" class="text-blue-500" />
                    <span class="text-sm">+56 9 XXXX XXXX</span>
                  </div>
                  <div class="flex items-center space-x-3 text-slate-600">
                    <MapPin :size="20" class="text-blue-500" />
                    <span class="text-sm">Universidad Católica del Norte</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Detailed Info -->
            <div class="p-8 lg:p-12">
              <div class="space-y-6">
                <div>
                  <h4 class="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <User :size="20" class="text-blue-500 mr-2" />
                    Sobre mí
                  </h4>
                  <p class="text-slate-600 leading-relaxed">
                    Estudiante apasionado por el desarrollo de habilidades comunicativas y la formación académica. 
                    Me especializo en crear contenido educativo efectivo y accesible para estudiantes universitarios.
                  </p>
                </div>

                <div>
                  <h4 class="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <Award :size="20" class="text-blue-500 mr-2" />
                    Habilidades y Competencias
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Comunicación Oral</span>
                    <span class="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">Redacción</span>
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">Análisis</span>
                    <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Investigación</span>
                    <span class="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">Docencia</span>
                  </div>
                </div>

                <div>
                  <h4 class="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <Users :size="20" class="text-blue-500 mr-2" />
                    Disponibilidad
                  </h4>
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span class="text-slate-600 font-medium">Disponible para consultas y asesorías</span>
                  </div>
                </div>

                <!-- Social Links -->
                <div class="pt-4 border-t border-slate-200">
                  <div class="flex space-x-4">
                    <button class="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button class="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button class="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { User, Mail, Phone, MapPin, Award, Users } from 'lucide-vue-next'
</script>

<style scoped>
/* Additional custom styles if needed */
</style>