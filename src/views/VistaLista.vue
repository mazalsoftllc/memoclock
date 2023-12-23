<template>
  <div>
    <MemoBusqueda />
    <b-collapse id="crearNota" visible>
      <!-- Agrega tu formulario de creación de notas aquí -->
    </b-collapse>
    <div class="panel-notas">
      <NotaLista :notas="notas" @editar-nota="editarNota" @eliminar-nota="eliminarNota" />
    </div>
    <MemoNuevaNota />
  </div>
</template>

<script>
import MemoBusqueda from '@/components/MemoBusqueda.vue';
import NotaLista from '@/components/NotaLista.vue';  // Asegúrate de importar correctamente
import MemoNuevaNota from '@/components/MemoNuevaNota.vue';

export default {
  components: {
    MemoBusqueda,
    NotaLista,
    MemoNuevaNota,
  },
  computed: {
    notas() {
      // Implementa la lógica para obtener las notas del store
      return this.$store.state.notas;  // Ajusta según tu estructura Vuex
    },
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    editarNota(nota) {
      // Lógica para editar la nota
      // Puedes abrir un modal de edición o navegar a una página de edición
    },
    // eslint-disable-next-line no-unused-vars
    eliminarNota(id) {
      
       // Lógica para eliminar la nota del store
       //this.notas = this.notas.filter((nota) => nota.id !== id);
       // También puedes usar vuex para realizar la eliminación
       this.$store.commit('eliminarNota', id);
    },
  },
};
</script>

<style>
/* Estilos específicos para VistaLista */
.panel-notas {
  max-height: 400px;
  overflow-y: auto;
}
</style>
