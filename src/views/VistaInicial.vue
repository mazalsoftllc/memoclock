<!-- src/views/VistaInicial.vue -->

<template>
  <div >
    <!-- Incluye el componente MemoCarrusel aquí -->
    <MemoCarrusel />
    <MemoOpciones />
    
  </div>
</template>

<script>
// Importa el componente MemoCarrusel
import MemoCarrusel from '@/components/MemoCarrusel.vue'; // Ajusta la ruta según la estructura de tu proyecto
// Importa el componente MemoOpciones
import MemoOpciones from '@/components/MemoOpciones.vue'; // Ajusta la ruta según la estructura de tu proyecto

export default {
  name: 'VistaInicial',
  components: {
    MemoCarrusel, // Registra el componente MemoCarrusel en esta vista
    MemoOpciones, // Registra el componente MemoCarrusel en esta vista
  },
};
</script>

<style scoped>
/* Estilos específicos para esta vista si es necesario */
</style>
