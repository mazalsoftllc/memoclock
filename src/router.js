// src/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';

// Importa tus componentes de vista aquí
import VistaCalendario from './views/VistaCalendario.vue';
import VistaInicial from './views/VistaInicial.vue';
import VistaLista from './views/VistaLista.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: VistaInicial },
  { path: '/calendario', component: VistaCalendario  },
  { path: '/lista', component: VistaLista  },
 
  // Agrega más rutas según sea necesario
];

const router = new VueRouter({
  routes,
  mode: 'history', // O 'hash' si prefieres usar hash en la URL
});

export default router;
