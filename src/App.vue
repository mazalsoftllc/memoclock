<template>
  <div id="app">
    <img alt="Vue logo" src="https://i.ibb.co/ryBbTTC/logo-animado.gif" style="max-width: 180px;">    
    
    <!-- Muestra el contenido de la vista actual -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
