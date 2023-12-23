// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notas: [],
    busqueda: '', // Agrega la propiedad busqueda al estado
  },
  mutations: {
    agregarNota(state, nuevaNota) {
      try {
        console.log('Agregando nueva nota:', nuevaNota);
        if (!nuevaNota || !nuevaNota.titulo || !nuevaNota.contenido) {
          throw new Error('La nueva nota no tiene la estructura correcta.');
        }

        // Obtén el último índice de la colección
        const ultimoIndice = state.notas.length > 0 ? state.notas[state.notas.length - 1].id : 0;

        // Asigna un nuevo id utilizando el último índice más 1
        nuevaNota.id = ultimoIndice + 1;

        // Agrega la nueva nota al estado
        state.notas.push(nuevaNota);

        console.log('Notas después de agregar:', state.notas);
      } catch (error) {
        console.error('Error al agregar una nota:', error.message);
      }
    },
    
    eliminarNota(state, id) {
      try {
        console.log('Eliminando nota con ID:', id);

        // Filtra las notas, manteniendo solo aquellas cuyo ID no coincide con el ID proporcionado
        state.notas = state.notas.filter((nota) => nota.id !== id);

        console.log('Notas después de eliminar:', state.notas);
      } catch (error) {
        console.error('Error al eliminar una nota:', error.message);
      }
    },
    
    buscarNotas(state, busqueda) {
      // Actualiza la propiedad busqueda en el estado
      state.busqueda = busqueda;

      // Muestra un log con la búsqueda actual
      console.log('Realizando búsqueda:', busqueda);
    },
    // Otras mutaciones...
    
  },
  actions: {
    // Define tus acciones aquí
  },
  getters: {
    // Define tus getters aquí
    notasFiltradas: (state) => {
      if (!state.busqueda) {
        return state.notas;
      }

      return state.notas.filter(
        (nota) =>
          nota.titulo.toLowerCase().includes(state.busqueda.toLowerCase()) ||
          nota.contenido.toLowerCase().includes(state.busqueda.toLowerCase())
      );
    },
  },
});
