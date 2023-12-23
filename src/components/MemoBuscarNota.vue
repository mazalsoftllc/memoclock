<!-- MemoBuscarNota.vue -->
<template>
    <div>
      <!-- Formulario para buscar notas por fecha y hora -->
      <b-form @submit.prevent="buscarNotas">
        <b-form-group label="Fecha" class="mb-3">
          <!-- Componente de Bootstrap-Vue para seleccionar la fecha -->
          <b-form-datepicker v-model="fechaBusqueda" required></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Hora" class="mb-3">
          <!-- Componente de Bootstrap-Vue para seleccionar la hora -->
          <b-form-timepicker v-model="horaBusqueda" required></b-form-timepicker>
        </b-form-group>
        <b-button type="submit" variant="primary">Buscar Notas</b-button>
      </b-form>
  
      <!-- Puedes mostrar aquí las notas encontradas -->
      <!-- Utiliza el componente NotaLista o MemoLista (si ya lo tienes) para mostrar las notas -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fechaBusqueda: null,
        horaBusqueda: null,
      };
    },
    methods: {
      buscarNotas() {
        // Lógica para buscar notas por fecha y hora
        // Puedes utilizar el store Vuex para manejar las notas
        const fechaHoraBusqueda = {
          fecha: this.fechaBusqueda,
          hora: this.horaBusqueda,
        };
        this.$store.commit('buscarNotasPorFechaYHora', fechaHoraBusqueda);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos específicos para MemoBuscarNota si es necesario */
  </style>
  