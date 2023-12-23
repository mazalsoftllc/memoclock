// Importa Vue y VueRouter para manejar la navegación
import Vue from 'vue';
import VueRouter from 'vue-router';

// Importa tus componentes de vista
import VistaCalendario from './views/VistaCalendario.vue';
import VistaInicial from './views/VistaInicial.vue';
import VistaLista from './views/VistaLista.vue';

// Usa VueRouter en el proyecto
Vue.use(VueRouter);

// Define las rutas de la aplicación
const routes = [
  { path: '/', component: VistaInicial }, // Ruta de la vista inicial
  { path: '/calendario', component: VistaCalendario }, // Ruta de la vista de calendario
  { path: '/lista', component: VistaLista }, // Ruta de la vista de lista

  // Agrega más rutas según sea necesario
];

// Crea una instancia de VueRouter
const router = new VueRouter({
  routes,
  mode: 'history', // O 'hash' si prefieres usar hash en la URL
});

// Exporta la instancia de VueRouter para su uso en otros archivos
export default router;
