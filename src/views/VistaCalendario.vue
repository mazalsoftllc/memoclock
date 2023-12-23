<!-- src/views/VistaInicial.vue -->

<template>
  <div >
    

    <!-- Incluye el componente MemoNavegacion aquí -->
    <MemoNavegacion />
    
    <!-- Incluye el componente MemoCalendario aquí -->
    <MemoCalendario />
        
  </div>
</template>

<script>
// Importa el componente MemoCarrusel
import MemoCalendario from '@/components/MemoCalendario.vue'; // Ajusta la ruta según la estructura de tu proyecto

// Importa el componente MemoNavegacion
import MemoNavegacion from '@/components/MemoNavegacion.vue'; // Ajusta la ruta según la estructura de tu proyecto

export default {
  name: 'VistaInicial',
  components: {
    MemoNavegacion,
    MemoCalendario, // Registra el componente MemoCarrusel en esta vista
  },
};
</script>

<style scoped>
/* Estilos específicos para esta vista si es necesario */
</style>
