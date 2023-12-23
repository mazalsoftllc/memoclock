import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; // Importa VueRouter
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import store from './store'; // Importa el store Vuex

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';

Vue.config.productionTip = false;

// Configura e importa VueRouter
Vue.use(VueRouter);

// Importa tu archivo de configuración de router
import router from './router';

// Usar Bootstrap Vue en el proyecto
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  store,  // Agrega el store Vuex a la instancia Vue.
  router, // Agrega el router al objeto de la instancia Vue.
  render: (h) => h(App),
}).$mount('#app');
