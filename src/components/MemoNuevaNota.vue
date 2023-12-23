<template>
  <div>
    <b-button v-b-modal.crearNotaModal variant="success" class="boton-flotante" style="font-size: 2em;">
      <b-icon-plus style="font-size: 1.5em;"></b-icon-plus>
    </b-button>

    <b-modal id="crearNotaModal" title="Nueva Nota" hide-footer @hidden="resetModalState">
      <!-- Contenido del formulario -->
      <b-form @submit.prevent="guardarNota">
        <b-form-group label="Título" :state="nuevaNota.titulo ? true : null">
          <b-form-input v-model="nuevaNota.titulo" required></b-form-input>
        </b-form-group>

        <b-form-group label="Contenido" :state="nuevaNota.contenido ? true : null">
          <b-form-textarea v-model="nuevaNota.contenido"></b-form-textarea>
        </b-form-group>

        <!-- Botones personalizados para OK y Cancelar con espacio entre ellos -->
        <b-row class="mt-3">
          <b-col cols="12" class="d-flex justify-content-center">
            <b-button type="submit" variant="success" class="mb-3" style="margin-right: 10px;">Nueva Nota</b-button>
            <b-button @click="cancelar" variant="secondary" class="mb-3" style="margin-left: 10px;">Cancelar</b-button>
          </b-col>
        </b-row>

        <!-- Imágenes de éxito o error -->
        <div v-if="successMessage" class="text-center">
          <img src="@/assets/nueva-nota-agregada.gif" alt="Nueva nota agregada con éxito" class="img-fluid" style="max-width: 100%;" />
        </div>
        <div v-if="errorMessage">
          <img src="@/assets/error-nueva-nota.gif" alt="Error al agregar nueva nota" class="img-fluid" style="max-width: 100%;" />
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevaNota: {
        id: null,
        titulo: '',
        contenido: '',
      },
      successMessage: '',
      errorMessage: '',
    };
  },
  methods: {
    guardarNota() {
      if (this.nuevaNota.titulo && this.nuevaNota.contenido) {
        // Lógica para guardar la nueva nota en el store
        try {
          this.$store.commit('agregarNota', this.nuevaNota);
          this.successMessage = `"${this.nuevaNota.titulo}" se agregó con éxito.`;
          setTimeout(() => {
            this.limpiarFormulario();
          }, 3000); // Cerrar el modal después de 3 segundos
        } catch (error) {
          console.error('Error al agregar la nota:', error.message);
          this.errorMessage = `No se guardó "${this.nuevaNota.titulo}".`;
        }
      } else {
        // Puedes agregar un mensaje o notificación de error aquí si lo deseas
        console.error('Por favor, completa todos los campos antes de guardar.');
      }
    },

    cancelar() {
      this.limpiarFormulario();
    },
    limpiarFormulario() {
      this.nuevaNota = { id: null, titulo: '', contenido: '' };
      this.successMessage = '';
      this.errorMessage = '';
      this.$bvModal.hide('crearNotaModal');
    },
    resetModalState() {
      // Reiniciar el estado del modal cuando se oculta
      this.limpiarFormulario();
    },

    handleSuccessModalHidden() {
      // Emitir evento indicando que se agregó una nueva nota con éxito
      this.$emit('notaAgregadaExitosamente');
    },

    handleErrorModalHidden() {
      // Emitir evento indicando que hubo un error al agregar la nota
      this.$emit('errorAlAgregarNota');
    },
  },
};
</script>

<style scoped>
.boton-flotante {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
