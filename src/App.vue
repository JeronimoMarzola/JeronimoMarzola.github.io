<template>
  <router-view />
</template>

<script setup lang="ts">
// App component is now simplified - all navigation and layout is handled by individual pages
</script>

<style>
/* Global styles for smooth scrolling and modern appearance */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for modern browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0f0f0f;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #8b5cf6, #ec4899);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #7c3aed, #db2777);
}

/* Ensure full height for all layouts */
body, #app {
  min-height: 100vh;
}
</style>