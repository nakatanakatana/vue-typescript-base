import Vue from 'vue';
import Vuex from 'vuex';
import {storiesOf} from '@storybook/vue';

import {createStore} from "../store";
import CountViewComponent from '../components/countView.vue';
import CountButtonComponent from '../components/countButton.vue';
import HomeComponent from '../pages/home.vue';

Vue.use(Vuex);

const store = createStore();

storiesOf('countView', module)
  .add('count 1', () => ({
    components: {CountViewComponent},
    template: '<count-view-component :count=1></count-view-component>',
  }))
  .add('count 99999', () => ({
    components: {CountViewComponent},
    template: '<count-view-component :count=99999></count-view-component>',
  }))
  .add('button', () => ({
    components: {CountButtonComponent},
    template: '<count-button-component></count-button-component>',
    store: store,
  }))
  .add('homePage', () => ({
    components: {HomeComponent},
    template: '<home-component></home-component>',
    store: store,
  }));

