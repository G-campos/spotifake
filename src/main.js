import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faSun } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

//Adicionar o icone direto aqui, a importação é feita automaticamente
library.add(faHeart, faPause, faPlay, faSun); //regular
library.add(faSearch); //solid
library.add(faSpotify); //Brands

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');