<template>
  <div class="barra-busqueda">
    <b-form inline class="d-flex align-items-center justify-content-center flex-wrap">
      <b-form-group label="" class="mb-3 mb-sm-0">
        <b-input v-model="busqueda" placeholder="Título o Contenido" class="mr-sm-3 input-grande" />
      </b-form-group>
      <b-button @click="buscar" variant="primary" class="mb-3 btn-grande">
        <b-icon-search></b-icon-search> Buscar
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'MemoBusqueda',
  data() {
    return {
      busqueda: '',
    };
  },
  methods: {
    buscar() {
      // Emitir un evento para que el componente padre maneje la búsqueda
      this.$emit('buscar-notas', this.busqueda);
    },
  },
};
</script>

<style scoped>
.barra-busqueda {
  margin: 40px 0;
}

/* Ajuste para mostrar en una sola fila en pantallas pequeñas */
@media (max-width: 576px) {
  .barra-busqueda .form-group {
    width: 100%;
  }

  .barra-busqueda .btn {
    width: 100%;
    margin-top: 10px; /* Agregado un margen superior para separar el botón */
  }

  /* Estilos para hacer más grande el input en pantallas pequeñas */
  .barra-busqueda .input-grande {
    width: 100%;
  }

  /* Estilos para hacer más grande el botón en pantallas pequeñas */
  .barra-busqueda .btn-grande {
    width: 100%;
  }
}

/* Estilos para pantallas más grandes */
@media (min-width: 576px) {
  .barra-busqueda .form-group {
    width: 60%; /* Ancho ajustado para el formulario en pantallas grandes */
    margin-right: 10px; /* Añadido margen derecho */
  }

  .barra-busqueda .btn {
    width: 40%; /* Ancho ajustado para el botón en pantallas grandes */
    margin-top: 0; /* Eliminado el margen superior */
  }

  /* Estilos para hacer más alto el input en pantallas grandes */
  .barra-busqueda .input-grande {
    height: 38px; /* Ajuste de altura */
  }

  /* Estilos para hacer más alto el botón en pantallas grandes */
  .barra-busqueda .btn-grande {
    height: 38px; /* Ajuste de altura */
  }
}
</style>
