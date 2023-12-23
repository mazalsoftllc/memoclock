<template>
  <div>

     <!-- Incluye el componente MemoNavegacion aquí -->
     <MemoNavegacion />

    <MemoBusqueda @buscar-notas="buscarNotas" />
    <b-collapse id="crearNota" visible>
      <!-- Agrega tu formulario de creación de notas aquí -->
    </b-collapse>
    <div class="panel-notas">
      <NotaLista :notas="notasFiltradas" @editar-nota="editarNota" @eliminar-nota="eliminarNota" />
    </div>
    <MemoNuevaNota @nota-agregada="notaAgregada" />
  </div>
</template>

<script>
import MemoBusqueda from '@/components/MemoBusqueda.vue';
import NotaLista from '@/components/NotaLista.vue';
import MemoNuevaNota from '@/components/MemoNuevaNota.vue';
import MemoNavegacion from '@/components/MemoNavegacion.vue';


export default {
  components: {
    MemoBusqueda,
    NotaLista,
    MemoNuevaNota,
    MemoNavegacion,
  },
  data() {
    return {
      notasFiltradas: [],
    };
  },
  computed: {
    notas() {
      return this.$store.state.notas;
    },
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    editarNota(nota) {
      // Lógica para editar la nota
    },
    eliminarNota(id) {
      this.$store.commit('eliminarNota', id);
    },
    buscarNotas(busqueda) {
      this.filtrarNotas(busqueda);
    },
    filtrarNotas(busqueda) {
      this.notasFiltradas = this.notas.filter(
        nota =>
          nota.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
          nota.contenido.toLowerCase().includes(busqueda.toLowerCase())
      );
    },
    notaAgregada() {
      // Llama a buscarNotas con la última búsqueda realizada
      const ultimaBusqueda = this.$route.query.busqueda || '';
      this.buscarNotas(ultimaBusqueda);
    },
  },
  mounted() {
    // Llama a una acción para cargar las notas al iniciar el componente
    this.$store.dispatch('cargarNotas');
  },
  watch: {
    '$route.query.busqueda'(nuevaBusqueda) {
      this.filtrarNotas(nuevaBusqueda || '');
    },
    notas: {
      handler() {
        // Puedes agregar lógica adicional si es necesario cuando cambian las notas
      },
      deep: true,
    },
  },
};
</script>

<style>
.panel-notas {
  max-height: 400px;
  overflow-y: auto;
}
</style>
