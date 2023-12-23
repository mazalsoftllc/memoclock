<!-- src/views/VistaInicial.vue -->

<template>
  <div >
    <!-- Incluye el componente MemoCarrusel aquí -->
    <MemoCalendario />
  </div>
</template>

<script>
// Importa el componente MemoCarrusel
import MemoCalendario from '@/components/MemoCalendario.vue'; // Ajusta la ruta según la estructura de tu proyecto

export default {
  name: 'MemoCalendario',
  components: {
    MemoCalendario, // Registra el componente MemoCarrusel en esta vista
  },
};
</script>

<style scoped>
/* Estilos específicos para esta vista si es necesario */
</style>
