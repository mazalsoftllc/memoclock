<template>
  <div class="nota-lista">
    <b-row class="justify-content-center">
      <b-col cols="12" md="8">
        <div v-for="nota in notas" :key="nota.id" class="nota-card">
          <b-card :title="nota.titulo" class="mb-2" bg-variant="primary" text-variant="white">
            <template v-if="!nota.editando">
              <p class="card-text">{{ nota.contenido }}</p>
              <b-badge v-if="nota.fechaActualizacion" variant="info">{{ nota.fechaActualizacion }}</b-badge>
              <b-badge v-else variant="info">{{ nota.fechaCreacion }}</b-badge>
              <div class="acciones">
                <b-button @click="editarNota(nota)" variant="light" class="mr-2">
                  <b-icon-pencil></b-icon-pencil> Editar
                </b-button>
                <b-button @click="eliminarNota(nota.id)" variant="danger">
                  <b-icon-trash></b-icon-trash> Eliminar
                </b-button>
              </div>
            </template>
            <template v-else>
              <b-form @submit.prevent="guardarCambios(nota)">
                <b-form-group label="Título">
                  <b-form-input v-model="nota.titulo" required></b-form-input>
                </b-form-group>
                <b-form-group label="Contenido">
                  <b-form-textarea v-model="nota.contenido" required></b-form-textarea>
                </b-form-group>
                <b-button type="submit" variant="success">Guardar</b-button>
                <b-button @click="cancelarEdicion(nota)" variant="light" class="ml-2">Cancelar</b-button>
              </b-form>
            </template>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    notas: Array,
  },
  methods: {
    editarNota(nota) {
      // Marcar la nota como editando
      this.$set(nota, 'editando', true);
    },
    guardarCambios(nota) {
      // Guardar los cambios y marcar la nota como no editando
      this.$set(nota, 'editando', false);
      // Emitir el evento para que el componente padre pueda manejar la actualización en el store
      this.$emit('actualizar-nota', nota);
    },
    cancelarEdicion(nota) {
      // Cancelar la edición y marcar la nota como no editando
      this.$set(nota, 'editando', false);
    },
    eliminarNota(id) {
      // Emitir el evento para que el componente padre pueda manejar la eliminación
      this.$emit('eliminar-nota', id);
    },
  },
};
</script>

<style scoped>
.nota-lista {
  background-color: #f5f5f5; /* Color de fondo */
  padding: 20px; /* Espaciado interno */
  min-height: 100vh; /* Altura mínima de la pantalla */
}

.nota-card {
  margin-bottom: 20px; /* Espaciado entre tarjetas */
}

.acciones {
  margin-top: 10px;
}

.acciones .btn {
  margin-right: 10px; /* Separación entre botones Editar y Eliminar */
}
</style>
