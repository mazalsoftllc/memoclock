<template>
  <!-- Contenedor principal de la aplicación con ID "app" -->
  <div id="app">
    <!-- Imagen del logo de Vue con enlace alternativo y estilo -->
    <img alt="Vue logo" src="https://i.ibb.co/ryBbTTC/logo-animado.gif" style="max-width: 180px;">

    <!-- Muestra el contenido de la vista actual utilizando el componente de router-view -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App', // Nombre del componente
};
</script>

<style>
/* Estilos globales para el contenedor principal con el ID "app" */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* Familia de fuentes para el texto */
  -webkit-font-smoothing: antialiased; /* Suaviza los bordes de las fuentes en Webkit */
  -moz-osx-font-smoothing: grayscale; /* Suaviza los bordes de las fuentes en Firefox */
  text-align: center; /* Centra el contenido del texto */
  color: #2c3e50; /* Color del texto principal */
  margin-top: 60px; /* Margen superior de 60px */
}
</style>
