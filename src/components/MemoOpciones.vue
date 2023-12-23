<template>
  <b-jumbotron>

    <template #header>¡Recordatorios de forma sencilla!</template>

    <template #lead>
      <h4>Selecciona una vista</h4>
    </template>

    <hr class="my-4">

    <p>
      Crear, editar y gestionar tus notas de forma rápida y organizada.
    </p>

    <router-link to="/calendario">
      <b-button variant="primary" class="btn-lg mr-10" style="background-color: #048AFF; color: white;">
        🗓 Vista Calendario
      </b-button>
    </router-link>

    <router-link to="/lista">
      <b-button variant="primary" class="btn-lg mr-10" style="background-color: #B100E8; color: white;">
        📝 Vista Lista
      </b-button>
    </router-link>

   
  </b-jumbotron>
</template>

<script>
export default {
  name: 'MemoOpciones',
};
</script>

<style>
.mr-10 {
  margin-right: 10px;
}
</style>
