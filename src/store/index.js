// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Define tu estado aquí
  },
  mutations: {
    // Define tus mutaciones aquí
    agregarNota(state, nuevaNota) {
        state.notas.push(nuevaNota);
      },
      actualizarNota(state, notaActualizada) {
        const index = state.notas.findIndex(n => n.id === notaActualizada.id);
        if (index !== -1) {
          state.notas.splice(index, 1, notaActualizada);
        }
      },
      eliminarNota(state, notaId) {
        state.notas = state.notas.filter(n => n.id !== notaId);
      },
  },
  actions: {
    // Define tus acciones aquí
  },
  getters: {
    // Define tus getters aquí
  },
});
