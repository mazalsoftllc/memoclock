<template>
  <b-container class="text-center mb-5">
    <span v-for="(item, index) in breadcrumbs" :key="index">
      <router-link :to="item.to" class="mr-1">{{ item.text }}</router-link>
      <span v-if="index < breadcrumbs.length - 1">|</span>
    </span>
  </b-container>
</template>

<script>
export default {
  name: 'MemoNavegacion',
  computed: {
    breadcrumbs() {
      return [
        { text: 'Inicio', to: '/' },
        { text: 'Vista Calendario', to: '/calendario' },
        { text: 'Vista Lista', to: '/lista' },
      ];
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.mb-5 {
  margin-bottom: 3rem; /* Ajusta el valor según tus necesidades */
}

/* Estilo adicional para los enlaces */
.router-link {
  color: #3498db; /* Azul enlace */
  text-decoration: none; /* Elimina el subrayado predeterminado */
}

/* Estilo adicional para los separadores */
span {
  color: #333; /* Color del separador */
  font-weight: bold; /* Puedes ajustar según tus preferencias */
  margin: 0 5px; /* Ajusta el espacio entre el enlace y el separador */
}
</style>
