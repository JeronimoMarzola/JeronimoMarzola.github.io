import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement>()

  const checkVisibility = () => {
    if (!elementRef.value) return

    const rect = elementRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    
    // Element is visible when it's in the viewport
    isVisible.value = rect.top < windowHeight * 0.8 && rect.bottom > 0
  }

  onMounted(() => {
    checkVisibility()
    window.addEventListener('scroll', checkVisibility)
    window.addEventListener('resize', checkVisibility)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', checkVisibility)
    window.removeEventListener('resize', checkVisibility)
  })

  return {
    isVisible,
    elementRef
  }
}

export function useParallax(speed = 0.5) {
  const translateY = ref(0)
  let ticking = false

  const updateParallax = () => {
    const scrolled = window.pageYOffset
    translateY.value = scrolled * speed
    ticking = false
  }

  const requestTick = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax)
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', requestTick)
    updateParallax() // Initial call
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', requestTick)
  })

  return {
    translateY
  }
}

export function useMouseEffect() {
  const mouseX = ref(0)
  const mouseY = ref(0)

  const updateMousePosition = (e: MouseEvent) => {
    mouseX.value = (e.clientX / window.innerWidth - 0.5) * 2
    mouseY.value = (e.clientY / window.innerHeight - 0.5) * 2
  }

  onMounted(() => {
    window.addEventListener('mousemove', updateMousePosition)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition)
  })

  return {
    mouseX,
    mouseY
  }
}