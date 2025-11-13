import { createRouter, createWebHistory } from 'vue-router'

// Import pages
import ModernLanding from '../pages/ModernLanding.vue'
import LandingPage from '../pages/Landing/LandingPage.vue'
import Home from '../pages/Home/Home.vue'
import Team from '../pages/Team/Team.vue'
import Evidence from '../pages/Evidence/Evidence.vue'
import Tutorial from '../pages/Tutorial/Tutorial.vue'

const routes = [
  {
    path: '/',
    name: 'ModernLanding',
    component: ModernLanding,
    meta: {
      title: 'Habilidades Comunicativas - Universidad Católica del Norte'
    }
  },
  {
    path: '/blog',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Inicio - Blog de Habilidades Comunicativas'
    }
  },
  {
    path: '/equipo',
    name: 'Team',
    component: Team,
    meta: {
      title: 'Presentación del Equipo - Blog de Habilidades Comunicativas'
    }
  },
  {
    path: '/evidencias',
    name: 'Evidence',
    component: Evidence,
    meta: {
      title: 'Evidencias del Curso - Blog de Habilidades Comunicativas'
    }
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial,
    meta: {
      title: 'Video Tutorial - Blog de Habilidades Comunicativas'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Blog de Habilidades Comunicativas'
  next()
})

export default router