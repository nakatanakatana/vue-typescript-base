import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import {createStore} from './store';

// register the plugin
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Buefy);

import HomeComponent from './pages/home.vue';

const store = createStore();
const router = new VueRouter({
  routes: [
    {path: '/', component: HomeComponent},
  ],
});

const v = new Vue({
  el: '#app-main',
  router: router,
  store: store,
});
